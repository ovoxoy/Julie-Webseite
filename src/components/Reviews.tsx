import React from 'react';
import { Star, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Dressurreiterin (Wallach Bella Vista)',
    content: 'Juline hat meinem Wallach nach einer langen Blockade im Lendenwirbelbereich unglaublich geholfen. Durch die Kombination aus manueller Therapie und Dornmethode lief er schon nach der ersten Behandlung spürbar losgelassener und zufriedener über den Rücken.',
    stars: 5,
    date: 'Vor 2 Wochen'
  },
  {
    id: '2',
    name: 'Maximilian K.',
    role: 'Freizeitreiter (Stute Fee)',
    content: 'Sehr professionell, ruhig und einfühlsam! Meine Stute ist bei fremden Menschen oft skeptisch, aber Juline hat sich viel Zeit genommen und sofort Vertrauen aufgebaut. Die biomechanischen Erklärungen waren für mich als Besitzer Gold wert.',
    stars: 5,
    date: 'Vor 1 Monat'
  },
  {
    id: '3',
    name: 'Elena R.',
    role: 'Springreiterin (Holsteinerhengst Casparo)',
    content: 'Große Empfehlung! Die Reha-Planung nach der Sehnenverletzung und das begleitende Kinesiotaping haben die Genesung enorm beschleunigt. Man merkt sofort das tiermedizinische Fachwissen.',
    stars: 5,
    date: 'Vor 2 Monaten'
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light/40 text-brand-dark text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles size={14} className="text-brand-primary" />
              <span>Erfahrungen & Feedback</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
              Google Bewertungen
            </h3>
          </div>

          {/* Google Rating Badge */}
          <a
            href="https://share.google/r4U1TKSv9a0P1aiiZ"
            target="_blank"
            rel="noopener noreferrer"
            title="Google Rezensionen ansehen"
            className="flex items-center gap-4 bg-brand-cream/80 border border-brand-light p-3.5 px-5 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-primary/40 transition-all group"
          >
            {/* Google 'G' icon */}
            <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-brand-dark text-lg leading-none">5,0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-gray-500 font-medium group-hover:text-brand-primary transition-colors">
                Ausgezeichnet auf Google Rezensionen &rarr;
              </span>
            </div>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-brand-cream/40 rounded-3xl p-8 border border-brand-light/70 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(review.stars || 5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  {review.date && (
                    <span className="text-xs text-gray-400 font-medium">{review.date}</span>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed text-sm md:text-base italic mb-6">
                  „{review.content}“
                </p>
              </div>

              <div className="pt-4 border-t border-brand-light/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{review.name}</h4>
                  <p className="text-xs text-brand-primary">{review.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-primary shadow-xs">
                  <MessageCircle size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Link / CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            Waren Sie bereits mit Ihrem Pferd bei mir in Behandlung?{' '}
            <a
              href="https://share.google/r4U1TKSv9a0P1aiiZ"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-primary hover:text-brand-dark underline decoration-brand-accent underline-offset-4 inline-flex items-center gap-1"
            >
              Jetzt Bewertung auf Google schreiben
              <ExternalLink size={13} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
