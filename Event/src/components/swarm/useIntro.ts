import { useLayoutEffect, type RefObject } from "react"
import gsap from "gsap"

/**
 * The print-job intro inside the hero: two plates ink in, the crew arrives one by one, then hands over to scroll.
 * Time-based and played once; it moves the glyph wrappers, never the cursors the scroll timeline owns.
 */
export function useIntro(rootRef: RefObject<HTMLDivElement | null>, run: boolean) {
  useLayoutEffect(() => {
    if (!run || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const root = rootRef.current!
    const stage = root.querySelector<HTMLElement>('[data-stage="hero"]')!
    const k = (n: string) => stage.querySelector<HTMLElement>('[data-k="' + n + '"]')!
    const ctx = gsap.context(() => {
      const gs = [...stage.querySelectorAll<HTMLElement>(".ov-hand")].filter((h) => h.style.display !== "none").map((h) => h.querySelector<HTMLElement>(".ov-hg")!)
      const W = stage.offsetWidth
      const H = stage.offsetHeight
      const n = k("pre-n")
      k("pre-t").textContent = String(gs.length)
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from(k("hint"), { opacity: 0, y: 8, duration: 0.4, ease: "power2.out" }, 0)
      tl.fromTo(k("pre-p"), { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0.2)
      tl.fromTo(k("pre-b"), { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0.75)
      gs.forEach((g, i) => {
        const a = (i / gs.length) * Math.PI * 2 + 0.4
        tl.from(g, { x: Math.cos(a) * W * 0.65, y: Math.sin(a) * H * 0.75, duration: 0.85, ease: "power3.out" }, 0.3 + i * 0.13)
        tl.call(() => { n.textContent = String(i + 1) }, undefined, 0.3 + i * 0.13 + 0.6)
      })
      n.textContent = "0"
      const done = 0.3 + gs.length * 0.13 + 0.7
      tl.to(k("pre-wait"), { opacity: 0, y: -6, duration: 0.25 }, done)
      tl.fromTo(k("pre-go"), { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3 }, done + 0.1)
      // Scroll during the intro? Skip to the end so nothing fights the scrub.
      const skip = () => { if (window.scrollY > 4) tl.progress(1) }
      window.addEventListener("scroll", skip, { passive: true })
      return () => { window.removeEventListener("scroll", skip); n.textContent = String(gs.length) }
    }, root)
    return () => ctx.revert()
  }, [rootRef, run])
}
