import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'impressum' | 'datenschutz') => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle resize - close menu if switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      // If on a legal page, go home first, then scroll
      if (currentPage !== 'home') {
        onNavigate('home');
        // Wait a tick for home to render before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Start', href: '#home' },
    { name: 'Über mich', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Ablauf', href: '#process' },
    { name: 'Preise', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled || currentPage !== 'home'
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-2 border-brand-light'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <button onClick={() => onNavigate('home')} className="group z-50 relative flex items-center gap-4 text-left">
          <img
            src="icon512.png"
            alt="Juline Walch Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <div className={`flex flex-col justify-center transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -translate-x-4' : 'opacity-100'}`}>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark tracking-wide group-hover:opacity-80 transition-opacity leading-none mb-0.5">
              Juline Walch
            </h1>
            <span className="block text-[10px] md:text-[11px] font-sans font-bold text-brand-primary tracking-[0.2em] uppercase group-hover:text-brand-dark transition-colors">
              Pferdephysiotherapie München
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Nav Container with Glass Effect */}
          <nav className="flex items-center bg-white/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/40 shadow-sm mr-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-brand-dark/80 hover:text-brand-dark transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-brand-primary transform -translate-x-1/2 group-hover:w-1/3 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-full"></span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick('#contact')}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
              ${(isScrolled || currentPage !== 'home') ? 'bg-brand-dark text-white hover:bg-brand-primary' : 'bg-brand-dark text-white hover:bg-brand-primary'}
            `}
          >
            <Calendar size={16} />
            <span>Termin anfragen</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-dark p-2 hover:bg-brand-light/50 rounded-lg transition-colors z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay - Portaled to body to avoid stacking context issues */}
      {createPortal(
        <div
          className={`fixed inset-0 z-40 flex justify-end ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          {/* Backdrop - Fades in */}
          <div
            className={`absolute inset-0 bg-brand-dark/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer - Slides in from right */}
          <div
            className={`relative w-full max-w-[320px] bg-brand-cream h-full shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col h-full p-8 pt-28 overflow-y-auto">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
                    className={`text-left text-2xl font-serif font-bold text-brand-dark hover:text-brand-primary transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              <div className="w-full h-px bg-brand-dark/10 my-8"></div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="flex justify-center items-center gap-2 bg-brand-dark text-white px-6 py-4 rounded-xl font-medium shadow-lg hover:bg-brand-primary active:scale-95 transition-all"
                >
                  <Calendar size={20} />
                  <span>Termin anfragen</span>
                </button>
                <a
                  href="tel:+4915156930990"
                  className="flex justify-center items-center gap-2 border border-brand-dark/20 text-brand-dark px-6 py-4 rounded-xl font-medium hover:bg-white active:scale-95 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone size={20} />
                  <span>Anrufen</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};