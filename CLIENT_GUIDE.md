# 🎯 Guía para Clientes - Sitio Web Profesional

## 📋 Descripción del Producto

Este es un sitio web profesional para academias de pole dance (o cualquier negocio similar) que incluye:

### ✨ Características Principales
- **Diseño moderno y responsive**
- **Panel de administración integrado**
- **Sistema de reservas online**
- **Sistema de membresías**
- **Fácil personalización**
- **SEO optimizado**
- **Velocidad de carga optimizada**
- **Compatible con todos los dispositivos**
- **Formulario de contacto funcional**
- **Integración con WhatsApp**

### 🎨 Secciones Incluidas
- **Página de inicio** con hero section
- **Clases/Servicios** con descripciones
- **Instructores** con perfiles
- **Galería** de imágenes
- **Testimonios** de clientes
- **Reservas online** con sistema de clases
- **Membresías** con planes mensuales
- **Contacto** con formulario
- **Footer** con información completa

## 🚀 Opciones de Deploy

### Opción 1: Vercel (Recomendado)
**Costo:** Gratuito
**Ventajas:**
- Deploy automático
- Excelente rendimiento
- SSL gratuito
- Dominio personalizado

**Pasos:**
1. Ve a https://vercel.com/
2. Conecta tu GitHub
3. Selecciona el repositorio
4. ¡Deploy automático!

### Opción 2: Netlify
**Costo:** Gratuito
**Ventajas:**
- Fácil configuración
- Formularios incluidos
- Analytics gratuitos

### Opción 3: Hosting Tradicional
**Costo:** $5-20/mes
**Ventajas:**
- Control total
- Soporte técnico
- Email profesional

## 🎨 Personalización

### 1. Cambiar Información del Negocio
Edita el archivo `src/config/siteConfig.js`:

```javascript
business: {
  name: "Tu Academia",           // ← Cambia aquí
  tagline: "Tu Tagline",         // ← Cambia aquí
  phone: "+54 11 1234-5678",    // ← Cambia aquí
  email: "info@tuacademia.com",  // ← Cambia aquí
  address: "Tu dirección",       // ← Cambia aquí
}
```

### 2. Cambiar Colores
```javascript
colors: {
  primary: "#8B5CF6",    // ← Color principal
  secondary: "#F59E0B",  // ← Color secundario
  accent: "#EC4899",     // ← Color acento
}
```

### 3. Agregar/Editar Clases
```javascript
services: [
  {
    name: "Tu Clase",
    description: "Descripción de la clase",
    duration: "1 hora",
    level: "Principiante",
    image: "/images/tu-clase.jpg"
  }
]
```

### 4. Configurar Sistema de Reservas
Edita `src/components/BookingSystem.jsx`:

```javascript
const classes = [
  { id: 1, name: "Tu Clase", duration: "1 hora", instructor: "Tu Instructor" }
]

const timeSlots = [
  "9:00", "10:00", "11:00", "14:00", "15:00", "16:00"
]
```

### 5. Configurar Membresías
Edita `src/components/MembershipSystem.jsx`:

```javascript
const membershipPlans = [
  {
    name: 'Básico',
    price: '$15.000',
    features: [
      '4 clases por mes',
      'Acceso a clases básicas'
    ]
  }
]
```

## 📱 Panel de Administración

El sitio incluye un panel de administración que permite:
- Cambiar información del negocio
- Modificar colores del tema
- Actualizar redes sociales
- Guardar cambios en tiempo real

**Para acceder:** Haz clic en el botón "⚙️ Admin" en la esquina inferior derecha.

## 🖼️ Imágenes

### Tamaños Recomendados
- **Logo:** 200x200px (PNG con fondo transparente)
- **Imágenes de clases:** 800x600px
- **Fotos de instructores:** 400x400px
- **Galería:** 1200x800px

### Formatos Soportados
- JPG, PNG, WebP
- Optimiza las imágenes para web

## 📧 Formularios y Sistemas

### Sistema de Reservas
- Selección de clase, fecha y hora
- Validación automática
- Envío por WhatsApp
- Confirmación automática

### Sistema de Membresías
- 3 planes diferentes (Básico, Intermedio, Premium)
- Precios y beneficios claros
- Solicitud por WhatsApp
- Procesamiento manual

### Formulario de Contacto
- Validación automática
- Notificaciones por email
- Protección anti-spam
- Integración con WhatsApp
- **NO incluye pagos online** (para segunda etapa)

## 🔧 Configuración Técnica

### Dominio Personalizado
1. Compra tu dominio (GoDaddy, Namecheap, etc.)
2. Configura los DNS en Vercel/Netlify
3. Activa SSL automático

### Email Profesional
- Gmail para empresas: $6/mes
- Outlook 365: $5/mes
- Zoho Mail: Gratuito

### Analytics
- Google Analytics: Gratuito
- Google Search Console: Gratuito

## 💰 Precios Sugeridos (Versión con Reservas)

### Paquete Básico
- **Precio:** $400-600
- Sitio web completo
- Sistema de reservas
- Sistema de membresías
- Deploy en Vercel
- 1 mes de soporte

### Paquete Profesional
- **Precio:** $600-900
- Sitio web completo
- Sistema de reservas avanzado
- Sistema de membresías
- Dominio personalizado
- Email profesional
- 3 meses de soporte
- SEO básico

### Paquete Premium
- **Precio:** $900-1400
- Todo lo anterior
- Panel de administración avanzado
- Integración con redes sociales
- Analytics completo
- 6 meses de soporte

## 📞 Soporte Técnico

### Incluido en todos los paquetes:
- Configuración inicial
- Personalización básica
- Deploy en producción
- Documentación completa

### Soporte adicional:
- Cambios de contenido: $40/hora
- Nuevas funcionalidades: $60/hora
- Mantenimiento mensual: $60/mes

## 🚀 Checklist de Entrega

- [ ] Sitio web funcionando
- [ ] Sistema de reservas configurado
- [ ] Sistema de membresías configurado
- [ ] Información personalizada
- [ ] Imágenes optimizadas
- [ ] Formulario de contacto funcionando
- [ ] SEO básico configurado
- [ ] Dominio configurado
- [ ] Email profesional configurado
- [ ] Documentación entregada
- [ ] Capacitación al cliente

## 🔮 Segunda Etapa (Futuro)

### Funcionalidades Avanzadas:
- **Pasarela de pagos** (MercadoPago, PayPal)
- **Panel de administración avanzado**
- **Base de datos de clientes**
- **Notificaciones automáticas**
- **Sistema de puntos/fidelización**

### Precios Sugeridos para Segunda Etapa:
- **Paquete E-commerce:** $1500-2500
- **Sistema completo:** $2500-4000

## 📚 Recursos Adicionales

- **Tutorial de personalización:** Video explicativo
- **Manual de usuario:** PDF descargable
- **Soporte técnico:** Email y WhatsApp
- **Actualizaciones:** Notificaciones automáticas

---

**¿Necesitas ayuda con algún aspecto específico?**
Contacto: tu-email@ejemplo.com
WhatsApp: +54 9 11 1234-5678 