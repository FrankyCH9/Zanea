"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(v => !v)

  // Navegación con scroll programático (funciona incluso si # no responde)
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    // Si el header se usa en otra ruta, manda a la home con el hash
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/#${targetId}`
      return
    }

    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      // Actualiza el hash sin recargar
      history.replaceState(null, "", `#${targetId}`)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Plastigesa</span>
          </div>

          {/* Menú escritorio */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#HeroSection" onClick={(e) => handleNav(e, "HeroSection")} className="text-gray-700 hover:text-green-600">
              Inicio
            </a>
            <a href="#StatisticsSection" onClick={(e) => handleNav(e, "StatisticsSection")} className="text-gray-700 hover:text-green-600">
              Nosotros
            </a>
            <a href="#BlogSection" onClick={(e) => handleNav(e, "BlogSection")} className="text-gray-700 hover:text-green-600">
              Servicios
            </a>
            <a href="#BlogSection" onClick={(e) => handleNav(e, "")} className="text-gray-700 hover:text-green-600">
              Blog
            </a>
            <a href="#LocationsSection" onClick={(e) => handleNav(e, "LocationsSection")} className="text-gray-700 hover:text-green-600">
              Contáctanos
            </a>
          </nav>

          <Button className="hidden md:block bg-gray-900 text-white hover:bg-gray-800">
            Solicitar cotización
          </Button>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-green-600"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay negro */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Menú lateral móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Plastigesa</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-1 text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-4 pt-8">
            <div className="space-y-8">
              <a href="#HeroSection" onClick={(e) => handleNav(e, "HeroSection")} className="block text-gray-800 hover:text-green-600 text-base font-medium">
                Inicio
              </a>
              <a href="#StatisticsSection" onClick={(e) => handleNav(e, "StatisticsSection")} className="block text-gray-800 hover:text-green-600 text-base font-medium">
                Nosotros
              </a>
              <a href="StatisticsSection" onClick={(e) => handleNav(e, "ProductsSection")} className="block text-gray-800 hover:text-green-600 text-base font-medium">
                Servicios
              </a>
              <a href="#BlogSection" onClick={(e) => handleNav(e, "BlogSection")} className="block text-gray-800 hover:text-green-600 text-base font-medium">
                Blog
              </a>
              <a href="#ContactSection" onClick={(e) => handleNav(e, "ContactSection")} className="block text-gray-800 hover:text-green-600 text-base font-medium">
                Contáctanos
              </a>
            </div>
          </nav>

          <div className="p-4">
            <Button
              className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3 rounded-lg font-medium"
              onClick={toggleMobileMenu}
            >
              Solicitar cotización
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
