import { useState, useEffect } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const Auth = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('login')
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  console.log('Auth component rendering, activeTab:', activeTab)
  
  const handleLogin = (user) => {
    console.log('Login successful:', user)
    onLogin(user)
  }
  
  const handleRegister = (user) => {
    console.log('Register successful:', user)
    setActiveTab('login')
    alert('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.')
  }
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-16 lg:pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando autenticación...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
      <div className="max-w-md w-full space-y-8">
        {/* Header con tabs */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'login'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'register'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Registrarse
            </button>
          </div>
          
          {/* Contenido de los tabs */}
          <div className="p-8">
            {activeTab === 'login' ? (
              <Login 
                onLogin={handleLogin}
                onSwitchToRegister={() => setActiveTab('register')}
              />
            ) : (
              <Register 
                onRegister={handleRegister}
                onSwitchToLogin={() => setActiveTab('login')}
              />
            )}
          </div>
        </div>
        
        {/* Información adicional */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Sistema de autenticación funcional
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Ruta: /auth | Tab activo: {activeTab}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth 