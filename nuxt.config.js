export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - nuxt_leaflet",
    title: "nuxt_leaflet",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "./assets/styles/inter.css",
    "./assets/styles/main.css",
    "./assets/styles/typography.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "@/plugins/vue2-leaflet-markercluster.js", mode: "client" },
    { src: "@/plugins/teleport.js", mode: "client" },
    { src: "@/plugins/vue2-leaflet.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#0085FF",
          surface_1: "#FAFAFA",
          secondary: "#182D3A",
          disabled: "#919EAB",
          info: "#AC39AC",
          warning: "#F62417",
          error: "#F49800",
          success: "#33B530",
          traffic_5: "#91251C",
          traffic_4: "#D3301D",
          traffic_3: "#E18330",
          traffic_1: "#94C761",
          school_bus: "#F49800",
          on_surface: "#060606",
          on_surface_disabled: "#A1A7AA",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
