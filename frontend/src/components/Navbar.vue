<template>
  <nav class="navbar is-light">
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/" id="nav-link">
          <a>Home</a>
        </router-link>
        <router-link class="navbar-item" to="/devices" id="nav-link">
          <a>Devices</a>
        </router-link>
        <router-link class="navbar-item" to="/system" id="nav-link">
          <a>System Info</a>
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="bd-tw-button button is-link"
                @click="updateShowModal(true)"
              >
                <span class="icon">
                  <i class="fas fa-plus"></i>
                </span>
                <span> Add a device </span>
              </a>
            </p>
            <p class="control">
              <a
                class="button is-dark"
                href="https://github.com/Growing-Tech/IoT-Garden"
                target="_blank"
              >
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <AddDevice v-if="showModal" @close="showModal = false" />
</template>

<script>
import { ref } from "vue";
import AddDevice from "./modals/NewDevice";

export default {
  name: "Navbar",
  props: {},
  components: {
    AddDevice,
  },
  setup() {
    const showModal = ref(false);

    function updateShowModal(newValue) {
      return (this.showModal = newValue);
    }

    return {
      showModal,
      updateShowModal,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: hsl(0, 0%, 29%);
}

nav {
  box-shadow: 0px 2px 5px lightgrey;
}

#nav-link:hover {
  background-color: lightgray;
  border-radius: 5px;
}
</style>