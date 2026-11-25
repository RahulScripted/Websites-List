import {
  CalendarDays,
  ClipboardList,
  CreditCard,
  Database,
  FileText,
  FolderOpen,
  Globe,
  Mail,
  MessageSquare,
  Sheet as SheetIcon,
  Ticket,
  Users,
} from "lucide-react";

export const LN = "https://lndev.me/";
export const SOURCE = "https://github.com/ln-dev7/landing-pages/tree/master/landing-pages/knot";

export const links = [
  { href: "#demo", label: "Try it" },
  { href: "#how", label: "How it works" },
  { href: "#recipes", label: "Recipes" },
  { href: "#guardrails", label: "Guardrails" },
  { href: "#pricing", label: "Pricing" },
];

export const sectionIds = ["demo", "how", "recipes", "guardrails", "pricing", "faq"];

export const apps = [
  { name: "Mail", icon: Mail, c: "pink" },
  { name: "WhatsApp", icon: MessageSquare, c: "blue" },
  { name: "Sheets", icon: SheetIcon, c: "mint" },
  { name: "UPI & cards", icon: CreditCard, c: "yellow" },
  { name: "Calendar", icon: CalendarDays, c: "orange" },
  { name: "CRM", icon: Users, c: "blue" },
  { name: "Docs", icon: FileText, c: "mint" },
  { name: "Forms", icon: ClipboardList, c: "pink" },
  { name: "Storage", icon: FolderOpen, c: "yellow" },
  { name: "Tickets", icon: Ticket, c: "orange" },
  { name: "Database", icon: Database, c: "pink" },
  { name: "Web", icon: Globe, c: "mint" },
];

export const parts = [
  {
    id: "when",
    text: "When a form is submitted,",
    kind: "trigger",
    block: "Form submitted",
  },
  {
    id: "then",
    text: "add the answers to our sheet",
    kind: "action",
    block: "Add a row",
  },
  {
    id: "and",
    text: "and thank them by email.",
    kind: "ai",
    block: "Write + send thanks",
  },
];

export const recipes = [
  {
    id: "r1",
    team: "Finance",
    title: "Chase failed payments",
    steps: ["Payment failed", "Write a kind email", "Send it", "Tell #billing"],
    flow: "payments",
    c: "yellow",
  },
  {
    id: "r2",
    team: "Ops",
    title: "Monday sign-up report",
    steps: [
      "Every Monday 9:00",
      "Count sign-ups",
      "Chart them",
      "Send to #team",
    ],
    flow: "weekly",
    c: "mint",
  },
  {
    id: "r3",
    team: "Sales",
    title: "Brief every demo",
    steps: [
      "Demo booked",
      "Research the company",
      "Check the size",
      "Brief the lead",
    ],
    flow: "demo",
    c: "pink",
  },
  {
    id: "r4",
    team: "Support",
    title: "Route angry tickets",
    steps: [
      "New ticket",
      "Read the tone",
      "If upset, tag urgent",
      "Page the lead",
    ],
    c: "blue",
  },
  {
    id: "r5",
    team: "Sales",
    title: "Log calls to the CRM",
    steps: ["Call ends", "Summarise it", "Update the deal", "Set a follow-up"],
    c: "orange",
  },
  {
    id: "r6",
    team: "Ops",
    title: "Archive old files",
    steps: [
      "Every Friday",
      "Find files over a year",
      "Move to archive",
      "Post a recap",
    ],
    c: "pink",
  },
  {
    id: "r7",
    team: "Support",
    title: "Answer FAQ emails",
    steps: [
      "Email arrives",
      "Match to the FAQ",
      "Draft a reply",
      "Wait for approval",
    ],
    c: "mint",
  },
  {
    id: "r8",
    team: "Finance",
    title: "Collect receipts",
    steps: [
      "Receipt in inbox",
      "Read the amount",
      "Add to the sheet",
      "Flag over ₹50,000",
    ],
    c: "yellow",
  },
];
export const teams = ["All", "Sales", "Support", "Ops", "Finance"] as const;

export const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. You describe what should happen in a sentence. Knot builds the steps, and you can drag them around or switch them off without touching code.",
  },
  {
    q: "What happens when a step fails?",
    a: "Knot retries with a backoff, then pauses the knot and tells you, depending on your guardrails. Nothing keeps failing silently.",
  },
  {
    q: "Can Knot send things without asking?",
    a: "Only if you let it. Turn on approvals and every email or message waits for a thumbs-up first.",
  },
  {
    q: "Is any of this real?",
    a: "Knot is a fictional product designed by LN. Apps, customers, runs and prices on this page are invented. Nothing is connected or sent.",
  },
];

