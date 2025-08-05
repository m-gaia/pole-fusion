import { useState, useEffect } from 'react'
import { auth, initializeDemoData } from '../utils/auth'

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    try {
      initializeDemoData()
      // Debug: Listar todos los usuarios
      auth.debugListUsers()
    } catch (error) {
      console.error('Error initializing demo data:', error)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    console.log('Login form submitted - Email:', email, 'Password length:', password.length)

    try {
      const user = auth.login(email, password)
      console.log('Login successful:', user)
      onLogin(user)
    } catch (err) {
      console.error('Login error:', err)
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Iniciar Sesión</h2>
        <p className="text-gray-600">Accede a tu cuenta</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50"
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          ¿No tienes cuenta?{' '}
          <button
            onClick={onSwitchToRegister}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Regístrate aquí
          </button>
        </p>
      </div>

      {/* Datos de demo */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-3">Acceso Rápido (Demo):</h4>
        <div className="space-y-2">
          <button
            onClick={() => {
              setEmail('admin@polefusion.com')
              setPassword('Admin2024!')
            }}
            className="w-full text-left p-2 bg-blue-100 hover:bg-blue-200 rounded text-sm text-blue-800 transition-colors"
          >
            <strong>Admin:</strong> admin@polefusion.com
          </button>
          <button
            onClick={() => {
              setEmail('maria@example.com')
              setPassword('Maria2024!')
            }}
            className="w-full text-left p-2 bg-green-100 hover:bg-green-200 rounded text-sm text-green-800 transition-colors"
          >
            <strong>Cliente:</strong> maria@example.com
          </button>
          <button
            onClick={() => {
              setEmail('ana@example.com')
              setPassword('Ana2024!')
            }}
            className="w-full text-left p-2 bg-purple-100 hover:bg-purple-200 rounded text-sm text-purple-800 transition-colors"
          >
            <strong>Estudiante:</strong> ana@example.com
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login 