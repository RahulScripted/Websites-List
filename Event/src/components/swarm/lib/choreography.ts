/* Pure timing rules for the crew. No DOM, no GSAP. */

/** Seconds a cursor needs to cross d pixels: quick hops, long trips that slow down (roughly Fitts). */
export function travel(d: number): number {
  return 0.26 + 0.15 * Math.log2(1 + Math.max(0, d) / 60)
}

/** Which collaborator takes the next job: whoever can be standing on it soonest; ties go to the earlier one. */
export function chooseHand(hands: { x: number; y: number; t: number }[], p: { x: number; y: number }, ready: number): number {
  let best = 0
  let bestT = Infinity
  for (let i = 0; i < hands.length; i++) {
    const h = hands[i]
    const arrive = Math.max(h.t + travel(Math.hypot(p.x - h.x, p.y - h.y)), ready)
    if (arrive < bestT - 1e-6) {
      best = i
      bestT = arrive
    }
  }
  return best
}

/** What a typed line shows after n keystrokes, clamped. */
export function typed(text: string, n: number): string {
  return text.slice(0, Math.max(0, Math.min(text.length, Math.round(n))))
}

/** How long typing takes: about 30 keys a second of timeline, never instant, never a drag. */
export function typeTime(text: string, max: number): number {
  return Math.min(max, Math.max(0.35, text.length * 0.033))
}

/** The nearest point just outside a w×h stage, where a finished cursor leaves. */
export function exitPoint(p: { x: number; y: number }, w: number, h: number): { x: number; y: number } {
  const d = [p.x, w - p.x, p.y, h - p.y]
  const m = d.indexOf(Math.min(...d))
  if (m === 0) return { x: -70, y: p.y }
  if (m === 1) return { x: w + 70, y: p.y }
  if (m === 2) return { x: p.x, y: -70 }
  return { x: p.x, y: h + 70 }
}

/** Fewer, lighter cursors on narrow screens. */
export function crewSize(width: number, full: number): number {
  if (width < 420) return Math.min(full, 2)
  if (width < 720) return Math.min(full, 3)
  return full
}

/** Small deterministic wander so idle cursors never sit dead still. */
export function wander(seed: number): { x: number; y: number } {
  const s = Math.sin(seed * 12.9898) * 43758.5453
  const t = Math.sin(seed * 78.233) * 12345.6789
  return { x: ((s - Math.floor(s)) - 0.5) * 56, y: ((t - Math.floor(t)) - 0.5) * 40 }
}
