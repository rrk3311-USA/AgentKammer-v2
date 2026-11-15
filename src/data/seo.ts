// Search basics shared by every page: who we are, plus small builders for structured data
// (the machine-readable notes Google reads to understand a page).

export const SITE = {
  name: "Agent Kammer",
  url: "https://agentkammer.com",
  founder: "Raphael Kammer",
  description: "Independent private housing advisory for Manhattan. Guidance on whether to stay, renovate, rent, buy, sell or wait, before the search begins.",
};

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE.url}${path}`);

// The trail shown under a result in Google: Insights > Neighborhoods > Tribeca.
export const breadcrumbSchema = (trail: { name: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: abs(t.href) })),
});

export const faqSchema = (faq: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const articleSchema = (a: { title: string; description: string; path: string; image?: string; published?: string; updated?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  mainEntityOfPage: abs(a.path),
  image: abs(a.image ?? "/images/hero-liberty.jpg"),
  ...(a.published ? { datePublished: a.published } : {}),
  ...(a.updated || a.published ? { dateModified: a.updated ?? a.published } : {}),
  author: { "@type": "Person", name: SITE.founder, url: `${SITE.url}/about` },
  publisher: { "@id": `${SITE.url}/#organization` },
});

export const placeSchema = (p: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  name: `${p.name}, Manhattan`,
  description: p.description,
  url: abs(p.path),
  containedInPlace: { "@type": "City", name: "New York" },
});
