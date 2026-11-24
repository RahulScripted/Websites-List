import { useEffect, useMemo, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { Droplets, Gauge, Sun, Sunrise, Sunset, Thermometer, Waves, Wind, type LucideIcon } from "lucide-react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useSpring, useTransform } from "motion/react";
import { EASE_OUT, FadeUp, RiseLines, formatHour } from "@/components/kinara/parts";
import { hotel } from "@/components/kinara/content";
import { useSeaConditions } from "@/components/kinara/lib/useSeaConditions";
import { compass } from "@/components/kinara/lib/weather";
import { findExtremes, heightAt } from "@/components/kinara/lib/tide";
import type { SeaConditions } from "@/types/kinara";

const W = 1000;
const H = 300;
const PAD_TOP = 40;
const PAD_BOTTOM = 48;
// Hourly samples run 00:00 to 23:00, so the chart spans that range.
const LAST_HOUR = 23;

const xOf = (t: number) => (t / LAST_HOUR) * W;
const signed = (h: number) => `${h >= 0 ? "+" : "−"}${Math.abs(h).toFixed(1)}`;

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 1 });
  const [value, setValue] = useState(to);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.4, ease: EASE_OUT, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

function TideChart({ data }: { data: SeaConditions }) {
  const samples = data.tideHourly;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const now = Math.min(LAST_HOUR, data.nowHour);
  const target = useMotionValue(now);
  const t = useSpring(target, { stiffness: 260, damping: 30 });
  const [hover, setHover] = useState<number | null>(null);
  const [readout, setReadout] = useState(now);
  useMotionValueEvent(t, "change", (value) => setReadout(value));

  const extremes = useMemo(() => findExtremes(samples), [samples]);
  const { lo, hi } = useMemo(() => ({ lo: Math.min(...samples) - 0.35, hi: Math.max(...samples) + 0.35 }), [samples]);
  const yOf = (h: number) => H - PAD_BOTTOM - ((h - lo) / (hi - lo)) * (H - PAD_TOP - PAD_BOTTOM);
  const gridLines = useMemo(() => {
    const lines: number[] = [];
    for (let m = Math.ceil(lo); m <= Math.floor(hi); m++) lines.push(m);
    return lines;
  }, [lo, hi]);

  const dotX = useTransform(t, (value) => xOf(value));
  const dotY = useTransform(t, (value) => yOf(heightAt(samples, value)));

  const { line, area } = useMemo(() => {
    let d = "";
    for (let step = 0; step <= 240; step++) {
      const time = (step / 240) * LAST_HOUR;
      d += `${step === 0 ? "M" : "L"}${xOf(time).toFixed(1)} ${yOf(heightAt(samples, time)).toFixed(1)}`;
    }
    return { line: d, area: `${d} L${W} ${H - PAD_BOTTOM} L0 ${H - PAD_BOTTOM} Z` };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [samples, lo, hi]);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const value = Math.min(LAST_HOUR, Math.max(0, ((event.clientX - rect.left) / rect.width) * LAST_HOUR));
    setHover(value);
    target.set(value);
  }

  const height = heightAt(samples, readout);
  const rising = heightAt(samples, readout + 0.1) > height;
  const next = extremes.find((point) => point.t > data.nowHour);
  const summary = extremes.map((p) => `${p.kind} water ${formatHour(p.t)} at ${signed(p.h)} m`).join(", ");

  return (
    <div ref={ref} className="kl-paper rounded-[20px] p-5 shadow-[0_30px_60px_-40px_rgba(43,15,51,0.6),0_0_0_1px_rgba(36,20,58,0.06)] md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[14px] text-(--ink-soft)">
            Tide at Colaba, {data.dateLabel}
          </p>
          <p className="font-display mt-1 text-[clamp(2rem,3.4vw,3rem)] leading-none" aria-live="polite">
            <span className="tabular-nums">{signed(height)}</span> m{" "}
            <span className="text-(--water)">{rising ? "and rising" : "and falling"}</span>
          </p>
        </div>
        <p className="font-mono text-[13px] text-(--ink-soft)">
          {hover === null ? "Now" : "At"} {formatHour(readout)}
        </p>
      </div>
      <div
        className="relative mt-6 cursor-crosshair touch-none select-none"
        onPointerMove={onMove}
        onPointerDown={onMove}
        onPointerLeave={() => {
          setHover(null);
          target.set(now);
        }}
        role="img"
        aria-label={`Tide chart for today against mean sea level. ${summary}.`}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full overflow-visible" aria-hidden>
          {gridLines.map((m) => (
            <g key={m}>
              <line x1="0" x2={W} y1={yOf(m)} y2={yOf(m)} stroke="var(--ink)" strokeOpacity={m === 0 ? 0.2 : 0.08} vectorEffect="non-scaling-stroke" />
              <text x={W} y={yOf(m) - 6} textAnchor="end" fontSize="15" fill="var(--ink-soft)" fontFamily="DM Mono, monospace">
                {m === 0 ? "0 m" : `${m > 0 ? "+" : "−"}${Math.abs(m)} m`}
              </text>
            </g>
          ))}
          <motion.g
            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
            animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
            transition={{ duration: 1.8, ease: EASE_OUT }}
          >
            <path d={area} fill="var(--water)" fillOpacity="0.14" />
            <path d={line} fill="none" stroke="var(--water)" strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
          </motion.g>
          {extremes.map((point) => (
            <g key={point.t}>
              <circle cx={xOf(point.t)} cy={yOf(point.h)} r="4" fill="var(--cream)" stroke="var(--water)" strokeWidth="1.6" />
              <text
                x={xOf(point.t)}
                y={point.kind === "high" ? yOf(point.h) - 14 : yOf(point.h) + 24}
                textAnchor="middle"
                fontSize="15"
                fill="var(--ink)"
                fontFamily="DM Mono, monospace"
              >
                {formatHour(point.t)}
              </text>
            </g>
          ))}
          <line x1="0" x2={W} y1={H - PAD_BOTTOM} y2={H - PAD_BOTTOM} stroke="var(--ink)" strokeOpacity="0.3" vectorEffect="non-scaling-stroke" />
          {[0, 6, 12, 18, 23].map((h) => (
            <text key={h} x={xOf(h)} y={H - 18} textAnchor={h === 0 ? "start" : h === LAST_HOUR ? "end" : "middle"} fontSize="15" fill="var(--ink-soft)" fontFamily="DM Mono, monospace">
              {String(h).padStart(2, "0")}:00
            </text>
          ))}
          <motion.line x1={dotX} x2={dotX} y1={PAD_TOP - 20} y2={H - PAD_BOTTOM} stroke="var(--ink)" strokeWidth="1" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
          <motion.circle cx={dotX} cy={dotY} r="14" fill="var(--sun)" fillOpacity="0.35" />
          <motion.circle cx={dotX} cy={dotY} r="7" fill="var(--sun)" stroke="var(--ink)" strokeWidth="1.5" />
        </svg>
      </div>
      <p className="font-hand mt-4 text-[22px] leading-tight text-(--water)">
        {next
          ? `Next ${next.kind} water at ${formatHour(next.t)}, ${signed(next.h)} m. ${next.kind === "low" ? "The rocks below the sea wall show then." : "The spray reaches the promenade."}`
          : "No more turns of the tide today. The next one is just after midnight."}
      </p>
      <p className="mt-2 text-[12px] text-(--ink-soft)">Heights are against mean sea level, from the Open-Meteo marine model.</p>
    </div>
  );
}

