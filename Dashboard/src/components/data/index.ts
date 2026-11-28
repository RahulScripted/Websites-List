import {
  CalendarDays,
  ChartNoAxesColumn,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  SquareCheckBig,
  Users,
} from "lucide-react"
import type { CalEvent, FullView, Kind, Member, NavItem, Notice, Person, Pri, Project, Status, Tag, Task } from "@/types"

/** The signed-in teammate's id inside PEOPLE. */
export const ME = "tm"

export const PEOPLE: Person[] = [
  { id: "tm", name: "Aarav Sharma", tint: "#f4c9b4" },
  { id: "ad", name: "Priya Raman", tint: "#f6c6c2" },
  { id: "ea", name: "Rohan Mehta", tint: "#cdeccf" },
  { id: "io", name: "Diya Iyer", tint: "#cfd6f7" },
  { id: "do", name: "Karan Verma", tint: "#f5dfb5" },
  { id: "ss", name: "Ishita Rao", tint: "#e5d3f5" },
  { id: "mk", name: "Meera Kulkarni", tint: "#c9ebf0" },
  { id: "lr", name: "Arjun Nair", tint: "#fde2c4" },
  { id: "nb", name: "Nikita Bose", tint: "#d8eccb" },
]

export const SEED_TASKS: Task[] = [
  { id: "t1", title: "Design login & sign-up screens", tag: "Design", pri: "high", status: "progress", due: 2, who: ["ad", "mk"], prog: 0.6, notes: 4 },
  { id: "t2", title: "UPI & passkey sign-in", tag: "Backend", pri: "high", status: "progress", due: 3, who: ["ea", "tm"], prog: 0.45, notes: 7 },
  { id: "t3", title: "Saved filters for projects", tag: "Frontend", pri: "med", status: "todo", due: 6, who: ["io"], prog: 0, notes: 2 },
  { id: "t4", title: "Marketing site refresh", tag: "Frontend", pri: "med", status: "progress", due: 4, who: ["do", "io"], prog: 0.7, notes: 3 },
  { id: "t5", title: "Write API endpoint docs", tag: "Backend", pri: "low", status: "todo", due: 9, who: ["ea"], prog: 0, notes: 1 },
  { id: "t6", title: "Chrome & Safari regression pass", tag: "QA", pri: "med", status: "review", due: 1, who: ["ss"], prog: 0.9, notes: 5 },
  { id: "t7", title: "Onboarding email sequence", tag: "Marketing", pri: "low", status: "todo", due: 12, who: ["lr", "nb"], prog: 0, notes: 0 },
  { id: "t8", title: "Monorepo cleanup", tag: "Backend", pri: "low", status: "done", due: -2, who: ["ad"], prog: 1, notes: 2 },
  { id: "t9", title: "Brand illustration set", tag: "Design", pri: "med", status: "review", due: 2, who: ["mk", "tm"], prog: 0.85, notes: 6 },
  { id: "t10", title: "Cut LCP under 2 seconds", tag: "Frontend", pri: "high", status: "todo", due: 5, who: ["do"], prog: 0, notes: 3 },
  { id: "t11", title: "Q4 launch announcement", tag: "Marketing", pri: "med", status: "progress", due: 8, who: ["nb"], prog: 0.3, notes: 1 },
  { id: "t12", title: "Dashboard analytics widgets", tag: "Frontend", pri: "high", status: "done", due: -1, who: ["io", "ad"], prog: 1, notes: 9 },
  { id: "t13", title: "Kickoff with Shree Textiles", tag: "Marketing", pri: "med", status: "done", due: -3, who: ["tm", "lr"], prog: 1, notes: 4 },
]

export const SEED_PROJECTS: Project[] = [
  { id: "p1", name: "UPI Payments API v2", due: 8, pico: "api" },
  { id: "p2", name: "Mobile Onboarding", due: 12, pico: "flow" },
  { id: "p3", name: "Design System Audit", due: 15, pico: "dash" },
  { id: "p4", name: "Search Revamp", due: 20, pico: "speed" },
  { id: "p5", name: "Q4 Launch Site", due: 22, pico: "qa" },
]

export const SEED_TEAM: Member[] = [
  { id: "m1", name: "Priya Raman", tint: "#f6c6c2", task: "Design System Tokens", state: "done" },
  { id: "m2", name: "Rohan Mehta", tint: "#cdeccf", task: "UPI & Passkey Sign-in", state: "prog" },
  { id: "m3", name: "Diya Iyer", tint: "#cfd6f7", task: "Saved Filters for Projects", state: "pend" },
  { id: "m4", name: "Karan Verma", tint: "#f5dfb5", task: "Marketing Site Refresh", state: "prog" },
]

