import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Instagram, Facebook } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Clases', path: '/clases' },
    { name: 'Instructores', path: '/instructores' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">PF</span>
            </motion.div>
            <div>
              <h1 className="text-xl lg:text-2xl font-display font-bold text-gradient">
                Pole Fusion
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Fuerza, arte y libertad</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Facebook size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-4 pt-4 border-t border-gray-100">
              <a
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

export default Header 