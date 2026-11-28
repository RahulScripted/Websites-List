import type { Status, Task } from "@/types/dashboard"

export const E_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]
export const E_P4: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const E_IN: [number, number, number, number] = [0.4, 0, 1, 1]
export const E_INOUT: [number, number, number, number] = [0.65, 0, 0.35, 1]

export const noon = () => {
  const d = new Date()
  d.setHours(12, 0, 0, 0)
  return d
}

export const dayOffset = (base: Date, n: number) => {
  const d = new Date(base)
  d.setDate(d.getDate() + n)
  return d
}

export const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
export const parseIso = (k: string) => new Date(`${k}T12:00:00`)
export const daysBetween = (a: Date, b: Date) => Math.round((b.getTime() - a.getTime()) / 86400000)

/** en-IN gives "23 Mar 2026"-style ordering with Indian locale conventions. */
export const fmtLong = new Intl.DateTimeFormat("en-IN", { month: "short", day: "numeric", year: "numeric" })
export const fmtShort = new Intl.DateTimeFormat("en-IN", { month: "short", day: "numeric" })
export const fmtMonth = new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric" })
export const fmtDow = new Intl.DateTimeFormat("en-IN", { weekday: "long" })
export const fmtDowShort = new Intl.DateTimeFormat("en-IN", { weekday: "short" })
export const fmtDayLong = new Intl.DateTimeFormat("en-IN", { month: "long", day: "numeric" })
export const fmtFull = new Intl.DateTimeFormat("en-IN", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
export const fmtMon = new Intl.DateTimeFormat("en-IN", { month: "short" })

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("")

export const hms = (s: number) => [s / 3600, (s % 3600) / 60, s % 60].map((v) => String(Math.floor(v)).padStart(2, "0")).join(":")
export const ms = (s: number) => [s / 60, s % 60].map((v) => String(Math.floor(v)).padStart(2, "0")).join(":")

export const ampm = (t: string) => {
  const [h, m] = t.split(":").map(Number)
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h < 12 ? "am" : "pm"}`
}

export const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "") || "setu"

export function dueLabel(t: Task, today: Date) {
  const n = t.due
  if (t.status === "done") return { text: fmtShort.format(dayOffset(today, n)), late: false }
  if (n < 0) return { text: `${-n}d late`, late: true }
  if (n === 0) return { text: "Today", late: true }
  if (n === 1) return { text: "Tomorrow", late: false }
  return { text: `In ${n} days`, late: false }
}

export function moveTask(list: Task[], id: string, status: Status, before: string | null) {
  const t = list.find((x) => x.id === id)
  if (!t) return list
  const rest = list.filter((x) => x.id !== id)
  const moved = { ...t, status }
  const at = before ? rest.findIndex((x) => x.id === before) : -1
  if (at < 0) return [...rest, moved]
  return [...rest.slice(0, at), moved, ...rest.slice(at)]
}
