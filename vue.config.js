const path = require('path')
module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Odissey Sécurité Privée',
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'stylus',
      'patterns': [
        path.resolve(__dirname, './src/css/main.styl'),
      ]
    }
  }
}