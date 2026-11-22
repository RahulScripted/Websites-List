import gsap from "gsap"
import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA, Tl } from "@/components/swarm/lib/scenes/types"

export function finale(D: Director, tl: Tl, q: Q, qa: QA) {
  D.disc(q("fdisc"), { ready: 0.2 })
  // Every collaborator fetches letters from above the sheet.
  qa("L").filter((el) => el.textContent!.trim()).forEach((el, i) => {
    const b = D.B(el)
    D.drag(el, { x: ((i * 37) % 60) - 30, y: -(b.y + b.h + 90), r: ((i * 53) % 30) - 15 }, { ready: 0.35 + i * 0.1 })
  })
  const feet = qa("foot")
  D.fade(feet, 2.6, { y: 10, stagger: 0.1 })

  // Then each one rests on their own name in the credits.
  const credits = qa("credit")
  gsap.set(credits, { opacity: 0 })
  D.hands.forEach((h) => {
    const name = h.el.querySelector(".ov-tag")?.textContent
    const el = credits.find((c) => c.textContent === name)
    if (!el) return
    const b = D.B(el)
    // Rest the arrow tip just past the end of their own name (the li pads 52px on the right), tag tucked away.
    const start = Math.max(h.t, 2.9 + h.i * 0.08)
    D.tool(h, "arrow", start)
    const at = D.walk(h, { x: b.x + b.w - 46, y: b.y + b.h * 0.35 }, start)
    tl.to(el, { opacity: 1, duration: 0.25 }, at - 0.15)
    tl.to(h.el.querySelector(".ov-tag"), { opacity: 0, scale: 0.6, duration: 0.25 }, at + 0.05)
    D.click(h, at)
  })
  credits.forEach((el) => {
    if (!D.hands.some((h) => h.el.querySelector(".ov-tag")?.textContent === el.textContent)) tl.to(el, { opacity: 1, duration: 0.25 }, 3.2)
  })
}
