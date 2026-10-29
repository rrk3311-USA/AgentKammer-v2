// The Guides hub: three kinds of entry (neighborhoods, field guides, property assessments)
// share one shape so they list, filter and search the same way.
// ready: false means the page is not built yet; the hub shows it as "Coming soon" instead of a dead link.

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
  { type: "a", label: "Property Assessments", hash: "assessments" },
];

export interface Neighborhood {
  slug: string;
  name: string;
  blurb: string;
  lead: string;
  decide: string[];
  recommendation: string;
  compare: string[];
}

// Draft copy for review. The Upper West Side text follows the live page; the rest follows the same pattern.
export const neighborhoods: Neighborhood[] = [
  {
    slug: "upper-west-side-buyers-nyc",
    name: "Upper West Side",
    blurb: "Schools, park adjacency, co-op culture, and classic residential rhythm.",
    lead: "Upper West Side decisions hinge on school convenience, park adjacency, co-op culture, building age, and whether the neighborhood supports the reason for moving, not just apartment size.",
    decide: [
      "Use school and park logistics to narrow micro-neighborhoods before touring every classic co-op.",
      "Separate cosmetic apartment issues from board and building constraints early.",
      "Start with lifestyle and school logistics before comparing every listing.",
    ],
    recommendation: "Compare co-op value against condominium ease with a clear residency horizon.",
    compare: ["upper-east-side-buyers-nyc"],
  },
  {
    slug: "upper-east-side-buyers-nyc",
    name: "Upper East Side",
    blurb: "Deep inventory with nuanced co-op boards, service buildings, and family-oriented tradeoffs.",
    lead: "Upper East Side inventory is deep, so the decision is rarely about finding something. It turns on how each co-op board works, how well a service building is run, and which side street or avenue fits daily life.",
    decide: [
      "Learn how the boards in your target buildings actually behave before falling for an apartment.",
      "Compare service buildings by staffing, rules and upkeep, not only address.",
      "Choose the avenue and side-street rhythm that fits family life.",
    ],
    recommendation: "Narrow to a handful of buildings whose boards you understand, then compare apartments.",
    compare: ["upper-west-side-buyers-nyc"],
  },
  {
    slug: "tribeca-buyers-nyc",
    name: "Tribeca",
    blurb: "Low-volume, high-conviction buying shaped by loft scale, privacy, and family floor plans.",
    lead: "Tribeca is low volume and high conviction. Loft scale, privacy and family floor plans drive the decision, and the architecture still has to hold up as ownership.",
    decide: [
      "Decide whether loft scale suits how you live, not only how it photographs.",
      "Expect fewer listings and be ready to act on the right one.",
      "Test privacy, layout and building rules against family needs.",
    ],
    recommendation: "Hold the architecture to the same ownership tests as any other building.",
    compare: ["chelsea-buyers-nyc", "financial-district-buyers-nyc"],
  },
  {
    slug: "chelsea-buyers-nyc",
    name: "Chelsea",
    blurb: "Gallery adjacency, West Chelsea new product, High Line access, and design-forward towers.",
    lead: "Chelsea mixes gallery-district character, West Chelsea new product and High Line access. The towers are design forward, and they still need lifestyle filters.",
    decide: [
      "Choose which Chelsea you want: gallery blocks, West Chelsea or the High Line edge.",
      "Judge a design-forward tower by how daily life works inside it.",
      "Apply lifestyle filters before the view makes the decision.",
    ],
    recommendation: "Pick the Chelsea you want to live in first, then compare buildings.",
    compare: ["tribeca-buyers-nyc", "hudson-yards-buyers-nyc"],
  },
  {
    slug: "hudson-yards-buyers-nyc",
    name: "Hudson Yards",
    blurb: "Amenity-heavy new development that needs commute, carrying-cost and use-case testing.",
    lead: "Hudson Yards is amenity-heavy new development. It needs commute, carrying-cost and use-case pressure testing, especially against Chelsea and Tribeca alternatives.",
    decide: [
      "Pressure test the commute and the carrying costs of an amenity-heavy tower.",
      "Decide which amenities you will actually use.",
      "Compare it against Chelsea and Tribeca before committing.",
    ],
    recommendation: "Treat Hudson Yards as a use-case decision, not a skyline.",
    compare: ["chelsea-buyers-nyc", "tribeca-buyers-nyc"],
  },
  {
    slug: "financial-district-buyers-nyc",
    name: "Financial District",
    blurb: "Commute convenience versus weekend livability across conversions, waterfront stock, and Battery Park City.",
    lead: "Financial District decisions weigh commute convenience against weekend livability. Conversions, waterfront stock and Battery Park City options each feel different day to day.",
    decide: [
      "Weigh the short commute against how the neighborhood feels on a weekend.",
      "Separate conversions, waterfront stock and Battery Park City by daily life, not brochure.",
      "Visit on a Saturday as well as a weekday.",
    ],
    recommendation: "Decide how much of your week is the commute, then choose the stock.",
    compare: ["tribeca-buyers-nyc"],
  },
];

const area: Record<string, string> = {
  "upper-west-side-buyers-nyc": "Uptown",
  "upper-east-side-buyers-nyc": "Uptown",
  "chelsea-buyers-nyc": "West side",
  "hudson-yards-buyers-nyc": "West side",
  "tribeca-buyers-nyc": "Downtown",
  "financial-district-buyers-nyc": "Downtown",
};

const field = (topic: string, title: string, text: string, href: string, meta = "Guide"): GuideItem => ({ type: "f", topic, title, text, meta, href, ready: false });

export const guideItems: GuideItem[] = [
  ...neighborhoods.map((n): GuideItem => ({ type: "n", topic: area[n.slug], title: n.name, text: n.blurb, meta: "Neighborhood", href: `/situations/${n.slug}`, ready: true })),
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
  field("Buying in New York", "How to Buy in NYC", "Twelve attorney-driven steps, contract to closing.", "/guides/how-to-buy-in-nyc.html"),
  field("Wealth", "How Wealth Is Held", "Holding companies, family offices and trusts.", "/guides/how-wealth-is-held.html"),
  field("International buyers", "International Buyer Hub Guide", "How the multilingual guides fit together.", "/guides/international-buyer-hub.html"),
  field("Buildings", "The Grammar of a Building", "Twenty-four architectural and building terms, plainly explained.", "/guides/building-terms"),
  { type: "a", topic: "West Chelsea", title: "Lantern House", text: "One of the rare Manhattan buildings where the design is the argument.", meta: "14 min", href: "/building-reports/lantern-house", ready: false },
  { type: "a", topic: "West Chelsea", title: "One High Line", text: "What happens when a luxury tower is designed around the park beside it.", meta: "13 min", href: "/building-reports/one-high-line", ready: false },
  { type: "a", topic: "Reports", title: "2026 Executive Housing Report", text: "Manhattan modern residences for executives relocating.", meta: "Report", href: "/insights/reports/2026-executive-housing-report", ready: false },
  { type: "a", topic: "Archive", title: "Building Profiles", text: "The address-study archive, with more buildings under study.", meta: "Archive", href: "/building-reports/individual-buildings", ready: false },
];
