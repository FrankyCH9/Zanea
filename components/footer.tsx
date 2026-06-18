"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

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
        <div className="absolute inset-0 bg-[#111827]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* 🔹 IZQUIERDA - LOGO */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <Image
                src="experiencia/1.png"
                alt="logo"
                width={220}
                height={220}
              />
              <div>
                {/* <h2 className="text-xl font-semibold leading-tight">
                  SANEA<br /> GROUP
                </h2>
                <p className="text-xs text-gray-400 tracking-widest">
                </p>
                  */}
              </div>
            </div>
          </div>
          {/* 🔹 CENTRO - LINKS */}
          <div className="text-center md:text-left space-y-3 text-sm">
            <p className="uppercase tracking-wider text-white font-semibold">
              ACERCA DE NOSOTROS
            </p>

            <Link href="/" className="block hover:text-gray-300 transition">
              INICIO
            </Link>

            <Link
              href="#nosotros"
              className="block hover:text-gray-300 transition"
            >
              NOSOTROS
            </Link>

            <Link
              href="/servicios"
              className="block hover:text-gray-300 transition"
            >
              SERVICIOS
            </Link>

            <Link
              href="/biblioteca"
              className="block hover:text-gray-300 transition"
            >
              BIBLIOTECA Y EQUIPOS
            </Link>

            <Link
              href="/contacto"
              className="block hover:text-gray-300 transition"
            >
              CONTÁCTANOS
            </Link>
          </div>

          {/* 🔹 DERECHA - CONTACTO */}
          <div className="text-center md:text-left space-y-4 text-sm">
            <h3 className="uppercase font-semibold tracking-wider">
              INFORMACIÓN DE CONTACTO
            </h3>

            <div>
              <p className="font-semibold text-white">ESTAMOS EN:</p>
              <p className="text-gray-400 leading-relaxed">
                CENTRO Y SUR DEL PAÍS
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">EMAIL:</p>
              <p className="text-gray-400">comercial@saneagroupperu.com</p>
            </div>

            <div>
              <p className="font-semibold text-white">TELÉFONO:</p>
              <p className="text-gray-400">998 998 318</p>
            </div>

            {/* 🔹 ICONOS */}
            <div className="flex justify-center md:justify-start gap-3 pt-2">
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Facebook size={16} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/sanea_group/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Instagram size={16} />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
