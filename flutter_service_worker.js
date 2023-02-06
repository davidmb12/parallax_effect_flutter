'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dd2a3b5c0ad6527b24fae699e6be2c09",
".git/config": "2ffc7336378eae32e61c01e766191841",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9ec62bb2c6b94b4733fd25fc641c6fde",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cefafbb775f8b5376e77834042b61508",
".git/logs/refs/heads/main": "cefafbb775f8b5376e77834042b61508",
".git/logs/refs/remotes/origin/main": "7ac1e6ecd840e5fa37b3592a5677bdfe",
".git/objects/0b/da33521e7ccf0d2d2d497b213e73356ddbe557": "a2a07a6870bd82ef5a2f1bae0ca8af34",
".git/objects/12/4e784e2594814d3f1f22faca6a7e6366bd5ea0": "23d41b59d444962493a74912ac3e31b7",
".git/objects/16/db9f93bd64e1d2f3d43dfdaa4518b84f39f747": "b76aaab9da1447fc6550df1ff7ae6b60",
".git/objects/18/7eaaf75beabbff48b317a3be835285eee6c07d": "02a9c17f8a053697cee8aa048edf90f4",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/3864970d39cb7fd2d1dcf4870d7f0ddfee0b63": "7fba4b9ae52df61cd5892878a7777253",
".git/objects/23/6abdc44853f7076d07845b9fe23e600977f849": "d57c023435a3063337f6d50cf3ca3b61",
".git/objects/26/3db3423c0badc7cdc3fb5e2d984ce814b7e789": "aaf98ad8c1f2cc9b1f6e5f60c99245de",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/9ee0017be8f90a9347fcf6cce0c32869825bda": "2b80f8ab8afefd74f66cda48bce52ca4",
".git/objects/3d/19948132042c80f5d1cc0f795ded06eef72520": "4e8c42cd12e8c55ec90050aa05342c16",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/0351f5c1f047d39dbd9d03008dc7780cbd84fb": "1a602d93008a66de1931eef159132df1",
".git/objects/51/ff2254dfcf7c1a51de6af9d255a89541728e6b": "08ff69106f098750947d423f7667159f",
".git/objects/53/af3d4d2329b3fa11b56664ef4dc14e2e0ab6ca": "6ab2d633712ec67456494912e1a1ccb3",
".git/objects/53/f68587bb675a5d22bf9fe35f71eafb5dda4c44": "1d49d4a62c0df7b17610e738f5d7b039",
".git/objects/56/ac022748e381141a43decffff2929042ffd5f6": "ef9a194440a5f69dc411eea03de95d3e",
".git/objects/5a/a63492d3cf92425d5f2f1c80552fbfc3495097": "f75bb627cdd4313d625c65fed5089aa9",
".git/objects/61/b025fbe16ac325f972cc67430703e27a6372b3": "ec2a81d27c477d014af69e9d7067f9ab",
".git/objects/64/d299439f4504eebe56f71ffdb7cea338bb9d5e": "1a76d9f3d4c47c64bdbdd9de86e937d7",
".git/objects/70/0250ce8b20644a9bb8287fc71515a9163b8316": "663639a66201ca4d9ca6c003b37f802f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/414b928b34cca27b51064f1890481d97580974": "7d0e0e3761cd0245db5dce5fe9dcd1a2",
".git/objects/83/c96fe9a1094f3fd952c9b2b6337973d0ea2d92": "970b22f5b5bfa40d250b91271a09af6a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9f/616777872585cf9e94d000740ffc42e3692c1c": "fa3756221431ccc0109fa2ea73c4618a",
".git/objects/a0/132b87b79114747202f0e6703a7129bbd32d6e": "8e1c6fd8d9ea625fa1f71dcdea411355",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2b283a84a924b4cb510c86ed16516eb4e31f55": "85d72fb47b485b42f37731ecfbb1391a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/a8bf0204cc0334af258dbf0419b5867c5e47ba": "69ea31335ee7909dbb54f0cb86901e63",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/3cfab2c42549397721e5aa33c5d06f5abd642f": "ded82a2345acfca7ce51e8e01527757d",
".git/objects/d4/c1e4eb8690c03e1a59620e9190aae347a2bca3": "e9dd76ff858256aaad2d224908d540b6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/c2e8bfa44e4ba3a4546e4de4250441c1519f65": "696530ea1af775ff98ffb106ce8bc8e0",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/beeb1a25f4c8929c364ee2b4f3d99d4b051eb5": "373eea94b66ebee003de28275b0f7978",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/7b2f990776b84ef50495501ef80b630d2292e1": "8f18f61977f199b4cd2f1a4561633cb0",
".git/objects/eb/8a45ab98908a481dbaa632f9181f5e00a97c30": "f86733b2d7f4bed2d2a1432a12e022eb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/bea14d00fc525ed80b24dd13c42f9f799d3c26": "afcdcfd80131f6296a11395a1a91b466",
".git/objects/f0/93ac29bfb7306191b2c3c5b7552eed9c343c84": "302e0f94df9f3e5daa428b8dcf6bb378",
".git/objects/fe/560c15bea5371d82b0acfc22247b90c63a505e": "0aaaa3cf7922562f50ff6d8780802e2a",
".git/refs/heads/main": "e039578c36b0d91960dc18a2f3c74082",
".git/refs/remotes/origin/main": "e039578c36b0d91960dc18a2f3c74082",
"assets/AssetManifest.json": "c1311605ea82bbad58795aa31d49e3fd",
"assets/assets/videos/cyberpunk.mp4": "ac80454d38f849c171c3a925378484d1",
"assets/assets/videos/jelly.mp4": "60636138a67842b7494f1315d73ce1d2",
"assets/assets/videos/penguins.mp4": "e92b8b3ec6fa6ff7dc238fe1341cc84d",
"assets/assets/videos/space.mp4": "e156369eab756da39e183067c82d7c43",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "43f6002d137a43627b1dc81587755520",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a855994fd930378369b2ba51e273983a",
"/": "a855994fd930378369b2ba51e273983a",
"main.dart.js": "a583fa3cb860fdd570b5f87ea6762db3",
"manifest.json": "a6714dfa439987c817c6151e2b01fa0d",
"version.json": "577cbf4ffdd4f41be560282152026317"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
