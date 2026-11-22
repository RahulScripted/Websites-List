import type { Collaborator, SpeakerInk } from "@/types/swarm"

/** Crew indexes for a stage: n cursors starting at offset off. */
export const ids = (crew: Collaborator[], n: number, off: number) => Array.from({ length: n }, (_, i) => (i + off) % crew.length)

export const inkVar = (k: SpeakerInk) => ({ pink: "var(--ov-pink)", blue: "var(--ov-blue)", yellow: "var(--ov-yel)", teal: "var(--ov-teal)", orange: "var(--ov-org)" })[k]

export const initials = (n: string) => n.split(/\s+/).map((w) => w[0]).slice(0, 2).join("")
