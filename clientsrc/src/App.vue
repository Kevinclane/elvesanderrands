<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    this.$store.dispatch("getMyLocation");
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  methods: {
    findLocation() {
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          return "Geolocation is not supported by this browser.";
        }
      }

      function showPosition(position) {
        x.innerHTML =
          "Latitude: " +
          position.coords.latitude +
          "<br>Longitude: " +
          position.coords.longitude;
      }
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  font-family: "Cabin", sans-serif;
}
.boxShadowCstm {
  box-shadow: 4px 4px 5px black;
  border: 1px solid black;
}
.borderSm {
  border: 1px solid black;
}
</style>
