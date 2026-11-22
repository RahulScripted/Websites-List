import type { SwarmContent } from "@/types/swarm"
import { Hands, Ty } from "@/components/swarm/parts"
import { ids } from "@/components/swarm/lib/helpers"

/** Passes: drawn with the marquee, copied, pasted, priced and stamped. */
export function Passes({ c }: { c: SwarmContent }) {
  const { passes, meta, crew } = c
  return (
    <section className="ov-stage ov-sec ov-passes" id="passes" data-stage="passes" aria-labelledby="ov-pass-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <div className="ov-sec-head">
        <p className="ov-label" data-calm><Ty k="label">{passes.label}</Ty></p>
        <h2 className="ov-h2" id="ov-pass-h" data-calm><Ty block k="h2">{passes.title}</Ty></h2>
      </div>
      <ul className="ov-pass-grid">
        {passes.items.map((p) => (
          <li key={p.name} className={"ov-pass" + (p.featured ? " ov-pass-f" : "")} data-k="pass-card" data-calm>
            <span className="ov-pass-top" data-k="pass-in"><b>{p.name}</b><span>{p.note}</span></span>
            <Ty className="ov-pass-price" k="price">{p.price}</Ty>
            <ul className="ov-perks" data-k="pass-in">{p.perks.map((k) => <li key={k}>{k}</li>)}</ul>
            <a className={"ov-btn" + (p.featured ? " ov-btn-solid" : "")} href={"mailto:" + meta.email + "?subject=" + encodeURIComponent(p.name)} data-k="pass-in">{p.cta}</a>
            {p.stamp && <span className="ov-stamp" data-k="stamp">{p.stamp}</span>}
          </li>
        ))}
      </ul>
      <Hands crew={crew} ids={ids(crew, 3, 2)} />
    </section>
  )
}
