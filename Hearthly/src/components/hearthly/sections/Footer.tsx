import { useState, type FormEvent } from "react";
import { badges, footerColumns, legalLinks } from "@/components/hearthly/content";
import { Check } from "@/components/hearthly/parts";

/** Closing call to action, link columns, a newsletter form that sends nothing, and the legal row. */
export function Footer() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity() || !email) {
      setNote("Please enter a valid email address.");
      return;
    }
    setNote("Thanks — your first check-in arrives next month.");
    setEmail("");
  };

  return (
    <footer id="footer" className="hy-foot">
      <div className="hy-wrap">
        <div className="hy-fcta">
          <svg className="hy-fcta__orb" viewBox="0 0 200 200" aria-hidden="true"><use href="#hy-s-orb" /></svg>
          <div>
            <p className="hy-fcta__eyebrow">Free for 30 days</p>
            <p className="hy-fcta__title">Give your home <em>a second set of eyes.</em></p>
          </div>
          <div className="hy-stores">
            <a className="hy-store" href="#pricing" aria-label="Download on the App Store"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.8 1.2 1.8 2.6 3.1 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.5.9-1.4 1.3-2.8 1.3-2.8s-2.4-.9-2.4-3.7zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z" /></svg><span><small>Download on the</small><b>App Store</b></span></a>
            <a className="hy-store hy-store--ghost" href="#pricing" aria-label="Get it on Google Play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2.8v18.4c0 .4.4.7.8.5l10.3-9.2L4.8 2.3c-.4-.2-.8.1-.8.5zM16.3 13.6l-2.6 2.3 2.9 2.6 3.6-2c.8-.5.8-1.5 0-2l-1.5-.8zM14 11.8l2.5-2.2-10.1-5.8z" /></svg><span><small>Get it on</small><b>Google Play</b></span></a>
          </div>
        </div>

        <div className="hy-foot__grid">
          <div className="hy-foot__brand">
            <a className="hy-logo" href="#top"><svg viewBox="0 0 28 28" aria-hidden="true"><use href="#hy-s-logo" /></svg>Hearthly</a>
            <p className="hy-foot__about">The AI that keeps an eye on your home's water, heat, power, air and safety, and books a trusted pro the moment something needs fixing.</p>
            <span className="hy-status"><i></i>All systems monitoring normally</span>
          </div>
          {footerColumns.map((column) => (
              <nav key={column.title} className="hy-foot__col" aria-label={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a className="hy-link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <form className="hy-news" noValidate onSubmit={subscribe}>
              <h3>The Monthly Check-in</h3>
              <p>One short, seasonal home tip a month. No spam, unsubscribe any time.</p>
              <label className="hy-news__field">
                <span className="hy-sr">Email address</span>
                <input type="email" name="email" placeholder="you@example.com" autoComplete="email" size={1} required value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" aria-label="Subscribe">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>
              </label>
              <p className="hy-news__ok" aria-live="polite">
                {note}
              </p>
            </form>
        </div>

        <div className="hy-foot__base">
          <div className="hy-foot__legal">
              <span>© 2026 Hearthly Technologies Pvt. Ltd.</span>
              {legalLinks.map((label) => (
                <a key={label} className="hy-link" href="#top">
                  {label}
                </a>
              ))}
            </div>
          <div className="hy-badges">
              {badges.map((label) => (
                <Check key={label}>{label}</Check>
              ))}
            </div>
          <div className="hy-socials">
            <a href="#footer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href="#footer" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" /></svg></a>
            <a href="#footer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" /></svg></a>
            <a href="#footer" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.3 4.7H5.5z" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
