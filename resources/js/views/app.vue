<template>
  <v-app id="inspire">
    <!-- Barra lateral -->

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <!-- Menú lateral -->
        <router-link
          v-for="(menu, index) in menus"
          :key="index"
          :to="{ name: menu.route }"
        >
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{ menu.icono }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <!-- Barra superior -->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Gestión de Mantenimiento</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-badge content="6" :value="5" color="red" bordered overlap>
        <v-icon large>mdi-bell</v-icon>
      </v-badge>
      <router-link :to="{ name: 'login' }">
        <v-btn icon>
          <v-icon>{{ isLoggedIn ? "mdi-face" : "mdi-lock" }}</v-icon>
        </v-btn>
      </router-link>
      <v-menu left bottom y-offset>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <!-- Menú tres puntitos -->
        <v-list>
          <v-list-item @click="enviarLogout">
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Alertas -->

    <v-content>
      <v-alert
        class="mt-10"
        :value="error"
        border="left"
        close-text="Close Alert"
        color="deep-purple accent-4"
        prominent
        tile
        dark
        dismissible
      >
        Error: {{ mensaje }}
      </v-alert>
      <router-view></router-view>
    </v-content>
    <!-- Pie de página -->
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import router from "../router/routes";

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    isLoged: false,
    menus: [
      { name: "inicio", icono: "mdi-view-dashboard", route: "home" },
      { name: "Usuarios", icono: "mdi-settings", route: "users.index" },
      { name: "Acerca de", icono: "mdi-settings", route: "about" },
    ],
  }),
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapGetters("status", ["mensaje", "error"]),
  },

  methods: {
    ...mapActions("auth", ["logout"]),

    enviarLogout() {
      this.logout();
      //router.push("login");
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
