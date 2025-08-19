"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="contactUs">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contáctanos</h2>
        <p className="text-gray-600 mb-12">
          Estamos aquí para ayudarte. Si tienes alguna pregunta personalizada y necesitas más información, puedes
          contactarnos.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Detalles de contacto</h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-900">Teléfono:</p>
                <p className="text-gray-600">+51 959952460</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Email:</p>
                <p className="text-gray-600">contacto@plastigesa.com • ventas@plastigesa.com</p>
              </div>
            </div>
          </div>

          <Card className="p-6 text-left">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombres</label>
                  <Input placeholder="" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <Input placeholder="" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" placeholder="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <Input placeholder="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <Textarea placeholder="" rows={4} />
              </div>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Enviar mensaje</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
