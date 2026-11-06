import { ArrowRight, ArrowUpRight, Instagram } from "lucide-react";
import { COMPANY, IMAGES, PLACES, TEAM } from "../content";
import { ContactAside, Heading, PageHero, TeamCard, ValuationBand } from "../components/Blocks";
import { ContactForm } from "../components/ContactForm";
import { BudgetCalculator } from "../calc/Budget";
import { CostsCalculator } from "../calc/Costs";
import { LoanCalculator } from "../calc/Loan";
import { YieldCalculator } from "../calc/Yield";

export function Listings() {
  return (
    <>
      <PageHero eyebrow="Immobilienangebote" title={<>Aktuelle <span className="italic text-reet-700">Objekte.</span></>} text="Häuser, Wohnungen und Grundstücke zum Kauf und zur Miete in Husum, St. Peter-Ording, Bredstedt und Umgebung." />
      <section className="pb-24">
        <div className="wrap">
          {/* Hier wird die Objektliste eingebunden (Quelle noch zu klären). */}
          <div id="objekte" className="reveal rounded-[28px] border border-dashed border-priel-400/50 p-8 text-center sm:p-16">
            <p className="eyebrow">Nicht das Passende dabei?</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">Viele Objekte vermitteln wir, bevor sie online gehen.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-schlick">Sagen Sie uns, was Sie suchen. Wir melden uns, sobald etwas Passendes in Ihrer Wunschlage frei wird.</p>
            <a href="#suchauftrag" className="btn-priel mt-8">Suchauftrag anlegen</a>
          </div>
        </div>
      </section>
      <section id="suchauftrag" className="bg-watt-200 py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <ContactAside />
          <ContactForm name="suchauftrag" title="Suchauftrag" intro="Beschreiben Sie Ihre Wunschimmobilie: Lage, Größe, Budget." subject="Suchauftrag" extra={[
            { name: "vermarktung", label: "Kaufen oder mieten?", required: true, options: ["Kaufen", "Mieten"] },
            { name: "objektart", label: "Objektart", options: ["Haus", "Wohnung", "Grundstück", "Gewerbe", "Egal"] },
            { name: "region", label: "Wunschort / Region" },
            { name: "budget", label: "Budget / Miete bis (€)", type: "number" },
          ]} />
        </div>
      </section>
    </>
  );
}

export function About() {
  return (
    <>
      <PageHero eyebrow="Familienunternehmen" title={<>Über uns & unser <span className="italic text-reet-700">Team.</span></>} text="Makler mit Leidenschaft, Fachwissen und Wurzeln in Husum und Nordfriesland. Vater, Sohn und ein kleines Team, das Sie persönlich kennt." />
      <section className="pb-24">
        <div className="wrap grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((p, i) => <TeamCard key={p.name} p={p} i={i} />)}
        </div>
      </section>
      <section className="bg-watt-200 py-24">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <Heading eyebrow="Wofür wir stehen" title="Tradition trifft Moderne." />
          <div className="reveal space-y-6 text-lg text-schlick">
            <p>Michael Kröger bringt jahrzehntelange Erfahrung und viel Wissen aus eigenen Sanierungen mit. Tim Kröger kümmert sich um die digitale Vermarktung und Social Media. Gemeinsam verbinden sie Handschlag-Mentalität mit zeitgemäßer Präsentation.</p>
            <p>Als geprüfter Maklerbetrieb mit Erlaubnis nach § 34c GewO arbeiten wir transparent, und Sie haben vom ersten Gespräch bis zum Notartermin einen festen Ansprechpartner.</p>
          </div>
        </div>
      </section>
      <ValuationBand />
    </>
  );
}

export function Region() {
  return (
    <>
      <PageHero eyebrow="Regionale Verbundenheit" title={<>Unsere Region & der <span className="italic text-reet-700">Rödemisser SV.</span></>} text="Als heimatverbundenes Unternehmen liegt uns das Miteinander in Husum und Nordfriesland am Herzen, auf dem Sportplatz genauso wie in der Nachbarschaft." />
      <section className="pb-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <img src={IMAGES.club} alt="Spieler des Rödemisser SV" loading="lazy" width={1200} height={900} className="reveal reveal-img aspect-[4/3] w-full rounded-[28px] object-cover" />
          <div>
            <Heading eyebrow="Hauptsponsor" title="Sport verbindet Menschen. Ein Zuhause auch." text="Wir unterstützen den Rödemisser Sportverein e.V. seit vielen Jahren mit Trikots, Bandenwerbung und Ausrüstung für Jugend- und Herrenmannschaften." />
            <a href={COMPANY.club} target="_blank" rel="noopener" className="btn-line reveal mt-8">Vereinswebsite besuchen <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>
      <section className="bg-priel py-24 text-watt">
        <div className="wrap">
          <Heading light eyebrow="Unser Gebiet" title="Von Husum aus zwischen den Meeren unterwegs." text="Wir betreuen den ganzen Kreis Nordfriesland und die Region zwischen Nord- und Ostsee, bis nach Flensburg und in Richtung Hamburg." />
          <ul className="mt-12 flex flex-wrap gap-3">
            {PLACES.map((p, i) => <li key={p} className="reveal rounded-full border border-watt/25 px-5 py-2 font-display text-xl [font-variation-settings:'wdth'_85]" style={{ ["--d" as string]: `${i * 40}ms` }}>{p}</li>)}
          </ul>
          <a href={COMPANY.instagram} target="_blank" rel="noopener" className="btn-line-light mt-12"><Instagram size={18} /> Folgen Sie uns auf Instagram</a>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title={<>Wir sind für Sie <span className="italic text-reet-700">da.</span></>} text="Rufen Sie an, schreiben Sie uns oder kommen Sie in unserem Büro in der Husumer Norderstraße vorbei." />
      <section className="pb-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <ContactAside />
          <ContactForm name="kontakt" title="Ihre Nachricht" subject="Allgemeine Anfrage" />
        </div>
      </section>
    </>
  );
}