function ChartPlaceholder({ message, action }: { message: string; action?: ReactNode }) {
  return (
    <div className="kl-paper grid min-h-[360px] place-items-center rounded-[20px] p-8 text-center shadow-[0_0_0_1px_rgba(36,20,58,0.06)]">
      <div>
        <p className="font-hand text-[26px] text-(--water)">{message}</p>
        {action}
      </div>
    </div>
  );
}

function WindArrow({ from }: { from: number }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-(--water)" aria-hidden>
      {/* The arrow points the way the wind blows, which is opposite to the bearing it comes from. */}
      <motion.g
        style={{ transformBox: "view-box", transformOrigin: "12px 12px" }}
        initial={{ rotate: from + 180 }}
        animate={{ rotate: [from + 172, from + 188, from + 172] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 21V3M7 8l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
}

function updatedLabel(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: hotel.timezone });
}

type Stat = { label: string; value: ReactNode; hint: string; icon: LucideIcon };

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const Icon = stat.icon;
  return (
    <FadeUp delay={0.05 * index}>
      <div className="kl-paper group flex h-full flex-col gap-4 rounded-[18px] p-5 shadow-[0_20px_40px_-32px_rgba(43,15,51,0.7),0_0_0_1px_rgba(36,20,58,0.06)] transition-transform duration-500 ease-(--ease-out) hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-(--ink-soft)">{stat.label}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-(--water)/10 text-(--water) transition-colors duration-500 group-hover:bg-(--water) group-hover:text-(--cream)">
            <Icon size={17} strokeWidth={1.7} />
          </span>
        </div>
        <p className="font-display text-[clamp(1.7rem,2.4vw,2.2rem)] leading-none">{stat.value}</p>
        <p className="mt-auto text-[13px] text-(--ink-soft)">{stat.hint}</p>
      </div>
    </FadeUp>
  );
}

