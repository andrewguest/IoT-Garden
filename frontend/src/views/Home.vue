<template>
  <div>
    <section class="section">
      <div class="columns">
        <div class="column is-offset-10">
          <button
            class="button is-primary"
            @click="refreshAllData()"
            id="refreshButton"
          >
            <span class="icon">
              <i class="fas fa-sync-alt"></i>
            </span>
            <span>Refresh all data</span>
          </button>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3" v-for="plant in fakeData" :key="plant.name">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ plant.name }}</p>
                  <p class="subtitle is-6">{{ plant.health }}</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Save</a>
              <a href="#" class="card-footer-item">Edit</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {
    // TODO: This should be pulled from the backend API
    const fakeData = [
      {
        name: "Plant 1",
        health: "Good",
      },
      {
        name: "Plant 2",
        health: "Okay",
      },
      {
        name: "Plant 3",
        health: "Bad",
      },
    ];

    function refreshAllData() {
      alert("Refreshing data");
    }

    return {
      fakeData,
      refreshAllData,
    };
  },
};
</script>


<style scoped>
#refreshButton {
  box-shadow: 2px 2px 1px lightgray;
}
</style>