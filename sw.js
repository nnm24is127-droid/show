var C = 'ento-expo-v3';
self.addEventListener('install', function(e) {
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function(e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || !(u.origin === location.origin || u.host === 'www.gstatic.com' || u.host === 'cdn.jsdelivr.net' || u.host.indexOf('fonts.') > -1)) return;
  e.respondWith(
    fetch(e.request).then(function(r) {
      var c = r.clone();
      caches.open(C).then(function(k) {
        k.put(e.request, c);
      });
      return r;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});
