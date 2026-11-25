import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { concept } from "@/components/knot/parts";

export function Closing() {
  return (
    <section className="closing" data-reveal>
      <svg
        className="closing-knot"
        viewBox="0 0 400 140"
        aria-hidden="true"
      >
        <motion.path
          d="M10 100 C 80 100, 90 20, 160 30 S 230 130, 190 110 S 150 40, 220 40 S 330 120, 390 60"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
      <h2>What will you stop doing by hand?</h2>
      <p>Write the sentence. Knot does the rest, every time.</p>
      <div className="hero-ctas">
        <Button size="lg" onClick={concept}>
          Get Knot free <ArrowRight size={16} />
        </Button>
        <a className="button button-outline button-lg" href="#demo">
          Back to the canvas
        </a>
      </div>
    </section>
  );
}
