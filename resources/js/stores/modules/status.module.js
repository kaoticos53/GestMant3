import router from "../../router/routes";

const state = {
  user: {},
  error: false,
  mensaje: "",
  isLogin: false,
};

const getters = {
  error: (state) => {
    return state.error;
  },
  mensaje: (state) => {
    return state.mensaje;
  },
};

const actions = {
  mensajeError({ commit }, mensaje) {
    commit("ponMensaje", mensaje);
  },
};

const mutations = {
  ponMensaje(state, mensaje) {
    state.mensaje = mensaje;
    state.error = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
