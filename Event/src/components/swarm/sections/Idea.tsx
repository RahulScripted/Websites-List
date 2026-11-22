import type { CSSVars, SwarmContent } from "@/types/swarm"
import { Hands, Ty } from "@/components/swarm/parts"
import { ids } from "@/components/swarm/lib/helpers"

export function Idea({ c }: { c: SwarmContent }) {
  const { idea, crew } = c
  return (
    <section className="ov-stage ov-sec ov-idea" data-stage="idea" aria-labelledby="ov-idea-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <p className="ov-label" id="ov-idea-h" data-calm><Ty k="label">{idea.label}</Ty></p>
      <p className="ov-state" data-calm>
        <Ty block k="state">{idea.before}<mark>{idea.mark}</mark>{idea.after}</Ty>
      </p>
      <ul className="ov-inks" aria-label={idea.inksAria}>
        {idea.inks.map((ink) => (
          <li key={ink.name} className="ov-ink" data-calm>
            <i className="ov-ink-dot" style={{ "--i": ink.v } as CSSVars} data-k="ink" aria-hidden="true" />
            <b><Ty k="ink-n">{ink.name}</Ty></b>
            <span>{ink.code}</span>
          </li>
        ))}
      </ul>
      <Hands crew={crew} ids={ids(crew, 4, 4)} />
    </section>
  )
}
