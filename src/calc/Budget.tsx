import { useState } from "react";
import { budget, fmtEur } from "./math";
import { Big, CalcFrame, Num, Reset, Rows } from "./ui";

const START = { income: 4500, expenses: 2900, equity: 60000, rate: 3.6, repay: 2, costs: 12 };

export function BudgetCalculator() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (n: number) => setV({ ...v, [k]: n });
  const r = budget(v.income, v.expenses, v.equity, v.rate, v.repay, v.costs);
  return (
    <CalcFrame
      inputs={<>
        <Num label="Monatliches Haushaltsnetto" unit="€" step={100} value={v.income} onChange={set("income")} />
        <Num label="Monatliche Ausgaben" unit="€" step={100} value={v.expenses} onChange={set("expenses")} hint="Lebenshaltung, Versicherungen, Auto, Rücklagen (ohne Miete)." />
        <Num label="Eigenkapital" unit="€" step={5000} value={v.equity} onChange={set("equity")} />
        <Num label="Kaufnebenkosten" unit="%" step={0.5} value={v.costs} onChange={set("costs")} hint="In Schleswig-Holstein mit Makler ca. 12 %." />
        <Num label="Sollzins pro Jahr" unit="%" step={0.05} value={v.rate} onChange={set("rate")} />
        <Num label="Anfängliche Tilgung" unit="%" step={0.25} value={v.repay} onChange={set("repay")} />
        <Reset onClick={() => setV(START)} />
      </>}
      result={<>
        <Big label="Möglicher Kaufpreis" value={fmtEur(r.price)} />
        <Rows rows={[
          ["Tragbare Monatsrate", fmtEur(r.monthly)],
          ["Mögliches Darlehen", fmtEur(r.loanAmount)],
          ["Eigenkapital", fmtEur(v.equity)],
          ["davon Kaufnebenkosten", fmtEur(r.costs)],
          ["Gesamtbudget", fmtEur(r.total), true],
        ]} />
      </>}
      note="Tragbare Rate = Haushaltsnetto − Ausgaben. Das Darlehen ergibt sich aus Rate, Zins und Tilgung. Eine erste Orientierung, keine Finanzierungszusage."
    />
  );
}
