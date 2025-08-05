import { useState } from 'react'
import { motion } from 'framer-motion'
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
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
        </motion.div>
      </div>
    </div>
  )
}

export default Auth 