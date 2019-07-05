const { join } = require('path')
const dir = require('node-dir')
const routesArray = []
const fs = require('fs')
const _ = require('lodash')
const implicitFigures = require('markdown-it-implicit-figures')
const md = require('markdown-it')()
  .use(implicitFigures, {
    dataType: true, // <figure data-type="image">, default: false
    figcaption: true, // <figcaption>alternative text</figcaption>, default: false
    tabindex: true, // <figure tabindex="1+n">..., default: false
    link: false // <a href="img.png"><img src="img.png"></a>, default: false
  })
  .use(require('markdown-it-decorate'))

export default {

  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'overnice',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'overnice' },
      { hid: 'description', name: 'description', content: 'We create brands, products, creatives and overall a good time for users.' },
      { hid: 'image', name: 'image', content: '/og-image.png' },
      { hid: 'twitter-card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter-title', name: 'twitter:title', content: 'overnice' },
      { hid: 'twitter-description', name: 'twitter:description', content: 'We create brands, products, creatives and overall a good time for users.' },
      { hid: 'twitter-image', name: 'twitter:image', content: '/og-image.png' },
      { hid: 'og-title', name: 'og:title', content: 'overnice' },
      { hid: 'og-description', name: 'og:description', content: 'We create brands, products, creatives and overall a good time for users.' },
      { hid: 'og-image', name: 'og:image', content: '/og-image.png' },
      { hid: 'og-type', name: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/16x16.png' }
      // { rel: 'sitemap', type: 'application/xml', href: '____' }
      // { rel: 'manifest', href: '____' }
    ]
  },

  /**
   * The custom rules for netlify SPA deployment
   */
  netlify: {
    redirects: [
      {
        from: '/*',
        to: '/200.html',
        status: 200
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/css/global.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/ksvuescrollmagic',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@bazzite/nuxt-netlify',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: require('./lang/en-US.json'),
            de: require('./lang/de-DE.json')
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
          options: {
            fix: true,
            vue: true
          }
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          markdown: (body) => {
            const implicitFigures = require('markdown-it-implicit-figures')
            const markdownInline = require('markdown-it-for-inline')
            const md = require('markdown-it')()
              .use(require('markdown-it-container'), 'left')
              .use(require('markdown-it-container'), 'right')
              .use(implicitFigures, {
                dataType: true, // <figure data-type="image">, default: false
                figcaption: true, // <figcaption>alternative text</figcaption>, default: false
                tabindex: true, // <figure tabindex="1+n">..., default: false
                link: false // <a href="img.png"><img src="img.png"></a>, default: false
              })
              .use(markdownInline, 'url_new_win', 'link_open', function (tokens, idx) {
                var aIndex = tokens[idx].attrIndex('target');
  
                if (aIndex < 0) {
                  tokens[idx].attrPush(['target', '_blank']);
                } else {
                  tokens[idx].attrs[aIndex][1] = '_blank';
                }
              })
              // .use(require('markdown-it-decorate'))

            const defaultRender = md.renderer.rules.image
            const youtubeRE = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/
            md.renderer.rules.image = function (
              tokens,
              idx,
              options,
              env,
              self
            ) {
              const token = tokens[idx]
              const aIndex = token.attrIndex('src')

              if (youtubeRE.test(token.attrs[aIndex][1])) {
                const id = token.attrs[aIndex][1].match(youtubeRE)[5]

                return (
                  '<div class="embed-responsive">\n' +
                  '  <iframe width="920" height="517" src="https://www.youtube.com/embed/' +
                  id +
                  '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
                  '</div>\n'
                )
              }

              // pass token to default renderer.
              return defaultRender(tokens, idx, options, env, self)
            }
            return md.render(body)
          }
        }
      })
    }
  }
}
