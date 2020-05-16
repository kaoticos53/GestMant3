import router from "../../routes";

const state = {
  usuario: {},
  user: {},
  error: "",
  isLogin: false
};

const getters = {};

const actions = {
  getUser({ commit }) {
    axios.get("/api/users/current").then(response => {
      commit("setUser", response.data);
    });
  },
  crearUsuario({ commit }, payload) {
    commit("setUsuario", {
      email: payload.email,
      password: payload.password
    });
  },
  loginUser({ commit }, user) {
    axios
      .post("api/login", {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          // save token
          localStorage.setItem("api_token", response.data.access_token);
          axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("api_token");
          router.push("home");
        }
      });
  },
  logoutUser() {
    //remove token
    localStorage.removeItem("api_token");
    axios.defaults.headers.common["Authorization"] = "";
    router.push("login");
  }
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setError(state, payload) {
    state.error = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
