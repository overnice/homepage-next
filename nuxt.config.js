import pkg from './package'
const { join } = require('path')
const dir = require('node-dir')
const routesArray = []
const fs = require('fs')
const _ = require('lodash')
const md = require('markdown-it')


var files = fs.readdirSync('./static/caseMarkdownFiles');
function createRoutesArray() {
  files.forEach(function (file) {
      var name = file.substr(0, file.lastIndexOf('.'));
      var route = '/post/' + name
      routesArray.push(route)
  });
}

function returnRoutes() {
  dir.readFiles('./static/dynamicMarkdownFiles', {
        match: /.md$/,
        shortName: true,
        exclude: /^\./
        }, function(err, content, next) {
            if (err) throw err;
            // console.log('content:', content);
            next();
        },
        function(err, files){
            if (err) throw err;
            // fileNamesArray = [];
            files.forEach(function (file) {
                var name = file.substr(0, file.lastIndexOf('.'));
                var path = '/post/' + name
                return path
            });
        });
}
// const fs = require('fs')
// const axios = require('axios')
// // const _ = require('lodash')

//
function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/post/${slug}`
}

export default {
  mode: 'universal',
  
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/css/global.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      locales: ['en', 'de'],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: require('./lang/en-US.json'),
          de: require('./lang/de-DE.json')
        }
      }
    }]
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
          options : {
            fix : true,
            vue:true
        }
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader'],
      
      })
    }
  }
}
