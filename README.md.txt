# 🎬 KidsVideo - App de Videos Seguros para Niños

Una Progressive Web App (PWA) diseñada para que los niños disfruten de videos educativos y entretenidos de forma segura.

![KidsVideo App](https://img.shields.io/badge/PWA-Ready-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Características

- 📱 **PWA Completa**: Instalable en dispositivos móviles y desktop
- 🎯 **Categorías Organizadas**: Educativo, Canciones, Cuentos, Animales, Juegos, Arte
- 🔗 **Soporte YouTube**: Integración directa con videos de YouTube
- 📱 **Videos Locales**: Subida y reproducción de videos propios
- 🎨 **Diseño Infantil**: Interfaz colorida y amigable para niños
- 💾 **Almacenamiento Local**: Los videos se guardan en el dispositivo
- 🚀 **Funciona Offline**: Service Worker para funcionamiento sin conexión

## 🚀 Instalación y Uso

### Opción 1: Usar directamente en el navegador
1. Descarga o clona este repositorio
2. Abre `index.html` en tu navegador web
3. El navegador te ofrecerá instalar la app automáticamente

### Opción 2: Servidor local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000`

## 📱 Funcionalidades

### ➕ Agregar Videos
- **YouTube**: Pega la URL del video de YouTube
- **Local**: Sube archivos de video desde tu dispositivo
- **Información**: Añade título, categoría y descripción

### 🎯 Categorías Disponibles
- 🎓 **Educativo**: Videos de aprendizaje y desarrollo
- 🎵 **Canciones**: Música y canciones infantiles
- 📚 **Cuentos**: Historias y narraciones
- 🐾 **Animales**: Documentales y contenido sobre animales
- 🎮 **Juegos**: Videos de juegos educativos
- 🎨 **Arte**: Manualidades y actividades creativas

### 🎮 Gestión de Videos
- ✅ Reproducción en modal fullscreen
- 🗑️ Eliminación de videos
- 🔍 Filtrado por categorías
- 💾 Almacenamiento persistente

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive con gradientes y animaciones
- **JavaScript Vanilla**: Funcionalidad sin dependencias externas
- **PWA APIs**: Service Worker, Web App Manifest
- **YouTube API**: Integración de videos embebidos
- **LocalStorage**: Persistencia de datos local

## 📋 Estructura del Proyecto

```
kidsvideos-app/
├── index.html          # Aplicación principal
├── manifest.json       # Configuración PWA
├── sw.js              # Service Worker
├── README.md          # Esta documentación
├── .gitignore         # Archivos a ignorar en Git
└── icons/             # Iconos de la aplicación
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

## 🎯 Características PWA

- ✅ **Instalable**: Se puede instalar como app nativa
- ✅ **Responsive**: Funciona en móviles, tablets y desktop
- ✅ **Offline**: Funciona sin conexión a internet
- ✅ **Seguro**: Preparado para servirse por HTTPS
- ✅ **App Shell**: Carga rápida con Service Worker

## 📱 Soporte de Navegadores

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 11.1+
- ✅ Edge 79+
- ✅ Chrome Mobile
- ✅ Safari Mobile

## 🎨 Personalización

### Cambiar Iconos
1. Reemplaza los archivos en la carpeta `icons/`
2. Mantén los mismos nombres y tamaños

### Modificar Colores
Edita las variables en `manifest.json`:
```json
{
  "theme_color": "#667eea",
  "background_color": "#ffffff"
}
```

### Videos por Defecto
Modifica la función `addExampleVideos()` en `index.html` para cambiar los videos de ejemplo.

## 🐛 Resolución de Problemas

### La app no se instala
- ✅ Verifica que esté servida por HTTPS
- ✅ Revisa que todos los iconos estén disponibles
- ✅ Comprueba la consola del navegador para errores

### Videos no cargan
- ✅ Para YouTube: Verifica que la URL sea válida
- ✅ Para videos locales: Asegúrate de que el formato sea compatible (MP4, WebM)

### Service Worker no funciona
- ✅ Verifica que el archivo `sw.js` esté en la raíz
- ✅ Comprueba que esté servido por HTTPS en producción
- ✅ Revisa la consola para errores de registro

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- Diseño inspirado en interfaces amigables para niños
- Funcionalidad PWA siguiendo las mejores prácticas de Google
- Videos de ejemplo de dominio público

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!**

📧 **¿Preguntas o sugerencias?** Abre un [issue](../../issues) en GitHub.