import gsap from "gsap"
import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA } from "@/components/swarm/lib/scenes/types"
import type { SwarmContent } from "@/types/swarm"

export function passesBuild(D: Director, q: Q, qa: QA, ui: SwarmContent["passes"]) {
  D.type(q("label"), { ready: 0.1 })
  D.type(q("h2"), { ready: 0.3, max: 1.4 })
  const cards = qa("pass-card")
  const fill = (card: HTMLElement, at: number) => {
    D.type(card.querySelector<HTMLElement>('[data-k="price"]')!, { ready: at + 0.1 })
    D.fade([...card.querySelectorAll('[data-k="pass-in"]')], at + 0.15, { y: 10, stagger: 0.12 })
  }
  // The first pass is drawn by hand...
  const drawn = D.marquee(cards[0], { ready: 0.7 })
  fill(cards[0], drawn)
  if (cards.length > 1) {
    // ...then copied from the context menu and pasted into the next slot,
    const copy = D.rclick(cards[0], ui.menus.copy, 1, { ready: drawn + 0.2 })
    const paste = (card: HTMLElement, at: number) => {
      gsap.set(card, { opacity: 0 })
      D.tl.to(card, { opacity: 1, duration: 0.1 }, at)
      D.tl.fromTo(card, { scale: 0.96 }, { scale: 1, duration: 0.35, ease: "back.out(2.4)", immediateRender: false }, at)
      fill(card, at + 0.1)
    }
    const b1 = D.B(cards[1])
    const pasted = D.rclick(cards[1], ui.menus.paste, 0, { who: copy.h.i, at: { x: b1.x + b1.w * 0.4, y: b1.y + b1.h * 0.3 } })
    paste(cards[1], pasted.end)
    // ...and the third one with the keyboard.
    if (cards[2]) {
      const b2 = D.B(cards[2])
      const h = copy.h
      const at = D.walk(h, { x: b2.x + b2.w * 0.4, y: b2.y + b2.h * 0.3 }, h.t + 0.1)
      D.click(h, at)
      D.key(h, ui.pasteKey, at + 0.12)
      paste(cards[2], at + 0.22)
      h.t = at + 0.5
    }
  }
  const stamp = q("stamp")
  if (stamp) {
    const card = stamp.parentElement as HTMLElement
    const b = D.B(card)
    const m = D.rclick(card, ui.menus.stamp, 2, { ready: 3.4, at: { x: b.x + b.w * 0.7, y: b.y + b.h * 0.18 } })
    D.slam(stamp, { ready: m.end + 0.05, who: m.h.i })
  }
  D.leave()
}
