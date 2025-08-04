# Pole Fusion - Academia de Pole Dance

Un sitio web moderno y elegante para la academia de pole dance "Pole Fusion" en Buenos Aires, Argentina.

## 🎯 Características

- **Diseño Moderno**: Interfaz elegante y femenina con paleta de colores fucsia, dorado y negro
- **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **Navegación Intuitiva**: React Router para navegación entre secciones
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **Formularios Interactivos**: Formularios de contacto funcionales
- **Galería Dinámica**: Filtros por categoría y lightbox
- **Testimonios**: Carousel de testimonios de alumnas
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **React Router** - Enrutamiento para aplicaciones React
- **Lucide React** - Iconos modernos y ligeros

## 📁 Estructura del Proyecto

```
pole-fusion/
├── public/
│   ├── images/          # Imágenes del sitio
│   └── favicon.ico      # Favicon
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Classes.jsx
│   │   ├── Instructors.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── pages/          # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Classes.jsx
│   │   ├── Instructors.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── styles/         # Estilos globales
│   ├── utils/          # Utilidades y helpers
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos base
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/pole-fusion.git
   cd pole-fusion
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build de producción
- `npm run lint` - Ejecutar linter

## 🎨 Paleta de Colores

- **Primario**: Fucsia (#ec4899)
- **Secundario**: Dorado (#eab308)
- **Oscuro**: Negro elegante (#0f172a)
- **Grises**: Escala de grises para textos y fondos

## 📱 Páginas y Secciones

### 1. **Inicio** (`/`)
- Hero section con llamada a la acción
- Sección de clases destacadas
- Instructoras principales
- Galería de imágenes
- Testimonios de alumnas
- Formulario de contacto

### 2. **Clases** (`/clases`)
- Tipos de clases (Iniciación, Intermedio, Avanzado)
- Horarios y precios
- Beneficios del pole dance
- CTA para reservar clase

### 3. **Instructoras** (`/instructores`)
- Perfiles detallados de instructoras
- Certificaciones y logros
- Especialidades y clases que dictan
- Información de contacto

### 4. **Galería** (`/galeria`)
- Filtros por categoría
- Lightbox para ver imágenes
- Información de cada foto
- Estadísticas de la galería

### 5. **Testimonios** (`/testimonios`)
- Carousel de testimonios
- Historias de transformación
- Estadísticas de satisfacción
- Modal con detalles completos

### 6. **Contacto** (`/contacto`)
- Formulario de contacto completo
- Información de contacto
- Preguntas frecuentes
- Mapa de ubicación

## 🔧 Configuración

### Tailwind CSS
El proyecto incluye una configuración personalizada de Tailwind CSS con:
- Paleta de colores personalizada
- Tipografías (Inter y Playfair Display)
- Animaciones personalizadas
- Componentes reutilizables

### Framer Motion
Animaciones implementadas:
- Fade in/out
- Slide up/down
- Scale animations
- Stagger animations
- Page transitions

## 📱 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

### Netlify
1. Conectar repositorio a Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `dist`

### Vercel
1. Conectar repositorio a Vercel
2. Configurar framework preset: Vite
3. Deploy automático

## 📝 Personalización

### Cambiar Colores
Editar `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#tu-color-fucsia',
  },
  secondary: {
    500: '#tu-color-dorado',
  }
}
```

### Cambiar Contenido
- Textos: Editar directamente en los componentes
- Imágenes: Reemplazar en `public/images/`
- Información de contacto: Actualizar en componentes

### Agregar Páginas
1. Crear componente en `src/pages/`
2. Agregar ruta en `src/App.jsx`
3. Actualizar navegación en `Header.jsx`

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👥 Autores

- **Tu Nombre** - *Desarrollo inicial* - [TuUsuario](https://github.com/TuUsuario)

## 🙏 Agradecimientos

- [Framer Motion](https://www.framer.com/motion/) por las animaciones
- [Tailwind CSS](https://tailwindcss.com/) por el framework de CSS
- [Lucide](https://lucide.dev/) por los iconos
- [Google Fonts](https://fonts.google.com/) por las tipografías

## 📞 Contacto

- **Email**: info@polefusion.com
- **Teléfono**: +54 11 1234-5678
- **Dirección**: Av. Corrientes 1234, CABA, Argentina

---

**Pole Fusion** - Fuerza, arte y libertad 💪✨ 