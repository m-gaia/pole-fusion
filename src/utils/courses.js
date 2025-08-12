// Sistema de gestión de cursos educativos
export const courseManager = {
  // Obtener todos los cursos
  getAllCourses: () => {
    try {
      return JSON.parse(localStorage.getItem('courses') || '[]')
    } catch (error) {
      console.error('Error al cargar cursos:', error)
      return []
    }
  },

  // Obtener curso por ID
  getCourseById: (courseId) => {
    const courses = courseManager.getAllCourses()
    return courses.find(course => course.id === courseId)
  },

  // Crear nuevo curso
  createCourse: (courseData) => {
    try {
      const courses = courseManager.getAllCourses()
      const newCourse = {
        id: Date.now().toString(),
        ...courseData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isActive: true
      }
      
      courses.push(newCourse)
      localStorage.setItem('courses', JSON.stringify(courses))
      
      console.log('Curso creado:', newCourse)
      return newCourse
    } catch (error) {
      console.error('Error al crear curso:', error)
      throw new Error('Error al crear el curso')
    }
  },

  // Actualizar curso
  updateCourse: (courseId, courseData) => {
    try {
      const courses = courseManager.getAllCourses()
      const courseIndex = courses.findIndex(c => c.id === courseId)
      
      if (courseIndex === -1) {
        throw new Error('Curso no encontrado')
      }
      
      courses[courseIndex] = {
        ...courses[courseIndex],
        ...courseData,
        updatedAt: new Date().toISOString()
      }
      
      localStorage.setItem('courses', JSON.stringify(courses))
      return courses[courseIndex]
    } catch (error) {
      console.error('Error al actualizar curso:', error)
      throw error
    }
  },

  // Eliminar curso
  deleteCourse: (courseId) => {
    try {
      const courses = courseManager.getAllCourses()
      const filteredCourses = courses.filter(c => c.id !== courseId)
      
      localStorage.setItem('courses', JSON.stringify(filteredCourses))
      return true
    } catch (error) {
      console.error('Error al eliminar curso:', error)
      throw error
    }
  }
}

