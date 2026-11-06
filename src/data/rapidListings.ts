// Sample data for the free Rapid Match preview. Illustrative only: not live MLS or off-market inventory.
export const listings = [
  { id: "a", address: "Sample: West Village two-bedroom", hood: "West Village", beds: 2, price: 3800000, lane: "3to6", source: "Off-market", traits: ["Outdoor space", "Quiet street"], why: "Quiet block, two bedrooms, and a private terrace that rarely reaches the market." },
  { id: "b", address: "Sample: Chelsea one-bedroom", hood: "Chelsea", beds: 1, price: 2200000, lane: "under3", source: "MLS", traits: ["Doorman"], why: "A listed one-bedroom with a full-time doorman, close to the High Line." },
  { id: "c", address: "Sample: Tribeca loft", hood: "Tribeca", beds: 3, price: 7200000, lane: "6plus", source: "Off-market", traits: ["Outdoor space", "Park view"], why: "Three bedrooms and a park view, with room for a family office at home." },
  { id: "d", address: "Sample: Upper East Side co-op", hood: "Upper East Side", beds: 2, price: 2600000, lane: "under3", source: "MLS", traits: ["Doorman", "Park view"], why: "A listed two-bedroom near the park, in a building with a full-time staff." },
];
export const hoods = ["West Village", "Chelsea", "Tribeca", "Upper East Side"];
export const beds = [1, 2, 3];
export const lanes = [
  { id: "under3", label: "Under $3 million" },
  { id: "3to6", label: "$3 to $6 million" },
  { id: "6plus", label: "$6 million and above" },
];
export const traits = ["Outdoor space", "Doorman", "Quiet street", "Park view"];
export const sources = [
  { name: "Off-market", note: "Sellers and brokers who have not listed yet" },
  { name: "MLS", note: "Listings from the regional multiple listing service" },
  { name: "Public records", note: "Ownership, permits and building history" },
];
// The v2 pages also read new development and pre-development (pre-construction) inventory.
export const sourcesV2 = ["Off-market", "MLS", "Public records", "New development", "Pre-development", "Cash discount"];

// Report options for the v2 pages: ten neighborhoods, six lifestyle goals, four price points per budget lane.
export const reportHoods = ["West Village", "Chelsea", "Tribeca", "SoHo", "Flatiron and Gramercy", "Hudson Yards", "Upper West Side", "Upper East Side", "Midtown", "Financial District"];
export const goals = [
  { id: "quiet", label: "Quiet and calm" },
  { id: "host", label: "Room to entertain" },
  { id: "outdoor", label: "Outdoor space" },
  { id: "commute", label: "Short commute" },
  { id: "family", label: "Family-ready" },
  { id: "services", label: "Full services" },
];
export const pricePoints: Record<string, { label: string; price: number }[]> = {
  under3: [{ label: "Entry", price: 1500000 }, { label: "Core", price: 2000000 }, { label: "Stretch", price: 2500000 }, { label: "Ceiling", price: 3000000 }],
  "3to6": [{ label: "Entry", price: 3000000 }, { label: "Core", price: 3900000 }, { label: "Stretch", price: 4800000 }, { label: "Ceiling", price: 6000000 }],
  "6plus": [{ label: "Entry", price: 6000000 }, { label: "Core", price: 8000000 }, { label: "Stretch", price: 11000000 }, { label: "Ceiling", price: 15000000 }],
};

// Life goals drive the v2 pages. The visitor picks goals, we tell them the answer: where, how many bedrooms, which price band.
// The profiles are illustrative for the sample report.
export const laneLabels: Record<string, string> = { under3: "Under $3M", "3to6": "$3M to $6M", "6plus": "$6M and above" };
export const lifeGoals = [
  { id: "family", icon: "building", label: "Raise a family", note: "bedrooms and storage that suit a family", hoods: ["Upper West Side", "West Village", "Chelsea"], beds: 3, lane: "3to6" },
  { id: "host", icon: "layers", label: "Entertain at home", note: "a living room built for guests", hoods: ["Tribeca", "SoHo", "Chelsea"], beds: 2, lane: "3to6" },
  { id: "quiet", icon: "shield", label: "A quiet retreat", note: "set back from avenue noise", hoods: ["West Village", "Upper East Side", "Flatiron and Gramercy"], beds: 2, lane: "3to6" },
  { id: "commute", icon: "compass", label: "Walk to work", note: "a short walk to the lines you use", hoods: ["Financial District", "Hudson Yards", "Midtown"], beds: 1, lane: "under3" },
  { id: "downsize", icon: "sliders", label: "Downsize with ease", note: "less to keep, with full services", hoods: ["Upper East Side", "Upper West Side", "Flatiron and Gramercy"], beds: 2, lane: "under3" },
  { id: "statement", icon: "eye", label: "Make a statement", note: "a landmark address", hoods: ["Midtown", "Hudson Yards", "Tribeca"], beds: 3, lane: "6plus" },
  { id: "first", icon: "calendar", label: "A first home with a long runway", note: "room to grow into", hoods: ["Flatiron and Gramercy", "Chelsea", "Financial District"], beds: 1, lane: "under3" },
  { id: "outdoors", icon: "feeds", label: "Outdoor space", note: "a terrace or garden within reach", hoods: ["West Village", "Upper West Side", "Hudson Yards"], beds: 2, lane: "3to6" },
];
