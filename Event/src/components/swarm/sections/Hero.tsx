import type { CSSVars, SwarmContent } from "@/types/swarm"
import { Crops, Hands, Ty } from "@/components/swarm/parts"
import { ids } from "@/components/swarm/lib/helpers"

/** A sticky stage the crew builds across almost two screens of scroll. */
export function Hero({ c }: { c: SwarmContent }) {
  const { meta, hero, crew, passes } = c
  const featured = passes.items.find((p) => p.featured) ?? passes.items[0]
  return (
    <section className="ov-hero-run" aria-label={hero.aria}>
      <div className="ov-stage ov-hero" data-stage="hero">
        <Crops />
        <header className="ov-top" data-calm>
          <a className="ov-logo" href="#top" data-k="logo"><Ty>{meta.logo}</Ty><sup data-k="ed">{meta.edition}</sup></a>
          <nav className="ov-nav" aria-label={hero.navAria}>
            {hero.nav.map((n) => <a key={n.href} href={n.href}><Ty k="nav">{n.label}</Ty></a>)}
          </nav>
          <a className="ov-btn ov-btn-solid" href={meta.ctaHref} data-k="pass"><span data-k="pass-l">{hero.passButton}</span></a>
        </header>

        <div className="ov-hero-main">
          <div className="ov-hero-copy">
            <p className="ov-kicker" data-calm><Ty k="kicker">{hero.kicker + " · " + meta.city + " · " + meta.dates}</Ty></p>
            <h1 className="ov-h1" data-calm>
              <span className="ov-sr">{hero.headline.join(" ")}</span>
              <span className="ov-plates" aria-hidden="true" data-k="plates">
                <span className="ov-plate ov-plate-b">
                  {hero.headline.map((l, i) => <span key={i} className="ov-pl"><Ty sr={false} k="hl">{l}</Ty></span>)}
                </span>
                <span className="ov-plate ov-plate-p" data-k="pink">
                  {hero.headline.map((l, i) => <span key={i} className="ov-pl">{l}</span>)}
                </span>
              </span>
            </h1>
            <p className="ov-sub" data-calm><Ty block k="sub">{hero.intro}</Ty></p>
            <div className="ov-ctas" data-calm>
              <a className="ov-btn ov-btn-solid ov-btn-lg" href={meta.ctaHref} data-k="cta">{hero.ctaPrimary} {featured?.price}</a>
              <a className="ov-btn ov-btn-lg" href={hero.ctaSecondaryHref} data-k="cta">{hero.ctaSecondary}</a>
            </div>
          </div>

          <div className="ov-art" aria-hidden="true" data-calm>
            <span className="ov-disc ov-disc-p" data-k="disc" />
            <span className="ov-disc ov-disc-b" data-k="disc" />
            <span className="ov-ring" data-k="ring">
              <svg viewBox="0 0 200 200">
                <defs><path id="ov-ring-path" d="M100 100m-91 0a91 91 0 1 1 182 0a91 91 0 1 1-182 0" /></defs>
                <text><textPath href="#ov-ring-path" textLength="568">{hero.ring}</textPath></text>
              </svg>
            </span>
            <span className="ov-art-date" data-k="date"><b>{hero.dateArt[0]}</b><b>{hero.dateArt[1]}</b></span>
          </div>
        </div>

        <footer className="ov-colo" data-calm>
          <span className="ov-colo-inks">
            <span data-k="colo"><Ty>{hero.colophon}</Ty></span>
            <i className="ov-chip" style={{ "--i": "var(--ov-pink)" } as CSSVars} data-k="chip-p" />
            <i className="ov-chip" style={{ "--i": "var(--ov-blue)" } as CSSVars} data-k="chip-b" />
          </span>
          <span data-k="colo"><Ty>{hero.venue.join(" · ")}</Ty></span>
          <span className="ov-colo-crew" data-k="crew" aria-label={hero.crewAria + " " + crew.map((m) => m.name).join(", ")}>
            {crew.map((m) => <i key={m.name} style={{ "--c": m.color, "--ct": m.ink ?? "#fff" } as CSSVars} aria-hidden="true">{m.name[0]}</i>)}
          </span>
        </footer>

        <div className="ov-hint" aria-hidden="true" data-k="hint">
          <span className="ov-pre-top"><b>{hero.hint.file}</b><span><span data-k="pre-n">{crew.length}</span> {hero.hint.of} <span data-k="pre-t">{crew.length}</span> {hero.hint.here}</span></span>
          <span className="ov-pre-bar"><i data-k="pre-p" /><i data-k="pre-b" /></span>
          <span className="ov-pre-msg"><span data-k="pre-wait">{hero.hint.wait}</span><span data-k="pre-go">{hero.hint.go}</span></span>
        </div>
        <Hands crew={crew} ids={ids(crew, crew.length, 0)} />
      </div>
    </section>
  )
}
