import type { CSSProperties } from "react";

export function Contact() {
  return (
    <section id="contact" className="hy-contact">
      <div className="hy-wrap hy-contact__in">
        <div className="hy-contact__copy">
          <h2 className="hy-contact__title">Let your home <em className="hy-s">talk back</em></h2>
          <a className="hy-contact__mail" href="mailto:hello@hearthly.in">hello@hearthly.in</a>
          <dl className="hy-contact__list">
            <div><dt>Support</dt><dd>In the app, 7 days a week<br />7am – 11pm IST</dd></div>
            <div><dt>Emergencies</dt><dd>24/7 for members<br />Leaks, no heat, power loss</dd></div>
            <div><dt>Call</dt><dd><a className="hy-link" href="#contact">+91 22 4000 0000</a></dd></div>
            <div><dt>Follow</dt><dd><a className="hy-link" href="#footer">@hearthly</a></dd></div>
          </dl>
          <div className="hy-contact__actions">
            <a className="hy-btn" href="#pricing">Start free <svg className="hy-btn__arr" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5" /></svg></a>
            <a className="hy-btn hy-btn--line" href="#process">See how it works</a>
          </div>
        </div>
        <figure className="hy-contact__photo hy-tab-r">
          <div className="hy-art hy-g-amber">
            <div className="hy-phone" role="img" aria-label="Hearthly app home screen">
              <div className="hy-phone__screen">
                <p className="hy-ph-hi">Good morning, Aarav</p>
                <p className="hy-ph-h">Your home is <em>doing well</em></p>
                <div className="hy-ph-score"><svg viewBox="0 0 46 46" aria-hidden="true"><circle cx="23" cy="23" r="19" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="5" /><circle cx="23" cy="23" r="19" fill="none" stroke="#f2b544" strokeWidth="5" strokeLinecap="round" strokeDasharray="110 120" transform="rotate(-90 23 23)" /><text x="23" y="27" textAnchor="middle" fill="#f6f2ea" style={{ font: "700 11px 'Instrument Sans',sans-serif" } as CSSProperties}>92</text></svg><span><b>Home health score</b><small>Up 4 since last month</small></span></div>
                <div className="hy-ph-tiles">
                  <div className="hy-ph-tile"><i style={{ background: "var(--hy-sky)" } as CSSProperties}></i><b>Water</b><small>Normal flow</small></div>
                  <div className="hy-ph-tile"><i style={{ background: "var(--hy-ember)" } as CSSProperties}></i><b>Cooling</b><small>24° · Eco</small></div>
                  <div className="hy-ph-tile"><i style={{ background: "var(--hy-amber)" } as CSSProperties}></i><b>Power</b><small>−12% vs. avg</small></div>
                  <div className="hy-ph-tile"><i style={{ background: "var(--hy-sage)" } as CSSProperties}></i><b>Air</b><small>Filter in 9 days</small></div>
                </div>
                <div className="hy-ph-task"><span><b>Tank clean</b><small>Sat · Aqua Clean Co.</small></span><em>Booked</em></div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
