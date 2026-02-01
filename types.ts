
export interface Room {
  tipo_hab: string;
  servicio: string;
  capacidad: number;
  precio: string;
  image: string;
  isFlash?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}
