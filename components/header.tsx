"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Header() {
  const [activo, setActivo] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <header className="relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-500 text-white text-xs md:text-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <a
              href="tel:947454525"
              className="flex items-center gap-2 hover:text-gray-300 transition"
            >
              <Phone size={16} />
              <span>947454525</span>
            </a>
            <a
              href="mailto:informes@controlambiental.pe"
              className="flex items-center gap-2 hover:text-gray-300 transition"
            >
              <Mail size={16} />
              <span>INFORMES@CONTROLAMBIENTAL.PE</span>
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <Youtube size={18} />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="experiencia/logo.jpeg"
              alt="Logo Plastigesa"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            <Link
              href="/"
              onClick={() => setActivo("inicio")}
              className={`px-4 py-2 font-semibold text-xs lg:text-sm uppercase rounded transition ${
                activo === "inicio"
                  ? "bg-gray-400"
                  : "hover:bg-gray-400"
              }`}
            >
              INICIO
            </Link>

            <Link
              href="/nosotros"
              onClick={() => setActivo("nosotros")}
              className={`px-4 py-2 font-semibold text-xs lg:text-sm uppercase rounded transition ${
                activo === "nosotros"
                  ? "bg-gray-400"
                  : "hover:bg-gray-400"
              }`}
            >
              NOSOTROS
            </Link>

            <Link
              href="/servicios"
              className="px-4 py-2 hover:bg-gray-400 font-semibold text-xs lg:text-sm transition uppercase rounded"
            >
              SERVICIOS
            </Link>

            <Link
              href="/sectores"
              className="px-4 py-2 hover:bg-gray-400 font-semibold text-xs lg:text-sm transition uppercase rounded"
            >
              SOLUCIONES
            </Link>

            <Link
              href="/contacto"
              className="px-4 py-2 hover:bg-gray-400 font-semibold text-xs lg:text-sm transition uppercase rounded"
            >
              CONTÁCTANOS
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-gray-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-600 border-t border-gray-500">
          <nav className="flex flex-col gap-2 p-4 max-w-7xl mx-auto">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 hover:bg-gray-500 font-semibold text-sm rounded uppercase"
            >
              INICIO
            </Link>

            <Link
              href="/statistics-section"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 hover:bg-gray-500 font-semibold text-sm rounded uppercase"
            >
              NOSOTROS
            </Link>

            <Link
              href="/servicios"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 hover:bg-gray-500 font-semibold text-sm rounded uppercase"
            >
              SERVICIOS
            </Link>

            <Link
              href="/sectores"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 hover:bg-gray-500 font-semibold text-sm rounded uppercase"
            >
              SOLUCIONES
            </Link>

            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 hover:bg-gray-500 font-semibold text-sm rounded uppercase"
            >
              CONTÁCTANOS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}