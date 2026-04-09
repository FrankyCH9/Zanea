import { Users, Shield } from 'lucide-react';
import Image from 'next/image';

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

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
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

        <div className="flex-1 max-w-xl">
          <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-3"></p>

          <h2 className="text-4xl font-black text-gray-900 leading-tight mb-6">
            Misión y Visión
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed text-base">
            <p>
              <span className="font-semibold text-gray-900">Misión:</span> Dar
              soluciones eficientes a nuestros socios, asegurando la calidad y
              satisfacción en la prestación de nuestros servicios.
            </p>

            <p>
              <span className="font-semibold text-gray-900">Visión:</span> Ser
              reconocidos a nivel nacional como una empresa líder en la
              prestación de servicios en ingeniería, saneamiento ambiental y
              gestión en medio ambiente.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-30">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 text-balance">
            NUESTRA EXPERIENCIA
          </h2>
          <p className="text-lg sm:text-xl text-black font-semibold">
            Nuestra manera de hacer las cosas
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Confianza Card */}
          <div className="border-2 border-white/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-white/50 transition-colors">
            <div className="flex justify-center mb-6">
              <div className="bg-black/20 p-4 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black  mb-4">Confianza</h3>
            <p className="text-black/90 leading-relaxed text-sm sm:text-base">
              Nos encargamos de todo para que el área de MIP pueda concentrarse
              en sus tareas, sin preocuparse por la gestión de su proveedor.
            </p>
          </div>

          {/* Eagle Image */}
          <div className="flex justify-center md:scale-110">
            <div className="relative w-full h-80 sm:h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PLAwikBP6ZcPmUQq9ayn2yPhoymJGg.png"
                alt="Águila en vuelo"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Compromiso Card */}
          <div className="border-2 border-white/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-white/50 transition-colors">
            <div className="flex justify-center mb-6">
              <div className="bg-black/20 p-4 rounded-full">
                <Users className="w-8 h-8 text-black " />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Compromiso</h3>
            <p className="text-black/90 leading-relaxed text-sm sm:text-base">
              Nuestros trabajadores se identifican plenamente con cada cliente,
              dedicándose en todo momento a garantizar su satisfacción y
              ofreciendo lo mejor de sí mismos.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className=" mt-30 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Confianza Card */}
          <div className="border-2 border-white/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-white/50 transition-colors">
            <div className="flex justify-center mb-6">
              <div className="bg-black/20 p-4 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black  mb-4">Confianza</h3>
            <p className="text-black/90 leading-relaxed text-sm sm:text-base">
              Nos encargamos de todo para que el área de MIP pueda concentrarse
              en sus tareas, sin preocuparse por la gestión de su proveedor.
            </p>
          </div>

          {/* Eagle Image */}
          <div className="flex justify-center md:scale-110">
            <div className="relative w-full h-80 sm:h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PLAwikBP6ZcPmUQq9ayn2yPhoymJGg.png"
                alt="Águila en vuelo"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Compromiso Card */}
          <div className="border-2 border-white/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-white/50 transition-colors">
            <div className="flex justify-center mb-6">
              <div className="bg-black/20 p-4 rounded-full">
                <Users className="w-8 h-8 text-black " />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Compromiso</h3>
            <p className="text-black/90 leading-relaxed text-sm sm:text-base">
              Nuestros trabajadores se identifican plenamente con cada cliente,
              dedicándose en todo momento a garantizar su satisfacción y
              ofreciendo lo mejor de sí mismos.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
