// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icons',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  css: [
    '~/assets/css/main.css',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
    },
  },
  app: {
    head: {
      meta: [
        {property: 'og:title', content: 'welcome home, stranger'},
        {property: 'og:site_name', content: 'egordigitax'},
        {property: 'og:description', content: 'Explore latest project and recent content'},
        {property: 'og:image', content: 'https://i1.sndcdn.com/artworks-jed24yeHGhe9LXDz-ZRaA5A-t500x500.jpg'},
        {property: 'og:url', content: 'https://egordigitax.com/'},
        {property: "color-scheme", content: "light only"}
      ]
    }
  }
})
