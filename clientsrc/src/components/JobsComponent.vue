<template>
  <div class="JobsComponent card">
    <img
      :src="openJob.img"
      class="card-img-top"
      alt="error loading image"
      type="button"
      @click="viewJob"
    />
    <div class="card-body">
      <h5 class="card-title" type="button" @click="viewJob">{{openJob.title}}</h5>
      <p class="card-text" type="button" @click="viewJob">{{openJob.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "JobsComponent",
  props: ["openJob"],
  data() {
    return {};
  },
  methods: {
    viewJob() {
      this.$store.dispatch("setActiveJob", this.openJob.id);
    },
  },
  computed: {
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