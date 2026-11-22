import type { CSSVars, SwarmContent } from "@/types/swarm"
import { Hands, Ty } from "@/components/swarm/parts"
import { ids, initials, inkVar } from "@/components/swarm/lib/helpers"

/** Speakers, dealt from a deck. */
export function Speakers({ c }: { c: SwarmContent }) {
  const { speakers, crew } = c
  const list = speakers.items
  return (
    <section className="ov-stage ov-sec ov-spks" id="speakers" data-stage="speakers" aria-labelledby="ov-spk-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <div className="ov-sec-head">
        <p className="ov-label" data-calm><Ty k="label">{speakers.label}</Ty></p>
        <h2 className="ov-h2" id="ov-spk-h" data-calm><Ty block k="h2">{speakers.title}</Ty></h2>
        <span className="ov-deck" data-k="deck" aria-hidden="true" />
      </div>
      <ul className="ov-spk-grid">
        {list.map((s, i) => (
          <li key={s.name} className="ov-spk" data-k="spk" data-calm style={{ "--a": inkVar(s.ink), zIndex: list.length - i } as CSSVars}>
            <span className="ov-spk-art" aria-hidden="true">
              <b className="ov-mono-b">{initials(s.name)}</b>
              <b className="ov-mono-p">{initials(s.name)}</b>
              <span className="ov-spk-no">{String(i + 1).padStart(2, "0")}</span>
            </span>
            <span className="ov-spk-info">
              <b className="ov-spk-name">{s.name}</b>
              <span className="ov-spk-role">{s.role} · {s.city}</span>
              <span className="ov-spk-talk">“{s.talk}”</span>
            </span>
          </li>
        ))}
      </ul>
      <Hands crew={crew} ids={ids(crew, 4, 1)} />
    </section>
  )
}
