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
          <label class="label">Name of new device</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Device Name" />
            <span class="icon is-small is-left">
              <i class="fas fa-seedling"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="email"
              placeholder="Email input"
              value="hello@"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>
        <!-- End of modal form -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="saveNewDevice()">
          Save changes
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
    // ! This function should perform some actual work instead of just loggin to the console
    function saveNewDevice() {
      console.log("Saved new device!");
    }

    return {
      saveNewDevice,
    };
  },
};
</script>