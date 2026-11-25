import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/components/knot/content";

export function Faq() {
  return (
    <section className="section faq-wrap" id="faq">
      <div className="section-head" data-reveal>
        <span className="eyebrow mono">FAQ</span>
        <h2>Loose ends.</h2>
      </div>
      <Accordion className="faq" data-reveal>
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
