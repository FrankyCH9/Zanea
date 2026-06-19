"use client";

import { useState, useRef } from "react";
import { Shield, Bug, Droplets, Bird, Zap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";



interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string; // 👈 NUEVO CAMPO
  description: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
}

const services: ServiceCategory[] = [
  {
    id: "desinsectacion",
    title: "Desinsectación",
    icon: <Bug className="w-6 h-6" />,
    image: "/servi/1.png",
    description:
      "Técnicas especializadas para controlar y eliminar insectos y arácnidos",
    sections: [
      {
        title: "¿QUÉ ES LA DESINSECTACIÓN? (FUMIGACIÓN)",
        content:
          "La desinsectación comprende el conjunto de técnicas aplicadas para controlar o eliminar insectos y arácnidos (artrópodos) que pueden afectar la salud, los alimentos y las instalaciones. Muchas de estas especies son vectores de enfermedades, provocan alergias, generan cuadros tóxicos o deterioran materias primas, por lo que es fundamental implementar un adecuado programa de control de plagas.",
      },
      {
        title: "IMPORTANCIA DEL CONTROL PREVENTIVO",
        content:
          "La presencia inicial de insectos o arácnidos debe considerarse una señal de alerta. Actuar a tiempo permite evitar su proliferación y prevenir riesgos sanitarios, económicos y operativos.",
      },
      {
        title: "CRITERIOS PARA LA APLICACIÓN DEL SERVICIO",
        content: [
          "Dimensión y características del área",
          "Nivel de accesibilidad",
          "Tipo de plaga y su comportamiento biológico",
          "Condiciones estructurales del ambiente",
          "Presencia de personas, niños o animales",
        ],
      },
      {
        title: "MÉTODOS DE DESINSECTACIÓN",
        content: [
          "Pulverización manual",
          "Espolvoreo",
          "Atomización a motor",
          "Nebulización en caliente (termonebulización)",
          "Nebulización en frío (ULV)",
          "Aplicación de geles insecticidas",
        ],
      },
    ],
  },
  {
    id: "desinfeccion",
    title: "Desinfección",
    icon: <Shield className="w-6 h-6" />,
    image: "/servi/2.png",
    description: "Eliminación e inactivación de microorganismos patógenos",
    sections: [
      {
        title: "DESINFECCIÓN DE AMBIENTES",
        content:
          "Brindamos el servicio de desinfección orientado a la eliminación e inactivación de microorganismos patógenos como virus, bacterias, hongos y esporas, responsables de diversas enfermedades. Trabajamos bajo estrictos lineamientos del Ministerio de Salud (MINSA), así como de organismos internacionales como la OPS, OMS y US EPA, garantizando procesos seguros y efectivos.",
      },
      {
        title: "RESPALDO Y TECNOLOGÍA",
        content:
          "Utilizamos equipos modernos y sistemas de aplicación avanzados, junto con biocidas de alta calidad (químicos y/o naturales), asegurando una cobertura eficiente y resultados confiables en cada intervención.",
      },
      {
        title: "ÁREAS DE ATENCIÓN",
        content: [
          "Viviendas y edificios",
          "Oficinas e industrias",
          "Comercios, supermercados y mercados",
          "Unidades de transporte",
        ],
      },
      {
        title: "MICROORGANISMOS CONTROLADOS",
        content:
          "Nuestros procesos permiten controlar una amplia gama de microorganismos, incluyendo Escherichia coli, Salmonella, Staphylococcus aureus, Listeria monocytogenes, Candida albicans, Aspergillus, virus respiratorios y otros patógenos relevantes.",
      },
      {
        title: "RECOMENDACIONES BÁSICAS",
        content: [
          "Lejía (hipoclorito): alta eficacia, reduce su acción en presencia de materia orgánica",
          "Peróxido de hidrógeno: amplio espectro, ideal en superficies limpias",
          "Alcohol (60%–80%): efectivo contra virus al actuar sobre su estructura",
        ],
      },
    ],
  },
  {
    id: "desratizacion",
    title: "Desratización",
    icon: <Bug className="w-6 h-6" />,
    image: "/servi/3.png",
    description: "Control integral de ratas y ratones en ambientes urbanos",
    sections: [
      {
        title: "DESRATIZACIÓN (CONTROL DE ROEDORES)",
        content:
          "Servicio orientado al control de ratas y ratones en ambientes urbanos, cuya presencia representa un riesgo sanitario por su rápida reproducción y capacidad de contaminación. Aplicamos estrategias integrales para reducir y controlar poblaciones de roedores, protegiendo la salud y las instalaciones.",
      },
      {
        title: "TIPOS DE INTERVENCIÓN",
        content: [
          "Control preventivo (pasivo): Acciones enfocadas en evitar el ingreso, refugio y proliferación",
          "Control correctivo (activo): Aplicación de métodos físicos, químicos y biológicos para la reducción directa",
        ],
      },
      {
        title: "ENFOQUE TÉCNICO",
        content:
          "Cada intervención se diseña en función de las características del área, combinando diferentes métodos para lograr resultados efectivos y sostenibles.",
      },
      {
        title: "RECOMENDACIÓN POST SERVICIO",
        content:
          "Se sugiere complementar con servicios de desinsectación y desinfección, a fin de controlar posibles parásitos y microorganismos asociados a los roedores.",
      },
    ],
  },
  {
    id: "reservorios",
    title: "Limpieza de Reservorios",
    icon: <Droplets className="w-6 h-6" />,
    image: "/servi/4.png",
    description:
      "Garantizamos condiciones adecuadas para el almacenamiento de agua",
    sections: [
      {
        title: "SERVICIO DE LIMPIEZA DE RESERVORIOS DE AGUA",
        content:
          "Garantizamos condiciones adecuadas para el almacenamiento de agua mediante la reducción de contaminantes y el control de agentes que afectan su calidad, contribuyendo a sistemas seguros y confiables.",
      },
      {
        title: "IMPORTANCIA DEL SERVICIO",
        content:
          "La intervención periódica permite mantener los reservorios en óptimas condiciones, evitando la acumulación de residuos. De acuerdo con la normativa peruana, este servicio debe realizarse de manera obligatoria cada seis (6) meses en establecimientos comerciales, industriales y viviendas multifamiliares.",
      },
      {
        title: "RESPALDO TÉCNICO",
        content: [
          "Personal certificado para trabajos en espacios confinados y altura",
          "Monitoreo continuo mediante equipos de medición de gases",
          "Procedimientos seguros durante toda la intervención",
        ],
      },
      {
        title: "BENEFICIOS DEL SERVICIO",
        content: [
          "Mejora en las condiciones del sistema de almacenamiento",
          "Reducción de riesgos sanitarios",
          "Cumplimiento de la normativa vigente",
          "Emisión de certificado sanitario autorizado",
        ],
      },
    ],
  },
  {
    id: "control-aviar",
    title: "Control Aviar",
    icon: <Bird className="w-6 h-6" />,
    image: "/servi/5.png",
    description: "Manejo especializado de aves plaga como palomas y gaviotas",
    sections: [
      {
        title: "CONTROL AVIAR",
        content:
          "Servicio especializado para el manejo y control de aves plaga como palomas, gaviotas y gorriones, que afectan la salud, la infraestructura y la productividad de sus instalaciones. Trabajamos con un enfoque técnico y responsable, garantizando soluciones eficientes y sostenibles.",
      },
      {
        title: "METODOLOGÍA DE INTERVENCIÓN",
        content: [
          "Métodos de exclusión y manejo del entorno",
          "Control mediante carabina, ejecutado bajo protocolos de seguridad",
          "Autorización de SERFOR, cumpliendo la normativa vigente",
        ],
      },
      {
        title: "IMPACTO DE LAS AVES PLAGA",
        content: [
          "Deterioro de infraestructuras y mayores costos de mantenimiento",
          "Riesgos sanitarios y contaminación",
          "Afectación a procesos productivos",
          "Pérdidas económicas y operativas",
        ],
      },
    ],
  },

  {
    id: "consultoria",
    title: "Consultoría Ambiental",
    icon: <Shield className="w-6 h-6" />,
    image: "/servi/6.png",
    description: "Cumplimiento normativo y gestión ambiental especializada",
    sections: [
      {
        title: "CONSULTORÍA EN SEGURIDAD Y MEDIO AMBIENTE",
        content:
          "Brindamos soluciones integrales orientadas al cumplimiento normativo, la gestión ambiental y la seguridad ocupacional, adaptadas a las necesidades de cada organización.",
      },
      {
        title: "SERVICIOS ESPECIALIZADOS",
        content: [
          "Estudios de impacto ambiental (DIA, EIA)",
          "Planes de manejo ambiental (PAMA)",
          "Evaluaciones ambientales preliminares (EVAP)",
          "Gestión y caracterización de residuos sólidos",
          "Proyectos para disposición final (rellenos sanitarios)",
          "Acondicionamiento acústico y autorizaciones sanitarias",
        ],
      },
      {
        title: "ASESORÍA Y CAPACITACIÓN",
        content:
          "Ofrecemos acompañamiento técnico y capacitación en seguridad y medio ambiente, fortaleciendo la gestión interna y el cumplimiento de estándares legales.",
      },
      {
        title: "EQUIPO PROFESIONAL",
        content: [
          "Ingeniería ambiental, industrial y química",
          "Seguridad y salud ocupacional",
          "Biología, sociología y entomología",
        ],
      },
      {
        title: "BENEFICIOS",
        content: [
          "Cumplimiento de normativa vigente",
          "Reducción de riesgos legales y operativos",
          "Optimización de procesos ambientales",
        ],
      },
    ],
  },
];

