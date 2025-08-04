import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { auth } from '../utils/auth'
import { bookingManager, membershipManager } from '../utils/bookings'
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
  EyeOff
} from 'lucide-react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [config, setConfig] = useState(siteConfig)
  const [bookings, setBookings] = useState([])
  const [memberships, setMemberships] = useState([])
  const [showPassword, setShowPassword] = useState(false)

  const currentUser = auth.getCurrentUser()

  useEffect(() => {
    setBookings(bookingManager.getAllBookings())
    setMemberships(membershipManager.getAllMemberships())
  }, [])

  const handleSave = () => {
    updateSiteConfig(config)
    localStorage.setItem('siteConfig', JSON.stringify(config))
    alert('Configuración guardada!')
  }

  const handleBookingStatus = (bookingId, status) => {
    try {
      bookingManager.updateBookingStatus(bookingId, status)
      setBookings(bookingManager.getAllBookings())
      alert('Estado actualizado correctamente')
    } catch (error) {
      alert('Error al actualizar el estado')
    }
  }

  const handleMembershipStatus = (membershipId, status) => {
    try {
      membershipManager.updateMembershipStatus(membershipId, status)
      setMemberships(membershipManager.getAllMemberships())
      alert('Estado actualizado correctamente')
    } catch (error) {
      alert('Error al actualizar el estado')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'active': return 'bg-green-100 text-green-800'
      case 'expired': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pendiente'
      case 'confirmed': return 'Confirmada'
      case 'cancelled': return 'Cancelada'
      case 'completed': return 'Completada'
      case 'active': return 'Activa'
      case 'expired': return 'Expirada'
      default: return status
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-bold">Panel de Administración</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Bienvenido, {currentUser?.name}
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
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm text-blue-600">Total Reservas</p>
                  <p className="text-2xl font-bold text-blue-800">{bookingManager.getStats().total}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm text-yellow-600">Pendientes</p>
                  <p className="text-2xl font-bold text-yellow-800">{bookingManager.getStats().pending}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center">
                <CreditCard className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm text-green-600">Membresías</p>
                  <p className="text-2xl font-bold text-green-800">{membershipManager.getStats().total}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm text-purple-600">Usuarios</p>
                  <p className="text-2xl font-bold text-purple-800">
                    {JSON.parse(localStorage.getItem('users') || '[]').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bookings */}
        {activeTab === 'bookings' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Gestión de Reservas</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-left border">Cliente</th>
                    <th className="p-3 text-left border">Clase</th>
                    <th className="p-3 text-left border">Fecha</th>
                    <th className="p-3 text-left border">Hora</th>
                    <th className="p-3 text-left border">Estado</th>
                    <th className="p-3 text-left border">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b">
                      <td className="p-3 border">{booking.name}</td>
                      <td className="p-3 border">{booking.selectedClass}</td>
                      <td className="p-3 border">{new Date(booking.selectedDate).toLocaleDateString()}</td>
                      <td className="p-3 border">{booking.selectedTime}</td>
                      <td className="p-3 border">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                          {getStatusText(booking.status)}
                        </span>
                      </td>
                      <td className="p-3 border">
                        <div className="flex space-x-2">
                          {booking.status === 'pending' && (
                            <>
                              <button
                                onClick={() => handleBookingStatus(booking.id, 'confirmed')}
                                className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                              >
                                <Check size={12} />
                              </button>
                              <button
                                onClick={() => handleBookingStatus(booking.id, 'cancelled')}
                                className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                              >
                                <XIcon size={12} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Memberships */}
        {activeTab === 'memberships' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Gestión de Membresías</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 text-left border">Cliente</th>
                    <th className="p-3 text-left border">Plan</th>
                    <th className="p-3 text-left border">Fecha</th>
                    <th className="p-3 text-left border">Estado</th>
                    <th className="p-3 text-left border">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {memberships.map((membership) => (
                    <tr key={membership.id} className="border-b">
                      <td className="p-3 border">{membership.name}</td>
                      <td className="p-3 border">{membership.selectedPlan}</td>
                      <td className="p-3 border">{new Date(membership.createdAt).toLocaleDateString()}</td>
                      <td className="p-3 border">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(membership.status)}`}>
                          {getStatusText(membership.status)}
                        </span>
                      </td>
                      <td className="p-3 border">
                        <div className="flex space-x-2">
                          {membership.status === 'pending' && (
                            <>
                              <button
                                onClick={() => handleMembershipStatus(membership.id, 'active')}
                                className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                              >
                                <Check size={12} />
                              </button>
                              <button
                                onClick={() => handleMembershipStatus(membership.id, 'cancelled')}
                                className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                              >
                                <XIcon size={12} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* Información del Negocio */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Información del Negocio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    value={config.business.name}
                    onChange={(e) => setConfig({
                      ...config,
                      business: { ...config.business, name: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tagline</label>
                  <input
                    type="text"
                    value={config.business.tagline}
                    onChange={(e) => setConfig({
                      ...config,
                      business: { ...config.business, tagline: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono</label>
                  <input
                    type="text"
                    value={config.business.phone}
                    onChange={(e) => setConfig({
                      ...config,
                      business: { ...config.business, phone: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={config.business.email}
                    onChange={(e) => setConfig({
                      ...config,
                      business: { ...config.business, email: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            {/* Colores */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Colores del Tema</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Color Principal</label>
                  <input
                    type="color"
                    value={config.colors.primary}
                    onChange={(e) => setConfig({
                      ...config,
                      colors: { ...config.colors, primary: e.target.value }
                    })}
                    className="w-full h-10 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Color Secundario</label>
                  <input
                    type="color"
                    value={config.colors.secondary}
                    onChange={(e) => setConfig({
                      ...config,
                      colors: { ...config.colors, secondary: e.target.value }
                    })}
                    className="w-full h-10 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Color Acento</label>
                  <input
                    type="color"
                    value={config.colors.accent}
                    onChange={(e) => setConfig({
                      ...config,
                      colors: { ...config.colors, accent: e.target.value }
                    })}
                    className="w-full h-10 border rounded"
                  />
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Redes Sociales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Instagram</label>
                  <input
                    type="url"
                    value={config.social.instagram}
                    onChange={(e) => setConfig({
                      ...config,
                      social: { ...config.social, instagram: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Facebook</label>
                  <input
                    type="url"
                    value={config.social.facebook}
                    onChange={(e) => setConfig({
                      ...config,
                      social: { ...config.social, facebook: e.target.value }
                    })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel 