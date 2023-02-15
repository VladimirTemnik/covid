// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  runtimeConfig: {
    baseURL: process.env.NUXT_API_BASE_URL,
    public: {
      baseURL: process.env.NUXT_API_BASE_URL
    }
  },
})
