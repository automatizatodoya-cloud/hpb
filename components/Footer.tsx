
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://res.cloudinary.com/dr3m1e5wz/image/upload/v1740523425/logo_puertobandera.png" 
                alt="Puerto Bandera Logo" 
                className="h-12 brightness-0 invert"
              />
              <div>
                <h4 className="font-bold text-lg leading-none">PUERTO BANDERA</h4>
                <p className="text-[10px] tracking-widest uppercase opacity-70">Rosario - Argentina</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ubicado estratégicamente en el centro de Rosario, brindamos una experiencia acogedora con la calidez que nos caracteriza desde hace años.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold mb-6 text-slate-100">Contacto</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-blue-400"></i>
                <span>San Lorenzo 1016, Rosario, <br/>Santa Fe, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-400"></i>
                <span>+54 341 421-2345</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-400"></i>
                <span>contacto@hotelpuertobandera.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-6 text-slate-100">Explorar</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Habitaciones Flash</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Galería de Fotos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Atención Corporativa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-bold mb-6 text-slate-100">Síguenos</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-400 hover:border-blue-400 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Aceptamos</p>
              <div className="flex gap-3 text-2xl text-slate-600">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Puerto Bandera Hotel S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
