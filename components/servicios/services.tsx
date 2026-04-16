const services = [
  'CONTROL AMBIENTAL',
  'CONTROL DE PLAGAS',
  'CONTROL AVIAR',
  'INSPECCIONES SANITARIAS',
  'CAPACITACIONES',
];

export default function Services() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Industrial warehouse"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full w-full px-10 py-12">
        <div className="flex flex-col justify-center max-w-xl">
          <p className="text-white font-bold text-lg mb-1">¡Hola! Bienvenidos a:</p>
          <h1 className="text-white font-extrabold text-7xl leading-none uppercase tracking-tight">
            CONTROL<br />AMBIENTAL
          </h1>
          <div className="flex items-center mt-5 border-l-4 border-red-600 pl-4">
            <p className="text-white font-semibold text-2xl italic">
              Soluciones a las plagas!
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center ml-auto">
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="text-white text-sm font-semibold tracking-widest hover:text-red-400 transition-colors duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
