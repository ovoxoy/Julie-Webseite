import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  variant = 'dark'
}) => {
  const [imageError, setImageError] = useState(false);

  // If a custom logo file is placed in /logo.png or /logo.svg, it will load. Otherwise, fallback to the stylized 3-horses SVG.
  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {!imageError ? (
        <img
          src="/icon512.png"
          alt="Juline Walch Logo"
          className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Stylized running horses vector emblem matching the sketch */
        <div className="relative flex items-center justify-center h-12 md:h-14 w-14 md:w-16 rounded-xl bg-brand-light/30 border border-brand-light p-1.5 transition-transform duration-300 group-hover:scale-105 shadow-sm">
          <svg
            viewBox="0 0 100 65"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horse 3 (Background left) */}
            <path
              d="M15 42C18 36 22 30 26 25C29 21 34 18 38 19C42 20 44 24 45 28C43 32 40 37 36 40C32 43 24 45 15 42Z"
              fill="#8DA3CE"
              opacity="0.85"
            />
            <path
              d="M26 25C25 21 27 16 30 14C33 12 36 14 35 18C33 22 30 25 26 25Z"
              fill="#8DA3CE"
            />
            {/* Horse 2 (Center) */}
            <path
              d="M32 46C37 38 43 31 51 26C56 22 62 19 68 21C73 23 76 28 77 34C73 38 68 44 62 48C56 52 44 51 32 46Z"
              fill="#3F5B92"
            />
            <path
              d="M51 26C50 20 53 14 58 11C62 9 66 11 65 16C62 21 57 25 51 26Z"
              fill="#3F5B92"
            />
            {/* Horse 1 (Foreground right galloping) */}
            <path
              d="M52 52C58 43 66 35 76 29C83 25 90 23 96 26C100 29 101 35 99 42C94 48 87 54 78 57C69 60 59 58 52 52Z"
              fill="#21304D"
            />
            <path
              d="M76 29C75 22 79 16 85 12C90 10 94 12 93 18C89 24 83 28 76 29Z"
              fill="#21304D"
            />
            {/* Gallop motion stroke */}
            <path
              d="M10 52C35 56 65 57 95 48"
              stroke="#3F5B92"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`text-xl md:text-2xl font-serif font-bold tracking-wide leading-none mb-1 transition-colors ${
              variant === 'light' ? 'text-white' : 'text-brand-dark group-hover:text-brand-primary'
            }`}
          >
            Juline Walch
          </span>
          <span
            className={`block text-[9px] md:text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-colors ${
              variant === 'light'
                ? 'text-brand-accent'
                : 'text-brand-primary group-hover:text-brand-dark'
            }`}
          >
            Pferdephysiotherapie München
          </span>
        </div>
      )}
    </div>
  );
};
