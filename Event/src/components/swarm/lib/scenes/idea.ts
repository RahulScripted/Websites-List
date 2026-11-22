import gsap from "gsap"
import type { Director } from "@/components/swarm/lib/director"
import type { Q, QA, Tl } from "@/components/swarm/lib/scenes/types"

export function idea(D: Director, tl: Tl, q: Q, qa: QA, cleanups: (() => void)[], stage: HTMLElement) {
  D.type(q("label"), { ready: 0.2 })
  const state = q("state")
  const end = D.type(state, { ready: 0.4, max: 4.2 })

  // Highlighter: bars laid under the marked words, swept left to right once the words exist.
  const mark = state.querySelector<HTMLElement>(".ov-ty-ghost mark")
  if (mark) {
    const base = state.getBoundingClientRect()
    const host = state
    const bars = [...mark.getClientRects()].map((r) => {
      const bar = document.createElement("i")
      bar.className = "ov-mk"
      bar.style.cssText = "left:" + (r.left - base.left) + "px;top:" + (r.top - base.top + r.height * 0.12) + "px;width:" + r.width + "px;height:" + r.height * 0.82 + "px"
      host.appendChild(bar)
      return bar
    })
    cleanups.push(() => bars.forEach((b) => b.remove()))
    const sb = D.B(state)
    let at = end * 0.55
    bars.forEach((bar) => {
      const x0 = sb.x + bar.offsetLeft
      const y0 = sb.y + bar.offsetTop + bar.offsetHeight / 2
      gsap.set(bar, { scaleX: 0, transformOrigin: "0% 50%" })
      const { h, at: a } = D.begin({ x: x0, y: y0 }, { ready: Math.max(at, end - 0.2) })
      D.tool(h, "pen", a - 0.12)
      D.click(h, a)
      tl.to(bar, { scaleX: 1, duration: 0.55, ease: "power1.inOut" }, a + 0.05)
      D.glide(h, { x: x0 + bar.offsetWidth, y: y0 }, a + 0.05, 0.55, "power1.inOut")
      at = h.t
    })
  }

  qa("ink").forEach((el, i) => D.flood(el, { ready: 1.2 + i * 0.35, color: getComputedStyle(el).getPropertyValue("--i") }))
  qa("ink-n").forEach((el, i) => D.type(el, { ready: 1.6 + i * 0.35 }))
  D.fade([...stage.querySelectorAll(".ov-ink > span")], 2.4, { stagger: 0.1 })
  D.leave()
}
