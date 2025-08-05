import { useState, useEffect } from 'react'

const Auth = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  console.log('Auth component rendering - SIMPLE VERSION')
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Sistema de Autenticación
            </h1>
            <p className="text-gray-600 mb-6">
              Página de prueba - Ruta /auth funcionando
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => {
                  console.log('Botón de prueba clickeado')
                  alert('¡Funciona! El componente Auth se está renderizando correctamente.')
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
              >
                Botón de Prueba
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Componente Auth cargado correctamente
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Ruta: /auth | Timestamp: {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth 