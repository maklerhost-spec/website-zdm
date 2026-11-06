import { useState } from "react";
import { fmtEur, fmtPct, rentalYield } from "./math";
import { Big, CalcFrame, Num, Reset, Rows } from "./ui";

const START = { price: 250000, costs: 28925, rent: 950, nonAlloc: 60, reserve: 80, vacancy: 2 };

export function YieldCalculator() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (n: number) => setV({ ...v, [k]: n });
  const r = rentalYield(v.price, v.costs, v.rent, v.nonAlloc, v.reserve, v.vacancy);
  return (
    <CalcFrame
      inputs={<>
        <Num label="Kaufpreis" unit="€" step={5000} value={v.price} onChange={set("price")} />
        <Num label="Kaufnebenkosten" unit="€" step={500} value={v.costs} onChange={set("costs")} />
        <Num label="Nettokaltmiete pro Monat" unit="€" step={10} value={v.rent} onChange={set("rent")} />
        <Num label="Nicht umlagefähige Kosten" unit="€/Mon." step={10} value={v.nonAlloc} onChange={set("nonAlloc")} />
        <Num label="Instandhaltungsrücklage" unit="€/Mon." step={10} value={v.reserve} onChange={set("reserve")} />
        <Num label="Mietausfallrisiko" unit="%" step={0.5} value={v.vacancy} onChange={set("vacancy")} hint="Anteil der Jahresmiete." />
        <Reset onClick={() => setV(START)} />
      </>}
      result={<>
        <div className="grid grid-cols-2 gap-6">
          <Big label="Bruttorendite" value={fmtPct(r.gross)} />
          <Big label="Nettorendite" value={fmtPct(r.net)} />
        </div>
        <Rows rows={[
          ["Jahresnettokaltmiete", fmtEur(r.rentYear)],
          ["Kaufpreisfaktor", r.factor ? r.factor.toLocaleString("de-DE", { maximumFractionDigits: 1 }) + "-fach" : "–"],
          ["Jährlicher Überschuss vor Finanzierung", fmtEur(r.surplus), true],
        ]} />
      </>}
      note="Bruttorendite = Jahresmiete ÷ Kaufpreis. Nettorendite = Überschuss vor Finanzierung und Steuern ÷ (Kaufpreis + Nebenkosten). Überschuss = Jahresmiete − nicht umlagefähige Kosten − Rücklage − Mietausfall."
    />
  );
}
