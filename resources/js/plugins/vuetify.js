import Vue from "vue";
import Vuetify from "vuetify/lib";
import es from "vuetify/es5/locale/es";
import light from "./theme";

Vue.use(Vuetify);

const opts = {
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#2196F3",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
    },
  },
  lang: {
    locales: { es },
    current: "es",
  },
};

const opts1 = {
  theme: {
    themes: { light },
  },
};

export default new Vuetify(opts);
