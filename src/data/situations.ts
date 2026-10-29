// The twelve "what's changing" situations. ready: false shows as "Coming soon" on the hub.
// Draft copy for review: written in the site's voice from the live page structure, no figures or promises.

export interface Situation {
  slug: string;
  name: string;
  title: string;
  blurb: string;
  ready: boolean;
  lead?: string;
  matters?: string[];
  recommendation?: string;
  related?: string[];
}

export const situationGroups = [
  { title: "Home and family", slugs: ["first-home-buyers-nyc", "marriage-housing-nyc", "new-baby-growing-family-nyc", "empty-nester-downsizing-nyc"] },
  { title: "Work and money", slugs: ["executive-relocation-nyc", "job-loss-housing-nyc", "remote-work-housing-nyc", "inheritance-housing-nyc"] },
  { title: "Later life and change", slugs: ["retiree-senior-home-buyers-nyc", "aging-parents-housing-nyc", "divorce-property-sales-nyc"] },
];

export const situations: Situation[] = [
  {
    slug: "first-home-buyers-nyc", name: "First home", title: "First home in New York",
    blurb: "What you can carry, how long you will stay, and which building type fits.", ready: true,
    lead: "Buying a first home in New York is less about the apartment than about the next five years. The decision is how much you can carry, how long you will stay, and what you are willing to trade.",
    matters: [
      "Set the monthly number you can comfortably carry before you start looking.",
      "Weigh co-op, condo and condop on rules and flexibility as well as price.",
      "Plan for the costs people miss: board packages, closing costs and reserves.",
    ],
    recommendation: "Set your ceiling and your timeline first. Then let the building type narrow the search.",
    related: ["marriage-housing-nyc", "new-baby-growing-family-nyc"],
  },
  {
    slug: "marriage-housing-nyc", name: "Marriage", title: "Housing after marriage",
    blurb: "Two housing situations becoming one, and what to decide together.", ready: true,
    lead: "Marriage often turns two housing situations into one. Space, location, commute and money all need to be decided together, and the first answer is rarely the last one.",
    matters: [
      "Name what each person needs from the next home before touring.",
      "Decide whether to merge, rent, or keep one place while you plan.",
      "Check with your attorney how title, mortgage and board rules treat a couple.",
    ],
    recommendation: "Agree on the next three years first. Choose the place that fits that stretch.",
    related: ["first-home-buyers-nyc", "new-baby-growing-family-nyc"],
  },
  {
    slug: "new-baby-growing-family-nyc", name: "Growing family", title: "A growing family",
    blurb: "More space, schools and daily logistics: stretch now or plan a second move.", ready: true,
    lead: "A growing family changes what a home has to do: more space, better light, schools, and a street that works at nine at night. The question is whether to stretch now or plan a second move.",
    matters: [
      "List the real constraints: bedrooms, stroller storage, elevator and school zone.",
      "Compare moving now with renovating or reconfiguring the home you have.",
      "Decide how long you expect to stay before paying for space you will outgrow again.",
    ],
    recommendation: "Choose the arrangement that works for the next five years, and price the cost of moving again.",
    related: ["marriage-housing-nyc", "empty-nester-downsizing-nyc"],
  },
  {
    slug: "empty-nester-downsizing-nyc", name: "Empty nest", title: "Empty nest and downsizing",
    blurb: "When the home stays the same size and life gets smaller.", ready: true,
    lead: "When children move out, the home often stays the same size while life gets smaller. The decision is whether the space still earns its cost, and what you want daily life to look like next.",
    matters: [
      "Separate the emotional value of the home from the monthly cost of keeping it.",
      "Consider the full range: stay, renovate, rent part of it, or downsize.",
      "Look at taxes, maintenance and stairs alongside the sale price.",
    ],
    recommendation: "Decide the life you want first, then see which home fits it, whether that is this one or another.",
    related: ["new-baby-growing-family-nyc"],
  },
  {
    slug: "executive-relocation-nyc", name: "Executive relocation", title: "Executive relocation",
    blurb: "A fast move for work, with limited time to decide.", ready: true,
    lead: "A relocation for work compresses the timeline. You may have only weeks to choose a neighborhood and a lease or a purchase, and the company's package changes the math.",
    matters: [
      "Separate what the employer is paying for from what you are committing to.",
      "Decide between renting first and buying now by how sure you are of the role and the city.",
      "Choose the commute and neighborhood before the building, and leave time for a lease or board approval.",
    ],
    recommendation: "Rent well if the role is unproven. Buy when you can commit to a horizon of several years.",
    related: ["remote-work-housing-nyc", "job-loss-housing-nyc"],
  },
  {
    slug: "job-loss-housing-nyc", name: "Job change", title: "Job change",
    blurb: "When income or location changes and the home has to answer.", ready: true,
    lead: "A new job, a lost job or a change in pay can turn a settled housing plan into an open question. The right move depends on how stable the next income is and how flexible your home is.",
    matters: [
      "Know your runway: what you can carry, and for how long, if income dips.",
      "List what can flex: lease timing, a roommate, renting out space, or selling.",
      "Avoid irreversible moves until the new income is clear.",
    ],
    recommendation: "Protect your flexibility first. Make the permanent decision once the income picture is clear.",
    related: ["executive-relocation-nyc", "remote-work-housing-nyc"],
  },
  {
    slug: "remote-work-housing-nyc", name: "Remote work", title: "Remote work",
    blurb: "When the office is no longer the reason to live where you do.", ready: true,
    lead: "When the office stops deciding where you live, the question becomes what you want from a home and a city. The freedom is real, and so is the pull to over-decide.",
    matters: [
      "Decide what the home must do all day: a quiet room, good light, space to host.",
      "Compare paying for more space in New York with moving and keeping a smaller base here.",
      "Check with your advisers how a change of residence affects taxes, leases and board rules.",
    ],
    recommendation: "Design for the way you work now, and keep the option to change again.",
    related: ["job-loss-housing-nyc", "executive-relocation-nyc"],
  },
  {
    slug: "inheritance-housing-nyc", name: "Inheritance", title: "Inheritance",
    blurb: "A property or proceeds arriving, and what to do with them.", ready: true,
    lead: "Inheriting a home or proceeds brings a decision most people did not plan for: keep it, sell it, rent it, or move in. Timing, taxes and family agreements all weigh on the answer.",
    matters: [
      "Get the facts first: title, any mortgage or loan, carrying costs, and who must agree.",
      "Compare keeping, renting and selling on cost after tax, with your accountant.",
      "Give family decisions their own time, apart from the property decisions.",
    ],
    recommendation: "Slow the first decision and speed up the facts. Choose once title, costs and family agreement are clear.",
    related: ["aging-parents-housing-nyc", "empty-nester-downsizing-nyc"],
  },
  {
    slug: "retiree-senior-home-buyers-nyc", name: "Retirement", title: "Retirement",
    blurb: "Staying, moving or simplifying for the next chapter.", ready: true,
    lead: "Retirement changes what a home is for. Stairs, upkeep, cost and closeness to family start to matter more than space and address.",
    matters: [
      "Price the full cost of staying, including upkeep and anything you would add to age in place.",
      "Compare staying, downsizing, and moving closer to family or care.",
      "Decide how liquid you want to be, and what a sale or a move would free up.",
    ],
    recommendation: "Choose the home that fits the next ten years of daily life, then check the numbers against it.",
    related: ["empty-nester-downsizing-nyc", "aging-parents-housing-nyc"],
  },
  {
    slug: "aging-parents-housing-nyc", name: "Aging parents", title: "Aging parents",
    blurb: "Housing decisions for, and with, the people who raised you.", ready: true,
    lead: "Housing decisions for aging parents involve safety, money and feelings all at once. The best answer usually starts with what your parent wants and what the home can support.",
    matters: [
      "Start with your parent's wishes, then test them against safety and cost.",
      "Compare staying with changes, moving closer, and moving in together.",
      "Settle who decides, who pays and who manages before anything is signed.",
    ],
    recommendation: "Make the plan together early, while there is time to choose and not just react.",
    related: ["retiree-senior-home-buyers-nyc", "inheritance-housing-nyc"],
  },
  {
    slug: "divorce-property-sales-nyc", name: "Divorce", title: "Divorce",
    blurb: "Dividing a home with clarity and control.", ready: true,
    lead: "Divorce puts a home at the center of a larger settlement. The decision is whether one person keeps it, you sell it, or you hold it for a time, and each path has costs for both of you.",
    matters: [
      "Get a clear value and the true carrying cost before anything is negotiated.",
      "Compare buying out one person, selling, and holding for a set period.",
      "Keep housing decisions in step with your attorneys and the settlement.",
    ],
    recommendation: "Separate what you want from what the numbers allow. Then choose the path that both of you can carry.",
    related: ["inheritance-housing-nyc", "first-home-buyers-nyc"],
  },
];

export const decisionChoices = [
  { label: "Buy", value: "Buy" },
  { label: "Sell", value: "Sell" },
  { label: "Rent", value: "Rent" },
  { label: "Renew lease", value: "Renew lease" },
  { label: "Stay put", value: "Wait / stay put" },
  { label: "Wait", value: "Wait / stay put" },
  { label: "Renovate", value: "Renovate" },
  { label: "Refinance", value: "Refinance" },
  { label: "Sell or keep", value: "Rent current home" },
];
