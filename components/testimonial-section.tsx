"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true) // 👉 aparece
          } else {
            setIsVisible(false) // 👉 desaparece
          }
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
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100">
              <Play className="w-6 h-6 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
