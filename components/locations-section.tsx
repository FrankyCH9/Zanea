"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

export default function LocationsSection() {
  const direccion = "SANEA GROUP, Arequipa, Perú";

  // Estado de visibilidad
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <span
          className={`text-green-600 font-medium block transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          PRESENCIA
        </span>

        <h2
          className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Nuestros locales
        </h2>

        <p
          className={`text-gray-600 mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Visítanos en cualquiera de nuestras sedes, estamos aquí para poder ayudarte
        </p>

        {/* Dirección */}
        <p
          className={`text-gray-800 font-medium mb-8 flex justify-center items-center gap-2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <MapPin className="w-6 h-6 text-red-600 animate-bounce" />
          {direccion}
        </p>

        {/* Mapa */}
        <div
          className={`rounded-lg h-96 mb-8 relative overflow-hidden shadow-lg transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <iframe
            src="https://www.google.com/maps?q=-16.393245,-71.526236&hl=es&z=17&output=embed"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* Marcador animado */}
          <a
            href="https://www.google.com/maps/place/SANEA+GROUP/@-16.393245,-71.526236,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full"
          >
           
          </a>
        </div>
      </div>
    </section>
  );
}
