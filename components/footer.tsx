"use client"
import React, { useState } from "react"

export default function Footer() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Función de scroll programático
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/#${targetId}`
      return
    }

    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", `#${targetId}`)
    }
  }

  return (
    <footer className="bg-white text-gray-800 py-12 px-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        
        {/* Logo y descripción */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-lg">Plastigesa</span>
          </div>
          <p className="text-gray-600 max-w-sm mx-auto md:mx-0">
            Líderes en productos plásticos de calidad superior para la industria y el comercio.
          </p>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-4 text-gray-500 mt-4">
            <a href="#" className="hover:text-green-600">Fb</a>
            <a href="#" className="hover:text-green-600">Ig</a>
            <a href="#" className="hover:text-green-600">In</a>
            <a href="#" className="hover:text-green-600">Tk</a>
          </div>
        </div>

        {/* Navegación */}
        <div className="text-center md:text-left md:pl-16">
          <h3 className="font-semibold mb-4">Navegación</h3>
          <div className="space-y-2">
            <a
              href="#StatisticsSection"
              onClick={(e) => handleNav(e, "StatisticsSection")}
              className="block text-gray-600 hover:text-green-600"
            >
              Sobre nosotros
            </a>
            <a
              href="#BlogSection"
              onClick={(e) => handleNav(e, "BlogSection")}
              className="block text-gray-600 hover:text-green-600"
            >
              Productos
            </a>
            <a
              href="#BlogSection"
              onClick={(e) => handleNav(e, "")}
              className="block text-gray-600 hover:text-green-600"
            >
              Blog
            </a>
            <a
              href="#LocationsSection"
              onClick={(e) => handleNav(e, "LocationsSection")}
              className="block text-gray-600 hover:text-green-600"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Plastigesa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
