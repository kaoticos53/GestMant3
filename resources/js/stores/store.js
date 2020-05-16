import Vue from 'vue'
import Vuex from 'vuex'

import currentUser from './modules/currentUser'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    currentUser,
    users
  }
})
