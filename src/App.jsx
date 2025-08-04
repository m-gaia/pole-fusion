import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminPanel from './components/AdminPanel'
import Home from './pages/Home'
import Classes from './pages/Classes'
import Instructors from './pages/Instructors'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Bookings from './pages/Bookings'
import Auth from './pages/Auth'
import { auth } from './utils/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar si hay un usuario logueado al cargar la app
    const user = auth.getCurrentUser()
    setCurrentUser(user)
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    auth.logout()
    setCurrentUser(null)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header currentUser={currentUser} onLogout={handleLogout} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/clases" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Classes />
              </motion.div>
            } />
            <Route path="/instructores" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Instructors />
              </motion.div>
            } />
            <Route path="/galeria" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Gallery />
              </motion.div>
            } />
            <Route path="/testimonios" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Testimonials />
              </motion.div>
            } />
            <Route path="/contacto" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            } />
            <Route path="/reservas" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Bookings />
              </motion.div>
            } />
            <Route path="/auth" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Auth />
              </motion.div>
            } />
            <Route path="/admin" element={
              currentUser && auth.isAdmin() ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="min-h-screen bg-gray-50 py-12 pt-32">
                    <div className="container mx-auto px-4">
                      <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                          Panel de Administración
                        </h1>
                        <p className="text-xl text-gray-600">
                          Bienvenido, {currentUser.name}
                        </p>
                      </div>
                      <AdminPanel />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <Navigate to="/auth" replace />
              )
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App 