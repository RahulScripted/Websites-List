import type { CSSProperties } from "react";
import { Eyes, InView, ReactButton, Split } from "@/components/quillo/parts";
export function Footer() {
  return (
    <footer className="ql-cta ql-grid-bg" id="contact" data-section="footer">
      <div className="ql-cta-head">
        <div>
          <div className="ql-blob-wrap" id="blob">
            <svg className="ql-blob" viewBox="0 0 200 200"><path d="M100 168.6C29.7 227.3-27.3 170.3 31.4 100C-27.3 29.7 29.7-27.3 100 31.4C170.3-27.3 227.3 29.7 168.6 100C227.3 170.3 170.3 227.3 100 168.6Z" fill="#2e9e5b" stroke="#14102b" strokeWidth="1.5" /></svg>
            <Eyes />
          </div>
        </div>
        <div className="ql-cta-copy">
          <Split as="h2" className="ql-display" text="Let&#39;s Learn" />
          <p>Bring GyanSetu to your classroom. Free for teachers, built alongside educators, and designed so students do the thinking.</p>
        </div>
      </div>

      <InView as="div" className="ql-panel">
        <svg className="ql-shape" fill="#f7a81b" style={{ left: "6%", bottom: "12%", width: "90px", animation: "spin 20s linear infinite" } as CSSProperties}><use href="#spark4" /></svg>
        <svg className="ql-shape" viewBox="0 0 200 200" fill="#f8bdd3" style={{ right: "8%", bottom: "20%", width: "70px", opacity: ".6" } as CSSProperties}><use href="#chev" /></svg>
        <svg className="ql-shape" viewBox="0 0 200 200" style={{ right: "14%", top: "12%", width: "120px", animation: "spin 40s linear infinite reverse" } as CSSProperties}><path d="M100 168.6C29.7 227.3-27.3 170.3 31.4 100C-27.3 29.7 29.7-27.3 100 31.4C170.3-27.3 227.3 29.7 168.6 100C227.3 170.3 170.3 227.3 100 168.6Z" fill="none" stroke="#17b3c6" strokeWidth="3" strokeDasharray="6 8" /></svg>

        <div className="ql-comment">
          <p style={{ color: "var(--ql-muted)" } as CSSProperties}>Comment</p><hr />
          <div className="ql-row">
            <div className="ql-av"><svg viewBox="0 0 200 200"><use href="#avatar" /></svg></div>
            <div>
              <p style={{ fontWeight: "600" } as CSSProperties}>GyanSetu</p>
              <p>Ready when you are. Set up a class in minutes, or talk to us about plans for your whole school.</p>
              <ReactButton />
            </div>
          </div>
        </div>

        <a href="mailto:hello@gyansetu.in" className="ql-contact-big">
          <span className="ql-fill"></span><i className="ql-dot"></i><i className="ql-dot"></i><i className="ql-dot"></i><i className="ql-dot"></i>
          <span className="ql-tile"><span className="ql-pat"><i style={{ left: "24%", top: "25%" } as CSSProperties}></i><i style={{ left: "74%", top: "24%" } as CSSProperties}></i><i style={{ left: "74%", top: "75%" } as CSSProperties}></i><i style={{ left: "24%", top: "75%" } as CSSProperties}></i></span><svg fill="#f7a81b"><use href="#chev" /></svg></span>
          <h2 className="ql-display">Start Free</h2>
          <span className="ql-tile"><span className="ql-pat" style={{ animationDirection: "reverse" } as CSSProperties}><i style={{ left: "24%", top: "25%" } as CSSProperties}></i><i style={{ left: "74%", top: "24%" } as CSSProperties}></i><i style={{ left: "74%", top: "75%" } as CSSProperties}></i><i style={{ left: "24%", top: "75%" } as CSSProperties}></i></span><svg fill="#f7a81b"><use href="#chev" /></svg></span>
        </a>
      </InView>

      <div>
        <div className="ql-ruler"></div>
        <div className="ql-base ql-mono"><span>© 2026 GyanSetu</span><span>Made in Bengaluru for curious minds</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
