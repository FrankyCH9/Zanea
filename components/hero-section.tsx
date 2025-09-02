"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [animate, setAnimate] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const rotatingTexts = [
    "Mantenimiento de reservorios de agua.",
    "Desinfección de ambientes",
    "Control de plagas",
    "Limpieza y desinfección de reservorios de agua",
    "Control aviar y animales menores",
    "Consultoría en seguridad y medio ambiente",
  ]

  const [pausedLeft, setPausedLeft] = useState(false)
  const [pausedRight, setPausedRight] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)

    const interval = setInterval(() => {
      setAnimate(true)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
        setAnimate(false)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-14 px-6 bg-gray-50 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center transform transition-all duration-1000 ease-out
        ${loaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {/* ─────────── Texto ─────────── */}
        <div className="pr-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-snug">
            Tu aliado en <br />
            <span
              className={`text-green-600 inline-block transition-all duration-500 ease-in-out
              ${animate ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
            Ofrecemos servicios especializados en Ingeniería, saneamiento ambiental y gestión en medio ambiente con el soporte de un grupo humano altamente especializado. Con altos estándares de calidad, manteniendo la satisfacción de nuestros clientes, la salud y seguridad de nuestros trabajadores y el cuidado del medio ambiente.
          </p>
          <Button className="bg-green-600 text-white hover:bg-green-700 text-lg sm:text-xl lg:text-2xl px-7 sm:px-9 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-2xl shadow-lg transition hover:shadow-green-400/50">
            Ver productos
          </Button>
        </div>

        {/* ─────────── Carrusel ─────────── */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
          {/* Neblina arriba y abajo */}
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-gray-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-gray-50 to-transparent z-20 pointer-events-none"></div>

          {/* Primera columna */}
          <div
            className="absolute left-0 w-1/2 pr-2"
            onMouseEnter={() => setPausedLeft(true)}
            onMouseLeave={() => setPausedLeft(false)}
          >
            <div className={`carousel-up ${pausedLeft ? "pause" : ""}`}>
              <img src="/white-plastic-bags.png" alt="Bolsas plásticas blancas"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
              <img src="/green-plastic-containers.png" alt="Contenedores verdes"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
              <img src="/white-plastic-bags.png" alt="Bolsas plásticas blancas"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
              <img src="/green-plastic-containers.png" alt="Contenedores verdes"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
            </div>
          </div>

          {/* Segunda columna */}
          <div
            className="absolute right-0 w-1/2 pl-2"
            onMouseEnter={() => setPausedRight(true)}
            onMouseLeave={() => setPausedRight(false)}
          >
            <div className={`carousel-down ${pausedRight ? "pause" : ""}`}>
              <img src="/brown-plastic-bags.png" alt="Bolsas plásticas marrones"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
              <img src="/blue-plastic-containers.png" alt="Contenedores azules"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
              <img src="/brown-plastic-bags.png" alt="Bolsas plásticas marrones"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
              <img src="/blue-plastic-containers.png" alt="Contenedores azules"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover rounded-lg mb-4 shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
