import type { Letter, Moment, Room } from "@/types/kinara";

export type { Letter, Moment, Room };

const IMG = "/images";

export const images = {
  hero: `${IMG}/hero.webp`,
  pool: `${IMG}/pool.webp`,
  breakfast: `${IMG}/breakfast.webp`,
  tiles: `${IMG}/detail.webp`,
  chai: `${IMG}/chai.webp`,
  sunset: `${IMG}/sunset.webp`,
};

export const hotel = {
  name: "Kinara & Lehar",
  place: "Colaba, Mumbai",
  coords: "18°55′N 72°50′E",
  /** Coordinates used for the live weather and tide lookups. */
  lat: 18.922,
  lon: 72.8347,
  timezone: "Asia/Kolkata",
  email: "stay@kinaralehar.in",
  phone: "+91 22 4000 1934",
  address: ["14 Strand Road, Apollo Bunder", "Colaba, Mumbai 400 001, India"],
};

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export const navLinks = [
  { label: "Rooms", href: "#rooms" },
  { label: "A day here", href: "#day" },
  { label: "Experiences", href: "#experiences" },
  { label: "Tides", href: "#tides" },
  { label: "FAQ", href: "#faq" },
];

// Each postcard reuses one of four photos with its own crop and tint, so five rooms never read as duplicates.
export const rooms: Room[] = [
  {
    name: "Samundar",
    meaning: "the sea",
    number: "01",
    image: images.hero,
    position: "50% 50%",
    tint: "#0b7a85",
    size: "34 m²",
    sleeps: "Sleeps 2",
    view: "Arched jharokha window to the sea",
    price: 14500,
    note: "Woke up to the sea slapping the rocks below. The arch frames the whole bay like a miniature painting.",
  },
  {
    name: "Naqsh",
    meaning: "the pattern",
    number: "02",
    image: images.tiles,
    position: "50% 40%",
    tint: "#b0185f",
    size: "28 m²",
    sleeps: "Sleeps 2",
    view: "Encaustic tiles, courtyard light",
    price: 11800,
    note: "Floors of old Fort-bungalow tiles, a deep tub, and a copper kettle for the 6 a.m. chai.",
  },
  {
    name: "Barkha",
    meaning: "the monsoon rain",
    number: "04",
    image: images.pool,
    position: "30% 60%",
    tint: "#3f2b96",
    size: "41 m²",
    sleeps: "Sleeps 3",
    view: "Private terrace over the pool",
    price: 17500,
    note: "In June the first rains drum on the terrace roof. We leave a pot of ginger chai and pakoras out.",
  },
  {
    name: "Tulsi",
    meaning: "holy basil",
    number: "06",
    image: images.breakfast,
    position: "60% 40%",
    tint: "#3c7a5a",
    size: "30 m²",
    sleeps: "Sleeps 2",
    view: "Garden door, morning sun",
    price: 12500,
    note: "Breakfast arrives on a tray at the garden door. Poha, bun maska, masala chai, the good butter.",
  },
  {
    name: "Deepstambh",
    meaning: "the lighthouse",
    number: "09",
    image: images.hero,
    position: "15% 70%",
    tint: "#6a2c91",
    size: "52 m²",
    sleeps: "Sleeps 4",
    view: "Top floor, two sea balconies",
    price: 22000,
    note: "Our tower suite. At night the Prongs lighthouse sweeps across the ceiling every eight seconds.",
  },
];

// Hours drive the sun position on the arc, so keep them between 6 and 21.
export const moments: Moment[] = [
  { time: "06:45", hour: 6.75, title: "Chai on the sea wall", text: "Kulhad chai and a warm bun maska at the sea wall while the fishing boats head out of Sassoon Dock.", image: images.chai, position: "50% 50%" },
  { time: "09:00", hour: 9, title: "Breakfast on the long table", text: "Poha, akuri, fresh pav from the Irani bakery next door, and eggs any way you like until noon.", image: images.breakfast, position: "50% 50%" },
  { time: "12:30", hour: 12.5, title: "Block printing with Meera", text: "Print a cotton scarf with hand-carved Rajasthani blocks in the courtyard workshop. We wash and iron it, you take it home.", image: images.tiles, position: "50% 50%" },
  { time: "16:00", hour: 16, title: "Kala Ghoda heritage walk", text: "A slow two-hour walk through Fort and Kala Ghoda: art deco facades, Irani cafés and the old Asiatic Library.", image: images.hero, position: "70% 60%" },
  { time: "18:40", hour: 18.7, title: "Sunset from the terrace", text: "Kokum sherbet on ice, a shawl each and the whole Arabian Sea turning gold behind the Gateway of India.", image: images.sunset, position: "50% 50%" },
];

