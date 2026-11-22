import gsap from "gsap"
import { chooseHand, exitPoint, travel, typed, typeTime, wander } from "@/components/swarm/lib/choreography"

export type Pt = { x: number; y: number }
export type Box = { x: number; y: number; w: number; h: number }
export type Tool = "arrow" | "text" | "cross" | "pen" | "drop" | "grab" | "size"
export type Hand = { el: HTMLElement; g: HTMLElement; frm: HTMLElement; badge: HTMLElement; x: number; y: number; t: number; tool: Tool; i: number; idle: number }
export type Job = { ready?: number; who?: number }

/** Layout box relative to the stage, read from offsets so transforms already set never skew it. */
function boxOf(el: HTMLElement, stage: HTMLElement): Box {
  let x = 0
  let y = 0
  let n: HTMLElement | null = el
  while (n && n !== stage) {
    x += n.offsetLeft
    y += n.offsetTop
    n = n.offsetParent as HTMLElement | null
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight }
}

export function director(tl: gsap.core.Timeline, stage: HTMLElement, handEls: HTMLElement[], frames: HTMLElement[], cleanups: (() => void)[]) {
  const B = (el: HTMLElement) => boxOf(el, stage)
  const W = stage.offsetWidth
  const H = stage.offsetHeight
  const hands: Hand[] = handEls.map((el, i) => ({
    el,
    g: el.querySelector<HTMLElement>(".ov-hg")!,
    frm: frames[i],
    badge: frames[i].querySelector<HTMLElement>("b")!,
    x: 0,
    y: 0,
    t: 0,
    tool: "arrow",
    i,
    idle: 0,
  }))

  const place = (h: Hand, p: Pt) => {
    h.x = p.x
    h.y = p.y
    gsap.set(h.el, { x: p.x, y: p.y })
  }

  const tool = (h: Hand, t: Tool, at: number) => {
    if (h.tool === t) return
    tl.set(h.el, { attr: { "data-tool": t } }, at)
    h.tool = t
  }

  const click = (h: Hand, at: number) => {
    tl.to(h.g, { scale: 0.8, duration: 0.07, yoyo: true, repeat: 1, ease: "power1.out" }, at)
  }

  /** Walk on a gentle curve: x and y ease differently, so no two trips look ruled. */
  const walk = (h: Hand, p: Pt, at: number, dur?: number) => {
    const gap = at - h.t
    if (gap > 0.9) {
      const w = wander(h.i * 31 + ++h.idle)
      const d = Math.min(gap - 0.15, 1.2)
      tl.to(h.el, { x: h.x + w.x, y: h.y + w.y, duration: d, ease: "sine.inOut" }, h.t + 0.05)
      h.x += w.x
      h.y += w.y
    }
    const d = dur ?? travel(Math.hypot(p.x - h.x, p.y - h.y))
    tl.to(h.el, { x: p.x, duration: d, ease: "power2.inOut" }, at)
    tl.to(h.el, { y: p.y, duration: d, ease: "power1.inOut" }, at)
    h.x = p.x
    h.y = p.y
    h.t = at + d
    return h.t
  }

  /** Carry the cursor in lock-step with whatever it is moving. */
  const glide = (h: Hand, p: Pt, at: number, d: number, ease: string) => {
    tl.to(h.el, { x: p.x, y: p.y, duration: d, ease }, at)
    h.x = p.x
    h.y = p.y
    h.t = at + d
  }

  /** Pick a collaborator and get them to p by `ready` (or as soon as they are free). */
  const begin = (p: Pt, o: Job = {}) => {
    const ready = o.ready ?? 0
    const h = hands[o.who !== undefined ? o.who % hands.length : chooseHand(hands, p, ready)]
    const tr = travel(Math.hypot(p.x - h.x, p.y - h.y))
    const leave = Math.max(h.t, ready - tr)
    const at = walk(h, p, leave, tr)
    return { h, at }
  }

  const fade = (el: Element | Element[], at: number, o: gsap.TweenVars = {}) => {
    const { y = 0, ...rest } = o
    gsap.set(el, { opacity: 0, y })
    tl.to(el, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.05, ...rest }, at)
  }

  /** I-beam, click, type. The ghost copy holds the layout; the live copy is what you watch. */
  const type = (el: HTMLElement, o: Job & { max?: number; org?: Box; s?: number; off?: Pt } = {}) => {
    const ghost = el.querySelector<HTMLElement>(".ov-ty-ghost")!
    const live = el.querySelector<HTMLElement>(".ov-ty-txt")!
    const caret = el.querySelector<HTMLElement>(".ov-caret")!
    const text = ghost.textContent || ""
    let b = B(el)
    if (o.org && o.s) b = { x: o.org.x + (b.x - o.org.x) * o.s, y: o.org.y + (b.y - o.org.y) * o.s, w: b.w * o.s, h: b.h * o.s }
    const fs = parseFloat(getComputedStyle(el).fontSize) * (o.s ?? 1)
    const p = { x: b.x + 2 + (o.off?.x ?? 0), y: b.y + Math.min(b.h / 2, fs * 0.62) + (o.off?.y ?? 0) }
    gsap.set(ghost, { opacity: 0 })
    live.textContent = ""
    cleanups.push(() => { live.textContent = "" })
    const { h, at } = begin(p, o)
    tool(h, "text", at - 0.12)
    click(h, at)
    const d = typeTime(text, o.max ?? 2.6)
    const st = { n: 0 }
    tl.set(caret, { opacity: 1 }, at + 0.06)
    let shown = -1
    tl.to(st, { n: text.length, duration: d, ease: "none", onUpdate: () => {
      const k = Math.round(st.n)
      if (k !== shown) { shown = k; live.textContent = typed(text, k) }
    } }, at + 0.1)
    tl.set(caret, { opacity: 0 }, at + 0.1 + d + 0.2)
    h.t = at + 0.1 + d + 0.12
    return h.t
  }

  /** Grab a block from somewhere else and set it down in its slot, lifted a touch on the way. */
  const drag = (el: HTMLElement, from: { x: number; y: number; r?: number; s?: number }, o: Job & { hidden?: boolean } = {}) => {
    const b = B(el)
    const hold = { x: b.x + b.w * 0.5, y: b.y + Math.min(b.h * 0.3, 60) }
    // Where the grab point sits while the block is still small (scaled about its centre).
    const s = from.s ?? 1
    const grabAt = { x: b.x + b.w * 0.5 + from.x, y: b.y + b.h * 0.5 + (hold.y - b.y - b.h * 0.5) * s + from.y }
    gsap.set(el, { x: from.x, y: from.y, rotation: from.r ?? 0, scale: from.s ?? 1 })
    if (o.hidden) gsap.set(el, { opacity: 0 })
    const { h, at } = begin(grabAt, o)
    tool(h, "grab", at - 0.1)
    if (o.hidden) tl.to(el, { opacity: 1, duration: 0.15 }, at - 0.15)
    click(h, at)
    const d = Math.min(1.3, travel(Math.hypot(from.x, from.y)) * 1.25 + 0.1)
    if (!from.s) tl.to(el, { scale: 1.035, duration: 0.14, ease: "power2.out" }, at + 0.06)
    tl.to(el, { x: 0, y: 0, rotation: 0, scale: from.s ? 1 : 1.035, duration: d, ease: "power3.inOut" }, at + 0.1)
    glide(h, hold, at + 0.1, d, "power3.inOut")
    tl.to(el, { scale: 1, duration: 0.22, ease: "back.out(3)" }, at + 0.1 + d)
    click(h, at + 0.1 + d)
    h.t += 0.12
    return h.t
  }

  /** Grow a selection frame and its W × H badge. Writes only: the numbers come from the tween, never from the DOM. */
  const sizeFrame = (h: Hand, w0: number, h0: number, w1: number, h1: number, at: number, d: number, ease: string) => {
    const f = h.frm
    const st = { w: w0, h: h0 }
    const paint = () => {
      f.style.width = st.w + "px"
      f.style.height = st.h + "px"
      h.badge.textContent = Math.round(st.w) + " × " + Math.round(st.h)
    }
    tl.to(st, { w: w1, h: h1, duration: d, ease, onUpdate: paint, onStart: paint }, at)
  }

  /** Crosshair marquee: the frame and its W × H badge grow with the drag, the block is revealed under it. */
  const marquee = (el: HTMLElement, o: Job = {}) => {
    const b = B(el)
    gsap.set(el, { clipPath: "inset(0% 100% 100% 0%)" })
    const { h, at } = begin({ x: b.x, y: b.y }, o)
    tool(h, "cross", at - 0.12)
    click(h, at)
    const d = 0.45 + 0.12 * Math.log2(1 + (b.w + b.h) / 120)
    const f = h.frm
    tl.set(f, { x: b.x, y: b.y, opacity: 1 }, at + 0.02)
    sizeFrame(h, 0, 0, b.w, b.h, at + 0.06, d, "power2.inOut")
    tl.to(el, { clipPath: "inset(0% 0% 0% 0%)", duration: d, ease: "power2.inOut" }, at + 0.06)
    glide(h, { x: b.x + b.w, y: b.y + b.h }, at + 0.06, d, "power2.inOut")
    tl.set(f, { opacity: 0 }, at + 0.06 + d + 0.18)
    // Done drawing: stop clipping, so anything that overhangs the block (a stamp) shows.
    tl.set(el, { clipPath: "none" }, at + 0.06 + d + 0.02)
    h.t += 0.1
    return h.t
  }

  /** Pen tool: drag a rule out from one end; it grows behind the nib. */
  const pen = (el: HTMLElement, axis: "x" | "y", o: Job & { dur?: number; reverse?: boolean } = {}) => {
    const b = B(el)
    const start = axis === "x" ? { x: o.reverse ? b.x + b.w : b.x, y: b.y + b.h / 2 } : { x: b.x + b.w / 2, y: o.reverse ? b.y + b.h : b.y }
    const end = axis === "x" ? { x: o.reverse ? b.x : b.x + b.w, y: start.y } : { x: start.x, y: o.reverse ? b.y : b.y + b.h }
    const prop = axis === "x" ? "scaleX" : "scaleY"
    gsap.set(el, { [prop]: 0, transformOrigin: o.reverse ? (axis === "x" ? "100% 50%" : "50% 100%") : axis === "x" ? "0% 50%" : "50% 0%" })
    const { h, at } = begin(start, o)
    tool(h, "pen", at - 0.12)
    click(h, at)
    const d = o.dur ?? 0.3 + 0.1 * Math.log2(1 + Math.max(b.w, b.h) / 40)
    tl.to(el, { [prop]: 1, duration: d, ease: "power1.inOut" }, at + 0.06)
    glide(h, end, at + 0.06, d, "power1.inOut")
    click(h, h.t)
    h.t += 0.08
    return { end: h.t, at: at + 0.06, d }
  }

  /** Eyedropper: click a swatch and the ink floods it from the centre out. */
  const flood = (el: HTMLElement, o: Job & { color?: string } = {}) => {
    const b = B(el)
    gsap.set(el, { clipPath: "circle(0% at 50% 50%)" })
    const { h, at } = begin({ x: b.x + b.w * 0.5, y: b.y + b.h * 0.5 }, o)
    tool(h, "drop", at - 0.12)
    if (o.color) tl.set(h.el, { "--dc": o.color }, at - 0.12)
    click(h, at)
    tl.to(el, { clipPath: "circle(71% at 50% 50%)", duration: 0.55, ease: "power2.out" }, at + 0.06)
    h.t = at + 0.3
    return h.t
  }

  /** Grow a disc out from its centre with the crosshair. */
  const disc = (el: HTMLElement, o: Job = {}) => {
    const b = B(el)
    const c = { x: b.x + b.w / 2, y: b.y + b.h / 2 }
    gsap.set(el, { clipPath: "circle(0% at 50% 50%)" })
    const { h, at } = begin(c, o)
    tool(h, "cross", at - 0.12)
    click(h, at)
    tl.to(el, { clipPath: "circle(50% at 50% 50%)", duration: 0.8, ease: "power2.inOut" }, at + 0.06)
    glide(h, { x: c.x + b.w * 0.36, y: c.y + b.h * 0.36 }, at + 0.06, 0.8, "power2.inOut")
    h.t += 0.08
    return h.t
  }

  /** Stretch a block from a small size up to full, by its bottom-right handle. */
  const stretch = (el: HTMLElement, s0: number, o: Job = {}) => {
    const b = B(el)
    gsap.set(el, { scale: s0, transformOrigin: "0% 0%" })
    const { h, at } = begin({ x: b.x + b.w * s0, y: b.y + b.h * s0 }, o)
    tool(h, "size", at - 0.12)
    click(h, at)
    const d = 1.1
    const f = h.frm
    tl.set(f, { x: b.x, y: b.y, opacity: 1 }, at)
    sizeFrame(h, b.w * s0, b.h * s0, b.w, b.h, at, d + 0.06, "power3.inOut")
    tl.to(el, { scale: 1, duration: d, ease: "power3.inOut" }, at + 0.06)
    glide(h, { x: b.x + b.w, y: b.y + b.h }, at + 0.06, d, "power3.inOut")
    tl.set(f, { opacity: 0 }, at + 0.06 + d + 0.15)
    h.t += 0.1
    return { h, end: h.t }
  }

  /** Lean on a block's edge and shove it home. */
  const push = (el: HTMLElement, from: { x: number; y: number }, o: Job = {}) => {
    const b = B(el)
    gsap.set(el, { x: from.x, y: from.y })
    // Displaced left means it gets shoved right from its left edge, and the other way round.
    const fromLeft = from.x < 0
    const contact = { x: fromLeft ? b.x + from.x - 4 : b.x + b.w + from.x + 4, y: b.y + b.h * 0.55 + from.y }
    const { h, at } = begin({ x: contact.x + (fromLeft ? -30 : 30), y: contact.y }, o)
    tool(h, "arrow", at - 0.1)
    tl.to(h.el, { x: contact.x, duration: 0.14, ease: "power2.in" }, at)
    const d = 0.7
    tl.to(el, { x: 0, y: 0, duration: d, ease: "power2.out" }, at + 0.14)
    glide(h, { x: contact.x - from.x, y: contact.y - from.y }, at + 0.14, d, "power2.out")
    h.t += 0.1
    return h.t
  }

  /** Turn a block by a handle, the cursor riding the arc in three short legs. */
  const rotate = (el: HTMLElement, fromDeg: number, o: Job = {}) => {
    const b = B(el)
    const c = { x: b.x + b.w / 2, y: b.y + b.h / 2 }
    const r = b.w / 2
    const on = (deg: number) => ({ x: c.x + r * Math.sin((deg * Math.PI) / 180), y: c.y - r * Math.cos((deg * Math.PI) / 180) })
    gsap.set(el, { rotation: fromDeg, opacity: 0 })
    const { h, at } = begin(on(fromDeg), o)
    tool(h, "grab", at - 0.12)
    tl.to(el, { opacity: 1, duration: 0.25 }, at - 0.2)
    click(h, at)
    tl.to(el, { rotation: 0, duration: 1.05, ease: "power2.inOut" }, at + 0.06)
    let t = at + 0.06
    const legs = [0.33, 0.33, 0.34]
    let done = 0
    for (const l of legs) {
      done += l
      const p = on(fromDeg * (1 - done))
      glide(h, p, t, 1.05 * l, "none")
      t += 1.05 * l
    }
    h.t = t + 0.08
    return h.t
  }

  /** Stamp: click and it slams down from above the paper. */
  const slam = (el: HTMLElement, o: Job = {}) => {
    const b = B(el)
    gsap.set(el, { opacity: 0, scale: 1.9 })
    const { h, at } = begin({ x: b.x + b.w * 0.5, y: b.y + b.h * 0.5 }, o)
    tool(h, "arrow", at - 0.1)
    click(h, at)
    tl.to(el, { opacity: 1, scale: 1, duration: 0.32, ease: "power4.in" }, at + 0.02)
    tl.fromTo(el, { x: -2 }, { x: 0, duration: 0.2, ease: "elastic.out(1,0.3)", immediateRender: false }, at + 0.34)
    h.t = at + 0.45
    return h.t
  }

  /** Point at something and click (a button, a chip) at a given moment. */
  const tap = (el: HTMLElement, o: Job & { tool?: Tool; color?: string; off?: Pt } = {}) => {
    const b = B(el)
    const { h, at } = begin({ x: b.x + b.w * 0.5 + (o.off?.x ?? 0), y: b.y + b.h * 0.5 + (o.off?.y ?? 0) }, o)
    tool(h, o.tool ?? "arrow", at - 0.12)
    if (o.color) tl.set(h.el, { "--dc": o.color }, at + 0.02)
    click(h, at)
    h.t = at + 0.18
    return { h, at }
  }

  const layer = stage.querySelector<HTMLElement>(".ov-hands")!

  const made = (cls: string, color: string) => {
    const el = document.createElement("div")
    el.className = cls
    el.setAttribute("aria-hidden", "true")
    el.style.setProperty("--c", color)
    layer.appendChild(el)
    cleanups.push(() => el.remove())
    return el
  }

  const colorOf = (h: Hand) => h.el.style.getPropertyValue("--c")

  /** Right-click: a context menu opens at the cursor, it hovers down the items and picks one. */
  const rclick = (el: HTMLElement, items: string[], pick: number, o: Job & { at?: Pt } = {}) => {
    const b = B(el)
    const p = o.at ?? { x: b.x + b.w * 0.62, y: b.y + b.h * 0.3 }
    const { h, at } = begin(p, o)
    tool(h, "arrow", at - 0.12)
    const m = made("ov-menu", colorOf(h))
    const rows = items.map((t) => {
      const r = document.createElement("span")
      r.textContent = t
      m.appendChild(r)
      return r
    })
    // Open up-left of the cursor if it would run off the stage.
    const mw = 176
    const mh = 12 + items.length * 30
    const mx = p.x + 4 + mw > W ? p.x - mw - 4 : p.x + 4
    const my = p.y + 4 + mh > H ? p.y - mh - 4 : p.y + 4
    gsap.set(m, { x: mx, y: my, opacity: 0, scale: 0.94, transformOrigin: "0% 0%" })
    tl.to(h.g, { scale: 0.86, duration: 0.06, yoyo: true, repeat: 1 }, at)
    tl.to(m, { opacity: 1, scale: 1, duration: 0.14, ease: "power2.out" }, at + 0.05)
    let t = at + 0.22
    rows.forEach((r, i) => {
      if (i > pick) return
      const y = my + 6 + i * 30 + 15
      glide(h, { x: mx + 52 + i * 3, y }, t, i ? 0.13 : 0.2, "power1.inOut")
      tl.set(r, { attr: { "data-on": "1" } }, t + 0.05)
      if (i < pick) tl.set(r, { attr: { "data-on": "0" } }, t + 0.17)
      t = h.t
    })
    click(h, t + 0.05)
    tl.to(m, { opacity: 0, duration: 0.12 }, t + 0.2)
    h.t = t + 0.3
    return { h, end: t + 0.2 }
  }

  /** A shortcut chip by the cursor: the crew uses the keyboard too. */
  const key = (h: Hand, label: string, at: number) => {
    const k = made("ov-key", colorOf(h))
    k.textContent = label
    gsap.set(k, { x: h.x + 14, y: h.y - 34, opacity: 0, scale: 0.8 })
    tl.to(k, { opacity: 1, scale: 1, duration: 0.12, ease: "back.out(3)" }, at)
    tl.to(k, { opacity: 0, y: h.y - 44, duration: 0.2 }, at + 0.6)
  }

  /** Everybody who worked here walks off the nearest edge once their last job is done. */
  const leave = (except: Set<Hand> = new Set()) => {
    for (const h of hands) {
      if (except.has(h)) continue
      tool(h, "arrow", h.t)
      walk(h, exitPoint(h, W, H), h.t + 0.15)
    }
  }

  return { tl, hands, B, W, H, place, tool, walk, glide, begin, fade, type, drag, marquee, pen, flood, disc, stretch, push, rotate, slam, tap, leave, click, rclick, key }
}

export type Director = ReturnType<typeof director>
