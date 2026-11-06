import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { CONTACT, TEXT } from "./content";

const ICONS = { sparkles: Sparkles, shield: ShieldCheck, clock: Clock } as const;

export function Home() {
  const { hero, services, about, contact } = TEXT;
  return (
    <>
      <section className="bg-brand pb-24 pt-16 text-white sm:pt-24">
        <div className="container-x max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-400">{hero.eyebrow}</p>
          <h1 className="text-4xl text-white sm:text-5xl">{hero.title}</h1>
          <p className="mt-6 text-lg text-white/80">{hero.text}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#kontakt" className="btn-primary">{hero.cta} <ArrowRight size={18} /></a>
            <a href="#leistungen" className="btn-ghost">{hero.secondary}</a>
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-16 py-20">
        <div className="container-x">
          <h2 className="text-3xl">{services.title}</h2>
          <p className="mt-3 max-w-2xl text-lg">{services.text}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.items.map((s) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS];
              return (
                <article key={s.title} className="rounded-2xl border border-slate-200 p-6 shadow-soft">
                  <div className="mb-4 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600"><Icon size={24} /></div>
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-2">{s.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="scroll-mt-16 bg-slate-50 py-20">
        <div className="container-x grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl">{about.title}</h2>
            <p className="mt-4 text-lg">{about.text}</p>
          </div>
          <dl className="grid grid-cols-3 gap-4">
            {about.facts.map((f) => (
              <div key={f.label} className="flex flex-col rounded-2xl bg-white p-5 text-center shadow-soft">
                <dt className="text-sm">{f.label}</dt>
                <dd className="order-first text-2xl font-bold text-brand">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-16 py-20">
        <div className="container-x max-w-3xl text-center">
          <h2 className="text-3xl">{contact.title}</h2>
          <p className="mt-3 text-lg">{contact.text}</p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 hover:border-accent-400"><Mail className="text-accent-600" size={20} />{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 hover:border-accent-400"><Phone className="text-accent-600" size={20} />{CONTACT.phone}</a>
            <p className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"><MapPin className="text-accent-600" size={20} />{CONTACT.city}</p>
          </div>
        </div>
      </section>
    </>
  );
}
