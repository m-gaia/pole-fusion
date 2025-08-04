// Utilidades de autenticación
export const auth = {
  // Registrar nuevo usuario
  register: (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    // Verificar si el email ya existe
    if (users.find(user => user.email === userData.email)) {
      throw new Error('El email ya está registrado')
    }
    
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      role: 'client',
      createdAt: new Date().toISOString(),
      isActive: true
    }
    
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    
    return newUser
  },

  // Iniciar sesión
  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === email && u.password === password && u.isActive)
    
    if (!user) {
      throw new Error('Email o contraseña incorrectos')
    }
    
    // Guardar sesión actual
    localStorage.setItem('currentUser', JSON.stringify(user))
    return user
  },

  // Cerrar sesión
  logout: () => {
    localStorage.removeItem('currentUser')
  },

  // Obtener usuario actual
  getCurrentUser: () => {
    const user = localStorage.getItem('currentUser')
    return user ? JSON.parse(user) : null
  },

  // Verificar si está autenticado
  isAuthenticated: () => {
    return !!localStorage.getItem('currentUser')
  },

  // Verificar si es admin
  isAdmin: () => {
    const user = auth.getCurrentUser()
    return user && user.role === 'admin'
  }
}

// Datos iniciales para demo
export const initializeDemoData = () => {
  // Crear admin por defecto si no existe
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  
  if (!users.find(u => u.role === 'admin')) {
    const adminUser = {
      id: 'admin-1',
      name: 'Administrador',
      email: 'admin@polefusion.com',
      password: 'admin123',
      phone: '+54 11 1234-5678',
      role: 'admin',
      createdAt: new Date().toISOString(),
      isActive: true
    }
    
    users.push(adminUser)
    localStorage.setItem('users', JSON.stringify(users))
  }

  // Crear algunos usuarios de ejemplo
  if (users.length === 1) { // Solo admin existe
    const demoUsers = [
      {
        id: 'user-1',
        name: 'María González',
        email: 'maria@example.com',
        password: '123456',
        phone: '+54 9 11 1234-5678',
        role: 'client',
        createdAt: new Date().toISOString(),
        isActive: true
      },
      {
        id: 'user-2',
        name: 'Carlos Rodríguez',
        email: 'carlos@example.com',
        password: '123456',
        phone: '+54 9 11 2345-6789',
        role: 'client',
        createdAt: new Date().toISOString(),
        isActive: true
      }
    ]
    
    users.push(...demoUsers)
    localStorage.setItem('users', JSON.stringify(users))
  }
} 