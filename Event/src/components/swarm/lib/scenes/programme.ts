import gsap from "gsap"
import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA, Tl } from "@/components/swarm/lib/scenes/types"

export function programme(D: Director, tl: Tl, q: Q, qa: QA) {
  D.type(q("label"), { ready: 0.1 })
  D.type(q("h2"), { ready: 0.3, max: 1.4 })
  D.type(q("note"), { ready: 0.9, max: 2 })
  const line = D.pen(q("line"), "y", { ready: 0.6, dur: 2.6 })
  const rows = qa("row")
  const swap = rows.findIndex((r) => r.querySelector('[data-k="cmt"]'))
  const ys = rows.map((r) => D.B(r).y)
  const tlBox = D.B(q("line"))
  rows.forEach((r, i) => {
    // Each session slides in from the right just as the pen passes its time.
    const when = line.at + ((ys[i] - tlBox.y) / Math.max(1, tlBox.h)) * line.d
    if (i === swap || i === swap + 1) return
    if (i === 2) D.push(r, { x: -Math.min(220, D.W * 0.2), y: 0 }, { ready: when })
    else D.drag(r, { x: Math.min(260, D.W * 0.3), y: 0 }, { ready: when, hidden: true })
  })

  if (swap >= 0 && rows[swap + 1]) {
    const a = rows[swap]
    const b = rows[swap + 1]
    const dy = ys[swap + 1] - ys[swap]
    // They arrive in the wrong order...
    const when = line.at + ((ys[swap] - tlBox.y) / Math.max(1, tlBox.h)) * line.d
    const off = { x: 0, y: dy }
    // ...someone leaves a comment, someone replies, then the two are dragged past each other.
    const cmt = q("cmt")
    gsap.set(cmt, { opacity: 0, scale: 0.6, transformOrigin: "0% 100%" })
    const c = D.tap(cmt, { ready: when + 0.6, off })
    tl.to(cmt, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" }, c.at + 0.04)
    c.h.t = c.at + 0.3
    const a1 = D.type(q("cmt-a"), { ready: c.at + 0.35, who: c.h.i, max: 1.4, off })
    const a2 = D.type(q("cmt-b"), { ready: a1 + 0.3, max: 0.9, off })
    tl.to(cmt, { opacity: 0, y: -8, duration: 0.3 }, a2 + 0.35)
    D.drag(a, { x: 0, y: dy }, { ready: a2 + 0.5 })
    D.drag(b, { x: 0, y: -dy }, { ready: a2 + 0.5 })
    // The drags above parked both rows in each other's slots; they fade in there, in the wrong order.
    gsap.set([a, b], { opacity: 0 })
    tl.to([b, a], { opacity: 1, duration: 0.3, stagger: 0.15 }, when)
  }
  D.leave()
}
