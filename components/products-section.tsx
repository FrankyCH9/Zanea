"use client";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <>
      {/* Animaciones locales */}
      <style jsx>{`
        /* Animación de aparición sección */
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

        /* Animación de giro al aparecer */
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

        /* Hover con sombra visible */
        .card-hover {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25) !important;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`py-16 px-4 transition-all duration-1000 ${
          isVisible ? "fade-animate" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-green-600 font-medium">SOLUCIONES</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestros productos
          </h2>
          <p className="text-gray-600 mb-12">
            Amplio catálogo de productos plásticos diseñados para satisfacer las
            necesidades de tu industria.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                img: "servicios/control/e.jpg",
                title: "CONTROL DE PLAGAS",
                desc: `
• Tratamiento de Desinsectación  
• Tratamiento de Desratización: procesos de disminución del nivel poblacional de murinos a través de métodos especializados.  

Metodologías:  
1. Trampas Tomahawk  
2. Estaciones tubulares  
3. Rodenticidas biológicos  
4. Cebos rodenticidas  
5. Trampas pegantes  

Elaboramos programas de Manejo Integral de Plagas (MIP), de acuerdo a la problemática de cada cliente.  

• Fumigación con Fosfina  
`,
              },

              {
  img: "/duct-tape-rolls.png",
  title: "DESINFECCIÓN DE AMBIENTES",
  desc: `
1. Son potentes desinfectantes microbicidas a base de guanidina polimérica en medio alcohólico.  
2. Eliminan todo tipo de virus, bacterias, hongos y levaduras.  
3. Poseen una combinación sinérgica de principios activos extraídos de vegetales.  
4. Actúan a nivel de membrana celular, enzimas y ácidos nucleicos de los microorganismos.  
`
},

             {
  img: "/fragile-tape.png",
  title: "LIMPIEZA Y DESINFECCIÓN DE RESERVORIOS DE AGUA",
  desc: `
Realizamos limpieza de:  
• Cisternas  
• Tanques elevados  
• Tanques apoyados  

Cumplimos altos estándares de calidad y seguridad:  
• Realizamos mediciones de gases y verificamos los niveles de oxígeno con equipos de alta tecnología, capaces de monitorear hasta 6 gases de manera simultánea, asegurando que se encuentren dentro de los parámetros establecidos por la OSHA.  
• Realizamos análisis del nivel de cloro libre (mg/L Cl₂) para garantizar que las aguas de consumo han sido correctamente desinfectadas y se encuentren dentro de los parámetros establecidos (no menor a 0.5 mg/L Cl₂).  
• Contamos con personal técnico altamente capacitado y especializado en actividades de alto riesgo.  
`
},

              {
  img: "/packing-tape.png",
  title: "Mantenimiento de Reservorios de Agua",
  desc: `
Físico:
- Cambio de componentes y accesorios
- Mantenimiento preventivo de válvulas y componentes
- Mantenimiento de sistemas de bombeo
- Tuberías de rebose
- Tuberías de salida
- Escaleras de accesos y salidas
- Inspección de empaquetaduras
- Cambio de empaque de vástago
- Mantenimiento de motor
- Resanado de paredes y superficies

Tablero electrónico:
- Mantenimiento preventivo y correctivo
- Limpieza de componentes y accesorios
- Ajuste de borneras
- Verificación e inspección de controles de funcionamiento
`,
},

              {
  img: "/crystal-bags.png",
  title: "Control de Animales Menores",
  desc: `
- Reubicación de animales menores abandonados: por lo general perros y gatos que buscan estar cerca de las personas.
- Reubicación de animales callejeros: suelen mantener distancia de las personas, vivir en grupos o manadas, y tener una apariencia más tensa y cautelosa (postura precavida, cola baja, etc.).
`,
},

              {
  img: "/biodegradable-bags.png",
  title: "Control Aviar",
  desc: `
Metodología de tratamiento:
- Púas anti-aves: método eficaz para el control de palomas. Se instalan en puntos donde las aves pernoctan o intentan hacer nidos.
- Colocación de gel anti-aves: mantiene las mismas propiedades que el repelente líquido, no es tóxico para el ser humano. Ideal para cornisas, barandas, techos y cualquier punto de aterrizaje.
- Jaulas capturadoras de palomas: se instalan de acuerdo a la ubicación y comportamiento, dentro de un plan integral anual o en casos de infestación. Funcionan con atrayentes naturales como maíz y agua, permitiendo la entrada pero no la salida.
`,
},
              {
  img: "/red-medical-bags.png",
  title: "Consultoría en Seguridad y Medio Ambiente",
  desc: `
Realizamos estudios:
- Expedientes de autorizaciones sanitarias
- Estudios de Impacto Ambiental (EIASD, EIA, DIA)
- Estudios de acondicionamiento acústico
- Planes de Manejo Ambiental (PAMA)
- Evaluación Ambiental Preliminar (EVAP)
- Plan de gestión de residuos sólidos
- Estudio de caracterización de residuos sólidos
- Declaración de Impacto Ambiental (DIA) para proyectos de disposición final de residuos sólidos (relleno sanitario)
- Sistema integrado de manejo de residuos sólidos municipales
`,
},

              
            ].map((product, i) => (
              <div
                key={i}
                className={`${isVisible ? "flip-animate" : "opacity-0"}`}
              >
                <Card className="text-center card-hover min-h-[300px] flex flex-col justify-center rounded-2xl bg-white">
                  <CardContent className="p-6 flex flex-col justify-center">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="mx-auto mb-4 h-24 w-24 object-contain"
                    />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600">{product.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
