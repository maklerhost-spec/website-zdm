import type { ReactNode } from "react";

export function Num({ label, value, onChange, unit, step = 1, min = 0, hint }: {
  label: string; value: number; onChange: (n: number) => void; unit: string; step?: number; min?: number; hint?: string;
}) {
  const id = "f-" + label.replace(/\W+/g, "-").toLowerCase();
  return (
    <div>
      <label htmlFor={id} className="label">{label}</label>
      <div className="relative">
        <input id={id} type="number" inputMode="decimal" min={min} step={step} value={Number.isFinite(value) ? value : ""} onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))} className="field pr-16 font-mono" />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm text-schlick">{unit}</span>
      </div>
      {hint && <p className="mt-1 text-xs text-schlick">{hint}</p>}
    </div>
  );
}

/** Rechner-Rahmen: Eingaben links, Ergebnis rechts in dunklem Feld. */
export function CalcFrame({ inputs, result, note }: { inputs: ReactNode; result: ReactNode; note?: string }) {
  return (
    <div className="reveal grid overflow-hidden rounded-[28px] ring-1 ring-nebel lg:grid-cols-[1.1fr_1fr]">
      <div className="grid content-start gap-5 bg-white p-6 sm:grid-cols-2 sm:p-10">{inputs}</div>
      <div className="flex flex-col bg-priel p-6 text-watt sm:p-10" aria-live="polite">
        {result}
        {note && <p className="mt-auto pt-8 text-xs leading-relaxed text-watt/60">{note}</p>}
      </div>
    </div>
  );
}

export function Big({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow !text-watt/60">{label}</p>
      <p className="mt-2 font-display text-[clamp(2.6rem,6vw,4.2rem)] leading-none text-reet [font-variation-settings:'wdth'_78]">{value}</p>
    </div>
  );
}

export function Rows({ rows }: { rows: [string, string, boolean?][] }) {
  return (
    <dl className="mt-8 divide-y divide-watt/15 border-y border-watt/15">
      {rows.map(([k, v, strong]) => (
        <div key={k} className={`flex justify-between gap-4 py-3 ${strong ? "font-semibold text-watt" : "text-watt/80"}`}>
          <dt>{k}</dt><dd className="font-mono">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Reset({ onClick }: { onClick: () => void }) {
  return <button type="button" onClick={onClick} className="self-end text-sm text-schlick underline hover:text-priel sm:col-span-2 sm:justify-self-start">Zurücksetzen</button>;
}
