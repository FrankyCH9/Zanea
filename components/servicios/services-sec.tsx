'use client';

import { useState } from 'react';
import { ChevronDown, Shield, Bug, Droplets, Bird, Zap, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  sections: {
    title: string;
    content: string | string[];
  }[];
}

const services: ServiceCategory[] = [
  {
    id: 'desinsectacion',
    title: 'Desinsectación',
    icon: <Bug className="w-6 h-6" />,
    description: 'Técnicas especializadas para controlar y eliminar insectos y arácnidos',
    sections: [
      {
        title: '¿QUÉ ES LA DESINSECTACIÓN? (FUMIGACIÓN)',
        content:
          'La desinsectación comprende el conjunto de técnicas aplicadas para controlar o eliminar insectos y arácnidos (artrópodos) que pueden afectar la salud, los alimentos y las instalaciones. Muchas de estas especies son vectores de enfermedades, provocan alergias, generan cuadros tóxicos o deterioran materias primas, por lo que es fundamental implementar un adecuado programa de control de plagas.',
      },
      {
        title: 'IMPORTANCIA DEL CONTROL PREVENTIVO',
        content:
          'La presencia inicial de insectos o arácnidos debe considerarse una señal de alerta. Actuar a tiempo permite evitar su proliferación y prevenir riesgos sanitarios, económicos y operativos.',
      },
      {
        title: 'CRITERIOS PARA LA APLICACIÓN DEL SERVICIO',
        content: [
          'Dimensión y características del área',
          'Nivel de accesibilidad',
          'Tipo de plaga y su comportamiento biológico',
          'Condiciones estructurales del ambiente',
          'Presencia de personas, niños o animales',
        ],
      },
      {
        title: 'MÉTODOS DE DESINSECTACIÓN',
        content: [
          'Pulverización manual',
          'Espolvoreo',
          'Atomización a motor',
          'Nebulización en caliente (termonebulización)',
          'Nebulización en frío (ULV)',
          'Aplicación de geles insecticidas',
        ],
      },
    ],
  },
  {
    id: 'desinfeccion',
    title: 'Desinfección',
    icon: <Shield className="w-6 h-6" />,
    description: 'Eliminación e inactivación de microorganismos patógenos',
    sections: [
      {
        title: 'DESINFECCIÓN DE AMBIENTES',
        content:
          'Brindamos el servicio de desinfección orientado a la eliminación e inactivación de microorganismos patógenos como virus, bacterias, hongos y esporas, responsables de diversas enfermedades. Trabajamos bajo estrictos lineamientos del Ministerio de Salud (MINSA), así como de organismos internacionales como la OPS, OMS y US EPA, garantizando procesos seguros y efectivos.',
      },
      {
        title: 'RESPALDO Y TECNOLOGÍA',
        content:
          'Utilizamos equipos modernos y sistemas de aplicación avanzados, junto con biocidas de alta calidad (químicos y/o naturales), asegurando una cobertura eficiente y resultados confiables en cada intervención.',
      },
      {
        title: 'ÁREAS DE ATENCIÓN',
        content: [
          'Viviendas y edificios',
          'Oficinas e industrias',
          'Comercios, supermercados y mercados',
          'Unidades de transporte',
        ],
      },
      {
        title: 'MICROORGANISMOS CONTROLADOS',
        content:
          'Nuestros procesos permiten controlar una amplia gama de microorganismos, incluyendo Escherichia coli, Salmonella, Staphylococcus aureus, Listeria monocytogenes, Candida albicans, Aspergillus, virus respiratorios y otros patógenos relevantes.',
      },
      {
        title: 'RECOMENDACIONES BÁSICAS',
        content: [
          'Lejía (hipoclorito): alta eficacia, reduce su acción en presencia de materia orgánica',
          'Peróxido de hidrógeno: amplio espectro, ideal en superficies limpias',
          'Alcohol (60%–80%): efectivo contra virus al actuar sobre su estructura',
        ],
      },
    ],
  },
  {
    id: 'desratizacion',
    title: 'Desratización',
    icon: <Bug className="w-6 h-6" />,
    description: 'Control integral de ratas y ratones en ambientes urbanos',
    sections: [
      {
        title: 'DESRATIZACIÓN (CONTROL DE ROEDORES)',
        content:
          'Servicio orientado al control de ratas y ratones en ambientes urbanos, cuya presencia representa un riesgo sanitario por su rápida reproducción y capacidad de contaminación. Aplicamos estrategias integrales para reducir y controlar poblaciones de roedores, protegiendo la salud y las instalaciones.',
      },
      {
        title: 'TIPOS DE INTERVENCIÓN',
        content: [
          'Control preventivo (pasivo): Acciones enfocadas en evitar el ingreso, refugio y proliferación',
          'Control correctivo (activo): Aplicación de métodos físicos, químicos y biológicos para la reducción directa',
        ],
      },
      {
        title: 'ENFOQUE TÉCNICO',
        content:
          'Cada intervención se diseña en función de las características del área, combinando diferentes métodos para lograr resultados efectivos y sostenibles.',
      },
      {
        title: 'RECOMENDACIÓN POST SERVICIO',
        content:
          'Se sugiere complementar con servicios de desinsectación y desinfección, a fin de controlar posibles parásitos y microorganismos asociados a los roedores.',
      },
    ],
  },
  {
    id: 'reservorios',
    title: 'Limpieza de Reservorios',
    icon: <Droplets className="w-6 h-6" />,
    description: 'Garantizamos condiciones adecuadas para el almacenamiento de agua',
    sections: [
      {
        title: 'SERVICIO DE LIMPIEZA DE RESERVORIOS DE AGUA',
        content:
          'Garantizamos condiciones adecuadas para el almacenamiento de agua mediante la reducción de contaminantes y el control de agentes que afectan su calidad, contribuyendo a sistemas seguros y confiables.',
      },
      {
        title: 'IMPORTANCIA DEL SERVICIO',
        content:
          'La intervención periódica permite mantener los reservorios en óptimas condiciones, evitando la acumulación de residuos. De acuerdo con la normativa peruana, este servicio debe realizarse de manera obligatoria cada seis (6) meses en establecimientos comerciales, industriales y viviendas multifamiliares.',
      },
      {
        title: 'RESPALDO TÉCNICO',
        content: [
          'Personal certificado para trabajos en espacios confinados y altura',
          'Monitoreo continuo mediante equipos de medición de gases',
          'Procedimientos seguros durante toda la intervención',
        ],
      },
      {
        title: 'BENEFICIOS DEL SERVICIO',
        content: [
          'Mejora en las condiciones del sistema de almacenamiento',
          'Reducción de riesgos sanitarios',
          'Cumplimiento de la normativa vigente',
          'Emisión de certificado sanitario autorizado',
        ],
      },
    ],
  },
  {
    id: 'control-aviar',
    title: 'Control Aviar',
    icon: <Bird className="w-6 h-6" />,
    description: 'Manejo especializado de aves plaga como palomas y gaviotas',
    sections: [
      {
        title: 'CONTROL AVIAR',
        content:
          'Servicio especializado para el manejo y control de aves plaga como palomas, gaviotas y gorriones, que afectan la salud, la infraestructura y la productividad de sus instalaciones. Trabajamos con un enfoque técnico y responsable, garantizando soluciones eficientes y sostenibles.',
      },
      {
        title: 'METODOLOGÍA DE INTERVENCIÓN',
        content: [
          'Métodos de exclusión y manejo del entorno',
          'Control mediante carabina, ejecutado bajo protocolos de seguridad',
          'Autorización de SERFOR, cumpliendo la normativa vigente',
        ],
      },
      {
        title: 'IMPACTO DE LAS AVES PLAGA',
        content: [
          'Deterioro de infraestructuras y mayores costos de mantenimiento',
          'Riesgos sanitarios y contaminación',
          'Afectación a procesos productivos',
          'Pérdidas económicas y operativas',
        ],
      },
    ],
  },
  {
    id: 'servicios-electricos',
    title: 'Servicios Eléctricos',
    icon: <Zap className="w-6 h-6" />,
    description: 'Garantizar la seguridad, continuidad y eficiencia de sistemas eléctricos',
    sections: [
      {
        title: 'SERVICIOS ELÉCTRICOS',
        content:
          'Soluciones integrales orientadas a garantizar la seguridad, continuidad y eficiencia de los sistemas eléctricos en instalaciones comerciales e industriales.',
      },
      {
        title: 'MANTENIMIENTO DE TABLEROS ELÉCTRICOS',
        content:
          'Revisión técnica de conexiones, limpieza de componentes, ajuste de terminales y verificación de protecciones eléctricas, asegurando un funcionamiento seguro y confiable.',
      },
      {
        title: 'INSTALACIÓN Y OPTIMIZACIÓN DE ILUMINACIÓN',
        content:
          'Implementación y renovación de sistemas de iluminación, incluyendo tecnología LED, adecuación de circuitos y validación de niveles lumínicos conforme a normativa.',
      },
      {
        title: 'SISTEMAS DE PUESTA A TIERRA',
        content:
          'Evaluación y mantenimiento de sistemas de puesta a tierra, medición de resistencia, verificación de continuidad y acondicionamiento de componentes.',
      },
      {
        title: 'BENEFICIOS',
        content: [
          'Mayor seguridad eléctrica',
          'Continuidad operativa',
          'Reducción de fallas y riesgos',
          'Cumplimiento de normativas técnicas',
        ],
      },
    ],
  },
  {
    id: 'consultoria',
    title: 'Consultoría Ambiental',
    icon: <Shield className="w-6 h-6" />,
    description: 'Cumplimiento normativo y gestión ambiental especializada',
    sections: [
      {
        title: 'CONSULTORÍA EN SEGURIDAD Y MEDIO AMBIENTE',
        content:
          'Brindamos soluciones integrales orientadas al cumplimiento normativo, la gestión ambiental y la seguridad ocupacional, adaptadas a las necesidades de cada organización.',
      },
      {
        title: 'SERVICIOS ESPECIALIZADOS',
        content: [
          'Estudios de impacto ambiental (DIA, EIA)',
          'Planes de manejo ambiental (PAMA)',
          'Evaluaciones ambientales preliminares (EVAP)',
          'Gestión y caracterización de residuos sólidos',
          'Proyectos para disposición final (rellenos sanitarios)',
          'Acondicionamiento acústico y autorizaciones sanitarias',
        ],
      },
      {
        title: 'ASESORÍA Y CAPACITACIÓN',
        content:
          'Ofrecemos acompañamiento técnico y capacitación en seguridad y medio ambiente, fortaleciendo la gestión interna y el cumplimiento de estándares legales.',
      },
      {
        title: 'EQUIPO PROFESIONAL',
        content: [
          'Ingeniería ambiental, industrial y química',
          'Seguridad y salud ocupacional',
          'Biología, sociología y entomología',
        ],
      },
      {
        title: 'BENEFICIOS',
        content: [
          'Cumplimiento de normativa vigente',
          'Reducción de riesgos legales y operativos',
          'Optimización de procesos ambientales',
        ],
      },
    ],
  },
];

export function ServicesSec() {
  const [expandedService, setExpandedService] = useState<string | null>(services[0].id);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Servicios Profesionales
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales de control de plagas, desinfección y servicios especializados para
            proteger su salud y ambiente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service List Sidebar */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Nuestros Servicios</h2>
            <div className="space-y-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setExpandedService(service.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-start gap-3 ${
                    expandedService === service.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card text-card-foreground hover:bg-muted'
                  }`}
                >
                  <div className="mt-1">{service.icon}</div>
                  <div>
                    <div className="font-semibold">{service.title}</div>
                    <div className="text-sm opacity-90">{service.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>



          {/* Service Details */}
          <div>
            {expandedService && (
              <Card className="p-6 sticky top-6">
                {services.find((s) => s.id === expandedService) && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">
                      {services.find((s) => s.id === expandedService)?.title}
                    </h2>

                    {services
                      .find((s) => s.id === expandedService)
                      ?.sections.map((section, idx) => (
                        <div key={idx} className="space-y-2">
                          <h3 className="text-lg font-semibold text-primary">
                            {section.title}
                          </h3>
                          {typeof section.content === 'string' ? (
                            <p className="text-muted-foreground leading-relaxed">
                              {section.content}
                            </p>
                          ) : (
                            <ul className="space-y-2">
                              {section.content.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="flex items-start gap-3 text-muted-foreground"
                                >
                                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-8">
                      Solicitar Información
                    </button>
                  </div>
                )}
              </Card>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas nuestros servicios?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Contáctanos hoy para una evaluación gratuita y personalizada de tu sitio o
            instalación.
          </p>
          <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </main>
  );
}
