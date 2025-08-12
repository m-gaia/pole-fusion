import { motion } from 'framer-motion'
import { Users, Clock, Star, ArrowRight } from 'lucide-react'

const Classes = () => {
  const classTypes = [
    {
      id: 1,
      name: 'Pole Sport',
      description: 'Clases técnicas enfocadas en la fuerza, resistencia y movimientos acrobáticos del pole dance deportivo.',
      duration: '75 min',
      level: 'Todos los niveles',
      features: ['Técnicas deportivas', 'Fuerza muscular', 'Resistencia', 'Preparación física'],
      color: 'from-blue-500 to-cyan-500',
      icon: '💪'
    },
    {
      id: 2,
      name: 'Exótico',
      description: 'Desarrolla tu sensualidad y expresión artística con movimientos fluidos y coreografías elegantes.',
      duration: '75 min',
      level: 'Intermedio-Avanzado',
      features: ['Expresión sensual', 'Coreografías fluidas', 'Confianza', 'Arte escénico'],
      color: 'from-primary-500 to-pink-500',
      icon: '✨'
    },
    {
      id: 3,
      name: 'Coreográfico',
      description: 'Crea rutinas artísticas completas combinando técnica, música y expresión corporal.',
      duration: '90 min',
      level: 'Intermedio-Avanzado',
      features: ['Coreografías completas', 'Interpretación musical', 'Expresión artística', 'Performance'],
      color: 'from-secondary-500 to-yellow-500',
      icon: '🎭'
    },
    {
      id: 4,
      name: 'Flexibilidad',
      description: 'Mejora tu rango de movimiento, elasticidad y postura con ejercicios específicos.',
      duration: '60 min',
      level: 'Todos los niveles',
      features: ['Estiramientos', 'Elasticidad', 'Postura', 'Movilidad articular'],
      color: 'from-green-500 to-emerald-500',
      icon: '🧘‍♀️'
    }/*,
    {
      id: 5,
      name: 'Grupo Competencia',
      description: 'Entrenamiento especializado para competencias y exhibiciones de alto nivel.',
      duration: '120 min',
      level: 'Avanzado',
      features: ['Técnicas de competencia', 'Rutinas de exhibición', 'Preparación física', 'Mentalidad competitiva'],
      color: 'from-purple-500 to-indigo-500',
      icon: '🏆'
    }*/
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
            Nuestras Clases
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos clases para todos los niveles, desde Pole Sport hasta Grupo Competencia. 
            Cada clase está diseñada para desarrollar tu fuerza, flexibilidad y confianza.
          </p>
        </motion.div>

        {/* Class Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {classTypes.map((classType) => (
            <motion.div
              key={classType.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${classType.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{classType.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{classType.name}</h3>
                  <p className="text-white/90 text-sm">{classType.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm font-medium">{classType.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm font-medium">{classType.level}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {classType.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                  onClick={() => window.location.href = '/reservas'}
                >
                  <span>Reservar clase</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              ¿Por qué elegir Pole Fusion?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="text-primary-500" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Instructores Certificados</h4>
                <p className="text-gray-600 text-sm">Profesionales con años de experiencia y certificaciones internacionales.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-secondary-500" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Grupos Reducidos</h4>
                <p className="text-gray-600 text-sm">Máximo 8 alumnas por clase para atención personalizada.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="text-primary-500" size={24} />
                </div>
                <h4 className="font-semibold mb-2">Horarios Flexibles</h4>
                <p className="text-gray-600 text-sm">Clases de lunes a domingo, desde las 9:00 hasta las 22:00.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Classes 