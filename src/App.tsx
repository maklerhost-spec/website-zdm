import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Imprint, Privacy } from "./pages/Legal";
import { About, CalcBudget, CalcCosts, CalcLoan, CalcOverview, CalcYield, Contact, Listings, Region, Thanks } from "./pages/Other";
import { Building, Financing, Rent, Sell, Valuation } from "./pages/Services";
import type { Page } from "./site";

const PAGES: Record<Page, () => JSX.Element> = {
  home: Home, listings: Listings, sell: Sell, rent: Rent, valuation: Valuation, financing: Financing, building: Building,
  about: About, region: Region, contact: Contact, calc: CalcOverview, "calc-costs": CalcCosts, "calc-loan": CalcLoan,
  "calc-budget": CalcBudget, "calc-yield": CalcYield, imprint: Imprint, privacy: Privacy, thanks: Thanks,
};

/** Blendet Elemente mit .reveal ein, sobald sie ins Bild scrollen. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

export function App({ page, path }: { page: Page; path: string }) {
  useReveal();
  const Content = PAGES[page];
  return (
    <>
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-priel focus:px-5 focus:py-3 focus:text-watt">Zum Inhalt springen</a>
      <Header path={path} />
      <main id="inhalt"><Content /></main>
      <Footer />
    </>
  );
}
