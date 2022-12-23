export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    server: process.env.SERVER,
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paroles de Vie',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // <!-- Primary Meta Tags -->
      {
        hid: 'title',
        name: 'title',
        content: 'Paroles de Vie - site chrétien',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.',
      },

      // <!-- Open Graph / Facebook -->
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.paroles-de-vie.tk/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Paroles de Vie',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.paroles-de-vie.tk/seo/thumbnail.webp',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Paroles de vie',
      },

      // <!-- Twitter -->
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://www.paroles-de-vie.tk/',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Paroles de Vie',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Défendre la foi chrétienne, donner une éducation chrétienne, expression de la foi.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://www.paroles-de-vie.tk/seo/thumbnail.webp',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@chaine_pdv',
      },

      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        content: '/favicon/ms-icon-144x144.png',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/manifest.json' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gtm'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://tailwindcss.nuxt.dev/
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/gtm-module#readme
    '@nuxtjs/gtm',
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    '@nuxtjs/sitemap',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    meta: {
      title: 'Paroles de vie',
    },
  },

  gtm: {
    id: 'GTM-K7BMW26',
    enabled: true,
    debug: true,
  },

  sitemap: {
    hostname: 'https://www.paroles-de-vie.tk',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    // cssPath: '~/assets/css/tailwind.css',
    // configPath: 'tailwind.config',
    // exposeConfig: true,
    config: {
      content: ['./www/**/*.html', './safelist.txt'],
      theme: {
        extend: {
          colors: {
            'light-black': '#191920',
          },
          spacing: {
            120: '30rem',
            160: '40rem',
          },
          scale: {
            120: '1.2',
          },
          fontFamily: {
            manuscrit: [
              'Comic Sans MS',
              'Chalkboard SE',
              'Comic Neue',
              'sans-serif',
            ],
          },
          minHeight: {
            '1/2-screen': '50vh',
          },
          animation: {
            fade: 'fadeIn .5s ease-in-out',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          },
        },
      },
    },
    // injectPosition: 0,
    // viewer: true,
  },
}
