"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-green-600 font-medium">CONSULTAS</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        <p className="text-gray-600 mb-12">
          Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
        </p>

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
    </section>
  )
}
