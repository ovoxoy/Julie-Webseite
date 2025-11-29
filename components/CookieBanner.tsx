
import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

interface CookieBannerProps {
  onNavigate: (page: 'home' | 'impressum' | 'datenschutz') => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Prüfen, ob bereits eine Entscheidung getroffen wurde
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Kurze Verzögerung für eine angenehmere User Experience beim Laden
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Hier könnten später Analytics-Skripte initialisiert werden
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center items-end pointer-events-none">
      <div className="bg-white/95 backdrop-blur-md border border-brand-light shadow-2xl rounded-2xl max-w-4xl w-full p-6 pointer-events-auto transform transition-all duration-500 ease-out animate-fade-in-up">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          
          {/* Icon Area */}
          <div className="hidden md:flex items-center justify-center bg-brand-cream p-4 rounded-full text-brand-primary shrink-0">
            <Cookie size={32} />
          </div>

          {/* Text Area */}
          <div className="flex-grow space-y-2">
            <h4 className="text-lg font-serif font-bold text-brand-dark flex items-center gap-2">
              <span className="md:hidden text-brand-primary"><Cookie size={20}/></span>
              Cookies & Datenschutz
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. 
              Weitere Informationen finden Sie in unserer <button onClick={() => onNavigate('datenschutz')} className="text-brand-primary underline hover:text-brand-dark font-medium">Datenschutzerklärung</button>.
            </p>
          </div>

          {/* Buttons Area */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button 
              onClick={handleDecline}
              className="px-5 py-2.5 rounded-lg border-2 border-gray-200 text-gray-600 font-medium hover:border-brand-dark hover:text-brand-dark transition-colors text-sm whitespace-nowrap"
            >
              Nur Essenzielle
            </button>
            <button 
              onClick={handleAccept}
              className="px-6 py-2.5 rounded-lg bg-brand-dark text-white font-medium hover:bg-brand-primary transition-colors shadow-lg text-sm whitespace-nowrap flex items-center justify-center gap-2"
            >
              <ShieldCheck size={16} />
              Akzeptieren
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
