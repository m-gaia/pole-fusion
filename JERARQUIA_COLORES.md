# 🎨 Jerarquía de Colores - Pole Fusion

## 📋 Estrategia de Colores por Rol

### 1. **Magenta** (`#d63d9e`) - Color Principal
**Rol:** CTAs, botones importantes, enlaces, detalles visuales fuertes
- ✅ Botones de "Reservar clase"
- ✅ Enlaces principales
- ✅ Botones de acción importantes
- ✅ Elementos que requieren atención inmediata

### 2. **Coral** (`#ff6e61`) - Color de Énfasis
**Rol:** Banners, hover effects, mensajes destacados
- ✅ Efectos hover
- ✅ Mensajes de alerta o éxito
- ✅ Elementos que necesitan destacar
- ✅ Badges y etiquetas importantes

### 3. **Lavender** (`#995fb4`) - Color de Fondo
**Rol:** Fondos suaves, tarjetas, íconos secundarios
- ✅ Fondos de secciones
- ✅ Tarjetas de información
- ✅ Contenedores suaves
- ✅ Íconos secundarios

### 4. **Purple Blue** (`#4a3d8a`) - Color de Estructura
**Rol:** Títulos, navegación secundaria, estructura
- ✅ Títulos de secciones
- ✅ Navegación secundaria
- ✅ Elementos estructurales
- ✅ Headers de tarjetas

### 5. **Deep Blue** (`#1f1b79`) - Color de Contraste
**Rol:** Toques mínimos, bordes, contraste
- ✅ Bordes sutiles
- ✅ Íconos mínimos
- ✅ Texto de pie de página
- ✅ Elementos de contraste

## 🎯 Implementación en Componentes

### Botones
```css
.btn-primary    /* Magenta - CTAs principales */
.btn-secondary  /* Coral - Botones de énfasis */
.btn-outline    /* Magenta con borde */
```

### Gradientes
```css
.text-gradient  /* Magenta a Coral */
.gradient-bg    /* Lavender suave */
```

### Fondos
```css
bg-lavender-50  /* Fondos suaves */
bg-secondary-500 /* Estructura */
bg-accent-500   /* CTAs */
```

## 📱 Uso en Secciones Específicas

### Hero Section
- **Fondo:** Gradiente con Purple Blue y Lavender
- **CTA Principal:** Magenta
- **Badge:** Coral

### Clases
- **Tarjetas:** Lavender a Purple Blue
- **Botones:** Magenta
- **Íconos:** Coral y Lavender

### Header
- **Logo:** Magenta a Coral
- **Navegación:** Purple Blue
- **Botones:** Magenta

## 🔧 Clases de Tailwind Disponibles

### Magenta (Accent)
```css
bg-accent-500    /* Principal */
text-accent-500  /* Texto */
border-accent-500 /* Bordes */
```

### Coral
```css
bg-coral-500     /* Énfasis */
text-coral-500   /* Texto */
hover:bg-coral-600 /* Hover */
```

### Lavender
```css
bg-lavender-500  /* Fondos */
text-lavender-500 /* Texto */
bg-lavender-50   /* Fondos suaves */
```

### Purple Blue (Secondary)
```css
bg-secondary-500 /* Estructura */
text-secondary-500 /* Títulos */
```

### Deep Blue (Primary)
```css
bg-primary-500   /* Contraste */
text-primary-500 /* Texto mínimo */
```

## 🎨 Gradientes Recomendados

### Para CTAs
```css
bg-gradient-to-r from-accent-500 to-coral-500
```

### Para Fondos
```css
bg-gradient-to-br from-lavender-50 to-secondary-50
```

### Para Títulos
```css
bg-gradient-to-r from-secondary-500 to-accent-500
```

## 📊 Escalas de Color

Cada color tiene escalas del 50 al 900:
- **50-100:** Muy claros (fondos suaves)
- **200-400:** Claros (hover, estados)
- **500:** Principal (uso estándar)
- **600-700:** Oscuros (hover, contraste)
- **800-900:** Muy oscuros (texto, bordes)

## ✅ Verificación

Para verificar que los colores están aplicados correctamente:
1. Abre `color-test.html` en el navegador
2. O visita `/color-test` en el proyecto React
3. Verifica que cada color tenga su rol específico

---

**¡La jerarquía de colores está implementada y lista para usar!** 🚀✨
