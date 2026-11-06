import { SITE_URL } from "./content";

export type Page = "home" | "impressum" | "datenschutz";

export const ROUTES: { path: string; page: Page }[] = [
  { path: "/", page: "home" },
  { path: "/impressum/", page: "impressum" },
  { path: "/datenschutz/", page: "datenschutz" },
];

export function parsePath(path: string): Page {
  const clean = path.replace(/\/+$/, "/").replace(/^([^/])/, "/$1");
  return ROUTES.find((r) => r.path === clean || r.path === clean + "/")?.page ?? "home";
}

export const absoluteUrl = (path: string) => SITE_URL.replace(/\/$/, "") + path;
