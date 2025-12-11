import React from 'react';
import { Clock, MapPin, Heart, Calculator, Info } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Konditionen</h2>
          <h3 className="text-4xl font-serif font-bold text-brand-dark mb-6">Preise & Abrechnung</h3>
          <p className="text-gray-600">
            Faire Preise für individuelle Betreuung. Die Abrechnung erfolgt transparent nach Zeitaufwand.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Main Price Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-light flex flex-col">
                <div className="p-8 md:p-10 flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-dark">Behandlung</h4>
                            <p className="text-sm text-gray-500">Physiotherapie & manuelle Therapie</p>
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl font-serif font-bold text-brand-dark">70 € - 105 €</span>
                    </div>
                    <p className="text-brand-primary font-medium mb-8 bg-brand-primary/5 inline-block px-3 py-1 rounded-full text-sm">
                        Dauer: ca. 60 - 90 Minuten
                    </p>
                    
                    <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                        <p>
                            Für eine faire und individuelle Betreuung berechne ich nach Zeit. 
                            Kürzere Nachbehandlungen werden <strong>anteilig abgerechnet</strong>, 
                            so zahlst du nur das, was dein Pferd wirklich benötigt.
                        </p>
                    </div>

                    <div className="bg-brand-cream rounded-2xl p-6 border border-brand-light/50 flex gap-4">
                        <Heart className="text-brand-accent shrink-0 mt-1" size={24} />
                        <div>
                            <h5 className="font-bold text-brand-dark mb-1">Qualität vor Zeitdruck</h5>
                            <p className="text-sm text-gray-600 italic">
                                "Im Mittelpunkt steht für mich immer die Qualität der Behandlung. Eine Sitzung endet nicht nach einer festen Minute, sondern dann, wenn dein Pferd optimal versorgt ist oder eine Pause benötigt."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Info Cards */}
            <div className="flex flex-col gap-6">
                
                {/* Anfahrt */}
                <div className="bg-white p-8 rounded-3xl shadow-md border border-brand-light flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-accent/20 rounded-lg text-brand-dark">
                            <MapPin size={20} />
                        </div>
                        <h4 className="font-bold text-brand-dark">Anfahrt</h4>
                    </div>
                    <div className="mb-4">
                        <span className="text-3xl font-serif font-bold text-brand-dark">0,40 €</span>
                        <span className="text-sm text-gray-500 block">pro doppeltem Kilometer</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Die Anfahrtskosten berechnen sich ab meinem Standort. 
                        <br/><br/>
                        <span className="flex items-center gap-2 text-brand-primary font-medium">
                            <Info size={16} />
                            Tipp:
                        </span>
                        Bei mehreren Pferden am gleichen Standort wird die Anfahrt anteilig berechnet.
                    </p>
                </div>

                {/* CTA Mini */}
                <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-lg text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="font-serif font-bold text-xl mb-2">Fragen zur Abrechnung?</h4>
                        <p className="text-brand-light/70 text-sm mb-6">
                            Ich berate dich gerne unverbindlich vor deinem ersten Termin.
                        </p>
                        <a href="#contact" className="inline-block w-full py-3 bg-white text-brand-dark font-bold rounded-xl hover:bg-brand-light transition-colors">
                            Kontakt aufnehmen
                        </a>
                    </div>
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};