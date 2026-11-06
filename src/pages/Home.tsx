import { ArrowRight, ArrowUpRight } from "lucide-react";
import { COMPANY, IMAGES, PLACES, SERVICES, TEAM } from "../content";
import { ContactAside, Faq, Heading, TeamCard, ValuationBand } from "../components/Blocks";
import { ContactForm } from "../components/ContactForm";
import { SeaBand } from "../components/Waves";

const HEADLINE = ["Ihr", "Zuhause", "zwischen", "Nord-", "und", "Ostsee."];

export function Home() {
  return (
    <>
      {/* Hero: das Land zwischen zwei Meeren */}
      <section className="relative overflow-hidden">
        <SeaBand side="left" />
        <SeaBand side="right" />
        <div className="relative mx-auto max-w-6xl px-10 pb-16 pt-10 sm:px-20 sm:pt-16 lg:px-8">
          <p className="eyebrow animate-rise">Husum · Nordfriesland · {COMPANY.geo}</p>
          <h1 className="mt-6 text-[clamp(3.2rem,10.5vw,9.5rem)] font-semibold leading-[0.9] [font-variation-settings:'wdth'_76]">
            {HEADLINE.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <span className={`inline-block animate-rise ${w === "Zuhause" ? "italic text-reet-700" : ""}`} style={{ animationDelay: `${120 + i * 90}ms` }}>{w}&nbsp;</span>
              </span>
            ))}
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <p className="max-w-xl animate-rise text-lg text-schlick [animation-delay:700ms] sm:text-xl">
              Wir sind ein Familienbetrieb aus Husum und verkaufen, vermieten und bewerten Immobilien in ganz Nordfriesland. Persönlich, ehrlich und mit Ortskenntnis von Vater und Sohn.
            </p>
            <div className="flex animate-rise flex-wrap gap-3 [animation-delay:800ms] md:justify-end">
              <a href="/immobilienbewertung/" className="btn-priel group">Kostenlos bewerten <ArrowRight size={18} className="transition group-hover:translate-x-1" /></a>
              <a href="/immobilien/" className="btn-line">Angebote ansehen</a>
            </div>
          </div>
          <figure className="mt-14 animate-rise overflow-hidden rounded-[32px] [animation-delay:500ms]">
            <img src={IMAGES.harbor} alt="Der Husumer Binnenhafen mit Kuttern und Giebelhäusern" width={1600} height={800} fetchPriority="high" className="aspect-[4/3] w-full animate-zoom object-cover sm:aspect-[2/1]" />
          </figure>
        </div>
      </section>

      {/* Orte, in denen wir tätig sind */}
      <section aria-label="Unser Gebiet" className="overflow-hidden border-y border-nebel py-6">
        <div className="flex w-max animate-drift gap-10 whitespace-nowrap font-display text-4xl text-priel/80 [font-variation-settings:'wdth'_78] motion-reduce:animate-none sm:text-6xl">
          {[...PLACES, ...PLACES].map((p, i) => (
            <span key={i} className="flex items-center gap-10">{p}<span className="text-reet">✦</span></span>
          ))}
        </div>
      </section>

      {/* Über uns */}
      <section className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <Heading eyebrow="Tradition trifft Moderne" title={<>Zwei Generationen, <span className="italic text-reet-700">ein</span> Versprechen.</>} />
          <div className="reveal space-y-6 text-lg text-schlick lg:pt-12" style={{ ["--d" as string]: "120ms" }}>
            <p><strong className="text-priel">Michael Kröger</strong> bringt jahrzehntelange Erfahrung am Markt und viel Wissen aus eigenen Sanierungen mit. <strong className="text-priel">Tim Kröger</strong> sorgt dafür, dass Ihre Immobilie online so gut aussieht wie in Wirklichkeit.</p>
            <dl className="grid gap-6 border-t border-nebel pt-6 sm:grid-cols-2">
              <div><dt className="font-display text-2xl text-priel">Vertrauen & Transparenz</dt><dd className="mt-2 text-base">Sie wissen jederzeit, was wir tun und warum. Ohne Kleingedrucktes.</dd></div>
              <div><dt className="font-display text-2xl text-priel">Persönliche Nähe</dt><dd className="mt-2 text-base">Ein fester Ansprechpartner vom ersten Gedanken bis zum Notartermin.</dd></div>
            </dl>
            <a href="/ueber-uns/" className="link-u inline-flex items-center gap-2 font-semibold text-priel">Das ganze Team kennenlernen <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="pb-24 sm:pb-32">
        <div className="wrap">
          <Heading eyebrow="Leistungen" title="Alles rund um Ihre Immobilie." />
          <ul className="mt-14 border-t border-priel">
            {SERVICES.map((s, i) => (
              <li key={s.href} className="reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <a href={s.href} className="group relative grid items-center gap-2 overflow-hidden border-b border-nebel py-7 sm:grid-cols-[1fr_1.2fr_auto] sm:gap-8">
                  <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-priel transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  <span className="font-display text-4xl transition-colors duration-300 [font-variation-settings:'wdth'_78] group-hover:translate-x-4 group-hover:text-watt sm:text-6xl sm:transition-all">{s.title}</span>
                  <span className="text-schlick transition-colors duration-300 group-hover:text-watt/80">{s.text}</span>
                  <ArrowUpRight className="hidden h-10 w-10 transition duration-300 group-hover:rotate-45 group-hover:text-reet sm:mr-4 sm:block" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ValuationBand />

      {/* Team */}
      <section className="py-24 sm:py-32">
        <div className="wrap">
          <Heading eyebrow="Unser Team" title="Gesichter, die Sie in Husum auf der Straße treffen." />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((p, i) => <TeamCard key={p.name} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* Region */}
      <section className="pb-24 sm:pb-32">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <img src={IMAGES.club} alt="Spieler des Rödemisser SV auf dem Fußballplatz" loading="lazy" width={1200} height={900} className="reveal-img reveal aspect-[4/3] w-full rounded-[28px] object-cover" />
          <div>
            <Heading eyebrow="Hier zu Hause" title="Hauptsponsor des Rödemisser SV." text="Michael Kröger hat viele Jahre für den Verein gespielt, Tim Kröger steht bis heute auf dem Platz. Wir unterstützen Jugend und Herren mit Trikots, Ausrüstung und Bandenwerbung." />
            <a href="/region/" className="reveal link-u mt-8 inline-flex items-center gap-2 font-semibold">Mehr über unsere Region <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-watt-200 py-24 sm:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Heading eyebrow="Häufige Fragen" title="Kurz gefragt." />
          <Faq />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Heading eyebrow="Kontakt" title="Schreiben Sie uns." text="Wir melden uns zeitnah und persönlich bei Ihnen." />
            <div className="mt-10"><ContactAside /></div>
          </div>
          <ContactForm name="kontakt-start" title="Ihre Nachricht" subject="Allgemeine Anfrage" />
        </div>
      </section>
    </>
  );
}
