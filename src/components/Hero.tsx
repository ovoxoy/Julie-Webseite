import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-20 bg-brand-cream">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="space-y-8 max-w-4xl">
          <div className="inline-block bg-brand-accent/20 text-brand-dark px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
            Mobil im Raum München
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark leading-tight">
            Bewegung ist <br />
            <span className="text-brand-primary">Lebensqualität.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-2xl mx-auto">
            Ganzheitliche Pferdephysiotherapie und Dorntherapie.
            Ich helfe Ihrem Partner Pferd dabei, schmerzfrei, losgelassen und leistungsfähig zu werden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a
              href="#contact"
              className="group bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-primary transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Termin vereinbaren
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-medium border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all text-center"
            >
              Leistungen entdecken
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};