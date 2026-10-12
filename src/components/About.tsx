import React from 'react';
import { Award, GraduationCap, ScrollText, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const About: React.FC = () => {
  const primaryAboutImage = "/about1.png";
  const secondaryAboutImage = "/about2.jpeg";

  return (
    <section id="about" className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Bild-Bereich mit Platzhalter für Foto 1 */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Dekorative Hintergrund-Fläche */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-light/60 rounded-3xl z-0 transform -rotate-1"></div>

              {/* Hauptbild-Container */}
              <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden bg-white border border-brand-light/50 rotate-2 hover:rotate-0 transition-transform duration-700">
                <ImagePlaceholder
                  src={primaryAboutImage}
                  alt="Juline Walch mit Pferd"
                  label="Neues Bild: Juline Walch & Pferd"
                  hint="Foto 1 oder 2 aus der Skizze (Hochformat ca. 800 x 1000 px)"
                  height="h-[600px]"
                  className="h-[600px] w-full object-cover"
                />
              </div>

              {/* Optionales zweites Plätzchen für Foto */}
              <div className="absolute -bottom-6 -right-6 z-20 w-44 md:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-light bg-white hidden sm:block rotate-2 hover:rotate-0 transition-transform duration-700">
                <ImagePlaceholder
                  src={secondaryAboutImage}
                  alt="Einblick Praxis / Pferd"
                  label="Zweites Foto"
                  hint="Plätzchen für weiteres Foto"
                  height="h-44 md:h-52"
                />
              </div>
            </div>
          </div>

          {/* Text- & Qualifikationen-Bereich */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/40 text-brand-dark text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} className="text-brand-primary" />
              <span>Über Mich</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
              Juline Walch
            </h3>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Als mobile Pferdephysiotherapeutin im Raum München arbeite ich mit besonderem Interesse an der funktionellen Biomechanik des Pferdes. Durch mein laufendes Tiermedizinstudium und viele Jahre im dressurorientierten Training habe ich ein feines Gespür dafür entwickelt, wie Muskulatur, Körperhaltung und Bewegungsabläufe zusammenwirken.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Ich arbeite ruhig, sorgfältig und mit viel Feingefühl für jedes Pferd. Eine genaue Analyse gehört für mich immer dazu, um erst zu verstehen, dann gezielt und nachhaltig zu behandeln.
            </p>

            {/* Qualifikationen-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">

              {/* Qualifikation 1 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-2xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-xl text-brand-primary shrink-0 mt-0.5">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Zertifizierte Ausbildung</h4>
                  <p className="text-sm text-gray-600 mt-0.5">Pferdephysiotherapie</p>
                </div>
              </div>

              {/* Qualifikation 2 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-2xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-xl text-brand-primary shrink-0 mt-0.5">
                  <Activity size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Zusatzausbildung</h4>
                  <p className="text-sm text-gray-600 mt-0.5">Dorntherapie für Pferde</p>
                </div>
              </div>

              {/* Qualifikation 3 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-2xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-xl text-brand-primary shrink-0 mt-0.5">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Studium</h4>
                  <p className="text-sm text-gray-600 mt-0.5">Tiermedizin an der LMU München</p>
                </div>
              </div>

              {/* Qualifikation 4 */}
              <div className="flex items-start gap-4 p-4 bg-brand-light/20 rounded-2xl border border-transparent hover:border-brand-primary/20 transition-all">
                <div className="bg-brand-primary/10 p-2.5 rounded-xl text-brand-primary shrink-0 mt-0.5">
                  <ScrollText size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Abschlussarbeit</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                    Physiotherapeutische Maßnahmen in Bezug auf die muskuläre Biomechanik zur Verbesserung der Rittigkeit & Leistungsfähigkeit von Dressurpferden
                  </p>
                </div>
              </div>

            </div>

            {/* Extra Zeile mit mehr Einblicken / Zertifikaten (gemäß Skizze) */}
            <div className="mt-4 p-4 bg-brand-cream rounded-2xl border border-brand-light/60 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span className="font-medium text-brand-dark">Spezialisierung:</span>
                <span>Funktionelle Biomechanik & Dry Needling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span className="font-medium text-brand-dark">Fortbildungen:</span>
                <span>Laufende Weiterbildungen & Tiermedizin</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
