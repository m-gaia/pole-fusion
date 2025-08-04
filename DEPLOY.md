# Guía de Deploy - Pole Fusion

## Opciones de Deploy

### 1. Vercel (Recomendado)

**Ventajas:**
- Gratuito
- Muy fácil de configurar
- Optimizado para React/Vite
- Deploy automático

**Pasos:**
1. Instala Node.js desde https://nodejs.org/
2. Sube tu código a GitHub
3. Ve a https://vercel.com/
4. Conecta tu cuenta de GitHub
5. Selecciona tu repositorio
6. Haz clic en "Deploy"

### 2. Netlify

**Pasos:**
1. Instala Node.js
2. Ejecuta: `npm install && npm run build`
3. Ve a https://netlify.com/
4. Arrastra la carpeta `dist` a Netlify
5. Tu sitio estará disponible en una URL como: `https://tu-sitio.netlify.app`

### 3. GitHub Pages

**Pasos:**
1. Sube tu código a GitHub
2. Ve a Settings > Pages en tu repositorio
3. Selecciona "GitHub Actions" como fuente
4. El workflow ya está configurado en `.github/workflows/deploy.yml`
5. Cada vez que hagas push a `main`, se hará deploy automáticamente

### 4. Firebase Hosting

**Pasos:**
1. Instala Node.js
2. Instala Firebase CLI: `npm install -g firebase-tools`
3. Ejecuta: `npm install && npm run build`
4. Ejecuta: `firebase login`
5. Ejecuta: `firebase init hosting`
6. Ejecuta: `firebase deploy`

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Estructura del Proyecto

```
pole-fusion/
├── src/                    # Código fuente
├── public/                 # Archivos estáticos
├── dist/                   # Build de producción (se crea con npm run build)
├── package.json           # Dependencias y scripts
└── vite.config.js         # Configuración de Vite
```

## Notas Importantes

- El proyecto usa **Vite** como bundler
- **React 18** con **React Router** para navegación
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Lucide React** para iconos

## Troubleshooting

### Error: "npm no se reconoce"
- Instala Node.js desde https://nodejs.org/
- Reinicia tu terminal después de la instalación

### Error en el build
- Verifica que todas las dependencias estén instaladas: `npm install`
- Revisa la consola para errores específicos

### Problemas con rutas en producción
- Asegúrate de que tu aplicación use rutas relativas
- Para GitHub Pages, considera usar `basename` en React Router 