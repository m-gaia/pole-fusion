import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      city: 'Buenos Aires',
      age: 28,
      level: 'Intermedio',
      time: '2 años',
      content: 'Pole Fusion cambió mi vida completamente. No solo mejoré mi fuerza física, sino que también gané mucha confianza en mí misma. Las instructoras son increíbles y la comunidad es muy acogedora. Ahora me siento más fuerte y empoderada que nunca.',
      rating: 5,
      image: '/images/testimonial-1.jpg',
      achievements: ['Primer split completo', 'Participación en show', 'Incremento de fuerza'],
      beforeAfter: {
        before: 'Sin experiencia en pole dance',
        after: 'Nivel intermedio con confianza total'
      }
    },
    {
      id: 2,
      name: 'Ana Rodríguez',
      city: 'Córdoba',
      age: 32,
      level: 'Principiante',
      time: '6 meses',
      content: 'Nunca pensé que podría hacer pole dance. Empecé desde cero y ahora puedo hacer movimientos que nunca creí posibles. El ambiente es súper motivador y las clases son muy divertidas. ¡Altamente recomendado!',
      rating: 5,
      image: '/images/testimonial-2.jpg',
      achievements: ['Primeras inversiones', 'Mejora de flexibilidad', 'Nuevas amistades'],
      beforeAfter: {
        before: 'Miedo a probar pole dance',
        after: 'Amante del pole dance'
      }
    },
    {
      id: 3,
      name: 'Lucía Fernández',
      city: 'Rosario',
      age: 25,
      level: 'Avanzado',
      time: '3 años',
      content: 'Llevo 3 años en Pole Fusion y cada día aprendo algo nuevo. Las instructoras son profesionales de verdad y siempre están ahí para apoyarte. He participado en competencias y me siento muy orgullosa de mis logros.',
      rating: 5,
      image: '/images/testimonial-3.jpg',
      achievements: ['Campeona regional', 'Instructora asistente', 'Participación internacional'],
      beforeAfter: {
        before: 'Principiante con dudas',
        after: 'Competidora profesional'
      }
    },
    {
      id: 4,
      name: 'Carolina Silva',
      city: 'Mendoza',
      age: 30,
      level: 'Intermedio',
      time: '1 año',
      content: 'Después de tener mi bebé, necesitaba algo que me ayudara a recuperar mi fuerza y confianza. Pole Fusion fue la respuesta perfecta. Ahora me siento más fuerte que nunca y he encontrado una nueva pasión.',
      rating: 5,
      image: '/images/testimonial-4.jpg',
      achievements: ['Recuperación post-parto', 'Nuevo hobby', 'Comunidad de apoyo'],
      beforeAfter: {
        before: 'Buscando actividad post-parto',
        after: 'Mamá fuerte y empoderada'
      }
    },
    {
      id: 5,
      name: 'Valentina Morales',
      city: 'La Plata',
      age: 27,
      level: 'Principiante',
      time: '3 meses',
      content: 'Siempre tuve miedo de probar pole dance, pero desde el primer día me sentí bienvenida. Las clases son progresivas y nunca te sientes presionada. ¡Altamente recomendado!',
      rating: 5,
      image: '/images/testimonial-5.jpg',
      achievements: ['Superación del miedo', 'Primeras técnicas', 'Nuevo círculo social'],
      beforeAfter: {
        before: 'Miedo a lo desconocido',
        after: 'Explorando nuevos límites'
      }
    },
    {
      id: 6,
      name: 'Florencia López',
      city: 'Tucumán',
      age: 29,
      level: 'Avanzado',
      time: '4 años',
      content: 'Pole Fusion no es solo un lugar para hacer ejercicio, es una familia. He crecido tanto física como mentalmente. Las instructoras son increíbles y siempre te empujan a dar lo mejor de ti.',
      rating: 5,
      image: '/images/testimonial-6.jpg',
      achievements: ['Instructora certificada', 'Mentora de principiantes', 'Líder de comunidad'],
      beforeAfter: {
        before: 'Buscando actividad física',
        after: 'Instructora y mentora'
      }
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

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
            Lo que dicen nuestras alumnas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Descubre las historias de transformación y empoderamiento de nuestras alumnas. 
            Cada testimonio es una prueba del poder transformador del pole dance.
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 lg:mx-0">
                      <Quote className="text-white" size={24} />
                    </div>

                    <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonials[currentIndex].city}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">{testimonials[currentIndex].age}</div>
                        <div className="text-xs text-gray-600">Años</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">{testimonials[currentIndex].level}</div>
                        <div className="text-xs text-gray-600">Nivel</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">{testimonials[currentIndex].time}</div>
                        <div className="text-xs text-gray-600">En Pole Fusion</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-secondary-500 fill-current" />
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTestimonial(testimonials[currentIndex])}
                      className="btn-primary"
                    >
                      Ver historia completa
                    </motion.button>
                  </div>

                  {/* Image/Stats */}
                  <div className="text-center lg:text-left">
                    <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 mb-6">
                      <h5 className="font-semibold text-gray-800 mb-4">Logros destacados</h5>
                      <div className="space-y-3">
                        {testimonials[currentIndex].achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h5 className="font-semibold text-gray-800 mb-4">Transformación</h5>
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Antes</div>
                          <div className="text-sm text-gray-700">{testimonials[currentIndex].beforeAfter.before}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Después</div>
                          <div className="text-sm text-gray-700 font-medium">{testimonials[currentIndex].beforeAfter.after}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-500 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-500 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              Nuestros Números
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los números hablan por sí solos. Descubre por qué Pole Fusion es la academia 
              más elegida por las mujeres de Buenos Aires.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-600">Alumnas satisfechas</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-600">Testimonios positivos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Calificación promedio</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">95%</div>
              <div className="text-gray-600">Recomendación</div>
            </motion.div>
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
              ¿Lista para escribir tu historia?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad de mujeres empoderadas y descubre tu potencial. 
              Tu transformación comienza aquí.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Comenzar mi transformación
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Detailed Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {selectedTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedTestimonial.name}
                </h3>
                <p className="text-gray-600 mb-6">{selectedTestimonial.city}</p>

                <blockquote className="text-lg text-gray-700 mb-8 italic leading-relaxed">
                  "{selectedTestimonial.content}"
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Logros</h4>
                    <div className="space-y-2">
                      {selectedTestimonial.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Transformación</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Antes</div>
                        <div className="text-sm text-gray-700">{selectedTestimonial.beforeAfter.before}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Después</div>
                        <div className="text-sm text-gray-700 font-medium">{selectedTestimonial.beforeAfter.after}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Heart size={20} />
                    <span>Me gusta</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <Share2 size={20} />
                    <span>Compartir</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Testimonials 