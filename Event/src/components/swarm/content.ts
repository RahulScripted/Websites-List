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
    title: "Chhaap ’27 — Made by Many, Mumbai",
    description:
      "Two days of ideas, design, print and collective creativity. Chhaap ’27 brings designers, makers, engineers and storytellers together in Mumbai, 13–14 May 2027.",
  },

  /* Arc preloader: four greetings, each held long enough to read. Times are in milliseconds. */
  preloader: {
    greetings: [
      { text: "नमस्ते", lang: "hi" },
      { text: "வணக்கம்", lang: "ta" },
      { text: "নমস্কার", lang: "bn" },
      { text: "സ്വാഗതം", lang: "ml" },
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
    aria: "Chhaap ’27 — Made by Many",
    kicker: "A festival of ideas, ink & interaction",
    headline: ["Made by", "many", "hands."],
    intro:
      "Great things rarely come from one pair of hands. For two days, Mumbai becomes a meeting ground for designers, engineers, printers and storytellers to exchange ideas, experiment together and make something unexpected. No closed doors. No work in isolation. Just people, possibilities and the freedom to create.",
    nav: [
      { label: "Speakers", href: "#speakers" },
      { label: "Programme", href: "#programme" },
      { label: "Passes", href: "#passes" },
    ],
    navAria: "Explore the festival",
    passButton: "Find your pass",
    ctaPrimary: "Be part of the making —",
    ctaSecondary: "Explore the programme",
    ctaSecondaryHref: "#programme",
    ring: "IDEAS IN MOTION · INK ON PAPER · MINDS TOGETHER · MADE IN MUMBAI ·",
    dateArt: ["13—14", "MAY"],
    colophon: "Printed through collaboration",
    venue: ["Mill No. 7", "Lower Parel", "Mumbai 400013"],
    crewAria: "The people behind the making",
    hint: {
      file: "chhaap-27.riso",
      of: "of",
      here: "here",
      wait: "Preparing the press…",
      go: "Scroll to see what we're making ↓",
    },
  },

  idea: {
    label: "01 — The thinking",
    before: "The best things are made by ",
    mark: "many hands",
    after:
      ", not just one. Chhaap brings the process into the open — where ideas overlap, perspectives collide and every contribution leaves its mark.",
    inksAria: "Five inks. Endless possibilities.",
    inks: [
      { name: "Fluorescent Pink", code: "RISO 0811", v: "var(--ov-pink)" },
      { name: "Medium Blue", code: "RISO 0402", v: "var(--ov-blue)" },
      { name: "Yellow", code: "RISO 0802", v: "var(--ov-yel)" },
      { name: "Teal", code: "RISO 0405", v: "var(--ov-teal)" },
      { name: "Orange", code: "RISO 0805", v: "var(--ov-org)" },
    ],
  },

  speakers: {
    label: "02 — The people",
    title: "Different minds. Shared imagination.",
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
    label: "03 — The programme",
    title: "Two days. Countless ways to make.",
    note: "Day one brings the conversations, ideas and creative collisions. Day two opens the doors to workshops, open studios and an after-hours gathering. The final timetable? We'll print it together.",
    listAria: "Day one — 13 May 2027",
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
      first: "Lunch before Kavya? We're going to need more than ideas to survive.",
      reply: "Already on it. Moving things around ✓",
    },
  },

  passes: {
    label: "04 — Get involved",
    title: "Find your way into the making.",
    items: [
      {
        name: "Day pass",
        price: "₹4,999",
        note: "One day. A whole lot of ideas.",
        perks: ["Access to every talk that day", "A seat at the community thali lunch", "A limited-edition print from the jam"],
        cta: "Get a day pass",
      },
      {
        name: "Festival",
        price: "₹8,999",
        note: "Two days. The complete experience.",
        perks: ["Access to every talk and workshop", "Lunch on both days and the after-hours party", "Your name in the festival credits"],
        cta: "Get the festival pass",
        featured: true,
        stamp: "EARLY BIRD — 15% OFF · UNTIL 31 JAN",
      },
      {
        name: "Studio of five",
        price: "₹34,999",
        note: "Five minds. One shared table.",
        perks: ["Five festival passes under one booking", "A reserved collaborative workspace", "An exclusive studio poster, printed live"],
        cta: "Bring your studio",
      },
    ],
    menus: {
      copy: ["Cut", "Copy", "Paste", "Duplicate", "Bring to front"],
      paste: ["Paste", "Paste in place", "Select all"],
      stamp: ["Copy", "Paste", "Add stamp…", "Rename", "Delete"],
    },
    pasteKey: "⌘ V",
  },

  faq: {
    label: "05 — Questions",
    title: "Frequently asked questions",
    intro: "Short answers to the questions we hear most. Still curious? Write to us and we will reply.",
    listAria: "Frequently asked questions",
    items: [
      {
        question: "What is Chhaap ’27?",
        answer: "Chhaap ’27 is a two-day festival celebrating creativity, design, technology, print and culture. It brings designers, developers, artists and curious minds together to exchange ideas, experiment and create something unexpected.",
      },
      {
        question: "When and where is the festival happening?",
        answer: "Chhaap ’27 is planned for 13–14 May 2027 at Mill No. 7, Lower Parel, Mumbai. Venue and event details are subject to confirmation.",
      },
      {
        question: "Who can attend Chhaap ’27?",
        answer: "Anyone with a curiosity for creativity is welcome. Whether you're a designer, developer, artist, student or simply someone who loves exploring new ideas, there's a place for you.",
      },
      {
        question: "Do I need a creative or technical background?",
        answer: "Not at all. Chhaap is for people from all backgrounds. You don't need professional experience or a specific skill set. Just bring your curiosity and willingness to explore.",
      },
      {
        question: "What does my festival pass include?",
        answer: "The festival pass is designed to provide access across both days, including scheduled talks, shared experiences and general festival spaces. Some limited-capacity workshops may require separate registration.",
      },
      {
        question: "Can I join as a speaker or collaborator?",
        answer: "Absolutely. Chhaap welcomes fresh perspectives, interesting projects and creative experiments. Watch for official announcements about speaker, workshop and collaboration opportunities.",
      },
    ],
  },
  finale: {
    line1: "SEE YOU",
    line2: "IN MUMBAI.",
    srLine: "See you in Mumbai.",
    where: "Find us",
    when: "Save the dates",
    doors: "Doors open 09:30",
    write: "Say hello",
    credits: "Made possible by",
    fine: "Chhaap ’27 is a fictional festival concept. Five inks, countless ideas and many hands behind every impression. No sponsors. Just imagination.",
  },
}
