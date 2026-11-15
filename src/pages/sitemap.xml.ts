// The list of pages search engines should read. It builds itself: fixed pages are found from the files in
// src/pages, and the rest come from the same data files the pages are built from.
import type { APIRoute } from "astro";
import { neighborhoods } from "../data/neighborhoods";
import { situations } from "../data/situations";
import { condoVsCoop, coopTerms } from "../data/guidePages";
import { fieldGuides } from "../data/fieldGuides";
import { articles } from "../data/articles";
import { newBuildings } from "../data/newBuildings";

// Pages that should stay out of search: the error page, a redirect, and forms that only make sense mid-journey.
const skip = new Set(["/404", "/resources", "/qualify"]);

const fixed = Object.keys(import.meta.glob("./**/*.astro"))
  .filter((f) => !f.includes("["))
  .map((f) => f.slice(1).replace(/\.astro$/, "").replace(/\/index$/, "") || "/")
  .filter((p) => !skip.has(p));

const paths = [
  ...fixed,
  ...neighborhoods.map((n) => `/situations/${n.slug}`),
  ...situations.filter((s) => s.ready).map((s) => `/situations/${s.slug}`),
  `/situations/${condoVsCoop.slug}`,
  `/situations/${coopTerms.slug}`,
  ...Object.keys(fieldGuides).map((slug) => `/guides/${slug}`),
  ...articles.map((a) => `/guides/${a.slug}`),
  "/building-reports/individual-buildings",
  ...newBuildings.map((b) => `/building-reports/${b.slug}`),
];

const priority = (p: string) => (p === "/" ? "1.0" : p.split("/").length === 2 ? "0.8" : "0.7");

export const GET: APIRoute = ({ site }) => {
  const urls = [...new Set(paths)].sort().map((p) => `  <url><loc>${new URL(p, site).href}</loc><priority>${priority(p)}</priority></url>`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
