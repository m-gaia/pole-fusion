# Deploy en Netlify - Pole Fusion

## Configuración Completa

### Archivos de Configuración

1. **netlify.toml** - Configuración principal de Netlify
2. **public/_redirects** - Reglas de redirección para SPA
3. **public/_headers** - Headers de seguridad
4. **.nvmrc** - Versión de Node.js (18)

### Pasos para Deploy

1. **Conectar repositorio a Netlify**:
   - Ve a [netlify.com](https://netlify.com)
   - Conecta tu repositorio de GitHub
   - Selecciona el repositorio `pole-fusion`

2. **Configuración de Build**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (automático desde .nvmrc)

3. **Variables de entorno** (opcional):
   - No necesarias para este proyecto

### Verificación del Deploy

1. **Revisar logs de build**:
   - Ve a la pestaña "Deploys" en Netlify
   - Revisa que el build sea exitoso
   - Verifica que no haya errores

2. **Probar rutas**:
   - `/` - Página principal
   - `/auth` - Sistema de autenticación
   - `/admin` - Panel de administración (requiere login)
   - `/reservas` - Sistema de reservas

### Datos de Demo

**Admin**:
- Email: `admin@polefusion.com`
- Contraseña: `Admin2024!`

**Cliente**:
- Email: `maria@example.com`
- Contraseña: `Maria2024!`

### Troubleshooting

**Si el deploy falla**:
1. Verificar que Node.js 18 esté disponible
2. Revisar logs de build en Netlify
3. Verificar que todas las dependencias estén en package.json
4. Asegurar que el comando `npm run build` funcione localmente

**Si las rutas no funcionan**:
1. Verificar archivo `_redirects`
2. Asegurar que todas las rutas estén listadas
3. Verificar configuración de React Router

**Si el CSS no se carga**:
1. Verificar que Tailwind CSS esté configurado correctamente
2. Revisar archivo `tailwind.config.js`
3. Verificar que PostCSS esté configurado

### Comandos Útiles

```bash
# Build local para testing
npm run build

# Preview del build
npm run preview

# Verificar configuración
npm run lint
```

### Estructura de Archivos

```
pole-fusion/
├── netlify.toml          # Configuración de Netlify
├── .nvmrc                # Versión de Node.js
├── public/
│   ├── _redirects        # Reglas de redirección
│   └── _headers          # Headers de seguridad
├── src/
│   ├── App.jsx           # Componente principal
│   ├── pages/
│   │   └── Auth.jsx      # Sistema de autenticación
│   └── components/
│       ├── Login.jsx     # Componente de login
│       └── Register.jsx  # Componente de registro
└── package.json          # Dependencias y scripts
```

### Notas Importantes

- El sistema usa localStorage para persistir datos
- Las sesiones expiran en 24 horas
- Solo clientes pueden registrarse desde la interfaz pública
- Los administradores deben ser creados manualmente en el código 