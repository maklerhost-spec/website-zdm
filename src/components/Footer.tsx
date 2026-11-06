import { Instagram } from "lucide-react";
import { COMPANY, IMAGES } from "../content";
import { WaveRule } from "./Waves";

const COLS = [
  { title: "Immobilien", links: [["/immobilien/", "Aktuelle Angebote"], ["/immobilie-verkaufen/", "Immobilie verkaufen"], ["/immobilie-vermieten/", "Immobilie vermieten"], ["/immobilienbewertung/", "Kostenlose Bewertung"]] },
  { title: "Rechner", links: [["/rechner/kaufnebenkosten/", "Kaufnebenkosten"], ["/rechner/tilgung/", "Tilgung"], ["/rechner/budget/", "Budget"], ["/rechner/mietrendite/", "Mietrendite"]] },
  { title: "Leistungen & Region", links: [["/finanzierung/", "Finanzierung"], ["/bauvorhaben/", "Bauvorhaben & Sanierung"], ["/ueber-uns/", "Unser Team"], ["/region/", "Region & Sponsoring"]] },
];

export function Footer() {
  return (
    <footer className="relative bg-tiefsee pt-6 text-watt/75">
      <WaveRule className="text-ostsee/60" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div>
          <img src={IMAGES.logo} alt={COMPANY.name} width={64} height={64} loading="lazy" className="h-16 w-16 rounded-full bg-white object-contain p-1" />
          <p className="mt-5 max-w-xs">Persönlich geführte Immobilienvermittlung aus Husum. Ein Vater-und-Sohn-Team für Nordfriesland, zwischen Nord- und Ostsee.</p>
          <address className="mt-6 not-italic leading-7">
            <strong className="font-semibold text-watt">{COMPANY.legal}</strong><br />
            {COMPANY.street}, {COMPANY.zip} {COMPANY.city}<br />
            <a className="link-u" href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a><br />
            <a className="link-u" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </address>
          <a href={COMPANY.instagram} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-watt hover:text-reet"><Instagram size={18} /> Folgen Sie uns auf Instagram</a>
        </div>
        {COLS.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2 className="eyebrow !text-watt/50">{c.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {c.links.map(([href, label]) => <li key={href}><a href={href} className="link-u hover:text-watt">{label}</a></li>)}
              {c.title === "Leistungen & Region" && <li><a href={COMPANY.club} target="_blank" rel="noopener" className="link-u hover:text-watt">Rödemisser SV ↗</a></li>}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-watt/10">
        <div className="wrap flex flex-col gap-3 py-6 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {COMPANY.legal} · Erlaubnis nach § 34c GewO, Aufsicht: IHK Flensburg</p>
          <p className="flex gap-6"><a href="/impressum/" className="link-u hover:text-watt">Impressum</a><a href="/datenschutzerklaerung/" className="link-u hover:text-watt">Datenschutz</a></p>
        </div>
      </div>
    </footer>
  );
}
