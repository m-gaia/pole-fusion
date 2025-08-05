# Sistema de Autenticación - Pole Fusion

## Descripción General

El sistema de autenticación permite a los usuarios registrarse e iniciar sesión con diferentes roles (admin y client). Utiliza localStorage para persistir los datos de sesión.

## Funcionalidades

### 🔐 Registro de Usuarios
- **Solo clientes** pueden registrarse desde la interfaz pública
- Validaciones de seguridad:
  - Email válido
  - Contraseña fuerte (8+ caracteres, mayúscula, minúscula, número, símbolo)
  - Nombre solo con letras y espacios
  - Teléfono con formato válido
- Verificación de email único

### 🔑 Inicio de Sesión
- Autenticación con email y contraseña
- Validación de usuario activo
- Sesión con expiración (24 horas)
- Renovación automática de sesión

### 👥 Roles de Usuario
- **Admin**: Acceso completo al panel de administración
- **Client**: Acceso a reservas y área de estudiante

## Datos de Demo

### Administrador
- **Email**: admin@polefusion.com
- **Contraseña**: Admin2024!
- **Rol**: admin
- **Acceso**: Panel de administración

### Cliente
- **Email**: maria@example.com
- **Contraseña**: Maria2024!
- **Rol**: client
- **Acceso**: Reservas y área de estudiante

### Estudiante
- **Email**: ana@example.com
- **Contraseña**: Ana2024!
- **Rol**: client
- **Acceso**: Reservas y área de estudiante

## Flujo de Autenticación

1. **Registro**:
   - Usuario llena formulario de registro
   - Validaciones en tiempo real
   - Creación de cuenta como cliente
   - Redirección a login

2. **Login**:
   - Usuario ingresa credenciales
   - Validación de usuario activo
   - Creación de sesión
   - Redirección según rol

3. **Sesión**:
   - Verificación automática de expiración
   - Renovación de sesión activa
   - Logout manual

## Componentes

### Auth.jsx
- Componente principal de autenticación
- Sistema de tabs (Login/Register)
- Manejo de notificaciones
- Integración con componentes Login y Register

### Login.jsx
- Formulario de inicio de sesión
- Validaciones en tiempo real
- Botones de acceso rápido para demo
- Mostrar/ocultar contraseña

### Register.jsx
- Formulario de registro
- Validaciones completas
- Indicador de fortaleza de contraseña
- Confirmación de contraseña

### Notification.jsx
- Componente de notificaciones
- Tipos: success, error
- Auto-cierre con animación
- Posicionamiento fijo

## Utilidades (auth.js)

### Funciones Principales
- `register(userData)`: Registrar nuevo usuario
- `login(email, password)`: Iniciar sesión
- `logout()`: Cerrar sesión
- `getCurrentUser()`: Obtener usuario actual
- `isAuthenticated()`: Verificar autenticación
- `isAdmin()`: Verificar rol admin
- `isClient()`: Verificar rol cliente

### Validaciones
- `validateEmail(email)`: Validar formato de email
- `validatePassword(password)`: Validar contraseña fuerte

### Datos de Demo
- `initializeDemoData()`: Crear usuarios de demo
- `clearDemoData()`: Limpiar todos los datos
- `resetDemoData()`: Reinicializar datos

## Seguridad

### Contraseñas
- Mínimo 8 caracteres
- Al menos una mayúscula
- Al menos una minúscula
- Al menos un número
- Al menos un símbolo especial

### Sesiones
- Expiración automática (24 horas)
- Renovación con actividad
- Limpieza automática de sesiones expiradas

### Validaciones
- Email único por usuario
- Formato de teléfono válido
- Nombre solo con caracteres permitidos

## Uso

### Para Usuarios
1. Visitar `/auth`
2. Elegir entre "Iniciar Sesión" o "Registrarse"
3. Completar formulario correspondiente
4. Ser redirigido según el rol

### Para Desarrolladores
```javascript
import { auth } from './utils/auth'

// Registrar usuario
const newUser = auth.register({
  name: 'Juan Pérez',
  email: 'juan@example.com',
  phone: '5491112345678',
  password: 'Juan2024!'
})

// Iniciar sesión
const user = auth.login('juan@example.com', 'Juan2024!')

// Verificar autenticación
if (auth.isAuthenticated()) {
  const currentUser = auth.getCurrentUser()
  console.log('Usuario actual:', currentUser)
}
```

## Notas Técnicas

- **Almacenamiento**: localStorage
- **Encriptación**: No implementada (demo)
- **Persistencia**: Sesión del navegador
- **Framework**: React + React Router
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React 