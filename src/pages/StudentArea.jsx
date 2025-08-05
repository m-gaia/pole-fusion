import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Play, 
  FileText, 
  MessageCircle, 
  Calendar,
  Clock,
  User,
  Download,
  Eye,
  Star
} from 'lucide-react'
import { auth } from '../utils/auth'
import { courseManager, lessonManager, materialManager, commentManager } from '../utils/courses'

const StudentArea = () => {
  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [lessons, setLessons] = useState([])
  const [materials, setMaterials] = useState([])
  const [comments, setComments] = useState([])
  const [activeTab, setActiveTab] = useState('courses')
  const [newComment, setNewComment] = useState('')
  const [selectedLesson, setSelectedLesson] = useState(null)

  const currentUser = auth.getCurrentUser()

  useEffect(() => {
    if (currentUser) {
      setCourses(courseManager.getAllCourses())
    }
  }, [currentUser])

  useEffect(() => {
    if (selectedCourse) {
      setLessons(lessonManager.getLessonsByCourse(selectedCourse.id))
      setMaterials(materialManager.getMaterialsByCourse(selectedCourse.id))
    }
  }, [selectedCourse])

  useEffect(() => {
    if (selectedLesson) {
      setComments(commentManager.getCommentsByLesson(selectedLesson.id))
    }
  }, [selectedLesson])

  const handleAddComment = () => {
    if (!newComment.trim() || !selectedLesson || !currentUser) return

    try {
      const commentData = {
        lessonId: selectedLesson.id,
        courseId: selectedCourse.id,
        userId: currentUser.id,
        userName: currentUser.name,
        content: newComment.trim()
      }

      commentManager.createComment(commentData)
      setComments(commentManager.getCommentsByLesson(selectedLesson.id))
      setNewComment('')
    } catch (error) {
      console.error('Error al agregar comentario:', error)
    }
  }

  const handleDeleteComment = (commentId) => {
    if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
      try {
        commentManager.deleteComment(commentId)
        setComments(commentManager.getCommentsByLesson(selectedLesson.id))
      } catch (error) {
        console.error('Error al eliminar comentario:', error)
      }
    }
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Acceso Requerido
          </h1>
          <p className="text-gray-600 mb-6">
            Debes iniciar sesión para acceder al área de estudiantes.
          </p>
          <a
            href="/auth"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Iniciar Sesión
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 pt-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Área de Estudiantes
              </h1>
              <p className="text-gray-600">
                Bienvenida, {currentUser.name}. Aquí encontrarás todo el contenido de tus cursos.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Usuario</div>
              <div className="font-semibold text-gray-800">{currentUser.email}</div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg mb-8"
        >
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-4 font-medium ${
                activeTab === 'courses' 
                  ? 'text-purple-600 border-b-2 border-purple-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <BookOpen className="inline w-5 h-5 mr-2" />
              Mis Cursos
            </button>
            {selectedCourse && (
              <>
                <button
                  onClick={() => setActiveTab('lessons')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'lessons' 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Play className="inline w-5 h-5 mr-2" />
                  Clases Virtuales
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`px-6 py-4 font-medium ${
                    activeTab === 'materials' 
                      ? 'text-purple-600 border-b-2 border-purple-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <FileText className="inline w-5 h-5 mr-2" />
                  Material Teórico
                </button>
              </>
            )}
          </div>

          <div className="p-6">
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Mis Cursos Inscritos</h2>
                
                {courses.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No tienes cursos inscritos
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Contacta con nosotros para inscribirte en nuestros cursos de formación.
                    </p>
                    <button
                      onClick={() => {
                        const message = `Hola! Soy ${currentUser.name} y me interesa inscribirme en los cursos de formación. ¿Podrías darme más información?`
                        const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, '_blank')
                      }}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center mx-auto"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Consultar Cursos
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setSelectedCourse(course)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {course.title}
                          </h3>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {course.level}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{course.subtitle}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {course.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Play className="w-4 h-4 mr-2" />
                            {course.features[0]}
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedCourse(course)
                            setActiveTab('lessons')
                          }}
                          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                        >
                          Acceder al Curso
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'lessons' && selectedCourse && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Clases Virtuales - {selectedCourse.title}
                  </h2>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className="text-purple-600 hover:text-purple-700"
                  >
                    ← Volver a Cursos
                  </button>
                </div>

                {lessons.length === 0 ? (
                  <div className="text-center py-12">
                    <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No hay clases disponibles
                    </h3>
                    <p className="text-gray-500">
                      Las clases virtuales se cargarán próximamente.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {lesson.title}
                          </h3>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {lesson.duration || '60 min'}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{lesson.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Video de YouTube */}
                          {lesson.videoUrl && (
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Clase Virtual</h4>
                              <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                                <iframe
                                  src={lesson.videoUrl}
                                  title={lesson.title}
                                  className="absolute top-0 left-0 w-full h-full"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>
                          )}

                          {/* Comentarios */}
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Comentarios y Preguntas</h4>
                            <div className="space-y-3">
                              {comments.filter(c => c.lessonId === lesson.id).map((comment) => (
                                <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-sm">{comment.userName}</span>
                                    {comment.userId === currentUser.id && (
                                      <button
                                        onClick={() => handleDeleteComment(comment.id)}
                                        className="text-red-500 hover:text-red-700 text-sm"
                                      >
                                        Eliminar
                                      </button>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600">{comment.content}</p>
                                </div>
                              ))}

                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="Agregar comentario o pregunta..."
                                  value={newComment}
                                  onChange={(e) => setNewComment(e.target.value)}
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                                />
                                <button
                                  onClick={handleAddComment}
                                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                                >
                                  Enviar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'materials' && selectedCourse && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Material Teórico - {selectedCourse.title}
                  </h2>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className="text-purple-600 hover:text-purple-700"
                  >
                    ← Volver a Cursos
                  </button>
                </div>

                {materials.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No hay materiales disponibles
                    </h3>
                    <p className="text-gray-500">
                      Los materiales teóricos se cargarán próximamente.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materials.map((material) => (
                      <div
                        key={material.id}
                        className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <FileText className="w-8 h-8 text-purple-600" />
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            PDF
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {material.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{material.description}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {material.fileSize || '2.5 MB'}
                          </span>
                          <button
                            onClick={() => window.open(material.fileUrl, '_blank')}
                            className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Descargar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default StudentArea 