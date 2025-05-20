// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  components: false,

  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },

  runtimeConfig: {
    abc: 'def',
    public: {
      API_URL: process.env.API_URL,
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENTID,
      // STATE: process.env.STATE,
      // TXN: process.env.TXN,
      // CLIENT_ID: process.env.CLIENT_ID,
      // DIGILOCKER_URI: process.env.DIGILOCKER_URI,
      PLAN_PRICE: process.env.PLAN_PRICE,
      baseURL: process.env.BASE_URL,
      appPrice:process.env.WHITELEVELAPP_PRICE
    },
    private: {
      STATE: process.env.STATE,
      STATE_ADMIN: process.env.STATE_ADMIN,
      TXN: process.env.TXN,
      CLIENT_ID: process.env.CLIENT_ID,
      DIGILOCKER_URI: process.env.DIGILOCKER_URI,
      
    }
  },


  modules: [
    '@nuxtjs/tailwindcss',
    "nuxt-primevue",
    '@formkit/nuxt',
    'nuxt-vue3-google-signin',
    'nuxt-bootstrap-icons',
    '@nuxt/image',
    '@sidebase/nuxt-pdf',
  ],

  googleSignIn: {
    clientId: process.env.GOOGLE_LOGIN_CLIENTID,
  },

  routeRules: {
    '/user/**': { ssr: false },
    '/form/**': { ssr: false },
    '/admin/**': { ssr: false },
    '/superadmin/**': { ssr: false },
    '/addBusiness/**': { ssr: false },
  },

  image: {
    domains: [], // Add domains if fetching external images
    formats: ['webp', 'avif'], // Use for optimizing raster images
    alias: {
      'svg-new-img': '/svg-new-img/', // Ensure correct aliasing
    },
    staticFilename: '[publicPath]/svg-new-img/[name][ext]', // Use static file for SVGs
  },
  css: ['~/assets/css/global.css'],


})