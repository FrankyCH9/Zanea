"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false) // ❗ se oculta y vuelve a animar cuando reaparece
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header con efecto de caída desde arriba */}
        <span
          className={`block text-green-600 font-medium transform transition-all duration-1000 ease-out
            ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
        >
          CONSULTAS
        </span>

        <h2
          className={`text-3xl font-bold text-gray-900 mb-4 transform transition-all duration-1000 ease-out delay-200
            ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
        >
          Preguntas frecuentes
        </h2>

        <p
          className={`text-gray-600 mb-12 transform transition-all duration-1000 ease-out delay-300
            ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
        >
          Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
        </p>

        {/* Acordeón entrando desde abajo */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-500
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Accordion type="single" collapsible className="text-left">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Qué tipos de productos plásticos ofrecen?</AccordionTrigger>
              <AccordionContent>
                Ofrecemos una amplia gama de productos plásticos como bolsas para todo tipo de industrias, desde film,
                cintas según las necesidades específicas de cada cliente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Manejan pedidos al por mayor?</AccordionTrigger>
              <AccordionContent>
                Sí, manejamos pedidos al por mayor con precios especiales y condiciones preferenciales para nuestros
                clientes corporativos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Ofrecen asesoría?</AccordionTrigger>
              <AccordionContent>
                Contamos con un equipo de especialistas que brindan asesoría personalizada para ayudarte a elegir los
                productos más adecuados para tu negocio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>¿Realizan productos personalizados?</AccordionTrigger>
              <AccordionContent>
                Sí, ofrecemos servicios de personalización para adaptar nuestros productos a las necesidades específicas
                de tu marca o empresa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
