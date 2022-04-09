/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: ['localhost', 'wfrp-api.s3.amazonaws.com'],
    minimumCacheTTL: 60*60*24,
  },
})
