import { Users2, Lightbulb, Award, HeartHandshake, Zap } from "lucide-react";
import Image from "next/image";

import { Users, Shield } from "lucide-react";
const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const HEX_W = 130;
const HEX_H = 150;

interface HexItem {
  img?: string;
  isCenter?: boolean;
  top: number;
  left: number;
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

export default function StatisticsSection() {
  return (
    <section className="py-20  ">
      {/* <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16"> */}
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
          <p className="text-white font-bold text-sm uppercase tracking-widest mb-3"></p>

          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            Misión y Visión
          </h2>

          <div className="space-y-4 text-white leading-relaxed text-base">
            <p>
              <span className="font-semibold text-white">Misión:</span> Dar
              soluciones eficientes a nuestros socios, asegurando la calidad y
              satisfacción en la prestación de nuestros servicios.
            </p>

            <p>
              <span className="font-semibold text-white">Visión:</span> Ser
              reconocidos a nivel nacional como una empresa líder en la
              prestación de servicios en ingeniería, saneamiento ambiental y
              gestión en medio ambiente.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Talento Humano",
            description:
              "Contamos con personal altamente capacitado y comprometido, preparado para brindar soluciones eficaces y un servicio de excelencia.",
          },
          {
            title: "Innovación y Mejora Continua",
            description:
              "Implementamos nuevas tecnologías y optimizamos constantemente nuestros procesos para ofrecer soluciones cada vez más eficientes.",
          },
          {
            title: "Calidad del Servicio",
            description:
              "Garantizamos altos estándares de calidad en cada intervención, buscando siempre superar las expectativas de nuestros clientes.",
          },
          {
            title: "Compromiso",
            description:
              "Actuamos con responsabilidad y dedicación, cumpliendo nuestros compromisos y generando valor en cada servicio realizado.",
          },
          {
            title: "Confianza",
            description:
              "Construimos relaciones sólidas con nuestros clientes basadas en la transparencia, honestidad y resultados comprobados.",
          },
          {
            title: "Trabajo en Equipo",
            description:
              "Fomentamos la colaboración y el respeto mutuo para alcanzar objetivos comunes y brindar el mejor servicio posible.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Barra superior */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6CB519] to-[#0F4C81]" />

            {/* Número decorativo */}
            <span className="absolute top-4 right-6 text-5xl font-black text-gray-100">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Título */}
            <h3 className="text-2xl font-bold text-[#0F4C81] mb-4 relative z-10">
              {item.title}
            </h3>

            {/* Línea decorativa */}
            <div className="w-16 h-1 bg-[#6CB519] rounded-full mb-5"></div>

            {/* Texto */}
            <p className="text-gray-600 leading-relaxed relative z-10">
              {item.description}
            </p>

            {/* Efecto hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6CB519]/5 to-[#0F4C81]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
