export default function PestLibrary() {
  const pests = [
    { name: 'CUCARACHAS', image: '/cucaracha.jpg' },
    { name: 'MOSCAS', image: '/mosca.jpg' },
    { name: 'MOSQUITOS', image: '/mosquito.jpg' },
    { name: 'ARAÑAS', image: '/arana.jpg' },
    { name: 'GARRAPATAS', image: '/garrapata.jpg' },
    { name: 'PULGAS', image: '/pulga.jpg' },
    { name: 'CHINCHES', image: '/chinche.jpg' },
    { name: 'ROEDORES', image: '/roedor.jpg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#FF3D52] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">BIBLIOTECA DE PLAGAS</h1>
          <p className="text-lg">PRINCIPALES PLAGAS URBANAS</p>
        </div>
      </div>

      {/* Pest Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pests.map((pest) => (
            <div
              key={pest.name}
              className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow"
            >
              <div className="w-40 h-40 flex items-center justify-center mb-6">
                <img
                  src={pest.image}
                  alt={pest.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-center font-semibold text-gray-800 tracking-wide">
                {pest.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
