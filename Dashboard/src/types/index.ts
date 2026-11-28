import type { Dispatch, SetStateAction } from "react"
import type { LucideIcon } from "lucide-react"

export type FullView = "analytics" | "team" | "help"
export type View = "dashboard" | "tasks" | "calendar" | "settings" | FullView
export type Theme = "light" | "dark"
export type Status = "todo" | "progress" | "review" | "done"
export type Tag = "Design" | "Backend" | "Frontend" | "QA" | "Marketing"
export type Pri = "high" | "med" | "low"
export type Kind = "meeting" | "team" | "review" | "deadline" | "social"
export type TaskFilter = "all" | "mine" | "high" | "week"
export type DialogKind = "project" | "member" | "task"
export type Pico = "api" | "flow" | "dash" | "speed" | "qa" | "new"

export interface Person {
  id: string
  name: string
  tint: string
}

export interface Task {
  id: string
  title: string
  tag: Tag
  pri: Pri
  status: Status
  due: number
  who: string[]
  prog: number
  notes: number
}

export interface Project {
  id: string
  name: string
  due: number
  pico: Pico
}

export interface Member {
  id: string
  name: string
  tint: string
  task: string
  state: "done" | "prog" | "pend"
}

export interface CalEvent {
  d: number
  from: string
  to: string
  title: string
  kind: Kind
  who: string[]
}

export interface Notice {
  id: string
  who: string
  verb: string
  what: string
  tail: string
  ago: string
  unread: boolean
  view: View
}

export interface SetuDashboardProps {
  /** Starting accent. Every other shade is mixed from it; Settings > Appearance can change it live. */
  accent?: string
  /** Workspace name in the sidebar and in the signed-in email. */
  workspaceName?: string
  /** Signed-in user, shown in the top bar and as the owner of "My tasks". */
  userName?: string
  /** Starting theme. Settings and the top-bar toggle own it after that; a later change from the parent still applies. */
  theme?: Theme
  className?: string
}

export interface NavItem {
  id: View
  label: string
  icon: LucideIcon
  /** A page that lives only in the full template. */
  full?: boolean
}

export interface Stats {
  total: number
  ended: number
  running: number
  pending: number
}

export interface Field {
  name: string
  label: string
  type: "text" | "date" | "select"
  value: string
  options?: string[]
  min?: string
}

export interface Profile {
  name: string
  email: string
  role: string
  tz: string
  bio: string
}

export type SetTab = "profile" | "notify" | "look"

export interface DragState {
  id: string
  pointerId: number
  sx: number
  sy: number
  offX: number
  offY: number
  w: number
  active: boolean
  from: Status
  key: string
}

export interface DashProps {
  q: string
  stats: Stats
  projects: Project[]
  team: Member[]
  today: Date
  elapsed: number
  running: boolean
  meetingFor: number | null
  onTracker: (a: "toggle" | "stop") => void
  onMeeting: () => void
  onDialog: (k: DialogKind) => void
  onGo: (v: View) => void
}

export interface TasksViewProps {
  q: string
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
  people: Person[]
  today: Date
  fresh: Set<string>
  onDialog: (k: DialogKind) => void
  onToast: (m: string) => void
}

export interface CalendarViewProps {
  q: string
  people: Person[]
  today: Date
  weekStart: 0 | 1
}

export interface SettingsViewProps {
  theme: Theme
  onTheme: (t: Theme) => void
  accent: string
  onAccent: (hex: string) => void
  weekStart: 0 | 1
  onWeekStart: (w: 0 | 1) => void
  profile: Profile
  onProfile: (p: Profile) => void
  onToast: (msg: string) => void
}

export interface RadioOpt<T extends string> {
  id: T
  label: string
  hex?: string
  icon?: LucideIcon
}
