
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';
import { CookieBanner } from './components/CookieBanner';

type Page = 'home' | 'impressum' | 'datenschutz';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'impressum':
        return <Impressum />;
      case 'datenschutz':
        return <Datenschutz />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <About />
            <Services />
            
            {/* Process/Ablauf Section */}
            <section id="process" className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Der Ablauf</h2>
                  <h3 className="text-3xl font-serif font-bold text-brand-dark">So arbeite ich</h3>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Anamnese", desc: "Ausführliches Vorgespräch und Sichtung vorhandener Befunde." },
                    { step: "02", title: "Ganganalyse", desc: "Beurteilung des Pferdes im Stand und in der Bewegung." },
                    { step: "03", title: "Palpation", desc: "Abtasten des gesamten Pferdekörpers auf Verspannungen." },
                    { step: "04", title: "Behandlung", desc: "Individuelle Therapie und Erstellung eines Trainingsplans." }
                  ].map((item) => (
                    <div key={item.step} className="relative p-6 border-l-2 border-brand-light hover:border-brand-primary transition-colors">
                      <span className="text-5xl font-serif font-bold text-brand-light absolute -top-4 left-4 z-0 opacity-50">{item.step}</span>
                      <div className="relative z-10 pt-4">
                        <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <CookieBanner onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
