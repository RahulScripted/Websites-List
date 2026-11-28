import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { AnimatePresence, MotionConfig, motion } from "motion/react"
import { Bell, Moon, Search, Sun } from "lucide-react"
import { Avatar, CalendarView, DashboardView, Dialog, Logo, LockedView, SettingsView, Sidebar, TabBar, TasksView, Tray } from "./common"
import { NOTICES, PEOPLE, SEED_PROJECTS, SEED_TASKS, SEED_TEAM, TAGS, TINTS } from "./data"
import { STYLE } from "./lib/styles"
import { dayOffset, daysBetween, hms, iso, noon, parseIso, slug } from "./lib/helpers"
import { viewV } from "./lib/variants"
import type { DialogKind, Field, FullView, Member, Notice, Pri, Profile, Project, Stats, Tag, Task, Theme, View, SetuDashboardProps } from "@/types"

const mailFor = (name: string, ws: string) => `${slug(name.split(" ")[0] ?? "aarav")}@${slug(ws)}.in`

export default function SetuDashboard({
  accent: accentProp = "#1d7347",
  workspaceName = "Setu",
  userName = "Aarav Sharma",
  theme: themeProp = "light",
  className = "",
}: SetuDashboardProps) {
  /* Props only set the starting look. Settings owns it after that; a prop that
     later changes (the page's dark class, a Controls edit) still wins once. */
  const [theme, setTheme] = useState<Theme>(themeProp)
  const [accent, setAccent] = useState(accentProp)
  const [weekStart, setWeekStart] = useState<0 | 1>(1)
  const [profile, setProfile] = useState<Profile>(() => ({ name: userName, email: mailFor(userName, workspaceName), role: "Project Lead", tz: "GMT+5:30 · Mumbai", bio: "Shipping calm software with a kind team." }))
  const seen = useRef({ themeProp, accentProp, userName, workspaceName })

  useEffect(() => {
    const p = seen.current
    if (p.themeProp !== themeProp) setTheme(themeProp)
    if (p.accentProp !== accentProp) setAccent(accentProp)
    if (p.userName !== userName || p.workspaceName !== workspaceName) setProfile((pr) => ({ ...pr, name: userName, email: mailFor(userName, workspaceName) }))
    seen.current = { themeProp, accentProp, userName, workspaceName }
  }, [themeProp, accentProp, userName, workspaceName])

  const me = profile.name
  const [today] = useState(noon)
  const [view, setView] = useState<View>("dashboard")
  const [query, setQuery] = useState("")
  const [tasks, setTasks] = useState<Task[]>(SEED_TASKS)
  const [projects, setProjects] = useState<Project[]>(SEED_PROJECTS)
  const [team, setTeam] = useState<Member[]>(SEED_TEAM)
  const [stats, setStats] = useState<Stats>({ total: 24, ended: 10, running: 12, pending: 2 })
  const [tracker, setTracker] = useState<{ acc: number; since: number | null }>({ acc: 5048, since: null })
  const [meetingAt, setMeetingAt] = useState<number | null>(null)
  const [now, setNow] = useState(() => Date.now())
  const [dialog, setDialog] = useState<DialogKind | null>(null)
  const [toast, setToast] = useState<{ id: number; msg: string } | null>(null)
  const [notes, setNotes] = useState<Notice[]>(NOTICES)
  const [tray, setTray] = useState(false)
  const [fresh, setFresh] = useState<Set<string>>(() => new Set())
  const boardRef = useRef<HTMLElement | null>(null)
  const bellRef = useRef<HTMLButtonElement | null>(null)
  const searchRef = useRef<HTMLInputElement | null>(null)

  const people = useMemo(() => PEOPLE.map((p) => (p.id === "tm" ? { ...p, name: me } : p)), [me])
  const q = query.trim().toLowerCase()
  const dark = theme === "dark"
  const openCount = tasks.filter((t) => t.status !== "done").length
  const sprintPct = Math.round((tasks.filter((t) => t.status === "done").length / Math.max(tasks.length, 1)) * 100)
  const unread = notes.some((n) => n.unread)
  const ticking = tracker.since !== null || meetingAt !== null

  useEffect(() => {
    if (!ticking) return
    const id = window.setInterval(() => setNow(Date.now()), 250)
    return () => window.clearInterval(id)
  }, [ticking])

  const elapsed = Math.floor(tracker.acc + (tracker.since !== null ? Math.max(0, now - tracker.since) / 1000 : 0))
  const meetingFor = meetingAt !== null ? Math.floor(Math.max(0, now - meetingAt) / 1000) : null

  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), 2800)
    return () => window.clearTimeout(t)
  }, [toast])

  const say = (msg: string) => setToast({ id: Date.now(), msg })

  const go = (v: View) => {
    setTray(false)
    if (v === view) return
    setView(v)
    boardRef.current?.scrollTo({ top: 0 })
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) window.scrollTo({ top: 0 })
  }

  const onTracker = (a: "toggle" | "stop") => {
    const t = Date.now()
    setNow(t)
    if (a === "toggle") {
      setTracker((s) => (s.since !== null ? { acc: s.acc + (t - s.since) / 1000, since: null } : { acc: s.acc, since: t }))
      return
    }
    say(elapsed ? `Logged ${hms(elapsed)} to your timesheet` : "Timer is already at zero")
    setTracker({ acc: 0, since: null })
  }

  const onMeeting = () => {
    if (meetingAt !== null) {
      setMeetingAt(null)
      say("Meeting ended")
    } else {
      const t = Date.now()
      setNow(t)
      setMeetingAt(t)
    }
  }

  const dialogs: Record<DialogKind, { title: string; submit: string; fields: Field[] }> = {
    project: {
      title: "New project",
      submit: "Add project",
      fields: [
        { name: "name", label: "Project name", type: "text", value: "" },
        { name: "due", label: "Due date", type: "date", value: iso(dayOffset(today, 14)), min: iso(today) },
      ],
    },
    member: {
      title: "Add a teammate",
      submit: "Add member",
      fields: [
        { name: "name", label: "Full name", type: "text", value: "" },
        { name: "task", label: "Working on", type: "text", value: "Onboarding" },
      ],
    },
    task: {
      title: "New task",
      submit: "Add task",
      fields: [
        { name: "title", label: "Task title", type: "text", value: "" },
        { name: "tag", label: "Team", type: "select", value: "Frontend", options: TAGS },
        { name: "pri", label: "Priority", type: "select", value: "Medium", options: ["High", "Medium", "Low"] },
      ],
    },
  }

  const submit = (kind: DialogKind, v: Record<string, string>) => {
    setDialog(null)
    if (kind === "project") {
      const name = v.name.trim().slice(0, 60)
      const due = Math.max(0, daysBetween(today, parseIso(v.due || iso(dayOffset(today, 14)))))
      setProjects((p) => [...p, { id: `p${Date.now()}`, name, due, pico: "new" }])
      setStats((s) => ({ ...s, total: s.total + 1, pending: s.pending + 1 }))
      say(`"${name}" added to projects`)
    } else if (kind === "member") {
      const name = v.name.trim().slice(0, 40)
      setTeam((t) => [...t, { id: `m${Date.now()}`, name, tint: TINTS[t.length % TINTS.length], task: v.task.trim() || "Onboarding", state: "pend" }])
      say(`${name} joined the team`)
    } else {
      const title = v.title.trim().slice(0, 60)
      const id = `t${Date.now()}`
      const pri: Pri = v.pri === "High" ? "high" : v.pri === "Low" ? "low" : "med"
      setFresh((f) => new Set(f).add(id))
      setTasks((ts) => [{ id, title, tag: (TAGS.includes(v.tag as Tag) ? v.tag : "Frontend") as Tag, pri, status: "todo", due: 7, who: ["tm"], prog: 0, notes: 0 }, ...ts])
      say(`"${title}" added to To do`)
    }
  }

  const rootStyle = { "--st-a": accent } as CSSProperties

  return (
    <MotionConfig reducedMotion="user">
      <div className={`st-root ${dark ? "st-dark" : ""} w-full ${className}`} style={rootStyle}>
        <style>{STYLE}</style>
        <div className="mx-auto flex min-h-screen w-full max-w-[100rem] gap-[14px] p-2.5 sm:p-[14px]">
          <Sidebar view={view} onGo={go} workspaceName={workspaceName} openCount={openCount} sprintPct={sprintPct} />
          <div className="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-[14px] lg:min-h-0">
            <motion.header
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="relative z-30 flex items-center gap-2 rounded-[22px] bg-muted p-2.5 sm:gap-3 sm:rounded-[26px] sm:px-4 sm:py-3"
            >
              <span className="grid h-11 w-11 flex-none place-items-center lg:hidden" title={workspaceName}>
                <Logo className="h-9 w-9 text-[var(--st-mark)]" />
                <span className="sr-only">{workspaceName}</span>
              </span>
              <form role="search" className="relative min-w-0 flex-1 sm:max-w-[380px]" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="st-search" className="sr-only">
                  Search projects, tasks and people
                </label>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground" aria-hidden="true" />
                <input
                  ref={searchRef}
                  id="st-search"
                  type="search"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setQuery("")
                  }}
                  placeholder={view === "tasks" ? "Search tasks" : view === "calendar" ? "Search events" : view === "dashboard" ? "Search projects" : "Search"}
                  className="h-11 w-full rounded-full border-0 bg-card pl-11 pr-4 text-[15px] text-foreground outline-none placeholder:text-[var(--st-faint)] focus-visible:shadow-[0_0_0_3px_var(--muted),0_0_0_5px_var(--st-600)] sm:h-12 sm:pl-12 [&::-webkit-search-cancel-button]:hidden"
                />
              </form>
              <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  onClick={() => setTheme(dark ? "light" : "dark")}
                  aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                  className="st-focus relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-card sm:h-12 sm:w-12"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span key={theme} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                      {dark ? <Sun className="h-5 w-5" strokeWidth={1.8} /> : <Moon className="h-5 w-5" strokeWidth={1.8} />}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
                <div className="sm:relative">
                  <motion.button
                    ref={bellRef}
                    type="button"
                    whileHover={{ y: -2 }}
                    onClick={() => setTray((o) => !o)}
                    aria-expanded={tray}
                    aria-label={unread ? `Notifications, ${notes.filter((n) => n.unread).length} new` : "Notifications"}
                    className="st-focus relative grid h-11 w-11 place-items-center rounded-full bg-card sm:h-12 sm:w-12"
                  >
                    <Bell className="h-5 w-5" strokeWidth={1.8} />
                    <AnimatePresence>
                      {unread ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          aria-hidden="true"
                          className="absolute right-[11px] top-[10px] h-2 w-2 rounded-full bg-[var(--st-rose)] shadow-[0_0_0_2px_var(--card)] sm:right-[13px] sm:top-3"
                        />
                      ) : null}
                    </AnimatePresence>
                  </motion.button>
                  <AnimatePresence>
                    {tray ? (
                      <Tray
                        notes={notes}
                        people={people}
                        bellRef={bellRef}
                        onClose={() => setTray(false)}
                        onRead={() => setNotes((ns) => ns.map((n) => ({ ...n, unread: false })))}
                        onOpen={(n) => {
                          setNotes((ns) => ns.map((x) => (x.id === n.id ? { ...x, unread: false } : x)))
                          go(n.view)
                          setTray(false)
                        }}
                      />
                    ) : null}
                  </AnimatePresence>
                </div>
                <button type="button" onClick={() => go("settings")} aria-label={`Account settings for ${me}`} className="st-focus hidden items-center gap-3 rounded-full py-0.5 pl-0.5 pr-1.5 text-left sm:flex">
                  <Avatar name={me} tint="#f4c9b4" size={44} />
                  <span className="hidden xl:grid">
                    <span className="max-w-[180px] truncate text-[15px] font-medium leading-tight">{me}</span>
                    <span className="max-w-[180px] truncate text-[13px] text-muted-foreground">{profile.email}</span>
                  </span>
                </button>
              </div>
            </motion.header>
            <motion.main
              ref={(el: HTMLElement | null) => {
                boardRef.current = el
              }}
              layoutScroll
              aria-labelledby={`st-h-${view}`}
              className="min-w-0 flex-1 rounded-[22px] bg-muted px-2.5 pb-28 pt-6 sm:rounded-[26px] sm:px-[22px] lg:pb-[22px]"
            >
              <AnimatePresence mode="wait">
                <motion.div key={view} variants={viewV} initial="hidden" animate="show" exit="exit" className="lg:flex lg:min-h-full lg:flex-col">
                  {view === "dashboard" ? (
                    <DashboardView
                      q={q}
                      stats={stats}
                      projects={projects}
                      team={team}
                      today={today}
                      elapsed={elapsed}
                      running={tracker.since !== null}
                      meetingFor={meetingFor}
                      onTracker={onTracker}
                      onMeeting={onMeeting}
                      onDialog={setDialog}
                      onGo={go}
                    />
                  ) : view === "tasks" ? (
                    <TasksView q={q} tasks={tasks} setTasks={setTasks} people={people} today={today} fresh={fresh} onDialog={setDialog} onToast={say} />
                  ) : view === "calendar" ? (
                    <CalendarView q={q} people={people} today={today} weekStart={weekStart} />
                  ) : view === "settings" ? (
                    <SettingsView
                      theme={theme}
                      onTheme={setTheme}
                      accent={accent}
                      onAccent={(hex) => {
                        setAccent(hex)
                        say(`Accent updated`)
                      }}
                      weekStart={weekStart}
                      onWeekStart={(w) => {
                        setWeekStart(w)
                        say(`Weeks now start on ${w === 1 ? "Monday" : "Sunday"}`)
                      }}
                      profile={profile}
                      onProfile={setProfile}
                      onToast={say}
                    />
                  ) : (
                    <LockedView id={view as FullView} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.main>
          </div>
        </div>
        <TabBar view={view} onGo={go} openCount={openCount} />
        <AnimatePresence>
          {dialog ? <Dialog key={dialog} title={dialogs[dialog].title} submit={dialogs[dialog].submit} fields={dialogs[dialog].fields} onClose={() => setDialog(null)} onSubmit={(v) => submit(dialog, v)} /> : null}
        </AnimatePresence>
        <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-[84px] z-[70] flex justify-center px-4 lg:bottom-6">
          <AnimatePresence>
            {toast ? (
              <motion.p
                key={toast.id}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }}
                transition={{ type: "spring", bounce: 0, duration: 0.45 }}
                className="max-w-full rounded-full bg-[var(--st-950)] px-[18px] py-3 text-sm font-medium text-[#f1f8f3] shadow-[0_16px_40px_-14px_rgb(13_58_35/0.6)]"
              >
                {toast.msg}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  )
}
