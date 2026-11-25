import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA } from "@/components/swarm/lib/scenes/types"
/** Type the heading and note, then drag each card in from alternating sides. */
export function contributeBuild(D: Director, q: Q, qa: QA, narrow: boolean) {
  D.type(q("label"), { ready: 0.1 })
  D.type(q("h2"), { ready: 0.3, max: 1.4 })
  D.type(q("note"), { ready: 0.9, max: 2 })
  qa("bento").forEach((el, i) => {
    D.drag(el, { x: (i % 2 ? 1 : -1) * Math.min(narrow ? D.W * 0.6 : 260, D.W * 0.4), y: 0 }, { ready: 1.2 + i * 0.3, hidden: true })
  })
  D.leave()
}
