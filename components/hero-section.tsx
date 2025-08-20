"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

  const [loaded, setLoaded] = useState(false) // 👈 estado para animación al cargar

  const rotatingTexts = [
    "empaques flexibles",
    "soluciones de embalaje",
    "bolsas personalizadas",
    "productos innovadores",
  ]

  // Pausas independientes por columna
  const [pausedLeft, setPausedLeft] = useState(false)
  const [pausedRight, setPausedRight] = useState(false)

  useEffect(() => {
    // activar animación de entrada
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
    <section className="py-10 px-4 bg-gray-50 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-2 gap-6 items-center transform transition-all duration-1000 ease-out
        ${loaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {/* ─────────── Texto ─────────── */}
        <div className="pr-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 leading-snug">
            Tu aliado en <br />
            <span
              className={`text-green-600 inline-block transition-all duration-500 ease-in-out
              ${animate ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-xl">
            Ofrecemos la más alta tecnología en fabricación de bolsas plásticas, soluciones de embalaje y bolsas
            termo-formadas basado en la satisfacción de nuestros clientes.
          </p>
          <Button className="bg-green-600 text-white hover:bg-green-700 text-base sm:text-lg md:text-xl lg:text-2xl px-5 sm:px-7 md:px-9 lg:px-11 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg transition hover:shadow-green-400/50">
            Ver productos
          </Button>
        </div>

        {/* ─────────── Carrusel ─────────── */}
        <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
          {/* Neblina arriba y abajo */}
          <div className="absolute top-0 left-0 w-full h-10 sm:h-14 bg-gradient-to-b from-gray-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-10 sm:h-14 bg-gradient-to-t from-gray-50 to-transparent z-20 pointer-events-none"></div>

          {/* Primera columna */}
          <div
            className="absolute left-0 w-1/2 pr-1 sm:pr-2"
            onMouseEnter={() => setPausedLeft(true)}
            onMouseLeave={() => setPausedLeft(false)}
          >
            <div className={`carousel-up ${pausedLeft ? "pause" : ""}`}>
              <img src="/white-plastic-bags.png" alt="Bolsas plásticas blancas"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
              <img src="/green-plastic-containers.png" alt="Contenedores verdes"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
              <img src="/white-plastic-bags.png" alt="Bolsas plásticas blancas"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
              <img src="/green-plastic-containers.png" alt="Contenedores verdes"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
            </div>
          </div>

          {/* Segunda columna */}
          <div
            className="absolute right-0 w-1/2 pl-1 sm:pl-2"
            onMouseEnter={() => setPausedRight(true)}
            onMouseLeave={() => setPausedRight(false)}
          >
            <div className={`carousel-down ${pausedRight ? "pause" : ""}`}>
              <img src="/brown-plastic-bags.png" alt="Bolsas plásticas marrones"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
              <img src="/blue-plastic-containers.png" alt="Contenedores azules"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
              <img src="/brown-plastic-bags.png" alt="Bolsas plásticas marrones"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
              <img src="/blue-plastic-containers.png" alt="Contenedores azules"
                className="w-full h-20 sm:h-24 md:h-28 lg:h-32 object-cover rounded-lg mb-2 sm:mb-3 shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
