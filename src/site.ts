import { SITE_URL } from "./content";

export type Page =
  | "home" | "listings" | "sell" | "rent" | "valuation" | "financing" | "building" | "about" | "region" | "contact"
  | "calc" | "calc-costs" | "calc-loan" | "calc-budget" | "calc-yield" | "imprint" | "privacy" | "thanks";

export const ROUTES: { path: string; page: Page; title: string; description: string; priority: string }[] = [
  { path: "/", page: "home", priority: "1.0", title: "Immobilienmakler Husum & Nordfriesland | Immobilien zwischen den Meeren", description: "Familiengeführter Immobilienmakler in Husum: Verkauf, Vermietung, kostenlose Bewertung, Finanzierung und Sanierung zwischen Nord- und Ostsee." },
  { path: "/immobilien/", page: "listings", priority: "0.9", title: "Aktuelle Immobilienangebote in Husum & Nordfriesland", description: "Häuser, Wohnungen und Grundstücke zum Kauf und zur Miete in Husum, St. Peter-Ording, Bredstedt und Umgebung." },
  { path: "/immobilie-verkaufen/", page: "sell", priority: "0.9", title: "Immobilie verkaufen in Husum & Nordfriesland", description: "Erfolgreich und sicher verkaufen: marktgerechte Bewertung, professionelles Exposé und persönliche Begleitung bis zum Notar." },
  { path: "/immobilie-vermieten/", page: "rent", priority: "0.8", title: "Immobilie vermieten in Husum & Umgebung", description: "Wir finden bonitätsgeprüfte Mieter, erstellen rechtssichere Mietverträge und übergeben mit Protokoll." },
  { path: "/immobilienbewertung/", page: "valuation", priority: "0.9", title: "Kostenlose Immobilienbewertung in Husum", description: "Was ist Ihre Immobilie wert? Kostenlose und unverbindliche Wertermittlung durch Makler aus Nordfriesland." },
  { path: "/finanzierung/", page: "financing", priority: "0.7", title: "Finanzierungsvermittlung in Husum", description: "Unabhängige Baufinanzierung für Kauf, Neubau und Modernisierung, mit Rechnern für Nebenkosten und Monatsrate." },
  { path: "/bauvorhaben/", page: "building", priority: "0.7", title: "Bauvorhaben & Altbausanierung in Nordfriesland", description: "Begleitung von Bauprojekten und Sanierungen historischer Altbauten und Reetdachhäuser in Nordfriesland." },
  { path: "/ueber-uns/", page: "about", priority: "0.6", title: "Über uns & Team | Immobilien zwischen den Meeren", description: "Michael, Tim und Iris Kröger und Leyla Gören: Ihr familiengeführtes Maklerteam in Husum." },
  { path: "/region/", page: "region", priority: "0.5", title: "Region Nordfriesland & Rödemisser SV", description: "Regional verwurzelt: unsere Region zwischen den Meeren und unser Engagement als Sponsor des Rödemisser SV." },
  { path: "/kontakt/", page: "contact", priority: "0.6", title: "Kontakt | Immobilien zwischen den Meeren, Husum", description: "Schreiben Sie uns oder rufen Sie an: Norderstraße 30, 25813 Husum, Telefon 04841 – 77 222 88." },
  { path: "/rechner/", page: "calc", priority: "0.6", title: "Immobilienrechner: Nebenkosten, Rate, Budget, Rendite", description: "Vier kostenlose Rechner für Ihre Immobilienplanung: Kaufnebenkosten, Tilgung, Budget und Mietrendite." },
  { path: "/rechner/kaufnebenkosten/", page: "calc-costs", priority: "0.6", title: "Kaufnebenkostenrechner mit Grunderwerbsteuer", description: "Grunderwerbsteuer, Notar, Grundbuch und Makler: Kaufnebenkosten je Bundesland berechnen." },
  { path: "/rechner/tilgung/", page: "calc-loan", priority: "0.6", title: "Tilgungsrechner: Monatsrate und Restschuld", description: "Monatsrate, Restschuld nach Zinsbindung und gezahlte Zinsen Ihrer Baufinanzierung berechnen." },
  { path: "/rechner/budget/", page: "calc-budget", priority: "0.6", title: "Budgetrechner: Wie viel Immobilie kann ich mir leisten?", description: "Aus Einkommen, Ausgaben und Eigenkapital den möglichen Kaufpreis berechnen." },
  { path: "/rechner/mietrendite/", page: "calc-yield", priority: "0.6", title: "Mietrenditerechner für Kapitalanleger", description: "Brutto- und Nettomietrendite, Kaufpreisfaktor und jährlichen Überschuss berechnen." },
  { path: "/impressum/", page: "imprint", priority: "0.2", title: "Impressum | Immobilien zwischen den Meeren", description: "Impressum der Immobilien zwischen den Meeren eGbR, Husum." },
  { path: "/datenschutzerklaerung/", page: "privacy", priority: "0.2", title: "Datenschutzerklärung | Immobilien zwischen den Meeren", description: "Datenschutzerklärung der Immobilien zwischen den Meeren eGbR, Husum." },
  { path: "/danke/", page: "thanks", priority: "0", title: "Vielen Dank | Immobilien zwischen den Meeren", description: "Ihre Anfrage ist bei uns angekommen." },
];

export function routeFor(path: string) {
  const clean = ("/" + path.replace(/^\/+|\/+$/g, "") + "/").replace("//", "/");
  return ROUTES.find((r) => r.path === clean) ?? ROUTES[0];
}

export const absoluteUrl = (path: string) => SITE_URL.replace(/\/$/, "") + path;
