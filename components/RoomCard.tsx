
import React from 'react';
import { Room } from '../types';

interface Props {
  room: Room;
}

const RoomCard: React.FC<Props> = ({ room }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64">
        <img 
          src={room.image} 
          alt={room.tipo_hab} 
          className="w-full h-full object-cover"
        />
        {room.isFlash && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            Flash Sale
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-md flex items-center gap-2">
          <i className="fas fa-users text-blue-600 text-sm"></i>
          <span className="text-sm font-semibold text-slate-800">Hasta {room.capacidad} pers.</span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">{room.tipo_hab}</h3>
          <span className="text-2xl font-bold text-blue-700">{room.precio}</span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {room.servicio}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex gap-3 text-slate-400">
            <i className="fas fa-wifi" title="Wifi"></i>
            <i className="fas fa-snowflake" title="Aire Acondicionado"></i>
            <i className="fas fa-tv" title="TV"></i>
          </div>
          <button className="text-blue-600 font-semibold hover:text-blue-800 text-sm transition-colors flex items-center gap-1 group">
            Reservar ahora
            <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
