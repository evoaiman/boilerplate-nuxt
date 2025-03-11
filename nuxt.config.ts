// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

    // Enable devtools in development mode
    ...(process.env.ENV_TYPE === "development" && {
        devtools: { enabled: true },
    }),

  runtimeConfig: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },

  modules: [
    '@nuxtjs/tailwindcss',
    "@pinia/nuxt",
    "nuxt-svgo",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  // Google Fonts configuration
  googleFonts: {
    display: "swap",
    families: {
      Inter: [200, 300, 400, 500, 600],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  // SVGO configuration
  svgo: {
    autoImportPath: "~/assets/svg",
    componentPrefix: "svg",
  },

  plugins: ['~/plugins/preline.client.ts'],
  srcDir: 'app/',
});