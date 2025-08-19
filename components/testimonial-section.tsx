"use client"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
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
        <div className="relative">
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
