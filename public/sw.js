if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/129-26c1ea11d237dcb5.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/376-2557a8423644407f.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/675-fca0467c7cfaa3b1.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/main-c1980de8f0a4478f.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/_app-04a9286904dce4f6.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/bestiary-a5884583d3cbad0e.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/character-1e415d474cfbe0f5.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/index-ab5cc343a84286a7.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/login-34494c0f90c2136b.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/memories-cd694a9d40704b4c.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/min-example-925613e34ba30896.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/pages/party-853ed41095ed46fb.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/chunks/webpack-9b312e20a4e32339.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/css/c8ec81c8ac2d3c2c.css",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/gkLY7ne18auY1rPsjhBCQ/_buildManifest.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/gkLY7ne18auY1rPsjhBCQ/_middlewareManifest.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/_next/static/gkLY7ne18auY1rPsjhBCQ/_ssgManifest.js",revision:"gkLY7ne18auY1rPsjhBCQ"},{url:"/favicon.ico",revision:"cc12fc8f1f7717f707cd3b20f73aa767"},{url:"/icons/icon-128x128.png",revision:"a3fcb2b495f0ddaa2568e0052b58f7ec"},{url:"/icons/icon-144x144.png",revision:"25dafd55692f5226b590711e5b151e76"},{url:"/icons/icon-152x152.png",revision:"601cb1ad49c0b1b94dc542fa6387b4e5"},{url:"/icons/icon-16x16.png",revision:"35c3088ada128b55c6bc03a82274a0ed"},{url:"/icons/icon-192x192.png",revision:"a87dff30ea62344cda042c14d3d4535c"},{url:"/icons/icon-256x256.png",revision:"2cd10655072b968c98806214814f5442"},{url:"/icons/icon-32x32.png",revision:"9d554589a2b6c4900ed9e6beb9bcae37"},{url:"/icons/icon-384x384.png",revision:"a5b7178bb688040aa20329e85bd71b80"},{url:"/icons/icon-512x512.png",revision:"a23a93c2ed3b3d693ef7e87956760573"},{url:"/icons/icon-72x72.png",revision:"3e5aabe653c30462c82022ddc585f10b"},{url:"/icons/icon-96x96.png",revision:"4aaba0b6f481858b52c280082af3d7c9"},{url:"/manifest.json",revision:"951d207b7c9a0a664642976ff6f7a11f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
