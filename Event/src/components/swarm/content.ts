import type { SwarmContent } from "@/types/swarm"

/**
 * ALL visible text for the site lives in this one object.
 * Change a string here and it changes everywhere. Nothing in `components/` or `lib/` holds copy.
 *
 * Notes
 * - `headline` is exactly three lines (each line is typed, then stretched).
 * - `crew` names appear as moving cursors, as footer initials and in the credits.
 *   The programme comment thread uses crew[5] and crew[1], so keep at least six names.
 * - Time, price and ring text are plain strings, so write them exactly as you want them shown.
 */
export const CONTENT: SwarmContent = {
  seo: {
    title: "Chhaap ’27 | Mumbai",
    description:
      "Chhaap ’27 is a two-day festival of collaborative making in Mumbai, 13–14 May 2027, for designers, engineers, printers and writers.",
  },

  /* Arc preloader: four greetings, each held long enough to read. Times are in milliseconds. */
  preloader: {
    greetings: [
      { text: "नमस्ते", lang: "hi" },
      { text: "வணக்கம்", lang: "ta" },
      { text: "নমস্কার", lang: "bn" },
      { text: "स्वागत है", lang: "hi" },
    ],
    hold: 1300,
    reveal: 1800,
  },

  meta: {
    brand: "Chhaap",
    logo: "CHHAAP",
    edition: "’27",
    city: "Mumbai",
    dates: "13–14 May 2027",
    email: "hello@chhaap.in",
    ctaHref: "#passes",
  },

  crew: [
    { name: "Aarav", color: "#F2308F" },
    { name: "Ananya", color: "#1D63E0" },
    { name: "Rohan", color: "#F2611A" },
    { name: "Meera", color: "#00968C" },
    { name: "Kabir", color: "#7650F5" },
    { name: "Saanvi", color: "#F0B800", ink: "#17161B" },
    { name: "Ishaan", color: "#1F9A45" },
    { name: "Diya", color: "#DC2E25" },
  ],

  hero: {
    aria: "Chhaap ’27",
    kicker: "Festival of collaborative making",
    headline: ["Made by", "many", "hands."],
    intro:
      "Two days in Mumbai for designers, engineers, printers and writers who make their best work with other people in the room. Build in public, out loud, and keep every layer visible.",
    nav: [
      { label: "Speakers", href: "#speakers" },
      { label: "Programme", href: "#programme" },
      { label: "Passes", href: "#passes" },
    ],
    navAria: "Sections",
    passButton: "Get a pass",
    ctaPrimary: "Get a festival pass —",
    ctaSecondary: "See the programme",
    ctaSecondaryHref: "#programme",
    ring: "TWO DAYS · FORTY TALKS · THREE HUNDRED PEOPLE · ONE ROOM ·",
    dateArt: ["13—14", "MAY"],
    colophon: "Printed in two inks",
    venue: ["Mill No. 7", "Lower Parel", "Mumbai 400013"],
    crewAria: "Built by",
    hint: {
      file: "chhaap-27.riso",
      of: "of",
      here: "here",
      wait: "Inking two plates…",
      go: "Scroll — we build it in front of you ↓",
    },
  },

  idea: {
    label: "01 — The idea",
    before: "Most work is made by ",
    mark: "many hands",
    after:
      " and credited to one. Chhaap is two days of the opposite: you build in public, beside strangers, and every layer stays visible.",
    inksAria: "The festival inks",
    inks: [
      { name: "Fluorescent Pink", code: "RISO 0811", v: "var(--ov-pink)" },
      { name: "Medium Blue", code: "RISO 0402", v: "var(--ov-blue)" },
      { name: "Yellow", code: "RISO 0802", v: "var(--ov-yel)" },
      { name: "Teal", code: "RISO 0405", v: "var(--ov-teal)" },
      { name: "Orange", code: "RISO 0805", v: "var(--ov-org)" },
    ],
  },

  speakers: {
    label: "02 — Speakers",
    title: "People who never work alone",
    items: [
      { name: "Priya Nair", role: "Type designer", city: "Mumbai", talk: "Devanagari, drawn by many", ink: "pink" },
      { name: "Arjun Mehta", role: "Engineer", city: "Pune", talk: "Pairing with a printer", ink: "blue" },
      { name: "Zoya Khan", role: "Riso printer", city: "Delhi", talk: "Misregistration is a feature", ink: "yellow" },
      { name: "Kavya Iyer", role: "Editor", city: "Chennai", talk: "Editing in the open", ink: "teal" },
      { name: "Dev Raghavan", role: "Product designer", city: "Bengaluru", talk: "Forty cursors, one canvas", ink: "orange" },
      { name: "Neha Banerjee", role: "Studio founder", city: "Kolkata", talk: "Credits roll, finally", ink: "pink" },
    ],
  },

  programme: {
    label: "03 — Programme",
    title: "Two days, one long table",
    note: "Day one below. Day two is workshops, open studios and the long party, with the timetable printed on the night.",
    listAria: "Day one, 13 May",
    sessions: [
      { time: "09:30", title: "Doors, chai, name badges", room: "Foyer" },
      { time: "10:00", title: "Opening: made by many hands", who: "Neha Banerjee", room: "Main hall" },
      { time: "11:00", title: "Misregistration is a feature", who: "Zoya Khan", room: "Print room" },
      { time: "12:30", title: "Forty cursors, one canvas", who: "Dev Raghavan", room: "Main hall" },
      { time: "14:00", title: "Long-table thali lunch", room: "Courtyard" },
      { time: "15:30", title: "Editing in the open", who: "Kavya Iyer", room: "Library" },
      { time: "17:00", title: "Group build: one poster, 300 people", room: "Everywhere" },
    ],
    /* Typed by two crew members while they swap the lunch and the editing session. */
    comment: {
      first: "Lunch before Kavya? People will be starving.",
      reply: "Swapping them now ✓",
    },
  },

  passes: {
    label: "04 — Passes",
    title: "Pick a pass, bring a friend",
    items: [
      {
        name: "Day pass",
        price: "₹4,999",
        note: "Thursday or Friday",
        perks: ["All talks that day", "Thali lunch at the long table", "A print from the jam"],
        cta: "Book day pass",
      },
      {
        name: "Festival",
        price: "₹8,999",
        note: "Both days, the whole thing",
        perks: ["Every talk and workshop", "Both lunches, the party", "Your name in the credits"],
        cta: "Book festival",
        featured: true,
        stamp: "Early bird −15% until 31 Jan",
      },
      {
        name: "Studio of five",
        price: "₹34,999",
        note: "Five festival passes",
        perks: ["One invoice, five badges", "A reserved table", "A studio poster, printed live"],
        cta: "Book studio of five",
      },
    ],
    menus: {
      copy: ["Cut", "Copy", "Paste", "Duplicate", "Bring to front"],
      paste: ["Paste", "Paste in place", "Select all"],
      stamp: ["Copy", "Paste", "Add stamp…", "Rename", "Delete"],
    },
    pasteKey: "⌘ V",
  },

  finale: {
    line1: "SEE YOU",
    line2: "IN MUMBAI.",
    srLine: "See you in Mumbai.",
    where: "Where",
    when: "When",
    doors: "Doors 09:30",
    write: "Write",
    credits: "This page was built by",
    fine: "Chhaap ’27 is a fictional festival. Two inks, many hands, no sponsors on the poster.",
  },
}
