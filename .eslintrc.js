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
    "eslint:recommended",
    '@nuxtjs',
    "plugin:vue/strongly-recommended",
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {},
  overrides: [
    {
      "files": ["nuxt/*.js", "nuxt/*.vue"],
      "excludedFiles": "cmd/*"
    }
  ]
}
