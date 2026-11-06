import { useState } from "react";
import { fmtEur, loan } from "./math";
import { Big, CalcFrame, Num, Reset, Rows } from "./ui";

const START = { price: 350000, costs: 42245, equity: 70000, rate: 3.6, repay: 2, years: 10, extra: 0 };

export function LoanCalculator() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (n: number) => setV({ ...v, [k]: n });
  const amount = Math.max(0, v.price + v.costs - v.equity);
  const r = loan(amount, v.rate, v.repay, v.years, v.extra);
  const duration = Number.isFinite(r.months) ? `${Math.floor(r.months / 12)} Jahre ${r.months % 12 ? `${r.months % 12} Monate` : ""}` : "Rate deckt die Zinsen nicht";
  return (
    <CalcFrame
      inputs={<>
        <Num label="Kaufpreis" unit="€" step={5000} value={v.price} onChange={set("price")} />
        <Num label="Kaufnebenkosten" unit="€" step={500} value={v.costs} onChange={set("costs")} />
        <Num label="Eigenkapital" unit="€" step={5000} value={v.equity} onChange={set("equity")} />
        <Num label="Sollzins pro Jahr" unit="%" step={0.05} value={v.rate} onChange={set("rate")} />
        <Num label="Anfängliche Tilgung" unit="%" step={0.25} value={v.repay} onChange={set("repay")} />
        <Num label="Zinsbindung" unit="Jahre" min={1} value={v.years} onChange={set("years")} />
        <Num label="Sondertilgung pro Jahr" unit="€" step={500} value={v.extra} onChange={set("extra")} />
        <Reset onClick={() => setV(START)} />
      </>}
      result={<>
        <Big label="Monatsrate" value={fmtEur(r.monthly)} />
        <Rows rows={[
          ["Darlehen", fmtEur(amount)],
          [`Restschuld nach ${v.years} Jahren`, fmtEur(r.restFixed), true],
          [`Gezahlte Zinsen in ${v.years} Jahren`, fmtEur(r.interestFixed)],
          ["Gesamtlaufzeit bei gleichem Zins", duration],
        ]} />
      </>}
      note="Vereinfachte, monatsgenaue Rechnung mit gleichbleibendem Zins. Darlehen = Kaufpreis + Nebenkosten − Eigenkapital. Die Gesamtlaufzeit nach der Zinsbindung ist ein Szenario."
    />
  );
}
