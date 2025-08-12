import { motion } from 'framer-motion'
import { Clock, Users, Star, Calendar, ArrowRight } from 'lucide-react'

const Classes = () => {
  const classTypes = [
    {
      id: 1,
      name: 'Pole Sport',
      description: 'Clases técnicas enfocadas en la fuerza, resistencia y movimientos acrobáticos del pole dance deportivo.',
      duration: '75 min',
      level: 'Todos los niveles',
      maxStudents: 8,
      price: '$8.000',
      features: ['Técnicas deportivas', 'Fuerza muscular', 'Resistencia', 'Preparación física'],
      color: 'from-blue-500 to-cyan-500',
      icon: '💪',
      schedule: [
        { day: 'Lunes', time: '18:00 - 19:15' },
        { day: 'Miércoles', time: '19:00 - 20:15' },
        { day: 'Sábado', time: '10:00 - 11:15' }
      ]
    },
    {
      id: 2,
      name: 'Exótico',
      description: 'Desarrolla tu sensualidad y expresión artística con movimientos fluidos y coreografías elegantes.',
      duration: '75 min',
      level: 'Intermedio-Avanzado',
      maxStudents: 6,
      price: '$10.000',
      features: ['Expresión sensual', 'Coreografías fluidas', 'Confianza', 'Arte escénico'],
      color: 'from-primary-500 to-pink-500',
      icon: '✨',
      schedule: [
        { day: 'Martes', time: '19:00 - 20:15' },
        { day: 'Jueves', time: '18:00 - 19:15' },
        { day: 'Sábado', time: '11:00 - 12:15' }
      ]
    },
    {
      id: 3,
      name: 'Coreográfico',
      description: 'Crea rutinas artísticas completas combinando técnica, música y expresión corporal.',
      duration: '90 min',
      level: 'Intermedio-Avanzado',
      maxStudents: 6,
      price: '$12.000',
      features: ['Coreografías completas', 'Interpretación musical', 'Expresión artística', 'Performance'],
      color: 'from-secondary-500 to-yellow-500',
      icon: '🎭',
      schedule: [
        { day: 'Lunes', time: '20:00 - 21:30' },
        { day: 'Viernes', time: '19:00 - 20:30' },
        { day: 'Domingo', time: '14:00 - 15:30' }
      ]
    },
    {
      id: 4,
      name: 'Flexibilidad',
      description: 'Mejora tu rango de movimiento, elasticidad y postura con ejercicios específicos.',
      duration: '60 min',
      level: 'Todos los niveles',
      maxStudents: 10,
      price: '$6.000',
      features: ['Estiramientos', 'Elasticidad', 'Postura', 'Movilidad articular'],
      color: 'from-green-500 to-emerald-500',
      icon: '🧘‍♀️',
      schedule: [
        { day: 'Martes', time: '17:00 - 18:00' },
        { day: 'Jueves', time: '17:00 - 18:00' },
        { day: 'Sábado', time: '09:00 - 10:00' }
      ]
    },
    {
      id: 5,
      name: 'Grupo Competencia',
      description: 'Entrenamiento especializado para competencias y exhibiciones de alto nivel.',
      duration: '120 min',
      level: 'Avanzado',
      maxStudents: 4,
      price: '$15.000',
      features: ['Técnicas de competencia', 'Rutinas de exhibición', 'Preparación física', 'Mentalidad competitiva'],
      color: 'from-purple-500 to-indigo-500',
      icon: '🏆',
      schedule: [
        { day: 'Lunes', time: '21:30 - 23:30' },
        { day: 'Viernes', time: '20:30 - 22:30' },
        { day: 'Domingo', time: '15:30 - 17:30' }
      ]
    }
  ]

  const benefits = [
    {
      icon: '💪',
      title: 'Fuerza y Resistencia',
      description: 'Desarrolla músculos tonificados y mejora tu resistencia física.'
    },
    {
      icon: '🧘‍♀️',
      title: 'Flexibilidad',
      description: 'Aumenta tu rango de movimiento y mejora tu postura.'
    },
    {
      icon: '🎭',
      title: 'Expresión Artística',
      description: 'Descubre tu creatividad y desarrolla tu confianza en el escenario.'
    },
    {
      icon: '👥',
      title: 'Comunidad',
      description: 'Únete a una comunidad de mujeres empoderadas y motivadas.'
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Nuestras Clases
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Descubre el poder transformador del pole dance. Clases para todos los niveles, 
            desde Pole Sport hasta Grupo Competencia.
          </motion.p>
        </div>
      </section>

      {/* Class Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {classTypes.map((classType, index) => (
              <motion.div
                key={classType.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
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
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-gray-600 mb-1">
                        <Clock size={16} />
                        <span className="text-sm font-medium">{classType.duration}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-gray-600 mb-1">
                        <Users size={16} />
                        <span className="text-sm font-medium">Máx {classType.maxStudents}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-primary-600">{classType.price}</div>
                    <div className="text-sm text-gray-500">por mes</div>
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

                  {/* Schedule */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      Horarios
                    </h4>
                    <div className="space-y-2">
                      {classType.schedule.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-600">{schedule.day}</span>
                          <span className="font-medium">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
              Beneficios del Pole Dance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre todos los beneficios físicos y mentales que el pole dance puede ofrecerte.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Lista para comenzar?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Reserva tu clase gratuita y descubre por qué Pole Fusion es la academia 
              más elegida por las mujeres de Mendoza.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              onClick={() => window.location.href = '/reservas'}
            >
              Reservar clase gratuita
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Classes 