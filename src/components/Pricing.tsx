import React from 'react';
import { Clock, MapPin, Heart, Info, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-12 md:py-24 bg-brand-light/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/50 text-brand-dark text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={14} className="text-brand-primary" />
            <span>Konditionen</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            Preise & Abrechnung
          </h3>
          <p className="text-gray-600 text-base md:text-lg">
            Faire, transparente und nachvollziehbare Abrechnung nach tatsächlichem Zeitaufwand – ohne künstlichen Zeitdruck für Ihr Pferd.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">

          {/* Hauptpreiskarte */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-light/70 flex flex-col justify-between">
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                    <Clock size={26} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-brand-dark">Ganzheitliche Behandlung</h4>
                    <p className="text-sm text-gray-500">Pferdephysiotherapie, Dorntherapie & Reha</p>
                  </div>
                </div>

                <span className="bg-brand-primary/10 text-brand-primary text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Transparent & Fair
                </span>
              </div>

              {/* Preisübersicht */}
              <div className="bg-brand-cream/60 rounded-2xl p-4 sm:p-6 border border-brand-light/60 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { minutes: 60, price: 70 },
                    { minutes: 70, price: 80 },
                    { minutes: 80, price: 90 },
                    { minutes: 90, price: 100 },
                  ].map(({ minutes, price }) => (
                    <div key={minutes} className="flex flex-col items-center gap-0.5 rounded-xl bg-white px-2 py-2.5 text-center sm:flex-row sm:justify-between sm:gap-2 sm:px-3">
                      <span className="text-xs font-medium text-gray-600 sm:text-sm">{minutes} Min.</span>
                      <span className="whitespace-nowrap font-serif text-lg font-bold text-brand-dark">{price} €</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600">Materialkosten bis zu 20 €</p>
              </div>

              {/* Erläuterungstext aus der Skizze */}
              <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                <p>
                  Jede Behandlung ist individuell. Ich gestalte sie ganz nach Ihrem Pferd, dessen Körpersprache und dem, was dem Pferd im Moment guttut.
                </p>
                <p>
                  Kürzere Nachbehandlungen oder intensive Spezialeinheiten werden <strong>nach tatsächlichem Zeitaufwand</strong> abgerechnet.
                </p>
              </div>

              {/* Qualität vor Zeitdruck Box */}
              <div className="bg-brand-light/20 rounded-2xl p-6 border border-brand-light/60 flex items-start gap-4">
                <Heart className="text-brand-primary shrink-0 mt-1" size={24} />
                <div>
                  <h5 className="font-bold text-brand-dark mb-1 text-sm md:text-base">Qualität vor Zeitdruck</h5>
                  <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
                    „Im Mittelpunkt steht für mich immer die Qualität der Behandlung. Eine Sitzung endet nicht nach einer festen Minute, sondern dann, wenn Ihr Pferd optimal versorgt ist und der Körper die Impulse bestmöglich verarbeiten kann.“
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Neben-Karten: Anfahrt & Kontakt */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Anfahrt Karte */}
            <div className="bg-white p-8 rounded-3xl shadow-md border border-brand-light/70 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-brand-accent/20 rounded-xl text-brand-dark">
                    <MapPin size={22} />
                  </div>
                  <h4 className="font-bold text-xl font-serif text-brand-dark">Anfahrt</h4>
                </div>

                <div className="mb-4 bg-brand-cream/50 p-4 rounded-2xl border border-brand-light/60">
                  <span className="text-3xl font-serif font-bold text-brand-dark">0,50 €</span>
                  <span className="text-xs text-gray-500 block mt-1">pro gefahrenem Kilometer</span>
                  <span className="text-xs text-gray-500 block mt-1">(ab 82319 Starnberg)</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Die Anfahrtskosten berechnen sich transparent ab Starnberg.
                </p>
              </div>

              <div className="bg-brand-light/30 p-4 rounded-xl border border-brand-light/80 text-xs text-gray-700 flex items-start gap-2.5">
                <Info size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Stall-Tipp:</strong> Bei mehreren Pferden am selben Stall oder auf einer Sammeltour teilt sich die Anfahrt fair unter allen Besitzern auf.
                </span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-xl text-center relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-serif font-bold text-xl mb-2">Fragen zur Abrechnung?</h4>
                <p className="text-brand-light/80 text-xs md:text-sm mb-6 leading-relaxed">
                  Gerne besprechen wir den voraussichtlichen Umfang unverbindlich vor Ihrem ersten Termin.
                </p>
                <a
                  href="#contact"
                  className="inline-block w-full py-3.5 bg-white text-brand-dark font-bold text-sm rounded-xl hover:bg-brand-accent transition-all shadow-md active:scale-95"
                >
                  Kontaktieren Sie mich
                </a>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-20 rounded-full blur-2xl transform translate-x-10 -translate-y-10 pointer-events-none"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
