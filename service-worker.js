self.addEventListener('install', (event) => { // event when service worker install
    console.log( 'install', event);
    self.skipWaiting();
});

self.addEventListener('activate', (event) => { // event when service worker activated
    console.log('activate', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) { // HTTP request interceptor
    event.respondWith(fetch(event.request)); // send all http request without any cache logic
    // // TODO: Enable cache to use the PWA offline
    // event.respondWith(
    //     caches.match(event.request).then(function(response) {
    //         return response || fetch(event. request);
    //     })
    // );
});
