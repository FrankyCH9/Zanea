"use client"
import { Card, CardContent } from "@/components/ui/card"

export default function ProductsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-green-600 font-medium">SOLUCIONES</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros productos</h2>
        <p className="text-gray-600 mb-12">
          Amplio catálogo de productos plásticos diseñados para satisfacer las necesidades de tu industria.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <img
                src="/black-garbage-bags.png"
                alt="Bolsas de basura"
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Bolsas de basura</h3>
              <p className="text-sm text-gray-600 mb-4">
                Bolsas resistentes para diferentes usos comerciales y residenciales de diferentes tamaños y espesores.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <img src="/duct-tape-rolls.png" alt="Duct tape" className="mx-auto mb-4 h-24 w-24 object-contain" />
              <h3 className="font-semibold text-gray-900 mb-2">Duct tape</h3>
              <p className="text-sm text-gray-600 mb-4">Cintas adhesivas de alta resistencia y alta adherencia.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <img src="/fragile-tape.png" alt="Cinta frágil" className="mx-auto mb-4 h-24 w-24 object-contain" />
              <h3 className="font-semibold text-gray-900 mb-2">Cinta frágil</h3>
              <p className="text-sm text-gray-600 mb-4">
                Adhesivo de advertencia para productos que requieren manejo especial. Frágil.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <img src="/packing-tape.png" alt="Cinta de embalaje" className="mx-auto mb-4 h-24 w-24 object-contain" />
              <h3 className="font-semibold text-gray-900 mb-2">Cinta de embalaje</h3>
              <p className="text-sm text-gray-600 mb-4">
                Transparente de alta resistencia para el sellado de cajas y empaques.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <img src="/crystal-bags.png" alt="Bolsas cristal" className="mx-auto mb-4 h-24 w-24 object-contain" />
              <h3 className="font-semibold text-gray-900 mb-2">Bolsas cristal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Bolsas transparentes de alta calidad para presentación de productos.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <img
                src="/biodegradable-bags.png"
                alt="Bolsas biodegradables"
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Bolsas biodegradables</h3>
              <p className="text-sm text-gray-600 mb-4">
                Bolsas ecológicas diferentes tamaños que se descomponen naturalmente.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <img src="/red-medical-bags.png" alt="Bolsas rojas" className="mx-auto mb-4 h-24 w-24 object-contain" />
              <h3 className="font-semibold text-gray-900 mb-2">Bolsas rojas</h3>
              <p className="text-sm text-gray-600 mb-4">
                Bolsas rojas para desechos hospitalarios y biológicos peligrosos.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <img src="/stretch-film.png" alt="Stretch film" className="mx-auto mb-4 h-24 w-24 object-contain" />
              <h3 className="font-semibold text-gray-900 mb-2">Stretch film</h3>
              <p className="text-sm text-gray-600 mb-4">
                Película plástica elástica para embalaje de paletizado y protección de mercancías.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
