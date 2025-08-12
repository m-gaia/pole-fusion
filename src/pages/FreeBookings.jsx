import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'
import { freeBookingManager } from '../utils/freeBookings'

const FreeBookings = () => {
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const classes = [
    { id: 1, name: "Clase Gratuita de Introducción", duration: "1 hora", instructor: "Mariana Gaia" },
    { id: 2, name: "Clase Gratuita de Pole Sport", duration: "1 hora", instructor: "Lucia Bazalli" }
  ]

  const timeSlots = [
    "9:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Crear la reserva en localStorage
      const bookingData = {
        selectedClass,
        selectedDate,
        selectedTime,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim()
      }

      // Guardar en localStorage
      const newBooking = freeBookingManager.createFreeBooking(bookingData)
      
      // Enviar mensaje por WhatsApp
      const message = `Nueva reserva de clase gratuita:
Clase: ${selectedClass}
Fecha: ${selectedDate}
Hora: ${selectedTime}
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

ID de Reserva: ${newBooking.id}`

      const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      setIsSubmitted(true)
      
      // Reset form
      setTimeout(() => {
        setSelectedClass('')
        setSelectedDate('')
        setSelectedTime('')
        setName('')
        setEmail('')
        setPhone('')
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error al crear reserva:', error)
      alert('Error al crear la reserva. Por favor, intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30) // 30 días en adelante
    return maxDate.toISOString().split('T')[0]
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 pt-20 lg:pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-4">¡Reserva Enviada!</h3>
              <p className="text-green-600 mb-6">
                Tu reserva de clase gratuita ha sido registrada exitosamente. 
                Te hemos enviado un mensaje por WhatsApp para coordinar los detalles.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Próximos pasos:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Revisa WhatsApp para confirmar la clase</li>
                  <li>• Llega 10 minutos antes de tu clase</li>
                  <li>• Trae ropa cómoda y una botella de agua</li>
                </ul>
              </div>
              <a
                href="/auth"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Registrarse para más funcionalidades
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Clase Gratuita
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prueba una clase gratuita y descubre el mundo del pole dance. 
            <br />
            <span className="text-purple-600 font-semibold">
              ¡Regístrate para acceder a todas las funcionalidades!
            </span>
          </p>
        </motion.div>

        {/* Formulario de Reserva Gratuita */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Reserva tu Clase Gratuita</h2>
              <p className="text-gray-600">Completa tus datos para coordinar tu clase de prueba</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selección de Clase */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline w-4 h-4 mr-2" />
                  Selecciona tu clase gratuita
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Elige una clase gratuita</option>
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.name}>
                      {cls.name} - {cls.instructor} ({cls.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Fecha y Hora */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getMinDate()}
                    max={getMaxDate()}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Hora
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Elige una hora</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Datos Personales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50"
              >
                {isLoading ? 'Enviando reserva...' : 'Reservar Clase Gratuita'}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Nota:</strong> Al hacer clic en "Reservar Clase Gratuita" se guardará tu reserva y se abrirá WhatsApp para coordinar tu clase.
              </p>
            </div>

            {/* Call to Action para Registro */}
            <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                ¿Quieres más funcionalidades?
              </h3>
              <p className="text-purple-700 mb-4">
                Regístrate para acceder a reservas automáticas, historial de clases y más.
              </p>
              <a
                href="/auth"
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Registrarse
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FreeBookings 