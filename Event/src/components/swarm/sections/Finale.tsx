import type { CSSVars, SwarmContent } from "@/types/swarm"
import { Hands } from "@/components/swarm/parts"
import { ids } from "@/components/swarm/lib/helpers"

const letters = (s: string) => s.split("").map((ch, i) => <span key={i} className="ov-L" data-k="L">{ch === " " ? " " : ch}</span>)

/** The swarm fetches the letters, then rests on the credits. */
export function Finale({ c }: { c: SwarmContent }) {
  const { finale, meta, hero, crew } = c
  return (
    <section className="ov-stage ov-sec ov-fin" data-stage="finale" aria-labelledby="ov-fin-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <span className="ov-fin-disc" data-k="fdisc" aria-hidden="true" />
      <h2 className="ov-fin-h" id="ov-fin-h" data-calm>
        <span className="ov-sr">{finale.srLine}</span>
        <span aria-hidden="true" className="ov-fin-l1">{letters(finale.line1)}</span>
        <span aria-hidden="true" className="ov-fin-l2">{letters(finale.line2)}</span>
      </h2>
      <div className="ov-foot">
        <div data-calm data-k="foot"><span className="ov-label">{finale.where}</span>{hero.venue.map((v) => <span key={v}>{v}</span>)}</div>
        <div data-calm data-k="foot"><span className="ov-label">{finale.when}</span><span>{meta.dates}</span><span>{finale.doors}</span></div>
        <div data-calm data-k="foot"><span className="ov-label">{finale.write}</span><a href={"mailto:" + meta.email}>{meta.email}</a></div>
        <div data-calm className="ov-credits"><span className="ov-label" data-k="foot">{finale.credits}</span>
          <ul>{crew.map((m) => <li key={m.name} data-k="credit" style={{ "--c": m.color } as CSSVars}><i aria-hidden="true" />{m.name}</li>)}</ul>
        </div>
      </div>
      <p className="ov-fine" data-calm data-k="foot">{finale.fine}</p>
      <Hands crew={crew} ids={ids(crew, crew.length, 0)} />
    </section>
  )
}
