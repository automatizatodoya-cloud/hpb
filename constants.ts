
import { Room } from './types.ts';

export const ROOMS: Room[] = [
  {
    tipo_hab: "Single",
    servicio: "Desayuno, cambio de sábanas, aire acondicionado, wifi",
    capacidad: 1,
    precio: "$40.000",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
    isFlash: false
  },
  {
    tipo_hab: "Single Flash",
    servicio: "Habitación esencial sin servicios adicionales",
    capacidad: 1,
    precio: "$20.000",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800",
    isFlash: true
  },
  {
    tipo_hab: "Doble",
    servicio: "Desayuno, cambio de sábanas, aire acondicionado, wifi",
    capacidad: 2,
    precio: "$60.000",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    isFlash: false
  },
  {
    tipo_hab: "Doble Flash",
    servicio: "Habitación esencial sin servicios adicionales",
    capacidad: 2,
    precio: "$40.000",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    isFlash: true
  },
  {
    tipo_hab: "Triple",
    servicio: "Desayuno, cambio de sábanas, aire acondicionado, wifi",
    capacidad: 3,
    precio: "$80.000",
    image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800",
    isFlash: false
  },
  {
    tipo_hab: "Triple Flash",
    servicio: "Habitación esencial sin servicios adicionales",
    capacidad: 3,
    precio: "$60.000",
    image: "https://images.unsplash.com/photo-1512918766671-ed6a07be03f1?auto=format&fit=crop&q=80&w=800",
    isFlash: true
  }
];

// URL del Webhook actualizada según solicitud
export const WEBHOOK_URL = "https://automatizatodoya.app.n8n.cloud/webhook/3d6ca3d4-b253-424f-8e2c-66c0a0e5daa2/chat";
