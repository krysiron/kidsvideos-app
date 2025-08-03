// Service Worker para Kids Videos App
const CACHE_NAME = 'kidsvideos-app-v1';
const STATIC_CACHE_NAME = 'kidsvideos-static-v1';
const DYNAMIC_CACHE_NAME = 'kidsvideos-dynamic-v1';

// Recursos estáticos para cachear
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Recursos dinámicos que se pueden cachear
const DYNAMIC_ASSETS = [
  'https://img.youtube.com',
  'https://www.youtube.com/embed'
];

// Instalar el service worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    Promise.all([
      // Cachear recursos estáticos
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS).catch(err => {
          console.log('[SW] Failed to cache some static assets:', err);
          // No fallar completamente si algunos recursos no se pueden cachear
        });
      }),
      // Forzar activación inmediata
      self.skipWaiting()
    ])
  );
});

// Activar el service worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    Promise.all([
      // Limpiar cachés antiguos
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && 
                cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Tomar control de todas las páginas
      self.clients.claim()
    ])
  );
});

// Interceptar peticiones de red
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar extensiones del navegador y otros protocolos
  if (!request.url.startsWith('http')) {
    return;
  }

  // Estrategia Cache First para recursos estáticos
  if (STATIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
    return;
  }

  // Estrategia Network First para contenido dinámico
  if (DYNAMIC_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
    return;
  }

  // Para el documento principal, usar Network First con fallback
  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, STATIC_CACHE_NAME));
    return;
  }

  // Para otros recursos, usar Cache First
  event.respondWith(cacheFirst(request, DYNAMIC_CACHE_NAME));
});

// Estrategia Cache First
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Actualizar en segundo plano
      updateCache(request, cache);
      return cachedResponse;
    }
    
    // Si no está en caché, buscar en red
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Cache First failed:', error);
    return new Response('Sin conexión', { 
      status: 503, 
      statusText: 'Service Unavailable' 
    });
  }
}

// Estrategia Network First
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', error);
    
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fallback para navegación
    if (request.mode === 'navigate') {
      const fallbackCache = await caches.open(STATIC_CACHE_NAME);
      return fallbackCache.match('./') || fallbackCache.match('./index.html');
    }
    
    return new Response('Sin conexión', { 
      status: 503, 
      statusText: 'Service Unavailable' 
    });
  }
}

// Actualizar caché en segundo plano
async function updateCache(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
  } catch (error) {
    console.log('[SW] Background update failed:', error);
  }
}

// Manejar mensajes desde la aplicación
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Notificar actualizaciones disponibles
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CHECK_UPDATE') {
    // Enviar notificación a la app si hay actualización
    self.clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        client.postMessage({
          type: 'UPDATE_AVAILABLE',
          version: CACHE_NAME
        });
      });
    });
  }
});

// Manejar errores
self.addEventListener('error', (event) => {
  console.error('[SW] Error:', event);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('[SW] Unhandled rejection:', event);
});