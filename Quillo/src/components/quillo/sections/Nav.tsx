import { useState } from "react";
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header id="top" data-section="nav" className={open ? "ql-open" : undefined}>
      <nav className="ql-nav">
        <a href="#top" className="ql-logo" aria-label="Home">
          <svg viewBox="0 0 50 25" fill="none" stroke="#14102b" strokeWidth="3.4" strokeLinecap="round">
            <path d="M3 22C3 10 15 3 25 3C35 3 47 10 47 22" />
            <path d="M3 22V25M47 22V25" />
            <path d="M9 22C9 13 16 8 25 8C34 8 41 13 41 22" stroke="#f7a81b" strokeWidth="2.2" />
          </svg>
          <span className="ql-sep"></span>
        </a>
        <div className="ql-links ql-mono" onClick={() => setOpen(false)}>
          <a href="#top" className="ql-active"><svg viewBox="0 0 357 357"><path d="M0 149.8L178.2 5.9L356.4 149.8V356.3H271.7V295.2C271.7 243.5 229.8 201.6 178.2 201.6C126.5 201.6 84.6 243.5 84.6 295.2V356.3H0Z" /></svg>Home</a>
          <a href="#about"><svg viewBox="0 0 357 357"><path d="M0 177.6C0 267.1 178.2 177.6 178.2 177.6S0 88 0 177.6ZM356.4 177.6C356.4 267.1 178.2 177.6 178.2 177.6S356.4 88 356.4 177.6ZM89.1 331.9C166.6 376.7 178.2 177.6 178.2 177.6S11.6 287.1 89.1 331.9ZM267.3 23.3C344.8 68 178.2 177.6 178.2 177.6S189.7-21.5 267.3 23.3ZM267.3 331.9C189.7 376.7 178.2 177.6 178.2 177.6S344.8 287.1 267.3 331.9ZM89.1 23.3C11.5 68 178.2 177.6 178.2 177.6S166.6-21.5 89.1 23.3Z" /></svg>How it works</a>
          <a href="#work"><svg viewBox="0 0 200 200"><path d="M0 200C0 174 18.7 153 43.1 149.5C18.8 146.2 0 125.3 0 100C0 72.4 22.4 50 50 50H50.5C22.8 50 .3 27.7 0 0H200C199.7 27.7 177.2 50 149.5 50H150C177.6 50 200 72.4 200 100C200 125.3 181.2 146.2 156.9 149.5C181.3 153 200 174 200 200Z" /></svg>Features</a>
          <a href="#work"><svg viewBox="0 0 357 357"><path d="M290.8 178.2C330.8 159.8 356.4 131.8 356.4 100.4C356.4 44.9 276.6 0 178.2 0S0 44.9 0 100.4C0 131.8 25.6 159.8 65.6 178.2C25.6 196.6 0 224.6 0 256C0 311.4 79.8 356.4 178.2 356.4S356.4 311.4 356.4 256C356.4 224.6 330.8 196.6 290.8 178.2Z" /></svg>For schools</a>
          <a href="#work"><svg viewBox="0 0 357 357"><path d="M211.4 102.2V4H144.6V102.2L53.2 20.8L6 62.8L144.6 186.2V355H211.4V186.2L350 62.8L302.8 20.8Z" /></svg>Research</a>
          <a href="#work"><svg><use href="#steps" /></svg>Try it</a>
        </div>
        <div className="ql-nav-right">
          <a className="ql-chip" href="#contact" title="Help">?</a>
          <a className="ql-chip" href="#contact" title="Language">EN</a>
          <div className="ql-nav-avatar"><svg viewBox="0 0 200 200"><use href="#avatar" /></svg></div>
          <a href="#contact" className="ql-btn-outline ql-mono"><svg><use href="#heart" /></svg>Start free</a>
        </div>
        <button className="ql-menu-btn ql-mono" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>Menu <span><i></i><i></i></span></button>
      </nav>
    </header>
  );
}
