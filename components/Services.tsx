import React from 'react';
import { Activity, Move, Search, ClipboardCheck, Layers, Droplets } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Manuelle Therapie',
    description: 'Mobilisation von Gelenken und Lösung von Blockaden zur Wiederherstellung der vollen Bewegungsfreiheit. Unterstützung beim Muskelaufbau und beheben von Fehlstellungen und -haltungen',
    iconName: 'Move'
  },
  {
    id: '2',
    title: 'Kinesiotaping',
    description: 'Unterstützung von Muskulatur, Faszien und Gelenken durch elastische Tapeanlagen – zur Schmerzreduktion und Stabilisierung nach der Behandlung.',
    iconName: 'Layers'
  },
  {
    id: '3',
    title: 'Dornmethode',
    description: 'Eine effektive Methode zur Korrektur von Blockaden im Bereich der Wirbelsäule und der großen Gelenke. Besonders hilfreich bei Asymmetrien, Schiefen oder Statikproblemen.',
    iconName: 'Activity'
  },
  {
    id: '4',
    title: 'Lymphdrainage',
    description: 'Sanfte Griffe unterstützen den Abfluss von Gewebsflüssigkeit und reduzieren Schwellungen. Auch bei Stoffwechselproblemen, angelaufenen Beinen oder chronischen Lymphstauungen sehr effektiv.',
    iconName: 'Droplets'
  },
  {
    id: '5',
    title: 'Reha-Planung',
    description: 'Begleitung nach Verletzungen oder Operationen sowie bei chronischen Problemen mit derm Ziel kontrolliert die Belastung zu steigern, funktionelle Bewegungsmuster zu verbessern und die Regeneration nachhaltig zu gestalten.',
    iconName: 'ClipboardCheck'
  },
  {
    id: '6',
    title: 'Physiotherapeutische Training- und Turnierbegleitung',
    description: 'Professionelle Betreuung direkt vor Ort zur körperlichen Unterstützung für optimale Leistung und gesunden Trainingsfortschritt.',
    iconName: 'ClipboardCheck'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  Move: Move,
  Layers: Layers,
  Activity: Activity,
  Droplets: Droplets,
  Search: Search,
  ClipboardCheck: ClipboardCheck
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Leistungsspektrum</h2>
          <h3 className="text-4xl font-serif font-bold text-brand-dark mb-6">Therapieangebote</h3>
          <p className="text-gray-600">
            Jede Behandlung wird individuell auf die Bedürfnisse Ihres Pferdes abgestimmt. 
            Mein Ziel ist es, akute Reaktionen zu unterstützen und Gesundheit bis ins späte Alter zu fördern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-brand-primary/20 group"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3 font-serif">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-brand-dark text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           {/* Abstract Circles for decoration */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl"></div>
           
           <div className="relative z-10">
             <h4 className="text-2xl font-serif font-bold mb-2">Unsicher, was Ihr Pferd braucht?</h4>
             <p className="text-brand-light opacity-90">Lassen Sie uns bei einem Erstgespräch die optimale Therapie finden.</p>
           </div>
           <a href="#contact" className="relative z-10 whitespace-nowrap bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-accent transition-colors">
             Kontakt aufnehmen
           </a>
        </div>
      </div>
    </section>
  );
};