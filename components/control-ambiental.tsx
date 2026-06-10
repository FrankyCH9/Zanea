"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Phone, Mail, MapPin, Check } from "lucide-react";

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}

const hexItems: HexItem[] = [
  {
    top: 0,
    left: 95,
    img: "/exagono/1.png",
  },
  {
    top: 0,
    left: 225,
    img: "/exagono/2.png",
  },
  {
    top: 115,
    left: 30,
    img: "/exagono/3.png",
  },
  {
    top: 115,
    left: 160,
    isCenter: true,
  },
  {
    top: 115,
    left: 290,
    img: "/exagono/4.png",
  },
  {
    top: 230,
    left: 95,
    img: "/exagono/5.png",
  },
  {
    top: 230,
    left: 225,
    img: "/exagono/6.png",
  },
];

export default function ControlAmbiental() {
  /* 🔥 ENVÍO A WHATSAPP */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const nombre = formData.get("nombre");
    const correo = formData.get("correo");
    const telefono = formData.get("telefono");
    const mensaje = formData.get("mensaje");

    const texto = `
📌 NUEVA COTIZACIÓN

👤 Nombre: ${nombre}
📧 Correo: ${correo}
📱 Teléfono: ${telefono}

📝 Mensaje:
${mensaje}
    `;

    const numeroWhatsApp = "51998998318";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      {/* Hero Section */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src="/contacto/1.jpeg"
          alt="Control Ambiental"
          fill
          className="object-cover object-[center_30%]"
          priority
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-black text-center leading-tight">
            <br />
            <span className="text-[#6CB519]"></span>
          </h1>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="max-w-6xl mx-auto mt-12 px-6 lg:px-12 flex flex-col lg:flex-row items-center mb-16 gap-20">
        <div
          className="relative flex-shrink-0 scale-90 md:scale-100"
          style={{ width: 420, height: 380 }}
        >
          {hexItems.map((hex, i) => (
            <div
              key={i}
              className="absolute overflow-hidden shadow-xl"
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
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              )}

              {hex.isCenter && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#111827]">
                  <span
                    className="font-black text-white leading-none"
                    style={{ fontSize: 48 }}
                  >
                    +7
                  </span>

                  <span
                    className="font-black text-[#6CB519] tracking-widest uppercase"
                    style={{ fontSize: 18 }}
                  >
                    AÑOS
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex-1 max-w-xl">
          <div className="grid grid-cols-2 gap-8 mt-4">
            <div className="text-center bg-gray-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={95} />%
              </h3>

              <p className="text-[#6CB519] font-bold text-sm mt-2">
                SATISFACCIÓN CLIENTE
              </p>
            </div>

            <div className="text-center bg-gray-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={11} />+
              </h3>

              <p className="text-[#6CB519] font-bold text-sm mt-2">
                CIUDADES EN PERÚ
              </p>
            </div>

            <div className="text-center bg-gray-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={32} />+
              </h3>

              <p className="text-[#6CB519] font-bold text-sm mt-2">
                AÑOS DE EXPERIENCIA
              </p>
            </div>

            <div className="text-center bg-gray-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-black text-gray-900">
                <Counter end={150} />+
              </h3>

              <p className="text-[#6CB519] font-bold text-sm mt-2">
                CLIENTES FIELES
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
        {/* Servicios */}
        <div className="bg-gray-100 p-14 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-black mb-4 leading-tight">
            ¿Tienes Plagas? <br />
            <span className="text-[#6CB519]">Nosotros tenemos soluciones.</span>
          </h2>

          <div className="space-y-5 mt-8 text-sm text-gray-700">
            {[
              "Plagas en: Departamentos, Casa, Empresa, Industria alimentaria, Hoteles, Restaurantes.",
              "Contamos con presencia nacional y ofrecemos precios competitivos.",
              "Servicio 365 días del año previa coordinación.",
              "Control de Plagas Biológicos seguros para hijos y mascotas.",
              "Empresa autorizada por el Ministerio de Salud.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#6CB519] mt-1 flex-shrink-0" />

                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* <Button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl">
            Ver casos de éxito
          </Button> */}
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-black text-center mb-6 leading-tight">
            Solicita tu cotización y vive en un ambiente sin plagas
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Tu nombre
              </label>

              <Input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre"
                required
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Tu correo electrónico
              </label>

              <Input
                type="email"
                name="correo"
                placeholder="Ingresa tu correo"
                required
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Teléfono de contacto
              </label>

              <Input
                type="tel"
                name="telefono"
                placeholder="Ingresa tu teléfono"
                required
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">
                Tu mensaje
              </label>

              <Textarea
                name="mensaje"
                placeholder="Cuéntanos más sobre tu problema..."
                rows={5}
                className="rounded-xl resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-6 rounded-xl text-lg"
            >
              ENVIAR POR WHATSAPP
            </Button>
          </form>
        </div>

        {/* Ubicación */}
        <div className="flex flex-col">
          <div className="relative w-full h-72 rounded-3xl overflow-hidden shadow-xl mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.543905645!2d-71.5267178!3d-16.3932935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a953bd0456f7d%3A0x5c3be5b1aa6886ae!2sSANEA%20GROUP!5e0!3m2!1ses-419!2spe!4v1780000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <h2 className="text-4xl font-black text-[#6CB519] text-center mb-8">
            Ubícanos
          </h2>

          <div className="bg-gray-100 rounded-3xl p-8 shadow-lg space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#6CB519]" />

              <a
                href="tel:+51963717778"
                className="text-gray-700 hover:text-[#6CB519] font-semibold"
              >
                (+51) 998 998 318
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#6CB519]" />

              <a
                href="mailto:consultas@controlberesit.com"
                className="text-gray-700 hover:text-[#6CB519] break-all font-semibold"
              >
                comercial@saneagroupperu.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#6CB519] mt-1" />

              <p className="text-gray-700 font-medium">Arequipa: Miraflores</p>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#6CB519] mt-1" />

              <p className="text-gray-700 font-medium">
                Saens Peña 302 - Miralfores - Arequipa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