const CALCS = [
  { href: "/rechner/kaufnebenkosten/", title: "Kaufnebenkosten", text: "Grunderwerbsteuer, Notar, Grundbuch und Makler je Bundesland." },
  { href: "/rechner/tilgung/", title: "Tilgung", text: "Monatsrate, Restschuld nach der Zinsbindung und gezahlte Zinsen." },
  { href: "/rechner/budget/", title: "Budget", text: "Wie viel Immobilie Sie sich mit Ihrem Einkommen leisten können." },
  { href: "/rechner/mietrendite/", title: "Mietrendite", text: "Brutto- und Nettorendite und Kaufpreisfaktor für Kapitalanleger." },
];

export function CalcOverview() {
  return (
    <>
      <PageHero eyebrow="Rechner" title={<>Erst rechnen, dann <span className="italic text-reet-700">entscheiden.</span></>} text="Vier kostenlose Rechner für eine erste Orientierung. Für eine verbindliche Planung beraten wir Sie gern persönlich." />
      <section className="pb-24">
        <div className="wrap grid gap-px overflow-hidden rounded-[28px] bg-nebel sm:grid-cols-2">
          {CALCS.map((c, i) => (
            <a key={c.href} href={c.href} className="reveal group bg-watt p-8 transition-colors duration-500 hover:bg-priel sm:p-12" style={{ ["--d" as string]: `${i * 80}ms` }}>
              <h2 className="text-5xl transition-colors group-hover:text-watt sm:text-6xl">{c.title}</h2>
              <p className="mt-4 text-schlick transition-colors group-hover:text-watt/75">{c.text}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold transition-colors group-hover:text-reet">Rechner öffnen <ArrowRight size={18} className="transition group-hover:translate-x-1" /></span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function CalcPage({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={text} aside={<a href="/rechner/" className="link-u font-semibold">← Alle Rechner</a>} />
      <section className="pb-24"><div className="wrap">{children}</div></section>
      <section className="pb-24">
        <div className="wrap reveal flex flex-col items-start justify-between gap-6 rounded-[28px] bg-watt-200 p-8 sm:flex-row sm:items-center sm:p-12">
          <p className="max-w-xl font-display text-3xl [font-variation-settings:'wdth'_85]">Sie möchten Ihre Zahlen mit uns durchgehen?</p>
          <a href="/kontakt/" className="btn-priel">Beratung anfragen</a>
        </div>
      </section>
    </>
  );
}

export const CalcCosts = () => <CalcPage eyebrow="Rechner" title="Kaufnebenkosten" text="Was zum Kaufpreis dazukommt: Grunderwerbsteuer, Notar, Grundbuch und Maklerprovision."><CostsCalculator /></CalcPage>;
export const CalcLoan = () => <CalcPage eyebrow="Rechner" title="Tilgung & Monatsrate" text="Monatsrate, Restschuld nach der Zinsbindung und Zinskosten Ihres Darlehens."><LoanCalculator /></CalcPage>;
export const CalcBudget = () => <CalcPage eyebrow="Rechner" title="Budget" text="Wie viel Immobilie Sie sich mit Ihrem Einkommen und Eigenkapital leisten können."><BudgetCalculator /></CalcPage>;
export const CalcYield = () => <CalcPage eyebrow="Rechner" title="Mietrendite" text="Lohnt sich die Wohnung als Kapitalanlage? Brutto- und Nettorendite auf einen Blick."><YieldCalculator /></CalcPage>;

export function Thanks() {
  return (
    <PageHero eyebrow="Anfrage gesendet" title={<>Vielen <span className="italic text-reet-700">Dank!</span></>} text="Ihre Nachricht ist bei uns angekommen. Wir melden uns zeitnah persönlich bei Ihnen." aside={<a href="/" className="btn-priel">Zur Startseite</a>} />
  );
}
