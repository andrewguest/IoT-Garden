<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-centered">
          <h1 class="is-size-2">System Info</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column">
          <ul v-if="!loading && data && data.length">
            <li v-for="(value, key) in data" :key="key">
              <p>{{ key }} : {{ value }}</p>
            </li>
          </ul>
          <p v-if="error !== null">
            {{ error.value }}
          </p>
        </div>
      </div>
    </section>
    <p v-if="loading">Still loading...</p>
    <button class="button is-primary" @click="logDataVar()">Log data</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  components: {},
  props: {},
  setup() {
    let data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    function checkForUpdates() {
      loading.value = true;
      axios.get("http://localhost:8000/system/update").then((res) => {
        loading.value = false;
        data = res.data;
        console.log(res);
      }).catch((err) => {
        loading.value = false;
        if (err.response) {
          console.log('Response:');
          console.warn(err.response.data.message);
          error.value = err.response.data.message;
        } else {
          console.log('Error');
          console.warn(err);
        }
      });
    }

    function logDataVar() {
      console.log(data);
      console.log(error.value);
    }

    onMounted(() => {
      checkForUpdates();
    });

    return {
      data,
      loading,
      error,
      logDataVar,
    };
  },
};
</script>


<style scoped>
</style>