import { useState } from 'react'
import { siteConfig, updateSiteConfig } from '../config/siteConfig'

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState(siteConfig)

  const handleSave = () => {
    updateSiteConfig(config)
    // Aquí podrías agregar lógica para guardar en localStorage o backend
    localStorage.setItem('siteConfig', JSON.stringify(config))
    alert('Configuración guardada!')
  }

  const handleReset = () => {
    setConfig(siteConfig)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 z-50"
      >
        ⚙️ Admin
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Panel de Administración</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Información del Negocio */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Información del Negocio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  value={config.business.name}
                  onChange={(e) => setConfig({
                    ...config,
                    business: { ...config.business, name: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tagline</label>
                <input
                  type="text"
                  value={config.business.tagline}
                  onChange={(e) => setConfig({
                    ...config,
                    business: { ...config.business, tagline: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Teléfono</label>
                <input
                  type="text"
                  value={config.business.phone}
                  onChange={(e) => setConfig({
                    ...config,
                    business: { ...config.business, phone: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={config.business.email}
                  onChange={(e) => setConfig({
                    ...config,
                    business: { ...config.business, email: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Colores */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Colores del Tema</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Color Principal</label>
                <input
                  type="color"
                  value={config.colors.primary}
                  onChange={(e) => setConfig({
                    ...config,
                    colors: { ...config.colors, primary: e.target.value }
                  })}
                  className="w-full h-10 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Color Secundario</label>
                <input
                  type="color"
                  value={config.colors.secondary}
                  onChange={(e) => setConfig({
                    ...config,
                    colors: { ...config.colors, secondary: e.target.value }
                  })}
                  className="w-full h-10 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Color Acento</label>
                <input
                  type="color"
                  value={config.colors.accent}
                  onChange={(e) => setConfig({
                    ...config,
                    colors: { ...config.colors, accent: e.target.value }
                  })}
                  className="w-full h-10 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Redes Sociales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Instagram</label>
                <input
                  type="url"
                  value={config.social.instagram}
                  onChange={(e) => setConfig({
                    ...config,
                    social: { ...config.social, instagram: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Facebook</label>
                <input
                  type="url"
                  value={config.social.facebook}
                  onChange={(e) => setConfig({
                    ...config,
                    social: { ...config.social, facebook: e.target.value }
                  })}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Guardar Cambios
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Restaurar Original
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel 