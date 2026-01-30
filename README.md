# AM Systems - Landing Page

Landing page profesional para AM Systems, una empresa de desarrollo de software.

## 🚀 Características

- **Diseño Moderno**: Interfaz atractiva con gradientes y animaciones suaves
- **Responsive**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Animaciones**: Efectos visuales llamativos con CSS y JavaScript
- **Secciones Completas**:
  - Hero con estadísticas animadas
  - Servicios ofrecidos
  - Portfolio/Biblioteca de diseños con filtros
  - Equipo y valores de la empresa
  - Formulario de contacto
- **Navegación Inteligente**: Menú que se actualiza según la sección visible
- **Performance**: Optimizado para carga rápida

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm (viene incluido con Node.js)

## 🔧 Instalación

1. Abre una terminal en la carpeta del proyecto

2. Instala las dependencias:
```bash
npm install
```

## ▶️ Uso

Para iniciar el servidor de desarrollo:

```bash
npm start
```

El sitio estará disponible en: `http://localhost:3000`

## 📁 Estructura del Proyecto

```
AM System/
├── public/
│   ├── css/
│   │   └── styles.css      # Estilos principales con animaciones
│   ├── js/
│   │   └── main.js         # Funcionalidad JavaScript
│   └── index.html          # Página principal
├── server.js               # Servidor Express
├── package.json            # Configuración del proyecto
└── README.md              # Este archivo
```

## 🎨 Secciones de la Página

### 1. **Hero Section**
- Título impactante con gradientes
- Estadísticas animadas (proyectos, satisfacción, clientes)
- Botones de llamado a la acción

### 2. **Servicios**
- 6 servicios principales:
  - Landing Pages
  - Sistemas para Negocios (destacado)
  - Páginas Personales
  - E-Commerce
  - Aplicaciones Web
  - Consultoría IT

### 3. **Portfolio**
- Biblioteca de diseños organizados por categorías:
  - Landing Pages
  - Sistemas de Negocio
  - Páginas Personales
  - E-Commerce
- Sistema de filtros interactivo

### 4. **Equipo**
- Información de los co-fundadores
- Habilidades y especialidades
- Valores de la empresa

### 5. **Contacto**
- Información de contacto
- Formulario funcional
- Datos de ubicación y horarios

## 🎯 Personalización

### Colores
Los colores principales se pueden modificar en [public/css/styles.css](public/css/styles.css):

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Contenido
- **Servicios**: Edita las tarjetas de servicio en [public/index.html](public/index.html)
- **Portfolio**: Agrega o modifica proyectos en la sección portfolio
- **Equipo**: Actualiza la información de los miembros del equipo

### Puerto del Servidor
Para cambiar el puerto (por defecto 3000), modifica [server.js](server.js):

```javascript
const PORT = process.env.PORT || 3000;
```

O usa una variable de entorno:
```bash
PORT=8080 npm start
```

## 🌟 Características Técnicas

- **Node.js + Express**: Servidor web eficiente
- **CSS Moderno**: Flexbox, Grid, Custom Properties
- **JavaScript Vanilla**: Sin dependencias externas
- **Animaciones CSS**: Transiciones suaves y efectos visuales
- **Intersection Observer**: Animaciones activadas por scroll
- **Responsive Design**: Mobile-first approach

## 📱 Compatibilidad

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Dispositivos móviles iOS y Android

## 🔜 Posibles Mejoras

- [ ] Integrar backend real para el formulario de contacto
- [ ] Añadir modo claro/oscuro
- [ ] Implementar galería de imágenes reales
- [ ] Agregar blog
- [ ] SEO avanzado con meta tags dinámicos
- [ ] Integrar CMS para gestión de contenido
- [ ] Añadir animaciones con GSAP o Framer Motion

## 📄 Licencia

ISC

## 👥 Autores

**AM Systems**
- Email: info@amsystems.com
- Teléfono: +52 (55) 1234-5678

---

Desarrollado con ❤️ por AM Systems
