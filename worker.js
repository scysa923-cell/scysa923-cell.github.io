const filesToCache = [
	"Virtual7.htm",
	"Windows 98 SE Live-PE.ver.SE 4.10.2222.English.iso"
 "virtual7.js",
	"Virtual7.json",
	"VirtualXP.wasm",
	"VirtualXPBIOS.bin",
	"VirtualXPFavIcon_16x16.png",
	"VirtualXPFavIcon_192x192.png",
	"VirtualXPFavIcon_512x512.png",
	"virtual87.js",
	"VirtualXPShare.png",
	"VirtualXPVGA.bin",
	"VirtualXPShare.png",
	
];

const staticCacheName = "virtualxp-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});