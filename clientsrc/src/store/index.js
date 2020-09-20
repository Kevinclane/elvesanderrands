import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    user: {},
    myLocation: {},
    activeJob: {},
    openJobs: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.user = profile;
    },
    setMyLocation(state, location) {
      state.myLocation = location
    },
    setActiveJob(state, job) {
      state.activeJob = job
    },
    setOpenJobs(state, jobs) {
      state.openJobs = jobs
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getMyLocation({ commit }) {
      let location = {}
      await navigator.geolocation.getCurrentPosition((position) => {
        (location.lat = position.coords.latitude),
          (location.lon = position.coords.longitude);
      })
      commit("setMyLocation", location)
    },


    //#region JOBS
    async getOpenJobs({ commit }) {
      try {
        let res = await api.get("jobs")
        commit("setOpenJobs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addNewJob({ commit }, job) {
      try {
        let res = await api.post("jobs", job)
        router.push({ name: "JobDetails", params: { jobId: res.data.id } });
      } catch (error) {
        console.error(error)
      }
    },
    async getJobById({ commit }, id) {
      try {
        let res = await api.get("jobs/" + id);
        commit("setActiveJob", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async setActiveJob({ commit }, id) {
      try {
        router.push({ name: "JobDetails", params: { jobId: id } })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteJob({ commit }, id) {
      try {
        let res = await api.delete("jobs/" + id)
        if (res.data) {
          router.push({ name: "Home", })
        }
      } catch (error) {
        console.error(error)
      }
    }
    //#endregion
  }
});