export const letters: Letter[] = [
  {
    from: "Ananya & Rohan",
    city: "Bengaluru",
    date: "14 June",
    text: "We came for a weekend and stayed five nights. The tide chart on the door became our only calendar.",
    stamp: "#b0185f",
    tilt: -4,
  },
  {
    from: "Amara",
    city: "London",
    date: "2 September",
    text: "Breakfast at the long table with strangers who were friends by the second chai. Thank you, Meera!",
    stamp: "#f59a1a",
    tilt: 3,
  },
  {
    from: "The Iyers",
    city: "Chennai",
    date: "28 April",
    text: "The kids printed scarves, we read on the terrace. Nobody looked at a phone until the drive to the airport.",
    stamp: "#6a2c91",
    tilt: -2,
  },
];

export type Experience = { title: string; text: string; meta: string };

export const experiences: Experience[] = [
  { title: "Fort & Kala Ghoda heritage walk", text: "Art deco facades, Victorian Gothic arcades and the Asiatic Library steps with a city historian.", meta: "2 hours · ₹1,800 a head" },
  { title: "Street food after dark", text: "Kebabs on Mohammed Ali Road, bheja fry, malpua and a kulfi at the end. A guide and a driver keep you safe and fed.", meta: "3 hours · ₹3,200 a head" },
  { title: "Elephanta Caves by ferry", text: "A launch from the Gateway at 9, the rock-cut Shiva temples, and chai on the island before the afternoon swell.", meta: "Half day · ₹2,600 a head" },
  { title: "Film City and a Bollywood dance class", text: "Step into a working set in Goregaon, then learn a thirty-second routine from a choreographer.", meta: "Full day · ₹5,500 a head" },
  { title: "Sunrise yoga on the sea wall", text: "A 6:30 session with a teacher from the Kaivalyadhama tradition, followed by coconut water and fruit.", meta: "75 minutes · complimentary" },
  { title: "Abhyanga massage", text: "Warm sesame oil, two therapists, a steam box and ginger tea. Booked by the hour in the tower suite spa room.", meta: "90 minutes · ₹6,500" },
];

export type Nearby = { place: string; how: string; minutes: number; note: string };
export const nearby: Nearby[] = [
  { place: "Gateway of India", how: "On foot", minutes: 4, note: "The arch at the end of our road, quietest before 8." },
  { place: "Taj Mahal Palace", how: "On foot", minutes: 6, note: "Tea in the Sea Lounge, worth the queue." },
  { place: "Kala Ghoda", how: "On foot", minutes: 14, note: "Galleries, cafés and the Jehangir Art Gallery." },
  { place: "Chhatrapati Shivaji Terminus", how: "By taxi", minutes: 15, note: "The great Victorian station, a UNESCO site." },
  { place: "Marine Drive", how: "By taxi", minutes: 22, note: "The Queen's Necklace at dusk." },
  { place: "Mumbai airport (T2)", how: "By car", minutes: 50, note: "We arrange a car with a name board." },
];

export const faqs = [
  { q: "What time are check-in and check-out?", a: "Check-in is from 2 p.m., check-out until 11 a.m. If your flight lands early, the long table is yours and so is a shower." },
  { q: "Can you arrange an airport pickup?", a: "Yes. A car meets you at the arrival gate with a name board, ₹2,400 each way from Mumbai T2, ₹2,000 from the domestic terminal." },
  { q: "Is the food vegetarian, Jain or vegan friendly?", a: "All three. Tell us when you book and the kitchen will cook accordingly, including Jain meals without onion, garlic or root vegetables." },
  { q: "Do you take children and pets?", a: "Children of any age are welcome, and the Deepstambh suite sleeps four. Well-behaved dogs are welcome in the garden room, Tulsi." },
  { q: "Is the monsoon a bad time to visit?", a: "Not for us. From June to September the sea turns grey and loud, the terrace gets a canopy and the rate drops by a fifth." },
  { q: "How do I pay and what is the cancellation policy?", a: "UPI, cards and bank transfer are accepted. Cancel up to 7 days before arrival for a full refund, GST included." },
];
