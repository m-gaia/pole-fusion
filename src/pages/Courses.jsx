import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  Play,
  FileText,
  Award,
  MessageCircle
} from 'lucide-react'
import { courseManager, initializeCourseDemoData } from '../utils/courses'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)

  useEffect(() => {
    // Inicializar datos de demo si no existen
    if (courseManager.getAllCourses().length === 0) {
      initializeCourseDemoData()
    }
    setCourses(courseManager.getAllCourses())
  }, [])

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Principiante': return 'bg-blue-100 text-blue-800'
      case 'Intermedio-Avanzado': return 'bg-yellow-100 text-yellow-800'
      case 'Avanzado': return 'bg-purple-100 text-purple-800'
      case 'Todos los niveles': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleContactWhatsApp = (course) => {
    const message = `Hola! Me interesa el curso: ${course.title}

Información del curso:
- Nivel: ${course.level}
- Duración: ${course.duration}
- Precio: ${course.price}

¿Podrías darme más información sobre la inscripción?`
    
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Cursos de Formación
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Forma parte de nuestra comunidad de instructores profesionales. 
            Nuestros cursos te proporcionarán las herramientas necesarias para 
            convertirte en un instructor de pole dance certificado.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2 text-purple-600" />
              Certificaciones oficiales
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              Comunidad de instructores
            </div>
            <div className="flex items-center">
              <Play className="w-5 h-5 mr-2 text-purple-600" />
              Clases virtuales
            </div>
          </div>
        </motion.div>

        {/* Cursos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagen del curso */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelBadgeColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white bg-opacity-90 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-80" />
                </div>
              </div>

              {/* Contenido del curso */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.subtitle}
                </p>
                
                <p className="text-sm text-gray-600 mb-4">
                  {course.description}
                </p>

                {/* Características */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-purple-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Play className="w-4 h-4 mr-2 text-purple-600" />
                    {course.features[0]}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="w-4 h-4 mr-2 text-purple-600" />
                    Material teórico completo
                  </div>
                </div>

                {/* Programa del curso (preview) */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Programa del curso:</h4>
                  <div className="space-y-1">
                    {course.program.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                    {course.program.length > 4 && (
                      <div className="text-sm text-purple-600 font-medium">
                        +{course.program.length - 4} temas más
                      </div>
                    )}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ver Detalles
                  </button>
                  <button
                    onClick={() => handleContactWhatsApp(course)}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar por WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            ¿Lista para comenzar tu formación?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Únete a nuestra comunidad de instructores profesionales y transforma tu pasión en una carrera exitosa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContactWhatsApp(courses[0])}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar Cursos
            </button>
            <Link
              to="/auth"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Registrarse
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Modal de detalles del curso */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
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
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Información del curso */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Descripción</h3>
                  <p className="text-gray-600 mb-6">{selectedCourse.description}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Características</h3>
                  <div className="space-y-2 mb-6">
                    {selectedCourse.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 mr-2 text-purple-600" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold">{selectedCourse.duration}</div>
                      <div className="text-sm text-gray-600">Duración</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold">{selectedCourse.level}</div>
                      <div className="text-sm text-gray-600">Nivel</div>
                    </div>
                  </div>
                </div>

                {/* Programa completo */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Programa Completo</h3>
                  <div className="space-y-3">
                    {selectedCourse.program.map((item, idx) => (
                      <div key={idx} className="flex items-start p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => handleContactWhatsApp(selectedCourse)}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar por WhatsApp
                </button>
                <Link
                  to="/auth"
                  className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Registrarse para Acceso
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Courses 