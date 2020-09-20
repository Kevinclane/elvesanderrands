<template>
  <div class="jobs">
    <div class="container-fluid">
      <div class="row bg-white text-center py-5">
        <div class="col-12">
          <h2 class>Request Some Help</h2>
          <!-- MODAL FORM -->
          <button
            type="button"
            class="btn btn-success boxShadowCstm my-1"
            data-toggle="modal"
            data-target="#myModal"
            v-if="$auth.isAuthenticated"
          >
            <h2 class>New Request</h2>
          </button>
        </div>
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header bg-primary shadow-sm">
                <h4 class="modal-title text-white">New Request</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body shadow-sm container text-secondary">
                <!-- add submit method here -->
                <form @submit.prevent="addJob">
                  <div class="row justify-content-center">
                    <div class="col text-center">
                      <!-- add v-model -->
                      <h5>Title:</h5>
                      <input type="text" placeholder="Title" required v-model="newJob.title" />
                    </div>
                  </div>
                  <div class="row justify-content-center mt-3">
                    <div class="col text-center">
                      <!-- add v-model -->
                      <h5>Description:</h5>
                      <textarea
                        class="m-3"
                        rows="3"
                        type="text"
                        placeholder="Describe what you need help with..."
                        required
                        v-model="newJob.description"
                        style="width:90%;"
                      />
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col text-center">
                      <h5>Image (optional):</h5>
                      <input type="text" placeholder="Image Link" v-model="newJob.imgUrl" />
                    </div>
                    <div class="col text-center">
                      <h5>Starting Bid:</h5>
                      <input type="number" placeholder="Starting Bid" v-model="newJob.startPrice" />
                    </div>
                  </div>

                  <div class="row justify-content-center mt-3">
                    <div class="col text-center">
                      <h5>Start Date:</h5>
                      <input
                        type="date"
                        placeholder="Start Date"
                        required
                        v-model="newJob.startDate"
                      />
                    </div>
                    <div class="col text-center">
                      <h5>End Date:</h5>
                      <input type="date" placeholder="End Date" required v-model="newJob.endtDate" />
                    </div>
                  </div>
                  <div class="row mt-3 align-items-end">
                    <div class="col">
                      <h5>Estimated Hours:</h5>
                      <input type="number" placeholder="0" required v-model="newJob.estimatedHours" />
                    </div>
                    <div class="col text-center">
                      <button type="submit" class="btn btn-secondary btn-lg">Add Request</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer bg-primary shadow-sm">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <!-- END MODAL FORM -->
      </div>
      <div class="row bg-white p-3">
        <div class="col-12 list-container px-0">
          <div id="jobs" class="card-columns p-2" style="column-gap: 1rem;">
            <!-- CARD TEMPLATE API -->
            <jobComponent v-for="openJob in openJobs" :key="openJob.id" :openJob="openJob" />
            <!-- END CARD TEMPLATE -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobComponent from "@/components/JobsComponent.vue";
import moment from "moment";
export default {
  name: "Jobs",
  data() {
    return {
      newJob: {},
    };
  },
  async mounted() {
    await this.$store.dispatch("getOpenJobs");
  },
  methods: {
    addJob() {
      this.newJob.startDate = moment(this.newJob.startDate).format(
        "MM-DD-YYYY"
      );
      this.newJob.endDate = moment(this.newJob.endDate).format("MM-DD-YYYY");
      this.newJob.location = this.location;
      this.$store.dispatch("addNewJob", { ...this.newJob });
      this.newJob = {};
      $("#myModal").modal("hide");
    },
  },
  computed: {
    location() {
      return this.$store.state.myLocation;
    },
    openJobs() {
      return this.$store.state.openJobs;
    },
    user() {
      return this.$store.state.user;
    },
  },
  components: {
    JobComponent,
  },
};
</script>

<style scoped>
</style>