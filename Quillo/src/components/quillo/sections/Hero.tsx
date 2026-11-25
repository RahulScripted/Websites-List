import type { CSSProperties } from "react";
import { Clock, Reveal, Split } from "@/components/quillo/parts";
export function Hero() {
  return (
    <section className="ql-hero" data-section="hero">
      <div className="ql-hero-top">
        <div className="ql-ruler" style={{ width: "100%" } as CSSProperties}></div>
        <div className="ql-clock"><b></b><Clock /> <span style={{ color: "var(--ql-muted)" } as CSSProperties}>STUDY TIME</span></div>
      </div>
      <div className="ql-hero-body">
        <div className="ql-bubble-avatar ql-b1"><div className="ql-av"><svg viewBox="0 0 200 200"><use href="#avatar" /></svg></div></div>
        <div className="ql-bubble-avatar ql-b2"><div className="ql-av"><svg viewBox="0 0 200 200"><use href="#avatar" /></svg></div></div>

        <div className="ql-my-name ql-hand">
          नमस्ते! meet your new tutor
          <svg viewBox="0 0 74 14" fill="none" stroke="#14102b" strokeLinecap="round"><path d="M1 4.5C10 3 37 0 72.8 2" /><path d="M11.3 8C18 6.8 37.7 4.8 63.5 6.2" /><path d="M2.8 12.6C11.5 11 37.3 8.4 71 10.3" /></svg>
        </div>

        <div className="ql-name-box">
          <i className="ql-h ql-tl"></i><i className="ql-h ql-tr"></i><i className="ql-h ql-bl"></i><i className="ql-h ql-br"></i>
          <Split as="h1" className="ql-name ql-display" text="GyanSetu" chars />
          <div className="ql-sticker ql-s1">Built with teachers across India</div>
          <div className="ql-sticker ql-s2">Safe for students, by design</div>
        </div>

        <div className="ql-available ql-mono"><i></i><Split as="span" up text="Now open for the 2026–27 academic year" /></div>

        <Reveal as="p" className="ql-lede">AI that teaches
          <span className="ql-inl"><svg viewBox="0 0 40 50"><rect x="13" y="4" width="14" height="34" rx="2" fill="#f7a81b" stroke="#14102b" strokeWidth="2.5" transform="rotate(20 20 25)" /><path d="M14 40 l6 8 l6-8z" fill="#14102b" transform="rotate(20 20 25)" /><rect x="13" y="4" width="14" height="7" fill="#e4276d" stroke="#14102b" strokeWidth="2.5" transform="rotate(20 20 25)" /></svg></span>
          students how to think
          <span className="ql-inl"><svg viewBox="0 0 40 50"><g fill="#17b3c6" stroke="#14102b" strokeWidth="2.5" strokeLinejoin="round"><path d="M20 3 C21 17 26 22 37 24 C26 26 21 31 20 47 C19 31 14 26 3 24 C14 22 19 17 20 3Z" /></g></svg></span>.
        </Reveal>

        <a href="#contact" className="ql-btn-main ql-mono">
          <span className="ql-ic"><svg fill="#14102b"><use href="#chev" /></svg><svg fill="#14102b"><use href="#chev" /></svg></span>
          Start learning
          <svg className="ql-spark ql-a" fill="#e4276d"><use href="#spark4" /></svg>
          <svg className="ql-spark ql-b" fill="#e4276d"><use href="#spark4" /></svg>
        </a>

        <div className="ql-cursor-tag ql-t1 ql-mono"><svg className="ql-ptr" fill="#f6e6ae"><use href="#ptr" /></svg>AI tutor</div>
        <div className="ql-cursor-tag ql-t2 ql-mono"><svg className="ql-ptr" fill="#f8bdd3"><use href="#ptr" /></svg>CBSE · ICSE</div>
      </div>
    </section>
  );
}
