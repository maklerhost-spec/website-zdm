import { ArrowRight, Check } from "lucide-react";
import { IMAGES } from "../content";
import { ContactAside, Faq, Heading, PageHero, Steps, ValuationBand } from "../components/Blocks";
import { ContactForm } from "../components/ContactForm";
import { YieldCalculator } from "../calc/Yield";
import { CostsCalculator } from "../calc/Costs";
import { LoanCalculator } from "../calc/Loan";

const OBJECT_TYPES = ["Einfamilienhaus", "Doppelhaushälfte / Reihenhaus", "Wohnung", "Mehrfamilienhaus", "Reetdachhaus", "Grundstück", "Gewerbe", "Sonstiges"];

function FormSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-watt-200 py-20 sm:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <ContactAside />
        {children}
      </div>
    </section>
  );
}

export function Sell() {
  return (
    <>
      <PageHero eyebrow="Immobilie verkaufen" title={<>Verkaufen ist <span className="italic text-reet-700">Vertrauens</span>sache.</>} text="Wir sind in Husum und Nordfriesland verwurzelt und kennen die Käufer, die Lagen und die Preise. So erzielen Sie den bestmöglichen Preis, ohne Risiko und ohne Stress." />
      <section className="pb-24">
        <div className="wrap">
          <Steps items={[
            { title: "Marktgerecht bewerten", text: "Wir ermitteln den Marktwert aus Lage, Zustand und vergleichbaren Verkäufen in der Region." },
            { title: "Gezielt vermarkten", text: "Professionelle Fotos, verständliche Grundrisse, ein hochwertiges Exposé und eine gezielte Online-Präsentation." },
            { title: "Sicher abwickeln", text: "Bonitätsprüfung der Käufer, Vorbereitung des Notarvertrags und Begleitung bis zur Schlüsselübergabe." },
          ]} />
        </div>
      </section>
      <FormSection>
        <ContactForm name="verkauf" title="Unverbindliche Verkäuferanfrage" intro="Nennen Sie uns die Eckdaten Ihrer Immobilie, wir melden uns zeitnah bei Ihnen." subject="Immobilie verkaufen" extra={[
          { name: "objektart", label: "Objektart", required: true, options: OBJECT_TYPES },
          { name: "ort", label: "Ort / PLZ der Immobilie", required: true },
          { name: "wohnflaeche", label: "Wohnfläche ca. (m²)", type: "number" },
          { name: "grundstueck", label: "Grundstück ca. (m²)", type: "number" },
        ]} />
      </FormSection>
      <section className="py-24"><div className="wrap grid gap-12 lg:grid-cols-[1fr_2fr]"><Heading eyebrow="Häufige Fragen" title="Zum Verkauf." /><Faq /></div></section>
    </>
  );
}

export function Rent() {
  return (
    <>
      <PageHero eyebrow="Vermietungsservice" title={<>Entspannt <span className="italic text-reet-700">vermieten.</span></>} text="Wir sparen Ihnen Zeit und Aufwand und finden in Husum und Umgebung Mieter, deren Bonität wir geprüft haben." />
      <section className="pb-24">
        <div className="wrap">
          <Steps items={[
            { title: "Mieter sorgfältig auswählen", text: "Wir prüfen Selbstauskunft, Gehaltsnachweise und SCHUFA-Auskunft, bevor ein Vertrag zustande kommt." },
            { title: "Rechtssicher vermieten", text: "Wir erstellen aktuelle Mietverträge, die die neueste Rechtsprechung berücksichtigen." },
            { title: "Sauber übergeben", text: "Übergabeprotokoll mit Fotodokumentation und abgelesenen Zählerständen." },
          ]} />
        </div>
      </section>
      <section className="pb-24">
        <div className="wrap">
          <Heading eyebrow="Für Kapitalanleger" title="Lohnt sich die Wohnung als Anlage?" text="Eine erste Orientierung zu Brutto- und Nettomietrendite und zum Kaufpreisfaktor, bevor wir Sie persönlich beraten." />
          <div className="mt-12"><YieldCalculator /></div>
        </div>
      </section>
      <FormSection>
        <ContactForm name="vermietung" title="Vermietungsanfrage stellen" intro="Erzählen Sie uns kurz, welches Objekt Sie vermieten möchten." subject="Immobilie vermieten" extra={[
          { name: "objektart", label: "Objektart", options: OBJECT_TYPES },
          { name: "ort", label: "Ort / PLZ" },
        ]} />
      </FormSection>
    </>
  );
}

