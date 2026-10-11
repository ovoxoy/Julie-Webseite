import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
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
            <Process />
            <Pricing />
            <Reviews />
            <Gallery />
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