function SkeletonCard() {
  return (
    <div className="kl-paper flex h-[150px] flex-col justify-between rounded-[18px] p-5 shadow-[0_0_0_1px_rgba(36,20,58,0.06)]">
      <span className="h-3 w-16 animate-pulse rounded bg-(--ink)/10" />
      <span className="h-6 w-24 animate-pulse rounded bg-(--ink)/10" />
      <span className="h-3 w-28 animate-pulse rounded bg-(--ink)/10" />
    </div>
  );
}

function uvBand(uv: number) {
  if (uv < 3) return "Low";
  if (uv < 6) return "Moderate";
  if (uv < 8) return "High";
  if (uv < 11) return "Very high";
  return "Extreme";
}

export function Tides() {
  const { status, data, retry } = useSeaConditions();

  const stats: Stat[] = data
    ? [
        { label: "Air", value: <CountUp to={Math.round(data.airTemp)} suffix="°C" />, hint: data.condition, icon: Thermometer },
        { label: "Feels like", value: `${Math.round(data.feelsLike)}°C`, hint: `${data.humidity}% humidity`, icon: Droplets },
        {
          label: "Sea",
          value: data.waterTemp === null ? "n/a" : <CountUp to={Math.round(data.waterTemp)} suffix="°C" />,
          hint: "Surface temperature",
          icon: Waves,
        },
        {
          label: "Wind",
          value: (
            <span className="flex items-center gap-2">
              <WindArrow from={data.windFrom} />
              {Math.round(data.windSpeed)} <span className="text-[15px]">km/h</span>
            </span>
          ),
          hint: `Blowing from the ${compass(data.windFrom)}`,
          icon: Wind,
        },
        {
          label: "Swell",
          value: data.waveHeight === null ? "n/a" : `${data.waveHeight.toFixed(1)} m`,
          hint: data.wavePeriod ? `Every ${Math.round(data.wavePeriod)} seconds` : "Wave height",
          icon: Gauge,
        },
        { label: "Sunrise", value: data.sunrise, hint: "Over the harbour", icon: Sunrise },
        { label: "Sunset", value: data.sunset, hint: "Behind the Arabian Sea", icon: Sunset },
        { label: "UV today", value: Math.round(data.uvIndexMax), hint: uvBand(data.uvIndexMax), icon: Sun },
      ]
    : [];

  return (
    <section id="tides" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 md:gap-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.98] tracking-[-0.03em]">
            <RiseLines lines={["Today", "on the water."]} accent={[1]} />
          </h2>
          <FadeUp delay={0.1} className="flex max-w-[44ch] flex-col gap-4">
            <p className="text-[16px] leading-[1.6] text-(--ink-soft)">
              Live from the Colaba sea face. Meera used to chalk this on the kitchen board every morning, now it updates itself. Move along the chart to see the sea at any hour.
            </p>
            <p className="flex items-center gap-2 text-[13px] text-(--ink-soft)">
              <span aria-hidden className={`h-2 w-2 shrink-0 rounded-full ${status === "error" ? "bg-(--coral)" : "kl-twinkle bg-(--water)"}`} />
              {data ? `Live, ${data.condition.toLowerCase()}. Updated ${updatedLabel(data.updatedAt)} IST` : status === "error" ? "Live data is unavailable right now" : "Fetching live conditions"}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {status === "loading" && !data
            ? Array.from({ length: 8 }, (_, i) => <SkeletonCard key={i} />)
            : stats.map((stat, index) => <StatCard key={stat.label} stat={stat} index={index} />)}
        </div>

        <FadeUp delay={0.1}>
          {data && data.tideHourly.length === 24 ? (
            <TideChart data={data} />
          ) : status === "loading" ? (
            <ChartPlaceholder message="Reading the tables…" />
          ) : (
            <ChartPlaceholder
              message={data ? "Tide data is not available for today." : "Couldn't reach the weather service."}
              action={
                !data && (
                  <button type="button" onClick={retry} className="kl-link mt-4 text-[14px] font-medium text-(--sea)">
                    Try again
                  </button>
                )
              }
            />
          )}
        </FadeUp>
      </div>
    </section>
  );
}
