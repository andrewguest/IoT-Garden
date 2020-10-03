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
            >Name of new device (20 characters or less)</label
          >
          <div class="control has-icons-left">
            <input
              class="input has-text-centered"
              type="text"
              placeholder="Device Name"
              maxlength="20"
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
          <label class="label">Type of device</label>
          <div class="control">
            <div class="select">
              <select v-model="deviceType">
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
              class="textarea"
              placeholder="What does this device do or where is it located?"
            ></textarea>
          </div>
        </div>
        <!-- End of modal form -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="saveNewDevice()">
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
export default {
  name: "AddDevice",
  props: {
    showModal: Boolean,
  },
  setup() {
    let listOfDevices = [
      "Arduino",
      "Raspberry Pi",
      "esp8266",
      "esp32",
      "other",
    ];

    let deviceType = "";

    function currentDeviceType(currentOptionSelection) {
      return (this.deviceType = currentOptionSelection);
    }

    // ! This function should perform some actual work instead of just loggin to the console
    function saveNewDevice() {
      console.log("Saved new device!");
      console.log(this.deviceType);
    }

    return {
      saveNewDevice,
      listOfDevices,
      currentDeviceType,
      deviceType,
    };
  },
};
</script>