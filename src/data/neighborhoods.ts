// Neighborhood guides for buyers. One entry per page under /situations/<slug>.
// Draft copy for review. General, durable facts only: no prices, no school zones, nothing that dates quickly.
// `hoods` are the neighborhood names used in the building data, so each guide can list the buildings we cover there.

import { newBuildings } from "./newBuildings";
import { buildingLibrary } from "./buildingLibrary";

export interface Neighborhood {
  slug: string;
  name: string;
  /** How the name reads in a sentence: "the Upper West Side", "Tribeca". */
  inName: string;
  area: "Uptown" | "Midtown" | "West side" | "Downtown";
  blurb: string;
  /** Shown in Google results. Aim for 140 to 160 characters. */
  metaDescription: string;
  lead: string;
  where: string;
  transit: string;
  stock: string[];
  suits: string[];
  tradeoffs: string[];
  decide: string[];
  recommendation: string;
  faq: { q: string; a: string }[];
  hoods: string[];
  compare: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: "upper-west-side-buyers-nyc",
    name: "Upper West Side",
    inName: "the Upper West Side",
    area: "Uptown",
    blurb: "Schools, park adjacency, co-op culture, and classic residential rhythm.",
    metaDescription: "A buyer's guide to the Upper West Side: prewar co-ops, newer condos, two parks, and the questions to settle before you tour. Independent Manhattan advice.",
    lead: "Upper West Side decisions hinge on school convenience, park adjacency, co-op culture, building age, and whether the neighborhood supports the reason for moving.",
    where: "The Upper West Side runs from 59th Street to 110th Street, between Central Park and the Hudson River. Central Park sits on one side and Riverside Park on the other, with Lincoln Center at the southern end and the American Museum of Natural History in the middle.",
    transit: "The 1, 2 and 3 trains run under Broadway. The B and C run under Central Park West.",
    stock: [
      "Prewar co-ops along Central Park West, West End Avenue and Riverside Drive make up most of what sells.",
      "Brownstones and townhouses line the side streets, some single family and some divided into apartments.",
      "Newer condominiums cluster near Lincoln Center, along Broadway and by the river in the 60s.",
    ],
    suits: [
      "Households that want two large parks within a short walk.",
      "Buyers comfortable with a co-op board and a longer approval.",
      "People who plan to stay for many years.",
    ],
    tradeoffs: [
      "Co-ops dominate, so financing limits, board packages and sublet rules shape the choice.",
      "Older buildings mean assessments, facade work and window rules are part of ownership.",
      "New condominiums are fewer and priced above comparable co-ops.",
    ],
    decide: [
      "Use school and park logistics to narrow micro-neighborhoods before touring every classic co-op.",
      "Separate cosmetic apartment issues from board and building constraints early.",
      "Start with lifestyle and school logistics before comparing every listing.",
    ],
    recommendation: "Compare co-op value against condominium ease with a clear residency horizon.",
    faq: [
      { q: "Is the Upper West Side mostly co-ops or condos?", a: "Mostly co-ops. The prewar buildings on Central Park West, West End Avenue and Riverside Drive are largely cooperatives. Condominiums exist, mainly in newer buildings near Lincoln Center, along Broadway and by the river." },
      { q: "What should I check before buying in a prewar Upper West Side co-op?", a: "Read the building before the apartment. Look at the financial statements, the reserve fund, any planned assessments, the underlying mortgage, and the rules on financing, renovation and subletting. Your attorney reviews the board minutes for the rest." },
      { q: "How is the Upper West Side different from the Upper East Side for a buyer?", a: "Both are residential and co-op heavy. The West Side has two parks and a slightly more relaxed building culture. The East Side has deeper inventory and more full-service buildings, and some of its boards are stricter." },
    ],
    hoods: ["Upper West Side"],
    compare: ["upper-east-side-buyers-nyc", "midtown-buyers-nyc"],
  },
  {
    slug: "upper-east-side-buyers-nyc",
    name: "Upper East Side",
    inName: "the Upper East Side",
    area: "Uptown",
    blurb: "Deep inventory with nuanced co-op boards, service buildings, and family-oriented tradeoffs.",
    metaDescription: "A buyer's guide to the Upper East Side: Fifth and Park Avenue co-ops, Carnegie Hill, Yorkville condos, and how to read a board before you bid.",
    lead: "Upper East Side inventory is deep, so the decision is rarely about finding something. It turns on how each co-op board works, how well a service building is run, and which side street or avenue fits daily life.",
    where: "The Upper East Side runs from 59th Street to 96th Street, between Fifth Avenue and the East River. It includes Lenox Hill, Carnegie Hill and Yorkville, with Central Park and Museum Mile along its western edge.",
    transit: "The 4, 5 and 6 trains run under Lexington Avenue. The Q runs under Second Avenue, and the F stops at 63rd Street.",
    stock: [
      "Prewar co-ops on Fifth and Park Avenues, many with full staff and formal layouts.",
      "Postwar towers east of Third Avenue, both co-op and condominium, with more flexible rules.",
      "Townhouses on the side streets, and newer condominiums in Yorkville and along the avenues.",
    ],
    suits: [
      "Buyers who want a full-service building and a settled residential feel.",
      "Households that value proximity to Central Park and the museums.",
      "Buyers who want a wide choice of buildings at different levels of formality.",
    ],
    tradeoffs: [
      "Some Fifth and Park Avenue co-ops limit financing sharply or do not allow it at all.",
      "The blocks near the river are a longer walk to the Lexington Avenue trains.",
      "Board expectations vary building by building, and they are not written on the listing.",
    ],
    decide: [
      "Learn how the boards in your target buildings actually behave before falling for an apartment.",
      "Compare service buildings by staffing, rules and upkeep.",
      "Choose the avenue and side-street rhythm that fits family life.",
    ],
    recommendation: "Narrow to a handful of buildings whose boards you understand, then compare apartments.",
    faq: [
      { q: "Are Upper East Side co-op boards hard to pass?", a: "It depends on the building. Some boards on Fifth and Park Avenues ask for substantial liquid assets after closing and restrict or forbid financing. Many buildings further east are more flexible. Ask about the building's requirements before you bid." },
      { q: "Where are the condos on the Upper East Side?", a: "Condominiums are more common east of Third Avenue and in Yorkville, in postwar towers and newer buildings. There are also a small number of new condominiums on and near the avenues closer to the park." },
      { q: "Is Carnegie Hill different from the rest of the Upper East Side?", a: "Carnegie Hill, roughly 86th to 96th Street near the park, is quieter and lower in scale, with a strong townhouse and prewar character. It trades at a premium for that feel." },
    ],
    hoods: ["Upper East Side"],
    compare: ["upper-west-side-buyers-nyc", "midtown-buyers-nyc"],
  },
  {
    slug: "tribeca-buyers-nyc",
    name: "Tribeca",
    inName: "Tribeca",
    area: "Downtown",
    blurb: "Low-volume, high-conviction buying shaped by loft scale, privacy, and family floor plans.",
    metaDescription: "A buyer's guide to Tribeca: converted lofts, new condominium towers, landmark blocks, and what to test before you commit. Independent Manhattan advice.",
    lead: "Tribeca is low volume and high conviction. Loft scale, privacy and family floor plans drive the decision, and the architecture still has to hold up as ownership.",
    where: "Tribeca sits in Lower Manhattan, south of Canal Street and west of Broadway, reaching down toward Vesey Street and across to the Hudson River. Much of it is protected by historic districts, and Hudson River Park runs along its western edge.",
    transit: "The 1 stops at Canal, Franklin and Chambers Streets. The 2 and 3 stop at Chambers Street, and the A, C and E stop at Canal and Chambers.",
    stock: [
      "Converted warehouse and cast-iron loft buildings, most of them condominiums and a few co-ops.",
      "Boutique new condominiums built to match the scale of the old blocks.",
      "A small number of tall condominium towers at the southern and eastern edges.",
    ],
    suits: [
      "Households that want large, open floor plans rather than formal rooms.",
      "Buyers who value privacy and low-key buildings.",
      "People who prefer condominium ownership and a quieter downtown street life.",
    ],
    tradeoffs: [
      "Few apartments come up at any one time, so the right one may take months.",
      "Loft conversions vary widely in light, ceiling height, mechanical systems and staffing.",
      "Small buildings spread their costs across fewer owners.",
    ],
    decide: [
      "Decide whether loft scale suits how you live.",
      "Expect fewer listings and be ready to act on the right one.",
      "Test privacy, layout and building rules against family needs.",
    ],
    recommendation: "Hold the architecture to the same ownership tests as any other building.",
    faq: [
      { q: "Is Tribeca mostly condos?", a: "Yes. Most Tribeca apartments are condominiums, in converted loft buildings and in newer developments. There are some loft co-ops, usually small and self-managed." },
      { q: "What should I look for in a Tribeca loft conversion?", a: "Look past the ceiling height. Check natural light in the interior rooms, the age of the elevator and mechanical systems, the size of the reserve fund, how many owners share the costs, and whether the building has staff." },
      { q: "How does Tribeca compare with SoHo for a buyer?", a: "Both offer lofts. Tribeca is more residential and quieter, with more family-sized condominiums. SoHo has heavier retail and visitor traffic, and more of its lofts are co-ops with their own rules." },
    ],
    hoods: ["Tribeca"],
    compare: ["soho-buyers-nyc", "financial-district-buyers-nyc", "west-village-buyers-nyc"],
  },
  {
    slug: "west-village-buyers-nyc",
    name: "West Village",
    inName: "the West Village",
    area: "Downtown",
    blurb: "Townhouse blocks, tight supply, and a small set of boutique condominiums by the river.",
    metaDescription: "A buyer's guide to the West Village: townhouses, small prewar co-ops, riverfront condominiums, and why supply stays tight. Independent Manhattan advice.",
    lead: "The West Village is small in scale and short on supply. The historic district limits new building, so the choice is usually between an older small building with character and one of a few modern condominiums near the river.",
    where: "The West Village lies between Houston Street and 14th Street, west of Sixth Avenue to the Hudson River. Its streets break from the Manhattan grid, and most of the neighborhood sits inside the Greenwich Village Historic District.",
    transit: "The 1 stops at Christopher Street and Houston Street. The A, C, E, B, D, F and M meet at West 4th Street, and the L runs along 14th Street.",
    stock: [
      "Townhouses, both single family and divided into apartments.",
      "Small prewar co-ops, often walk-ups or buildings with part-time staff.",
      "A limited number of full-service condominiums, most of them toward the river.",
    ],
    suits: [
      "Buyers who put street character ahead of amenities.",
      "People who want a low-rise neighborhood that still sits close to everything downtown.",
      "Townhouse buyers prepared for the upkeep that comes with one.",
    ],
    tradeoffs: [
      "Very little comes to market, and good apartments draw several buyers.",
      "Older small buildings often lack an elevator, a doorman or central air.",
      "Landmark rules shape what you may change on the outside of a building.",
    ],
    decide: [
      "Decide between character and convenience before you tour, because few buildings offer both.",
      "Check what a small co-op's finances look like when a large repair arrives.",
      "Walk the block on a weekend night as well as a weekday morning.",
    ],
    recommendation: "Choose the kind of building first. In the West Village that choice narrows the search more than price does.",
    faq: [
      { q: "Why is it hard to find an apartment to buy in the West Village?", a: "Supply is limited. Most of the neighborhood is a historic district, so little new housing can be built, and owners tend to stay a long time. Expect a slower search than in neighborhoods with large towers." },
      { q: "Are there doorman buildings in the West Village?", a: "Yes, but not many. Full-service buildings are mostly newer condominiums near the Hudson River, along with a few larger prewar and postwar buildings. Most of the housing is townhouses and small co-ops." },
      { q: "What comes with owning a townhouse in the West Village?", a: "You own the whole building, so the roof, the facade, the boiler and the sidewalk are yours to maintain. Exterior changes in the historic district need approval from the Landmarks Preservation Commission." },
    ],
    hoods: ["West Village"],
    compare: ["chelsea-buyers-nyc", "tribeca-buyers-nyc", "soho-buyers-nyc"],
  },
  {
    slug: "soho-buyers-nyc",
    name: "SoHo",
    inName: "SoHo",
    area: "Downtown",
    blurb: "Cast-iron lofts with their own rules, heavy retail streets, and newer condominiums toward Hudson Square.",
    metaDescription: "A buyer's guide to SoHo: cast-iron lofts, co-op and artist-residence rules, Hudson Square condominiums, and what to check with your attorney first.",
    lead: "SoHo offers some of the most distinctive apartments in Manhattan, and some of the most particular buildings. The loft is the attraction. The rules behind it decide whether it works as a home.",
    where: "SoHo runs from Houston Street down to Canal Street, roughly between Sixth Avenue and Lafayette Street. Most of it lies within the SoHo-Cast Iron Historic District. Hudson Square, just to the west, has newer residential buildings.",
    transit: "The R and W stop at Prince Street, the 6 at Spring Street, and the C and E at Spring Street. The B, D, F and M stop at Broadway-Lafayette.",
    stock: [
      "Cast-iron loft buildings, many of them small co-ops with few apartments per floor.",
      "Loft condominiums, converted over the years from commercial use.",
      "Newer full-service condominiums, mostly at the edges and in Hudson Square.",
    ],
    suits: [
      "Buyers who want real loft proportions: high ceilings, large windows and open space.",
      "People who enjoy an active street and do not need a quiet block.",
      "Buyers ready to do extra homework on a building's legal status.",
    ],
    tradeoffs: [
      "Retail and visitors make the main streets crowded, especially on weekends.",
      "Some loft buildings carry artist-residence zoning rules that affect who may live there and how a sale works.",
      "Small buildings often have limited staff, older systems and shared costs across few owners.",
    ],
    decide: [
      "Have your attorney confirm the building's certificate of occupancy and any artist-residence requirement early.",
      "Stand in the apartment at night and on a Saturday afternoon to judge noise.",
      "Compare a classic loft against a Hudson Square condominium for daily ease.",
    ],
    recommendation: "Clear the legal and building questions first. Then let the loft make its case.",
    faq: [
      { q: "What is an artist-in-residence loft in SoHo?", a: "Parts of SoHo were zoned as joint living and work quarters for artists, which historically required a certified artist to live in the unit. The rules have changed over time and differ by building, so your attorney should confirm what applies before you sign." },
      { q: "Are SoHo lofts co-ops or condos?", a: "Both. Many of the older cast-iron buildings are small co-ops. Others were converted to condominiums. Newer full-service buildings near Hudson Square are condominiums." },
      { q: "Is SoHo too busy to live in?", a: "It depends on the block and the floor. Broadway and the main shopping streets are crowded during the day. Side streets and higher floors are calmer. Visit at different times before deciding." },
    ],
    hoods: ["SoHo", "SoHo and Hudson Square"],
    compare: ["tribeca-buyers-nyc", "west-village-buyers-nyc"],
  },
  {
    slug: "chelsea-buyers-nyc",
    name: "Chelsea",
    inName: "Chelsea",
    area: "West side",
    blurb: "Gallery adjacency, West Chelsea new product, High Line access, and design-forward towers.",
    metaDescription: "A buyer's guide to Chelsea and West Chelsea: High Line condominiums, prewar co-ops, townhouse blocks, and how to judge a design-forward building.",
    lead: "Chelsea mixes gallery-district character, West Chelsea new product and High Line access. The towers are design forward, and they still need lifestyle filters.",
    where: "Chelsea runs from 14th Street up to about 30th Street, between Sixth Avenue and the Hudson River. West Chelsea, the blocks west of Tenth Avenue, holds the galleries and the High Line. The Chelsea Historic District covers the townhouse blocks in the low 20s.",
    transit: "The 1 runs under Seventh Avenue, the C and E under Eighth Avenue, and the F and M under Sixth Avenue. The L runs along 14th Street. West Chelsea is a longer walk to all of them.",
    stock: [
      "New condominiums along the High Line and the river, many by well-known architects.",
      "Prewar co-ops and loft buildings in the central blocks.",
      "Townhouses in the historic district around the General Theological Seminary.",
    ],
    suits: [
      "Buyers who care about architecture and want a newer building.",
      "People who want the High Line, the galleries and Hudson River Park close by.",
      "Buyers who prefer condominium ownership to a co-op board.",
    ],
    tradeoffs: [
      "The far west blocks sit several avenues from the nearest subway.",
      "Apartments facing the High Line trade some privacy for the view.",
      "New buildings carry higher monthly costs, and tax abatements end on a schedule.",
    ],
    decide: [
      "Choose which Chelsea you want: gallery blocks, West Chelsea or the High Line edge.",
      "Judge a design-forward tower by how daily life works inside it.",
      "Apply lifestyle filters before the view makes the decision.",
    ],
    recommendation: "Pick the Chelsea you want to live in first, then compare buildings.",
    faq: [
      { q: "What is the difference between Chelsea and West Chelsea?", a: "West Chelsea is the part of Chelsea west of Tenth Avenue, around the galleries and the High Line. It is where most of the new condominium buildings stand. Central Chelsea is older, with prewar co-ops, lofts and townhouses, and it is closer to the subway." },
      { q: "Is it worth living next to the High Line?", a: "For many buyers, yes. It brings open space and light. It also brings visitors walking past at window height in some buildings. Check the exact floor and exposure of the apartment, at a busy time of day." },
      { q: "How should I compare new condominiums in West Chelsea?", a: "Compare how they run, not how they photograph. Look at monthly costs, staffing, the amenities you will use, the distance to transit, and how the building has resold. Our building profiles cover several of them." },
    ],
    hoods: ["Chelsea", "West Chelsea"],
    compare: ["hudson-yards-buyers-nyc", "west-village-buyers-nyc", "flatiron-gramercy-buyers-nyc"],
  },
  {
    slug: "hudson-yards-buyers-nyc",
    name: "Hudson Yards",
    inName: "Hudson Yards",
    area: "West side",
    blurb: "Amenity-heavy new development that needs commute, carrying-cost and use-case testing.",
    metaDescription: "A buyer's guide to Hudson Yards: condominium towers, amenities, monthly costs and commute, compared with Chelsea and Tribeca. Independent advice.",
    lead: "Hudson Yards is amenity-heavy new development. It needs commute, carrying-cost and use-case pressure testing, especially against Chelsea and Tribeca alternatives.",
    where: "Hudson Yards sits on the far west side of Manhattan, around 30th to 34th Streets between Tenth Avenue and the Hudson River. It was built over working rail yards and joins the northern end of the High Line.",
    transit: "The 7 train stops at 34th Street-Hudson Yards. Penn Station, with the 1, 2, 3, A, C and E and regional rail, is a few avenues east.",
    stock: [
      "A small number of large condominium towers with hotel-style services.",
      "Rental towers around them, which shape how the area feels day to day.",
      "Offices, shops and restaurants built as part of the same development.",
    ],
    suits: [
      "Buyers who want a new building with extensive amenities and staff.",
      "People who work in the towers or travel often through Penn Station.",
      "Owners who will use the apartment part of the year and want everything handled.",
    ],
    tradeoffs: [
      "Monthly costs are high, because the amenities and staff are shared by the owners.",
      "The area is newer and more commercial than a traditional residential neighborhood.",
      "One subway line serves the neighborhood directly.",
    ],
    decide: [
      "Pressure test the commute and the carrying costs of an amenity-heavy tower.",
      "Decide which amenities you will actually use.",
      "Compare it against Chelsea and Tribeca before committing.",
    ],
    recommendation: "Treat Hudson Yards as a question of how you will use it.",
    faq: [
      { q: "Are Hudson Yards apartments condos?", a: "The apartments for sale are condominiums, in a small number of towers. Many of the surrounding buildings are rentals." },
      { q: "Why are monthly costs high in Hudson Yards buildings?", a: "The towers offer large amenity floors and full staffing, and owners pay for them through common charges. Ask for the full monthly figure, including taxes, and which amenities carry separate fees." },
      { q: "Is Hudson Yards a real neighborhood?", a: "It is a planned development that opened in stages starting in 2019, so it feels newer and more commercial than older parts of Manhattan. Chelsea, with its side streets and older buildings, begins a few blocks south." },
    ],
    hoods: ["Hudson Yards"],
    compare: ["chelsea-buyers-nyc", "midtown-buyers-nyc", "tribeca-buyers-nyc"],
  },
  {
    slug: "midtown-buyers-nyc",
    name: "Midtown",
    inName: "Midtown",
    area: "Midtown",
    blurb: "Tall condominium towers near Central Park, hotel services, and a home that is often a second one.",
    metaDescription: "A buyer's guide to Midtown Manhattan and Billionaires' Row: supertall condominiums, hotel-serviced residences, park views and the costs behind them.",
    lead: "Midtown is where Manhattan's tallest residential towers stand. Buyers come for the views, the services and the location. The decision is about how you will use the home, and what the building costs to hold.",
    where: "Midtown covers the center of Manhattan, from about 34th Street to 59th Street. For buyers, the best-known stretch is the corridor along 57th Street and Central Park South, often called Billionaires' Row. Sutton Place and Beekman Place sit on the quieter eastern edge.",
    transit: "Almost every subway line passes through Midtown, along with Grand Central Terminal and Penn Station.",
    stock: [
      "Very tall condominium towers near Central Park, with large apartments on high floors.",
      "Residences attached to hotels, with hotel services available to owners.",
      "Prewar and postwar co-ops on the east side, around Sutton Place and Beekman Place.",
    ],
    suits: [
      "Buyers who want a park view and full services above all else.",
      "Owners who will use the apartment as a second home.",
      "International buyers who prefer condominium ownership.",
    ],
    tradeoffs: [
      "The streets are commercial and busy, with less of a neighborhood feel.",
      "Common charges and taxes in the tallest towers are among the highest in the city.",
      "Views are part of the price, and a new tower nearby can change one.",
    ],
    decide: [
      "Decide whether this is a primary home or a second one, because the right building differs.",
      "Ask for the full monthly cost and the history of assessments.",
      "Check what stands, or could be built, between the apartment and the park.",
    ],
    recommendation: "Read the tower as a business you are buying into. Then look at the view.",
    faq: [
      { q: "What is Billionaires' Row?", a: "It is an informal name for the group of very tall luxury condominium towers along and near 57th Street at the southern end of Central Park. Our building profiles cover several of them." },
      { q: "Are Midtown towers good as a primary home?", a: "They can be. They suit people who want services, security and a central location more than a residential street. Many owners use them part of the year, so the buildings can feel quiet." },
      { q: "What should I check before buying in a supertall tower?", a: "Ask about monthly costs, the reserve fund, any building issues that have been reported or litigated, how the elevators and mechanical systems have performed, and how apartments in the building have resold." },
    ],
    hoods: ["Midtown"],
    compare: ["upper-east-side-buyers-nyc", "upper-west-side-buyers-nyc", "hudson-yards-buyers-nyc"],
  },
  {
    slug: "flatiron-gramercy-buyers-nyc",
    name: "Flatiron and Gramercy",
    inName: "Flatiron and Gramercy",
    area: "Midtown",
    blurb: "Loft conversions and new towers around Madison Square Park, beside the quiet co-op blocks of Gramercy.",
    metaDescription: "A buyer's guide to Flatiron, NoMad and Gramercy: loft conversions, Madison Square Park towers, Gramercy Park co-ops and what each asks of an owner.",
    lead: "Flatiron and Gramercy sit side by side and feel different. Flatiron and NoMad are lofts and newer towers around Madison Square Park. Gramercy is prewar co-ops on quiet blocks around a private park.",
    where: "The Flatiron District centers on 23rd Street where Broadway crosses Fifth Avenue, beside Madison Square Park. NoMad continues north of the park. Gramercy lies to the east, around Gramercy Park between 18th and 23rd Streets. Union Square is at the southern end.",
    transit: "The R and W, the 6, and the F and M all stop at 23rd Street. Union Square adds the 4, 5, L, N and Q.",
    stock: [
      "Loft conversions in former commercial buildings, both co-op and condominium.",
      "Newer condominium towers around Madison Square Park and in NoMad.",
      "Prewar co-ops and a few townhouses around Gramercy Park.",
    ],
    suits: [
      "Buyers who want a central location with many subway lines close by.",
      "People choosing between loft space and a classic prewar layout.",
      "Buyers who want a calmer residential block without moving uptown.",
    ],
    tradeoffs: [
      "Flatiron and NoMad are busy during the working day.",
      "Keys to Gramercy Park belong to certain surrounding buildings only, so check before assuming access.",
      "Loft buildings vary in staffing, light and how the conversion was done.",
    ],
    decide: [
      "Choose between the energy around Madison Square Park and the quiet around Gramercy Park.",
      "If park access matters, confirm in writing that the building has keys.",
      "Compare a loft conversion with a new tower on monthly cost and services.",
    ],
    recommendation: "Decide which of the two neighborhoods you are buying. They share a subway stop and little else.",
    faq: [
      { q: "Who gets a key to Gramercy Park?", a: "Gramercy Park is private. Keys go to the buildings and institutions on the lots that surround it, and those buildings set their own rules for residents. A Gramercy address alone does not mean access, so confirm with the building." },
      { q: "Is Flatiron mostly condos or co-ops?", a: "It is mixed. Many older loft buildings are co-ops, while later conversions and the newer towers around Madison Square Park are condominiums." },
      { q: "What is NoMad?", a: "NoMad means north of Madison Square Park. It covers the blocks from about 25th to 30th Street around Broadway and Fifth Avenue, and it has seen several new condominium and hotel buildings." },
    ],
    hoods: ["Flatiron and Gramercy"],
    compare: ["chelsea-buyers-nyc", "west-village-buyers-nyc"],
  },
  {
    slug: "financial-district-buyers-nyc",
    name: "Financial District",
    inName: "the Financial District",
    area: "Downtown",
    blurb: "Commute convenience versus weekend livability across conversions, waterfront stock, and Battery Park City.",
    metaDescription: "A buyer's guide to the Financial District and Battery Park City: office conversions, new towers, land-lease costs and weekend livability.",
    lead: "Financial District decisions weigh commute convenience against weekend livability. Conversions, waterfront stock and Battery Park City options each feel different day to day.",
    where: "The Financial District covers the southern tip of Manhattan, below Chambers Street and the Brooklyn Bridge. Battery Park City runs along the Hudson River on its western side, and the Seaport lies on the East River.",
    transit: "More subway lines meet here than almost anywhere in the city, including the 1, 2, 3, 4, 5, A, C, J, Z, R and W. The PATH train and several ferries also leave from Lower Manhattan.",
    stock: [
      "Former office buildings converted to condominiums, some of them landmarks.",
      "New glass condominium towers with views of the harbor.",
      "Battery Park City buildings beside the river, on land leased from a public authority.",
    ],
    suits: [
      "Buyers who work downtown or want many transit choices.",
      "People who want more space or newer construction for the money than further north.",
      "Buyers who value water views and waterfront parks.",
    ],
    tradeoffs: [
      "Streets are quieter on evenings and weekends than in residential neighborhoods.",
      "Battery Park City buildings pay ground rent, which adds to monthly costs and can rise over time.",
      "Converted office buildings can have deep floor plans with less natural light in interior rooms.",
    ],
    decide: [
      "Weigh the short commute against how the neighborhood feels on a weekend.",
      "Judge conversions, waterfront stock and Battery Park City by daily life.",
      "Visit on a Saturday as well as a weekday.",
    ],
    recommendation: "Decide how much of your week is the commute, then choose the stock.",
    faq: [
      { q: "What is a land lease in Battery Park City?", a: "Buildings in Battery Park City stand on land owned by the Battery Park City Authority. Owners pay ground rent and related charges through their monthly costs. Ask for the terms and the schedule of increases before you compare prices." },
      { q: "Is the Financial District a good place to live?", a: "It suits people who value transit, newer buildings and the waterfront. It is calmer after business hours than most of Manhattan, which some buyers want and others do not. A weekend visit answers the question quickly." },
      { q: "What should I check in an office-to-residential conversion?", a: "Look at window size and how far the rooms sit from them, ceiling heights, the age of the elevators and mechanical systems, and the building's reserve fund. Our building profiles cover several conversions downtown." },
    ],
    hoods: ["Financial District"],
    compare: ["tribeca-buyers-nyc", "soho-buyers-nyc"],
  },
];

