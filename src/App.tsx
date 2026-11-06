import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./Home";
import { Imprint, Privacy } from "./Legal";
import type { Page } from "./site";

export function App({ page }: { page: Page }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {page === "home" && <Home />}
        {page === "impressum" && <Imprint />}
        {page === "datenschutz" && <Privacy />}
      </main>
      <Footer />
    </div>
  );
}
