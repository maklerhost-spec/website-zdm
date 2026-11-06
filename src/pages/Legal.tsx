import { COMPANY } from "../content";
import { PageHero } from "../components/Blocks";

export function Imprint() {
  const c = COMPANY;
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" text="Angaben gemäß § 5 DDG." />
      <section className="pb-24">
        <div className="wrap prose-legal max-w-3xl">
          <p className="!text-priel">{c.legal}<br />{c.street}<br />{c.zip} {c.city}</p>
          <h2>Vertreten durch die Gesellschafter</h2>
          <p>{c.owners}</p>
          <h2>Kontakt</h2>
          <p>Telefon: {c.phone}<br />E-Mail: {c.email}</p>
          <h2>Registereintrag</h2>
          <p>{c.register}</p>
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {c.vatId}</p>
          <h2>Erlaubnis und Aufsichtsbehörde</h2>
          <p>Erlaubnis nach § 34c Abs. 1 GewO (Immobilienmakler), erteilt durch die zuständige Behörde.<br />Aufsichtsbehörde: {c.authority}</p>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>{c.owners}, Anschrift wie oben.</p>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  const c = COMPANY;
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutz&shy;erklärung" text="Wie wir mit Ihren Daten umgehen, wenn Sie diese Website besuchen oder uns schreiben." />
      <section className="pb-24">
        <div className="wrap prose-legal max-w-3xl">
          <p className="rounded-2xl bg-reet/15 p-5 !text-priel">Entwurf: vor dem Livegang rechtlich prüfen lassen und an die tatsächlich genutzten Dienste anpassen.</p>
          <h2>1. Verantwortlicher</h2>
          <p>{c.legal}, {c.street}, {c.zip} {c.city}, Telefon {c.phone}, E-Mail {c.email}. Vertreten durch {c.owners}.</p>
          <h2>2. Hosting und Server-Logfiles</h2>
          <p>Diese Website wird bei Netlify, Inc. (44 Montgomery Street, San Francisco, CA 94104, USA) gehostet. Beim Aufruf verarbeitet Netlify technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browser. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (sicherer und stabiler Betrieb). Netlify ist unter dem EU-US Data Privacy Framework zertifiziert; zusätzlich bestehen Standardvertragsklauseln.</p>
          <h2>3. Kontakt- und Anfrageformulare</h2>
          <p>Wenn Sie uns über ein Formular, per E-Mail oder telefonisch kontaktieren, verarbeiten wir Ihre Angaben (Name, E-Mail, Telefon, Nachricht und Angaben zur Immobilie) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertrags) bzw. Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Formulareingaben werden über Netlify Forms übermittelt und gespeichert. Wir löschen die Daten, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
          <h2>4. Schriftarten</h2>
          <p>Alle Schriftarten werden von unserem eigenen Server geladen. Es findet keine Verbindung zu Google oder anderen Schriftanbietern statt.</p>
          <h2>5. Cookies und Analyse</h2>
          <p>Diese Website setzt keine Cookies und keine Analyse- oder Tracking-Werkzeuge ein.</p>
          <h2>6. Links zu Instagram und anderen Websites</h2>
          <p>Wir verlinken auf unser Instagram-Profil und die Website des Rödemisser SV. Erst wenn Sie einen Link anklicken, werden Daten an den jeweiligen Anbieter übertragen; dort gelten dessen Datenschutzbestimmungen.</p>
          <h2>7. Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21 DSGVO). Eine erteilte Einwilligung können Sie jederzeit für die Zukunft widerrufen. Sie können sich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein.</p>
        </div>
      </section>
    </>
  );
}
