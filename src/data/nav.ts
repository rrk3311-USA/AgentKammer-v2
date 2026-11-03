// Site navigation. Four destinations in the header: Start Here, Buildings, Insights, Contact.
// Each one leads into a journey (situation, property, research or direct); see the flow notes in the Codex brief.

// `match` is the path prefix that marks a header link as the current section.
export const primaryNav = [
  { label: "Start Here", href: "/situations", match: "/situations" },
  { label: "Buildings", href: "/building-reports/individual-buildings", match: "/building-reports" },
  { label: "Insights", href: "/guides", match: "/guides" },
];

export const guidance = { label: "Contact", href: "/contact", match: "/contact" };

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
  { label: "International move", href: "/guides/international-buyer-hub" },
];

// The twelve situations sorted into three life areas for the homepage section.
const byLabel = (label: string) => whatsChanging.find((c) => c.label === label)!;
export const whatsChangingGroups = [
  { title: "Home and family", items: ["First home", "Marriage", "Growing family", "Empty nest"].map(byLabel) },
  { title: "Work and money", items: ["Executive relocation", "Job change", "Remote work", "Inheritance"].map(byLabel) },
  { title: "Later life and change", items: ["Retirement", "Aging parents", "Divorce", "International move"].map(byLabel) },
];

// Footer: the five destinations kept after the audit.
export const footerNav = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Calculator", href: "/calculator" },
];

// Phone and tablet menu: the same four destinations as the header, as a flat list.
export const mobileNav = [...primaryNav, guidance];

// Dropdown panels for the desktop header menu, keyed by the primaryNav label.
export const navPanels: Record<string, { title: string; note: string; groups: { title?: string; items: { label: string; href: string }[] }[] }> = {
  "Start Here": {
    title: "What is changing for you?",
    note: "Pick the change and we open the plan.",
    groups: whatsChangingGroups,
  },
  Buildings: {
    title: "Building reports",
    note: "Research on the buildings people ask about most.",
    groups: [
      {
        items: [
          { label: "Lantern House", href: "/building-reports/lantern-house" },
          { label: "35 Hudson Yards", href: "/building-reports/35-hudson-yards" },
          { label: "565 Broome", href: "/building-reports/565-broome" },
          { label: "The Cortland", href: "/building-reports/the-cortland" },
          { label: "One High Line", href: "/building-reports/one-high-line" },
          { label: "All buildings", href: "/building-reports/individual-buildings" },
        ],
      },
    ],
  },
  "Insights": {
    title: "Guides and insights",
    note: "Plain-language reading before you decide.",
    groups: [
      {
        items: [
          { label: "All guides", href: "/guides" },
          { label: "International buyer hub", href: "/guides/international-buyer-hub" },
          { label: "Condo vs co-op", href: "/situations/condo-vs-coop" },
          { label: "Calculator", href: "/calculator" },
        ],
      },
    ],
  },
};
