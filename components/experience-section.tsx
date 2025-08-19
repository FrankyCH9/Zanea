"use client"
import { Card, CardContent } from "@/components/ui/card"

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm tracking-widest uppercase mb-4 block">COMPROMETIDOS</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Nuestra experiencia</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Desde el diseño hasta la entrega, cada paso está optimizado para la excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 h-[650px]">
          <Card className="md:col-span-2 md:row-span-2 overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group border-0 hover:border-2 hover:border-green-500">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="/professional-woman-green-scarf.png"
                alt="Equipo especializado"
                className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-black/80 group-hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                  Equipo
                </span>
              </div>
              <CardContent className="p-8 h-1/3 flex flex-col justify-center bg-white group-hover:bg-green-50 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-800 mb-3 transition-colors duration-300">
                  Equipo especializado
                </h3>
                <p className="text-gray-600 group-hover:text-green-700 text-lg transition-colors duration-300">
                  Profesionales con más de 20 años de experiencia.
                </p>
              </CardContent>
            </div>
          </Card>

          <Card className="md:col-span-1 overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group border-0 hover:border-2 hover:border-green-500">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="/factory-worker-safety-gear.png"
                alt="Producción"
                className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-black/80 group-hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300">
                  Producción
                </span>
              </div>
              <CardContent className="p-5 h-1/3 flex flex-col justify-center bg-white group-hover:bg-green-50 transition-colors duration-300">
                <h3 className="font-bold text-gray-900 group-hover:text-green-800 mb-2 text-lg transition-colors duration-300">
                  Producción
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-green-700 transition-colors duration-300">
                  Tecnología que garantiza calidad en la elaboración.
                </p>
              </CardContent>
            </div>
          </Card>

          <Card className="md:col-span-1 overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group border-0 hover:border-2 hover:border-green-500">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="/smiling-factory-worker.png"
                alt="Diseño personalizado"
                className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-black/80 group-hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300">
                  Diseño
                </span>
              </div>
              <CardContent className="p-5 h-1/3 flex flex-col justify-center bg-white group-hover:bg-green-50 transition-colors duration-300">
                <h3 className="font-bold text-gray-900 group-hover:text-green-800 mb-2 text-lg transition-colors duration-300">
                  Diseño personalizado
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-green-700 transition-colors duration-300">
                  Soluciones únicas para cada cliente.
                </p>
              </CardContent>
            </div>
          </Card>

          <Card className="md:col-span-1 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group border-0 hover:border-2 hover:border-green-400">
            <CardContent className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/0 group-hover:from-green-600/20 group-hover:to-green-600/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="bg-white/20 group-hover:bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300">
                    Logística
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  Entregas
                </h3>
                <p className="text-gray-300 group-hover:text-white text-sm leading-relaxed transition-colors duration-300">
                  Coordinación para hacer llegar su pedido a tiempo.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-1 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group border-0 hover:border-2 hover:border-green-400">
            <CardContent className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/0 group-hover:from-green-600/20 group-hover:to-green-600/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="bg-white/20 group-hover:bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300">
                    Acreditaciones
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  Certificaciones
                </h3>
                <p className="text-gray-300 group-hover:text-white text-sm leading-relaxed transition-colors duration-300">
                  Certificados bajo la norma ISO 9001
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group border-0 hover:border-2 hover:border-green-500">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src="/quality-control-worker.png"
                alt="Control de calidad"
                className="w-full h-2/3 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-black/80 group-hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                  Calidad
                </span>
              </div>
              <CardContent className="p-8 h-1/3 flex flex-col justify-center bg-white group-hover:bg-green-50 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-800 mb-3 transition-colors duration-300">
                  Control de calidad
                </h3>
                <p className="text-gray-600 group-hover:text-green-700 text-lg transition-colors duration-300">
                  Personal capacitado para el uso de buenas prácticas en fabricación.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
