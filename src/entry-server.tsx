import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";
import { headHtml } from "./head";
import { routeFor } from "./site";

export { ROUTES, absoluteUrl } from "./site";

/** HTML einer Seite, genutzt von scripts/prerender.mjs. */
export function render(path: string) {
  const route = routeFor(path);
  const html = renderToString(
    <StrictMode>
      <App page={route.page} path={route.path} />
    </StrictMode>,
  );
  return { html, head: headHtml(route), page: route.page };
}
