const StylelintPlugin = require('stylelint-webpack-plugin')
const baseRoute = env => (env === 'GH_PAGES' ? '/portfolio' : '')
const portfolioContext = require('./portfolio.config.js')

module.exports = {
  mode: 'universal',

  env: {
    portfolio: portfolioContext,
  },

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: `%s | ROMUKEY PORTFOLIO`,
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no' },
      { hid: 'http-equiv', 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { hid: 'description', name: 'description', content: 'ROMUKEY Portfolio Built by Nuxtjs' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: baseRoute(process.env.DEPLOY_ENV) + '/s/images/logo.jpg',
      },
    ],
  },

  router: {
    base: baseRoute(process.env.DEPLOY_ENV),
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~assets/styles/styles.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/constant.js',
    '~/plugins/img.js',
    '~/plugins/meta-info.js',
    '~/plugins/portfolio-context.js',
    { src: '~/plugins/aos.js', ssr: false },
    { src: '~/plugins/doughnut-chart.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far'],
          },
        ],
      },
    ],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  styleResources: {
    scss: './assets/styles/variables/*.scss',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss'],
          })
        )
      }
    },
  },
}
