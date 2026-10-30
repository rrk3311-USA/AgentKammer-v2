// Navigation carried over from the v1 site (luxury-homepage). Pages behind
// these links are rebuilt one at a time; until then they land on the 404.

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Start Here", href: "/situations" },
  { label: "Resource Hub", href: "/guides" },
];

// v1 opened the Guidance chat here. v2 is front end only, so it goes to Contact for now.
export const guidance = { label: "Contact", href: "/contact" };

export const whatsChanging = [
  { label: "Executive relocation", href: "/situations/executive-relocation-nyc" },
  { label: "First home", href: "/situations/first-home-buyers-nyc" },
  { label: "Growing family", href: "/situations/new-baby-growing-family-nyc" },
  { label: "Marriage", href: "/situations/marriage-housing-nyc" },
  { label: "Retirement", href: "/situations/retiree-senior-home-buyers-nyc" },
  { label: "Empty nest", href: "/situations/empty-nester-downsizing-nyc" },
  { label: "Aging parents", href: "/situations/aging-parents-housing-nyc" },
  { label: "Inheritance", href: "/situations/inheritance-housing-nyc" },
  { label: "Divorce", href: "/situations/divorce-property-sales-nyc" },
  { label: "Remote work", href: "/situations/remote-work-housing-nyc" },
  { label: "Job change", href: "/situations/job-loss-housing-nyc" },
  { label: "International move", href: "/international" },
];

// The twelve situations sorted into three life areas for the homepage section.
const byLabel = (label: string) => whatsChanging.find((c) => c.label === label)!;
export const whatsChangingGroups = [
  { title: "Home and family", items: ["First home", "Marriage", "Growing family", "Empty nest"].map(byLabel) },
  { title: "Work and money", items: ["Executive relocation", "Job change", "Remote work", "Inheritance"].map(byLabel) },
  { title: "Later life and change", items: ["Retirement", "Aging parents", "Divorce", "International move"].map(byLabel) },
];

export const closeCtas = [
  { label: "Calculate", href: "/calculator" },
  { label: "Contact", href: "/contact" },
  { label: "Live Chat", href: "/contact" },
];

export const footerNav = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];


// Phone and tablet menu, matching the live field menu (MobileFieldMenu on v1).
// Sections with children open as an accordion; Neighborhoods nests one level deeper.
export const neighborhoods = [
  { label: "Upper West Side", href: "/situations/upper-west-side-buyers-nyc" },
  { label: "Upper East Side", href: "/situations/upper-east-side-buyers-nyc" },
  { label: "Tribeca", href: "/situations/tribeca-buyers-nyc" },
  { label: "Chelsea", href: "/situations/chelsea-buyers-nyc" },
  { label: "Hudson Yards", href: "/situations/hudson-yards-buyers-nyc" },
  { label: "Financial District", href: "/situations/financial-district-buyers-nyc" },
];

export const mobileNav = [
  { id: "home", label: "Home", href: "/" },
  { id: "start", label: "Start Here", href: "/situations" },
  {
    id: "guides",
    label: "Resource Hub",
    children: [
      { label: "All resources", href: "/guides" },
      { label: "Resource Hub", href: "/resources" },
      { label: "Field Guides", href: "/resources#field-guides" },
      { label: "Property Assessments", href: "/resources#assessments" },
      { label: "Neighborhoods", href: "/guides#neighborhoods", children: neighborhoods },
      { label: "How Real Estate Ownership Works", href: "/guides/real-estate-ownership" },
      { label: "Condo vs Co-op", href: "/situations/condo-vs-coop" },
      { label: "Co-op, Condo & Condop Terms", href: "/situations/coop-condo-condop-terms" },
      { label: "How Real Estate Deeds Work", href: "/guides/real-estate-deeds" },
      { label: "How Mortgages Work", href: "/guides/how-mortgages-work" },
      { label: "Fixed-Rate Mortgage", href: "/guides/fixed-rate-mortgage" },
      { label: "ARM & Fixed vs ARM", href: "/guides/adjustable-rate-mortgage" },
      { label: "Mortgage Clauses & Key Terms", href: "/guides/mortgage-clauses" },
      { label: "Manhattan Explained", href: "/guides/manhattan-explained" },
      { label: "Liens, Easements & Related Concepts", href: "/guides/liens-easements" },
      { label: "How to buy in NYC", href: "/guides/how-to-buy-in-nyc.html" },
      { label: "How wealth is held", href: "/guides/how-wealth-is-held.html" },
      { label: "International Buyer Hub Guide", href: "/guides/international-buyer-hub.html" },
      { label: "The Grammar of a Building", href: "/guides/building-terms" },
    ],
  },
  {
    id: "tools",
    label: "Interactive Tools",
    children: [
      { label: "Calculator", href: "/calculator" },
      { label: "Wheel of Life", href: "/tools/wheel-of-life/" },
    ],
  },
  { id: "contact", label: "Contact", href: "/contact" },
];

// Which section starts open, like v1's defaultOpenSectionId.
export function openSectionFor(path: string) {
  if (/^\/(calculator|tools)(\/|$)/.test(path)) return "tools";
  if (/^\/(guides|resources)(\/|$)|^\/building-reports/.test(path)) return "guides";
  if (/^\/(situations|belonging|international)(\/|$)/.test(path)) return "start";
  return null;
}
