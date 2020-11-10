let CacheFiles = "PWA";

this.addEventListener("install", (event)=>{
    event.waitUntill(
        caches.open(CacheFiles).then((cache)=>{
            cache.addAll([
                'static/js/bundle.js',
                'static/js/0.chunk.js',
                'static/js/main.chunk.js',
                "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
                'index.html',
                '/'
            ]);
        })
    )
})

this.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((result)=>{
            return result;
        })
    )
})