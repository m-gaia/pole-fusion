import { useState } from 'react'
import { motion } from 'framer-motion'
import Login from '../components/Login'
import Register from '../components/Register'
import { auth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const handleLogin = (user) => {
    // Redirigir según el rol
    if (user.role === 'admin') {
      navigate('/admin')
    } else {
      navigate('/reservas')
    }
  }

  const handleRegister = (user) => {
    // Loguear automáticamente después del registro
    auth.login(user.email, user.password)
    navigate('/reservas')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {isLogin ? (
            <Login 
              onLogin={handleLogin}
              onSwitchToRegister={() => setIsLogin(false)}
            />
          ) : (
            <Register 
              onRegister={handleRegister}
              onSwitchToLogin={() => setIsLogin(true)}
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Auth 