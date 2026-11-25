import type { CSSProperties } from "react";
import { NightScene } from "@/components/hearthly/illustrations/NightScene";

export function Hero() {
  return (
    <section id="hero" className="hy-hero">
      <div className="hy-hero__stage">
        <div className="hy-wrap hy-hero__head">
          <a className="hy-ring" href="#process" aria-label="See a day with Hearthly">
            <svg className="hy-ring__svg" viewBox="0 0 100 100" aria-hidden="true"><path id="hy-ring-path" d="M11 50a39 39 0 1 1 78 0a39 39 0 1 1-78 0" fill="none" /><text><textPath href="#hy-ring-path" textLength="240" lengthAdjust="spacingAndGlyphs">See a day with Hearthly · AI home care ·</textPath></text></svg>
            <svg className="hy-ring__play" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor" /></svg>
          </a>
          <h1 className="hy-hero__title">Your home, <em className="hy-s">quietly</em> looked after</h1>
          <a className="hy-crew" href="#team">
            <span className="hy-crew__img"><svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" fill="#f2b544" /><circle cx="20" cy="17" r="7.5" fill="#8a5a3c" /><path d="M12.5 15c0-6 15-6 15 0-2-2-5-3-7.5-3s-5.5 1-7.5 3z" fill="#1c1410" /><path d="M6 40c1-8 7-12 14-12s13 4 14 12z" fill="#1f4d43" /></svg></span>
            <span className="hy-crew__img"><svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" fill="#9cc6dc" /><path d="M11 22c-1-10 4-14 9-14s10 4 9 14l-2 6H13z" fill="#3a2418" /><circle cx="20" cy="18" r="7" fill="#f0c8a8" /><path d="M6 40c1-8 7-12 14-12s13 4 14 12z" fill="#e8693c" /></svg></span>
            <span className="hy-ibtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></span>
            <span className="hy-sr">Meet the team</span>
          </a>
        </div>
        <div className="hy-wrap hy-collage">
          <div className="hy-collage__col hy-col-a">
            <figure className="hy-look hy-look--xl hy-tab-l" style={{ "--hy-fd": "3.2s", "--hy-fdl": "0.0s", "--hy-fa": "-5px", "--hy-plate": "var(--hy-ember)" } as CSSProperties}><div className="hy-art hy-g-ember" role="img" aria-label="Smart AC thermostat set to 24 degrees"><svg className="hy-ico" viewBox="0 0 200 200" style={{ "--hy-s": "78%" } as CSSProperties}><use href="#hy-s-thermo" /></svg></div></figure>
            <figure className="hy-look hy-look--sm" style={{ "--hy-fd": "3.9s", "--hy-fdl": "-0.6s", "--hy-fa": "5px", "--hy-plate": "var(--hy-amber)" } as CSSProperties}><div className="hy-art hy-g-amber"></div><div className="hy-chip"><span className="hy-chip__ic"><svg viewBox="0 0 24 24"><use href="#hy-s-spark" /></svg></span><span><b>Filter swap booked</b><small>Thu · 9:00 am</small></span></div></figure>
          </div>
          <div className="hy-collage__col hy-col-b">
            <figure className="hy-look hy-look--xxl hy-tab-l" style={{ "--hy-fd": "4.6s", "--hy-fdl": "-1.2s", "--hy-fa": "-5px", "--hy-plate": "var(--hy-sage)" } as CSSProperties}><div className="hy-art hy-g-sage" role="img" aria-label="Illustrated home with a glowing status light"><svg className="hy-ico" viewBox="0 0 200 200" style={{ "--hy-s": "88%" } as CSSProperties}><use href="#hy-s-house" /></svg></div><div className="hy-chip"><span className="hy-chip__ic"><svg viewBox="0 0 24 24"><use href="#hy-s-spark" /></svg></span><span><b>All systems healthy</b><small>Checked 4 min ago</small></span></div></figure>
          </div>
          <div className="hy-collage__col hy-col-c">
            <svg className="hy-burst" viewBox="0 0 40 40" aria-hidden="true"><g fill="currentColor"><circle cx="20" cy="4" r="2.2" /><circle cx="31.3" cy="8.7" r="2.2" /><circle cx="36" cy="20" r="2.2" /><circle cx="31.3" cy="31.3" r="2.2" /><circle cx="20" cy="36" r="2.2" /><circle cx="8.7" cy="31.3" r="2.2" /><circle cx="4" cy="20" r="2.2" /><circle cx="8.7" cy="8.7" r="2.2" /><circle cx="20" cy="12" r="1.7" /><circle cx="27" cy="16" r="1.7" /><circle cx="27" cy="24" r="1.7" /><circle cx="20" cy="28" r="1.7" /><circle cx="13" cy="24" r="1.7" /><circle cx="13" cy="16" r="1.7" /><circle cx="20" cy="20" r="2.6" /></g></svg>
            <figure className="hy-look hy-look--md" style={{ "--hy-fd": "3.2s", "--hy-fdl": "-1.8s", "--hy-fa": "5px", "--hy-plate": "var(--hy-amber)" } as CSSProperties}><div className="hy-art hy-g-cream" role="img" aria-label="The Hearthly AI orb"><svg className="hy-ico" viewBox="0 0 200 200" style={{ "--hy-s": "86%" } as CSSProperties}><use href="#hy-s-orb" /></svg></div></figure>
            <a className="hy-btn hy-btn--cta" href="#collections">Explore services <svg className="hy-btn__arr" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5" /></svg></a>
          </div>
          <div className="hy-collage__col hy-col-d">
            <figure className="hy-look hy-look--xxl hy-tab-r" style={{ "--hy-fd": "3.9s", "--hy-fdl": "-2.4s", "--hy-fa": "-5px", "--hy-plate": "var(--hy-sky)" } as CSSProperties}><div className="hy-art hy-g-sky" role="img" aria-label="Water drop with sensor ripples"><svg className="hy-ico" viewBox="0 0 200 200" style={{ "--hy-s": "84%" } as CSSProperties}><use href="#hy-s-drop" /></svg></div><div className="hy-chip"><span className="hy-chip__ic"><svg viewBox="0 0 24 24"><use href="#hy-s-spark" /></svg></span><span><b>Slow leak found</b><small>Under kitchen sink</small></span></div></figure>
          </div>
          <div className="hy-collage__col hy-col-e">
            <figure className="hy-look hy-look--xl hy-tab-r" style={{ "--hy-fd": "4.6s", "--hy-fdl": "-3.0s", "--hy-fa": "5px", "--hy-plate": "var(--hy-sage)" } as CSSProperties}><div className="hy-art hy-g-sage" role="img" aria-label="Security shield with a check mark"><svg className="hy-ico" viewBox="0 0 200 200" style={{ "--hy-s": "72%" } as CSSProperties}><use href="#hy-s-shield" /></svg></div></figure>
            <figure className="hy-look hy-look--sm" style={{ "--hy-fd": "3.2s", "--hy-fdl": "-3.6s", "--hy-fa": "-5px", "--hy-plate": "var(--hy-pine)" } as CSSProperties}><div className="hy-art hy-g-pine"></div><div className="hy-chip"><span className="hy-chip__ic"><svg viewBox="0 0 24 24"><use href="#hy-s-spark" /></svg></span><span><b>Saved ₹1,850 this month</b><small>Off-peak charging</small></span></div></figure>
          </div>
        </div>
      
    
        <div className="hy-flood">
                <div className="hy-art hy-g-night" role="img" aria-label="A home at night, lit windows, with sensor rings around it">
                  <NightScene />
                </div>
                <div className="hy-wrap hy-flood__text">
                  <h2 className="hy-flood__title">It notices the seepage before the ceiling does. Then it books the plumber.</h2>
                  <p className="hy-flood__lead">Hearthly listens to your home's systems around the clock, explains what it finds in plain English, and lines up a vetted local pro before a small fix becomes a big bill.</p>
                </div>
              </div>
    </div>
    </section>
  );
}
