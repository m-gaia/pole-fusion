import { motion } from 'framer-motion'
import { Instagram, Award, Users, Star, Mail, Phone } from 'lucide-react'

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'Lucia Bazalli',
      role: 'Instructora de Pole Sport',
      experience: '8 años',
      specialties: ['Pole Dance', 'Flexibilidad', 'Coreografías'],
      bio: 'Lucia es nuestra Instructora de Pole Sport con más de 8 años de experiencia en pole dance. Especializada en técnicas avanzadas y coreografías artísticas. Ha participado en múltiples competencias internacionales y es conocida por su estilo único y expresivo.',
      image: '/images/instructor-1.jpg',
      instagram: '@Lucia_pole',
      email: 'Lucia@polefusion.com',
      phone: '+54 261 1234-5678',
      certifications: ['Pole Fitness Academy', 'International Pole Championship', 'Acrobatic Arts'],
      students: '200+',
      achievements: ['Campeona Nacional 2022', 'Instructora del Año 2021', 'Certificación Internacional'],
      teachingStyle: 'Enfoque en técnica precisa y expresión artística',
      classes: ['Avanzado', 'Coreografía', 'Flexibilidad']
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
      email: 'Juli@polefusion.com',
      phone: '+54 261 1234-5679',
      certifications: ['Pole Dance Academy', 'Fitness Instructor'],
      students: '150+',
      achievements: ['Mejor Instructora Principiantes 2023', 'Certificación en Seguridad'],
      teachingStyle: 'Método progresivo y motivador',
      classes: ['Pole Sport', 'Fuerza Básica', 'Confianza']
    },
    {
      id: 3,
      name: 'Nanu Fernandez',
      role: 'Instructora de Exotic',
      experience: '10 años',
      specialties: ['Acrobacias', 'Competencia', 'Performance'],
      bio: 'Nanu es nuestra instructora de nivel avanzado, especializada en acrobacias y preparación para competencias. Con una sólida formación en gimnasia artística, combina técnica y creatividad en sus clases.',
      image: '/images/instructor-3.jpg',
      instagram: '@Nanu_poleart',
      email: 'Nanu@polefusion.com',
      phone: '+54 261 1234-5680',
      certifications: ['International Pole Championship', 'Acrobatic Arts'],
      students: '100+',
      achievements: ['Campeona Internacional 2021', 'Instructora Elite', 'Juez Internacional'],
      teachingStyle: 'Técnica avanzada y preparación competitiva',
      classes: ['Grupo Competencia', 'Acrobacias', 'Competencia']
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
            Nuestras Instructoras
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Conoce a nuestro equipo de instructoras profesionales, certificadas y apasionadas 
            por el pole dance. Cada una especializada en diferentes niveles y técnicas.
          </motion.p>
        </div>
      </section>

      {/* Instructors Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                          {instructor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
                        {instructor.name}
                      </h2>
                      <p className="text-xl text-primary-600 font-semibold mb-4">
                        {instructor.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {instructor.bio}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{instructor.experience}</div>
                        <div className="text-sm text-gray-600">Experiencia</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{instructor.students}</div>
                        <div className="text-sm text-gray-600">Alumnas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{instructor.certifications.length}</div>
                        <div className="text-sm text-gray-600">Certificaciones</div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Especialidades</h4>
                      <div className="flex flex-wrap gap-2">
                        {instructor.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Classes */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Clases que dicta</h4>
                      <div className="flex flex-wrap gap-2">
                        {instructor.classes.map((classType, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium"
                          >
                            {classType}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-4">
                      <motion.a
                        href={`https://instagram.com/${instructor.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Instagram size={20} />
                        <span className="font-medium">{instructor.instagram}</span>
                      </motion.a>
                      <motion.a
                        href={`mailto:${instructor.email}`}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <Mail size={20} />
                        <span className="font-medium">Email</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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
              Certificaciones y Logros
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestras instructoras cuentan con las más altas certificaciones internacionales 
              y reconocimientos en el mundo del pole dance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">{instructor.name}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Certificaciones</h4>
                    <div className="space-y-2">
                      {instructor.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Award size={16} className="text-secondary-500" />
                          <span className="text-sm text-gray-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Logros</h4>
                    <div className="space-y-2">
                      {instructor.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star size={16} className="text-secondary-500" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Estilo de enseñanza</h4>
                    <p className="text-sm text-gray-600">{instructor.teachingStyle}</p>
                  </div>
                </div>
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
              ¿Lista para aprender con las mejores?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Nuestras instructoras están listas para guiarte en tu camino hacia la fuerza, 
              la confianza y la libertad a través del pole dance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              onClick={() => window.location.href = '/reservas'}
            >
              Reservar tu primera clase
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Instructors 