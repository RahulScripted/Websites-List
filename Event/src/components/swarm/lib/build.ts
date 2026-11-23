import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { crewSize } from "@/components/swarm/lib/choreography"
import { director } from "@/components/swarm/lib/director"
import { hero } from "@/components/swarm/lib/scenes/hero"
import { idea } from "@/components/swarm/lib/scenes/idea"
import { speakersBuild } from "@/components/swarm/lib/scenes/speakers"
import { programme } from "@/components/swarm/lib/scenes/programme"
import { passesBuild } from "@/components/swarm/lib/scenes/passes"
import { faqBuild } from "@/components/swarm/lib/scenes/faq"
import { finale } from "@/components/swarm/lib/scenes/finale"
import type { SwarmContent } from "@/types/swarm"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger)

/** Builds one scrubbed timeline per `[data-stage]` section and returns a cleanup. */
export function buildAll(root: HTMLElement, passes: SwarmContent["passes"]) {
  const cleanups: (() => void)[] = []
  const stages = [...root.querySelectorAll<HTMLElement>("[data-stage]")]
  for (const stage of stages) {
    const kind = stage.dataset.stage!
    const all = [...stage.querySelectorAll<HTMLElement>(".ov-hand")]
    const frames = [...stage.querySelectorAll<HTMLElement>(".ov-frm")]
    const n = crewSize(stage.offsetWidth, all.length)
    all.slice(n).forEach((el) => gsap.set(el, { display: "none" }))
    const tl = gsap.timeline({ paused: true, defaults: { overwrite: false } })
    const D = director(tl, stage, all.slice(0, n), frames.slice(0, n), cleanups)
    const q = (k: string) => stage.querySelector<HTMLElement>('[data-k="' + k + '"]')!
    const qa = (k: string) => [...stage.querySelectorAll<HTMLElement>('[data-k="' + k + '"]')]
    const narrow = stage.offsetWidth < 720

    // Everyone starts just off the edges, spread down the stage.
    D.hands.forEach((h, i) => D.place(h, { x: i % 2 ? D.W + 50 : -50, y: D.H * (0.18 + (0.64 * i) / Math.max(1, D.hands.length - 1)) }))
    qa("rule").forEach((r) => D.pen(r, "x", { ready: 0, dur: 0.9 }))

    if (kind === "hero") hero(D, tl, q, qa, narrow)
    if (kind === "idea") idea(D, tl, q, qa, cleanups, stage)
    if (kind === "speakers") speakersBuild(D, q, qa, narrow)
    if (kind === "programme") programme(D, tl, q, qa)
    if (kind === "passes") passesBuild(D, q, qa, passes)
    if (kind === "faq") faqBuild(D, q, qa, narrow)
    if (kind === "finale") finale(D, tl, q, qa)

    tl.to({}, { duration: 0.4 })
    const run = kind === "hero" ? (stage.parentElement as HTMLElement) : stage
    ScrollTrigger.create({
      animation: tl,
      trigger: run,
      start: kind === "hero" ? "top top" : "top 78%",
      end: kind === "hero" ? "bottom bottom" : kind === "finale" ? "bottom bottom" : () => "+=" + Math.max(stage.offsetHeight * 0.95, window.innerHeight * 0.9),
      scrub: 0.7,
    })
  }
  return () => cleanups.forEach((f) => f())
}
