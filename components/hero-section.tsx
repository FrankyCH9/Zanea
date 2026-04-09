'use client';

import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'INSPECCIÓN SANITARIA',
    description:
      'Ofrecemos inspección sanitaria continua con equipos especializados, como cámaras de profundidad, linternas UV y lentes de inspección. Además, nuestros colaboradores están capacitados para detectar plagas y realizamos estudios conforme a la Norma BRCSG.',
    mainImage:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1600&h=900&fit=crop',
  },
  {
    id: 2,
    title: 'CONTROL DE PLAGAS',
    description: 'Soluciones efectivas para el control de plagas con equipos especializados y métodos seguros.',
    mainImage:
      'https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=1600&h=900&fit=crop',
  },
  {
    id: 3,
    title: 'CONTROL AVIAR',
    description: 'Control biológico autorizado para aves consideradas plagas.',
    mainImage:
      'https://images.unsplash.com/photo-1554146297-4b58f8104c16?w=1600&h=900&fit=crop',
  },
  {
    id: 4,
    title: 'LIMPIEZA',
    description: 'Servicios profesionales de limpieza especializada.',
    mainImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop',
  },
  {
    id: 5,
    title: 'CAPACITACIONES',
    description: 'Programas de capacitación profesional para su equipo.',
    mainImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
  },
];

export default function HeroSection() {
  // Estado para controlar qué item está seleccionado
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Item actual que se muestra
  const currentItem = galleryItems[selectedIndex];

  return (
    <section className="relative w-full h-screen md:h-[500px] lg:h-[700px] overflow-hidden bg-gray-700">
      
      {/* IMAGEN DE FONDO */}
      <div className="absolute inset-0">
        <img
          src={currentItem.mainImage}
          alt={currentItem.title}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />

        {/* Capa oscura para mejorar la visibilidad del texto */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* PANEL ROJO IZQUIERDO SUPERIOR (ángulo diagonal) */}
      <div 
        className="absolute inset-0 bg-red-700"
        style={{
          clipPath: 'polygon(0% 0%, 50% 0%, 35% 100%, 0% 100%)',
        }}
      />

      {/* PANEL ROJO IZQUIERDO INFERIOR (crea efecto tipo Z) */}
      <div 
        className="absolute inset-0 bg-red-700"
        style={{
          clipPath: 'polygon(0% 0%, 35% 0%, 50% 100%, 0% 100%)',
        }}
      />

      {/* PANEL ROJO DERECHO SUPERIOR */}
      <div 
        className="absolute inset-0 bg-red-700"
        style={{
          clipPath: 'polygon(75% 0%, 100% 0%, 100% 100%, 80% 100%)',
        }}
      />

      {/* PANEL ROJO DERECHO INFERIOR (completa el efecto Z en la imagen) */}
      <div 
        className="absolute inset-0 bg-red-700"
        style={{
          clipPath: 'polygon(75% 0%, 100% 0%, 100% 100%, 80% 100%)',
        }}
      />

     {/* CONTENIDO DE TEXTO */}
<div className="relative z-10 h-full flex flex-col justify-center pl-[10%] md:pl-[12%] lg:pl-[15%] max-w-xl">
  
  {/* TÍTULO */}
  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
    {currentItem.title}
  </h1>
  
  {/* LÍNEA DECORATIVA */}
  <div className="w-12 h-1 bg-gray-300 mb-6" />
  
  {/* DESCRIPCIÓN */}
  <p className="text-white text-sm md:text-base leading-relaxed max-w-md">
    {currentItem.description}
  </p>
</div>

      {/* MENÚ DE NAVEGACIÓN INFERIOR */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex flex-wrap justify-start lg:justify-center px-4 md:px-6 lg:px-8 py-4 gap-2 md:gap-3">
          
        {galleryItems.map((item, index) => (
  <button
    key={item.id}
    onClick={() => setSelectedIndex(index)}
    className={`
      px-6 py-4 text-sm font-semibold uppercase tracking-wide
      backdrop-blur-md transition-all duration-300
      ${
        selectedIndex === index
          ? 'bg-gray-200 text-black'
          : 'bg-white/20 text-white hover:bg-white/40'
      }
    `}
  >
    <span className="flex items-center gap-2">
      {item.title}
      <span>›</span>
    </span>
  </button>
))}
        </div>
      </div>

    </section>
  );
}