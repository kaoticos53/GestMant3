import Vue from "vue";
import Vuex from "vuex";

import currentUser from "./modules/currentUser";
import auth from "./modules/auth.module";
import status from "./modules/status.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    status,
    auth,
  },
});
