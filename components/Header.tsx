
import React, { useState, useEffect } from 'react';
import logoPuertoBandera from '../assets/logo.png';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
           src={logoPuertoBandera} 
           alt="Puerto Bandera Logo"
           className="h-10 md:h-12"
          />
          <div className={`hidden md:block transition-colors ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            <h1 className="text-xl font-bold leading-none">PUERTO BANDERA</h1>
            <p className="text-[10px] tracking-widest uppercase">Rosario - Argentina</p>
          </div>
        </div>

        <div className={`flex gap-6 items-center text-sm font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
          <a href="#" className="hover:text-blue-500 transition-colors">Inicio</a>
          <a href="#habitaciones" className="hover:text-blue-500 transition-colors">Habitaciones</a>
          <a href="#servicios" className="hover:text-blue-500 transition-colors">Servicios</a>
          <a href="#contacto" className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors hidden sm:block">Reservar</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
