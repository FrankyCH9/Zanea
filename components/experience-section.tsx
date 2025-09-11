"use client"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const cards = [
    { title: "equipo especializado", img: "experiencia/p.jpeg", col: "col-span-2 row-span-2" },
    { title: "control de plagas", img: "/servicios/control/a.jpg", col: "" },
    { title: "desinfección de ambientes", img: "/servicios/desinfeccion/b.jpeg", col: "" },
    { title: "reservorios de agua", img: "/servicios/limpieza/c.jpeg", col: "" },
    { title: "mantenimiento de reservorios", img: "/servicios/mantenimiento/d.jpeg", col: "" },
    { title: "control de animales menores", img: "/servicios/controlav/a.jpeg", col: "" },
    { title: "control aviar", img: "/servicios/controla/a.jpeg", col: "" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden"
    >
      <div
        className={`transform transition-all duration-[2000ms] ease-out
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm tracking-widest uppercase mb-4 block">
              comprometidos
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              nuestra experiencia
            </h2>
          </div>

          {/* Tarjetas */}
          <div
            className="
              grid 
              grid-cols-2       /* mínimo siempre 2 columnas */
              sm:grid-cols-2    
              md:grid-cols-3    
              lg:grid-cols-4    
              xl:grid-cols-5    
              gap-6 
              auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[260px] lg:auto-rows-[300px]
            "
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group ${card.col}
                ring-2 ring-transparent hover:ring-green-500 hover:ring-offset-2`}
              >
                {/* Imagen de fondo */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Contenido encima */}
                <CardContent className="absolute bottom-0 p-6 text-white z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 drop-shadow-lg">
                    {card.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
