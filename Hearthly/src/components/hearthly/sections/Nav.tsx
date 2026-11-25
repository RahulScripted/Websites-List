import { useEffect, useState } from "react";
import { navLinks } from "@/components/hearthly/content";

/** Frosted header: hides on the way down, returns on the way up. Under 1000px the links fold into a sheet. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setSolid(y > 10);
      if (y < 90) setHidden(false);
      else if (y > last) setHidden(true);
      else if (y < last - 2) setHidden(false);
      last = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = ["hy-hdr", solid && "hy-is-solid", hidden && !open && "hy-is-hidden"].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <div className="hy-wrap hy-hdr__in">
        <a className="hy-logo" href="#top">
          <svg aria-hidden="true">
            <use href="#hy-s-logo" />
          </svg>
          Hearthly
        </a>
        <nav className={"hy-nav" + (open ? " hy-is-open" : "")} id="hy-site-nav" aria-label="Main" onClick={(e) => (e.target as Element).closest("a") && setOpen(false)}>
          {navLinks.map((link) => (
            <a key={link.label} className="hy-link" href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="hy-btn hy-btn--line hy-btn--sm hy-nav__extra" href="#contact">
            Get the app
          </a>
        </nav>
        <div className="hy-hdr__tools">
          <a className="hy-ibtn hy-ibtn--bare hy-hdr__search" href="#faq" aria-label="Search help">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
          </a>
          <a className="hy-ibtn hy-ibtn--bare" href="#contact" aria-label="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="8.5" r="3.5" />
              <path d="M5 20c1.2-3.8 4-5.5 7-5.5s5.8 1.7 7 5.5" />
            </svg>
          </a>
          <a className="hy-btn hy-btn--line hy-btn--sm" href="#contact">
            Get the app
          </a>
          <button
            className="hy-ibtn hy-menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="hy-site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg className="hy-i-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
            <svg className="hy-i-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
