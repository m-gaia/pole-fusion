import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { auth } from '../utils/auth'
import { bookingManager, membershipManager, freeBookingManager } from '../utils/bookings'
import { courseManager } from '../utils/courses'
import { forceInitializeAllData, checkDataStatus } from '../utils/initDemo'
import { siteConfig, updateSiteConfig } from '../config/siteConfig'
import { 
  Users, 
  Calendar, 
  CreditCard, 
  Settings, 
  X, 
  Check,
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
    console.log('🔍 AdminPanel: Cargando datos...')
    
    try {
      // Verificar estado de datos
      const dataStatus = checkDataStatus()
      console.log('📊 Estado inicial de datos:', dataStatus)
      
      // Si no hay cursos, forzar inicialización
      if (dataStatus.courses === 0) {
        console.log('⚠️ No hay cursos, forzando inicialización...')
        forceInitializeAllData()
        
        // Esperar un poco y recargar datos
        setTimeout(() => {
          console.log('🔄 Recargando datos después de inicialización...')
          loadAllData()
        }, 1000)
      } else {
        loadAllData()
      }
    } catch (error) {
      console.error('❌ Error en useEffect:', error)
    }
  }, [])

  const loadAllData = () => {
    try {
      // Cargar todos los datos
      setBookings(bookingManager.getAllBookings())
      setMemberships(membershipManager.getAllMemberships())
      setFreeBookings(freeBookingManager.getAllFreeBookings())
      
      // Cargar datos de cursos con logs
      const coursesData = courseManager.getAllCourses()
      console.log('📚 AdminPanel: Cursos cargados:', coursesData)
      setCourses(coursesData)
      
      const lessonsData = JSON.parse(localStorage.getItem('lessons') || '[]')
      console.log('🎬 AdminPanel: Clases cargadas:', lessonsData)
      setLessons(lessonsData)
      
      const materialsData = JSON.parse(localStorage.getItem('materials') || '[]')
      console.log('📄 AdminPanel: Materiales cargados:', materialsData)
      setMaterials(materialsData)
      
      const usersData = JSON.parse(localStorage.getItem('users') || '[]')
      console.log('👥 AdminPanel: Usuarios cargados:', usersData)
      setUsers(usersData)
      
      console.log('✅ AdminPanel: Datos cargados completamente')
    } catch (error) {
      console.error('❌ Error al cargar datos:', error)
    }
  }

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
        const updatedLessons = lessons.filter(l => l.id !== lessonId)
        localStorage.setItem('lessons', JSON.stringify(updatedLessons))
        setLessons(updatedLessons)
      } catch (error) {
        console.error('Error al eliminar clase:', error)
      }
    }
  }

  const handleDeleteMaterial = (materialId) => {
    if (confirm('¿Estás seguro de que quieres eliminar este material?')) {
      try {
        const updatedMaterials = materials.filter(m => m.id !== materialId)
        localStorage.setItem('materials', JSON.stringify(updatedMaterials))
        setMaterials(updatedMaterials)
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
        localStorage.clear()
        forceInitializeAllData()
        loadAllData()
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
                      {course.features && course.features[0]}
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

            {courses.length === 0 && (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No hay cursos disponibles</p>
                <button
                  onClick={handleForceInit}
                  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Inicializar Cursos de Demo
                </button>
              </div>
            )}
          </div>
        )}

        {/* Placeholder para otras pestañas */}
        {activeTab !== 'dashboard' && activeTab !== 'courses' && (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pestaña {activeTab}</h3>
            <p className="text-gray-600">Esta funcionalidad está en desarrollo</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel 