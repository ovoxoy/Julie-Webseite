import React from 'react';
import { Activity, Move, Layers, Droplets, ClipboardCheck, Target, Trophy, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Manuelle Therapie',
    description: 'Mobilisation von Gelenken und Lösung von Blockaden zur Wiederherstellung der vollen Bewegungsfreiheit. Gezielte Unterstützung beim gesunden Muskelaufbau und Behebung von Fehlhaltungen.',
    iconName: 'Move',
    badge: 'Basis'
  },
  {
    id: '2',
    title: 'Kinesiotaping',
    description: 'Unterstützung von Muskulatur, Faszien und Sehnenapparat durch elastische Tapeanlagen – zur gezielten Schmerzreduktion, Tonusregulierung und Stabilisierung nach der Behandlung.',
    iconName: 'Layers',
  },
  {
    id: '3',
    title: 'Dornmethode',
    description: 'Sanfte und dynamische Korrektur von Fehlstellungen im Bereich der Wirbelsäule und der großen Gelenke. Besonders wirksam bei Asymmetrien, Beckenschiefstand und Blockaden.',
    iconName: 'Activity',
  },
  {
    id: '4',
    title: 'Dry Needling',
    description: 'Gezielte Behandlung myofaszialer Triggerpunkte mit feinsten Akupunkturnadeln. Löst tiefsitzende Muskelverspannungen, verbessert die Durchblutung und stellt die Elastizität wieder her.',
    iconName: 'Target',
    badge: 'Neu'
  },
  {
    id: '5',
    title: 'Lymphdrainage',
    description: 'Sanfte Grifftechniken zur Unterstützung des Lymphflusses und zum Abbau von Schwellungen. Sehr effektiv bei Stoffwechselproblemen, angelaufenen Beinen oder nach Verletzungen.',
    iconName: 'Droplets',
  },
  {
    id: '6',
    title: 'Reha-Planung',
    description: 'Ganzheitliche Begleitung nach Operationen oder Verletzungen. Individueller Aufbauplan zur kontrollierten Belastungssteigerung und nachhaltigen Wiederherstellung der Bewegungsfreude.',
    iconName: 'ClipboardCheck',
  },
  {
    id: '7',
    title: 'Physiotherapeutisches Training & Medical Training',
    description: 'Funktionelles Aufbautraining abgestimmt auf die Biomechanik des Pferdes. Stangentreten, Faszientraining und gezielte Übungen für Trageerschöpfung, Rückenmuskulatur und Koordination.',
    iconName: 'Activity',
    badge: 'Fokus'
  },
  {
    id: '8',
    title: 'Turnier- & Trainingsbegleitung',
    description: 'Professionelle physiotherapeutische Betreuung direkt vor Ort am Stall oder Turnier zur optimalen Vorbereitung, Leistungsoptimierung und schnellen Regeneration.',
    iconName: 'Trophy',
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Move,
  Layers,
  Activity,
  Droplets,
  ClipboardCheck,
  Target,
  Trophy
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/50 text-brand-dark text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={14} className="text-brand-primary" />
            <span>Leistungsspektrum</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
            Therapieangebote
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Jede Behandlung wird individuell auf die Bedürfnisse Ihres Pferdes abgestimmt. Mein Ziel ist es, Durchlässigkeit, Wohlbefinden und Gesundheit des Pferdes nachhaltig zu fördern.
          </p>
        </div>

        {/* Grid der Therapieangebote ohne Bild-Platzhalter */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.iconName] || Activity;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light/60 hover:border-brand-primary/30 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-xs">
                      <Icon size={22} />
                    </div>
                    {service.badge && (
                      <span className="bg-brand-cream border border-brand-light/70 text-brand-dark text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark font-serif mb-2.5 leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-brand-dark text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <h4 className="text-2xl md:text-3xl font-serif font-bold mb-2">Unsicher, was Ihr Pferd braucht?</h4>
            <p className="text-brand-light/90 text-sm md:text-base">
              Lassen Sie uns bei einem ersten Beratungsgespräch die optimale Therapiemethode für Ihr Pferd abstimmen.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 whitespace-nowrap bg-white text-brand-dark px-8 py-3.5 rounded-full font-bold hover:bg-brand-accent hover:text-brand-dark transition-all shadow-md active:scale-95"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
};