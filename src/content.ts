// Alle Inhalte der Website an einem Ort. Quelle: bisherige Seite zwischen-den-meeren.vibepreview.app.

export const SITE_URL = "https://immobilien-zdm.de";

export const COMPANY = {
  name: "Immobilien zwischen den Meeren",
  legal: "Immobilien zwischen den Meeren eGbR",
  owners: "Michael Kröger & Tim Kröger",
  street: "Norderstraße 30",
  zip: "25813",
  city: "Husum",
  phone: "04841 – 77 222 88",
  phoneHref: "+4948417722288",
  email: "info@immobilien-zdm.de",
  register: "Handelsregister Flensburg, GsR 409 FL",
  vatId: "DE 57439682122",
  authority: "IHK zu Flensburg, Heinrichstr. 28–34, 24937 Flensburg",
  instagram: "https://www.instagram.com/immobilien_zwischen_den_meeren/",
  club: "https://roedemisser-sv.de/",
  geo: "54°29′ N · 9°03′ O",
};

// Bilder liegen noch auf dem Server der bisherigen Seite. Vor dem Livegang nach public/images/ kopieren
// und hier die Pfade umstellen (dann werden keine Daten an Dritte übertragen).
const CDN = "https://vibe.filesafe.space/1791013376362640082/attachments/";
export const IMAGES = {
  logo: "https://immobilien-zdm.de/wp-content/uploads/2021/12/cropped-Immobilien-zwischen-den-Meeren.jpg",
  harbor: CDN + "e25a7644-b47c-4849-8440-e8d89ccbef0d.webp",
  building: CDN + "9f2a0c4d-4b79-4bd9-aff6-182bd6e0c9f6.webp",
  club: CDN + "c7ec9cdc-6f78-469d-9552-5c40922c11c7.webp",
  og: CDN + "1d505bcc-7e98-4f5b-bc2f-7227b25cedf0.webp",
};

export type Person = { name: string; role: string; bio: string; mobile: string; mobileHref: string; email: string; photo: string };
export const TEAM: Person[] = [
  {
    name: "Michael Kröger",
    role: "Immobilienmakler & Mitgründer",
    bio: "Plant und leitet seit vielen Jahren Altbausanierungen. Schwimmt in der Nordsee, spielt Fußball und macht Aktivurlaub in Kärnten.",
    mobile: "0152 – 06 06 85 00",
    mobileHref: "+4915206068500",
    email: "michael.kroeger@immobilien-zdm.de",
    photo: CDN + "6f6131e6-c958-4fdb-b344-5fc60d9827c9.webp",
  },
  {
    name: "Tim Kröger",
    role: "Immobilienmakler & Social Media",
    bio: "Bringt das Digitale ins Familienunternehmen. Am Wochenende im Volksparkstadion, abends zwischen Husumer Hafen und Altstadt unterwegs.",
    mobile: "0175 – 28 05 197",
    mobileHref: "+491752805197",
    email: "tim.kroeger@immobilien-zdm.de",
    photo: CDN + "f4560b2a-a69d-4b50-b99e-5bccbdaccd66.webp",
  },
  {
    name: "Iris Kröger",
    role: "Immobilienberaterin",
    bio: "Tanzt, kocht gern und geht Wattwandern. Kennt Nordfriesland und seine Menschen wie kaum jemand sonst.",
    mobile: "0152 – 229 339 54",
    mobileHref: "+4915222933954",
    email: "iris.kroeger@immobilien-zdm.de",
    photo: CDN + "9003a0c4-897a-4b5b-a7c1-9622fc1d3d4d.webp",
  },
  {
    name: "Leyla Gören",
    role: "Service",
    bio: "Ihre erste Ansprechpartnerin im Büro. Reist gern, entdeckt neue Kulturen und liest am liebsten im eigenen Garten.",
    mobile: "0152 – 276 663 14",
    mobileHref: "+4915227666314",
    email: "leyla.goeren@immobilien-zdm.de",
    photo: CDN + "6937caec-4f7b-4cd2-878e-82cf468f3059.webp",
  },
];

export const SERVICES = [
  { href: "/immobilie-verkaufen/", title: "Verkaufen", text: "Marktgerechter Preis, starkes Exposé, sichere Abwicklung bis zur Schlüsselübergabe." },
  { href: "/immobilie-vermieten/", title: "Vermieten", text: "Geprüfte Mieter, rechtssichere Verträge und eine Übergabe mit Protokoll." },
  { href: "/immobilienbewertung/", title: "Bewerten", text: "Kostenlose, unverbindliche Einschätzung, was Ihre Immobilie heute wert ist." },
  { href: "/finanzierung/", title: "Finanzieren", text: "Unabhängige Vermittlung von Finanzierungen für Kauf, Neubau und Modernisierung." },
  { href: "/bauvorhaben/", title: "Bauen & Sanieren", text: "Begleitung von Bauprojekten und Sanierungen, auch von Reetdach und Altbau." },
  { href: "/rechner/", title: "Rechnen", text: "Kaufnebenkosten, Monatsrate, Budget und Mietrendite selbst durchrechnen." },
];

export const PLACES = ["Husum", "St. Peter-Ording", "Bredstedt", "Friedrichstadt", "Tönning", "Garding", "Schleswig", "Flensburg", "Niebüll", "Mildstedt", "Rödemis", "Nordstrand"];

export const FAQ = [
  {
    q: "In welchen Regionen sind Sie tätig?",
    a: "Unser Büro liegt in Husum. Von hier aus betreuen wir den ganzen Kreis Nordfriesland und die Region zwischen Nord- und Ostsee, bis nach Flensburg und in Richtung Hamburg.",
  },
  {
    q: "Was kostet die Erstbewertung meiner Immobilie?",
    a: "Nichts. Die erste Einschätzung des Marktwerts ist kostenlos und unverbindlich.",
  },
  {
    q: "Wie läuft ein Verkauf mit Ihnen ab?",
    a: "Wir besichtigen und bewerten Ihre Immobilie, erstellen Fotos, Grundrisse und Exposé, kümmern uns um Anfragen und Besichtigungen, prüfen die Bonität der Käufer und begleiten Sie bis zum Notar und zur Übergabe.",
  },
  {
    q: "Vermitteln Sie auch Finanzierungen?",
    a: "Ja. Wir vergleichen unabhängig Angebote verschiedener Banken für Kauf, Neubau und Modernisierung.",
  },
];

type Link = { href: string; label: string };
export const NAV: (Link | { label: string; children: Link[] })[] = [
  { href: "/immobilien/", label: "Immobilien" },
  {
    label: "Leistungen",
    children: [
      { href: "/immobilie-verkaufen/", label: "Immobilie verkaufen" },
      { href: "/immobilie-vermieten/", label: "Immobilie vermieten" },
      { href: "/finanzierung/", label: "Finanzierung" },
      { href: "/bauvorhaben/", label: "Bauvorhaben & Sanierung" },
      { href: "/rechner/", label: "Rechner" },
    ],
  },
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/region/", label: "Region" },
  { href: "/kontakt/", label: "Kontakt" },
];
