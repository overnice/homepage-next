module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/base'
    // 'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/vue'
  ],
  // plugins: [
  //   'prettier'
  // ],
  // add your custom rules here
  rules: {
    "vue/require-default-prop": false,
    "no-console": 1
  }
}
