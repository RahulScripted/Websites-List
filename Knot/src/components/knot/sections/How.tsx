import { useState } from "react";
import { motion } from "motion/react";
import { parts } from "@/components/knot/content";

export function How() {
  const [part, setPart] = useState<string | null>(null);
  return (
    <section className="section how" id="how">
      <div className="section-head" data-reveal>
        <span className="eyebrow mono">How it works</span>
        <h2>Knot reads your sentence like a recipe.</h2>
        <p>
          Point at a part of the sentence to see the step it turns into.
        </p>
      </div>
      <div className="parser" data-reveal>
        <p className="sentence">
          {parts.map((p) => (
            <button
              key={p.id}
              type="button"
              className="chunk"
              data-kind={p.kind}
              aria-pressed={part === p.id}
              onMouseEnter={() => setPart(p.id)}
              onMouseLeave={() => setPart(null)}
              onFocus={() => setPart(p.id)}
              onBlur={() => setPart(null)}
              onClick={() => setPart(part === p.id ? null : p.id)}
            >
              {p.text}
            </button>
          ))}
        </p>
        <div className="blocks" aria-hidden="true">
          {parts.map((p, i) => (
            <motion.div
              key={p.id}
              className="block"
              data-kind={p.kind}
              animate={{
                y: part === p.id ? -8 : 0,
                rotate: part === p.id ? (i - 1) * 3 : 0,
                opacity: part && part !== p.id ? 0.45 : 1,
              }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
            >
              <span className="mono">{["When", "Then", "AI step"][i]}</span>
              <strong>{p.block}</strong>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="how-cards">
        {[
          {
            n: "01",
            t: "It understands",
            b: "Knot finds the trigger, the steps and the conditions in plain words, in any language.",
            c: "yellow",
          },
          {
            n: "02",
            t: "It builds and tests",
            b: "Every knot runs once on sample data before it goes live, so you see what will happen.",
            c: "pink",
          },
          {
            n: "03",
            t: "It keeps watch",
            b: "Retries, alerts and a full history for every run. If an app changes, Knot tells you.",
            c: "mint",
          },
        ].map((c, i) => (
          <motion.article
            key={c.n}
            className="card"
            data-c={c.c}
            data-reveal
            style={{ rotate: (i - 1) * 1.5 }}
            whileHover={{ rotate: 0, y: -6 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.5 }}
          >
            <span className="mono card-n">{c.n}</span>
            <h3>{c.t}</h3>
            <p>{c.b}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
