import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery-1.jpg',
      alt: 'Pole dance avanzado',
      category: 'Avanzado',
      description: 'Técnicas avanzadas de pole dance'
    },
    {
      id: 2,
      src: '/images/gallery-2.jpg',
      alt: 'Clase de iniciación',
      category: 'Principiante',
      description: 'Primeros pasos en pole dance'
    },
    {
      id: 3,
      src: '/images/gallery-3.jpg',
      alt: 'Coreografía artística',
      category: 'Intermedio',
      description: 'Expresión artística en el pole'
    },
    {
      id: 4,
      src: '/images/gallery-4.jpg',
      alt: 'Acrobacias aéreas',
      category: 'Avanzado',
      description: 'Acrobacias y movimientos complejos'
    },
    {
      id: 5,
      src: '/images/gallery-5.jpg',
      alt: 'Flexibilidad y fuerza',
      category: 'Intermedio',
      description: 'Desarrollo de flexibilidad'
    },
    {
      id: 6,
      src: '/images/gallery-6.jpg',
      alt: 'Performance en vivo',
      category: 'Avanzado',
      description: 'Shows y performances'
    },
    {
      id: 7,
      src: '/images/gallery-7.jpg',
      alt: 'Entrenamiento grupal',
      category: 'Todos los niveles',
      description: 'Clases grupales dinámicas'
    },
    {
      id: 8,
      src: '/images/gallery-8.jpg',
      alt: 'Competencia',
      category: 'Competencia',
      description: 'Preparación para competencias'
    }
  ]

  const categories = ['Todos', 'Principiante', 'Intermedio', 'Avanzado', 'Competencia']
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredImages = activeCategory === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setSelectedImage(filteredImages[nextIndex])
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
      setSelectedImage(filteredImages[prevIndex])
    }
  }

  return (
    <section className="section-padding bg-gray-50">
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
            Galería
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre la belleza y la fuerza del pole dance a través de nuestras imágenes. 
            Cada foto cuenta una historia de empoderamiento y superación personal.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Placeholder for image */}
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <Instagram size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Ver más</p>
                    </div>
                  </div>

                  {/* Placeholder icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl">
                      🎭
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a nuestra comunidad y sé parte de estas increíbles experiencias. 
              ¡Cada alumna tiene su propia historia de transformación!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => window.location.href = '/reservas'}
            >
              Reservar mi primera clase
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image content */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-64 h-64 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-6xl mx-auto mb-6">
                  🎭
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.alt}
                </h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <span className="inline-block px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery 