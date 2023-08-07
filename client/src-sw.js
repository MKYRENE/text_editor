const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
const { StaleWhileRevalidate } = require('workbox-strategies');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200], // GETTING A GET REQ AND RESPONSE WITH OK(200) OR DO NOT HAVE IT (O).
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, //EXPERATION TO STORE DATA FOR APP OR SITE. 
    }),
  ],
});
// THIS IS RUNNING pageCache and is looking for /index.html', or '/'
warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute(
  // Match assets by checking the request's destination (file extension)
  ({ request }) => ['style' ,'script','image'].includes(request.destination),
  // Use StaleWhileRevalidate strategy for assets
  new StaleWhileRevalidate({
    cacheName: 'assets-cache', // Cache name for assets
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // Cache assets for a week or if not it will automatically delete.
      }),
    ],
  })
);