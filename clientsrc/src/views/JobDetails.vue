<template>
  <div class="JobDetails">
    <h1>{{job.title}}</h1>
    <h3>{{job.description}}</h3>
    <h2>${{job.startPrice}}</h2>
    <h4>{{start}}</h4>
    <h4>{{end}}</h4>
    <h4>{{job.location.lat}}</h4>
    <h4>{{job.location.lon}}</h4>
    <button @click="deleteJob">delete</button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "JobDetails",
  onRouterLeave(to, from, next) {
    commit("setActiveJob", {});
    next();
  },
  async mounted() {
    await this.$store.dispatch("getJobById", this.$route.params.jobId);
    if (this.$auth.isAuthenticated) {
      await this.$store.dispatch("getProfile");
    }
  },
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.$route.params.jobId);
    },
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
    },
    user() {
      return this.$store.state.user;
    },
    start() {
      return moment(String(this.job.startDate)).format("MM/DD/YYYY");
    },
    end() {
      return moment(String(this.job.startDate)).format("MM/DD/YYYY");
    },
  },
};
</script>

<style scoped>
</style>