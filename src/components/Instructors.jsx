import { motion } from 'framer-motion'
import { Instagram, Award, Users, Star } from 'lucide-react'

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'Lucia Bazalli',
      role: 'Instructora de Pole Sport',
      experience: '8 años',
      specialties: ['Pole Dance', 'Flexibilidad', 'Coreografías'],
      bio: 'Lucia es nuestra Instructora de Pole Sport con más de 8 años de experiencia en pole dance. Especializada en técnicas avanzadas y coreografías artísticas.',
      image: '/images/instructor-1.jpg',
      instagram: '@Lucia_pole',
      certifications: ['Pole Fitness Academy', 'International Pole Championship'],
      students: '200+'
    },
    {
      id: 2,
      name: 'Juli Prada',
      role: 'Instructora de Pole Sport',
      experience: '5 años',
      specialties: ['Principiantes', 'Fuerza', 'Confianza'],
      bio: 'Juli se especializa en trabajar con principiantes, ayudándolas a desarrollar confianza y técnica desde el primer día.',
      image: '/images/instructor-2.jpg',
      instagram: '@Juli_polefusion',
      certifications: ['Pole Dance Academy', 'Fitness Instructor'],
      students: '150+'
    },
    {
      id: 3,
      name: 'Nanu Fernandez',
      role: 'Instructora de Exotic',
      experience: '10 años',
      specialties: ['Acrobacias', 'Competencia', 'Performance'],
      bio: 'Nanu es nuestra instructora de nivel avanzado, especializada en acrobacias y preparación para competencias.',
      image: '/images/instructor-3.jpg',
      instagram: '@Nanu_poleart',
      certifications: ['International Pole Championship', 'Acrobatic Arts'],
      students: '100+'
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
    <section className="section-padding bg-white">
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
            Nuestras Instructoras
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce a nuestro equipo de instructoras profesionales, certificadas y apasionadas 
            por el pole dance. Cada una especializada en diferentes niveles y técnicas.
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {instructors.map((instructor) => (
            <motion.div
              key={instructor.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                  <p className="text-sm opacity-90">{instructor.role}</p>
                </div>
                {/* Placeholder for instructor image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award size={16} />
                    <span className="text-sm font-medium">{instructor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm font-medium">{instructor.students}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {instructor.bio}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Especialidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Certificaciones</h4>
                  <div className="space-y-1">
                    {instructor.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star size={12} className="text-secondary-500" />
                        <span className="text-gray-600 text-xs">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instagram */}
                <motion.a
                  href={`https://instagram.com/${instructor.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <Instagram size={16} />
                  <span className="text-sm font-medium">{instructor.instagram}</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Lista para comenzar tu viaje?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nuestras instructoras están listas para guiarte en tu camino hacia la fuerza, 
              la confianza y la libertad a través del pole dance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => window.location.href = '/reservas'}
            >
              Reservar tu primera clase
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Instructors 