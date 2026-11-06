// All texts of the website in one place. Everything marked "Platzhalter" must be replaced
// as soon as it is clear what ZDM offers.

export const SITE_URL = "https://www.zdm.de"; // Platzhalter: echte Domain eintragen
export const CONTACT = {
  company: "ZDM", // Platzhalter: vollständiger Firmenname mit Rechtsform
  owner: "Manfred …", // Platzhalter: Vertretungsberechtigte Person
  street: "Musterstraße 1", // Platzhalter
  city: "12345 Musterstadt", // Platzhalter
  phone: "+49 000 000000", // Platzhalter
  email: "info@zdm.de", // Platzhalter
  register: "", // z. B. "Amtsgericht München, HRB 000000"
  vatId: "", // z. B. "DE000000000"
};

export const TEXT = {
  meta: {
    title: "ZDM – Ihr Partner für … (Platzhalter)",
    description: "ZDM: kurze Beschreibung des Angebots in einem Satz (Platzhalter, ca. 150 Zeichen).",
  },
  nav: [
    { href: "/#leistungen", label: "Leistungen" },
    { href: "/#ueber-uns", label: "Über uns" },
    { href: "/#kontakt", label: "Kontakt" },
  ],
  hero: {
    eyebrow: "Willkommen bei ZDM",
    title: "Eine klare Botschaft, was ZDM für Sie tut.",
    text: "Ein bis zwei Sätze, die erklären, für wen ZDM da ist und welches Problem gelöst wird. Dieser Text ist ein Platzhalter.",
    cta: "Kontakt aufnehmen",
    secondary: "Leistungen ansehen",
  },
  services: {
    title: "Leistungen",
    text: "Was ZDM anbietet, kurz und verständlich zusammengefasst.",
    items: [
      { icon: "sparkles", title: "Leistung 1", text: "Kurze Beschreibung der ersten Leistung (Platzhalter)." },
      { icon: "shield", title: "Leistung 2", text: "Kurze Beschreibung der zweiten Leistung (Platzhalter)." },
      { icon: "clock", title: "Leistung 3", text: "Kurze Beschreibung der dritten Leistung (Platzhalter)." },
    ],
  },
  about: {
    title: "Über uns",
    text: "Wer steht hinter ZDM, seit wann, und was macht das Unternehmen besonders? Dieser Abschnitt ist ein Platzhalter.",
    facts: [
      { value: "10+", label: "Jahre Erfahrung" },
      { value: "100+", label: "zufriedene Kunden" },
      { value: "24 h", label: "Antwortzeit" },
    ],
  },
  contact: {
    title: "Kontakt",
    text: "Schreiben Sie uns oder rufen Sie an, wir melden uns schnell bei Ihnen.",
  },
  footer: { imprint: "Impressum", privacy: "Datenschutz" },
};
