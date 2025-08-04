// Configuración del sitio - Fácil de personalizar
export const siteConfig = {
  // Información básica del negocio
  business: {
    name: "Pole Fusion",
    tagline: "Academia de Pole Dance",
    description: "Academia de pole dance en Buenos Aires. Clases para todos los niveles. Fuerza, arte y libertad.",
    location: "Buenos Aires, Argentina",
    phone: "+54 11 1234-5678",
    email: "info@polefusion.com",
    address: "Av. Corrientes 1234, Buenos Aires",
    whatsapp: "+54 9 11 1234-5678"
  },

  // Colores del tema (fácil de cambiar)
  colors: {
    primary: "#8B5CF6", // Violeta
    secondary: "#F59E0B", // Dorado
    accent: "#EC4899", // Rosa
    dark: "#1F2937",
    light: "#F9FAFB"
  },

  // Redes sociales
  social: {
    instagram: "https://instagram.com/polefusion",
    facebook: "https://facebook.com/polefusion",
    tiktok: "https://tiktok.com/@polefusion",
    youtube: "https://youtube.com/polefusion"
  },

  // Horarios de atención
  hours: {
    monday: "9:00 - 21:00",
    tuesday: "9:00 - 21:00",
    wednesday: "9:00 - 21:00",
    thursday: "9:00 - 21:00",
    friday: "9:00 - 21:00",
    saturday: "9:00 - 18:00",
    sunday: "Cerrado"
  },

  // Servicios/Clases (sin precios online)
  services: [
    {
      id: 1,
      name: "Pole Dance Básico",
      description: "Introducción al pole dance para principiantes",
      duration: "1 hora",
      level: "Principiante",
      image: "/images/class-basic.jpg"
    },
    {
      id: 2,
      name: "Pole Dance Intermedio",
      description: "Técnicas avanzadas y acrobacias",
      duration: "1 hora",
      level: "Intermedio",
      image: "/images/class-intermediate.jpg"
    },
    {
      id: 3,
      name: "Pole Dance Avanzado",
      description: "Técnicas profesionales y coreografías",
      duration: "1.5 horas",
      level: "Avanzado",
      image: "/images/class-advanced.jpg"
    },
    {
      id: 4,
      name: "Pole Fitness",
      description: "Entrenamiento de fuerza y resistencia",
      duration: "1 hora",
      level: "Todos los niveles",
      image: "/images/class-fitness.jpg"
    }
  ],

  // Instructores
  instructors: [
    {
      id: 1,
      name: "María González",
      specialty: "Pole Dance & Acrobacias",
      experience: "8 años",
      bio: "Instructora certificada con experiencia en competencias internacionales",
      image: "/images/instructor-1.jpg",
      social: {
        instagram: "https://instagram.com/mariagonzalez",
        facebook: "https://facebook.com/mariagonzalez"
      }
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      specialty: "Pole Fitness & Entrenamiento",
      experience: "5 años",
      bio: "Especialista en entrenamiento funcional y pole fitness",
      image: "/images/instructor-2.jpg",
      social: {
        instagram: "https://instagram.com/carlosrodriguez",
        facebook: "https://facebook.com/carlosrodriguez"
      }
    }
  ],

  // Testimonios
  testimonials: [
    {
      id: 1,
      name: "Ana Martínez",
      text: "Pole Fusion cambió mi vida. Me siento más fuerte y confiada que nunca.",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Laura Fernández",
      text: "Excelente ambiente y profesores muy profesionales. Altamente recomendado.",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Sofía López",
      text: "Llevo 2 años entrenando aquí y cada día aprendo algo nuevo.",
      rating: 5,
      image: "/images/testimonial-3.jpg"
    }
  ],

  // Galería de imágenes
  gallery: [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      alt: "Clase de pole dance",
      category: "clases"
    },
    {
      id: 2,
      src: "/images/gallery-2.jpg",
      alt: "Acrobacias avanzadas",
      category: "acrobacias"
    },
    {
      id: 3,
      src: "/images/gallery-3.jpg",
      alt: "Entrenamiento de fuerza",
      category: "fitness"
    }
  ],

  // SEO y metadatos
  seo: {
    title: "Pole Fusion - Academia de Pole Dance en Buenos Aires",
    description: "Academia de pole dance en Buenos Aires. Clases para todos los niveles. Fuerza, arte y libertad.",
    keywords: "pole dance, academia, buenos aires, clases, fitness, acrobacias",
    ogImage: "/images/og-image.jpg"
  }
}

// Función para actualizar la configuración
export const updateSiteConfig = (newConfig) => {
  Object.assign(siteConfig, newConfig)
} 