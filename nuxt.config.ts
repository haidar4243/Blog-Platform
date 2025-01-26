export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-vuefire",
    "pinia-plugin-persistedstate/nuxt",
  ],
  plugins: ["~/plugins/firestore.js", "~/plugins/firebaseAuth.js"],
  image: {},
  build: {
    transpile: [],
  },
  compatibilityDate: "2025-01-26",
  ssr: false,
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    },
  },
});
