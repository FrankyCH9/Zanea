"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Tent, X, Share2 } from "lucide-react"

export default function StatisticsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [showText, setShowText] = useState(false)

  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reinicia los estados cada vez que entra en pantalla
            setShowHeader(false)
            setShowVideo(false)
            setShowText(false)

            setTimeout(() => setShowHeader(true), 200)
            setTimeout(() => setShowVideo(true), 600)
            setTimeout(() => setShowText(true), 1000)
          }
        })
      },
      { threshold: 0.3 } // 👈 aparece cuando el 30% de la sección es visible
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setIsVideoOpen(false)
  }

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out
            ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
        >
          <span className="text-green-600 font-semibold uppercase tracking-wide">CALIDAD</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Números que hablan por nosotros
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Más de dos décadas de experiencia nos respaldan como líderes en la industria.
          </p>
        </div>

        {/* Video + Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div
            className={`relative mx-auto w-full max-w-md rounded-lg overflow-hidden shadow-xl transform transition-all duration-1000 ease-out
              ${showVideo ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
          >
            <img
              src="/plastigesa-mixtura-fair.png"
              alt="Plastigesa en Feria Mixtura"
              className="w-full h-auto rounded-lg"
            />
            {/* Overlay Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button
                size="lg"
                onClick={() => setIsVideoOpen(true)}
                className="rounded-full bg-white text-black hover:bg-gray-100 shadow-lg w-16 h-16 flex items-center justify-center transition-transform transform hover:scale-110"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-500
              ${showText ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Tent className="w-7 h-7 text-red-600 mr-2" />
              PLASTIGESA en la Feria Mixtura Yanahuara 2025
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              PLASTIGESA tuvo el honor de participar en la Feria Gastronómica Mixtura Yanahuara 2025,
              uno de los eventos más importantes y concurridos de Arequipa. Nuestro stand recibió a cientos
              de emprendedores, empresarios y familias, quienes conocieron de cerca nuestros productos
              de embalaje y soluciones sostenibles para el comercio y la industria.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Seguimos comprometidos con el desarrollo regional y con estar presentes en los espacios
              que impulsan la innovación, el emprendimiento y el orgullo por lo peruano. ¡Gracias a todos por visitarnos!
            </p>
          </div>
        </div>
      </div>

      {/* 🎬 Modal Video */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-2xl w-full max-w-4xl mx-auto overflow-hidden shadow-2xl transform scale-95 opacity-0 animate-zoomIn">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-lg">PLASTIGESA EN MIXTURA 2025</h3>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white hover:bg-opacity-20 text-sm"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  Compartir
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVideoOpen(false)}
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
                title="PLASTIGESA EN MIXTURA 2025"
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

      {/* Animaciones personalizadas */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-zoomIn {
          animation: zoomIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
