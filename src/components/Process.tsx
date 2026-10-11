import React from 'react';
import { Sparkles, MessageSquare, Eye, HeartPulse, Stethoscope, MessageCircle } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.FC<any>;

}

export const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Anamnese',
      desc: 'Ausführliches Vorgespräch, Krankengeschichte und Sichtung aller vorhandenen tierärztlichen Befunde.',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Ganganalyse',
      desc: 'Beurteilung des Pferdes im Stand, auf hartem und weichem Boden sowie in der Bewegung an der Longe oder an der Hand.',
      icon: Eye
    },
    {
      step: '03',
      title: 'Palpation',
      desc: 'Gründliches Abtasten des gesamten Pferdekörpers, Aufspüren von muskulären Verspannungen, Schmerzpunkten und Faszienverklebungen.',
      icon: HeartPulse,

    },
    {
      step: '04',
      title: 'Behandlung',
      desc: 'Individuell abgestimmte physiotherapeutische Behandlung (manuelle Mobilisation, Dorntherapie, Faszien- oder Nadeltherapie).',
      icon: Stethoscope,
    },
    {
      step: '05',
      title: 'Nachbesprechung',
      desc: 'Abschlussgespräch, Klärung aller offenen Fragen sowie maßgeschneiderte Hausaufgaben und Trainings- bzw. Ruheempfehlungen.',
      icon: MessageCircle
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/40 text-brand-dark text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={14} className="text-brand-primary" />
            <span>Der Ablauf</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            So arbeite ich
          </h3>
          <p className="text-gray-600">
            Ein strukturierter, ruhiger und ganzheitlicher Behandlungsablauf für das beste Wohlbefinden Ihres Pferdes.
          </p>
        </div>

        {/* 5-Schritte Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-brand-cream/50 rounded-3xl p-6 border border-brand-light/70 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-serif font-bold text-brand-accent/50 group-hover:text-brand-primary transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold font-serif text-brand-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
