"use client"
import { useEffect, useRef, useState } from "react"

const logos = [
  "/abstract-logo-1.png",
  "/abstract-logo-geometric.png",
  "/abstract-logo-design-3.png",
  "/abstract-logo-4.png",
  "/abstract-logo-5.png",
  "/company-logo-6.png",
]

export default function ClientLogosSection() {
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
      {/* Estilos locales para animaciones */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-slide-left {
          animation: slide-left 25s linear infinite;
        }
        .animate-slide-right {
          animation: slide-right 25s linear infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`py-20 px-4 bg-gray-50 overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-green-600 font-medium tracking-wide uppercase">
            EXPERIENCIA
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Ellos confían en nuestro trabajo
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Empresas líderes en diferentes industrias han elegido Plastigesa como
            su proveedor de confianza.
          </p>

          {/* Fila 1 (izquierda) */}
          <div className="relative flex overflow-hidden mb-10">
            <div className="flex animate-slide-left gap-16 items-center">
              {logos.concat(logos).map((logo, i) => (
                <img
                  key={`row1-${i}`}
                  src={logo}
                  alt={`Cliente ${i + 1}`}
                  className="h-20 w-auto grayscale opacity-70 hover:opacity-100 transition mx-auto"
                />
              ))}
            </div>
          </div>

          {/* Fila 2 (derecha) */}
          <div className="relative flex overflow-hidden">
            <div className="flex animate-slide-right gap-16 items-center">
              {logos.concat(logos).map((logo, i) => (
                <img
                  key={`row2-${i}`}
                  src={logo}
                  alt={`Cliente ${i + 1}`}
                  className="h-20 w-auto grayscale opacity-70 hover:opacity-100 transition mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
