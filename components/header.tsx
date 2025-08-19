"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Plastigesa</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-green-600">
              Inicio
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Nosotros
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Productos
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Contáctanos
            </a>
          </nav>

          <Button className="hidden md:block bg-gray-900 text-white hover:bg-gray-800">Solicitar cotización</Button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-green-600"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu} />
      )}

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
              <a
                href="#"
                className="block text-gray-800 hover:text-green-600 text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Inicio
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-green-600 text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Nosotros
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-green-600 text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Productos
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-green-600 text-base font-medium"
                onClick={toggleMobileMenu}
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-green-600 text-base font-medium"
                onClick={toggleMobileMenu}
              >
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