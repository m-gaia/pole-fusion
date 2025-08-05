import { useState } from 'react'

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Iniciar Sesión</h2>
              <p className="text-gray-600">Accede a tu cuenta</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="admin@polefusion.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Admin2024!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Datos de Demo:</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>Admin:</strong> admin@polefusion.com / Admin2024!</p>
                <p><strong>Estudiante:</strong> ana@example.com / Ana2024!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth 