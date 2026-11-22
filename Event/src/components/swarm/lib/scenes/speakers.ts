import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA } from "@/components/swarm/lib/scenes/types"

export function speakersBuild(D: Director, q: Q, qa: QA, narrow: boolean) {
  D.type(q("label"), { ready: 0.1 })
  D.type(q("h2"), { ready: 0.3, max: 1.4 })
  const deck = D.B(q("deck"))
  const tilt = [-7, 4, -3, 8, -5, 3, -6, 5]
  qa("spk").forEach((el, i) => {
    const b = D.B(el)
    const from = narrow
      ? { x: (i % 2 ? 1 : -1) * (D.W * 0.7), y: 40, r: tilt[i % tilt.length] * 1.6 }
      : { x: deck.x + deck.w / 2 - (b.x + b.w / 2) + i * 5, y: deck.y + deck.h / 2 - (b.y + b.h / 2) - i * 4, r: tilt[i % tilt.length], s: Math.min(1, deck.w / b.w) }
    D.drag(el, from, { ready: 0.9 + i * 0.32 })
  })
  D.leave()
}
