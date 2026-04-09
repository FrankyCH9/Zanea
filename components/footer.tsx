'use client';

import Image from 'next/image';
import { Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Fondo */}
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.jpg" // 🔥 tu imagen
          alt="footer background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0F14]/90" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* 🔹 IZQUIERDA - LOGO */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Image
                src="experiencia/logo.jpeg"
                alt="logo"
                width={60}
                height={60}
              />
              <div>
                <h2 className="text-xl font-semibold leading-tight">
                  Gestión & <br /> Control Ambiental
                </h2>
                <p className="text-xs text-gray-400 tracking-widest">
                  SOLUCIONES A LAS PLAGAS
                </p>
              </div>
            </div>
          </div>

          {/* 🔹 CENTRO - LINKS */}
          <div className="text-center md:text-left space-y-3 text-sm">
            <p className="uppercase tracking-wider text-white font-semibold">
              ACERCA DE NOSOTROS
            </p>
            <p className="hover:text-gray-300 cursor-pointer">
              NUESTROS SERVICIOS
            </p>
            <p className="hover:text-gray-300 cursor-pointer">
              SOLUCIONES PARA DIFERENTES SECTORES
            </p>
            <p className="text-gray-500">
              TRABAJA CON NOSOTROS
            </p>
            <p className="text-gray-500">
              LIBRO DE RECLAMACIONES
            </p>
            <p className="hover:text-gray-300 cursor-pointer">
              CONTÁCTANOS
            </p>
          </div>

          {/* 🔹 DERECHA - CONTACTO */}
          <div className="text-center md:text-left space-y-4 text-sm">
            <h3 className="uppercase font-semibold tracking-wider">
              INFORMACIÓN DE CONTACTO
            </h3>

            <div>
              <p className="font-semibold text-white">ESTAMOS EN:</p>
              <p className="text-gray-400 leading-relaxed">
                LIMA – TRUJILLO – CHICLAYO – PIURA – AREQUIPA – <br />
                CUZCO – IQUITOS
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">EMAIL:</p>
              <p className="text-gray-400">
                informes@controlambiental.pe
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">TELÉFONO:</p>
              <p className="text-gray-400">
                947 454 525
              </p>
            </div>

            {/* 🔹 ICONOS */}
            <div className="flex justify-center md:justify-start gap-3 pt-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <Youtube size={16} />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <Linkedin size={16} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}