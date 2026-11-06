import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { routeFor } from "./site";
import "./index.css";

const root = document.getElementById("root")!;
const route = routeFor(window.location.pathname);
const app = (
  <StrictMode>
    <App page={route.page} path={route.path} />
  </StrictMode>
);
// Der Build rendert jede Seite vor; `npm run dev` liefert eine leere Hülle.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
