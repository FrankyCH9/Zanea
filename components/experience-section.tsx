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
              COMPROMETIDOS
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nuestra experiencia
            </h2>
            
          </div>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 h-[650px]">
            {[
              {
                title: "Equipo especializado",
                desc: "Más de 20 años de experiencia en el rubro.",
                img: "public/inicio/equipo.jpeg",
                col: "md:col-span-2 md:row-span-2",
              },
              {
                title: "Control de plagas",
                desc: "Métodos seguros y eficaces contra plagas rastreras y voladoras.",
                img: "public/nuestros servicios/control de plagas/2.jpg",
                col: "md:col-span-1",
              },
              {
                title: "Desinfección de ambientes",
                desc: "Eliminación de bacterias, virus y hongos en todo tipo de espacios.",
                img: "public/nuestros servicios/desinfeccion de ambientes/3.jpeg",
                col: "md:col-span-1",
              },
              {
                title: "Reservorios de agua",
                desc: "Limpieza profunda y desinfección de cisternas y tanques.",
                img: "public/nuestros servicios/LIMPIEZA Y DESINFECCION DE RESERVORIOS DE AGUA/2.jpeg",
                col: "md:col-span-1",
              },
              {
                title: "Mantenimiento de reservorios",
                desc: "Corrección de fallas y conservación de estructuras de agua.",
                img: "public/nuestros servicios/MANTENIMIENTO DE RESERVORIOS DE AGUA/1.jpeg",
                col: "md:col-span-1",
              },
              {
                title: "Control de animales menores",
                desc: "Reubicación segura de animales abandonados.",
                img: "public/nuestros servicios/CONTROL DE PLAGAS/3.jpeg",
                col: "md:col-span-1",
              },
              {
                title: "Control aviar",
                desc: "Prevención de parásitos y enfermedades transmitidas por aves.",
                img: "/nuestros servicios/control aviar/1.jpeg",
                col: "md:col-span-1",
              },
            ].map((card, index) => (
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
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
