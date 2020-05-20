// import "./bootstrap";
import Vue from "vue";
import App from "./views/app";
import "./registerServiceWorker";
import router from "./router/routes.js";
import store from "./stores/store";
import vuetify from "./plugins/vuetify";

// import "./plugins/axios";
// window.$ = window.jQuery = require("jquery");

// let token = localStorage.getItem("api_token");

// axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// axios.defaults.headers.post["Content-Type"] = "application/json";

// window.token = token

// Set the base URL of the API
// ApiService.init(process.env.VUE_APP_ROOT_API)
//
// If token exists set header
// if (TokenService.getToken()) {
//  ApiService.setHeader()
//}

Vue.config.productionTip = false;

const app = new Vue({
  el: "#app",
  store,
  vuetify,
  router,
  render: (h) => h(App),
});

export default app;
