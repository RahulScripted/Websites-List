import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CanvasDemo } from "@/components/knot/sections/CanvasDemo";
import { spring, concept } from "@/components/knot/parts";

export function Hero({ flowId, onFlowChange, select }: { flowId: string; onFlowChange: (id: string) => void; select: (id: string) => void }) {
  const hero = useRef<HTMLElement>(null);
  return (
    <section className="hero" id="top" ref={hero}>
      <div className="hero-copy">
        <motion.span
          className="tag"
          initial={{ opacity: 0, y: 10, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{
            type: "spring",
            bounce: 0.5,
            duration: 0.7,
            delay: 0.1,
          }}
        >
          New · branches and approvals
        </motion.span>
        <h1>
          {["One", "sentence", "in."].map((w, i) => (
            <motion.span
              key={w}
              className={w === "sentence" ? "mark mark-yellow" : undefined}
              initial={{ opacity: 0, y: 40, rotate: 4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                bounce: 0.45,
                duration: 0.8,
                delay: 0.15 + i * 0.07,
              }}
            >
              {w}
            </motion.span>
          ))}
          <br />
          {["A", "working", "automation", "out."].map((w, i) => (
            <motion.span
              key={w}
              className={w === "automation" ? "mark mark-pink" : undefined}
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                type: "spring",
                bounce: 0.45,
                duration: 0.8,
                delay: 0.4 + i * 0.07,
              }}
            >
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.75 }}
        >
          Tell Knot what should happen, the way you would tell a coworker.
          It wires your apps, tests the steps and keeps the chore running
          while you do something else.
        </motion.p>
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.85 }}
        >
          <Button size="lg" onClick={concept}>
            Get Knot free <ArrowRight size={16} />
          </Button>
          <a
            className="button button-outline button-lg"
            href="#demo"
            onClick={() => select("demo")}
          >
            Try the canvas
          </a>
        </motion.div>
      </div>
      {[
        { t: "No code", c: "mint", pos: { left: "6%", top: 330 }, r: -10 },
        { t: "★ 4.9 from 2,300 Indian teams", c: "yellow", pos: { right: "5%", top: 70 }, r: 6 },
        { t: "Runs 24/7", c: "blue", pos: { right: "7%", top: 430 }, r: -6 },
        { t: "Undo anything", c: "orange", pos: { left: "9%", top: 560 }, r: 8 },
      ].map((s, i) => (
        <motion.span
          key={s.t}
          className="sticker"
          data-c={s.c}
          style={s.pos}
          drag
          dragConstraints={hero}
          dragElastic={0.2}
          whileDrag={{ scale: 1.1, rotate: 0, cursor: "grabbing" }}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.4, rotate: s.r * 2 }}
          animate={{ opacity: 1, scale: 1, rotate: s.r }}
          transition={{
            type: "spring",
            bounce: 0.55,
            duration: 0.8,
            delay: 1 + i * 0.12,
          }}
          aria-hidden="true"
        >
          {s.t}
        </motion.span>
      ))}
      <motion.div
        className="hero-demo"
        id="demo"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, duration: 0.9, delay: 0.9 }}
      >
        <CanvasDemo flowId={flowId} onFlowChange={onFlowChange} />
      </motion.div>
    </section>
  );
}
