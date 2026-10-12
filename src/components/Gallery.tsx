import React from 'react';
import { MoveHorizontal, Sparkles } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface GalleryItem {
  id: string;
  src?: string;
}

export const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      src: '/gallery/gallery1.png'
    },
    {
      id: '2',
      src: '/gallery/gallery2.png'

    },
    {
      id: '3',
      src: '/gallery/gallery3.png'
    },
    {
      id: '4',
      src: '/gallery/gallery4.png'
    },
    {
      id: '5',
      src: '/gallery/gallery5.png'
    },
    {
      id: '6',
      src: '/gallery/gallery6.png'
    },
    {
      id: '7',
      src: '/gallery/gallery7.png'
    }
  ];

  return (
    <section id="gallery" className="py-12 md:py-24 bg-brand-cream/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/50 text-brand-dark text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles size={14} className="text-brand-primary" />
              <span>Einblicke</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-2">
              Galerie
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Momentaufnahmen aus dem Praxisalltag, Behandlungen und glücklichen Pferden.
            </p>
          </div>
        </div>

        <p className="mb-2 flex items-center justify-center gap-2 text-xs text-gray-500/70 md:hidden">
          <MoveHorizontal size={15} className="text-brand-primary/60" />
          Wischen für weitere Bilder
        </p>

        {/* Horizontale Scroll-Leiste ("Zum scrollen?") */}
        <div
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full shrink-0 sm:w-[320px] md:w-[350px] snap-start bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-light/70 flex flex-col group"
            >
              {/* Bild / Platzhalter */}
              <div className="relative overflow-hidden bg-brand-light/20">
                <ImagePlaceholder
                  src={item.src}
                  aspectRatio="portrait"
                  height="h-72 sm:h-80"
                />
              </div>

              {/* Bildunterschrift */}
              <div className="p-5 flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary mb-1">
                  Foto {index + 1} von {galleryItems.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
