import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY, IMAGES, NAV } from "../content";

export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-watt/85 shadow-[0_1px_0_rgba(14,47,58,.08)] backdrop-blur-md" : "bg-watt"}`}>
      <div className={`wrap flex items-center justify-between gap-6 transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
        <a href="/" className="flex items-center gap-3" aria-label={`${COMPANY.name}, zur Startseite`}>
          <img src={IMAGES.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-full bg-white object-contain p-0.5 ring-1 ring-nebel" />
          <span className="font-display text-lg font-semibold leading-[1.05] [font-variation-settings:'wdth'_80]">
            Immobilien<br className="hidden sm:block" /> <span className="text-schlick">zwischen den Meeren</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-[15px] font-medium lg:flex" aria-label="Hauptnavigation">
          {NAV.map((item) =>
            "children" in item ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 py-6 hover:text-priel-400" aria-haspopup="true">
                  {item.label} <ChevronDown size={15} className="transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-2xl bg-white p-2 opacity-0 shadow-[0_24px_48px_-16px_rgba(7,28,36,.25)] ring-1 ring-nebel/60 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <a key={c.href} href={c.href} className={`block rounded-xl px-4 py-2.5 hover:bg-watt ${active(c.href) ? "text-reet-700" : ""}`}>{c.label}</a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.href} href={item.href} className={`link-u ${active(item.href) ? "text-reet-700" : ""}`}>{item.label}</a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${COMPANY.phoneHref}`} className="flex items-center gap-2 font-mono text-sm text-schlick hover:text-priel xl:mr-2"><Phone size={15} /><span className="hidden xl:inline">{COMPANY.phone}</span></a>
          <a href="/immobilienbewertung/" className="btn-priel !py-2.5">Kostenlos bewerten</a>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Menü schließen" : "Menü öffnen"}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-watt px-4 pb-10 pt-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile Navigation">
            {NAV.flatMap((item): { href: string; label: string }[] => ("children" in item ? item.children : [item])).map((c, i) => (
              <a key={c.href} href={c.href} style={{ animationDelay: `${i * 40}ms` }} className="animate-rise border-b border-nebel py-4 font-display text-3xl [font-variation-settings:'wdth'_80]">{c.label}</a>
            ))}
          </nav>
          <a href="/immobilienbewertung/" className="btn-reet mt-8 w-full">Kostenlos bewerten</a>
          <a href={`tel:${COMPANY.phoneHref}`} className="btn-line mt-3 w-full"><Phone size={16} /> {COMPANY.phone}</a>
        </div>
      )}
    </header>
  );
}