// Sistema de gestión de clases virtuales
export const lessonManager = {
  // Obtener todas las clases de un curso
  getLessonsByCourse: (courseId) => {
    try {
      const lessons = JSON.parse(localStorage.getItem('lessons') || '[]')
      return lessons.filter(lesson => lesson.courseId === courseId)
    } catch (error) {
      console.error('Error al cargar clases:', error)
      return []
    }
  },

  // Crear nueva clase
  createLesson: (lessonData) => {
    try {
      const lessons = JSON.parse(localStorage.getItem('lessons') || '[]')
      const newLesson = {
        id: Date.now().toString(),
        ...lessonData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      lessons.push(newLesson)
      localStorage.setItem('lessons', JSON.stringify(lessons))
      
      console.log('Clase creada:', newLesson)
      return newLesson
    } catch (error) {
      console.error('Error al crear clase:', error)
      throw new Error('Error al crear la clase')
    }
  },

  // Actualizar clase
  updateLesson: (lessonId, lessonData) => {
    try {
      const lessons = JSON.parse(localStorage.getItem('lessons') || '[]')
      const lessonIndex = lessons.findIndex(l => l.id === lessonId)
      
      if (lessonIndex === -1) {
        throw new Error('Clase no encontrada')
      }
      
      lessons[lessonIndex] = {
        ...lessons[lessonIndex],
        ...lessonData,
        updatedAt: new Date().toISOString()
      }
      
      localStorage.setItem('lessons', JSON.stringify(lessons))
      return lessons[lessonIndex]
    } catch (error) {
      console.error('Error al actualizar clase:', error)
      throw error
    }
  },

  // Eliminar clase
  deleteLesson: (lessonId) => {
    try {
      const lessons = JSON.parse(localStorage.getItem('lessons') || '[]')
      const filteredLessons = lessons.filter(l => l.id !== lessonId)
      
      localStorage.setItem('lessons', JSON.stringify(filteredLessons))
      return true
    } catch (error) {
      console.error('Error al eliminar clase:', error)
      throw error
    }
  }
}

// Sistema de gestión de materiales PDF
export const materialManager = {
  // Obtener todos los materiales de un curso
  getMaterialsByCourse: (courseId) => {
    try {
      const materials = JSON.parse(localStorage.getItem('materials') || '[]')
      return materials.filter(material => material.courseId === courseId)
    } catch (error) {
      console.error('Error al cargar materiales:', error)
      return []
    }
  },

  // Crear nuevo material
  createMaterial: (materialData) => {
    try {
      const materials = JSON.parse(localStorage.getItem('materials') || '[]')
      const newMaterial = {
        id: Date.now().toString(),
        ...materialData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      materials.push(newMaterial)
      localStorage.setItem('materials', JSON.stringify(materials))
      
      console.log('Material creado:', newMaterial)
      return newMaterial
    } catch (error) {
      console.error('Error al crear material:', error)
      throw new Error('Error al crear el material')
    }
  },

  // Actualizar material
  updateMaterial: (materialId, materialData) => {
    try {
      const materials = JSON.parse(localStorage.getItem('materials') || '[]')
      const materialIndex = materials.findIndex(m => m.id === materialId)
      
      if (materialIndex === -1) {
        throw new Error('Material no encontrado')
      }
      
      materials[materialIndex] = {
        ...materials[materialIndex],
        ...materialData,
        updatedAt: new Date().toISOString()
      }
      
      localStorage.setItem('materials', JSON.stringify(materials))
      return materials[materialIndex]
    } catch (error) {
      console.error('Error al actualizar material:', error)
      throw error
    }
  },

  // Eliminar material
  deleteMaterial: (materialId) => {
    try {
      const materials = JSON.parse(localStorage.getItem('materials') || '[]')
      const filteredMaterials = materials.filter(m => m.id !== materialId)
      
      localStorage.setItem('materials', JSON.stringify(filteredMaterials))
      return true
    } catch (error) {
      console.error('Error al eliminar material:', error)
      throw error
    }
  }
}

// Sistema de gestión de comentarios/foro
export const commentManager = {
  // Obtener comentarios de una clase
  getCommentsByLesson: (lessonId) => {
    try {
      const comments = JSON.parse(localStorage.getItem('comments') || '[]')
      return comments.filter(comment => comment.lessonId === lessonId)
    } catch (error) {
      console.error('Error al cargar comentarios:', error)
      return []
    }
  },

  // Crear nuevo comentario
  createComment: (commentData) => {
    try {
      const comments = JSON.parse(localStorage.getItem('comments') || '[]')
      const newComment = {
        id: Date.now().toString(),
        ...commentData,
        createdAt: new Date().toISOString()
      }
      
      comments.push(newComment)
      localStorage.setItem('comments', JSON.stringify(comments))
      
      console.log('Comentario creado:', newComment)
      return newComment
    } catch (error) {
      console.error('Error al crear comentario:', error)
      throw new Error('Error al crear el comentario')
    }
  },

  // Eliminar comentario
  deleteComment: (commentId) => {
    try {
      const comments = JSON.parse(localStorage.getItem('comments') || '[]')
      const filteredComments = comments.filter(c => c.id !== commentId)
      
      localStorage.setItem('comments', JSON.stringify(filteredComments))
      return true
    } catch (error) {
      console.error('Error al eliminar comentario:', error)
      throw error
    }
  }
}

// Inicializar datos de demo
export const initializeCourseDemoData = () => {
  // Crear cursos de demo
  const demoCourses = [
    {
      id: 'course-1',
      title: 'Instructorado Básico de Pole Dance',
      subtitle: 'Formación completa para instructores principiantes',
      description: 'Este curso te proporcionará las herramientas fundamentales para convertirte en instructor de pole dance. Aprenderás técnicas de enseñanza, seguridad, y metodologías efectivas.',
      image: '/images/course-basic.jpg',
      duration: '8 semanas',
      level: 'Básico',
      price: 'Gratuito',
      program: [
        'Fundamentos de Pole Dance',
        'Técnicas de Enseñanza',
        'Seguridad y Prevención de Lesiones',
        'Metodología de Clases',
        'Anatomía Aplicada',
        'Primeros Auxilios',
        'Planificación de Clases',
        'Evaluación de Alumnos'
      ],
      features: [
        '8 clases virtuales',
        'Material teórico completo',
        'Certificado de finalización',
        'Soporte personalizado',
        'Acceso de por vida'
      ],
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Instructorado Exotic',
      description: 'Formación especializada en pole dance Exotic y sensual',
      duration: '6 meses',
      level: 'Intermedio-Avanzado',
      price: '$150.000',
      features: [
        'Técnicas de expresión sensual',
        'Coreografías fluidas',
        'Arte escénico',
        'Psicología del movimiento',
        'Preparación para shows',
        'Material teórico especializado',
        'Práctica con alumnas reales',
        'Certificación internacional'
      ],
      instructor: 'Lucia Bazalli',
      maxStudents: 8,
      startDate: '2024-03-01',
      schedule: 'Martes y Jueves 20:00-22:00'
    },
    {
      id: 3,
      title: 'Instructorado Coreográfico',
      description: 'Formación en coreografía y expresión artística',
      duration: '8 meses',
      level: 'Avanzado',
      price: '$180.000',
      features: [
        'Composición coreográfica',
        'Interpretación musical',
        'Expresión artística',
        'Dirección escénica',
        'Preparación para competencias',
        'Material teórico avanzado',
        'Práctica con alumnas reales',
        'Certificación internacional'
      ],
      instructor: 'Nanu Fernandez',
      maxStudents: 6,
      startDate: '2024-04-01',
      schedule: 'Lunes y Viernes 19:00-21:00'
    }
  ]

  // Crear clases de demo
  const demoLessons = [
    {
      id: 'lesson-1',
      courseId: 'course-1',
      title: 'Introducción a Pole Dance',
      description: 'Primera clase del curso básico donde aprenderás los fundamentos y técnicas básicas de pole dance.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '60 min',
      order: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'lesson-2',
      courseId: 'course-1',
      title: 'Técnicas de Enseñanza',
      description: 'Aprende cómo enseñar pole dance de manera efectiva y segura.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '75 min',
      order: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'lesson-3',
      courseId: 'course-2',
      title: 'Técnicas Avanzadas',
      description: 'Clase intermedia con técnicas más complejas y desafiantes.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '90 min',
      order: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'lesson-4',
      courseId: 'course-3',
      title: 'Maestría en Pole Dance',
      description: 'Clase avanzada con técnicas de nivel experto.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '120 min',
      order: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]

  // Crear materiales de demo
  const demoMaterials = [
    {
      id: 'material-1',
      courseId: 'course-1',
      title: 'Manual de Fundamentos',
      description: 'Guía completa de fundamentos de pole dance para instructores principiantes.',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '2.5 MB',
      type: 'pdf',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'material-2',
      courseId: 'course-1',
      title: 'Guía de Seguridad',
      description: 'Protocolos de seguridad y prevención de lesiones en pole dance.',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '1.8 MB',
      type: 'pdf',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'material-3',
      courseId: 'course-2',
      title: 'Manual de Técnicas Avanzadas',
      description: 'Documentación completa de técnicas avanzadas de pole dance.',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '3.2 MB',
      type: 'pdf',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'material-4',
      courseId: 'course-3',
      title: 'Guía de Maestría',
      description: 'Manual completo para alcanzar el nivel de maestría en pole dance.',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      fileSize: '4.1 MB',
      type: 'pdf',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]

  // Crear comentarios de demo
  const demoComments = [
    {
      id: 'comment-1',
      lessonId: 'lesson-1',
      courseId: 'course-1',
      userId: 'student-1',
      userName: 'Ana Martínez',
      content: 'Excelente clase! Me ayudó mucho a entender los fundamentos.',
      createdAt: new Date().toISOString()
    },
    {
      id: 'comment-2',
      lessonId: 'lesson-1',
      courseId: 'course-1',
      userId: 'client-1',
      userName: 'María González',
      content: '¿Podrías explicar más sobre la técnica de agarre?',
      createdAt: new Date().toISOString()
    },
    {
      id: 'comment-3',
      lessonId: 'lesson-2',
      courseId: 'course-1',
      userId: 'student-1',
      userName: 'Ana Martínez',
      content: 'Muy útil para aprender a enseñar de manera efectiva.',
      createdAt: new Date().toISOString()
    }
  ]

  localStorage.setItem('courses', JSON.stringify(demoCourses))
  localStorage.setItem('lessons', JSON.stringify(demoLessons))
  localStorage.setItem('materials', JSON.stringify(demoMaterials))
  localStorage.setItem('comments', JSON.stringify(demoComments))
  
  console.log('Cursos de demo inicializados:', demoCourses)
  console.log('Clases de demo inicializadas:', demoLessons)
  console.log('Materiales de demo inicializados:', demoMaterials)
  console.log('Comentarios de demo inicializados:', demoComments)
} 