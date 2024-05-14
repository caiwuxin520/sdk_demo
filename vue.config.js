module.exports = {
  css: {
    extract: false,
    sourceMap: false
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    externals: {
      "vue": "Vue",
      "element-ui": "ElementUI"
    }
  }
}