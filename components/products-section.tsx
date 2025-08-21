"use client"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
  }, [])

  return (
    <>
      {/* Animaciones locales */}
      <style jsx>{`
        /* Animación de aparición sección */
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-animate {
          animation: fade-up 1s ease-out forwards;
        }

        /* Animación de giro al aparecer */
        @keyframes flip-in {
          0% {
            transform: rotateY(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }
        .flip-animate {
          animation: flip-in 0.8s ease-out forwards;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        /* Hover con sombra visible */
        .card-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25) !important;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible ? "fade-animate" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-green-600 font-medium">SOLUCIONES</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestros productos
          </h2>
          <p className="text-gray-600 mb-12">
            Amplio catálogo de productos plásticos diseñados para satisfacer las
            necesidades de tu industria.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                img: "/black-garbage-bags.png",
                title: "Bolsas de basura",
                desc: "Bolsas resistentes para diferentes usos comerciales y residenciales de diferentes tamaños y espesores.",
              },
              {
                img: "/duct-tape-rolls.png",
                title: "Duct tape",
                desc: "Cintas adhesivas de alta resistencia y alta adherencia.",
              },
              {
                img: "/fragile-tape.png",
                title: "Cinta frágil",
                desc: "Adhesivo de advertencia para productos que requieren manejo especial. Frágil.",
              },
              {
                img: "/packing-tape.png",
                title: "Cinta de embalaje",
                desc: "Transparente de alta resistencia para el sellado de cajas y empaques.",
              },
              {
                img: "/crystal-bags.png",
                title: "Bolsas cristal",
                desc: "Bolsas transparentes de alta calidad para presentación de productos.",
              },
              {
                img: "/biodegradable-bags.png",
                title: "Bolsas biodegradables",
                desc: "Bolsas ecológicas diferentes tamaños que se descomponen naturalmente.",
              },
              {
                img: "/red-medical-bags.png",
                title: "Bolsas rojas",
                desc: "Bolsas rojas para desechos hospitalarios y biológicos peligrosos.",
              },
              {
                img: "/stretch-film.png",
                title: "Stretch film",
                desc: "Película plástica elástica para embalaje de paletizado y protección de mercancías.",
              },
            ].map((product, i) => (
              <div
                key={i}
                className={`${isVisible ? "flip-animate" : "opacity-0"}`}
              >
                <Card className="text-center card-hover min-h-[300px] flex flex-col justify-center rounded-2xl bg-white">
                  <CardContent className="p-6 flex flex-col justify-center">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="mx-auto mb-4 h-24 w-24 object-contain"
                    />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600">{product.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

