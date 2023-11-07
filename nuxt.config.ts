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
      ogTitle: 'Digitax portfolio',
      ogDescription: 'Explore latest project and recent content',
      ogImage: 'https://i1.sndcdn.com/artworks-jed24yeHGhe9LXDz-ZRaA5A-t500x500.jpg'
    }
  }
})
