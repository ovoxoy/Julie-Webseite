import React from 'react';
import { Mail, ArrowUpRight, Phone } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: 'home' | 'impressum' | 'datenschutz') => void;
}

// Custom Instagram component to match Contact section style / avoid deprecation issues
const Instagram = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-brand-dark relative text-brand-light overflow-hidden pt-8 pb-5 md:pt-12 md:pb-6 border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 md:gap-8 md:mb-8">

          {/* Column 1: Brand & Desc (Span 5) */}
          <div className="md:col-span-5 space-y-3">
            <button onClick={() => onNavigate('home')} className="group text-left scale-90 origin-left">
              <Logo variant="light" />
            </button>
            <p className="text-brand-light/70 text-xs md:text-sm leading-relaxed max-w-sm">
              Ganzheitliche Therapie für Ihr Pferd mit Herz und Verstand. Mobil im Raum München und Umgebung.
            </p>
          </div>

          {/* Column 2: Navigation (Span 3) */}
          <div className="md:col-span-3">
            <h6 className="text-white font-semibold mb-2.5 md:mb-4 text-xs uppercase tracking-wider">Rechtliches</h6>
            <nav className="flex flex-col gap-2 md:gap-2.5 text-xs md:text-sm">
              <button
                onClick={() => onNavigate('impressum')}
                className="text-brand-light/70 hover:text-brand-accent transition-colors text-left flex items-center group w-fit"
              >
                <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-brand-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Impressum
              </button>
              <button
                onClick={() => onNavigate('datenschutz')}
                className="text-brand-light/70 hover:text-brand-accent transition-colors text-left flex items-center group w-fit"
              >
                <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-brand-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Datenschutz
              </button>
            </nav>
          </div>

          {/* Column 3: Contact (Span 4) */}
          <div className="md:col-span-4">
            <h6 className="text-white font-semibold mb-2.5 md:mb-4 text-xs uppercase tracking-wider">Kontakt</h6>
            <div className="space-y-2.5 text-xs md:text-sm">
              <a href="mailto:info@pferdephysiotherapie-muenchen.de" className="flex items-center gap-2.5 text-brand-light/70 hover:text-white transition-colors group">
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-brand-accent/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span>info@pferdephysiotherapie-muenchen.de</span>
              </a>
              <a href="tel:+4915156930990" className="flex items-center gap-2.5 text-brand-light/70 hover:text-white transition-colors group">
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-brand-accent/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span>+49 1515 6930990</span>
              </a>
              <a
                href="https://www.instagram.com/pferdephysiotherapie.muenchen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-brand-light/70 hover:text-white transition-colors group w-fit"
              >
                <div className="p-1.5 bg-white/5 rounded-lg group-hover:bg-brand-accent/20 transition-colors">
                  <Instagram size={16} />
                </div>
                <span>Pferdephysiotherapie Muenchen</span>
                <ArrowUpRight size={13} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-4 md:mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] md:text-xs text-brand-light/40">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Juline Walch. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-2">
            <span>Website umgesetzt von</span>
            <a
              href="https://www.klapf.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light/60 hover:text-brand-accent transition-colors flex items-center gap-1"
            >
              klapf.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};