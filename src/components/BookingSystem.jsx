import { useState, useEffect } from 'react'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'
import { auth } from '../utils/auth'
import { bookingManager } from '../utils/bookings'

const BookingSystem = () => {
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentUser = auth.getCurrentUser()

  // Si el usuario está logueado, usar sus datos
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name)
      setEmail(currentUser.email)
      setPhone(currentUser.phone)
    }
  }, [currentUser])

  const classes = [
    { id: 1, name: "Pole Dance Básico", duration: "1 hora", instructor: "Mariana Gaia" },
    { id: 2, name: "Pole Sport", duration: "1.25 horas", instructor: "Juli Prada" },
    { id: 3, name: "Exótico", duration: "1.25 horas", instructor: "Nanu Fernandez" },
    { id: 4, name: "Pole Fitness", duration: "1 hora", instructor: "Lucia Bazalli" }
  ]

  const timeSlots = [
    "9:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const bookingData = {
      userId: currentUser?.id || null,
      name: name,
      email: email,
      phone: phone,
      selectedClass: selectedClass,
      selectedDate: selectedDate,
      selectedTime: selectedTime
    }

    try {
      // Crear la reserva en el sistema
      bookingManager.createBooking(bookingData)
      
      // Si no está logueado, también enviar por WhatsApp como respaldo
      if (!currentUser) {
        const message = `Nueva reserva:
Clase: ${selectedClass}
Fecha: ${selectedDate}
Hora: ${selectedTime}
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}`

        const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
      }
      
      setIsSubmitted(true)
      
      // Reset form
      setTimeout(() => {
        setSelectedClass('')
        setSelectedDate('')
        setSelectedTime('')
        if (!currentUser) {
          setName('')
          setEmail('')
          setPhone('')
        }
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      alert('Error al crear la reserva: ' + error.message)
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">¡Reserva Creada!</h3>
        <p className="text-green-600">
          {currentUser 
            ? 'Tu reserva ha sido creada y está pendiente de confirmación.'
            : 'Te hemos enviado un mensaje por WhatsApp para confirmar tu reserva.'
          }
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Reserva tu Clase</h2>
        <p className="text-gray-600">
          {currentUser 
            ? `Bienvenido ${currentUser.name}, selecciona tu clase preferida`
            : 'Selecciona tu clase preferida y completa tus datos'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Selección de Clase */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="inline w-4 h-4 mr-2" />
            Selecciona tu clase
          </label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          >
            <option value="">Elige una clase</option>
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

        {/* Datos Personales - Solo si no está logueado */}
        {!currentUser && (
          <>
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
          </>
        )}

        {/* Botón de Envío */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          {currentUser ? 'Crear Reserva' : 'Reservar Clase'}
        </button>
      </form>

      {!currentUser && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Nota:</strong> Al hacer clic en "Reservar Clase" se abrirá WhatsApp para confirmar tu reserva.
          </p>
        </div>
      )}

      {currentUser && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Ventaja:</strong> Al estar logueado, tu reserva se guarda automáticamente en el sistema.
          </p>
        </div>
      )}
    </div>
  )
}

export default BookingSystem 