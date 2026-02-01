
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChatMessage } from '../types';
import { WEBHOOK_URL } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'bot', 
      content: '¡Hola! Bienvenido al Hotel Puerto Bandera. ¿En qué puedo ayudarte hoy?', 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generar un sessionId único por usuario/sesión al inicializar el componente
  const sessionId = useMemo(() => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
  if (!inputValue.trim() || isLoading) return;

  const userMessage: ChatMessage = {
    role: 'user',
    content: inputValue,
    timestamp: new Date()
  };

  setMessages(prev => [...prev, userMessage]);
  setInputValue('');
  setIsLoading(true);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cambiamos 'message' por 'chatInput' y 'sessionId' por 'sessionId'
      // n8n Chat espera exactamente estos campos
      body: JSON.stringify({ 
        chatInput: userMessage.content,
        sessionId: sessionId,
        action: "sendMessage" // Campo opcional pero recomendado según tu captura
      }),
    });

    if (!response.ok) throw new Error('Error al conectar con n8n');

    const data = await response.json();
    
    // El nodo de chat de n8n suele devolver la respuesta directamente
    // o dentro de una propiedad 'output'
    let botContent = 'Lo siento, no pude procesar tu respuesta.';
    
    if (typeof data === 'string') {
      botContent = data;
    } else if (data.output) {
      botContent = data.output;
    } else if (Array.isArray(data) && data[0]?.output) {
      botContent = data[0].output;
    }

    setMessages(prev => [...prev, {
      role: 'bot',
      content: botContent,
      timestamp: new Date()
    }]);

  } catch (error) {
    console.error("Error de conexión:", error);
    setMessages(prev => [...prev, {
      role: 'bot',
      content: 'Perdón, tuve un problema al conectar con el servidor.',
      timestamp: new Date()
    }]);
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-700 text-white rounded-full shadow-2xl hover:bg-blue-800 transition-all flex items-center justify-center group"
      >
        {isOpen ? (
          <i className="fas fa-times text-2xl"></i>
        ) : (
          <div className="relative">
            <i className="fas fa-comment-dots text-3xl"></i>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-blue-700 p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
              <img 
                src="https://res.cloudinary.com/dr3m1e5wz/image/upload/v1740523425/logo_puertobandera.png" 
                alt="Logo" 
                className="w-full"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm">Puerto Bandera Bot</h4>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-[10px] opacity-80 uppercase tracking-wider">En línea</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.content}
                  <div className={`text-[9px] mt-1 opacity-60 text-right`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe un mensaje..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:bg-slate-300 transition-all hover:bg-blue-800"
            >
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
