module.exports = {
  devServer: {},
  pwa: {
    name: 'Agenda Voke',
    short_name: 'Agenda Voke',
    themeColor: '#2196f3',
    msTileColor: '#2196f3',
    backgroundColor: '#2196f3',
    manifestOptions: {
      icons: [
        {
          src: 'img/icons/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Agenda Voke'
    }
  },
  publicPath: ''
}
