// Configuración del sitio - Fácil de personalizar
export const siteConfig = {
  // Información básica del negocio
  business: {
    name: "Pole Fusion",
    tagline: "Academia de Pole Dance",
    description: "Academia de pole dance en Ciudad Mendoza. Clases para todos los niveles. Fuerza, arte y libertad.",
    location: "Ciudad Mendoza, Argentina",
    phone: "+54 261 1234-5678",
    email: "info@polefusion.com",
    address: "Calle Videla Correa 1234, Ciudad Mendoza",
    whatsapp: "+54 9 261 1234-5678"
  },

  // Colores del tema (fácil de cambiar)
  colors: {
    primary: "#EC4899", // Fucsia principal
    secondary: "#EAB308", // Dorado
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
      name: "Pole Sport",
      description: "Clases técnicas enfocadas en la fuerza, resistencia y movimientos acrobáticos del pole dance deportivo.",
      duration: "75 min",
      level: "Todos los niveles",
      instructor: "Camila Fernández",
      price: "$8.000",
      schedule: ["Lunes 18:00", "Miércoles 19:00", "Sábado 10:00"]
    },
    {
      id: 3,
      name: "Exótico",
      description: "Desarrolla tu sensualidad y expresión artística con movimientos fluidos y coreografías elegantes.",
      duration: "75 min",
      level: "Intermedio-Avanzado",
      instructor: "Valentina Rodríguez",
      price: "$10.000",
      schedule: ["Martes 19:00", "Jueves 18:00", "Sábado 11:00"]
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
    title: "Pole Fusion - Academia de Pole Dance en Ciudad Mendoza",
    description: "Academia de pole dance en Ciudad Mendoza. Clases para todos los niveles. Fuerza, arte y libertad.",
    keywords: "pole dance, academia, mendoza, clases, fitness, acrobacias",
    ogImage: "/images/og-image.jpg"
  }
}

// Función para actualizar la configuración
export const updateSiteConfig = (newConfig) => {
  Object.assign(siteConfig, newConfig)
} 