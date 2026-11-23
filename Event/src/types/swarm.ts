import type { CSSProperties } from "react"

/** React style object that also accepts CSS custom properties, e.g. `{ "--c": "#f00" }`. */
export type CSSVars = CSSProperties & Record<`--${string}`, string | number>

export interface Collaborator {
  name: string
  color: string
  /** Text colour on the name tag. Defaults to white. */
  ink?: string
}

export type SpeakerInk = "pink" | "blue" | "yellow" | "teal" | "orange"

export interface Speaker {
  name: string
  role: string
  city: string
  talk: string
  ink: SpeakerInk
}

export interface Session {
  time: string
  title: string
  who?: string
  room: string
}

export interface Pass {
  name: string
  price: string
  note: string
  perks: string[]
  /** Button label on the pass card. */
  cta: string
  featured?: boolean
  stamp?: string
}

export interface FaqItem {
  question: string
  answer: string
}
export interface Ink {
  name: string
  code: string
  /** CSS colour variable, e.g. "var(--ov-pink)". */
  v: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Greeting {
  text: string
  lang?: string
}

/** Every piece of copy on the page. Edit `data/content.ts`; no component holds visible text. */
export interface SwarmContent {
  seo: { title: string; description: string }
  preloader: { greetings: Greeting[]; hold: number; reveal: number }
  meta: { brand: string; logo: string; edition: string; city: string; dates: string; email: string; ctaHref: string }
  crew: Collaborator[]
  hero: {
    aria: string
    kicker: string
    headline: [string, string, string]
    intro: string
    nav: NavItem[]
    navAria: string
    passButton: string
    ctaPrimary: string
    ctaSecondary: string
    ctaSecondaryHref: string
    ring: string
    dateArt: [string, string]
    colophon: string
    venue: string[]
    crewAria: string
    hint: { file: string; of: string; here: string; wait: string; go: string }
  }
  idea: {
    label: string
    before: string
    mark: string
    after: string
    inksAria: string
    inks: Ink[]
  }
  speakers: { label: string; title: string; items: Speaker[] }
  programme: {
    label: string
    title: string
    note: string
    listAria: string
    sessions: Session[]
    comment: { first: string; reply: string }
  }
  passes: {
    label: string
    title: string
    items: Pass[]
    /** Fake right-click menus the crew uses while building the cards. */
    menus: { copy: string[]; paste: string[]; stamp: string[] }
    pasteKey: string
  }
  faq: { label: string; title: string; intro: string; listAria: string; items: FaqItem[] }
  finale: {
    line1: string
    line2: string
    srLine: string
    where: string
    when: string
    doors: string
    write: string
    credits: string
    fine: string
  }
}
