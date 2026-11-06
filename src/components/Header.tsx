import { Menu, X } from "lucide-react";
import { useState } from "react";
import { TEXT } from "../content";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-brand text-white">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          ZDM<span className="text-accent-400">.</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {TEXT.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-white/80 hover:text-white">{n.label}</a>
          ))}
        </nav>
        <button className="md:hidden" aria-label="Menü" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-1 pb-4 md:hidden">
          {TEXT.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded px-2 py-2 text-white/90 hover:bg-white/10">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
