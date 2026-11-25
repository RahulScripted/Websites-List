import type { CSSProperties, ReactNode } from "react";

/** The about statement as words and inline pictures. Each lights up in turn as you scroll past it. */
export const statementItems: ReactNode[] = [
  "GyanSetu",
  <span className="ql-inl"><svg viewBox="0 0 200 200" style={{ borderRadius: "50%" } as CSSProperties}><use href="#avatar" /></svg></span>,
  "is",
  "an",
  "AI",
  "tutor",
  "that",
  "asks",
  "better",
  "questions",
  <span className="ql-inl"><svg viewBox="0 0 40 50"><path d="M20 3 C21 17 26 22 37 24 C26 26 21 31 20 47 C19 31 14 26 3 24 C14 22 19 17 20 3Z" fill="#f7a81b" stroke="#14102b" strokeWidth="2.5" /></svg></span>,
  "so",
  "students",
  "find",
  "the",
  "answers",
  "themselves",
  <span className="ql-inl"><svg viewBox="0 0 50 50"><rect x="3" y="3" width="44" height="44" rx="10" fill="#2e9e5b" stroke="#14102b" strokeWidth="2.5" /><path d="M14 26 l8 8 l15-17" fill="none" stroke="#14102b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>,
  ".",
];
