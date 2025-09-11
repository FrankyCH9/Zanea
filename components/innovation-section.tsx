"use client"
import { Button } from "@/components/ui/button"
import type React from "react"
import { Play, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function InnovationSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [showText, setShowText] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowVideo(true), 200) // primero el video
    setTimeout(() => setShowHeader(true), 800) // header antes
    setTimeout(() => setShowText(true), 1400) // después el resto del texto
  }, [])

  const handlePlayVideo = () => setIsVideoModalOpen(true)
  const handleCloseModal = () => setIsVideoModalOpen(false)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleCloseModal()
  }

  return (
    <>
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 🎥 Miniatura con botón play */}
          <div
            className={`relative transform transition-all duration-1000 ease-out
              ${showVideo ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <img
              src="/consultoria/1.jpeg"
              alt="Vista previa del video"
              className="rounded-xl shadow-lg"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
              <button
                onClick={handlePlayVideo}
                className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-2xl 
                           transition-all duration-300 hover:scale-110 hover:bg-green-500 group"
              >
                <Play className="w-8 h-8 text-black group-hover:text-white" />
                <span className="absolute w-full h-full rounded-full border-4 border-white opacity-75 animate-ping"></span>
              </button>
            </div>
          </div>

          {/* 📝 Texto con animación */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-500
              ${showText ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            {/* Encabezado */}
            <div
              className={`text-center lg:text-left mb-10 transform transition-all duration-1000 ease-out
                ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
            >
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                Calidad
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 leading-tight">
                Números que hablan por nosotros
              </h2>
              <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                Más de dos décadas de experiencia nos respaldan como líderes en la industria.
              </p>
            </div>

            {/* Contenido */}
            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900 text-lg">Misión:</span>{" "}
                Brindar soluciones eficientes a nuestros socios, asegurando la calidad y
                la plena satisfacción en cada servicio.
              </p>
              <p>
                <span className="font-semibold text-gray-900 text-lg">Visión:</span>{" "}
                Ser reconocidos a nivel nacional como una empresa líder en ingeniería,
                saneamiento ambiental y gestión del medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🎬 Modal del video */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-2xl w-full max-w-4xl mx-auto overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-lg">Zanea</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseModal}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Video local */}
            <div className="relative aspect-video bg-black">
              <video
                src="video/1.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
