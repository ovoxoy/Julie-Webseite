import React, { useEffect } from 'react';

export const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 bg-white text-brand-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold mb-8 text-brand-dark">Datenschutzerklärung</h1>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-brand-primary">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-bold mt-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <h3 className="text-lg font-bold mt-4">Datenerfassung auf dieser Website</h3>
            <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>

            <p className="mt-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

            <p className="mt-2"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Wenn Sie uns per Kontaktformular anfragen, nutzen wir die Daten zur Bearbeitung Ihrer Anfrage.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-brand-primary">2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <h3 className="text-lg font-bold mt-2">Externes Hosting</h3>
            <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            <p>Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-brand-primary">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-lg font-bold mt-2">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

            <h3 className="text-lg font-bold mt-4">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              Juline Walch<br />
              [Musterstraße 1]<br />
              [80000 München]
            </p>
            <p className="mt-2">
              Telefon: +49 1515 6930990<br />
              E-Mail: [info@juline-walch.de]
            </p>

            <h3 className="text-lg font-bold mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-brand-primary">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-bold mt-2">Kontaktformular (via Formspree)</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p>
            <p>Wir nutzen für den Versand des Formulars den Dienstleister <strong>Formspree</strong> (Formspree, Inc, 21750 Hardy Oak Blvd San Antonio, TX 78258, USA). Formspree speichert die Daten, die Sie in das Formular eingeben, um sie uns per E-Mail zuzustellen. Hinweise zum Datenschutz von Formspree finden Sie hier: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-brand-primary underline">https://formspree.io/legal/privacy-policy</a>.</p>
            <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

            <h3 className="text-lg font-bold mt-4">Anfragen per E-Mail, Telefon oder Telefax</h3>
            <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-brand-primary">5. Plugins und Tools</h2>
            <h3 className="text-lg font-bold mt-2">Google Fonts</h3>
            <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer einheitlichen und ansprechenden Darstellung seines Online-Angebots.</p>
          </div>
        </div>
      </div>
    </section>
  );
};