export const EVENTS: CalEvent[] = [
  { d: 0, from: "10:00", to: "10:30", title: "Daily stand-up", kind: "team", who: ["ea", "io", "do"] },
  { d: 0, from: "14:00", to: "16:00", title: "Check-in with Shree Textiles", kind: "meeting", who: ["tm", "lr"] },
  { d: 1, from: "11:00", to: "12:00", title: "Design review: auth flow", kind: "review", who: ["ad", "mk", "tm"] },
  { d: 1, from: "17:00", to: "17:30", title: "Regression sign-off", kind: "deadline", who: ["ss"] },
  { d: 2, from: "09:30", to: "10:30", title: "Sprint planning", kind: "team", who: ["tm", "ea", "do", "io"] },
  { d: 3, from: "15:00", to: "16:00", title: "UPI sign-in demo", kind: "review", who: ["ea", "tm"] },
  { d: 5, from: "13:00", to: "14:00", title: "Lunch & learn: Web Vitals", kind: "social", who: ["do", "io", "ss"] },
  { d: 6, from: "10:00", to: "11:00", title: "Search feature handoff", kind: "review", who: ["io", "ad"] },
  { d: 8, from: "16:00", to: "17:00", title: "Launch announcement due", kind: "deadline", who: ["nb", "lr"] },
  { d: 9, from: "11:00", to: "12:00", title: "Investor update", kind: "meeting", who: ["tm"] },
  { d: 12, from: "14:00", to: "15:00", title: "Retro + team lunch", kind: "social", who: ["tm", "ad", "ea", "io", "do"] },
  { d: -2, from: "10:00", to: "11:00", title: "Monorepo cleanup review", kind: "review", who: ["ad", "ea"] },
  { d: -3, from: "15:00", to: "16:00", title: "Shree Textiles kickoff", kind: "meeting", who: ["tm", "lr"] },
  { d: -6, from: "09:00", to: "17:00", title: "Design sprint", kind: "team", who: ["ad", "mk"] },
  { d: 15, from: "10:00", to: "12:00", title: "Quarterly planning", kind: "meeting", who: ["tm", "lr", "ea"] },
  { d: 19, from: "12:00", to: "13:00", title: "Regression pass due", kind: "deadline", who: ["ss"] },
]

export const NOTICES: Notice[] = [
  { id: "n1", who: "ea", verb: "moved", what: "UPI & passkey sign-in", tail: "to In progress", ago: "5m", unread: true, view: "tasks" },
  { id: "n2", who: "ss", verb: "commented on", what: "Chrome & Safari regression pass", tail: "", ago: "32m", unread: true, view: "tasks" },
  { id: "n3", who: "ad", verb: "booked", what: "Design review: auth flow", tail: "for tomorrow", ago: "1h", unread: true, view: "calendar" },
]

export const STATUSES: { id: Status; label: string; dot: string }[] = [
  { id: "todo", label: "To do", dot: "var(--st-hatch)" },
  { id: "progress", label: "In progress", dot: "#e8a317" },
  { id: "review", label: "In review", dot: "#3b5bdb" },
  { id: "done", label: "Done", dot: "var(--st-600)" },
]

export const KINDS: Record<Kind, string> = { meeting: "Meeting", team: "Team", review: "Review", deadline: "Deadline", social: "Social" }
export const PRI_LABEL: Record<Pri, string> = { high: "High", med: "Medium", low: "Low" }
export const TAGS: Tag[] = ["Design", "Backend", "Frontend", "QA", "Marketing"]
export const TINTS = ["#f6c6c2", "#cdeccf", "#cfd6f7", "#f5dfb5", "#e5d3f5", "#c9ebf0"]

export const BARS: { d: string; full: string; v: number; kind: "plan" | "mid" | "light" | "dark" }[] = [
  { d: "S", full: "Sunday", v: 60, kind: "plan" },
  { d: "M", full: "Monday", v: 86, kind: "mid" },
  { d: "T", full: "Tuesday", v: 74, kind: "light" },
  { d: "W", full: "Wednesday", v: 96, kind: "dark" },
  { d: "T", full: "Thursday", v: 95, kind: "plan" },
  { d: "F", full: "Friday", v: 70, kind: "plan" },
  { d: "S", full: "Saturday", v: 85, kind: "plan" },
]

/** Same groups, order and labels as the template's sidebar. */
export const NAV_GROUPS: { id: string; label: string; items: NavItem[] }[] = [
  {
    id: "menu",
    label: "Menu",
    items: [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      { id: "tasks", label: "Tasks", icon: SquareCheckBig },
      { id: "calendar", label: "Calendar", icon: CalendarDays },
      { id: "analytics", label: "Analytics", icon: ChartNoAxesColumn, full: true },
      { id: "team", label: "Team", icon: Users, full: true },
    ],
  },
  {
    id: "general",
    label: "General",
    items: [
      { id: "settings", label: "Settings", icon: Settings },
      { id: "help", label: "Help", icon: LifeBuoy, full: true },
    ],
  },
]

export const NAV: NavItem[] = NAV_GROUPS.flatMap((g) => g.items)

/** What each full-template page holds, taken from the template's own markup. */
export const FULL: Record<FullView, { title: string; sub: string; points: string[] }> = {
  analytics: {
    title: "Analytics",
    sub: "How the team is shipping, and where the time goes.",
    points: [
      "KPI cards with sparklines: tasks completed, hours tracked, on-time delivery, average cycle time",
      "Throughput chart against the previous period, with a 7D, 30D and 90D range",
      "Time-by-project donut and a 20-week activity heatmap",
      "Top contributors list and CSV export",
    ],
  },
  team: {
    title: "Team",
    sub: "Everyone on the workspace, what they're carrying and who's around.",
    points: [
      "A card per teammate with role, department, status and a workload meter",
      "Department filters and a live count of who is online",
      "Profile side panel with city, open tasks and assigned work",
      "Invite member dialog",
    ],
  },
  help: {
    title: "Help center",
    sub: "Answers, shortcuts, and a human when you need one.",
    points: [
      "Topic filters that narrow a searchable FAQ accordion",
      "Keyboard shortcuts reference for search and navigation",
      "A contact card for chat and email support",
    ],
  },
}
