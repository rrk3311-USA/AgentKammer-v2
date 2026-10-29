// Two field guides that live under /situations/ on the live site.
// General information in plain English. Draft for review: confirm details with an attorney before launch.

export interface CompareRow { label: string; coop: string; condo: string }
export interface Term { term: string; text: string }

export const condoVsCoop = {
  slug: "condo-vs-coop",
  title: "Condo vs Co-op",
  blurb: "What you own, what you pay, and what to expect from each.",
  lead: "In New York the two most common ways to own an apartment are very different under the surface. The choice shapes how you buy, who approves you, what you pay each month, and how easily you can sell or rent later.",
  rows: [
    { label: "What you own", coop: "Shares in a corporation that owns the building, plus a proprietary lease to your apartment.", condo: "The apartment itself, as real property, with a share of the common areas." },
    { label: "Buying", coop: "A share purchase and lease assignment, usually with a board package and an interview.", condo: "A deed transfer, much like buying a house." },
    { label: "Approval", coop: "The board decides, and its rules are often stricter.", condo: "Often a right of first refusal at most, with lighter approval." },
    { label: "Monthly cost", coop: "One maintenance charge that usually includes the building's property tax and any underlying mortgage.", condo: "Common charges, plus your own property tax bill." },
    { label: "Financing", coop: "Lenders often look at the building's finances, and many boards limit how much you may borrow.", condo: "Easier to finance, and more lenders are comfortable with it." },
    { label: "Renting it out", coop: "Often limited or capped by the building's rules.", condo: "Usually more flexible, within the building's rules." },
    { label: "Selling", coop: "Needs board approval for your buyer. Some buildings charge a flip tax.", condo: "Generally simpler and wider to market." },
    { label: "Price", coop: "Often lower for a comparable apartment.", condo: "Often higher for the same size and location." },
  ] as CompareRow[],
  decide: [
    "Decide how long you plan to stay and whether you may need to rent the apartment out.",
    "Compare the full monthly cost, not only the headline price.",
    "Read the building's financials and house rules before you bid, not after.",
  ],
  recommendation: "Choose the building type that fits how long you will stay and how much flexibility you may need. Then compare buildings on their rules and finances.",
};

export const coopTerms = {
  slug: "coop-condo-condop-terms",
  title: "Co-op, Condo and Condop terms",
  blurb: "Where board packages, maintenance and common terms fit together.",
  lead: "Buying in a building means learning a small vocabulary. These are the terms you will meet most often, in plain English.",
  terms: [
    { term: "Proprietary lease", text: "The lease that gives a co-op shareholder the right to live in an apartment. It sets the rights and duties of both sides." },
    { term: "Shares", text: "Your ownership in a co-op corporation. The number of shares usually reflects the size and value of your apartment." },
    { term: "Maintenance", text: "The monthly co-op charge. It covers the building's costs and often property taxes and the building's mortgage." },
    { term: "Common charges", text: "The monthly condo charge for shared costs such as staff, insurance and upkeep. Property tax is billed separately." },
    { term: "Board package", text: "The application a co-op or some condos ask for: finances, references, and documents the board reviews." },
    { term: "Board interview", text: "A meeting with the board, common for co-ops, as part of approval." },
    { term: "Right of first refusal", text: "The building's right to buy an apartment on the same terms as an accepted offer, used by some condos." },
    { term: "Flip tax", text: "A fee paid to the building when an apartment is sold. How much, and who pays, is set by the building." },
    { term: "Underlying mortgage", text: "A mortgage held by the co-op corporation on the whole building. It affects the monthly maintenance." },
    { term: "Special assessment", text: "A one-time charge to owners for a major expense not covered by the regular budget." },
    { term: "Reserve fund", text: "Money the building sets aside for future repairs. A healthy reserve lowers the risk of surprise charges." },
    { term: "Offering plan", text: "The legal document that describes a building, its rules and its finances. Buyers should read it with an attorney." },
    { term: "House rules", text: "The building's day-to-day rules on renovations, pets, subletting, noise and more." },
    { term: "Condop", text: "A building with both co-op and condo parts, such as residences owned as condos over a co-op or the other way around. Check which rules apply to your unit." },
  ] as Term[],
};
