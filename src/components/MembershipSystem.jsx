import { useState } from 'react'
import { Check, Star, Crown, Zap, Heart } from 'lucide-react'

const MembershipSystem = () => {
  const [selectedPlan, setSelectedPlan] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const membershipPlans = [
    {
      id: 'basic',
      name: 'Básico',
      icon: <Zap className="w-6 h-6" />,
      price: '$15.000',
      period: 'por mes',
      description: 'Perfecto para principiantes',
      features: [
        '4 clases por mes',
        'Acceso a clases básicas',
        'Material de apoyo',
        'WhatsApp de consultas'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Pole Sport',
      icon: <Star className="w-6 h-6" />,
      price: '$15.000',
      period: 'por mes',
      description: 'Para alumnos con experiencia',
      features: [
        'Acceso a todas las clases de Pole Sport',
        'Clases de Flexibilidad incluidas',
        'Acceso al gimnasio',
        'Soporte por WhatsApp',
        'Evaluación mensual'
      ],
      popular: true,
      color: 'from-primary-500 to-secondary-500'
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: <Crown className="w-6 h-6" />,
      price: '$35.000',
      period: 'por mes',
      description: 'Máxima experiencia de entrenamiento',
      features: [
        'Clases ilimitadas',
        'Acceso a todas las clases',
        'Material de apoyo premium',
        'WhatsApp prioritario',
        'Evaluación personalizada',
        'Workshops gratuitos',
        'Sesiones privadas (1x mes)',
        'Acceso a eventos especiales'
      ],
      popular: false
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `Nueva solicitud de membresía:
Plan: ${selectedPlan}
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}`

    // Enviar por WhatsApp
    const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitted(true)
    
    // Reset form
    setTimeout(() => {
      setSelectedPlan('')
      setName('')
      setEmail('')
      setPhone('')
      setIsSubmitted(false)
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">¡Solicitud Enviada!</h3>
        <p className="text-green-600">
          Te hemos enviado un mensaje por WhatsApp para procesar tu membresía.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Membresías</h2>
        <p className="text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
      </div>

      {/* Planes de Membresía */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {membershipPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-lg p-6 border-2 transition-all cursor-pointer ${
              selectedPlan === plan.name
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            } ${plan.popular ? 'ring-2 ring-yellow-400' : ''}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              </div>
            )}

            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                <span className="text-gray-500 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-600 mt-2">{plan.description}</p>
            </div>

            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Formulario de Solicitud */}
      {selectedPlan && (
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Solicitar Membresía: {selectedPlan}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Solicitar Membresía
            </button>
          </form>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Nota:</strong> Al hacer clic en "Solicitar Membresía" se abrirá WhatsApp para procesar tu solicitud.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MembershipSystem 