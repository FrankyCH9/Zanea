'use client';

export default function PestLibrary() {
  const pests = [
    { name: 'CUCARACHAS', image: 'plagas/cucaracha.png' },
    { name: 'MOSCAS', image: 'plagas/moscas.png' },
    { name: 'MOSQUITOS', image: 'plagas/mosquitos.png' },
    { name: 'ARAÑAS', image: 'plagas/arana.png' },
    { name: 'GARRAPATAS', image: 'plagas/garrapatas.png' },
    { name: 'PULGAS', image: 'plagas/puga.png' },
    { name: 'CHINCHES', image: 'plagas/chinches.png' },
    { name: 'ROEDORES', image: 'plagas/raton.png' },
  ];

  const equipments = [
    { name: 'ULV NEBULIZADOR', image: 'equipos/1.png' },
    { name: 'ULV NEBULIZADOR DC 20', image: 'equipos/2.png' },
    { name: 'MOTOFUMIGADORA', image: 'equipos/3.png' },
    { name: 'TERMONEBULIZADOR', image: 'equipos/4.png' },
    { name: 'MSA ALTAIR 5X BIG 4 LEL-02-CO-H2O DETECTOR MULTIGAS', image: 'equipos/5.png' },
    { name: 'MEDIDOR DIGITAL DE CLORO LIBRE', image: 'equipos/6.png' },
    { name: 'ELECTROBOMBA SUMERGIBLES', image: 'equipos/7.png' },
    { name: 'MOCHILAS MANUAL SOLO 425', image: 'equipos/8.png' },
    { name: 'MOCHILAS MOTOR SOLO 423', image: 'equipos/9.png' },
    { name: 'CAJAS CEBADERO ', image: 'equipos/10.png' },
    { name: 'INSECTOCAPTURADORES ', image: 'equipos/11.png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      {/* ================= HEADER ================= */}
      <div className="bg-[#6CB519] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            BIBLIOTECA DE PLAGAS
          </h1>

          <p className="text-lg">
            PRINCIPALES PLAGAS URBANAS
          </p>
        </div>
      </div>

      {/* ================= PLAGAS ================= */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#6CB519] font-bold uppercase tracking-[0.2em] text-sm mb-2">
              Catálogo
            </p>

            <h2 className="text-4xl font-black text-white">
              Plagas Urbanas
            </h2>
          </div>

          <div className="hidden md:block w-40 h-1 bg-[#6CB519] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pests.map((pest) => (
            <div
              key={pest.name}
              className="group flex flex-col items-center justify-center p-8 border border-gray-200 rounded-3xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-40 h-40 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={pest.image}
                  alt={pest.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="w-14 h-1 bg-[#6CB519] rounded-full mb-4 group-hover:w-24 transition-all duration-500" />

              <h3 className="text-center font-black text-gray-800 tracking-wide text-lg">
                {pest.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EQUIPOS HEADER ================= */}
      <div className="bg-[#6CB519] text-white px-8 py-16 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            NUESTROS EQUIPOS
          </h1>

          <p className="text-lg text-white/80">
            EQUIPOS PROFESIONALES Y ESPECIALIZADOS
          </p>
        </div>
      </div>

      {/* ================= EQUIPOS ================= */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipments.map((equipment, index) => (
            <div
              key={equipment.name}
              className="group relative flex flex-col items-center justify-center p-8 border border-gray-200 rounded-3xl bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Número */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#6CB519] text-white flex items-center justify-center font-black shadow-lg">
                {index + 1}
              </div>

              {/* Imagen */}
              <div className="w-40 h-40 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="w-14 h-1 bg-[#6CB519] rounded-full mb-4 group-hover:w-24 transition-all duration-500" />

              <h3 className="text-center font-black text-gray-800 tracking-wide text-lg">
                {equipment.name}
              </h3>

              <p className="text-sm text-gray-500 text-center mt-3">
                Equipo profesional para trabajos especializados.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
