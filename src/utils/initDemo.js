// Utilidad para inicializar datos de demo
import { initializeDemoData } from './auth'
import { initializeCourseDemoData } from './courses'

export const forceInitializeAllData = () => {
  try {
    console.log('Inicializando todos los datos de demo...')
    
    // Inicializar usuarios
    initializeDemoData()
    
    // Inicializar cursos
    initializeCourseDemoData()
    
    console.log('Todos los datos de demo han sido inicializados')
    return true
  } catch (error) {
    console.error('Error al inicializar datos de demo:', error)
    return false
  }
}

export const checkAndInitializeData = () => {
  // Verificar si existen datos básicos
  const users = localStorage.getItem('users')
  const courses = localStorage.getItem('courses')
  
  if (!users || !courses) {
    console.log('Datos faltantes detectados, inicializando...')
    forceInitializeAllData()
  }
} 