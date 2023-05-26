var GHPATH = '/AI-Matrix';
var FL64 = '/Fl64';
var APP_PREFIX = 'AI_';
var VERSION = 'version_1.1';
var URLS = [
  `${FL64}/FL64.js`,
  `${GHPATH}/AI-Mat.js`,
  `${GHPATH}/AI-Mat-Debug.js`,
  `${GHPATH}/docs/Bg/bg.jpg`,
  `${GHPATH}/docs/Bg/bg2.gif`,
  `${GHPATH}/docs/Bg/icon.png`,
  `${GHPATH}/docs/Buttons/sum.gif`,
  `${GHPATH}/docs/Buttons/sum_pressed.gif`,
  `${GHPATH}/docs/Buttons/geo-sum.gif`,
  `${GHPATH}/docs/Buttons/geo-sum_pressed.gif`,
  `${GHPATH}/docs/Buttons/geo.gif`,
  `${GHPATH}/docs/Buttons/geo_pressed.gif`,
  `${GHPATH}/docs/Buttons/sum-sp.gif`,
  `${GHPATH}/docs/Buttons/sum-sp_pressed.gif`,
  `${GHPATH}/docs/Buttons/geo-sum-sp.gif`,
  `${GHPATH}/docs/Buttons/geo-sum-sp_pressed.gif`,
  `${GHPATH}/docs/Buttons/Geo-sp.gif`,
  `${GHPATH}/docs/Buttons/geo-sp_pressed.gif`,
  `${GHPATH}/manifest.json`,
  `${GHPATH}/index.html`
]

var CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        console.log('Responding with cache : ' + e.request.url);
        return request
      } else {       
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i] );
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
