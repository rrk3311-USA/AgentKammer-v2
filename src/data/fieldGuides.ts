// Field guide copy. Draft for review: general information in plain English, confirm details with an attorney before launch.

export interface GuideDetail {
  eyebrow: string;
  title: string;
  blurb: string;
  lead: string;
  decide: string[];
  recommendation: string;
}

export const fieldGuides: Record<string, GuideDetail> = {
  "real-estate-ownership": {
    eyebrow: "Field guide · Ownership", title: "How Real Estate Ownership Works",
    blurb: "Entities, estates and NYC condo ownership, and who actually holds title.",
    lead: "Ownership in New York is more than a name on a deed. It depends on how the property is held: in your own name, through an entity, in an estate or trust, and within a building type that has its own rules.",
    decide: ["Decide how you will hold the property before you buy.", "Check who is on title, and whether an entity or trust has to sign.", "Plan for estates and transfers in advance, with an attorney."],
    recommendation: "Choose the holding structure with your attorney and tax adviser before you sign a contract.",
  },
  "real-estate-deeds": {
    eyebrow: "Field guide · Deeds", title: "How Real Estate Deeds Work",
    blurb: "Deed types, essential parts and delivery.",
    lead: "A deed is the document that transfers title. The type of deed, its essential parts and how it is delivered all affect what you actually receive at closing.",
    decide: ["Know which deed type you are getting and what protection it gives.", "Check the essential parts: the parties, the property description and the signatures.", "Confirm delivery and recording, so the transfer is complete."],
    recommendation: "Have your attorney review the deed and the title search before closing.",
  },
  "how-mortgages-work": {
    eyebrow: "Field guide · Mortgages", title: "How Mortgages Work",
    blurb: "The mortgage family tree: 15 types in five groups.",
    lead: "A mortgage is a loan secured by the property. There are many types, grouped by how the rate and the payments behave over time.",
    decide: ["Start with the rate structure: fixed, adjustable or a hybrid.", "Compare the true cost over the years you expect to hold the loan.", "Read the terms that can change the cost, such as prepayment and fees."],
    recommendation: "Choose the loan whose structure matches how long you will stay.",
  },
  "fixed-rate-mortgage": {
    eyebrow: "Field guide · Mortgages", title: "Fixed-Rate Mortgage",
    blurb: "Same rate, same payment. Terms and amortization.",
    lead: "The rate and the principal-and-interest payment stay the same for the life of the loan. Amortization sets how much of each payment goes to interest early on.",
    decide: ["Know the term: 15 and 30 years are the common choices.", "See how amortization shifts the balance from interest to principal over time.", "Compare the rate with the cost of refinancing later."],
    recommendation: "A fixed rate suits buyers who value a steady payment and expect to stay a long time.",
  },
  "adjustable-rate-mortgage": {
    eyebrow: "Field guide · Mortgages", title: "ARM and Fixed vs ARM",
    blurb: "How adjustable rates reset, caps, and the common 5/1 structure.",
    lead: "An adjustable-rate mortgage starts at a fixed rate for a set period, then resets on a schedule. Caps limit how far the rate can move.",
    decide: ["Understand the initial period, the reset schedule and the index the rate follows.", "Read the caps: how far the rate can rise at each reset and over the life of the loan.", "Model the payment at the highest rate the loan allows, as well as the starting rate."],
    recommendation: "Choose an ARM only if you are confident you will sell or refinance before the first reset.",
  },
  "mortgage-clauses": {
    eyebrow: "Field guide · Mortgages", title: "Mortgage Clauses and Key Terms",
    blurb: "Acceleration, due-on-sale, defeasance and more.",
    lead: "The clauses in a mortgage decide what happens when things change: a late payment, a sale of the property, or a trigger for early repayment.",
    decide: ["Read the acceleration clause: when the lender can require the full balance.", "Check the due-on-sale clause and how it affects a future sale.", "Look at defeasance and prepayment terms before you plan an early payoff."],
    recommendation: "Ask your attorney to walk you through each clause that could cost you money.",
  },
  "manhattan-explained": {
    eyebrow: "Field guide · Neighborhoods", title: "Manhattan Explained",
    blurb: "Where neighborhood names come from, from the Dutch roots up.",
    lead: "Neighborhood names in Manhattan carry history: Dutch roots, old farms and villages, and a street grid laid out in the 1800s. The names help explain what each area was built for.",
    decide: ["Learn the historic layers behind a neighborhood name.", "Notice how the street grid shapes where avenues and buildings sit.", "Use the history to test how a place feels today."],
    recommendation: "Read a neighborhood's history alongside its buildings before you decide where to look.",
  },
  "liens-easements": {
    eyebrow: "Field guide · Encumbrances", title: "Liens, Easements and Related Concepts",
    blurb: "Voluntary versus involuntary claims on a property.",
    lead: "Some claims on a property run with the land: liens that secure a debt, and easements that give someone else a right to use part of it. Voluntary and involuntary claims work differently.",
    decide: ["Search for liens and judgments in the title report before closing.", "Read easements for rights of way, utilities and shared access.", "Know which claims are cleared at closing and which stay with the property."],
    recommendation: "Let the title search and your attorney identify every claim before you commit.",
  },
  "how-to-buy-in-nyc": {
    eyebrow: "Field guide · Buying in New York", title: "How to Buy in NYC",
    blurb: "Twelve attorney-driven steps, contract to closing.",
    lead: "Buying in New York follows a set of steps, many of them led by attorneys. Knowing the order helps you protect your deposit and keep to your timeline.",
    decide: ["Get pre-approved and set your budget before you tour.", "Make an offer, sign the contract and pay the deposit.", "Clear board or condo approval, the title search and the closing."],
    recommendation: "Plan the steps and the timeline with your attorney from the first offer to closing.",
  },
  "how-wealth-is-held": {
    eyebrow: "Field guide · Wealth", title: "How Wealth Is Held",
    blurb: "Holding companies, family offices and trusts.",
    lead: "How a family holds a property can matter as much as the property itself: for privacy, for taxes, for succession and for control.",
    decide: ["Decide who should own the property: you, a holding company, or a trust.", "Weigh privacy, tax and succession against cost and paperwork.", "Keep ownership records current so the structure works as intended."],
    recommendation: "Set up the holding structure with your attorney and tax adviser before the purchase.",
  },
  "international-buyer-hub": {
    eyebrow: "Field guide · International buyers", title: "International Buyer Hub Guide",
    blurb: "How buyers from abroad approach an NYC purchase.",
    lead: "Buying in New York from abroad adds questions about currency, tax, financing and how to hold the property. This guide starts that process.",
    decide: ["Confirm how you will finance the purchase, and what lenders need from abroad.", "Understand the tax position for a non-resident owner, with your adviser.", "Choose how the property will be held before you make an offer."],
    recommendation: "Work with an attorney and a tax adviser in both countries before you commit.",
  },
  "building-terms": {
    eyebrow: "Field guide · Buildings", title: "The Grammar of a Building",
    blurb: "Twenty-four architectural and building terms, plainly explained.",
    lead: "Buildings speak in terms: cornices, lintels, stoops and setbacks. Learning the words makes a listing, an inspection and a board package easier to read.",
    decide: ["Learn the exterior terms that show a building's age and style.", "Learn the structural terms that affect repairs and cost.", "Use the terms when you read a board package, an inspection or a listing."],
    recommendation: "Read a building the way you would a sentence: the structure tells you what to ask next.",
  },
};
