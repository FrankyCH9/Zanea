"use client"
import { Button } from "@/components/ui/button"
import { Play, Users, Zap, Award } from "lucide-react"

export default function StatisticsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div className="text-center mb-16">
          <div className="relative max-w-4xl mx-auto">
            <img src="/plastigesa-mixtura-fair.png" alt="Plastigesa en Feria Mixtura" className="rounded-lg w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100">
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🔥 PLASTIGESA en la Feria Mixtura Yanahuara 2025</h3>
            <p className="text-gray-600">
              En ARTOFAR tuvo el honor de participar en la Feria Gastronómica Mixtura Yanahuara 2025, uno de los eventos
              más importantes y esperados del año en nuestra querida ciudad de Arequipa.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <span className="text-green-600 font-medium block text-center">NÚMEROS</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Números que hablan por nosotros</h2>
        <p className="text-gray-600 mb-12 text-center">
          Más de dos décadas de experiencia nos respaldan como líderes en la industria.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Zap className="w-12 h-12 text-gray-900 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">856+</div>
            <p className="text-gray-600">Amplio catálogo de soluciones para cada necesidad</p>
          </div>
          <div>
            <Users className="w-12 h-12 text-gray-900 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">2,853+</div>
            <p className="text-gray-600">Clientes que confían y nos recomiendan diariamente</p>
          </div>
          <div>
            <Award className="w-12 h-12 text-gray-900 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">14+</div>
            <p className="text-gray-600">Años transformando una importante sólida que respalda nuestra calidad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
