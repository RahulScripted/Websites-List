import type { SwarmContent } from "@/types/swarm"
import { Hands, Ty } from "@/components/swarm/parts"
import { ids } from "@/components/swarm/lib/helpers"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
/** FAQ: the crew types the heading, then drags each question into place. Built on the shadcn accordion. */
export function Faq({ c }: { c: SwarmContent }) {
  const { faq, crew } = c
  return (
    <section className="ov-stage ov-sec ov-faq" id="faq" data-stage="faq" aria-labelledby="ov-faq-h">
      <i className="ov-rule" data-k="rule" aria-hidden="true" />
      <div className="ov-faq-head">
        <p className="ov-label" data-calm><Ty k="label">{faq.label}</Ty></p>
        <h2 className="ov-h2" id="ov-faq-h" data-calm><Ty block k="h2">{faq.title}</Ty></h2>
        <p className="ov-note" data-calm><Ty block k="note">{faq.intro}</Ty></p>
      </div>
      <Accordion type="single" collapsible defaultValue="item-0" className="ov-faq-list" aria-label={faq.listAria}>
        {faq.items.map((f, i) => (
          <AccordionItem key={f.question} value={`item-${i}`} className="ov-faq-item" data-k="faq" data-calm>
            <AccordionTrigger className="ov-faq-q">
              <span className="ov-faq-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="ov-faq-t">{f.question}</span>
            </AccordionTrigger>
            <AccordionContent className="ov-faq-a">{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Hands crew={crew} ids={ids(crew, 3, 3)} />
    </section>
  )
}
