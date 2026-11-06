import { CONTACT, TEXT } from "./content";
import { absoluteUrl, ROUTES, type Page } from "./site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const TITLES: Record<Page, string> = {
  home: TEXT.meta.title,
  impressum: `${TEXT.footer.imprint} – ${CONTACT.company}`,
  datenschutz: `${TEXT.footer.privacy} – ${CONTACT.company}`,
};

/** <head> tags for one page, inserted by scripts/prerender.mjs. */
export function headHtml(page: Page) {
  const url = absoluteUrl(ROUTES.find((r) => r.page === page)!.path);
  const title = TITLES[page];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONTACT.company,
    url: absoluteUrl("/"),
    email: CONTACT.email,
    telephone: CONTACT.phone,
  };
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(TEXT.meta.description)}" />`,
    `<meta name="robots" content="${page === "home" ? "index, follow" : "noindex, follow"}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(TEXT.meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="de_DE" />`,
    page === "home" ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : "",
  ].filter(Boolean).join("\n    ");
}
