const HOST='https://andersonprante.github.io/rest_client'

const cacheName = "v0.0.1"

const assets = [
  `${HOST}/index.html`,
  `${HOST}/manifest.json`,
  `${HOST}/js/app.js`,
  `${HOST}/images/icons/windows11/SmallTile.scale-100.png`,
  `${HOST}/images/icons/windows11/SmallTile.scale-125.png`,
  `${HOST}/images/icons/windows11/SmallTile.scale-150.png`,
  `${HOST}/images/icons/windows11/SmallTile.scale-200.png`,
  `${HOST}/images/icons/windows11/SmallTile.scale-400.png`,
  `${HOST}/images/icons/windows11/Square150x150Logo.scale-100.png`,
  `${HOST}/images/icons/windows11/Square150x150Logo.scale-125.png`,
  `${HOST}/images/icons/windows11/Square150x150Logo.scale-150.png`,
  `${HOST}/images/icons/windows11/Square150x150Logo.scale-200.png`,
  `${HOST}/images/icons/windows11/Square150x150Logo.scale-400.png`,
  `${HOST}/images/icons/windows11/Wide310x150Logo.scale-100.png`,
  `${HOST}/images/icons/windows11/Wide310x150Logo.scale-125.png`,
  `${HOST}/images/icons/windows11/Wide310x150Logo.scale-150.png`,
  `${HOST}/images/icons/windows11/Wide310x150Logo.scale-200.png`,
  `${HOST}/images/icons/windows11/Wide310x150Logo.scale-400.png`,
  `${HOST}/images/icons/windows11/LargeTile.scale-100.png`,
  `${HOST}/images/icons/windows11/LargeTile.scale-125.png`,
  `${HOST}/images/icons/windows11/LargeTile.scale-150.png`,
  `${HOST}/images/icons/windows11/LargeTile.scale-200.png`,
  `${HOST}/images/icons/windows11/LargeTile.scale-400.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.scale-100.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.scale-125.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.scale-150.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.scale-200.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.scale-400.png`,
  `${HOST}/images/icons/windows11/StoreLogo.scale-100.png`,
  `${HOST}/images/icons/windows11/StoreLogo.scale-125.png`,
  `${HOST}/images/icons/windows11/StoreLogo.scale-150.png`,
  `${HOST}/images/icons/windows11/StoreLogo.scale-200.png`,
  `${HOST}/images/icons/windows11/StoreLogo.scale-400.png`,
  `${HOST}/images/icons/windows11/SplashScreen.scale-100.png`,
  `${HOST}/images/icons/windows11/SplashScreen.scale-125.png`,
  `${HOST}/images/icons/windows11/SplashScreen.scale-150.png`,
  `${HOST}/images/icons/windows11/SplashScreen.scale-200.png`,
  `${HOST}/images/icons/windows11/SplashScreen.scale-400.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-16.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-20.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-24.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-30.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-32.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-36.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-40.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-44.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-48.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-60.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-64.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-72.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-80.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-96.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.targetsize-256.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png`,
  `${HOST}/images/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png`,
  `${HOST}/images/icons/android/android-launchericon-512-512.png`,
  `${HOST}/images/icons/android/android-launchericon-192-192.png`,
  `${HOST}/images/icons/android/android-launchericon-144-144.png`,
  `${HOST}/images/icons/android/android-launchericon-96-96.png`,
  `${HOST}/images/icons/android/android-launchericon-72-72.png`,
  `${HOST}/images/icons/android/android-launchericon-48-48.png`,
  `${HOST}/images/icons/ios/16.png`,
  `${HOST}/images/icons/ios/20.png`,
  `${HOST}/images/icons/ios/29.png`,
  `${HOST}/images/icons/ios/32.png`,
  `${HOST}/images/icons/ios/40.png`,
  `${HOST}/images/icons/ios/50.png`,
  `${HOST}/images/icons/ios/57.png`,
  `${HOST}/images/icons/ios/58.png`,
  `${HOST}/images/icons/ios/60.png`,
  `${HOST}/images/icons/ios/64.png`,
  `${HOST}/images/icons/ios/72.png`,
  `${HOST}/images/icons/ios/76.png`,
  `${HOST}/images/icons/ios/80.png`,
  `${HOST}/images/icons/ios/87.png`,
  `${HOST}/images/icons/ios/100.png`,
  `${HOST}/images/icons/ios/114.png`,
  `${HOST}/images/icons/ios/120.png`,
  `${HOST}/images/icons/ios/128.png`,
  `${HOST}/images/icons/ios/144.png`,
  `${HOST}/images/icons/ios/152.png`,
  `${HOST}/images/icons/ios/167.png`,
  `${HOST}/images/icons/ios/180.png`,
  `${HOST}/images/icons/ios/192.png`,
  `${HOST}/images/icons/ios/256.png`,
  `${HOST}/images/icons/ios/512.png`,
  `${HOST}/images/icons/ios/1024.png`
]

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          // cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(`${HOST}/sw.js`)
    .then(function () { console.log('[ServiceWorker] Registered'); });
}
