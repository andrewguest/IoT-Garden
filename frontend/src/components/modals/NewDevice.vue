<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add new device</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('close')"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- Start of modal form -->
        <div class="field">
          <label class="label"
            >Name of new device (40 characters or less) *</label
          >
          <div class="control has-icons-left">
            <input
              v-model="deviceName"
              class="input"
              type="text"
              placeholder="Device Name"
              maxlength="40"
              minlength="1"
              required
              id="new-device-name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-seedling"></i>
            </span>
          </div>
        </div>

        <!-- Adds a blank space between form elements (vertical space) -->
        <div class="field is-horizontal">
          <div class="field-label"></div>
        </div>

        <div class="field">
          <label class="label">Type of device *</label>
          <div class="control">
            <div class="select">
              <select v-model="deviceType" required id="new-device-type">
                <option
                  v-for="device in listOfDevices"
                  :key="device"
                  :value="device"
                >
                  {{ device }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Adds a blank space between form elements (vertical space) -->
        <div class="field is-horizontal">
          <div class="field-label"></div>
        </div>

        <div class="field">
          <label class="label">Description of device</label>
          <div class="control">
            <textarea
              v-model="deviceDescription"
              class="textarea"
              placeholder="What does this device do or where is it located?"
              id="new-device-description"
            ></textarea>
          </div>
        </div>
        <!-- End of modal form -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="saveNewDevice()" id="new-device-submit">
          Add device
        </button>
        <button class="button" @click="$emit('close')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import { useToast } from "vue-toastification";
import { ref } from "vue";
import axios from "axios";

export default {
  name: "AddDevice",
  props: {
    showModal: Boolean,
  },
  setup() {
    const toast = useToast();

    const listOfDevices = [
      "Arduino",
      "Raspberry Pi",
      "esp8266",
      "esp32",
      "other",
    ];

    var deviceName = ref("");
    var deviceType = ref("");
    var deviceDescription = ref("");

    function currentDeviceType(currentOptionSelection) {
      return (this.deviceType = currentOptionSelection);
    }

    // TODO: This function should perform some actual work instead of just logging to the console
    function saveNewDevice() {

      // TODO: Change this to port 5000 to work with the docker-compose setup
      // port 8000 is only for testing locally
      if(deviceName.value.length > 0 && deviceType.value.length > 0 && deviceDescription.value.length > 0) {
        axios.post("http://127.0.0.1:8000/device", {
          name: this.deviceName,
          type: this.deviceType,
          description: this.deviceDescription
        })
          .then((res) => {
            if(res.status === 201) {
              toast.success(`Added device: ${res.data['new device data']['Device name']}`, {
                timeout: 4000
              });
              this.deviceName = ""; // clear the input fields after creating device
              this.deviceType = "";
              this.deviceDescription = "";
            }
          })
          .catch((error) => {
            toast.error(`${error}`, { timeout: 4000 });
            console.log(error)
          });
      } else {
        toast.error("All fields are required", { timeout: 5000 })
      }
    }

    return {
      saveNewDevice,
      listOfDevices,
      currentDeviceType,
      deviceName,
      deviceType,
      deviceDescription
    };
  },
};
</script>