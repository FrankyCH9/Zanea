"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, X, Share2 } from "lucide-react"

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // 🔹 Estado para controlar el modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handlePlayVideo = () => setIsVideoModalOpen(true)
  const handleCloseModal = () => setIsVideoModalOpen(false)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleCloseModal()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <>
      <section ref={sectionRef} className="py-16 px-4 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto con efecto desde la derecha */}
          <div
            className={`transform transition-all duration-[2000ms] ease-out
            ${isVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¡Felices fiestas patrias!</h2>
            <p className="text-gray-600 mb-4">
              En Plastigesa nos sumamos a la celebración de nuestras fiestas patrias con un corazón lleno de orgullo por
              ser una empresa peruana. A través de los años de trayectoria empresarial, siempre destacamos y promovemos la
              identidad nacional fomentando la industria y el trabajo responsable de las familias peruanas que forman
              parte de nuestra empresa.
            </p>
            <p className="text-gray-600">
              Seguimos comprometidos con el desarrollo del país y con brindar productos de calidad que impulsan el
              crecimiento de nuestros clientes.
            </p>
          </div>

          {/* Imagen con efecto desde la derecha */}
          <div
            className={`relative transform transition-all duration-[2000ms] ease-out delay-300
            ${isVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"}`}
          >
            <img
              src="/plastigesa-peru-celebration.png"
              alt="Equipo Plastigesa celebrando"
              className="rounded-lg w-full"
            />
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
                <h3 className="font-semibold text-lg">Celebración en Plastigesa</h3>
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

            {/* Video */}
            <div className="relative aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Celebración en Plastigesa"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Footer */}
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
