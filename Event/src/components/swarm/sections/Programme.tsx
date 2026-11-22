import type { CSSVars, SwarmContent } from "@/types/swarm"
import { Hands, Ty } from "@/components/swarm/parts"
import { ids } from "@/components/swarm/lib/helpers"

/** A pen draws the day; a comment thread swaps two sessions. */
export function Programme({ c }: { c: SwarmContent }) {
  const { programme, crew } = c
  const sessions = programme.sessions
  const swapAt = Math.min(4, sessions.length - 2)
  const a = crew[5 % crew.length]
  const b = crew[1 % crew.length]
  return (
    <section className="ov-stage ov-sec ov-prog" id="programme" data-stage="programme" aria-labelledby="ov-prog-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <div className="ov-prog-head">
        <p className="ov-label" data-calm><Ty k="label">{programme.label}</Ty></p>
        <h2 className="ov-h2" id="ov-prog-h" data-calm><Ty block k="h2">{programme.title}</Ty></h2>
        <p className="ov-note" data-calm><Ty block k="note">{programme.note}</Ty></p>
      </div>
      <div className="ov-tl">
        <i className="ov-tl-line" data-k="line" aria-hidden="true" />
        <ol className="ov-rows" aria-label={programme.listAria}>
          {sessions.map((s, i) => (
            <li key={s.time + s.title} className="ov-row" data-k="row" data-calm>
              <time className="ov-row-t">{s.time}</time>
              <span className="ov-row-m"><b>{s.title}</b>{s.who && <span>{s.who}</span>}</span>
              <span className="ov-row-r">{s.room}</span>
              {i === swapAt && (
                <span className="ov-cmt" data-k="cmt" aria-hidden="true">
                  <span className="ov-cmt-line"><i style={{ "--c": a.color } as CSSVars}>{a.name[0]}</i><Ty sr={false} k="cmt-a">{programme.comment.first}</Ty></span>
                  <span className="ov-cmt-line"><i style={{ "--c": b.color } as CSSVars}>{b.name[0]}</i><Ty sr={false} k="cmt-b">{programme.comment.reply}</Ty></span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
      <Hands crew={crew} ids={ids(crew, 4, 5)} />
    </section>
  )
}
