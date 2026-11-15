// Longer reads that answer the questions buyers type into Google. Each one becomes a page at /guides/<slug>
// and a row in the Insights hub. To add one, copy an entry, change the slug and write the sections.
// Draft for review: general information in plain English. Confirm tax rates and legal points with an attorney before launch.

export interface ArticleSection {
  h: string;
  p?: string[];
  list?: string[];
  table?: { head: string[]; rows: string[][] };
}

export interface Article {
  slug: string;
  title: string;
  topic: string;
  blurb: string;
  /** Shown in Google results. Aim for 140 to 160 characters. */
  metaDescription: string;
  lead: string;
  /** ISO dates. Update `updated` whenever the facts are rechecked. */
  published: string;
  updated: string;
  sections: ArticleSection[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
}

export const articles: Article[] = [
  {
    slug: "closing-costs-manhattan-buyers",
    title: "Closing Costs for Buyers in Manhattan",
    topic: "Buying in New York",
    blurb: "Mansion tax, mortgage recording tax, title insurance and the rest, by building type.",
    metaDescription: "What a buyer pays at closing in Manhattan: mansion tax rates, mortgage recording tax, title insurance and attorney fees, for co-ops, condos and new development.",
    lead: "The price is not the whole cost. In Manhattan, what you pay at closing depends mostly on three things: whether the apartment is a co-op or a condominium, whether you take a mortgage, and whether the price is one million dollars or more.",
    published: "2026-11-14",
    updated: "2026-11-14",
    sections: [
      {
        h: "The short version",
        p: ["As a rough guide, buyers of a resale co-op often pay about 1 to 2 percent of the price in closing costs. Buyers of a resale condominium with a mortgage often pay about 2 to 4 percent. New development usually costs more, because buyers are commonly asked to cover some of the seller's costs. Your attorney will give you an exact estimate for your purchase."],
      },
      {
        h: "Mansion tax",
        p: ["New York charges the buyer a tax on any home that sells for one million dollars or more. Despite the name, it applies to ordinary apartments. In New York City the rate rises with the price, and it applies to the whole price, not only the part above each step."],
        table: {
          head: ["Purchase price", "Rate"],
          rows: [
            ["$1,000,000 to $1,999,999", "1.00%"],
            ["$2,000,000 to $2,999,999", "1.25%"],
            ["$3,000,000 to $4,999,999", "1.50%"],
            ["$5,000,000 to $9,999,999", "2.25%"],
            ["$10,000,000 to $14,999,999", "3.25%"],
            ["$15,000,000 to $19,999,999", "3.50%"],
            ["$20,000,000 to $24,999,999", "3.75%"],
            ["$25,000,000 and above", "3.90%"],
          ],
        },
      },
      {
        h: "Mortgage recording tax",
        p: [
          "If you borrow to buy a condominium or a townhouse, you pay a tax to record the mortgage. In New York City the buyer's share is 1.8 percent of the loan when the loan is under $500,000, and 1.925 percent when it is $500,000 or more.",
          "Co-ops do not pay this tax. A co-op loan is secured by shares, not by real property, so no mortgage is recorded. This is one reason co-op closing costs are lower.",
        ],
      },
      {
        h: "Title insurance",
        p: ["Condominium and townhouse buyers buy title insurance, which protects against claims on the property from before they owned it. Lenders require it. The premium is set by a state-approved schedule and rises with the price. Co-op buyers do not buy title insurance. They pay for a lien search instead, which costs far less."],
      },
      {
        h: "Other costs to expect",
        list: [
          "Your attorney's fee.",
          "Bank fees: application, appraisal, and the bank attorney's fee.",
          "Building fees: the board application, credit check, move-in fee or deposit.",
          "Prepaid items: your share of the month's common charges or maintenance, and property taxes for a condominium.",
          "A managing agent's closing fee.",
        ],
      },
      {
        h: "New development costs more",
        p: ["When you buy from the developer, called the sponsor, the contract usually asks the buyer to pay the New York City and New York State transfer taxes that a seller would normally pay, along with the sponsor's attorney fee. These are sometimes negotiable, depending on the market and the building. Ask early, because it is a meaningful sum."],
      },
      {
        h: "Ways the bill comes down",
        list: [
          "Choosing a co-op removes the mortgage recording tax and title insurance.",
          "A purchase CEMA can reduce mortgage recording tax on a condominium when the seller has an existing mortgage and agrees to take part.",
          "In a new development, sponsor closing costs can sometimes be negotiated.",
          "A price just under a mansion tax step can save more than the difference in price.",
        ],
      },
    ],
    faq: [
      { q: "Who pays the mansion tax in New York, the buyer or the seller?", a: "The buyer pays it. It applies to residential purchases of one million dollars or more, and in New York City the rate ranges from 1 percent to 3.9 percent of the full price." },
      { q: "Do co-op buyers pay mortgage recording tax?", a: "No. A co-op loan is secured by shares in the corporation, not by real property, so there is no mortgage to record and no mortgage recording tax." },
      { q: "Does the buyer pay transfer taxes in New York City?", a: "In a resale, the seller normally pays the city and state transfer taxes. In a new development sold by the sponsor, the contract usually passes them to the buyer, though this can sometimes be negotiated." },
    ],
    related: [
      { label: "Condo vs Co-op", href: "/situations/condo-vs-coop" },
      { label: "How to Buy in NYC", href: "/guides/how-to-buy-in-nyc" },
      { label: "Calculator", href: "/calculator" },
    ],
  },
  {
    slug: "how-long-to-buy-apartment-nyc",
    title: "How Long It Takes to Buy an Apartment in NYC",
    topic: "Buying in New York",
    blurb: "From accepted offer to keys: the usual timeline for a condo, a co-op and new development.",
    metaDescription: "How long buying an apartment in New York City takes, step by step: accepted offer, contract, mortgage, co-op board approval and closing, with typical timelines.",
    lead: "From an accepted offer to the keys, a condominium purchase in New York usually takes about two to three months. A co-op usually takes three to four, because the board has to approve you. Cash is faster. New development follows the building's schedule, not yours.",
    published: "2026-11-14",
    updated: "2026-11-14",
    sections: [
      {
        h: "Accepted offer",
        p: ["In New York an accepted offer is not binding. Nothing is final until both sides sign a contract and the deposit is delivered. Until then, the seller can take another offer and you can walk away."],
      },
      {
        h: "Contract: about one to two weeks",
        p: ["Your attorney reviews the building before you sign. For a co-op or condominium that means the financial statements, the board minutes, the offering plan and the house rules. The attorneys then agree the contract, you sign and pay the deposit, which is usually 10 percent, and the seller signs."],
      },
      {
        h: "Mortgage: about 30 to 45 days",
        p: ["If you are borrowing, the bank appraises the apartment, reviews the building and issues a commitment letter. Most contracts give you a set number of days to get it. Buildings with unusual finances or pending litigation can slow this step."],
      },
      {
        h: "Board approval",
        p: [
          "In a co-op, you submit a full board package after the loan commitment arrives. The managing agent checks it, the board reviews it, and you are invited to an interview. This often takes four to eight weeks, and longer in summer and around the holidays.",
          "In a condominium, the board usually has only a right of first refusal. You submit a shorter application and wait for a waiver, often two to four weeks.",
        ],
      },
      {
        h: "Closing",
        p: ["Once the building has approved and the bank is ready, the attorneys schedule the closing. You do a final walk-through, sign, pay the balance and the closing costs, and receive the keys."],
      },
      {
        h: "Typical totals",
        table: {
          head: ["Purchase", "Accepted offer to closing"],
          rows: [
            ["Condominium, cash", "About 4 to 8 weeks"],
            ["Condominium, with a mortgage", "About 2 to 3 months"],
            ["Co-op", "About 3 to 4 months"],
            ["New development", "Set by construction. It can be months or more than a year."],
          ],
        },
      },
      {
        h: "What slows a purchase down",
        list: [
          "An incomplete board package. Managing agents send them back.",
          "A slow appraisal, or a bank that needs more information about the building.",
          "Boards that meet once a month, or not at all in August.",
          "Open permits, liens or missing documents found by your attorney.",
        ],
      },
    ],
    faq: [
      { q: "Is an accepted offer binding in New York?", a: "No. In New York a deal becomes binding only when both the buyer and the seller have signed the contract and the deposit has been paid." },
      { q: "How long does co-op board approval take?", a: "Commonly four to eight weeks from the day a complete package is submitted, including the interview. It varies by building and by time of year." },
      { q: "How much is the deposit when buying an apartment in NYC?", a: "The contract deposit is usually 10 percent of the purchase price, paid when you sign the contract and held in escrow by the seller's attorney until closing." },
    ],
    related: [
      { label: "How to Buy in NYC", href: "/guides/how-to-buy-in-nyc" },
      { label: "The Co-op Board Package and Interview", href: "/guides/coop-board-package-interview" },
      { label: "Executive relocation", href: "/situations/executive-relocation-nyc" },
    ],
  },
  {
    slug: "coop-board-package-interview",
    title: "The Co-op Board Package and Interview",
    topic: "Building types",
    blurb: "What a co-op board asks for, what it looks at, and how to prepare.",
    metaDescription: "What goes into a NYC co-op board package, what boards look for in your finances, how the interview works, and how to prepare. Plain-language guide for buyers.",
    lead: "Buying a co-op means being approved by the people who will be your neighbors. The board reviews a detailed file on your finances and then meets you. Most rejections trace back to the file, not the interview, so the preparation matters more than the conversation.",
    published: "2026-11-14",
    updated: "2026-11-14",
    sections: [
      {
        h: "What goes in the package",
        list: [
          "The building's application form and the signed contract of sale.",
          "A financial statement listing your assets, debts, income and expenses.",
          "Tax returns, usually for the last two years.",
          "Recent bank, brokerage and retirement account statements that support the financial statement.",
          "A letter from your employer confirming your position and pay.",
          "Reference letters: personal, professional, and often from a landlord.",
          "Your loan commitment letter, if you are borrowing.",
        ],
      },
      {
        h: "What the board looks at",
        p: ["Each building sets its own standards, and many do not publish them. Three measures come up almost everywhere."],
        list: [
          "Down payment. Many co-ops require at least 20 or 25 percent. Some require far more, and a few allow no financing.",
          "Debt-to-income. Many boards want your total monthly debt payments, including the new home, to stay under roughly 25 to 30 percent of your income.",
          "Liquidity after closing. Boards commonly want to see one to two years of mortgage and maintenance payments left in accessible accounts.",
        ],
      },
      {
        h: "Ask before you bid",
        p: ["The best time to learn a building's requirements is before the offer. The listing agent or managing agent can usually tell you the minimum down payment, the financial expectations, and the rules on pets, renovations, guarantors, gifts from family, and using the apartment as a second home."],
      },
      {
        h: "The interview",
        p: ["If the package is in order, you are invited to meet the board, in person or by video. It usually lasts under half an hour. The board has read your file. Answer what is asked, briefly and plainly. It is not the moment to raise renovation plans or ask about building problems. Your attorney has already done that work."],
      },
      {
        h: "The decision",
        p: ["Boards generally reply within a few days to two weeks. A board does not have to give a reason for turning a buyer down. It may not discriminate on grounds protected by fair housing law. If you are declined, the contract normally ends and your deposit is returned."],
      },
    ],
    faq: [
      { q: "What do NYC co-op boards look for?", a: "Mainly financial strength and stability: a sufficient down payment, a debt-to-income ratio often under 25 to 30 percent, and liquid assets left after closing, commonly one to two years of housing costs. Requirements differ by building." },
      { q: "Can a co-op board reject you without a reason?", a: "Yes. A board is generally not required to explain a decision, although it may not discriminate on grounds protected by federal, state and city fair housing laws." },
      { q: "How long is a co-op board interview?", a: "Usually 15 to 30 minutes. It is typically the last step, held after the board has reviewed the full package." },
    ],
    related: [
      { label: "Condo vs Co-op", href: "/situations/condo-vs-coop" },
      { label: "Co-op, Condo and Condop Terms", href: "/situations/coop-condo-condop-terms" },
      { label: "Upper East Side", href: "/situations/upper-east-side-buyers-nyc" },
    ],
  },
  {
    slug: "new-development-vs-resale-manhattan",
    title: "New Development vs Resale in Manhattan",
    topic: "Buying in New York",
    blurb: "What changes when you buy from a developer: costs, timing, risk and what you can verify.",
    metaDescription: "New development or resale in Manhattan? How closing costs, deposits, timing, tax abatements and building track record differ, and what to check first.",
    lead: "A new building and an existing one are different purchases, even at the same price. With a resale you buy a known apartment in a building with a record. With new development you buy from the developer, often before the building is finished, on the developer's terms.",
    published: "2026-11-14",
    updated: "2026-11-14",
    sections: [
      {
        h: "Side by side",
        table: {
          head: ["", "New development", "Resale"],
          rows: [
            ["Who you buy from", "The developer, called the sponsor.", "The current owner."],
            ["Approval", "No board approval for a sponsor sale.", "Board approval in a co-op. A lighter review in a condominium."],
            ["Closing costs", "Higher. Buyers are often asked to pay the sponsor's transfer taxes and attorney fee.", "Lower. The seller pays the transfer taxes."],
            ["Timing", "Set by construction. Can be many months after signing.", "Usually two to four months."],
            ["What you can inspect", "Plans, a model apartment and the offering plan.", "The actual apartment and the building's history."],
            ["Monthly costs", "Based on a first-year budget, which is an estimate.", "Based on real operating history."],
          ],
        },
      },
      {
        h: "The offering plan",
        p: ["Every new condominium or co-op in New York is sold under an offering plan filed with the state Attorney General. It describes the building, the budget, the sponsor's obligations and your rights. It is long, and it is the document that governs the sale. Your attorney reads it before you sign."],
      },
      {
        h: "Deposits and timing",
        p: ["Deposits on new development are often 10 percent at signing, and sometimes more in stages before closing. If the building is unfinished, your money waits in escrow until it is. Ask what happens if completion runs late, and whether your mortgage rate lock can cover the delay."],
      },
      {
        h: "Monthly costs can change",
        p: ["Common charges in a new building start from a projected budget. Once the building is running, the real numbers replace the estimate. Property taxes may also begin low under an abatement and step up on a set schedule. Ask for the schedule, and look at the cost in year ten as well as year one."],
      },
      {
        h: "What a resale lets you verify",
        list: [
          "Years of financial statements and the size of the reserve fund.",
          "Board minutes, which show leaks, disputes and planned work.",
          "How apartments in the building have actually resold.",
          "How the building is staffed and kept, by visiting it.",
        ],
      },
      {
        h: "How to decide",
        p: ["New development suits buyers who want modern systems, a warranty period and no board, and who can wait. Resale suits buyers who want certainty about what they are getting and when. Either way, the building deserves as much attention as the apartment."],
      },
    ],
    faq: [
      { q: "Are closing costs higher for new development in NYC?", a: "Usually, yes. Buyers of sponsor units are commonly asked to pay the New York City and State transfer taxes and the sponsor's attorney fee, on top of their own costs. These terms are sometimes negotiable." },
      { q: "What is a sponsor unit?", a: "It is an apartment sold directly by the building's developer, or sponsor. In a co-op, a sponsor sale typically does not need board approval." },
      { q: "What is an offering plan?", a: "It is the disclosure document a developer must file with the New York State Attorney General before selling apartments in a new condominium or co-op. It sets out the building's details, budget and the terms of sale." },
    ],
    related: [
      { label: "Closing Costs for Buyers in Manhattan", href: "/guides/closing-costs-manhattan-buyers" },
      { label: "Building Profiles", href: "/building-reports/individual-buildings" },
      { label: "Hudson Yards", href: "/situations/hudson-yards-buyers-nyc" },
    ],
  },
];
