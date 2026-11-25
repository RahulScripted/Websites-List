import { useMemo } from "react"
import type { SwarmContent } from "@/types/swarm"
import { Hands, Ty } from "@/components/swarm/parts"
import { ids, inkVar } from "@/components/swarm/lib/helpers"
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero"

/** The festival archive: the crew types the heading, draws the reel out with a marquee, then drags the numbers in. */
export function Archive({ c }: { c: SwarmContent }) {
  const { archive, crew } = c
  // Flat ink tiles stand in for photos of the archive until real scans exist.
  const tiles = useMemo(
    () =>
      archive.tiles.map((t) => ({
        color: inkVar(t.ink),
        content: (
          <span className="ov-arc-face" data-ink={t.ink}>
            <span className="ov-arc-tag">{t.tag}</span>
            <span className="ov-arc-title">{t.title}</span>
            <b className="ov-arc-year">{t.year}</b>
          </span>
        ),
      })),
    [archive.tiles],
  )
  return (
    <section className="ov-stage ov-sec ov-arc" id="archive" data-stage="archive" aria-labelledby="ov-arc-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <div className="ov-sec-head">
        <p className="ov-label" data-calm><Ty k="label">{archive.label}</Ty></p>
        <div className="ov-bring-head">
          <h2 className="ov-h2" id="ov-arc-h" data-calm><Ty block k="h2">{archive.title}</Ty></h2>
          <p className="ov-note" data-calm><Ty block k="note">{archive.note}</Ty></p>
        </div>
      </div>
      <div className="ov-arc-reel" data-k="reel" data-calm role="img" aria-label={archive.reelAria + ": " + archive.tiles.map((t) => t.title).join(", ")}>
        <TiltedGridHero images={tiles} square tileHeight={52} aspectRatio={4 / 3} gap={14} axis={50} curve={70} fade={10} speed={4.5} className="ov-arc-band" />
      </div>
      <ul className="ov-arc-stats">
        {archive.stats.map((s) => (
          <li key={s.label} className="ov-arc-stat" data-k="stat" data-calm>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
      <a className="ov-btn ov-btn-lg ov-arc-cta" href={archive.cta.href} data-calm>{archive.cta.label}</a>
      <Hands crew={crew} ids={ids(crew, 4, 4)} />
    </section>
  )
}
