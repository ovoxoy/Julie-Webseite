import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

// Formspree ID hier hinterlegt:
const FORMSPREE_ID = "mvgjpjyj";

const Instagram = ({ size = 24, className, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
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
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', location: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-3">Kontakt</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">Lassen Sie uns sprechen.</h3>
              <p className="text-brand-light/80 text-lg leading-relaxed">
                Ich freue mich darauf, Sie und Ihr Pferd kennenzulernen. Rufen Sie mich an oder schreiben Sie mir eine Nachricht für einen Termin.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="p-3 bg-brand-accent/20 rounded-full text-brand-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefon & WhatsApp</h4>
                  <a href="tel:+4915156930990" className="text-brand-light hover:text-white transition-colors text-xl block mb-3">
                    +49 1515 6930990
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=4915156930990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg text-sm font-medium group"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Direkt WhatsApp schreiben</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="p-3 bg-brand-accent/20 rounded-full text-brand-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Erreichbarkeit</h4>
                  <p className="text-brand-light">Mo - Fr: 08:00 - 18:00 Uhr</p>
                  <p className="text-brand-light">Sa: Nach Vereinbarung</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="p-3 bg-brand-accent/20 rounded-full text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Einsatzgebiet</h4>
                  <p className="text-brand-light">Raum München & mobile Fahrpraxis.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/pferdephysiotherapie.muenchen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-brand-accent transition-colors"
              >
                <Instagram size={24} />
              </a>

              <a href="mailto:info@pferdephysiotherapie-muenchen.de" className="p-3 bg-white/10 rounded-full hover:bg-brand-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-brand-cream text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {status === 'success' ? (
              <div className="bg-brand-cream z-10 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up w-full h-full min-h-[200px]">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-brand-dark mb-2">Vielen Dank!</h4>
                <p className="text-gray-600 mb-6">
                  Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich schnellstmöglich bei Ihnen.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-brand-primary font-bold hover:text-brand-dark underline decoration-2 underline-offset-4"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-2xl font-serif font-bold mb-6">Nachricht senden</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold uppercase tracking-wide text-gray-500">Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wide text-gray-500">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        placeholder="Ihre Nummer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wide text-gray-500">Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      placeholder="Ihre E-Mail-Adresse"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-bold uppercase tracking-wide text-gray-500">Standort des Pferdes *</label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      placeholder="PLZ / Ort"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-wide text-gray-500">Nachricht *</label>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                      placeholder="Wie kann ich Ihnen helfen?"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                      <AlertCircle size={16} />
                      <span>Es gab einen Fehler. Bitte versuchen Sie es erneut oder rufen Sie an.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition-colors shadow-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Wird gesendet...
                      </>
                    ) : 'Anfrage absenden'}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Pflichtfelder sind mit * markiert. Ihre Daten werden vertraulich behandelt.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};