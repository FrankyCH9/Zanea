"use client"

export default function ClientLogosSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-green-600 font-medium">REFERENCIAS</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ellos confían en nuestro trabajo</h2>
        <p className="text-gray-600 mb-12">
          Empresas líderes en diferentes industrias han elegido Plastigesa como su proveedor de confianza.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
          <img src="/abstract-logo-1.png" alt="Cliente 1" className="mx-auto h-12" />
          <img src="/abstract-logo-geometric.png" alt="Cliente 2" className="mx-auto h-12" />
          <img src="/abstract-logo-design-3.png" alt="Cliente 3" className="mx-auto h-12" />
          <img src="/abstract-logo-4.png" alt="Cliente 4" className="mx-auto h-12" />
          <img src="/abstract-logo-5.png" alt="Cliente 5" className="mx-auto h-12" />
          <img src="/company-logo-6.png" alt="Cliente 6" className="mx-auto h-12" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60 mt-8">
          <img src="/abstract-logo-1.png" alt="Cliente 7" className="mx-auto h-12" />
          <img src="/abstract-logo-geometric.png" alt="Cliente 8" className="mx-auto h-12" />
          <img src="/abstract-logo-design-3.png" alt="Cliente 9" className="mx-auto h-12" />
          <img src="/abstract-logo-4.png" alt="Cliente 10" className="mx-auto h-12" />
          <img src="/abstract-logo-5.png" alt="Cliente 11" className="mx-auto h-12" />
          <img src="/company-logo-6.png" alt="Cliente 12" className="mx-auto h-12" />
        </div>
      </div>
    </section>
  )
}
