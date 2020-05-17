import Vue from "vue";
import Vuex from "vuex";

import currentUser from "./modules/currentUser";
import users from "./modules/users";
import auth from "./modules/auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    currentUser,
    users,
    auth,
  },
});
