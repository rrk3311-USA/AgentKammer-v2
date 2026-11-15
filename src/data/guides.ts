// The Guides hub: three kinds of entry (neighborhoods, field guides, property assessments)
// share one shape so they list, filter and search the same way.
// ready: true means the page is not built yet; the hub shows it as "Coming soon" instead of a dead link.

export type GuideType = "n" | "f" | "a";

export interface GuideItem {
  type: GuideType;
  topic: string;
  title: string;
  text: string;
  meta: string;
  href: string;
  ready: boolean;
}

export const guideTabs: { type: GuideType; label: string; hash: string }[] = [
  { type: "f", label: "Field Guides", hash: "field-guides" },
  { type: "n", label: "Neighborhoods", hash: "neighborhoods" },
  { type: "a", label: "Building Profiles", hash: "assessments" },
];

// Neighborhood copy lives in its own file. Re-exported here so older imports keep working.
import { neighborhoods, type Neighborhood } from "./neighborhoods";
import { articles } from "./articles";
export { neighborhoods, type Neighborhood };

const field = (topic: string, title: string, text: string, href: string, meta = "Guide"): GuideItem => ({ type: "f", topic, title, text, meta, href, ready: true });

export const guideItems: GuideItem[] = [
  ...neighborhoods.map((n): GuideItem => ({ type: "n", topic: n.area, title: n.name, text: n.blurb, meta: "Neighborhood", href: `/situations/${n.slug}`, ready: true })),
  ...articles.map((a) => field(a.topic, a.title, a.blurb, `/guides/${a.slug}`, "Article")),
  field("Ownership", "How Real Estate Ownership Works", "Entities, estates and NYC condo ownership, and who actually holds title.", "/guides/real-estate-ownership"),
  { ...field("Building types", "Condo vs Co-op", "What you own, what you pay, and what to expect from each.", "/situations/condo-vs-coop"), ready: true },
  { ...field("Building types", "Co-op, Condo and Condop Terms", "Where board packages, maintenance and common terms fit together.", "/situations/coop-condo-condop-terms"), ready: true },
  field("Deeds", "How Real Estate Deeds Work", "Deed types, essential parts and delivery.", "/guides/real-estate-deeds"),
  field("Mortgages", "How Mortgages Work", "The mortgage family tree: 15 types in five groups.", "/guides/how-mortgages-work"),
  field("Mortgages", "Fixed-Rate Mortgage", "Same rate, same payment. Terms and amortization.", "/guides/fixed-rate-mortgage"),
  field("Mortgages", "ARM and Fixed vs ARM", "How adjustable rates reset, caps, and the common 5/1 structure.", "/guides/adjustable-rate-mortgage"),
  field("Mortgages", "Mortgage Clauses and Key Terms", "Acceleration, due-on-sale, defeasance and more.", "/guides/mortgage-clauses"),
  field("Neighborhoods", "Manhattan Explained", "Where neighborhood names come from, from the Dutch roots up.", "/guides/manhattan-explained"),
  field("Encumbrances", "Liens, Easements and Related Concepts", "Voluntary versus involuntary claims on a property.", "/guides/liens-easements"),
  field("Buying in New York", "How to Buy in NYC", "Twelve attorney-driven steps, contract to closing.", "/guides/how-to-buy-in-nyc"),
  field("Wealth", "How Wealth Is Held", "Holding companies, family offices and trusts.", "/guides/how-wealth-is-held"),
  field("International buyers", "International Buyer Hub Guide", "How buyers from abroad approach an NYC purchase.", "/guides/international-buyer-hub"),
  field("Buildings", "The Grammar of a Building", "Twenty-four architectural and building terms, plainly explained.", "/guides/building-terms"),
  { type: "a", topic: "West Chelsea", title: "Lantern House", text: "One of the rare Manhattan buildings where the design is the argument.", meta: "14 min", href: "/building-reports/lantern-house", ready: true },
  { type: "a", topic: "West Chelsea", title: "One High Line", text: "What happens when a luxury tower is designed around the park beside it.", meta: "13 min", href: "/building-reports/one-high-line", ready: true },
  { type: "a", topic: "Reports", title: "2026 Executive Housing Report", text: "Manhattan modern residences for executives relocating.", meta: "Report", href: "/insights/reports/2026-executive-housing-report", ready: true },
  { type: "a", topic: "Building profile", title: "565 Broome", text: "A minimalist building in SoHo, positioned around privacy.", meta: "Profile", href: "/building-reports/565-broome", ready: true },
  { type: "a", topic: "Building profile", title: "35 Hudson Yards", text: "A corporate positioning, with large-scale amenities and a service-heavy operation.", meta: "Profile", href: "/building-reports/35-hudson-yards", ready: true },
  { type: "a", topic: "Building profile", title: "The Cortland", text: "A family oriented waterfront building, with less direct High Line access.", meta: "Profile", href: "/building-reports/the-cortland", ready: true },
  { type: "a", topic: "Archive", title: "Building Profiles", text: "The address-study archive, with more buildings under study.", meta: "Archive", href: "/building-reports/individual-buildings", ready: true },
];
