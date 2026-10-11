import React from 'react';
import { Camera } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  label?: string;
  hint?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video' | 'auto';
  height?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className = '',
  label = 'Bild hier einfügen',
  hint,
  aspectRatio = 'auto',
  height
}) => {
  if (src && src.trim() !== '') {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover ${className}`}
      />
    );
  }

  const aspectClass = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    video: 'aspect-video',
    auto: ''
  }[aspectRatio];

  return (
    <div
      className={`relative w-full ${aspectClass} ${height ? height : 'min-h-[160px]'} 
        bg-gradient-to-br from-brand-light/30 via-white to-brand-cream 
        border-2 border-dashed border-brand-accent/40 rounded-2xl 
        flex flex-col items-center justify-center p-6 text-center 
        transition-all duration-300 hover:border-brand-primary hover:bg-brand-light/40 group overflow-hidden ${className}`}
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-2 max-w-xs">
        <div className="w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
          <Camera size={22} />
        </div>
        <p className="font-medium text-xs md:text-sm text-brand-dark/80 group-hover:text-brand-dark transition-colors">
          {label}
        </p>
        {hint && (
          <span className="text-[11px] text-gray-500 bg-white/70 px-2.5 py-1 rounded-full border border-brand-light/60">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
};
