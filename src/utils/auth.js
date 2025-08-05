// Utilidades de autenticación mejoradas
export const auth = {
  // Registrar nuevo usuario (SOLO clientes)
  register: (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    // Validaciones de seguridad
    if (!userData.email || !userData.password || !userData.name || !userData.phone) {
      throw new Error('Todos los campos son requeridos')
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(userData.email)) {
      throw new Error('Formato de email inválido')
    }

    // Validar contraseña fuerte
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!passwordRegex.test(userData.password)) {
      throw new Error('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo')
    }

    // Verificar si el email ya existe
    if (users.find(user => user.email === userData.email)) {
      throw new Error('El email ya está registrado')
    }
    
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      role: 'client', // SOLO clientes pueden registrarse
      createdAt: new Date().toISOString(),
      isActive: true,
      lastLogin: null
    }
    
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    
    return newUser
  },

  // Iniciar sesión con validaciones mejoradas
  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email && u.password === password && u.isActive)
    
    if (!user) {
      throw new Error('Email o contraseña incorrectos')
    }

    // Actualizar último login
    user.lastLogin = new Date().toISOString()
    localStorage.setItem('users', JSON.stringify(users))
    
    // Crear sesión con expiración
    const session = {
      user: user,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 horas
    }
    
    localStorage.setItem('currentSession', JSON.stringify(session))
    return user
  },

  // Cerrar sesión
  logout: () => {
    localStorage.removeItem('currentSession')
  },

  // Obtener usuario actual con validación de sesión
  getCurrentUser: () => {
    const session = localStorage.getItem('currentSession')
    if (!session) return null

    try {
      const sessionData = JSON.parse(session)
      const now = new Date()
      const expiresAt = new Date(sessionData.expiresAt)

      // Verificar si la sesión ha expirado
      if (now > expiresAt) {
        localStorage.removeItem('currentSession')
        return null
      }

      return sessionData.user
    } catch (error) {
      localStorage.removeItem('currentSession')
      return null
    }
  },

  // Verificar si está autenticado
  isAuthenticated: () => {
    return !!auth.getCurrentUser()
  },

  // Verificar si es admin
  isAdmin: () => {
    const user = auth.getCurrentUser()
    return user && user.role === 'admin'
  },

  // Verificar si es cliente
  isClient: () => {
    const user = auth.getCurrentUser()
    return user && user.role === 'client'
  },

  // Renovar sesión
  refreshSession: () => {
    const user = auth.getCurrentUser()
    if (user) {
      const session = {
        user: user,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      }
      localStorage.setItem('currentSession', JSON.stringify(session))
    }
  },

  // Limpiar datos de demo (para testing)
  clearDemoData: () => {
    localStorage.removeItem('users')
    localStorage.removeItem('currentSession')
    localStorage.removeItem('bookings')
    localStorage.removeItem('memberships')
    localStorage.removeItem('freeBookings')
  },

  // Validar contraseña
  validatePassword: (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  },

  // Validar email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
}

// Datos iniciales para demo con contraseñas seguras
export const initializeDemoData = () => {
  // Limpiar datos existentes para asegurar datos frescos
  const users = []
  
  // Crear admin por defecto (NO se puede crear desde el frontend)
  const adminUser = {
    id: 'admin-1',
    name: 'Administrador',
    email: 'admin@polefusion.com',
    password: 'Admin2024!',
    phone: '+54 11 1234-5678',
    role: 'admin',
    createdAt: new Date().toISOString(),
    isActive: true,
    lastLogin: null
  }
  
  users.push(adminUser)

  // Crear usuarios de ejemplo
  const demoUsers = [
    {
      id: 'user-1',
      name: 'María González',
      email: 'maria@example.com',
      password: 'Maria2024!',
      phone: '+54 9 11 1234-5678',
      role: 'client',
      createdAt: new Date().toISOString(),
      isActive: true,
      lastLogin: null
    },
    {
      id: 'user-2',
      name: 'Carlos Rodríguez',
      email: 'carlos@example.com',
      password: 'Carlos2024!',
      phone: '+54 9 11 2345-6789',
      role: 'client',
      createdAt: new Date().toISOString(),
      isActive: true,
      lastLogin: null
    }
  ]
  
  users.push(...demoUsers)
  localStorage.setItem('users', JSON.stringify(users))
  
  // Crear datos de demo para reservas gratuitas
  const demoFreeBookings = [
    {
      id: 'free-1',
      selectedClass: 'Clase Gratuita de Introducción',
      selectedDate: '2024-01-15',
      selectedTime: '18:00',
      name: 'Ana Martínez',
      email: 'ana@example.com',
      phone: '+54 9 11 3456-7890',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'free-2',
      selectedClass: 'Clase Gratuita de Pole Dance',
      selectedDate: '2024-01-16',
      selectedTime: '19:00',
      name: 'Laura Fernández',
      email: 'laura@example.com',
      phone: '+54 9 11 4567-8901',
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]
  
  localStorage.setItem('freeBookings', JSON.stringify(demoFreeBookings))
  
  console.log('Datos de demo inicializados con seguridad mejorada:', users)
  console.log('Reservas gratuitas de demo:', demoFreeBookings)
} 