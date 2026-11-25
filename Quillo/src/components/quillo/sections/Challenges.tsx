import { useState, type CSSProperties } from "react";
import { Reveal, Split } from "@/components/quillo/parts";

const STATS = [
  { value: "1,320", label: "XP earned", bg: "var(--ql-yellow-l)", icon: "star" },
  { value: "Level 7", label: "Curious Cub", bg: "var(--ql-cyan-l)", icon: "gem" },
  { value: "9 days", label: "Learning streak", bg: "var(--ql-yellow)", icon: "flame" },
  { value: "#4", label: "In Class 8-B", bg: "var(--ql-pink-l)", icon: "cup" },
] as const;

function Icon({ name }: { name: string }) {
  const common = { viewBox: "0 0 40 40", stroke: "#14102b", strokeWidth: 2.4, strokeLinejoin: "round", strokeLinecap: "round" } as const;
  switch (name) {
    case "star":
      return <svg {...common}><path d="M20 4l4.7 10 10.9 1.2-8.1 7.4 2.3 10.8L20 27.7 10.2 33.4l2.3-10.8-8.1-7.4L15.3 14z" fill="#f7a81b" /></svg>;
    case "gem":
      return <svg {...common}><path d="M9 6h22l6 9-17 20L3 15z" fill="#17b3c6" /><path d="M3 15h34M14 6l-3 9 9 20 9-20-3-9" fill="none" /></svg>;
    case "flame":
      return <svg {...common}><path d="M20 3c2 7 11 11 11 22a11 11 0 0 1-22 0c0-5 3-8 5-10 0 4 2 5 3 5 0-6-1-10 3-17z" fill="#e4276d" /><path d="M20 22c3 3 5 5 5 8a5 5 0 0 1-10 0c0-3 3-5 5-8z" fill="#fbe1a6" /></svg>;
    case "cup":
      return <svg {...common}><path d="M11 5h18v10a9 9 0 0 1-18 0z" fill="#f7a81b" /><path d="M11 8H5c0 7 3 10 7 10M29 8h6c0 7-3 10-7 10M20 24v6M12 35h16l-2-5H14z" fill="none" /></svg>;
    case "bolt":
      return <svg {...common}><path d="M23 3L7 22h10l-3 15 17-21H21z" fill="#f7a81b" /></svg>;
    case "book":
      return <svg {...common}><path d="M4 8c6-2 11-1 16 3 5-4 10-5 16-3v24c-6-2-11-1-16 3-5-4-10-5-16-3z" fill="#a8dfc0" /><path d="M20 11v24" fill="none" /></svg>;
    case "target":
      return <svg {...common}><circle cx="20" cy="20" r="16" fill="#f8bdd3" /><circle cx="20" cy="20" r="9" fill="#fff" /><circle cx="20" cy="20" r="3.5" fill="#e4276d" /></svg>;
    case "team":
      return <svg {...common}><circle cx="13" cy="14" r="5" fill="#a9e4ea" /><circle cx="27" cy="14" r="5" fill="#fbe1a6" /><path d="M3 33c0-7 4-11 10-11s10 4 10 11zM21 33c0-5 2-9 6-10 6 0 10 3 10 10z" fill="#fff" /></svg>;
    default:
      return null;
  }
}

const BADGES = [
  { name: "First Steps", icon: "book", bg: "var(--ql-green-l)", got: true },
  { name: "Week Warrior", icon: "flame", bg: "var(--ql-yellow-l)", got: true },
  { name: "Quiz Whiz", icon: "bolt", bg: "var(--ql-cyan-l)", got: true },
  { name: "Bullseye", icon: "target", bg: "var(--ql-pink-l)", got: true },
  { name: "Team Player", icon: "team", bg: "var(--ql-cyan-l)", got: false },
  { name: "Champion", icon: "cup", bg: "var(--ql-yellow-l)", got: false },
] as const;

