import { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true)

  const handleRegister = (user) => {
    // Loguear automáticamente después del registro
    onLogin(user)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {isLogin ? (
            <Login 
              onLogin={onLogin}
              onSwitchToRegister={() => setIsLogin(false)}
            />
          ) : (
            <Register 
              onRegister={handleRegister}
              onSwitchToLogin={() => setIsLogin(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth 