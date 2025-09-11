"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Post = {
  id: number;
  title: string;
  desc: string;
  content: string;
  image: string;
  category: string;
  tag: string;
  industry: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "CONTROL DE PLAGAS",
    desc: "Utilizamos metodologías y procesos eficientes en la eliminación de todo tipo de plagas rastreras o voladoras a niveles aceptables.",
    content: `
• Tratamiento de Desinsectación  
• Tratamiento de Desratización: procesos de disminución del nivel poblacional de murinos a través de métodos especializados.  

Metodologías:  
1. Trampas Tomahawk  
2. Estaciones tubulares  
3. Rodenticidas biológicos  
4. Cebos rodenticidas  
5. Trampas pegantes  

Elaboramos programas de manejo integral de control de plagas (MIP), de acuerdo a la problemática de cada cliente.  
• Fumigación con Fosfina
    `,
    image: "servicios/control/a.jpg",
    category: "Categoría",
    tag: "Etiqueta",
    industry: "Industria",
  },
  {
    id: 2,
    title: "DESINFECCIÓN DE AMBIENTES",
    desc: "La eliminación de los microorganismos patógenos (bacterias, virus y hongos) en todos los ambientes que puedan resultar nocivos, mediante la utilización de agentes fundamentalmente químicos.",
    content: `
Nuestros productos:  
1. Son potentes desinfectantes microbicida a base de guadanina polimérica en medio alcohólico.  
2. Eliminan todo tipo de virus, bacterias, hongos y levaduras.  
3. Poseen una combinación sinérgica de principios activos extraídos de vegetales.  
4. Actúan a nivel de membrana celular, enzimas y ácidos nucleicos de los microorganismos.
  `,
    image: "servicios/desinfeccion/b.jpeg",
    category: "Salud",
    tag: "Medio Ambiente",
    industry: "Agua",
  },
  {
    id: 3,
    title: "LIMPIEZA Y DESINFECCIÓN DE RESERVORIOS DE AGUA",
    desc: "Realizamos la limpieza profunda de paredes, pisos y la eliminación de toda materia orgánica (bacterias, hongos y sarro) o cuerpo extraño en tanque, cisterna o reservorio a través de equipos mecánicos y eléctricos.",
    content: `
Realizamos limpieza de:  
• Cisternas  
• Tanque elevado  
• Tanques apoyados  

Cumplimos altos estándares de calidad y seguridad:  
• Realizamos mediciones de gases y verificamos los niveles de oxígeno con equipos de alta tecnología, capaces de monitorear hasta 6 gases de manera simultánea; encontrándose dentro del parámetro establecido por las OSHAS.  
• Realizamos análisis del nivel de cloro libre (mg/L CI2) para determinar que las aguas de consumo han sido correctamente desinfectadas y se encuentren dentro de los parámetros establecidos (no menor a 0.5 mg/L CI2).  
• Contamos con personal técnico altamente capacitado y especializado en actividades de alto riesgo.
  `,
    image: "servicios/limpieza/c.jpeg",
    category: "Tecnología",
    tag: "Innovación",
    industry: "Software",
  },
  {
    id: 4,
    title: "MANTENIMIENTO DE RESERVORIOS DE AGUA",
    desc: "Consiste en el conjunto de actividades necesarias para corregir oportunamente las fallas que puedan presentarse en sus estructuras.",
    content: `
Físico:  
• Cambio de componentes y accesorios.  
• Mantenimiento preventivo de válvulas y componentes.  
• Mantenimiento de sistemas de bombeo.  
• Tuberías de rebose.  
• Tuberías de salida.  
• Escaleras de acceso y salida.  
• Inspección de empaquetaduras.  
• Cambio de empaque de vástago.  
• Mantenimiento de motor.  
• Resanado de paredes y superficies.  

Tablero electrónico:  
• Mantenimiento preventivo y correctivo.  
• Limpieza de componentes y accesorios.  
• Ajuste de borneras, etc.  
• Verificación e inspección de controles de funcionamiento.
  `,
    image: "servicios/mantenimiento/d.jpeg",
    category: "Educación",
    tag: "Capacitación",
    industry: "Servicios",
  },
  {
    id: 5,
    title: "CONTROL DE ANIMALES MENORES",
    desc: `
• Reubicación de animales menores abandonados: por lo general perros y gatos que gustan de permanecer cerca de las personas.  
• Reubicación de animales callejeros: suelen mantener distancia de las personas, vivir en grupos o manadas y tener apariencia más tensa y cautelosa (postura precavida, cola baja, etc.).
  `,
    content: `
Aquí va el texto completo del artículo 5.  
Puedes escribir recomendaciones, casos de estudio o guías prácticas.
  `,
    image: "servicios/controla/a.jpeg",
    category: "Seguridad",
    tag: "Prevención",
    industry: "Industria",
  },
  {
    id: 6,
    title: "CONTROL AVIAR",
    desc: `
Las aves son portadoras de gran cantidad de parásitos como garrapatas, moscas de la paloma y piojos, así como enfermedades zoonóticas (que afectan a los humanos) como la clamidiosis, salmonelosis, colibacilosis, encefalitis equina o tuberculosis aviar.
  `,
    content: `
Metodología de tratamiento:  

• Púas anti-aves: método eficaz para el control de palomas. La instalación se realiza en todos los puntos donde las aves pernoctan o intentan hacer sus nidos.  

• Colocación de gel anti-aves: mantiene las mismas propiedades que el repelente líquido, no es tóxico para el ser humano. Es ideal para cornisas, barandas, techos y cualquier superficie que sirva de aterrizaje.  

• Jaulas capturadoras de palomas: se instalan según la ubicación y comportamiento. Forman parte del control integral anual o de situaciones de infestación. La captura se realiza con atrayentes naturales como maíz y agua, impidiendo la salida de las palomas una vez dentro.
  `,
    image: "servicios/controlav/a.jpeg",
    category: "Energía",
    tag: "Sostenibilidad",
    industry: "Medio Ambiente",
  },
  {
    id: 7,
    title: "CONSULTORÍA EN SEGURIDAD Y MEDIO AMBIENTE",
    desc: `
Brindamos asesoría y capacitación relacionada con asuntos en materia ambiental y seguridad en el trabajo.
  `,
    content: `
Realizamos estudios:  

• Expedientes de Autorizaciones Sanitarias  
• Estudios de Impacto Ambiental (EIASd – EIA – DIA)  
• Estudios de Acondicionamiento Acústico  
• Planes de Manejo Ambiental (PAMA)  
• Evaluación Ambiental Preliminar (EVAP)  
• Plan de Gestión de Residuos Sólidos  
• Estudio de Caracterización de Residuos Sólidos  
• Declaración de Impacto Ambiental (DIA) para proyectos de disposición final de residuos sólidos (relleno sanitario)  
• Sistema Integrado de Manejo de Residuos Sólidos Municipales
  `,
    image: "servicios/consultoria/1.jpeg",
    category: "Salud",
    tag: "Agua",
    industry: "Seguridad",
  },
];

export default function BlogSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Animación al montar
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-animate {
          animation: fade-up 1s ease-out forwards;
        }

        @keyframes flip-in {
          0% {
            transform: rotateY(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }
        .flip-animate {
          animation: flip-in 0.8s ease-out forwards;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .card-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card-hover:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25) !important;
        }

        .image-hover img {
          transition: transform 0.4s ease;
        }
        .image-hover:hover img {
          transform: scale(1.1);
        }
      `}</style>

      <section
        className={`py-16 px-4 bg-gray-50 transition-all duration-1000 ${
          isVisible ? "fade-animate" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-green-600 font-medium">Nuestros</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios</h2>
          <p className="text-gray-600 mb-12">
            Descubre las novedades y actualizaciones de nuestros servicios
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) =>
              post.id === 7 ? (
                // 👉 Séptima tarjeta centrada
                <div
                  key={post.id}
                  className="md:col-span-3 flex justify-center"
                >
                  <Card
                    className={`overflow-hidden text-left rounded-2xl shadow-lg bg-white card-hover flex flex-col w-full md:w-1/3 ${
                      isVisible ? "flip-animate" : "opacity-0"
                    }`}
                  >
                    <div className="relative w-full h-56 md:h-64 overflow-hidden image-hover">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{post.desc}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.tag}</span>
                        <span>•</span>
                        <span>{post.industry}</span>
                      </div>

                      {expanded === post.id && (
                        <div className="text-gray-700 mb-4 whitespace-pre-line">
                          {post.content}
                        </div>
                      )}

                      {/* Botón alineado abajo */}
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent"
                          onClick={() =>
                            setExpanded(expanded === post.id ? null : post.id)
                          }
                        >
                          {expanded === post.id
                            ? "Mostrar menos"
                            : "Leer más"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card
                  key={post.id}
                  className={`overflow-hidden text-left rounded-2xl shadow-lg bg-white card-hover flex flex-col ${
                    isVisible ? "flip-animate" : "opacity-0"
                  }`}
                >
                  <div className="relative w-full h-56 md:h-64 overflow-hidden image-hover">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{post.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.tag}</span>
                      <span>•</span>
                      <span>{post.industry}</span>
                    </div>

                    {expanded === post.id && (
                      <div className="text-gray-700 mb-4 whitespace-pre-line">
                        {post.content}
                      </div>
                    )}

                    {/* Botón alineado abajo */}
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() =>
                          setExpanded(expanded === post.id ? null : post.id)
                        }
                      >
                        {expanded === post.id ? "Mostrar menos" : "Leer más"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}


