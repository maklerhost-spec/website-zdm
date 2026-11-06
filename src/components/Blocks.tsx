import { ArrowRight, Mail, Phone, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { COMPANY, FAQ, type Person } from "../content";
import { WaveRule } from "./Waves";

/** Seitenkopf der Unterseiten. */
export function PageHero({ eyebrow, title, text, aside }: { eyebrow: string; title: ReactNode; text: string; aside?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-12 sm:pb-20 sm:pt-20">
      <div className="wrap grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow animate-rise">{eyebrow}</p>
          <h1 className="mt-5 animate-rise text-[clamp(2.6rem,7vw,5.6rem)] [animation-delay:80ms]">{title}</h1>
          <p className="mt-6 max-w-2xl animate-rise text-lg text-schlick [animation-delay:160ms] sm:text-xl">{text}</p>
        </div>
        {aside && <div className="animate-rise [animation-delay:240ms]">{aside}</div>}
      </div>
      <WaveRule className="wrap mt-14 text-nebel" />
    </section>
  );
}

/** Abschnittsüberschrift. */
export function Heading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: ReactNode; text?: string; light?: boolean }) {
  return (
    <div className="reveal max-w-3xl">
      {eyebrow && <p className={`eyebrow ${light ? "!text-watt/60" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-4 text-[clamp(2.2rem,5vw,4rem)] ${light ? "!text-watt" : ""}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg ${light ? "text-watt/75" : "text-schlick"}`}>{text}</p>}
    </div>
  );
}

/** Drei Leistungsbausteine einer Seite (Reihenfolge = Ablauf, daher nummeriert). */
export function Steps({ items, numbered = true }: { items: { title: string; text: string }[]; numbered?: boolean }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-[28px] bg-nebel md:grid-cols-3">
      {items.map((s, i) => (
        <li key={s.title} className="reveal bg-watt p-8 sm:p-10" style={{ ["--d" as string]: `${i * 120}ms` }}>
          {numbered && <span className="font-mono text-sm text-reet-700">Schritt {i + 1}</span>}
          <h3 className="mt-3 text-3xl">{s.title}</h3>
          <p className="mt-4 text-schlick">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items = FAQ }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-nebel border-y border-nebel">
      {items.map((f) => (
        <details key={f.q} className="reveal group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl [font-variation-settings:'wdth'_85] sm:text-3xl [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus className="shrink-0 transition duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-4 max-w-3xl text-lg text-schlick">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function TeamCard({ p, i }: { p: Person; i: number }) {
  return (
    <article className="reveal group" style={{ ["--d" as string]: `${i * 100}ms` }}>
      <div className="overflow-hidden rounded-[24px] bg-nebel">
        <img src={p.photo} alt={`Porträt von ${p.name}`} loading="lazy" width={600} height={750} className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-105" />
      </div>
      <h3 className="mt-5 text-2xl">{p.name}</h3>
      <p className="eyebrow mt-1">{p.role}</p>
      <p className="mt-3 text-[15px] text-schlick">{p.bio}</p>
      <p className="mt-4 flex flex-col gap-1 text-[15px]">
        <a href={`tel:${p.mobileHref}`} className="flex items-center gap-2 hover:text-reet-700"><Phone size={14} /> {p.mobile}</a>
        <a href={`mailto:${p.email}`} className="flex items-center gap-2 break-all hover:text-reet-700"><Mail size={14} className="shrink-0" /> {p.email}</a>
      </p>
    </article>
  );
}

/** Dunkles Band mit Aufruf zur kostenlosen Bewertung. */
export function ValuationBand() {
  return (
    <section className="relative overflow-hidden bg-priel py-20 text-watt sm:py-28">
      <WaveRule className="absolute inset-x-0 top-6 text-ostsee/50" />
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="reveal">
          <p className="eyebrow !text-reet">Kostenfrei & unverbindlich</p>
          <h2 className="mt-4 text-[clamp(2.4rem,6vw,4.8rem)] !text-watt">Was ist Ihre Immobilie heute wert?</h2>
          <p className="mt-5 max-w-xl text-lg text-watt/75">Wir kennen die Preise in Husum und Nordfriesland aus der Praxis, nicht aus einer Datenbank. Die erste Einschätzung kostet Sie nichts.</p>
        </div>
        <div className="reveal flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end" style={{ ["--d" as string]: "150ms" }}>
          <a href="/immobilienbewertung/" className="btn-reet group">Bewertung anfragen <ArrowRight size={18} className="transition group-hover:translate-x-1" /></a>
          <a href={`tel:${COMPANY.phoneHref}`} className="btn-line-light"><Phone size={16} /> {COMPANY.phone}</a>
        </div>
      </div>
    </section>
  );
}

/** Kontaktdaten neben Formularen. */
export function ContactAside() {
  return (
    <div className="reveal space-y-6">
      <div>
        <p className="eyebrow">Büro Husum</p>
        <address className="mt-3 text-xl not-italic leading-8">{COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}</address>
      </div>
      <div>
        <p className="eyebrow">Telefon</p>
        <a href={`tel:${COMPANY.phoneHref}`} className="link-u mt-2 inline-block font-display text-3xl [font-variation-settings:'wdth'_80]">{COMPANY.phone}</a>
      </div>
      <div>
        <p className="eyebrow">E-Mail</p>
        <a href={`mailto:${COMPANY.email}`} className="link-u mt-2 inline-block text-xl">{COMPANY.email}</a>
      </div>
      <p className="font-mono text-xs text-schlick">{COMPANY.geo}</p>
    </div>
  );
}
