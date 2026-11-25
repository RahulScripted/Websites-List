import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA } from "@/components/swarm/lib/scenes/types"
/** Type the heading, marquee the reel into view, then drag each number up from below. */
export function archiveBuild(D: Director, q: Q, qa: QA, narrow: boolean) {
  D.type(q("label"), { ready: 0.1 })
  D.type(q("h2"), { ready: 0.3, max: 1.4 })
  D.type(q("note"), { ready: 0.9, max: 2 })
  D.marquee(q("reel"), { ready: 1.1 })
  qa("stat").forEach((el, i) => {
    D.drag(el, { x: (i % 2 ? 1 : -1) * Math.min(narrow ? D.W * 0.5 : 180, D.W * 0.3), y: 60 }, { ready: 1.6 + i * 0.25, hidden: true })
  })
  D.leave()
}
