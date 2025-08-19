"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Play, X, Share2 } from "lucide-react"
import { useState } from "react"

export default function InnovationSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handlePlayVideo = () => {
    setIsVideoModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsVideoModalOpen(false)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/plastigesa-factory-exterior.png" alt="Edificio Plastigesa" className="rounded-lg w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
              <Button
                size="lg"
                className="rounded-full bg-white text-black hover:bg-gray-100"
                onClick={handlePlayVideo}
              >
                <Play className="w-6 h-6 ml-1" />
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovación y calidad en cada producto</h2>
            <p className="text-gray-600 mb-4">
              Con más de dos décadas de experiencia en el mercado, Plastigesa se ha consolidado como una empresa líder
              en la fabricación de bolsas plásticas y productos plásticos de la más alta calidad. Contamos con personal
              de la innovación, la calidad y el servicio al cliente nos ha permitido crear relaciones duraderas con
              nuestros clientes y convertirnos en su aliado estratégico en cada negocio.
            </p>
          </div>
        </div>
      </section>

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-2xl w-full max-w-4xl mx-auto overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r bg-green-600 bg-green-700 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-lg">PLASTIGESA Y BCP JUNTOS</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white hover:bg-opacity-20 text-sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Compartir
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseModal}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="PLASTIGESA Y BCP JUNTOS"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 flex items-center justify-between">
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
                Mirar en YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}