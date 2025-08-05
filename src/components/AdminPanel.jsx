import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { auth, resetDemoData } from '../utils/auth'
import { bookingManager, membershipManager, freeBookingManager } from '../utils/bookings'
import { courseManager, lessonManager, materialManager, commentManager } from '../utils/courses'
import { forceInitializeAllData } from '../utils/initDemo'
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
  BookOpen,
  Play,
  FileText,
  MessageCircle,
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [config, setConfig] = useState(siteConfig)
  const [bookings, setBookings] = useState([])
  const [memberships, setMemberships] = useState([])
  const [freeBookings, setFreeBookings] = useState([])
  const [courses, setCourses] = useState([])
  const [lessons, setLessons] = useState([])
  const [materials, setMaterials] = useState([])
  const [users, setUsers] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    console.log('AdminPanel: Cargando datos...')
    setBookings(bookingManager.getAllBookings())
    setMemberships(membershipManager.getAllMemberships())
    setFreeBookings(freeBookingManager.getAllFreeBookings())
    
    // Cargar datos de cursos con logs
    const coursesData = courseManager.getAllCourses()
    console.log('AdminPanel: Cursos cargados:', coursesData)
    setCourses(coursesData)
    
    const lessonsData = JSON.parse(localStorage.getItem('lessons') || '[]')
    console.log('AdminPanel: Clases cargadas:', lessonsData)
    setLessons(lessonsData)
    
    const materialsData = JSON.parse(localStorage.getItem('materials') || '[]')
    console.log('AdminPanel: Materiales cargados:', materialsData)
    setMaterials(materialsData)
    
    const usersData = JSON.parse(localStorage.getItem('users') || '[]')
    console.log('AdminPanel: Usuarios cargados:', usersData)
    setUsers(usersData)
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
      console.error('Error al actualizar reserva:', error)
    }
  }

  const handleFreeBookingStatusChange = (bookingId, newStatus) => {
    try {
      freeBookingManager.updateFreeBookingStatus(bookingId, newStatus)
      setFreeBookings(freeBookingManager.getAllFreeBookings())
    } catch (error) {
      console.error('Error al actualizar reserva gratuita:', error)
    }
  }

  const handleDeleteBooking = (bookingId) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta reserva?')) {
      try {
        bookingManager.deleteBooking(bookingId)
        setBookings(bookingManager.getAllBookings())
      } catch (error) {
        console.error('Error al eliminar reserva:', error)
      }
    }
  }

  const handleDeleteFreeBooking = (bookingId) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta reserva gratuita?')) {
      try {
        freeBookingManager.deleteFreeBooking(bookingId)
        setFreeBookings(freeBookingManager.getAllFreeBookings())
      } catch (error) {
        console.error('Error al eliminar reserva gratuita:', error)
      }
    }
  }

  const handleDeleteLesson = (lessonId) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta clase?')) {
      try {
        lessonManager.deleteLesson(lessonId)
        setLessons(lessonManager.getLessonsByCourse(selectedCourse?.id || ''))
      } catch (error) {
        console.error('Error al eliminar clase:', error)
      }
    }
  }

  const handleDeleteMaterial = (materialId) => {
    if (confirm('¿Estás seguro de que quieres eliminar este material?')) {
      try {
        materialManager.deleteMaterial(materialId)
        setMaterials(materialManager.getMaterialsByCourse(selectedCourse?.id || ''))
      } catch (error) {
        console.error('Error al eliminar material:', error)
      }
    }
  }

  const handleDeleteUser = (userId) => {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      try {
        const updatedUsers = users.filter(user => user.id !== userId)
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        setUsers(updatedUsers)
      } catch (error) {
        console.error('Error al eliminar usuario:', error)
      }
    }
  }

  const handleResetDemoData = () => {
    if (confirm('¿Estás seguro de que quieres reinicializar todos los datos de demo? Esto eliminará todos los datos actuales.')) {
      try {
        resetDemoData()
        // Recargar todos los datos
        setBookings(bookingManager.getAllBookings())
        setMemberships(membershipManager.getAllMemberships())
        setFreeBookings(freeBookingManager.getAllFreeBookings())
        setCourses(courseManager.getAllCourses())
        setLessons(JSON.parse(localStorage.getItem('lessons') || '[]'))
        setMaterials(JSON.parse(localStorage.getItem('materials') || '[]'))
        setUsers(JSON.parse(localStorage.getItem('users') || '[]'))
        alert('Datos de demo reinicializados correctamente')
      } catch (error) {
        console.error('Error al reinicializar datos:', error)
        alert('Error al reinicializar datos')
      }
    }
  }

  const handleForceInit = () => {
    try {
      // Forzar inicialización de datos de cursos
      forceInitializeAllData()
      
      // Recargar datos
      setCourses(courseManager.getAllCourses())
      setLessons(JSON.parse(localStorage.getItem('lessons') || '[]'))
      setMaterials(JSON.parse(localStorage.getItem('materials') || '[]'))
      
      alert('Datos de cursos inicializados correctamente')
    } catch (error) {
      console.error('Error al inicializar cursos:', error)
      alert('Error al inicializar cursos')
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
      case 'confirmed': return 'Confirmado'
      case 'cancelled': return 'Cancelado'
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
    confirmedFreeBookings: freeBookings.filter(b => b.status === 'confirmed').length,
    totalCourses: courses.length,
    totalLessons: lessons.length,
    totalMaterials: materials.length,
    totalUsers: users.filter(u => u.role === 'client').length
  }

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-bold">Panel de Administración</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleResetDemoData}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center text-sm"
            title="Reinicializar datos de demo"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset Demo
          </button>
          <button
            onClick={handleForceInit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm"
            title="Forzar inicialización de datos de cursos"
          >
            <Upload className="w-4 h-4 mr-2" />
            Forzar Inicialización
          </button>
          <span className="text-sm text-gray-600">
            Bienvenido, {auth.getCurrentUser()?.name}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b overflow-x-auto">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'dashboard' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('bookings')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'bookings' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Reservas
        </button>
        <button
          onClick={() => setActiveTab('memberships')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'memberships' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Membresías
        </button>
        <button
          onClick={() => setActiveTab('freeBookings')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'freeBookings' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Clases Gratuitas
        </button>
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'courses' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Cursos
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
            activeTab === 'users' 
              ? 'text-purple-600 border-b-2 border-purple-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Usuarios
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${
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
            <h3 className="text-2xl font-bold text-gray-800">Dashboard</h3>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex items-center">
                  <Calendar className="w-8 h-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Reservas</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-yellow-600">{stats.pendingBookings} pendientes</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex items-center">
                  <CreditCard className="w-8 h-8 text-green-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Membresías</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalMemberships}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-yellow-600">{stats.pendingMemberships} pendientes</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex items-center">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Clases Gratuitas</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalFreeBookings}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-yellow-600">{stats.pendingFreeBookings} pendientes</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow border">
                <div className="flex items-center">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Cursos</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-sm text-gray-600">{stats.totalLessons} clases, {stats.totalMaterials} materiales</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Actividad Reciente</h4>
              <div className="space-y-3">
                {bookings.slice(0, 5).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{booking.name}</p>
                      <p className="text-sm text-gray-600">{booking.selectedClass} - {booking.selectedDate}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {getStatusText(booking.status)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Gestión de Reservas</h3>
            
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

        {activeTab === 'memberships' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Gestión de Membresías</h3>
            
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
                            console.error('Error al actualizar la membresía:', error)
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
                            console.error('Error al eliminar la membresía:', error)
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

        {activeTab === 'freeBookings' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Gestión de Clases Gratuitas</h3>
            
            {freeBookings.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
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

        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">Gestión de Cursos</h3>
              <button
                onClick={() => setShowAddForm('course')}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Agregar Curso
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{course.title}</h4>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{course.subtitle}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Play className="w-4 h-4 mr-2" />
                      {course.features[0]}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 bg-purple-600 text-white px-3 py-2 rounded text-sm hover:bg-purple-700 transition-colors"
                    >
                      Gestionar
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
                          try {
                            courseManager.deleteCourse(course.id)
                            setCourses(courseManager.getAllCourses())
                          } catch (error) {
                            console.error('Error al eliminar curso:', error)
                          }
                        }
                      }}
                      className="px-3 py-2 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Management Modal */}
            {selectedCourse && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                          {selectedCourse.title}
                        </h2>
                        <p className="text-gray-600">{selectedCourse.subtitle}</p>
                      </div>
                      <button
                        onClick={() => setSelectedCourse(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Clases */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">Clases Virtuales</h3>
                          <button
                            onClick={() => setShowAddForm('lesson')}
                            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Agregar Clase
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          {lessons.filter(l => l.courseId === selectedCourse.id).map((lesson) => (
                            <div key={lesson.id} className="border rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{lesson.title}</h4>
                                <button
                                  onClick={() => handleDeleteLesson(lesson.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                              <div className="flex items-center text-xs text-gray-500">
                                <Play className="w-3 h-3 mr-1" />
                                {lesson.duration}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Materiales */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">Material Teórico</h3>
                          <button
                            onClick={() => setShowAddForm('material')}
                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Agregar Material
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          {materials.filter(m => m.courseId === selectedCourse.id).map((material) => (
                            <div key={material.id} className="border rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{material.title}</h4>
                                <button
                                  onClick={() => handleDeleteMaterial(material.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{material.description}</p>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>{material.fileSize}</span>
                                <button
                                  onClick={() => window.open(material.fileUrl, '_blank')}
                                  className="text-blue-600 hover:text-blue-700"
                                >
                                  <Download className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h3>
                <button
                  onClick={() => setShowAddForm('user')}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Usuario
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border-b">Nombre</th>
                      <th className="text-left p-3 border-b">Email</th>
                      <th className="text-left p-3 border-b">Rol</th>
                      <th className="text-left p-3 border-b">Estado</th>
                      <th className="text-left p-3 border-b">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="p-3">{user.name}</td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.role === 'admin' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {user.role === 'admin' ? 'Administrador' : 'Cliente'}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.isActive 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.isActive ? 'Activo' : 'Inactivo'}
                          </span>
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Configuración del Sitio</h3>
              
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
    </div>
  )
}

export default AdminPanel 