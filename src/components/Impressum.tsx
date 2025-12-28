import React, { useEffect } from 'react';

export const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 bg-white text-brand-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-8 text-brand-dark">Impressum</h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Juline Walch</p>
            <p>Pferdephysiotherapie</p>
            <p>Grubenstraße 18</p>
            <p>82319 Starnberg</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Kontakt</h2>
            <p>Telefon: +49 1515 6930990</p>
            <p>E-Mail: [info@pferdephysiotherapie-muenchen.de]</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>[DE123456789] (Falls vorhanden, sonst diesen Abschnitt löschen)</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Angaben zur Berufshaftpflichtversicherung</h2>
            <p><strong>Name und Sitz des Versicherers:</strong></p>
            <p>[Name der Versicherung]</p>
            <p>[Anschrift der Versicherung]</p>
            <p><strong>Geltungsraum der Versicherung:</strong> Deutschland</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <h2 className="text-xl font-bold mb-4">Haftungsausschluss (Disclaimer)</h2>

            <h3 className="font-bold mt-4">Haftung für Inhalte</h3>
            <p className="mb-2">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

            <h3 className="font-bold mt-4">Haftung für Links</h3>
            <p className="mb-2">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

            <h3 className="font-bold mt-4">Urheberrecht</h3>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};