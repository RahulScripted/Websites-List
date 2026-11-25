import { Logo } from "@/components/knot/parts";
import { links, LN, SOURCE } from "@/components/knot/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#top" className="brand">
          <Logo /> knot
        </a>
        <nav aria-label="Footer">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={LN}>Docs</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          Knot is a fictional product. Apps, customers, runs and prices are
          invented for this demo.
        </p>
        <p>
          Designed by <a href={LN}>LN</a>, localised for India ·{" "}
          <a href={SOURCE}>Source</a>
        </p>
      </div>
    </footer>
  );
}
