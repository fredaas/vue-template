const path = require("path")

module.exports = {
  css: {
    extract: {
      ignoreOrder: true
    }
  },
  transpileDependencies: [
    "vuetify"
  ],
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  configureWebpack: {
    resolve: {
      alias: {
        "app-config": path.resolve(__dirname, process.env.VUE_APP_CONFIG),
        "vue-config": path.resolve(__dirname, "./vue.config.js"),
        "components": path.resolve(__dirname, "./src/components"),
        "styles": path.resolve(__dirname, "./src/static/scss"),
        "assets": path.resolve(__dirname, "./src/static/media")
      }
    }
  }
}
