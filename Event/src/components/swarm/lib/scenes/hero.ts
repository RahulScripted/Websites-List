import gsap from "gsap"
import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA, Tl } from "@/components/swarm/lib/scenes/types"

export function hero(D: Director, tl: Tl, q: Q, qa: QA, narrow: boolean) {
  // The crew waits around the scroll hint, then fans out.
  const hint = q("hint")
  const hb = D.B(hint)
  D.hands.forEach((h, i) => {
    const a = (i / D.hands.length) * Math.PI * 2 - Math.PI / 2
    D.place(h, { x: hb.x + hb.w / 2 + Math.cos(a) * (hb.w * 0.6 + 24), y: hb.y + hb.h / 2 + Math.sin(a) * 86 - 10 })
    h.t = 0.25
  })
  tl.to(hint, { opacity: 0, y: -10, duration: 0.35 }, 0.05)

  // Crop marks first: the sheet gets its corners.
  const cx = qa("crop-x")
  const cy = qa("crop-y")
  cx.forEach((el, i) => D.pen(el, "x", { ready: 0.3 + i * 0.05, dur: 0.32, reverse: i % 2 === 0 }))
  cy.forEach((el, i) => D.pen(el, "y", { ready: 0.5 + i * 0.05, dur: 0.32, reverse: i < 2 }))

  // Masthead.
  const logo = q("logo")
  D.type(logo.querySelector<HTMLElement>(".ov-ty")!, { ready: 0.4 })
  D.fade(q("ed"), 1.2, { y: -6 })
  if (!narrow) qa("nav").forEach((el, i) => D.type(el, { ready: 0.7 + i * 0.15 }))
  const pass = q("pass")
  D.marquee(pass, { ready: 0.8 })
  D.fade(q("pass-l"), 1.9)

  // Kicker, then the headline typed small in blue, stretched to size, inked in pink, knocked out of register.
  const kick = D.type(q("kicker"), { ready: 1 })
  const plates = q("plates")
  const pb = D.B(plates)
  const s0 = narrow ? 0.5 : 0.34
  let typedEnd = kick
  qa("hl").forEach((el, i) => {
    typedEnd = Math.max(typedEnd, D.type(el, { ready: kick + 0.1 + i * 0.5, org: pb, s: s0 }))
  })
  const st = D.stretch(plates, s0, { ready: typedEnd + 0.15 })

  // Colophon + ink chips; the pink is picked up from its chip.
  qa("colo").forEach((el, i) => D.type(el.querySelector<HTMLElement>(".ov-ty")!, { ready: 1.6 + i * 0.4 }))
  D.flood(q("chip-p"), { ready: 2.2, color: "var(--ov-pink)" })
  D.flood(q("chip-b"), { ready: 2.4, color: "var(--ov-blue)" })
  const crewEl = q("crew")
  D.fade([...crewEl.children], 2.6, { y: 6, stagger: 0.08 })

  // Pick the pink, drop it on the type, then nudge the plate out of register.
  const pink = q("pink")
  const off = { x: parseFloat(getComputedStyle(pink).fontSize) * 0.045, y: parseFloat(getComputedStyle(pink).fontSize) * 0.03 }
  gsap.set(pink, { opacity: 0 })
  const pick = D.tap(q("chip-p"), { ready: st.end + 0.05, tool: "drop", color: "var(--ov-pink)" })
  const b0 = D.B(plates)
  const dropAt = D.walk(pick.h, { x: b0.x + b0.w * 0.3, y: b0.y + b0.h * 0.3 }, pick.h.t)
  D.click(pick.h, dropAt)
  tl.to(pink, { opacity: 1, duration: 0.3 }, dropAt + 0.05)
  pick.h.t = dropAt + 0.2
  D.push(pink, { x: -off.x - 0.5, y: -off.y }, { ready: dropAt + 0.35, who: pick.h.i })

  // Sub copy and the two calls to action.
  D.type(q("sub"), { ready: st.end - 0.2, max: 2.4 })
  qa("cta").forEach((el, i) => D.drag(el, { x: (i ? 1 : -1) * 60, y: narrow ? 140 : 180, r: i ? 6 : -5 }, { ready: st.end + 0.6 + i * 0.3, hidden: true }))

  // The art: two discs grown from their centres, the ring turned into place, the date stamped.
  const discs = qa("disc")
  discs.forEach((el, i) => D.disc(el, { ready: (narrow ? 2.6 : 1.5) + i * 0.4 }))
  D.rotate(q("ring"), -100, { ready: narrow ? 3.4 : 2.4 })
  D.slam(q("date"), { ready: narrow ? 3.8 : 3 })
  D.leave()
}