export const neighborhoodHref = (n: Neighborhood) => `/situations/${n.slug}`;
export const neighborhoodTitle = (n: Neighborhood) => `Buying in ${n.inName}: A Buyer's Guide`;

// Buildings with a full profile page that do not come from newBuildings.ts.
const profiled = [
  { name: "Lantern House", hood: "West Chelsea", href: "/building-reports/lantern-house" },
  { name: "One High Line", hood: "West Chelsea", href: "/building-reports/one-high-line" },
  { name: "The Cortland", hood: "West Chelsea", href: "/building-reports/the-cortland" },
  { name: "35 Hudson Yards", hood: "Hudson Yards", href: "/building-reports/35-hudson-yards" },
  { name: "565 Broome", hood: "SoHo and Hudson Square", href: "/building-reports/565-broome" },
];

const key = (name: string) => name.toLowerCase().replace(/\b(the|soho|street|avenue|west|rd|th)\b/g, "").replace(/[^a-z0-9]/g, "");

// Buildings we cover in a neighborhood: `profiles` link to a full page, `library` are names in the reference library.
export function buildingsIn(n: Neighborhood) {
  const profiles = [
    ...profiled.filter((b) => n.hoods.includes(b.hood)).map((b) => ({ name: b.name, href: b.href })),
    ...newBuildings.filter((b) => n.hoods.includes(b.hood)).map((b) => ({ name: b.name, href: `/building-reports/${b.slug}` })),
  ];
  const seen = new Set(profiles.map((b) => key(b.name)));
  const library = buildingLibrary.filter((b) => n.hoods.includes(b.hood) && !seen.has(key(b.name))).map((b) => b.name);
  return { profiles, library };
}
