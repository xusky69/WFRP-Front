/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: ['localhost',
      'warhammer-rp.herokuapp.com',
      'wfrp-front.vercel.app',
      'wfrp-api.s3.amazonaws.com'],
  },
})
