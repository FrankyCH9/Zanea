"use client"

export default function LocationsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-green-600 font-medium">PRESENCIA</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros locales</h2>
        <p className="text-gray-600 mb-12">
          Visítanos en cualquiera de nuestras sedes, estamos aquí para poder ayudarte
        </p>

        <div className="bg-gray-200 rounded-lg h-96 mb-8 relative overflow-hidden">
          <img src="/arequipa-peru-map.png" alt="Mapa de Arequipa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-600 w-4 h-4 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
