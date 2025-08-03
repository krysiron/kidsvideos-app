# 🎬 KidsVideo - App de Videos Seguros para Niños

Una Progressive Web App (PWA) diseñada para que los niños disfruten de videos educativos y entretenidos de forma segura.

![KidsVideo App](https://img.shields.io/badge/PWA-Ready-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Demo en Vivo

Visita la aplicación: [KidsVideo App](https://tu-usuario.github.io/kidsvideos-app/)

## ✨ Características

- 📱 **PWA Completa**: Instalable en dispositivos móviles y desktop
- 🎯 **Categorías Organizadas**: Educativo, Canciones, Cuentos, Animales, Juegos, Arte
- 🔗 **Soporte YouTube**: Integración directa con videos de YouTube
- 📱 **Videos Locales**: Subida y reproducción de videos propios
- 🎨 **Diseño Infantil**: Interfaz colorida y amigable para niños
- 💾 **Almacenamiento Local**: Los videos se guardan en el dispositivo
- 🚀 **Funciona Offline**: Service Worker para funcionamiento sin conexión
- 🔒 **Configuración Protegida**: Acceso con clave para administrar videos

## 🛠️ Instalación y Despliegue

### Opción 1: Desplegar en GitHub Pages

1. **Fork o clona este repositorio**
```bash
git clone https://github.com/tu-usuario/kidsvideos-app.git
cd kidsvideos-app
```

2. **Sube los archivos a tu repositorio**
```bash
git add .
git commit -m "🎬 KidsVideo PWA - App de videos seguros para niños"
git push origin main
```

3. **Activa GitHub Pages**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Guarda y espera unos minutos

4. **Tu app estará disponible en:**
   `https://tu-usuario.github.io/kidsvideos-app/`

### Opción 2: Servidor Local para Desarrollo

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

### ⚙️ Acceso a Configuración
- **Clave por defecto**: `1234`
- Cambiar la clave desde la configuración
- Protección para evitar modificaciones accidentales

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
- 🗑️ Eliminación de videos individuales
- 🔍 Filtrado por categorías
- 💾 Almacenamiento persistente
- 📊 Contador de videos almacenados

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
├── LICENSE            # Licencia MIT
└── .gitignore         # Archivos a ignorar en Git
```

## 🎯 Características PWA

- ✅ **Instalable**: Se puede instalar como app nativa
- ✅ **Responsive**: Funciona en móviles, tablets y desktop
- ✅ **Offline**: Funciona sin conexión a internet
- ✅ **Seguro**: Preparado para servirse por HTTPS
- ✅ **App Shell**: Carga rápida con Service Worker
- ✅ **Iconos Dinámicos**: Iconos SVG generados automáticamente

## 📱 Soporte de Navegadores

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 11.1+
- ✅ Edge 79+
- ✅ Chrome Mobile
- ✅ Safari Mobile

## 🎨 Personalización

### Cambiar Colores
Edita las variables en `manifest.json`:
```json
{
  "theme_color": "#667eea",
  "background_color": "#ffffff"
}
```

### Videos por Defecto
Modifica la función `addExampleVideos()` en `index.html` para cambiar los videos de ejemplo.

### Clave de Configuración
- Clave por defecto: `1234`
- Se puede cambiar desde la configuración
- Se guarda en localStorage

## 🐛 Resolución de Problemas

### La app no se instala
- ✅ Verifica que esté servida por HTTPS (GitHub Pages lo hace automáticamente)
- ✅ Comprueba la consola del navegador para errores

### Videos no cargan
- ✅ Para YouTube: Verifica que la URL sea válida y el video público
- ✅ Para videos locales: Asegúrate de que el formato sea compatible (MP4, WebM)

### Service Worker no funciona
- ✅ Verifica que el archivo `sw.js` esté en la raíz
- ✅ Comprueba que esté servido por HTTPS en producción
- ✅ Revisa la consola para errores de registro

### Errores en GitHub Pages
- ✅ Asegúrate de que `index.html` esté en la raíz
- ✅ Verifica que todos los archivos estén commitados
- ✅ Espera unos minutos para que se propaguen los cambios

## 🚀 Comandos para Subir a GitHub

```bash
# 1. Inicializar repositorio (si es nuevo)
git init
git add .
git commit -m "🎬 Initial commit: KidsVideo PWA"

# 2. Conectar con GitHub
git remote add origin https://github.com/tu-usuario/kidsvideos-app.git
git branch -M main
git push -u origin main

# 3. Para actualizaciones futuras
git add .
git commit -m "✨ Descripción de cambios"
git push
```

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

## 📧 Soporte

Si tienes problemas o sugerencias:
- 🐛 [Reportar bug](../../issues)
- 💡 [Sugerir mejora](../../issues)
- 📖 [Ver documentación](../../wiki)

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!**

🌐 **Demo**: [https://tu-usuario.github.io/kidsvideos-app/](https://tu-usuario.github.io/kidsvideos-app/)