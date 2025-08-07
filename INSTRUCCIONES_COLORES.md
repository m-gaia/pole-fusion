# 🎨 Instrucciones para Probar la Nueva Paleta de Colores

## ✅ Cambios Realizados

He implementado tu hermosa paleta de colores en el proyecto:

- **Deep Blue** (`#1f1b79`) - Color principal
- **Purple Blue** (`#4a3d8a`) - Color secundario  
- **Magenta** (`#d63d9e`) - Color acento
- **Coral** (`#ff6e61`) - Color destacado
- **Lavender** (`#995fb4`) - Color complementario

## 🔧 Archivos Modificados

1. **`src/config/siteConfig.js`** - Configuración de colores actualizada
2. **`tailwind.config.js`** - Paleta completa con escalas 50-900
3. **`src/index.css`** - Gradientes actualizados
4. **`src/components/Classes.jsx`** - Gradientes de clases actualizados
5. **`src/components/Hero.jsx`** - Fondo actualizado

## 🧪 Cómo Probar los Colores

### Opción 1: Archivo HTML de Prueba
Abre el archivo `color-test.html` en tu navegador para ver todos los colores funcionando.

### Opción 2: Componente React de Prueba
Si tienes Node.js instalado, puedes ejecutar:

```bash
npm install
npm run dev
```

Y luego visitar: `http://localhost:3000/color-test`

## 🎯 Verificación de Colores

Los colores deberían verse así:

### Colores Principales:
- **Primary 500**: `#1f1b79` (Deep Blue)
- **Secondary 500**: `#4a3d8a` (Purple Blue)
- **Accent 500**: `#d63d9e` (Magenta)
- **Coral 500**: `#ff6e61` (Coral)
- **Lavender 500**: `#995fb4` (Lavender)

### Clases de Tailwind Disponibles:
```css
bg-primary-500    /* Deep Blue */
bg-secondary-500  /* Purple Blue */
bg-accent-500     /* Magenta */
bg-coral-500      /* Coral */
bg-lavender-500   /* Lavender */

text-primary-500  /* Texto Deep Blue */
text-secondary-500 /* Texto Purple Blue */
/* etc... */
```

## 🔄 Si los Colores No Se Ven

1. **Limpia el cache del navegador** (Ctrl+F5)
2. **Reinicia el servidor de desarrollo** si estás usando npm
3. **Verifica que no haya conflictos** con otros estilos

## 📱 Uso en el Proyecto

Los colores ya están integrados en:
- ✅ Botones principales
- ✅ Gradientes de fondo
- ✅ Textos destacados
- ✅ Componentes de clases
- ✅ Hero section

## 🎨 Personalización Adicional

Si quieres ajustar algún color, edita:
- `tailwind.config.js` para cambios en Tailwind
- `src/config/siteConfig.js` para configuración del sitio
- `src/index.css` para estilos personalizados

---

**¡Tu paleta de colores está lista para usar!** 🚀✨
