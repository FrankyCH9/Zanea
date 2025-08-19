"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl">Plastigesa</span>
            </div>
            <p className="text-gray-400 mb-4">
              Líderes en la fabricación de productos plásticos para la industria peruana.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">
                Inicio
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Nosotros
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Productos
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Blog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Contáctanos
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Productos</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">
                Bolsas de basura
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Cintas adhesivas
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Stretch film
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Bolsas biodegradables
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="text-gray-400">+51 959952460</p>
              <p className="text-gray-400">contacto@plastigesa.com</p>
              <p className="text-gray-400">Arequipa, Perú</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Plastigesa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
