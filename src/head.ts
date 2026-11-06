import { COMPANY, IMAGES } from "./content";
import { absoluteUrl, type ROUTES } from "./site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** <head>-Tags einer Seite, eingesetzt von scripts/prerender.mjs. */
export function headHtml(route: (typeof ROUTES)[number]) {
  const url = absoluteUrl(route.path);
  const index = route.page !== "thanks";
  const org = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: COMPANY.legal,
    url: absoluteUrl("/"),
    logo: IMAGES.logo,
    image: IMAGES.og,
    telephone: "+49 4841 7722288",
    email: COMPANY.email,
    address: { "@type": "PostalAddress", streetAddress: COMPANY.street, postalCode: COMPANY.zip, addressLocality: COMPANY.city, addressCountry: "DE" },
    geo: { "@type": "GeoCoordinates", latitude: 54.4858, longitude: 9.0524 },
    areaServed: "Nordfriesland",
    sameAs: [COMPANY.instagram],
  };
  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    `<meta name="robots" content="${index ? "index, follow" : "noindex, follow"}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(COMPANY.name)}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${IMAGES.og}" />`,
    `<meta property="og:locale" content="de_DE" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    route.page === "home" ? `<script type="application/ld+json">${JSON.stringify(org)}</script>` : "",
  ].filter(Boolean).join("\n    ");
}
