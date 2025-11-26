import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark/95 text-brand-light py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-xl font-serif font-bold text-white mb-2">Juline Walch</h5>
            <p className="text-sm opacity-60">Pferdephysiotherapie mit Herz und Verstand.</p>
          </div>
          
          <div className="flex gap-6 text-sm font-medium tracking-wide">
             <a href="#" className="hover:text-brand-accent transition-colors">Impressum</a>
             <a href="#" className="hover:text-brand-accent transition-colors">Datenschutz</a>
             <a href="#" className="hover:text-brand-accent transition-colors">AGB</a>
          </div>
          
          <div className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} Juline Walch. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};