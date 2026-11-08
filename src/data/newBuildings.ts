// Building profiles added from the Desktop zip (agentkammer-v2-local-with-new-buildings). Photos live in buildingPhotos.ts.
// Facts web-checked 2026-11-07 against public sources; where sources disagree the text says so.
export interface NewBuilding { slug: string; name: string; hood: string; dek: string; facts: [string, string][]; suits: [string, string][]; read: string[]; giveUp: string[]; commute: string; photo?: string }
export const newBuildings: NewBuilding[] = [
 {
  "slug": "111-west-57th",
  "name": "111 West 57th",
  "hood": "Midtown",
  "dek": "The skinny Steinway tower, built over a landmark music hall.",
  "facts": [
   [
    "Address",
    "111 West 57th Street, New York"
   ],
   [
    "Neighborhood",
    "Midtown, Billionaires’ Row"
   ],
   [
    "Architect",
    "SHoP Architects"
   ],
   [
    "Developer",
    "JDS Development Group and Property Markets Group"
   ],
   [
    "Completion",
    "2022"
   ],
   [
    "Residences",
    "60 (46 in the tower, 14 in Steinway Hall)"
   ],
   [
    "Height",
    "1,428 feet"
   ],
   [
    "Interiors",
    "Studio Sofield"
   ],
   [
    "Floors",
    "91"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Buyers who want a small building in Midtown with very high floors."
   ],
   [
    "Possible",
    "Finance buyers who split their time between Midtown and downtown."
   ],
   [
    "Poor fit",
    "Buyers who want a large amenity campus or a family block."
   ]
  ],
  "read": [
   "60 condominiums: 46 in the tower, mostly full-floor and duplex homes, and 14 in the restored Steinway Hall.",
   "An 82-foot pool, a double-height fitness center, private dining room with a catering kitchen, and cabanas.",
   "The tower rises from Steinway Hall, a landmark built in 1925."
  ],
  "giveUp": [
   "A very narrow tower, so few homes per floor and limited layouts.",
   "Billionaires’ Row, with more tourists and traffic than a residential block.",
   "A longer trip to Wall Street."
  ],
  "commute": "The 57th Street (F) and 57 St–7 Av (N/Q/R/W) stations are a short walk, and Columbus Circle is about ten minutes on foot. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "125-greenwich",
  "name": "125 Greenwich",
  "hood": "Financial District",
  "dek": "A slender glass tower by Rafael Viñoly, a block from the Financial District core.",
  "facts": [
   [
    "Address",
    "125 Greenwich Street, New York"
   ],
   [
    "Neighborhood",
    "Financial District"
   ],
   [
    "Architect",
    "Rafael Viñoly Architects"
   ],
   [
    "Developer",
    "Fortress Investment Group, Bizzi & Partners and Bilgili Holding"
   ],
   [
    "Completion",
    "2025 (sources vary)"
   ],
   [
    "Residences",
    "272"
   ],
   [
    "Height",
    "912 feet"
   ],
   [
    "Interiors",
    "MAWD"
   ],
   [
    "Floors",
    "88"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Finance buyers who want a new building within walking distance of the office."
   ],
   [
    "Possible",
    "Buyers who want a studio or one-bedroom with full amenities."
   ],
   [
    "Poor fit",
    "Buyers who want a prewar character or a townhouse feel."
   ]
  ],
  "read": [
   "Studios through three-bedrooms, plus penthouses, in an 88-story tower.",
   "Amenities sit in the top floors, including a lap pool, spa, fitness center and private dining and entertaining rooms.",
   "More than 27,000 square feet of indoor and outdoor amenity space."
  ],
  "giveUp": [
   "A tall, dense building in a business district.",
   "A neighborhood that is still filling in with shops and daily services.",
   "A newer building, so less history to read. The project’s schedule slipped and was restructured, so ask about current sales status."
  ],
  "commute": "Wall Street (2/3, 4/5), Rector Street (R/W) and the World Trade Center hub, including the Oculus, are all a short walk. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "15-hudson-yards",
  "name": "15 Hudson Yards",
  "hood": "Hudson Yards",
  "dek": "A Diller Scofidio + Renfro tower with a spa floor and club rooms.",
  "facts": [
   [
    "Address",
    "15 Hudson Yards, New York"
   ],
   [
    "Neighborhood",
    "Hudson Yards"
   ],
   [
    "Architect",
    "Diller Scofidio + Renfro"
   ],
   [
    "Interiors",
    "Rockwell Group"
   ],
   [
    "Developer",
    "Related and Oxford Properties"
   ],
   [
    "Completion",
    "2019"
   ],
   [
    "Height",
    "914 feet"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Executives and finance buyers who want service and amenities in one building."
   ],
   [
    "Possible",
    "Buyers who want two- to four-bedroom layouts with district amenities nearby."
   ],
   [
    "Poor fit",
    "Buyers who want a traditional downtown neighborhood."
   ]
  ],
  "read": [
   "About 40,000 square feet of amenities, with a 75-foot pool and spa on the 50th floor.",
   "A private dining room for up to 18 and a skytop outdoor space, billed as the highest outdoor residential space in the city.",
   "Residents also get access to the wider Hudson Yards district."
  ],
  "giveUp": [
   "A large master-planned district.",
   "Offices, shops and visitors close by.",
   "A longer trip to Wall Street."
  ],
  "commute": "The 7 train stops at 34 St–Hudson Yards, and Penn Station is a short walk. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "220-central-park-south",
  "name": "220 Central Park South",
  "hood": "Midtown",
  "dek": "A Robert A.M. Stern tower on Central Park South, mostly duplex residences.",
  "facts": [
   [
    "Address",
    "220 Central Park South, New York"
   ],
   [
    "Neighborhood",
    "Midtown, Central Park South"
   ],
   [
    "Architect",
    "Robert A.M. Stern Architects"
   ],
   [
    "Interiors",
    "Thierry Despont"
   ],
   [
    "Developer",
    "Vornado Realty Trust"
   ],
   [
    "Completion",
    "2019"
   ],
   [
    "Residences",
    "About 118 apartments (some reports add villas)"
   ],
   [
    "Height",
    "950 feet"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Buyers who want a large Central Park apartment and a full amenity set."
   ],
   [
    "Possible",
    "Finance buyers who split time between Midtown and downtown."
   ],
   [
    "Poor fit",
    "Buyers who want a smaller apartment or a downtown location."
   ]
  ],
  "read": [
   "About 118 apartments, most of them duplexes, with wide Central Park views.",
   "A swimming pool and athletic club, a library and private dining rooms.",
   "A restaurant led by Jean-Georges Vongerichten (check current operator)."
  ],
  "giveUp": [
   "Billionaires’ Row, with more traffic and tourists than a residential block.",
   "Larger apartments, often at the top of the market.",
   "A longer trip to Wall Street."
  ],
  "commute": "Columbus Circle is next door, with the A/B/C/D and 1 lines. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "30-park-place",
  "name": "30 Park Place",
  "hood": "Tribeca",
  "dek": "The Four Seasons residences, with hotel services above the Financial District.",
  "facts": [
   [
    "Address",
    "30 Park Place, New York"
   ],
   [
    "Neighborhood",
    "Tribeca, next to the Financial District"
   ],
   [
    "Architect",
    "Robert A. M. Stern Architects"
   ],
   [
    "Developer",
    "Silverstein Properties and CalSTRS"
   ],
   [
    "Completion",
    "2016"
   ],
   [
    "Residences",
    "157"
   ],
   [
    "Height",
    "926 feet"
   ],
   [
    "Floors",
    "82"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Finance buyers who want hotel service and a short trip downtown."
   ],
   [
    "Possible",
    "Buyers who travel often and want a lock-and-leave home."
   ],
   [
    "Poor fit",
    "Buyers who want a building with no hotel use."
   ]
  ],
  "read": [
   "157 condominiums on the upper floors, above a Four Seasons Hotel, with a separate residential entrance.",
   "About 40,000 square feet of shared space, with a 75-foot pool, fitness center with yoga studio, screening room and private dining room.",
   "Residents can use the hotel’s services and restaurants."
  ],
  "giveUp": [
   "A hotel shares the tower.",
   "Hotel rules and service structure apply to residents.",
   "Completed in 2016, the oldest building on this list."
  ],
  "commute": "Park Place (2/3), Chambers Street (A/C/E) and the Fulton Street hub are close. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "50-west-street",
  "name": "50 West Street",
  "hood": "Financial District",
  "dek": "A Helmut Jahn glass tower on the west edge of Wall Street, near the harbor.",
  "facts": [
   [
    "Address",
    "50 West Street, New York"
   ],
   [
    "Neighborhood",
    "Financial District"
   ],
   [
    "Architect",
    "Helmut Jahn (Murphy/Jahn)"
   ],
   [
    "Developer",
    "Time Equities"
   ],
   [
    "Residences",
    "191"
   ],
   [
    "Height",
    "About 780 feet"
   ],
   [
    "Floors",
    "64"
   ],
   [
    "Interiors",
    "Thomas Juul-Hansen"
   ],
   [
    "Completion",
    "2016–2017"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Finance buyers who want a tower near the water and a short walk to the office."
   ],
   [
    "Possible",
    "Buyers who want a pool and views without a full hotel setting."
   ],
   [
    "Poor fit",
    "Buyers who need a garage."
   ]
  ],
  "read": [
   "191 condominiums, from one to four bedrooms, in a 64-story curved glass tower, plus a large penthouse.",
   "Four floors of amenities, with a pool, and a public plaza at street level linking West and Washington Streets.",
   "Interiors by Thomas Juul-Hansen."
  ],
  "giveUp": [
   "A business district address, with limited street life after hours.",
   "No garage.",
   "Check the amenity list with the sales team, since sources differ on details."
  ],
  "commute": "Rector Street (R/W), Wall Street (2/3) and Bowling Green (4/5) are close, with Battery Park City nearby. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "520-fifth-avenue",
  "name": "520 Fifth Avenue",
  "hood": "Midtown",
  "dek": "A KPF supertall a block from Grand Central and Bryant Park.",
  "facts": [
   [
    "Address",
    "520 Fifth Avenue, New York"
   ],
   [
    "Neighborhood",
    "Midtown"
   ],
   [
    "Architect",
    "Kohn Pedersen Fox Associates"
   ],
   [
    "Developer",
    "Rabina"
   ],
   [
    "Expected completion",
    "2026"
   ],
   [
    "Residences",
    "About 100"
   ],
   [
    "Height",
    "1,002 feet"
   ],
   [
    "Floors",
    "88"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Finance buyers who work in Midtown and want to commute on foot."
   ],
   [
    "Possible",
    "Buyers who want a new building with a prime Fifth Avenue address."
   ],
   [
    "Poor fit",
    "Buyers who want a residential neighborhood after work."
   ]
  ],
  "read": [
   "About 100 residences, one to four bedrooms, starting on the 42nd floor of an 88-story tower. Floors 9 to 34 are offices.",
   "A residents-only space in the crown, plus a private members’ club, spa and fitness center at ground level.",
   "Sales launched in April 2024, and the building is near Bryant Park and the New York Public Library."
  ],
  "giveUp": [
   "Completion is still pending, so details can change.",
   "A commercial district, with little street life after hours.",
   "Offices share the tower."
  ],
  "commute": "The 5 Av–Bryant Park station (7, B/D/F/M) is close and Grand Central Terminal is a short walk east. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "53w53",
  "name": "53W53",
  "hood": "Midtown",
  "dek": "A Jean Nouvel tower beside the Museum of Modern Art.",
  "facts": [
   [
    "Address",
    "53 West 53rd Street, New York"
   ],
   [
    "Neighborhood",
    "Midtown"
   ],
   [
    "Architect",
    "Jean Nouvel"
   ],
   [
    "Developer",
    "Hines, Pontiac Land Group and Goldman Sachs"
   ],
   [
    "Completion",
    "2020"
   ],
   [
    "Residences",
    "145"
   ],
   [
    "Height",
    "1,050 feet"
   ],
   [
    "Interiors",
    "Thierry Despont"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Buyers who want to live next to MoMA, with a Midtown office within walking distance."
   ],
   [
    "Possible",
    "Finance buyers who want a mid-sized building with a full amenity floor."
   ],
   [
    "Poor fit",
    "Buyers who want a downtown address."
   ]
  ],
  "read": [
   "145 condominiums, from one bedroom to five.",
   "A wellness center with a lap pool, cold plunge and hot tub, plus a squash court, golf simulator and private dining room.",
   "Owners receive a deeded MoMA membership."
  ],
  "giveUp": [
   "MoMA galleries occupy floors 2, 4 and 5, with their own elevators.",
   "A Midtown address, busy with visitors.",
   "A longer trip to Wall Street."
  ],
  "commute": "The 5 Av/53 St (E/M) and 47–50 Sts–Rockefeller Center stations are close. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "77-greenwich",
  "name": "77 Greenwich",
  "hood": "Financial District",
  "dek": "A 90-residence condominium by FXCollaborative, on a quiet block of the Financial District.",
  "facts": [
   [
    "Address",
    "77 Greenwich Street, New York"
   ],
   [
    "Neighborhood",
    "Financial District"
   ],
   [
    "Architect",
    "FXCollaborative"
   ],
   [
    "Interiors",
    "Deborah Berke Partners"
   ],
   [
    "Developer",
    "Trinity Place Holdings"
   ],
   [
    "Completion",
    "2021"
   ],
   [
    "Residences",
    "90"
   ],
   [
    "Height",
    "About 500 feet"
   ],
   [
    "Floors",
    "42"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Finance buyers who want a smaller building a few blocks from the office."
   ],
   [
    "Possible",
    "Buyers who want a one-bedroom with fewer neighbors than a large tower."
   ],
   [
    "Poor fit",
    "Buyers who want a large amenity program."
   ]
  ],
  "read": [
   "90 condominiums, from one to four bedrooms, starting on the 15th floor above a public elementary school.",
   "Interiors by Deborah Berke Partners.",
   "A smaller building than the supertall towers nearby."
  ],
  "giveUp": [
   "A public school occupies the lower floors.",
   "A shorter building, with fewer views than the supertalls.",
   "A business district address, quieter on weekends. Confirm the amenity list."
  ],
  "commute": "Rector Street (R/W), Bowling Green (4/5) and Wall Street (2/3) are within a short walk. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "central-park-tower",
  "name": "Central Park Tower",
  "hood": "Midtown",
  "dek": "The tallest residential tower in the world, one block from Central Park.",
  "facts": [
   [
    "Address",
    "217 West 57th Street, New York"
   ],
   [
    "Neighborhood",
    "Midtown, Billionaires’ Row"
   ],
   [
    "Architect",
    "Adrian Smith + Gordon Gill Architecture"
   ],
   [
    "Developer",
    "Extell Development and Shanghai Municipal Investment Group"
   ],
   [
    "Completion",
    "2021"
   ],
   [
    "Residences",
    "179"
   ],
   [
    "Height",
    "1,550 feet"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Buyers who want very high floors and an extensive amenity club."
   ],
   [
    "Possible",
    "Finance buyers who want a Midtown address with views of the park."
   ],
   [
    "Poor fit",
    "Buyers who want a low-rise building."
   ]
  ],
  "read": [
   "179 condominiums in a 98-story tower, among the tallest residential buildings in the world.",
   "The Central Park Club occupies the 100th floor and two lower floors, with an outdoor pool terrace on the 14th floor.",
   "One block south of Central Park."
  ],
  "giveUp": [
   "A supertall, with long elevator rides to the upper floors.",
   "A Midtown address, busy with visitors.",
   "A longer trip to Wall Street."
  ],
  "commute": "The 57 St–7 Av (N/Q/R/W) and 57th Street (F) stations are close, and Columbus Circle is a short walk. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "one-manhattan-square",
  "name": "One Manhattan Square",
  "hood": "Lower East Side",
  "dek": "A very large condominium on the East River, built around its amenities.",
  "facts": [
   [
    "Address",
    "252 South Street, New York"
   ],
   [
    "Neighborhood",
    "Lower East Side"
   ],
   [
    "Developer",
    "Extell Development"
   ],
   [
    "Architect",
    "Adamson Associates"
   ],
   [
    "Interiors",
    "Meyer Davis Studio"
   ],
   [
    "Residences",
    "815"
   ],
   [
    "Amenities",
    "About 100,000 sq ft"
   ],
   [
    "Floors",
    "72 (marketed as 80)"
   ],
   [
    "Height",
    "847 feet"
   ],
   [
    "Completion",
    "2019"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Finance buyers who want amenities and space for the price, within reach of Wall Street."
   ],
   [
    "Possible",
    "Buyers who want an outdoor garden and sports amenities."
   ],
   [
    "Poor fit",
    "Buyers who want a small building."
   ]
  ],
  "read": [
   "815 condominiums, one of the largest condominium buildings in the city.",
   "More than 100,000 square feet of amenities, including a 75-foot pool, a hammam with a cold plunge and spa rooms.",
   "A large outdoor garden and sports amenities."
  ],
  "giveUp": [
   "A very large building, with many neighbors sharing the amenities.",
   "A waterfront site, a little removed from the main subway lines.",
   "Floors are counted two ways: 72 actual, 80 as marketed."
  ],
  "commute": "East Broadway (F) and Grand Street (B/D) are the closest stations, with the East River waterfront next door. Door-to-door times from your address are calculated in your Kammer Report."
 },
 {
  "slug": "one-wall-street",
  "name": "One Wall Street",
  "hood": "Financial District",
  "dek": "An Art Deco bank tower turned residence, at the center of Wall Street.",
  "facts": [
   [
    "Address",
    "1 Wall Street, New York"
   ],
   [
    "Neighborhood",
    "Financial District"
   ],
   [
    "Architect",
    "SLCE Architects (conversion)"
   ],
   [
    "Developer",
    "Macklowe Properties"
   ],
   [
    "Original building",
    "Irving Trust Company tower, 1931"
   ],
   [
    "Residences",
    "566"
   ],
   [
    "Type",
    "Office-to-residential conversion"
   ]
  ],
  "suits": [
   [
    "Good fit",
    "Finance professionals who want to live on Wall Street and walk to the office."
   ],
   [
    "Possible",
    "Buyers who want a smaller studio or one-bedroom as a city base."
   ],
   [
    "Poor fit",
    "Buyers who want a quiet residential block or a low-rise building."
   ]
  ],
  "read": [
   "A landmark Art Deco tower from 1931, converted from offices into 566 residences.",
   "More than 100,000 square feet of amenities, including a pool and a roof deck over the harbor.",
   "The base includes ground-floor retail, including a Whole Foods."
  ],
  "giveUp": [
   "A large building, with 566 residences sharing the amenities.",
   "A business district address, quieter on weekends.",
   "Floor plans follow the former office structure."
  ],
  "commute": "Wall Street (2/3, 4/5) and Broadway–Nassau (A/C/J/Z) are steps away. Door-to-door times from your address are calculated in your Kammer Report."
 }
];
