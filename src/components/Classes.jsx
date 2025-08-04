import { motion } from 'framer-motion'
import { Users, Clock, Star, ArrowRight } from 'lucide-react'

const Classes = () => {
  const classTypes = [
    {
      id: 1,
      name: 'Iniciación',
      description: 'Perfecta para principiantes. Aprende las técnicas básicas y fundamentos del pole dance.',
      duration: '60 min',
      level: 'Principiante',
      features: ['Técnicas básicas', 'Seguridad', 'Flexibilidad inicial', 'Confianza'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🌟'
    },
    {
      id: 2,
      name: 'Intermedio',
      description: 'Desarrolla tu fuerza y técnica con movimientos más complejos y coreografías.',
      duration: '75 min',
      level: 'Intermedio',
      features: ['Técnicas avanzadas', 'Coreografías', 'Fuerza muscular', 'Expresión artística'],
      color: 'from-primary-500 to-pink-500',
      icon: '💪'
    },
    {
      id: 3,
      name: 'Avanzado',
      description: 'Para bailarinas experimentadas. Movimientos acrobáticos y rutinas profesionales.',
      duration: '90 min',
      level: 'Avanzado',
      features: ['Acrobacias', 'Rutinas complejas', 'Competencia', 'Performance'],
      color: 'from-secondary-500 to-yellow-500',
      icon: '⭐'
    }
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
            Ofrecemos clases para todos los niveles, desde principiantes hasta avanzados. 
            Cada clase está diseñada para desarrollar tu fuerza, flexibilidad y confianza.
          </p>
        </motion.div>

        {/* Class Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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