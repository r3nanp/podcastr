const withPWA = require('next-pwa')

const isDev = process.env.NODE_ENV === 'development'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: isDev
  },
  images: {
    domains: ['storage.googleapis.com']
  }
})
