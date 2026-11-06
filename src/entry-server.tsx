import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";
import { headHtml } from "./head";
import { parsePath } from "./site";

export { ROUTES, absoluteUrl } from "./site";

/** HTML for one route, used by scripts/prerender.mjs. */
export function render(path: string) {
  const page = parsePath(path);
  const html = renderToString(
    <StrictMode>
      <App page={page} />
    </StrictMode>,
  );
  return { html, head: headHtml(page), page };
}
