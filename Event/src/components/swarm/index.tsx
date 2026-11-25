import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { CSSVars, SwarmContent } from "@/types/swarm"
import { buildAll } from "@/components/swarm/lib/build"
import { useIntro } from "@/components/swarm/useIntro"
import { Hero } from "@/components/swarm/sections/Hero"
import { Idea } from "@/components/swarm/sections/Idea"
import { Speakers } from "@/components/swarm/sections/Speakers"
import { Programme } from "@/components/swarm/sections/Programme"
import { Passes } from "@/components/swarm/sections/Passes"
import { Faq } from "@/components/swarm/sections/Faq"
import { Archive } from "@/components/swarm/sections/Archive"
import { Contribute } from "@/components/swarm/sections/Contribute"
import { Finale } from "@/components/swarm/sections/Finale"

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger)

interface SwarmProps {
  content: SwarmContent
  /** Wait for the preloader before the crew starts. */
  start?: boolean
  /** Height of the hero stage. A definite length: an installed page has no 100% chain. */
  height?: string
  className?: string
}

/**
 * Named collaborator cursors type the copy, drag cards, draw rules, flood inks and stamp passes.
 * Every move sits on a GSAP timeline scrubbed by ScrollTrigger, so scrolling up takes the page apart again.
 * Before JS runs (and with reduced motion) this is simply the finished page.
 */
export default function Swarm({ content, start = true, height = "100svh", className }: SwarmProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [live, setLive] = useState(false)
  const [layout, setLayout] = useState(0)

  // Go live, then rebuild whenever fonts land or the width really changes: every target is measured.
  useEffect(() => {
    if (!start) return
    window.scrollTo(0, 0)
    setLive(true)
    let cancelled = false
    const bump = () => { if (!cancelled) setLayout((n) => n + 1) }
    const fonts = document.fonts
    Promise.all([fonts?.load('900 40px "Archivo"'), fonts?.load('500 12px "JetBrains Mono"')]).then(bump, bump)
    fonts?.addEventListener?.("loadingdone", bump)
    const el = rootRef.current!
    let w = el.offsetWidth
    let t = 0
    const ro = new ResizeObserver(() => {
      if (Math.abs(el.offsetWidth - w) < 24) return
      w = el.offsetWidth
      clearTimeout(t)
      t = window.setTimeout(() => setLayout((n) => n + 1), 220)
    })
    ro.observe(el)
    return () => { cancelled = true; ro.disconnect(); clearTimeout(t); fonts?.removeEventListener?.("loadingdone", bump) }
  }, [start])

  useLayoutEffect(() => {
    if (!live) return
    const root = rootRef.current!
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => buildAll(root, content.passes))
      mm.add("(prefers-reduced-motion: reduce)", () => {
        root.querySelectorAll<HTMLElement>("[data-calm]").forEach((el) => {
          gsap.from(el, { opacity: 0, y: 14, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } })
        })
      })
    }, root)
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => { cancelAnimationFrame(raf); ctx.revert() }
  }, [live, layout, content])

  useIntro(rootRef, live)

  return (
    <div ref={rootRef} id="top" className={"ov" + (live ? " ov-live" : "") + (className ? " " + className : "")} style={{ "--h": height } as CSSVars}>
      <Hero c={content} />
      <Idea c={content} />
      <Speakers c={content} />
      <Programme c={content} />
      <Passes c={content} />
      <Contribute c={content} />
      <Archive c={content} />
      <Faq c={content} />
      <Finale c={content} />
    </div>
  )
}
