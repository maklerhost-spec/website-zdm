import { CONTACT, TEXT } from "./content";

export function Imprint() {
  const c = CONTACT;
  return (
    <LegalPage title={TEXT.footer.imprint}>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>{c.company}<br />{c.street}<br />{c.city}</p>
      <p>Vertreten durch: {c.owner}</p>
      <h2>Kontakt</h2>
      <p>Telefon: {c.phone}<br />E-Mail: {c.email}</p>
      {c.register && <><h2>Registereintrag</h2><p>{c.register}</p></>}
      {c.vatId && <><h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {c.vatId}</p></>}
      <h2>Verantwortlich für den Inhalt</h2>
      <p>{c.owner}, Anschrift wie oben.</p>
    </LegalPage>
  );
}

export function Privacy() {
  const c = CONTACT;
  return (
    <LegalPage title={TEXT.footer.privacy}>
      <p className="rounded-lg bg-amber-50 p-4 text-amber-900">Entwurf: Bitte vor Veröffentlichung prüfen und an die tatsächlich genutzten Dienste (Hosting, Analyse, Formulare) anpassen.</p>
      <h2>1. Verantwortlicher</h2>
      <p>{c.company}, {c.street}, {c.city}, E-Mail: {c.email}</p>
      <h2>2. Hosting und Server-Logfiles</h2>
      <p>Beim Aufruf dieser Website verarbeitet unser Hosting-Anbieter technisch notwendige Daten (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist der sichere und stabile Betrieb der Website.</p>
      <h2>3. Kontaktaufnahme</h2>
      <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und löschen sie, sobald sie nicht mehr erforderlich sind.</p>
      <h2>4. Cookies und Tracking</h2>
      <p>Diese Website setzt derzeit keine Cookies und keine Analyse- oder Tracking-Dienste ein.</p>
      <h2>5. Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.</p>
    </LegalPage>
  );
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-16">
      <div className="container-x max-w-3xl [&_h2]:mt-8 [&_h2]:text-xl [&_p]:mt-3">
        <h1 className="text-4xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}
