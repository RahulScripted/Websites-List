import type { SwarmContent } from "@/types/swarm"
import { Hands, Ty } from "@/components/swarm/parts"
import { ids } from "@/components/swarm/lib/helpers"
import { BentoGrid } from "@/components/ui/marketing-feature-bento"

/** Bring something to the table: ways to take part. The crew types the heading, then drags each card in. */
export function Contribute({ c }: { c: SwarmContent }) {
  const { contribute, crew } = c
  return (
    <section className="ov-stage ov-sec ov-bring" id="contribute" data-stage="contribute" aria-labelledby="ov-bring-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <div className="ov-sec-head">
        <p className="ov-label" data-calm><Ty k="label">{contribute.label}</Ty></p>
        <div className="ov-bring-head">
          <h2 className="ov-h2" id="ov-bring-h" data-calm><Ty block k="h2">{contribute.title}</Ty></h2>
          <p className="ov-note" data-calm><Ty block k="note">{contribute.note}</Ty></p>
          <a className="ov-btn ov-btn-solid ov-btn-lg" href={contribute.cta.href} data-calm>{contribute.cta.label}</a>
        </div>
      </div>
      <BentoGrid features={contribute.features} animate={false} stage />
      <Hands crew={crew} ids={ids(crew, 4, 2)} />
    </section>
  )
}
