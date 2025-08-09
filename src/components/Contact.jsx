import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    classType: 'iniciacion'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '', classType: 'iniciacion' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+54 261 1234-5678',
      description: 'Llamanos de lunes a domingo'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@polefusion.com',
      description: 'Respondemos en 24 horas'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      info: 'Calle Videla Correa 1234, Ciudad Mendoza',
      description: 'Ciudad Mendoza, Argentina'
    },
    {
      icon: Clock,
      title: 'Horarios',
      info: 'Lun-Dom 9:00-22:00',
      description: 'Clases todo el día'
    }
  ]

  const classTypes = [
    { value: 'iniciacion', label: 'Iniciación' },
    { value: 'intermedio', label: 'Intermedio' },
    { value: 'avanzado', label: 'Avanzado' },
    { value: 'consulta', label: 'Consulta general' }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Lista para comenzar tu viaje en pole dance? Contáctanos y te ayudaremos 
            a encontrar la clase perfecta para ti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Envíanos un mensaje
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  ¡Mensaje enviado!
                </h4>
                <p className="text-gray-600 mb-6">
                  Gracias por contactarnos. Te responderemos en las próximas 24 horas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+54 261 1234-5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de clase
                    </label>
                    <select
                      name="classType"
                      value={formData.classType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      {classTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntanos sobre ti y tus objetivos..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-4"
                >
                  <Send size={20} />
                  <span>Enviar mensaje</span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-lg font-medium text-primary-600 mb-1">
                        {contact.info}
                      </p>
                      <p className="text-sm text-gray-600">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="font-semibold text-gray-800 mb-4">Ubicación</h4>
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary-500 mx-auto mb-2" size={32} />
                  <p className="text-gray-600 text-sm">
                    Calle Videla Correa 1234, Ciudad Mendoza
                  </p>
                  <p className="text-gray-500 text-xs">
                    Ciudad Mendoza, Argentina
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white"
            >
              <h4 className="font-semibold mb-4">¿Necesitas ayuda rápida?</h4>
              <p className="text-white/90 mb-4">
                Llámanos directamente o envíanos un WhatsApp para una respuesta inmediata.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+542611234567"
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                >
                  <Phone size={16} />
                  <span>+54 261 1234-5678</span>
                </a>
                <a
                  href="https://wa.me/5492611234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                >
                  <span>📱 WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 