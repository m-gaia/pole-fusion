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
    console.log('Login attempt - Email:', email, 'Password length:', password.length)
    
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    console.log('Total users in storage:', users.length)
    
    // Normalizar email a minúsculas para comparación
    const normalizedEmail = email.toLowerCase().trim()
    console.log('Normalized email:', normalizedEmail)
    
    const user = users.find(u => {
      console.log('Checking user:', u.email, 'Password match:', u.password === password, 'Active:', u.isActive)
      return u.email.toLowerCase() === normalizedEmail && u.password === password && u.isActive
    })
    
    if (!user) {
      console.log('No user found or invalid credentials')
      throw new Error('Email o contraseña incorrectos')
    }

    console.log('Login successful for user:', user.email)

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

  // Debug: Listar todos los usuarios (solo para desarrollo)
  debugListUsers: () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    console.log('=== DEBUG: TODOS LOS USUARIOS ===')
    users.forEach((user, index) => {
      console.log(`Usuario ${index + 1}:`, {
        email: user.email,
        password: user.password ? `${user.password.substring(0, 3)}...` : 'undefined',
        role: user.role,
        isActive: user.isActive,
        name: user.name
      })
    })
    console.log('=== FIN DEBUG ===')
    return users
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

  // Verificar si es estudiante
  isStudent: () => {
    const user = auth.getCurrentUser()
    return user && user.role === 'student'
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

// Inicializar datos de demo
export const initializeDemoData = () => {
  // Usuarios de demo
  const demoUsers = [
    {
      id: 'admin-1',
      name: 'Administrador',
      email: 'admin@polefusion.com',
      password: 'Admin2024!',
      phone: '5491112345678',
      role: 'admin',
      isActive: true,
      lastLogin: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'client-1',
      name: 'María González',
      email: 'maria@example.com',
      password: 'Maria2024!',
      phone: '5491112345679',
      role: 'client',
      isActive: true,
      lastLogin: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'client-2',
      name: 'Carlos Rodríguez',
      email: 'carlos@example.com',
      password: 'Carlos2024!',
      phone: '5491112345680',
      role: 'client',
      isActive: true,
      lastLogin: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'student-1',
      name: 'Ana Martínez',
      email: 'ana@example.com',
      password: 'Ana2024!',
      phone: '5491112345681',
      role: 'student',
      isActive: true,
      lastLogin: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]

  localStorage.setItem('users', JSON.stringify(demoUsers))
  console.log('Usuarios de demo inicializados:', demoUsers)

  // Inicializar datos de cursos
  initializeCourseDemoData()
}

// Limpiar todos los datos de demo
export const clearDemoData = () => {
  localStorage.removeItem('users')
  localStorage.removeItem('bookings')
  localStorage.removeItem('memberships')
  localStorage.removeItem('freeBookings')
  localStorage.removeItem('courses')
  localStorage.removeItem('lessons')
  localStorage.removeItem('materials')
  localStorage.removeItem('comments')
  localStorage.removeItem('currentSession')
  console.log('Todos los datos de demo han sido eliminados')
}

// Reinicializar datos de demo
export const resetDemoData = () => {
  clearDemoData()
  initializeDemoData()
  console.log('Datos de demo reinicializados')
}

// Inicializar datos de demo automáticamente si no existen
if (!localStorage.getItem('users')) {
  initializeDemoData()
} 