declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $config: typeof defineNuxtConfig
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      }
    }
  }
})
