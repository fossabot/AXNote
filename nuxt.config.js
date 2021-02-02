import chalk from 'chalk'

export default {
  telemetry: false,

  srcDir: 'src/',

  // Server
  server: {
    port: 3000
  },

  // Meta
  head: {
    title: 'AXNote-Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    'ant-design-vue/dist/antd.css',
    'nprogress/nprogress.css',
    '@/assets/css/index.scss'
  ],

  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/nprogress.client'
  ],

  components: true,

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    'nuxt-sweetalert2',
    '@nuxtjs/robots',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap'
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],

  axios: {},

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },

  build: {
    extractCSS: true
  },

  cli: {
    badgeMessages: [`${chalk.white.bgRed.bold('Powered by AXNote')}`]
  },

  feed: [
    {
      path: '/rss.xml',
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    },
    {
      path: '/atom.xml',
      cacheTime: 1000 * 60 * 15,
      type: 'atom1'
    }
  ],

  googleFonts: {
    families: {
      Ubuntu: {
        wght: [400, 600]
      },
      'Source+Code+Pro': true
    }
  }
}
