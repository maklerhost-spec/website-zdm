import { useState } from "react";
import { LAND_TAX, fmtEur, purchaseCosts } from "./math";
import { Big, CalcFrame, Num, Reset, Rows } from "./ui";

const START = { price: 350000, land: "Schleswig-Holstein", notary: 1.5, registry: 0.5, broker: 3.57 };

export function CostsCalculator() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (n: number | string) => setV({ ...v, [k]: n });
  const r = purchaseCosts(v.price, LAND_TAX[v.land], v.notary, v.registry, v.broker);
  return (
    <CalcFrame
      inputs={<>
        <div className="sm:col-span-2"><Num label="Kaufpreis" unit="€" step={5000} value={v.price} onChange={set("price")} /></div>
        <div className="sm:col-span-2">
          <label htmlFor="f-land" className="label">Bundesland (Grunderwerbsteuer)</label>
          <select id="f-land" className="field" value={v.land} onChange={(e) => set("land")(e.target.value)}>
            {Object.keys(LAND_TAX).map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <Num label="Notar" unit="%" step={0.1} value={v.notary} onChange={set("notary")} />
        <Num label="Grundbuch" unit="%" step={0.1} value={v.registry} onChange={set("registry")} />
        <Num label="Maklerprovision Käufer" unit="%" step={0.01} value={v.broker} onChange={set("broker")} hint="0 eingeben, wenn keine Provision anfällt." />
        <Reset onClick={() => setV(START)} />
      </>}
      result={<>
        <Big label="Kaufnebenkosten gesamt" value={fmtEur(r.total)} />
        <Rows rows={[["Kaufpreis", fmtEur(v.price)], ...r.items.map((i) => [i.label, fmtEur(i.value)] as [string, string]), ["Gesamter Kapitalbedarf", fmtEur(r.capital), true]]} />
      </>}
      note="Notar- und Grundbuchkosten sind pauschale Schätzwerte. Grunderwerbsteuer nach Landessätzen, Stand 2026, ohne Gewähr."
    />
  );
}
