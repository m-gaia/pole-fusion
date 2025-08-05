import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { forceInitializeAllData, checkDataStatus } from '../utils/initDemo'
import { courseManager } from '../utils/courses'

const Debug = () => {
  const [dataStatus, setDataStatus] = useState({})
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const status = checkDataStatus()
    setDataStatus(status)
    setCourses(courseManager.getAllCourses())
  }, [])

  const handleForceInit = () => {
    forceInitializeAllData()
    const status = checkDataStatus()
    setDataStatus(status)
    setCourses(courseManager.getAllCourses())
  }

  const handleClearData = () => {
    localStorage.clear()
    const status = checkDataStatus()
    setDataStatus(status)
    setCourses([])
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            🔍 Página de Debug - Estado de Datos
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">Usuarios</h3>
              <p className="text-2xl font-bold text-blue-600">{dataStatus.users || 0}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Cursos</h3>
              <p className="text-2xl font-bold text-green-600">{dataStatus.courses || 0}</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800">Clases</h3>
              <p className="text-2xl font-bold text-purple-600">{dataStatus.lessons || 0}</p>
            </div>
            <div className="bg-orange-100 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800">Materiales</h3>
              <p className="text-2xl font-bold text-orange-600">{dataStatus.materials || 0}</p>
            </div>
          </div>

          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleForceInit}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              🔄 Forzar Inicialización
            </button>
            <button
              onClick={handleClearData}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              🗑️ Limpiar Datos
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              🔄 Recargar Página
            </button>
          </div>
        </motion.div>

        {courses.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📚 Cursos Disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div key={course.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-gray-600">{course.subtitle}</p>
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm mt-2">
                    {course.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {courses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ⚠️ No hay cursos disponibles
              </h2>
              <p className="text-gray-600 mb-4">
                Haz clic en "Forzar Inicialización" para crear los datos de demo.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Debug 