import React from 'react';
import { Award, GraduationCap, ScrollText, Activity } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full bg-brand-light rounded-2xl z-0"></div>
            <img
              src="about.jpg"
              alt="Juline Walch bei der Arbeit"
              className="relative z-10 rounded-2xl shadow-xl w-full h-[600px] object-cover rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase">Über Mich</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-dark">Juline Walch,</h3>
            <p className="text-gray-600 leading-relaxed">
              Als mobile Pferdephysiotherapeutin im Raum München arbeite ich mit besonderem Interesse an der funktionellen Biomechanik des Pferdes. Durch mein laufendes Tiermedizinstudium und viele Jahre im dressurorientierten Training habe ich ein gutes Gefühl dafür entwickelt, wie Muskulatur, Körperhaltung und Bewegungsabläufe zusammenwirken.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ich arbeite ruhig, sorgfältig und mit viel Feingefühl für jedes Pferd. Eine genaue Analyse gehört für mich immer dazu, um erst zu verstehen, dann gezielt zu behandeln.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">

              {/* Qualifikation 1 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-lg text-brand-primary shrink-0 mt-1">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Zertifizierte Ausbildung</h4>
                  <p className="text-sm text-gray-600 mt-1">Pferdephysiotherapie</p>
                </div>
              </div>

              {/* Qualifikation 2 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-lg text-brand-primary shrink-0 mt-1">
                  <Activity size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Zusatzausbildung</h4>
                  <p className="text-sm text-gray-600 mt-1"> Dorntherapie für Pferde</p>
                </div>
              </div>

              {/* Qualifikation 3 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-lg text-brand-primary shrink-0 mt-1">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Studium</h4>
                  <p className="text-sm text-gray-600 mt-1"> Tiermedizin an der LMU München</p>
                </div>
              </div>

              {/* Qualifikation 4 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-lg text-brand-primary shrink-0 mt-1">
                  <ScrollText size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Abschlussarbeit</h4>
                  <p className="text-sm text-gray-600 mt-1 leading-snug">
                    Physiotherapeutische Maßnahmen in Bezug auf die muskuläre Biomechanik zur Verbesserung der Rittigkeit und Leistungsfähigkeit von Dressurpferden
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};