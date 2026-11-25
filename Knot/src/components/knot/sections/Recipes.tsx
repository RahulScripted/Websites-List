import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RotateCw } from "lucide-react";
import { toast } from "sonner";
import { Pill } from "@/components/knot/parts";
import { recipes, teams } from "@/components/knot/content";

export function Recipes({ openFlow }: { openFlow: (id: string) => void }) {
  const [team, setTeam] = useState<(typeof teams)[number]>("All");
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const shown = recipes.filter((r) => team === "All" || r.team === team);
  return (
    <section className="section recipes" id="recipes">
      <div className="section-head" data-reveal>
        <span className="eyebrow mono">Recipes</span>
        <h2>Steal a knot from another team.</h2>
      </div>
      <div
        className="filters"
        role="group"
        aria-label="Filter recipes by team"
        data-reveal
      >
        {teams.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={team === t}
            onClick={() => setTeam(t)}
          >
            {team === t && (
              <Pill id="team-pill" className="pill team-pill" />
            )}
            <span>{t}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="recipe-grid">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((r) => (
            <motion.div
              key={r.id}
              layout
              className="recipe"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}
            >
              <motion.div
                className="recipe-inner"
                animate={{ rotateY: flipped[r.id] ? 180 : 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.7 }}
              >
                <button
                  type="button"
                  className="recipe-face recipe-front"
                  data-c={r.c}
                  aria-hidden={Boolean(flipped[r.id])}
                  tabIndex={flipped[r.id] ? -1 : 0}
                  onClick={() =>
                    setFlipped((f) => ({ ...f, [r.id]: true }))
                  }
                >
                  <span className="mono recipe-team">{r.team}</span>
                  <strong>{r.title}</strong>
                  <span className="recipe-meta mono">
                    {r.steps.length} steps · flip to see{" "}
                    <RotateCw size={12} />
                  </span>
                </button>
                <div
                  className="recipe-face recipe-back"
                  aria-hidden={!flipped[r.id]}
                >
                  <ol>
                    {r.steps.map((s, i) => (
                      <li key={s}>
                        <span className="mono">{i + 1}</span> {s}
                      </li>
                    ))}
                  </ol>
                  <div className="recipe-actions">
                    {r.flow ? (
                      <button
                        type="button"
                        className="button button-sm"
                        tabIndex={flipped[r.id] ? 0 : -1}
                        onClick={() => openFlow(r.flow as string)}
                      >
                        Open in canvas
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="button button-sm"
                        tabIndex={flipped[r.id] ? 0 : -1}
                        onClick={() =>
                          toast(`“${r.title}” copied`, {
                            description:
                              "In the demo, three recipes open in the canvas.",
                          })
                        }
                      >
                        Use recipe
                      </button>
                    )}
                    <button
                      type="button"
                      className="flip-back"
                      aria-label="Flip back"
                      tabIndex={flipped[r.id] ? 0 : -1}
                      onClick={() =>
                        setFlipped((f) => ({ ...f, [r.id]: false }))
                      }
                    >
                      <RotateCw size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
