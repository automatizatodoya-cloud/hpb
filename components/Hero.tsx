
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background con la imagen real de la fachada del hotel */}
      <div 
        className="absolute inset-0 z-0 bg-slate-900"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("https://res.cloudinary.com/dr3m1e5wz/image/upload/v1740523425/hotel_entrance.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
        <div className="inline-block px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm mb-6 text-sm uppercase tracking-[0.3em] font-light">
          San Lorenzo 1016, Rosario
        </div>
        <h2 className="text-5xl md:text-8xl font-bold mb-6 drop-shadow-2xl leading-tight">
          Tu hogar en <br/> el centro
        </h2>
        <p className="text-lg md:text-2xl mb-12 text-slate-100 font-light drop-shadow-md max-w-2xl mx-auto">
          Calidez, confort y la mejor ubicación para tu estadía en la ciudad de Rosario.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a 
            href="#habitaciones" 
            className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-800 transition-all transform hover:scale-105 shadow-2xl"
          >
            Ver Habitaciones
          </a>
          <a 
            href="#contacto" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <a href="#habitaciones" className="text-white text-3xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
