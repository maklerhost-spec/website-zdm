import { CONTACT, TEXT } from "../content";

export function Footer() {
  return (
    <footer className="bg-brand-900 py-10 text-sm text-white/70">
      <div className="container-x flex flex-col justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} {CONTACT.company}</p>
        <nav className="flex gap-6">
          <a href="/impressum/" className="hover:text-white">{TEXT.footer.imprint}</a>
          <a href="/datenschutz/" className="hover:text-white">{TEXT.footer.privacy}</a>
        </nav>
      </div>
    </footer>
  );
}