const DONE = new Set([1, 2, 3, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
const TODAY = 23;

const BOARD = [
  { name: "Sakshi", xp: 1900, days: 28, c: "var(--ql-brown)", fg: "#fff" },
  { name: "Rahul", xp: 2120, days: 36, c: "var(--ql-pink)", fg: "#fff" },
  { name: "Pallavi", xp: 1890, days: 27, c: "var(--ql-yellow)", fg: "var(--ql-ink)" },
] as const;
const ROWS = [
  { rank: 4, name: "You", xp: 1320, days: 9, me: true },
  { rank: 5, name: "Ananya", xp: 1280, days: 12 },
  { rank: 6, name: "Gayathri", xp: 1210, days: 8 },
] as const;

const CHOICES = ["12", "15", "18", "21"];
const ANSWER = "18";

function DailyChallenge() {
  const [picked, setPicked] = useState<string | null>(null);
  const right = picked === ANSWER;
  return (
    <div className="ql-ch-card ql-ch-daily">
      <div className="ql-ch-row">
        <span className="ql-ch-label ql-mono"><i></i>Today's challenge</span>
        <span className="ql-ch-xp ql-mono">+50 XP</span>
      </div>
      <p className="ql-ch-q">A bookshelf has 3 shelves with 6 books each. How many books are there in all?</p>
      <div className="ql-ch-opts" role="group" aria-label="Answer choices">
        {CHOICES.map((choice) => {
          const state = picked === null ? "" : choice === ANSWER ? " ql-ok" : choice === picked ? " ql-no" : "";
          return (
            <button key={choice} type="button" className={"ql-ch-opt ql-mono" + state} disabled={picked !== null} onClick={() => setPicked(choice)}>
              {choice}
            </button>
          );
        })}
      </div>
      <div className="ql-ch-foot">
        <p className="ql-ch-msg" aria-live="polite">
          {picked === null ? "Pick an answer to keep your streak alive." : right ? "Spot on! +50 XP added to your total." : "Not quite. 3 × 6 = 18. Try tomorrow's!"}
        </p>
        {picked !== null && (
          <button type="button" className="ql-ch-again ql-mono" onClick={() => setPicked(null)}>Try again</button>
        )}
      </div>
      <p className="ql-ch-note ql-mono">Updated daily · skipping resets your streak</p>
    </div>
  );
}

function StreakCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div className="ql-ch-card ql-ch-cal" style={{ background: "var(--ql-yellow-l)" } as CSSProperties}>
      <div className="ql-ch-row">
        <h3 className="ql-ch-h">Monthly activity</h3>
        <span className="ql-ch-label ql-mono">Best: 14 days</span>
      </div>
      <div className="ql-ch-days" role="list" aria-label="Days of the month">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <b key={i} className="ql-mono" aria-hidden="true">{d}</b>)}
        {days.map((d) => (
          <span key={d} role="listitem" className={"ql-ch-day" + (DONE.has(d) ? " ql-done" : "") + (d === TODAY ? " ql-today" : "")} aria-label={`Day ${d}${DONE.has(d) ? ", completed" : d === TODAY ? ", today" : ""}`}>{d}</span>
        ))}
      </div>
      <div className="ql-ch-legend ql-mono"><span><i style={{ background: "var(--ql-pink)" } as CSSProperties}></i>Done</span><span><i style={{ background: "var(--ql-yellow)" } as CSSProperties}></i>Today</span></div>
    </div>
  );
}

function Badges() {
  return (
    <div className="ql-ch-card">
      <div className="ql-ch-row">
        <h3 className="ql-ch-h">Achievement badges</h3>
        <span className="ql-ch-label ql-mono">4 / 6 earned</span>
      </div>
      <ul className="ql-ch-badges">
        {BADGES.map((b) => (
          <li key={b.name} className={b.got ? "" : "ql-locked"}>
            <span className="ql-ch-medal" style={{ background: b.bg } as CSSProperties}><Icon name={b.icon} /></span>
            <span className="ql-mono">{b.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Leaderboard() {
  const order = [BOARD[0], BOARD[1], BOARD[2]];
  const heights = [96, 128, 78];
  const places = [2, 1, 3];
  return (
    <div className="ql-ch-card ql-ch-lb">
      <div className="ql-ch-row">
        <h3 className="ql-ch-h">Class leaderboard</h3>
        <span className="ql-ch-label ql-mono">Class 8-B · this week</span>
      </div>
      <div className="ql-ch-podium">
        {order.map((p, i) => (
          <div key={p.name} className="ql-ch-spot">
            <span className="ql-ch-ava" style={{ background: p.c, color: p.fg } as CSSProperties}>{p.name[0]}</span>
            <b>{p.name}</b>
            <div className="ql-ch-step" style={{ height: heights[i], background: p.c, color: p.fg } as CSSProperties}>
              <strong>{places[i]}</strong>
              <span className="ql-mono">{p.xp} XP</span>
            </div>
          </div>
        ))}
      </div>
      <ol className="ql-ch-rows" start={4}>
        {ROWS.map((r) => (
          <li key={r.rank} className={"me" in r && r.me ? "ql-me" : ""}>
            <span className="ql-mono">{r.rank}</span>
            <b>{r.name}</b>
            <span className="ql-mono">{r.days} days</span>
            <span className="ql-mono">{r.xp} XP</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Challenges() {
  return (
    <section className="ql-challenges" id="challenges" data-section="learning-challenges">
      <div className="ql-work-head">
        <div>
          <p className="ql-hand">let's learn, play and win!</p>
          <svg viewBox="0 0 74 14" width="74" fill="none" stroke="#14102b" strokeLinecap="round" style={{ margin: "0 auto" } as CSSProperties}><path d="M1 4.5C10 3 37 0 72.8 2" /><path d="M11.3 8C18 6.8 37.7 4.8 63.5 6.2" /><path d="M2.8 12.6C11.5 11 37.3 8.4 71 10.3" /></svg>
        </div>
        <Split as="h2" className="ql-display" text="Learning|Challenges" />
        <p className="ql-ch-lede">Turn everyday learning into an exciting journey with daily challenges, fun quizzes, achievement badges, and rewarding milestones that keep students motivated to learn more.</p>
      </div>
      <Reveal as="div" className="ql-ch-board">
        <div className="ql-ch-stats">
          {STATS.map((s) => (
            <div key={s.label} className="ql-ch-stat" style={{ background: s.bg } as CSSProperties}>
              <div><strong>{s.value}</strong><span className="ql-mono">{s.label}</span></div>
              <Icon name={s.icon} />
            </div>
          ))}
        </div>
        <DailyChallenge />
        <StreakCalendar />
        <Badges />
        <Leaderboard />
      </Reveal>
    </section>
  );
}
