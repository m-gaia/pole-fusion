import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { auth } from '../utils/auth'
import { bookingManager, membershipManager } from '../utils/bookings'
import { freeBookingManager } from '../utils/freeBookings'
import { siteConfig, updateSiteConfig } from '../config/siteConfig'
import { 
  Users, 
  Calendar, 
  CreditCard, 
  Settings, 
  X, 
  Check, 
  X as XIcon,
  Eye,
  EyeOff,
  Gift,
  MessageCircle
} from 'lucide-react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [config, setConfig] = useState(siteConfig)
  const [bookings, setBookings] = useState([])
  const [memberships, setMemberships] = useState([])
  const [freeBookings, setFreeBookings] = useState([])
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    setBookings(bookingManager.getAllBookings())
    setMemberships(membershipManager.getAllMemberships())
    setFreeBookings(freeBookingManager.getAllFreeBookings())
  }, [])

  const handleSave = () => {
    updateSiteConfig(config)
    alert('Configuración guardada exitosamente')
  }

  const handleBookingStatusChange = (bookingId, newStatus) => {
    try {
      bookingManager.updateBookingStatus(bookingId, newStatus)
      setBookings(bookingManager.getAllBookings())
    } catch (error) {
      alert('Error al actualizar la reserva')
    }
  }

  const handleFreeBookingStatusChange = (bookingId, newStatus) => {
    try {
      freeBookingManager.updateFreeBookingStatus(bookingId, newStatus)
      setFreeBookings(freeBookingManager.getAllFreeBookings())
    } catch (error) {
      alert('Error al actualizar la reserva gratuita')
    }
  }

  const handleDeleteBooking = (bookingId) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta reserva?')) {
      try {
        bookingManager.deleteBooking(bookingId)
        setBookings(bookingManager.getAllBookings())
      } catch (error) {
        alert('Error al eliminar la reserva')
      }
    }
  }

  const handleDeleteFreeBooking = (bookingId) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta reserva gratuita?')) {
      try {
        freeBookingManager.deleteFreeBooking(bookingId)
        setFreeBookings(freeBookingManager.getAllFreeBookings())
      } catch (error) {
        alert('Error al eliminar la reserva gratuita')
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pendiente'
      case 'confirmed': return 'Confirmada'
      case 'cancelled': return 'Cancelada'
      default: return status
    }
  }

  const stats = {
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
    totalMemberships: memberships.length,
    pendingMemberships: memberships.filter(m => m.status === 'pending').length,
    confirmedMemberships: memberships.filter(m => m.status === 'confirmed').length,
    totalFreeBookings: freeBookings.length,
    pendingFreeBookings: freeBookings.filter(b => b.status === 'pending').length,
    confirmedFreeBookings: freeBookings.filter(b => b.status === 'confirmed').length
  }

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-bold">Panel de Administración</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Bienvenido, {auth.getCurrentUser()?.name}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-6 py-3 font-medium ${
            activeTab === 'dashboard' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('bookings')}
          className={`px-6 py-3 font-medium ${
            activeTab === 'bookings' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Reservas
        </button>
        <button
          onClick={() => setActiveTab('freeBookings')}
          className={`px-6 py-3 font-medium ${
            activeTab === 'freeBookings' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Clases Gratuitas
        </button>
        <button
          onClick={() => setActiveTab('memberships')}
          className={`px-6 py-3 font-medium ${
            activeTab === 'memberships' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Membresías
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-6 py-3 font-medium ${
            activeTab === 'settings' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Configuración
        </button>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600">Reservas Totales</p>
                    <p className="text-2xl font-bold text-blue-800">{stats.totalBookings}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <div className="mt-2 text-sm text-blue-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
                    {stats.confirmedBookings} Confirmadas
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    {stats.pendingBookings} Pendientes
                  </span>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600">Clases Gratuitas</p>
                    <p className="text-2xl font-bold text-green-800">{stats.totalFreeBookings}</p>
                  </div>
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <div className="mt-2 text-sm text-green-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
                    {stats.confirmedFreeBookings} Confirmadas
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    {stats.pendingFreeBookings} Pendientes
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600">Membresías</p>
                    <p className="text-2xl font-bold text-purple-800">{stats.totalMemberships}</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <div className="mt-2 text-sm text-purple-600">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">
                    {stats.confirmedMemberships} Confirmadas
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    {stats.pendingMemberships} Pendientes
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border rounded-lg p-6">
              <h4 className="font-semibold mb-4">Actividad Reciente</h4>
              <div className="space-y-3">
                {bookings.slice(0, 5).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">{booking.name}</p>
                      <p className="text-sm text-gray-600">{booking.selectedClass} - {booking.selectedDate}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(booking.status)}`}>
                      {getStatusText(booking.status)}
                    </span>
                  </div>
                ))}
                {bookings.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No hay reservas recientes</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Gestión de Reservas</h3>
            
            {bookings.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No hay reservas registradas</p>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{booking.name}</h4>
                        <p className="text-sm text-gray-600">{booking.email} • {booking.phone}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Clase</p>
                        <p className="text-sm">{booking.selectedClass}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Fecha</p>
                        <p className="text-sm">{booking.selectedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Hora</p>
                        <p className="text-sm">{booking.selectedTime}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <select
                        value={booking.status}
                        onChange={(e) => handleBookingStatusChange(booking.id, e.target.value)}
                        className="px-3 py-1 border rounded text-sm"
                      >
                        <option value="pending">Pendiente</option>
                        <option value="confirmed">Confirmada</option>
                        <option value="cancelled">Cancelada</option>
                      </select>
                      
                      <button
                        onClick={() => handleDeleteBooking(booking.id)}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'freeBookings' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Gestión de Clases Gratuitas</h3>
            
            {freeBookings.length === 0 ? (
              <div className="text-center py-8">
                <Gift className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No hay reservas de clases gratuitas</p>
              </div>
            ) : (
              <div className="space-y-4">
                {freeBookings.map((booking) => (
                  <div key={booking.id} className="border rounded-lg p-4 bg-gradient-to-r from-green-50 to-blue-50">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{booking.name}</h4>
                        <p className="text-sm text-gray-600">{booking.email} • {booking.phone}</p>
                        <p className="text-xs text-purple-600 font-medium">ID: {booking.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Clase Gratuita</p>
                        <p className="text-sm">{booking.selectedClass}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Fecha</p>
                        <p className="text-sm">{booking.selectedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Hora</p>
                        <p className="text-sm">{booking.selectedTime}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <select
                        value={booking.status}
                        onChange={(e) => handleFreeBookingStatusChange(booking.id, e.target.value)}
                        className="px-3 py-1 border rounded text-sm"
                      >
                        <option value="pending">Pendiente</option>
                        <option value="confirmed">Confirmada</option>
                        <option value="cancelled">Cancelada</option>
                      </select>
                      
                      <button
                        onClick={() => {
                          const message = `Hola ${booking.name}, tu clase gratuita de ${booking.selectedClass} para el ${booking.selectedDate} a las ${booking.selectedTime} ha sido confirmada. ¡Te esperamos!`
                          const whatsappUrl = `https://wa.me/${booking.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, '_blank')
                        }}
                        className="px-3 py-1 bg-green-100 text-green-600 rounded text-sm hover:bg-green-200 flex items-center"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        WhatsApp
                      </button>
                      
                      <button
                        onClick={() => handleDeleteFreeBooking(booking.id)}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'memberships' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Gestión de Membresías</h3>
            
            {memberships.length === 0 ? (
              <div className="text-center py-8">
                <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No hay solicitudes de membresía</p>
              </div>
            ) : (
              <div className="space-y-4">
                {memberships.map((membership) => (
                  <div key={membership.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{membership.name}</h4>
                        <p className="text-sm text-gray-600">{membership.email} • {membership.phone}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(membership.status)}`}>
                        {getStatusText(membership.status)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Plan</p>
                        <p className="text-sm">{membership.selectedPlan}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Mensaje</p>
                        <p className="text-sm">{membership.message}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <select
                        value={membership.status}
                        onChange={(e) => {
                          try {
                            membershipManager.updateMembershipStatus(membership.id, e.target.value)
                            setMemberships(membershipManager.getAllMemberships())
                          } catch (error) {
                            alert('Error al actualizar la membresía')
                          }
                        }}
                        className="px-3 py-1 border rounded text-sm"
                      >
                        <option value="pending">Pendiente</option>
                        <option value="confirmed">Confirmada</option>
                        <option value="cancelled">Cancelada</option>
                      </select>
                      
                      <button
                        onClick={() => {
                          try {
                            membershipManager.deleteMembership(membership.id)
                            setMemberships(membershipManager.getAllMemberships())
                          } catch (error) {
                            alert('Error al eliminar la membresía')
                          }
                        }}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Configuración del Sitio</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre del Negocio
                </label>
                <input
                  type="text"
                  value={config.businessName}
                  onChange={(e) => setConfig({...config, businessName: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={config.phone}
                  onChange={(e) => setConfig({...config, phone: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={config.email}
                  onChange={(e) => setConfig({...config, email: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección
                </label>
                <input
                  type="text"
                  value={config.address}
                  onChange={(e) => setConfig({...config, address: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción
                </label>
                <textarea
                  value={config.description}
                  onChange={(e) => setConfig({...config, description: e.target.value})}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            
            <button
              onClick={handleSave}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Guardar Configuración
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel 