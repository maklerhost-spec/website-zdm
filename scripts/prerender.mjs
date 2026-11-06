// Runs after both Vite builds and writes into dist/: one static HTML file per page,
// 404.html (noindex), sitemap.xml and robots.txt.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const { render, ROUTES, absoluteUrl } = await import(pathToFileURL(join(root, "dist-server", "entry-server.js")).href);

const template = await readFile(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-html-->") || !template.includes("<!--app-head-->")) {
  throw new Error("dist/index.html has no <!--app-head--> / <!--app-html--> placeholders");
}
const pageHtml = (path) => {
  const { html, head } = render(path);
  return template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
};

for (const route of ROUTES) {
  const file = join(dist, route.path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, pageHtml(route.path));
}

await writeFile(
  join(dist, "404.html"),
  pageHtml("/").replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />').replace(/<link rel="canonical"[^>]*>/, ""),
);

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter((r) => r.priority !== "0").map((r) => `  <url><loc>${absoluteUrl(r.path)}</loc><lastmod>${today}</lastmod><priority>${r.priority}</priority></url>`);
await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
await writeFile(join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`);

await rm(join(root, "dist-server"), { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length} pages + 404 · sitemap.xml · robots.txt`);
