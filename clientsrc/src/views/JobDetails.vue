<template>
  <div class="JobDetails">
    <h1>{{job.title}}</h1>
    <h3>{{job.description}}</h3>
    <h2>${{job.startPrice}}</h2>
    <h4>{{when}}</h4>

    <h4>{{job.location.lat}}</h4>
    <h4>{{job.location.lon}}</h4>
    <i class="far fa-trash-alt action text-danger" @click="deleteJob"></i>
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
    when() {
      if (this.job.startDate == this.job.endDate) {
        return moment(String(this.job.startDate)).format("MM/DD/YYYY");
      } else {
        return (
          moment(String(this.job.startDate)).format("MM/DD/YYYY") +
          " - " +
          moment(String(this.job.endDate)).format("MM/DD/YYYY")
        );
      }
    },
  },
};
</script>

<style scoped>
</style>