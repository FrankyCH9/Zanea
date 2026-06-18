'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'CONTROL AVIAR',
    description:
      'La presencia de aves en techos, estructuras y áreas operativas puede ocasionar contaminación, deterioro de infraestructuras y afectar la imagen de su empresa. Brindamos soluciones integrales para el manejo y exclusión de aves, aplicando métodos seguros, éticos y acordes a la normativa peruana. Nuestro servicio está respaldado por SERFOR, asegurando intervenciones eficientes y responsables en todo tipo de instalaciones.',
    mainImage:
      '/inicio/1.png',
  },
  {
    id: 2,
    title: 'CONTROL DE PLAGAS',
    description: 'Utilizamos metodologías y procesos eficientes en la eliminación de todo tipo de plagas rastreras o voladoras a niveles aceptables. Relacionamos los niveles poblacionales de las plagas y efectividad de los controles implementados.',
    mainImage:
      '/inicio/2.png',
  },
  {
    id: 3,
    title: 'DESINFECCION AMBIENTAL',
    description: 'Eliminación eficaz de microorganismos patógenos (bacterias, virus y hongos) en todo tipo de ambientes, mediante sistemas de nebulización en frío que permiten una cobertura uniforme y profunda. Aplicamos agentes químicos especializados que garantizan espacios seguros, higienizados y libres de contaminantes.',
    mainImage:
      '/inicio/3.png',
  },
  {
    id: 4,
    title: 'CONSULTORIA EN SEGURIDAD Y MEDIO AMBIENTE',
    description: 'Impulsamos la gestión segura y sostenible de su empresa mediante asesoría especializada y elaboración de estudios ambientales.',
    mainImage:
      '/inicio/4.png',
  },
  {
    id: 5,
    title: 'MANTENIMIENTO DE RESERVORIOS',
    description: 'Servicio especializado en la conservación y óptimo funcionamiento de reservorios de agua, previniendo fallas operativas y deterioro del sistema.',
    mainImage:
      '/inicio/.png',
  },
  {
    id: 6,
    title: 'LIMPIEZA Y DESINFECCION DE RESERVORIOS',
    description: 'Limpieza profunda de paredes, pisos y la eliminación de toda materia orgánica (bacterias, hongos y sarro) o cuerpo extraño en un tanque, cisterna o reservorio a través de equipos mecánicos y eléctricos.',
    mainImage:
      '/inicio/6.png',
  },
];

export default function HeroSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentItem = galleryItems[selectedIndex];

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSelectedIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full h-[620px] md:h-[850px] overflow-hidden bg-gray-700">

      {/* IMAGEN */}
      <div className="absolute inset-0">
        <img
          src={currentItem.mainImage}
          alt={currentItem.title}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* EFECTO ROJO */}
      <div
        className="absolute inset-0 bg-[#1E293B]/90 hidden md:block"
        style={{
          clipPath: 'polygon(0% 0%, 45% 0%, 32% 100%, 0% 100%)',
        }}
      />

      <div
        className="absolute inset-0 bg-[#1E293B]/90 hidden md:block"
        style={{
          clipPath: 'polygon(0% 0%, 30% 0%, 45% 100%, 0% 100%)',
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-28">

        <div className="max-w-2xl">

          {/* TITULO */}
          <h1 className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold leading-tight mb-5">
  {currentItem.title}
</h1>

          {/* LINEA */}
          <div className="w-14 md:w-20 h-1 bg-white rounded-full mb-5 md:mb-6" />

          {/* DESCRIPCION */}
          <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-xl">
            {currentItem.description}
          </p>
        </div>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex md:hidden items-center justify-between px-5">

        {/* BOTON IZQUIERDO */}
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {/* PUNTOS */}
        <div className="flex items-center gap-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                selectedIndex === index
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* BOTON DERECHO */}
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex absolute bottom-0 left-0 right-0 z-20 justify-center gap-3 px-6 py-4 bg-black/25 backdrop-blur-md">

        {galleryItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className={`
              px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-wide
              transition-all duration-300 border
              ${
                selectedIndex === index
                  ? 'bg-white text-black border-white'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/30'
              }
            `}
          >
            {item.title}
          </button>
        ))}
      </div>
    </section>
  );
}