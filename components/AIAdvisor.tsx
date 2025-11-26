import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { generateHorseCareAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hallo! Ich bin der KI-Assistent von Juline. Haben Sie eine allgemeine Frage zur Pferdegesundheit oder unseren Leistungen?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await generateHorseCareAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Entschuldigung, ich bin gerade nicht erreichbar.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 border border-brand-light overflow-hidden flex flex-col max-h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-dark text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-brand-accent" />
              <span className="font-bold">Pferde-Health Assistent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-brand-accent transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/50 h-80">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-white rounded-br-none' 
                      : 'bg-white border border-gray-100 shadow-sm text-gray-700 rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ihre Frage..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-brand-dark text-white p-2 rounded-full hover:bg-brand-primary disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
          <div className="bg-gray-50 text-[10px] text-gray-400 text-center py-1">
            KI kann Fehler machen. Bei Notfällen Tierarzt rufen.
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-dark text-white p-4 rounded-full shadow-lg hover:bg-brand-primary hover:scale-105 transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-brand-dark px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Frage stellen?
          </span>
        )}
      </button>
    </div>
  );
};