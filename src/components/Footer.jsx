import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Academia': [
      { name: 'Inicio', path: '/' },
      { name: 'Clases', path: '/clases' },
      { name: 'Instructores', path: '/instructores' },
      { name: 'Galería', path: '/galeria' },
    ],
    'Información': [
      { name: 'Testimonios', path: '/testimonios' },
      { name: 'Contacto', path: '/contacto' },
      { name: 'Política de Privacidad', path: '/privacidad' },
      { name: 'Términos y Condiciones', path: '/terminos' },
    ]
  }

  const contactInfo = [
    { icon: Phone, text: '+54 261 1234-5678' },
    { icon: Mail, text: 'info@polefusion.com' },
    { icon: MapPin, text: 'Calle Videla Correa 1234, Ciudad Mendoza' },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/polefusion', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/polefusion', label: 'Facebook' },
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PF</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gradient">
                    Pole Fusion
                  </h3>
                  <p className="text-sm text-gray-300">Fuerza, arte y libertad</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Academia de pole dance en Ciudad Mendoza. Ofrecemos clases para todos los niveles, 
                desde principiantes hasta avanzados. Descubre tu fuerza interior.
              </p>
              
              {/* Redes sociales */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enlaces de navegación */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4 text-white">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Información de contacto */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon size={16} className="text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{contact.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Horarios */}
              <div className="mt-6">
                <h5 className="font-semibold mb-2 text-white">Horarios</h5>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Lunes a Viernes: 9:00 - 22:00</p>
                  <p>Sábados: 10:00 - 18:00</p>
                  <p>Domingos: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-dark-800">
          <div className="section-padding py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © {currentYear} Pole Fusion. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-1 mt-2 sm:mt-0">
                <span className="text-gray-400 text-sm">Hecho con</span>
                <Heart size={14} className="text-primary-400" />
                <span className="text-gray-400 text-sm">por DevMGaia en Ciudad Mendoza</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 