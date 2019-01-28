/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2276b4d6e378274d1eb14b33b25d3ad7"
  },
  {
    "url": "assets/css/0.styles.10fe9d17.css",
    "revision": "f68d4e9be8c7dd1dc5b56fc405cbf235"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/3.95ad8ad5.js",
    "revision": "3d2b09e07d46930c59dadbc96642299a"
  },
  {
    "url": "assets/js/4.95e6577a.js",
    "revision": "fc043fbe4f33fee8d6dc9f969263ed2f"
  },
  {
    "url": "assets/js/5.0e43be04.js",
    "revision": "1a8193c862efc0912d62dfa3f6577083"
  },
  {
    "url": "assets/js/app.fa5ab898.js",
    "revision": "86d661b2981561fd6e61612d4be11711"
  },
  {
    "url": "assets/js/vendors~docsearch.bbd37925.js",
    "revision": "b5a5d50159de00ac4802c83d52634186"
  },
  {
    "url": "img/logo.png",
    "revision": "dc1dd5727306894e0e2d233482bc1f14"
  },
  {
    "url": "index.html",
    "revision": "00694f8416fcfb8c56d4d306179cac3f"
  },
  {
    "url": "logo.png",
    "revision": "dc1dd5727306894e0e2d233482bc1f14"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
