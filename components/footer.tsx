"use client"
import React, { useState } from "react"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

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
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            {/* Logo como imagen */}
            <img 
              src="experiencia/logo.jpeg" 
              alt="Plastigesa Logo" 
              className="w-20 h-20 object-contain"
            />

          </div>
          <p className="text-gray-600 max-w-sm mx-auto md:mx-0">
            Líderes en Desinfección  de calidad superior para la industria y el comercio.
          </p>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-4 text-gray-500 mt-4">
            <a href="https://www.facebook.com/saneagroup?locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
              <Facebook size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
              <Instagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
              <Linkedin size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
              <Twitter size={20} />
            </a>
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
              onClick={(e) => handleNav(e, "BlogSection")}
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
