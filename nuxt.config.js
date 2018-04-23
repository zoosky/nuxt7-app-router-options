module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7'
  ],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: 'nuxt7-app-router-options',
    description: 'My PWA App'
  },

  // Framework7 Config
  framework7: {
    // ...
    routes: {
      'tabs-routable': {
        tabs: [
          { path: '/', id: 'tab1' },
          { path: '/tab2/', id: 'tab2' },
          { path: '/tab3/', id: 'tab3' }
        ]
      }
    }
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend (config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    'assets/app.css'
  ]
}
