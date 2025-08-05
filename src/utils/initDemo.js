// Utilidad para inicializar datos de demo
import { initializeDemoData } from './auth'
import { initializeCourseDemoData } from './courses'

export const forceInitializeAllData = () => {
  try {
    console.log('🔄 Inicializando todos los datos de demo...')
    
    // Limpiar datos existentes
    localStorage.removeItem('courses')
    localStorage.removeItem('lessons')
    localStorage.removeItem('materials')
    localStorage.removeItem('comments')
    
    // Inicializar usuarios
    initializeDemoData()
    
    // Inicializar cursos
    initializeCourseDemoData()
    
    console.log('✅ Todos los datos de demo han sido inicializados')
    return true
  } catch (error) {
    console.error('❌ Error al inicializar datos de demo:', error)
    return false
  }
}

export const checkAndInitializeData = () => {
  // Verificar si existen datos básicos
  const users = localStorage.getItem('users')
  const courses = localStorage.getItem('courses')
  
  if (!users || !courses) {
    console.log('📊 Datos faltantes detectados, inicializando...')
    forceInitializeAllData()
  }
}

// Función para verificar el estado de los datos
export const checkDataStatus = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const courses = JSON.parse(localStorage.getItem('courses') || '[]')
  const lessons = JSON.parse(localStorage.getItem('lessons') || '[]')
  const materials = JSON.parse(localStorage.getItem('materials') || '[]')
  
  console.log('📊 Estado de los datos:')
  console.log('- Usuarios:', users.length)
  console.log('- Cursos:', courses.length)
  console.log('- Clases:', lessons.length)
  console.log('- Materiales:', materials.length)
  
  return {
    users: users.length,
    courses: courses.length,
    lessons: lessons.length,
    materials: materials.length
  }
}

// Inicialización automática al importar este módulo
if (typeof window !== 'undefined') {
  // Solo ejecutar en el navegador
  setTimeout(() => {
    checkAndInitializeData()
  }, 100)
} 