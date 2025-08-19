"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-green-600 font-medium">BLOG</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimos artículos</h2>
        <p className="text-gray-600 mb-12">
          Descubre los comentarios y actualizaciones de nuestro blog, donde encontrarás a nuestro newsletter
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden text-left">
            <img
              src="/stretch-film-industrial.png"
              alt="Stretch film industrial"
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Beneficios del stretch film para el embalaje industrial
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Descubre cómo el stretch film mejora la eficiencia, seguridad y presentación de tus productos...
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <span>Embalaje</span>
                <span>•</span>
                <span>Logística</span>
                <span>•</span>
                <span>Transporte</span>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Leer más
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden text-left">
            <img src="/eco-friendly-packaging.png" alt="Embalaje ecológico" className="w-full h-48 object-cover" />
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Bolsas para drenaje: Aliadas del agro productor moderno
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Explora cómo las bolsas de drenaje revolucionan la agricultura moderna y mejoran la productividad...
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <span>Agricultura</span>
                <span>•</span>
                <span>Ventas</span>
                <span>•</span>
                <span>Transporte</span>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Leer más
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden text-left">
            <img src="/packaging-tips.png" alt="Tips de embalaje" className="w-full h-48 object-cover" />
            <CardContent className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Cintas de embalaje: Tipos y usos en la industria</h3>
              <p className="text-sm text-gray-600 mb-4">
                Conoce los diferentes tipos de cintas plásticas disponibles para optimizar tu aplicación y...
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <span>Embalaje</span>
                <span>•</span>
                <span>Logística</span>
                <span>•</span>
                <span>Transporte</span>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Leer más
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
