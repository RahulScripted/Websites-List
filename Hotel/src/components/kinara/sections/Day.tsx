import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { EASE_OUT, RiseLines } from "@/components/kinara/parts";
import { moments } from "@/components/kinara/content";


// Sky tints per moment, from cool low-tide morning to the apricot of the terrace wall.
const SKIES = ["#ece0f1", "#f8ecd9", "#fde4ad", "#fad0a6", "#f3b49f"];

const ARC = { cx: 500, cy: 176, rx: 440, ry: 150 };
const HOUR_MIN = 6;
const HOUR_SPAN = 15;

// Hours map linearly to x so the sun sits exactly above the hour ticks on the horizon.
function pointAt(hour: number) {
  const x = ARC.cx - ARC.rx + ((hour - HOUR_MIN) / HOUR_SPAN) * ARC.rx * 2;
  const k = (x - ARC.cx) / ARC.rx;
  return { x, y: ARC.cy - ARC.ry * Math.sqrt(Math.max(0, 1 - k * k)) };
}

export function Day() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const pinned = useRef(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });

  // Scrolling walks through the day; hovering a moment takes over until the pointer leaves the list.
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (pinned.current) return;
    const index = Math.min(moments.length - 1, Math.max(0, Math.floor(value * moments.length)));
    setActive(index);
  });

  const hour = useSpring(moments[0].hour, { stiffness: 60, damping: 18, mass: 0.8 });
  useEffect(() => hour.set(moments[active].hour), [active, hour]);
  const sunX = useTransform(hour, (h) => pointAt(h).x);
  const sunY = useTransform(hour, (h) => pointAt(h).y);
  const sunFill = useTransform(hour, [7, 13, 18, 19.8], ["#f59a1a", "#f59a1a", "#f09a3e", "#d63a1f"]);
  const sunLeft = useTransform(sunX, (x) => `${x / 10}%`);
  const sunTop = useTransform(sunY, (y) => `${(y / 205) * 100}%`);

  const moment = moments[active];
  const arcPath = `M${ARC.cx - ARC.rx} ${ARC.cy} A${ARC.rx} ${ARC.ry} 0 0 1 ${ARC.cx + ARC.rx} ${ARC.cy}`;

  return (
    <section ref={ref} id="day" className="px-3 py-10 md:px-6 md:py-16">
      <motion.div
        className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] px-5 pt-14 pb-10 md:px-12 md:pt-20 md:pb-16"
        animate={{ backgroundColor: SKIES[active] }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.98] tracking-[-0.03em]">
              <RiseLines lines={["One day,", "slowly."]} accent={[1]} />
            </h2>
            <p className="max-w-[36ch] text-[16px] leading-[1.6] text-(--ink-soft)">
              Nothing here is scheduled except the tide. This is roughly how a Tuesday in December goes, if you let it.
            </p>
          </div>

          {/* The arc is the sun's path from 06:00 to 21:00; the solid stroke shows how much of the day has gone. */}
          <div className="relative mt-16 md:mt-14">
            <svg viewBox="0 0 1000 205" className="block h-auto w-full overflow-visible" aria-hidden>
              <path d={arcPath} fill="none" stroke="var(--ink)" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="3 7" vectorEffect="non-scaling-stroke" />
              <clipPath id="kl-day-gone">
                <motion.rect x="0" y="0" height="205" width={sunX} />
              </clipPath>
              <path d={arcPath} fill="none" stroke="var(--ink)" strokeWidth="1.6" clipPath="url(#kl-day-gone)" vectorEffect="non-scaling-stroke" />
              <line x1="0" y1={ARC.cy} x2="1000" y2={ARC.cy} stroke="var(--sea)" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
              {[6, 9, 12, 15, 18, 21].map((h) => {
                const x = ARC.cx - ARC.rx + ((h - HOUR_MIN) / HOUR_SPAN) * ARC.rx * 2;
                return (
                  <g key={h}>
                    <line x1={x} y1={ARC.cy - 6} x2={x} y2={ARC.cy + 6} stroke="var(--sea)" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
                    <text x={x} y={ARC.cy + 24} textAnchor="middle" fontSize="14" fill="var(--ink-soft)" fontFamily="DM Mono, monospace">
                      {String(h).padStart(2, "0")}:00
                    </text>
                  </g>
                );
              })}
            </svg>
            <motion.div
              aria-hidden
              className="absolute grid -translate-x-1/2 -translate-y-1/2 place-items-center"
              style={{ left: sunLeft, top: sunTop }}
            >
              <motion.span className="block h-10 w-10 rounded-full shadow-[0_0_0_10px_rgba(245,154,26,0.18)] md:h-14 md:w-14" style={{ backgroundColor: sunFill }} />
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={moment.time}
                  className="absolute -top-8 font-mono text-[13px] whitespace-nowrap"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                >
                  {moment.time}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:mt-12 md:gap-10">
            <ul
              onPointerLeave={() => (pinned.current = false)}
              aria-label="A day at Kinara and Lehar"
            >
              {moments.map((item, index) => {
                const on = index === active;
                return (
                  <li key={item.time} className="border-t border-(--ink)/15 last:border-b">
                    <button
                      type="button"
                      className="grid w-full grid-cols-[64px_1fr] items-baseline gap-x-4 py-4 text-left md:grid-cols-[84px_1fr] md:py-5"
                      onPointerEnter={() => {
                        pinned.current = true;
                        setActive(index);
                      }}
                      onFocus={() => {
                        pinned.current = true;
                        setActive(index);
                      }}
                      onClick={() => setActive(index)}
                      aria-expanded={on}
                    >
                      <span className={`font-mono text-[13px] transition-colors duration-500 ${on ? "text-(--ink)" : "text-(--ink-soft)"}`}>{item.time}</span>
                      <span>
                        <span
                          className={`font-display block text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.1] transition-[transform,opacity] duration-500 ease-(--ease-out) ${
                            on ? "translate-x-2 opacity-100" : "opacity-45"
                          }`}
                        >
                          {item.title}
                        </span>
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.span
                              className="block overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.55, ease: EASE_OUT }}
                            >
                              <span className="block max-w-[46ch] pt-2 pl-2 text-[15px] leading-[1.6] text-(--ink-soft)">{item.text}</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