export function ServicesSec() {
  const [expandedService, setExpandedService] = useState<string | null>(
    services[0].id,
    
  );
  
  const detailsRef = useRef<HTMLDivElement>(null);


  const selectedService = services.find((s) => s.id === expandedService);
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Servicios Profesionales
          </h1>

          <div className="w-32 h-1 bg-[#6CB519] mx-auto rounded-full mb-6" />

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales de control de plagas, desinfección y servicios
            especializados
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* IZQUIERDA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6">
              Nuestros Servicios
            </h2>

            <div className="space-y-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setExpandedService(service.id);

                    // Solo hace scroll en pantallas pequeñas
                    if (window.innerWidth < 1024) {
                      setTimeout(() => {
                        detailsRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }
                  }}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                    expandedService === service.id
                      ? "bg-[#6CB519] text-white border-[#6CB519] shadow-2xl scale-[1.02]"
                      : "bg-[#1E293B] text-white border-[#334155] hover:bg-[#263548]"
                  }`}
                >
                  <div className="mt-1 text-[#6CB519]">{service.icon}</div>

                  <div>
                    <div className="font-bold text-lg">{service.title}</div>

                    <div className="text-sm text-gray-300 mt-1">
                      {service.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CENTRO - IMAGEN */}
          <div
            ref={detailsRef}
            className="relative h-[500px] lg:h-auto min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#6CB519]/20"
          >
            {selectedService && (
              <>
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover transition-all duration-500"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="mb-4 text-[#6CB519]">
                    {selectedService.icon}
                  </div>

                  <h2 className="text-4xl font-black mb-3">
                    {selectedService.title}
                  </h2>

                  <p className="text-gray-200 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* DERECHA */}
          <div>
            {selectedService && (
              <Card className="p-6 sticky top-6 rounded-3xl shadow-2xl border border-[#6CB519]/20 bg-[#111827] text-white">
                <div className="space-y-6">
                  <h2 className="text-3xl font-black text-white">
                    {selectedService.title}
                  </h2>

                  {selectedService.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-lg font-bold text-[#6CB519]">
                        {section.title}
                      </h3>

                      {typeof section.content === "string" ? (
                        <p className="text-gray-300 leading-relaxed">
                          {section.content}
                        </p>
                      ) : (
                        <ul className="space-y-3">
                          {section.content.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-3 text-gray-300"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[#6CB519] flex-shrink-0 mt-0.5" />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  <button className="w-full bg-[#6CB519] text-white py-3 rounded-xl font-bold hover:bg-[#5aa012] transition-all duration-300 mt-8 shadow-lg">
                    Solicitar Información
                  </button>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#6CB519] text-white rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-black mb-4">
            ¿Necesitas nuestros servicios?
          </h2>

          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Contáctanos hoy para una evaluación gratuita y personalizada.
          </p>

          <a
            href="https://wa.me/51998998318?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#6CB519] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Contáctanos Ahora
          </a>
        </div>
      </div>
    </main>
  );
}
