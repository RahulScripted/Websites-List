import type { CSSProperties } from "react";
import { Polaroid, Reveal } from "@/components/quillo/parts";
import { Statement } from "@/components/quillo/sections/Statement";
export function About() {
  return (
    <section id="about" data-section="how-it-works">
      <svg className="ql-squiggle" viewBox="0 0 930 94" preserveAspectRatio="none" aria-hidden="true"><path d="M0 47 C 40 10, 80 84, 120 47 S 200 10, 240 47 S 320 84, 360 47 S 440 10, 480 47 S 560 84, 600 47 S 680 10, 720 47 S 800 84, 840 47 S 900 20, 930 47" fill="none" stroke="#14102b" strokeWidth="3" /></svg>
      <div className="ql-about">
        <div className="ql-about-inner">
          <div className="ql-about-deco">
            <svg viewBox="0 0 90 60" fill="none" stroke="#14102b" strokeWidth="2.5" strokeLinecap="round"><path d="M5 50 C20 10 50 5 80 20" /><path d="M70 10 L82 20 L68 28" /></svg>
            <h2 className="ql-hand">how it works!</h2>
          </div>
          <Reveal as="div" className="ql-whats-up"><i className="ql-h ql-tl"></i><i className="ql-h ql-tr"></i><i className="ql-h ql-bl"></i><i className="ql-h ql-br"></i>hi, learner</Reveal>

          <div className="ql-polaroids">
            <Polaroid variant="p1">
              <div className="ql-pic"><svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><use href="#avatar" /></svg></div>
              <p className="ql-hand">class of 2026</p>
            </Polaroid>
            <Polaroid variant="p2">
              <div className="ql-pic">
                <svg viewBox="0 0 146 150" preserveAspectRatio="xMidYMid slice">
                  <rect width="146" height="150" fill="#fbe1a6" />
                  <rect x="0" y="0" width="146" height="98" fill="#fbecc4" />
                  <rect x="96" y="12" width="36" height="46" fill="#a9e4ea" stroke="#14102b" strokeWidth="2" /><path d="M96 35h36M114 12v46" stroke="#14102b" strokeWidth="2" />
                  <rect x="0" y="98" width="146" height="8" fill="#4a1d2e" />
                  <rect x="10" y="106" width="6" height="44" fill="#4a1d2e" /><rect x="128" y="106" width="6" height="44" fill="#4a1d2e" />
                  <rect x="28" y="40" width="64" height="44" rx="3" fill="#14102b" />
                  <rect x="32" y="44" width="56" height="34" fill="#17b3c6" />
                  <rect x="36" y="48" width="20" height="26" fill="#fff" opacity=".9" /><rect x="59" y="48" width="25" height="8" fill="#f7a81b" /><rect x="59" y="59" width="25" height="15" fill="#e4276d" opacity=".85" />
                  <rect x="56" y="84" width="8" height="10" fill="#14102b" /><rect x="46" y="93" width="28" height="5" rx="2" fill="#14102b" />
                  <rect x="108" y="80" width="16" height="18" rx="2" fill="#e4276d" />
                  <path d="M116 80 C108 62 100 66 102 56 M116 80 C120 62 130 64 128 52 M116 80 C116 66 112 60 116 50" stroke="#2e9e5b" strokeWidth="5" fill="none" strokeLinecap="round" />
                  <path d="M6 98 L18 60 L30 62" stroke="#14102b" strokeWidth="3" fill="none" /><path d="M22 54 l18 4 l-6 12z" fill="#f7a81b" stroke="#14102b" strokeWidth="2" />
                  <circle cx="20" cy="94" r="5" fill="#14102b" />
                </svg>
              </div>
              <p className="ql-hand">study mode</p>
            </Polaroid>
          </div>

          <Statement />

          <Reveal as="div" className="ql-skills">
            <div className="ql-skill" style={{ background: "var(--ql-yellow)" } as CSSProperties}>Socratic Tutoring</div>
            <div className="ql-sk-ico" style={{ background: "var(--ql-yellow)", border: "3px dashed var(--ql-brown)" } as CSSProperties}><svg viewBox="0 0 28 26"><path d="M2 2L12 24L14 13L26 9.5Z" fill="#14102b" /></svg></div>
            <div className="ql-skill" style={{ background: "var(--ql-green)" } as CSSProperties}>Adaptive Practice</div>
            <div className="ql-sk-ico" style={{ background: "var(--ql-ink)" } as CSSProperties}><svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="none" stroke="#2e9e5b" strokeWidth="6" strokeDasharray="20 8"><animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="6s" repeatCount="indefinite" /></circle><circle cx="30" cy="30" r="9" fill="#e4276d" /></svg></div>
            <div className="ql-skill" style={{ background: "var(--ql-pink)", color: "#fff" } as CSSProperties}>Teacher Insights</div>
            <div className="ql-sk-ico" style={{ background: "var(--ql-pink)" } as CSSProperties}><svg viewBox="0 0 732 395"><path fillRule="evenodd" d="M366 394C516 394 647 298 712 240C738 217 738 177 712 154C647 96 516 0 366 0C215 0 85 96 20 154C-6.5 177-6.5 217 20 240C85 298 215 394 366 394ZM366 334C442 334 504 273 504 197S442 60 366 60S228 121 228 197S290 334 366 334Z" fill="#fff" /><circle cx="366" cy="197" r="70" fill="#f7a81b" /></svg></div>
            <div className="ql-skill" style={{ background: "var(--ql-cyan)" } as CSSProperties}>Progress Tracking</div>
            <div className="ql-sk-ico" style={{ background: "var(--ql-cyan)" } as CSSProperties}><svg viewBox="0 0 60 60" fill="#14102b"><circle cx="17" cy="17" r="12"><animate attributeName="r" values="12;8;12" dur="2s" repeatCount="indefinite" /></circle><circle cx="43" cy="17" r="12"><animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" /></circle><circle cx="17" cy="43" r="12"><animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" /></circle><circle cx="43" cy="43" r="12"><animate attributeName="r" values="12;8;12" dur="2s" repeatCount="indefinite" /></circle></svg></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
