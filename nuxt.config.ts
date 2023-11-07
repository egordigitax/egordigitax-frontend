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
        {name: 'og:title', content: 'Digitax portfolio'},
        {name: 'og:description', content: 'Explore latest project and recent content'},
        {name: 'og:image', content: 'https://i1.sndcdn.com/artworks-jed24yeHGhe9LXDz-ZRaA5A-t500x500.jpg'},
      ]
    }
  }
})
