let CacheFiles = "PWA";

this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(CacheFiles).then((cache)=>{
            cache.addAll([
                'static/js/bundle.js',
                'static/js/0.chunk.js',
                'static/js/main.chunk.js',
                'index.html',
                'favicon.ico',
                'manifest.json',
                '/'
            ]);
        })
    )
})

this.addEventListener("fetch", (event)=>{
    if (!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                return result;
            })
        )
    }
})