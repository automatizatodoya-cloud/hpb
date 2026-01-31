
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import RoomCard from './components/RoomCard.tsx';
import ChatBot from './components/ChatBot.tsx';
import Footer from './components/Footer.tsx';
import { ROOMS } from './constants.ts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      
      <main>
        {/* Introducción */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Bienvenidos</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                Tradición y Confort en Rosario
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ubicado estratégicamente a pasos del Monumento a la Bandera y la peatonal de Rosario, ofrecemos una experiencia de descanso única con la atención personalizada que nos caracteriza desde hace décadas.
              </p>
            </div>
          </div>
        </section>

        {/* Habitaciones */}
        <section id="habitaciones" className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wider">Nuestras Habitaciones</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ROOMS.map((room, idx) => (
                <RoomCard key={idx} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* Banner de Acción */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-blue-900 rounded-[2.5rem] p-12 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Buscando una estancia placentera?</h2>
                <p className="mb-10 text-blue-100 max-w-xl mx-auto text-lg">Reserva directamente con nosotros para obtener las mejores tarifas y beneficios exclusivos.</p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-2"><i className="fas fa-mug-hot text-blue-400"></i> Desayuno incluido</div>
                  <div className="flex items-center gap-2"><i className="fas fa-wifi text-blue-400"></i> Fibra Óptica</div>
                  <div className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-blue-400"></i> Pleno Centro</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
