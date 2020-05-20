import router from "../../router/routes";

const state = {
  user: {},
  error: "",
  isLogin: false,
};

const getters = {};

const actions = {};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
