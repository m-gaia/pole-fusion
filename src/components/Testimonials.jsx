import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      city: 'Buenos Aires',
      age: 28,
      level: 'Intermedio',
      time: '2 años',
      content: 'Pole Fusion cambió mi vida completamente. No solo mejoré mi fuerza física, sino que también gané mucha confianza en mí misma. Las instructoras son increíbles y la comunidad es muy acogedora.',
      rating: 5,
      image: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Ana Rodríguez',
      city: 'Córdoba',
      age: 32,
      level: 'Principiante',
      time: '6 meses',
      content: 'Nunca pensé que podría hacer pole dance. Empecé desde cero y ahora puedo hacer movimientos que nunca creí posibles. El ambiente es súper motivador y las clases son muy divertidas.',
      rating: 5,
      image: '/images/testimonial-2.jpg'
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
      image: '/images/testimonial-3.jpg'
    },
    {
      id: 4,
      name: 'Carolina Silva',
      city: 'Mendoza',
      age: 30,
      level: 'Intermedio',
      time: '1 año',
      content: 'Después de tener mi bebé, necesitaba algo que me ayudara a recuperar mi fuerza y confianza. Pole Fusion fue la respuesta perfecta. Ahora me siento más fuerte que nunca.',
      rating: 5,
      image: '/images/testimonial-4.jpg'
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
      image: '/images/testimonial-5.jpg'
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
            Lo que dicen nuestras alumnas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre las historias de transformación y empoderamiento de nuestras alumnas. 
            Cada testimonio es una prueba del poder transformador del pole dance.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="text-white" size={24} />
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Name and Location */}
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 mb-3">
                    {testimonials[currentIndex].city}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                    <span>{testimonials[currentIndex].age} años</span>
                    <span>•</span>
                    <span>Nivel {testimonials[currentIndex].level}</span>
                    <span>•</span>
                    <span>{testimonials[currentIndex].time} en Pole Fusion</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-secondary-500 fill-current" />
                    ))}
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">98%</div>
            <div className="text-gray-600">Alumnas satisfechas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">500+</div>
            <div className="text-gray-600">Testimonios positivos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">4.9/5</div>
            <div className="text-gray-600">Calificación promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">95%</div>
            <div className="text-gray-600">Recomendación</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Lista para escribir tu historia?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Únete a nuestra comunidad de mujeres empoderadas y descubre tu potencial. 
              Tu transformación comienza aquí.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Comenzar mi transformación
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 