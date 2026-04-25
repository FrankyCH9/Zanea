'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import { Phone, Mail, MapPin, Check } from 'lucide-react'

const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const HEX_W = 130;
const HEX_H = 150;

interface HexItem {
  img?: string;
  isCenter?: boolean;
  top: number;
  left: number;
}

/* 🔥 CONTADOR */
function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{count}</span>
}

const hexItems: HexItem[] = [
  {
    top: 0,
    left: 95,
    img: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    top: 0,
    left: 225,
    img: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    top: 115,
    left: 30,
    img: "https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    top: 115,
    left: 160,
    isCenter: true,
  },
  {
    top: 115,
    left: 290,
    img: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    top: 230,
    left: 95,
    img: "https://images.pexels.com/photos/3867349/pexels-photo-3867349.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    top: 230,
    left: 225,
    img: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

export default function ControlAmbiental() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-40 bg-gradient-to-r from-black/50 to-black/50 overflow-hidden">
        <Image
          src="https://www.tecnicontrolfumigaciones.com/wp-content/uploads/2023/05/fumigaciones4-tecnicontrol-banner1920-1.jpg"
          alt="Control Ambiental"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
            CONTROL AMBIENTAL - Empresa de Control de Plagas
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 px-6 lg:px-12 flex flex-col lg:flex-row items-center  mb-7 gap-16">
        <div
          className="relative flex-shrink-0"
          style={{ width: 420, height: 380 }}
        >
          {hexItems.map((hex, i) => (
            <div
              key={i}
              className="absolute overflow-hidden"
              style={{
                width: HEX_W,
                height: HEX_H,
                top: hex.top,
                left: hex.left,
                clipPath: hexClip,
                background: hex.isCenter ? "#1a1a2e" : undefined,
              }}
            >
              {hex.img && (
                <img
                  src={hex.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
              {hex.isCenter && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                  <span
                    className="font-black text-white leading-none"
                    style={{ fontSize: 48 }}
                  >
                    +32
                  </span>
                  <span
                    className="font-black text-white tracking-widest uppercase"
                    style={{ fontSize: 18 }}
                  >
                    AÑOS
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🔥 SOLO SE CAMBIÓ ESTA PARTE */}
        <div className="flex-1 max-w-xl">
          <p className="text-red-600  mtfont-bold text-sm uppercase tracking-widest mb-3"></p>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="text-center">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={95} />%
              </h3>
              <p className="text-red-600 font-bold text-sm mt-1">
                SATISFACCIÓN CLIENTE
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={11} />+
              </h3>
              <p className="text-red-600 font-bold text-sm mt-1">
                CIUDADES EN PERÚ
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={32} />+
              </h3>
              <p className="text-red-600 font-bold text-sm mt-1">
                AÑOS DE EXPERIENCIA
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={150} />+
              </h3>
              <p className="text-red-600 font-bold text-sm mt-1">
                CLIENTES FIELES
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
        {/* Left Section - Services */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">
            Tienes Plagas? Nosotros tenemos
            <span className="text-red-600"> soluciones.</span>
          </h2>

          <div className="space-y-4 mt-6 text-sm text-gray-700">
            <div>
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <p className="font-semibold">Plagas en: Departamentos, Casa, Empresa, Industria alimentaria, Hoteles, Restaurantes?</p>
              </div>
              <p className="text-xs text-gray-600 ml-6">
                Desinsectaciones, Desratizaciones, Desinfecciones, Control de Olores, Fumigaciones, Control de plagas de palomares
              </p>
              <button className="text-red-600 text-xs font-semibold mt-1 ml-6 hover:underline">
                Ver servicios →
              </button>
            </div>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <p className="font-semibold">Contamos con presencia nacional, por lo tanto, ofrecemos precios competitivos</p>
              </div>
              <p className="text-xs text-gray-600 ml-6">
                Insumos de alta calidad y personal cuidadosamente evaluado.
              </p>
            </div>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <p className="font-semibold">Servicio 365 días del año. Previa coordinación.</p>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <p className="font-semibold">Control de Plagas Biológicos: Seguros para tus hijos y mascotas.</p>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-2 mb-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                <p className="font-semibold">Somos una empresa autorizada por el Ministerio de Salud. ¡Confía en nuestros servicios!</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-semibold mt-4">
              Mas de 32 años de experiencia en el mercado nacional.
            </p>
          </div>

          <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold">
            Ver casos de éxito
          </Button>
        </div>

        {/* Center Section - Contact Form */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-center mb-6">
            ¡Solicita tu cotización ahora y vuelve a<br />vivir en un ambiente sin plagas!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-gray-600 block mb-2">Tu nombre *</label>
              <Input type="text" placeholder="Tu nombre" required className="text-sm" />
            </div>

            <div>
              <label className="text-xs text-gray-600 block mb-2">Tu correo electrónico *</label>
              <Input type="email" placeholder="Tu correo" required className="text-sm" />
            </div>

            <div>
              <label className="text-xs text-gray-600 block mb-2">Teléfono de Contacto *</label>
              <Input type="tel" placeholder="Tu teléfono" required className="text-sm" />
            </div>

            <div>
              <label className="text-xs text-gray-600 block mb-2">Tu mensaje</label>
              <Textarea placeholder="Cuéntanos más sobre tu problema..." rows={4} className="text-sm resize-none" />
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" id="robot" className="w-4 h-4" />
              <label htmlFor="robot">No soy un robot</label>
            </div>

            <p className="text-xs text-gray-500">
              Por favor verifica que no eres un robot antes de enviar
            </p>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
              ENVIAR
            </Button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 mb-4">
            <Image src="/location-icon.jpg" alt="Ubicación" fill className="object-contain" />
          </div>

          <h2 className="text-4xl font-bold text-green-600 text-center mb-8">
            Ubícanos
          </h2>

          <div className="space-y-6 text-center w-full">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <a href="tel:+51963717778" className="text-gray-700 hover:text-green-600">
                (+51) 963 717 778
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <a href="mailto:consultas@controlberesit.com" className="text-gray-700 hover:text-green-600 break-all">
                consultas@controlberesit.com
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <p className="text-sm text-gray-700">
                  Arequipa: Residencial Monterrico II-8 JLB y Rivero
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <p className="text-sm text-gray-700">
                  Comand: Av. Samuel Pastor 1505, Huarangal, Samuel Pastor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}