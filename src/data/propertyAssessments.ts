// Property assessments and building profiles. Draft for review: confirm building facts before launch.
import type { GuideDetail } from "./fieldGuides";

export const propertyAssessments: Record<string, GuideDetail & { meta: string }> = {
  "lantern-house": {
    eyebrow: "Property assessment · West Chelsea", title: "Lantern House",
    blurb: "One of the rare Manhattan buildings where the design is the argument.",
    meta: "14 min read",
    lead: "Lantern House is one of the rare Manhattan buildings where the design is the argument. This assessment reads the building before the apartment: its architecture, its rules and what daily life there actually costs.",
    decide: ["Look at how the design will age, and how it photographs now.", "Check the building's rules, finances and reserves before you look at apartments.", "Compare its daily life with the blocks around it."],
    recommendation: "Judge the building on the life it allows, then decide whether the design is worth its price for you.",
  },
  "one-high-line": {
    eyebrow: "Property assessment · West Chelsea", title: "One High Line",
    blurb: "What happens when a luxury tower is designed around the park beside it.",
    meta: "13 min read",
    lead: "What happens when a luxury tower is designed around the park beside it. This assessment tests whether the view and the amenities hold up in everyday use, and what they cost to keep.",
    decide: ["Separate the park view from the price premium it carries.", "Check which amenities you would actually use each week.", "Compare its carrying costs with similar towers nearby."],
    recommendation: "Pay for the views and amenities you will use. Treat the rest as the building's marketing.",
  },
  "individual-buildings": {
    eyebrow: "Building profiles · Archive", title: "Building Profiles",
    blurb: "The address-study archive, with more buildings under study.",
    meta: "Archive",
    lead: "Study the building before the apartment becomes the conversation. Each profile examines its design, rules, finances, and daily life.",
    intro: { title: "Start with the building", text: "Understand how a building operates, what it costs to own, and the rules that shape daily life. Compare buildings before narrowing your search to individual apartments. Then request an assessment of any address you're considering." },
    decide: [],
    recommendation: "Read the building profile first. Then request an assessment of the specific property.",
  },
  "2026-executive-housing-report": {
    eyebrow: "Report · Executive housing", title: "2026 Executive Housing Report",
    blurb: "Manhattan modern residences for executives relocating.",
    meta: "Report",
    lead: "A look at Manhattan modern residences for executives relocating: what they offer, how they are bought and rented, and how to shortlist them quickly.",
    decide: ["Start from the timeline your relocation allows.", "Compare renting and buying on the same horizon.", "Shortlist buildings by commute, rules and what the package covers."],
    recommendation: "Decide rent or buy by how long you will stay. Then shortlist the buildings that fit that horizon.",
  },
};
