import React from 'react';
import { Heart, Award, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full bg-brand-light rounded-2xl z-0"></div>
            <img 
              src="https://pferdephysiotherapie-muenchen.de/wp-content/uploads/2025/08/IMG_1362.jpg" 
              alt="Juline Walch bei der Arbeit" 
              className="relative z-10 rounded-2xl shadow-xl w-full h-[600px] object-cover rotate-2 hover:rotate-0 transition-transform duration-700"
            />
            
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase">Über Mich</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-dark">Juline Walch</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Die Leidenschaft für Pferde begleitet mich schon mein ganzes Leben. Als zertifizierte Pferdephysiotherapeutin und Dorntherapeutin habe ich es mir zur Aufgabe gemacht, Gesundheit und Wohlbefinden unserer Vierbeiner nachhaltig zu verbessern.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Meine Arbeit basiert auf Ruhe, Geduld und fundiertem Fachwissen. Ich betrachte nicht nur das einzelne Symptom, sondern das Pferd als Ganzes – inklusive Ausrüstung, Training und Haltung.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center text-center p-4 bg-brand-light/30 rounded-lg">
                <div className="bg-brand-primary/10 p-3 rounded-full mb-3 text-brand-primary">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-brand-dark">Zertifiziert</h4>
                <p className="text-sm text-gray-500">Fundierte Ausbildung</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-brand-light/30 rounded-lg">
                <div className="bg-brand-primary/10 p-3 rounded-full mb-3 text-brand-primary">
                  <Heart size={24} />
                </div>
                <h4 className="font-bold text-brand-dark">Empathisch</h4>
                <p className="text-sm text-gray-500">Pro Pferd Einstellung</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-brand-light/30 rounded-lg">
                <div className="bg-brand-primary/10 p-3 rounded-full mb-3 text-brand-primary">
                  <Sparkles size={24} />
                </div>
                <h4 className="font-bold text-brand-dark">Modern</h4>
                <p className="text-sm text-gray-500">Neueste Techniken</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};