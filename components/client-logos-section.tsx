"use client"
import { useEffect, useRef, useState } from "react"

const logos = [
  "marcas/1.png",
  "marcas/2.png",
  "marcas/3.png",
  "marcas/4.png",
  "marcas/5.png",
  "marcas/6.png",
  "marcas/7.jpeg",
  "marcas/8.png",
  "marcas/9.png",
  "marcas/10.png",
  "marcas/11.png",
  "marcas/12.png",
  "marcas/13.png",
  "marcas/14.png",
  "marcas/15.png",
  "marcas/16.png",
  "marcas/17.png",
  "marcas/18.png",
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
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        /* Pausar animación al hacer hover */
        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`py-20 px-4 bg-white overflow-hidden transition-all duration-1000 ${
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
            <div className="flex scroll-left gap-16 items-center min-w-max">
              {logos.concat(logos).map((logo, i) => (
                <div
                  key={`row1-${i}`}
                  className="w-32 h-20 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Cliente ${i + 1}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fila 2 (derecha) */}
          <div className="relative flex overflow-hidden">
            <div className="flex scroll-right gap-16 items-center min-w-max">
              {logos.concat(logos).map((logo, i) => (
                <div
                  key={`row2-${i}`}
                  className="w-32 h-20 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Cliente ${i + 1}`}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
