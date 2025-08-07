import React from 'react'

const ColorTest = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
                 <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
           Test de Paleta de Colores - Pole Fusion
         </h1>
         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
           Nueva jerarquía de colores implementada según roles específicos
         </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {/* Accent Colors */}
           <div className="bg-white rounded-lg p-6 shadow-lg">
             <h2 className="text-xl font-bold mb-4 text-accent-500">Accent (Magenta) - CTAs</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                                 <div className="w-8 h-8 bg-primary-500 rounded"></div>
                 <span className="text-sm">Primary 500: #1f1b79</span>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-8 bg-primary-400 rounded"></div>
                 <span className="text-sm">Primary 400: #473fab</span>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-8 bg-primary-600 rounded"></div>
                 <span className="text-sm">Primary 600: #1a1666</span>
              </div>
            </div>
          </div>

                     {/* Coral Colors */}
           <div className="bg-white rounded-lg p-6 shadow-lg">
             <h2 className="text-xl font-bold mb-4 text-coral-500">Coral - Énfasis</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                                 <div className="w-8 h-8 bg-secondary-500 rounded"></div>
                 <span className="text-sm">Secondary 500: #4a3d8a</span>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-8 bg-secondary-400 rounded"></div>
                 <span className="text-sm">Secondary 400: #8777c7</span>
               </div>
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-8 bg-secondary-600 rounded"></div>
                 <span className="text-sm">Secondary 600: #3e3373</span>
              </div>
            </div>
          </div>

                     {/* Lavender Colors */}
           <div className="bg-white rounded-lg p-6 shadow-lg">
             <h2 className="text-xl font-bold mb-4 text-lavender-500">Lavender - Fondos</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-accent-500 rounded"></div>
                <span className="text-sm">Accent 500: #d63d9e</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-accent-400 rounded"></div>
                <span className="text-sm">Accent 400: #f472b6</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-accent-600 rounded"></div>
                <span className="text-sm">Accent 600: #b83285</span>
              </div>
            </div>
          </div>

                     {/* Secondary Colors */}
           <div className="bg-white rounded-lg p-6 shadow-lg">
             <h2 className="text-xl font-bold mb-4 text-secondary-500">Secondary (Purple Blue) - Títulos</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-coral-500 rounded"></div>
                <span className="text-sm">Coral 500: #ff6e61</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-coral-400 rounded"></div>
                <span className="text-sm">Coral 400: #ff8787</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-coral-600 rounded"></div>
                <span className="text-sm">Coral 600: #ff5252</span>
              </div>
            </div>
          </div>

                     {/* Primary Colors */}
           <div className="bg-white rounded-lg p-6 shadow-lg">
             <h2 className="text-xl font-bold mb-4 text-primary-500">Primary (Deep Blue) - Contraste</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-lavender-500 rounded"></div>
                <span className="text-sm">Lavender 500: #995fb4</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-lavender-400 rounded"></div>
                <span className="text-sm">Lavender 400: #c7a7df</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-lavender-600 rounded"></div>
                <span className="text-sm">Lavender 600: #7d4f93</span>
              </div>
            </div>
          </div>

          {/* Gradients */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Gradientes</h2>
            <div className="space-y-4">
              <div className="h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded"></div>
              <div className="h-12 bg-gradient-to-r from-accent-500 to-coral-500 rounded"></div>
              <div className="h-12 bg-gradient-to-r from-lavender-500 to-accent-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Buttons Test */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Botones de Prueba</h2>
          <div className="flex flex-wrap gap-4">
                         <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
               CTA Principal (Accent)
             </button>
             <button className="bg-coral-500 hover:bg-coral-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
               Botón Énfasis (Coral)
             </button>
             <button className="bg-lavender-500 hover:bg-lavender-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
               Botón Secundario (Lavender)
             </button>
             <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
               Botón Estructura (Secondary)
             </button>
             <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
               Botón Contraste (Primary)
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorTest
