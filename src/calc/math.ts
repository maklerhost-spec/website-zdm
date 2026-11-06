// Reine Rechenfunktionen der vier Rechner (ohne Oberfläche), damit sie leicht zu prüfen sind.

/** Grunderwerbsteuer in Prozent je Bundesland, Stand 2026 (ohne Gewähr). */
export const LAND_TAX: Record<string, number> = {
  "Baden-Württemberg": 5.0, Bayern: 3.5, Berlin: 6.0, Brandenburg: 6.5, Bremen: 5.5, Hamburg: 5.5, Hessen: 6.0,
  "Mecklenburg-Vorpommern": 6.0, Niedersachsen: 5.0, "Nordrhein-Westfalen": 6.5, "Rheinland-Pfalz": 5.0, Saarland: 6.5,
  Sachsen: 5.5, "Sachsen-Anhalt": 5.0, "Schleswig-Holstein": 6.5, Thüringen: 5.0,
};

export function purchaseCosts(price: number, taxPct: number, notaryPct: number, landRegistryPct: number, brokerPct: number) {
  const p = (pct: number) => (price * pct) / 100;
  const items = [
    { label: `Grunderwerbsteuer (${fmtPct(taxPct)})`, value: p(taxPct) },
    { label: `Notar (${fmtPct(notaryPct)})`, value: p(notaryPct) },
    { label: `Grundbuch (${fmtPct(landRegistryPct)})`, value: p(landRegistryPct) },
    ...(brokerPct > 0 ? [{ label: `Maklerprovision (${fmtPct(brokerPct)})`, value: p(brokerPct) }] : []),
  ];
  const total = items.reduce((s, i) => s + i.value, 0);
  return { items, total, capital: price + total };
}

/**
 * Annuitätendarlehen, monatlich gerechnet. Rate = Darlehen × (Zins + Tilgung) / 12.
 * Sondertilgung jeweils am Jahresende, höchstens bis zur Restschuld.
 */
export function loan(amount: number, ratePct: number, repayPct: number, fixedYears: number, extraPerYear = 0) {
  const monthly = (amount * (ratePct + repayPct)) / 100 / 12;
  let rest = amount;
  let interestFixed = 0;
  let restFixed = amount;
  let months = 0;
  const yearly: number[] = [amount];
  while (rest > 0.005 && months < 12 * 80 && monthly > 0) {
    const interest = (rest * ratePct) / 100 / 12;
    if (monthly <= interest) { months = Infinity; break; }
    rest = Math.max(0, rest - (monthly - interest));
    months++;
    if (months <= fixedYears * 12) interestFixed += interest;
    if (months % 12 === 0) {
      rest = Math.max(0, rest - extraPerYear);
      yearly.push(rest);
    }
    if (months === fixedYears * 12) restFixed = rest;
  }
  if (months < fixedYears * 12) restFixed = 0;
  return { monthly, restFixed, interestFixed, months, yearly };
}

/** Wie viel Immobilie ist bezahlbar? Darlehen aus der tragbaren Rate, dann Kaufpreis ohne Nebenkosten. */
export function budget(income: number, expenses: number, equity: number, ratePct: number, repayPct: number, costsPct: number) {
  const monthly = Math.max(0, income - expenses);
  const annuity = (ratePct + repayPct) / 100;
  const loanAmount = annuity > 0 ? (monthly * 12) / annuity : 0;
  const total = loanAmount + equity;
  const price = total / (1 + costsPct / 100);
  return { monthly, loanAmount, total, price, costs: total - price };
}

export function rentalYield(price: number, costs: number, rentMonthly: number, nonAllocMonthly: number, reserveMonthly: number, vacancyPct: number) {
  const rentYear = rentMonthly * 12;
  const vacancy = (rentYear * vacancyPct) / 100;
  const surplus = rentYear - nonAllocMonthly * 12 - reserveMonthly * 12 - vacancy;
  return {
    rentYear,
    gross: price > 0 ? (rentYear / price) * 100 : 0,
    net: price + costs > 0 ? (surplus / (price + costs)) * 100 : 0,
    factor: rentYear > 0 ? price / rentYear : 0,
    surplus,
  };
}

export const fmtEur = (n: number) => (Number.isFinite(n) ? n.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }) : "–");
export const fmtPct = (n: number) => (Number.isFinite(n) ? n.toLocaleString("de-DE", { maximumFractionDigits: 2 }) + " %" : "–");