export function Valuation() {
  return (
    <>
      <PageHero eyebrow="Kostenlose Wertermittlung" title={<>Was ist Ihre Immobilie <span className="italic text-reet-700">wert?</span></>} text="Eine realistische Marktwertanalyse ist die Grundlage für jeden erfolgreichen Verkauf. Wir bewerten Immobilien in Husum und Nordfriesland fachkundig und ehrlich." aside={
        <ul className="space-y-3 text-lg">
          {["Kostenlos und unverbindlich", "Vor Ort von Maklern aus der Region", "Mit Vergleichsverkäufen aus Ihrer Lage"].map((t) => <li key={t} className="flex gap-3"><Check className="mt-1 shrink-0 text-reet-700" size={20} />{t}</li>)}
        </ul>
      } />
      <section className="pb-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div className="reveal">
            <p className="eyebrow">So geht es weiter</p>
            <ol className="mt-6 space-y-6">
              {["Sie füllen das Formular aus.", "Wir melden uns persönlich und vereinbaren eine Besichtigung oder eine erste Einschätzung.", "Sie erhalten eine nachvollziehbare Einschätzung des Marktwerts."].map((t, i) => (
                <li key={t} className="flex gap-5 text-lg"><span className="font-mono text-reet-700">{i + 1}</span><span>{t}</span></li>
              ))}
            </ol>
          </div>
          <ContactForm name="bewertung" title="Kostenlose Wertermittlung anfordern" subject="Immobilienbewertung" extra={[
            { name: "objektart", label: "Objektart", required: true, options: OBJECT_TYPES },
            { name: "ort", label: "Ort / PLZ der Immobilie", required: true },
            { name: "wohnflaeche", label: "Wohnfläche ca. (m²)", type: "number" },
            { name: "baujahr", label: "Baujahr ca.", type: "number" },
          ]} />
        </div>
      </section>
    </>
  );
}

export function Financing() {
  return (
    <>
      <PageHero eyebrow="Finanzierungsvermittlung" title={<>Die passende Finanzierung für Ihren <span className="italic text-reet-700">Wohntraum.</span></>} text="Wir vermitteln Finanzierungen für Kauf, Neubau und Modernisierung und vergleichen unabhängig die Konditionen verschiedener Banken." aside={
        <a href="/rechner/" className="btn-line group">Alle Rechner ansehen <ArrowRight size={18} className="transition group-hover:translate-x-1" /></a>
      } />
      <section className="pb-20"><div className="wrap"><Heading eyebrow="Rechner" title="Kaufnebenkosten" /><div className="mt-10"><CostsCalculator /></div></div></section>
      <section className="pb-24"><div className="wrap"><Heading eyebrow="Rechner" title="Monatsrate und Restschuld" /><div className="mt-10"><LoanCalculator /></div></div></section>
      <FormSection>
        <ContactForm name="finanzierung" title="Unverbindliche Finanzierungsanfrage" intro="Mit ein paar Rahmendaten können wir Ihnen ein passendes Angebot machen." subject="Finanzierung" extra={[
          { name: "budget", label: "Kaufpreis / Budget (€)", type: "number", required: true },
          { name: "eigenkapital", label: "Vorhandenes Eigenkapital (€)", type: "number" },
        ]} />
      </FormSection>
    </>
  );
}

export function Building() {
  return (
    <>
      <PageHero eyebrow="Bau & Sanierung" title={<>Bauvorhaben & <span className="italic text-reet-700">Altbau</span>sanierung.</>} text="Wir begleiten Bauprojekte und umfangreiche Sanierungen historischer Altbauten und Reetdachhäuser in Nordfriesland." />
      <section className="pb-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <img src={IMAGES.building} alt="Sanierungsprojekt in Nordfriesland" loading="lazy" width={1200} height={900} className="reveal reveal-img aspect-[4/3] w-full rounded-[28px] object-cover" />
          <div>
            <Heading eyebrow="Sanierung mit Herz" title="Erfahrung, die man anfassen kann." text="Michael Kröger plant und leitet seit vielen Jahren Altbausanierungen. Er kennt die typische Bausubstanz der Region, von der energetischen Ertüchtigung bis zum Erhalt des historischen Charakters." />
            <ul className="reveal mt-8 space-y-3 text-lg">
              {["Planung und Konzepte zur Umsetzung", "Erfahrung mit Reetdach und Altbaubestand", "Netzwerk aus Handwerkern der Region"].map((t) => <li key={t} className="flex gap-3"><Check className="mt-1 shrink-0 text-reet-700" size={20} />{t}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <FormSection>
        <ContactForm name="bauvorhaben" title="Projektanfrage Bau oder Sanierung" intro="Beschreiben Sie kurz Ihr Vorhaben, wir melden uns." subject="Bauvorhaben / Sanierung" />
      </FormSection>
      <ValuationBand />
    </>
  );
}
