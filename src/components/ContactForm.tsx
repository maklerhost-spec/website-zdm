import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type Extra = { name: string; label: string; type?: string; required?: boolean; options?: string[]; half?: boolean };

/**
 * Anfrageformular. Wird von Netlify Forms empfangen (data-netlify): Netlify erkennt das Formular im vorgerenderten HTML
 * und schickt jede Anfrage per E-Mail weiter. Empfänger stellt man im Netlify-Dashboard unter Forms ein.
 */
export function ContactForm({ name, title, intro, subject, extra = [], dark = false, children }: {
  name: string; title: string; intro?: string; subject: string; extra?: Extra[]; dark?: boolean; children?: ReactNode;
}) {
  const box = dark ? "bg-white text-priel" : "bg-white";
  return (
    <form name={name} method="POST" action="/danke/" data-netlify="true" netlify-honeypot="website" className={`reveal rounded-[28px] p-6 shadow-[0_30px_60px_-30px_rgba(7,28,36,.35)] ring-1 ring-nebel/60 sm:p-10 ${box}`}>
      <input type="hidden" name="form-name" value={name} />
      <p className="hidden"><label>Nicht ausfüllen: <input name="website" /></label></p>
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-schlick">{intro}</p>}
      {children}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {extra.map((f) => (
          <div key={f.name} className={f.half === false ? "sm:col-span-2" : ""}>
            <label className="label" htmlFor={`${name}-${f.name}`}>{f.label}{f.required && " *"}</label>
            {f.options ? (
              <select id={`${name}-${f.name}`} name={f.name} required={f.required} className="field" defaultValue="">
                <option value="" disabled>Bitte wählen</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input id={`${name}-${f.name}`} name={f.name} type={f.type ?? "text"} required={f.required} className="field" />
            )}
          </div>
        ))}
        <div>
          <label className="label" htmlFor={`${name}-name`}>Ihr Name *</label>
          <input id={`${name}-name`} name="name" required autoComplete="name" className="field" />
        </div>
        <div>
          <label className="label" htmlFor={`${name}-email`}>E-Mail-Adresse *</label>
          <input id={`${name}-email`} name="email" type="email" required autoComplete="email" className="field" />
        </div>
        <div>
          <label className="label" htmlFor={`${name}-phone`}>Telefonnummer</label>
          <input id={`${name}-phone`} name="phone" type="tel" autoComplete="tel" className="field" />
        </div>
        <div>
          <label className="label" htmlFor={`${name}-subject`}>Anliegen</label>
          <input id={`${name}-subject`} name="subject" defaultValue={subject} className="field" />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor={`${name}-message`}>Ihre Nachricht *</label>
          <textarea id={`${name}-message`} name="message" required rows={5} className="field resize-y" />
        </div>
      </div>
      <label className="mt-6 flex gap-3 text-sm text-schlick">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-priel" />
        <span>Ich habe die <a href="/datenschutzerklaerung/" className="underline">Datenschutzerklärung</a> gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage und für Rückfragen gespeichert werden. *</span>
      </label>
      <button type="submit" className="btn-priel group mt-8 w-full sm:w-auto">
        Anfrage senden <ArrowRight size={18} className="transition group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-xs text-schlick">Wir behandeln Ihre Daten vertraulich und geben sie nicht an Dritte weiter.</p>
    </form>
  );
}
