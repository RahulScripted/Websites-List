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

  /* Arc preloader: five greetings, Marathi first because the festival is in Mumbai, each held long enough to read. Times are in milliseconds. */
  preloader: {
    greetings: [
      { text: "नमस्कार", lang: "mr" },
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
    { name: "Aarav", color: "#D81B60" },
    { name: "Ananya", color: "#3F2B96" },
    { name: "Rohan", color: "#FF7A1A" },
    { name: "Meera", color: "#00796B" },
    { name: "Kabir", color: "#7B2CBF" },
    { name: "Saanvi", color: "#FFC21A", ink: "#1F1230" },
    { name: "Ishaan", color: "#2E8B3D" },
    { name: "Diya", color: "#C62828" },
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

  contribute: {
    label: "05 — Bring something to the table",
    title: "Bring something to the table.",
    note: "Chhaap is made by whoever shows up with something to share. Lead a workshop, give a talk, pin your work on the long wall or give a few hours to the crew. Everyone who adds something gets a seat at the table.",
    cta: { label: "Send a proposal", href: "mailto:hello@chhaap.in" },
    features: [
      {
        id: "workshop",
        meta: "Day 2 · 14 May · 90 min",
        size: "lg",
        title: "Run a workshop",
        description: "Day two is for making. Lead a 90-minute session at a bench in Mill No. 7: printing, type, binding or something we haven't thought of yet.",
        visual: { type: "color", color: "#D81B60", tag: "Workshops · Day 2" },
      },
      {
        id: "talk",
        meta: "Day 1 · 13 May · 20 min",
        size: "sm",
        title: "Give a talk",
        description: "Twenty minutes on the main stage. Proposals close 15 January.",
        visual: { type: "color", color: "#3F2B96", tag: "Talks · Day 1" },
      },
      {
        id: "wall",
        meta: "Both days · Courtyard",
        size: "sm",
        title: "Show your work",
        description: "Pin a poster, zine or print on the long wall in the courtyard. Open to every pass holder.",
        visual: { type: "color", color: "#FFC21A", tag: "The long wall" },
      },
      {
        id: "crew",
        meta: "Both days · 4-hour shifts",
        size: "sm",
        title: "Join the crew",
        description: "Give four hours on either day and your festival pass is on us. 40 spots open.",
        visual: { type: "color", color: "#00796B", tag: "Crew · 40 spots" },
      },
      {
        id: "walk",
        meta: "Day 1 · 13 May · 07:30",
        size: "sm",
        title: "Lead a print walk",
        description: "Take a small group through the presses and sign painters of Lower Parel before the doors open.",
        visual: { type: "color", color: "#C62828", tag: "Walks · Day 1" },
      },
      {
        id: "studio",
        meta: "Day 2 · 14 May · Afternoon",
        size: "md",
        title: "Host an open studio",
        description: "Open your table for an afternoon. People drop in, pick up a brush or a squeegee and make something beside you.",
        visual: { type: "color", color: "#FF7A1A", tag: "Open studios · Day 2" },
      },
      {
        id: "blind",
        meta: "Proposals close 15 Jan 2027",
        size: "md",
        title: "Every proposal read blind",
        description: "Names and studios stay hidden while the crew reads, so the idea is judged on its own. You hear back within a week.",
        visual: { type: "color", color: "#7B2CBF", tag: "Reply in 7 days" },
      },
    ],
  },
  archive: {
    label: "06 — The festival archive",
    title: "The festival archive.",
    note: "Three editions, printed by everyone who came. Every poster, zine and misprint from Chhaap ’24, ’25 and ’26 is kept in the archive: pulled off the drying racks, numbered and catalogued, so this year starts on top of everything we have made together.",
    reelAria: "Pieces from past editions",
    tiles: [
      { year: "’26", tag: "Group build", title: "One poster, 300 people", ink: "pink" },
      { year: "’25", tag: "Workshop", title: "Devanagari, drawn by many", ink: "blue" },
      { year: "’24", tag: "Riso jam", title: "The first misprint", ink: "yellow" },
      { year: "’26", tag: "Open studio", title: "Zines from the long table", ink: "teal" },
      { year: "’25", tag: "Print walk", title: "Sign painters of Lower Parel", ink: "orange" },
      { year: "’24", tag: "Talk", title: "Forty cursors, one canvas", ink: "blue" },
      { year: "’26", tag: "The long wall", title: "1,200 pins, one courtyard", ink: "yellow" },
      { year: "’25", tag: "After hours", title: "Ink on the dance floor", ink: "pink" },
    ],
    stats: [
      { value: "3", label: "Editions so far" },
      { value: "2,400", label: "Makers through the doors" },
      { value: "11,000", label: "Prints pulled" },
      { value: "186", label: "Workshops run" },
    ],
    cta: { label: "Ask for an archive print", href: "mailto:hello@chhaap.in" },
  },
  faq: {
    label: "07 — Questions",
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
