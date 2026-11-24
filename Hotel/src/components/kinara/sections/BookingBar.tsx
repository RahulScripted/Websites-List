import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { EASE_OUT, Magnetic } from "@/components/kinara/parts";
import { getLenis } from "@/components/ui/smooth-scroll";
import { formatINR } from "@/components/kinara/content";

// Two fixed summer months keep the server and client render identical and the demo dates believable.
const MONTHS = [
  { name: "December", short: "Dec", year: 2026, index: 11, days: 31 },
  { name: "January", short: "Jan", year: 2027, index: 0, days: 31 },
];
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const LOWEST_RATE = 8500;

type Day = number; // 1..62 across both months

function toLabel(day: Day) {
  const month = MONTHS[day > 31 ? 1 : 0];
  const date = day > 31 ? day - 31 : day;
  const weekday = new Date(month.year, month.index, date).toLocaleDateString("en-GB", { weekday: "short" });
  return { weekday, date, month: month.short };
}

type Panel = "dates" | "guests" | null;
type Status = "idle" | "checking" | "done";

export function BookingBar() {
  const [visible, setVisible] = useState(true);
  const [panel, setPanel] = useState<Panel>(null);
  const [start, setStart] = useState<Day>(10);
  const [end, setEnd] = useState<Day | null>(13);
  const [hover, setHover] = useState<Day | null>(null);
  const [month, setMonth] = useState(0);
  const [direction, setDirection] = useState(1);
  const [guests, setGuests] = useState(2);
  const [guestDirection, setGuestDirection] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const rootRef = useRef<HTMLDivElement>(null);
  const introDone = useRef(false);

  // Steps aside when the footer arrives so it never covers the closing call to action.
  useEffect(() => {
    const footer = document.getElementById("kl-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { rootMargin: "0px 0px -20% 0px" });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const open = () => {
      setVisible(true);
      setPanel("dates");
    };
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setPanel(null);
    const onDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setPanel(null);
    };
    window.addEventListener("kl:open-booking", open);
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("kl:open-booking", open);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, []);

  // Slides away while reading downwards and returns on the first scroll up, so it never sits on section controls for long.
  const { scrollY } = useScroll();
  const [tucked, setTucked] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? y);
    if (y < 400) setTucked(false);
    else if (Math.abs(delta) > 4) setTucked(delta > 0);
  });
  const shown = visible && (!tucked || panel !== null || status === "checking");

  const nights = end ? end - start : 0;

  function pick(day: Day) {
    setStatus("idle");
    if (end !== null || day <= start) {
      setStart(day);
      setEnd(null);
      return;
    }
    setEnd(day);
    setHover(null);
    window.setTimeout(() => setPanel("guests"), 450);
  }

  function changeMonth(next: number) {
    setDirection(next > month ? 1 : -1);
    setMonth(next);
  }

  function changeGuests(delta: number) {
    setGuestDirection(delta);
    setGuests((value) => Math.min(4, Math.max(1, value + delta)));
    setStatus("idle");
  }

  function check() {
    if (status === "done") {
      {
        const rooms = document.getElementById("rooms");
        const lenis = getLenis();
        if (rooms && lenis) lenis.scrollTo(rooms, { offset: -16 });
        else rooms?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    if (!end) {
      setPanel("dates");
      return;
    }
    setPanel(null);
    setStatus("checking");
    window.setTimeout(() => setStatus("done"), 1100);
  }

  const startLabel = toLabel(start);
  const endLabel = end ? toLabel(end) : null;
  const previewEnd = end ?? (hover && hover > start ? hover : null);

  return (
    <motion.div
      ref={rootRef}
      className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-[680px] md:bottom-6"
      initial={{ y: 140, opacity: 0 }}
      animate={shown ? { y: 0, opacity: 1 } : { y: 140, opacity: 0 }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: introDone.current ? 0 : 1.9 }}
      onAnimationComplete={() => (introDone.current = true)}
    >
      <AnimatePresence>
        {panel && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label={panel === "dates" ? "Choose your dates" : "Choose guests"}
            className="kl-paper absolute bottom-full left-0 mb-3 w-full origin-bottom overflow-hidden rounded-[22px] p-5 shadow-[0_30px_60px_-30px_rgba(43,15,51,0.55),0_0_0_1px_rgba(36,20,58,0.08)] md:w-[380px]"
            style={{ left: panel === "guests" ? "auto" : undefined, right: panel === "guests" ? 0 : undefined }}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            {panel === "dates" ? (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <button
                    type="button"
                    aria-label="Previous month"
                    disabled={month === 0}
                    onClick={() => changeMonth(0)}
                    className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-(--linen) disabled:opacity-25"
                  >
                    <ChevronLeft size={17} strokeWidth={1.6} />
                  </button>
                  <div className="relative h-7 w-40 overflow-hidden text-center">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.p
                        key={month}
                        custom={direction}
                        className="font-display text-[20px]"
                        initial={{ x: direction * 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction * -60, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_OUT }}
                      >
                        {MONTHS[month].name} {MONTHS[month].year}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <button
                    type="button"
                    aria-label="Next month"
                    disabled={month === 1}
                    onClick={() => changeMonth(1)}
                    className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-(--linen) disabled:opacity-25"
                  >
                    <ChevronRight size={17} strokeWidth={1.6} />
                  </button>
                </div>
                <div className="grid grid-cols-7 text-center font-mono text-[10.5px] text-(--ink-soft)">
                  {WEEKDAYS.map((day) => (
                    <span key={day} className="pb-2">
                      {day}
                    </span>
                  ))}
                </div>
                <div className="relative overflow-hidden">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={month}
                      className="grid grid-cols-7 gap-y-1"
                      initial={{ x: direction * 80, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: direction * -80, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT }}
                    >
                      {Array.from({ length: (new Date(MONTHS[month].year, MONTHS[month].index, 1).getDay() + 6) % 7 }, (_, i) => (
                        <span key={`gap-${i}`} />
                      ))}
                      {Array.from({ length: MONTHS[month].days }, (_, i) => {
                        const day = month * 31 + i + 1;
                        const isStart = day === start;
                        const isEnd = day === previewEnd;
                        const inRange = previewEnd !== null && day > start && day < previewEnd;
                        const past = month === 0 && i + 1 < 4;
                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={past}
                            onClick={() => pick(day)}
                            onPointerEnter={() => end === null && setHover(day)}
                            aria-pressed={isStart || day === end}
                            aria-label={`${i + 1} ${MONTHS[month].name}`}
                            className="relative grid h-10 place-items-center text-[14px] disabled:text-(--ink)/25"
                          >
                            <span
                              aria-hidden
                              className={`absolute inset-y-1 transition-colors duration-300 ${
                                inRange ? "inset-x-0 bg-(--sun)/35" : isStart && previewEnd ? "right-0 left-1/2 bg-(--sun)/35" : isEnd ? "right-1/2 left-0 bg-(--sun)/35" : "inset-x-0"
                              }`}
                            />
                            {(isStart || isEnd) && (
                              <motion.span
                                layoutId={isStart ? "kl-cal-start" : "kl-cal-end"}
                                className="absolute inset-[3px] mx-auto aspect-square rounded-full bg-(--sea)"
                                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                              />
                            )}
                            <span className={`relative transition-colors duration-200 ${isStart || isEnd ? "text-(--cream)" : ""} ${!past && !isStart && !isEnd ? "hover:text-(--sea)" : ""}`}>
                              {i + 1}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <p className="mt-4 flex justify-between border-t border-(--ink)/10 pt-3 text-[13px] text-(--ink-soft)">
                  <span>{end ? `${nights} ${nights === 1 ? "night" : "nights"} by the sea` : "Now pick your last night"}</span>
                  {end && <span className="font-mono text-(--ink)">from {formatINR(nights * LOWEST_RATE)}</span>}
                </p>
              </div>
            ) : (
              <div>
                <p className="font-display text-[20px]">Who is coming?</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-[15px] font-medium">Guests</p>
                    <p className="text-[13px] text-(--ink-soft)">Our rooms sleep up to four</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Fewer guests"
                      disabled={guests === 1}
                      onClick={() => changeGuests(-1)}
                      className="grid h-10 w-10 place-items-center rounded-full border border-(--ink)/20 transition-[background-color,transform] duration-300 hover:bg-(--linen) active:scale-90 disabled:opacity-30"
                    >
                      <Minus size={15} strokeWidth={1.6} />
                    </button>
                    <span className="relative h-8 w-7 overflow-hidden text-center font-display text-[26px] leading-8" aria-live="polite">
                      <AnimatePresence initial={false} custom={guestDirection} mode="popLayout">
                        <motion.span
                          key={guests}
                          className="absolute inset-0"
                          initial={{ y: guestDirection * 28, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: guestDirection * -28, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE_OUT }}
                        >
                          {guests}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <button
                      type="button"
                      aria-label="More guests"
                      disabled={guests === 4}
                      onClick={() => changeGuests(1)}
                      className="grid h-10 w-10 place-items-center rounded-full border border-(--ink)/20 transition-[background-color,transform] duration-300 hover:bg-(--linen) active:scale-90 disabled:opacity-30"
                    >
                      <Plus size={15} strokeWidth={1.6} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex gap-1.5" aria-hidden>
                  {[1, 2, 3, 4].map((seat) => (
                    <motion.span
                      key={seat}
                      className="h-1.5 flex-1 rounded-full bg-(--sea)"
                      animate={{ opacity: seat <= guests ? 1 : 0.14, scaleY: seat <= guests ? 1 : 0.6 }}
                      transition={{ duration: 0.4, ease: EASE_OUT }}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center rounded-full bg-(--cream) p-1.5 shadow-[0_24px_50px_-24px_rgba(43,15,51,0.6),0_0_0_1px_rgba(36,20,58,0.08)]">
        <button
          type="button"
          onClick={() => setPanel(panel === "dates" ? null : "dates")}
          aria-expanded={panel === "dates"}
          className={`flex min-w-0 flex-1 items-center gap-3 rounded-full px-4 py-2 text-left transition-colors duration-300 md:px-5 ${panel === "dates" ? "bg-(--linen)" : "hover:bg-(--linen)/60"}`}
        >
          <span className="min-w-0">
            <span className="block text-[11.5px] text-(--ink-soft)">Arrive</span>
            <span className="block truncate text-[14.5px] font-medium">
              {startLabel.weekday} {startLabel.date} {startLabel.month}
            </span>
          </span>
          <svg viewBox="0 0 28 10" className="h-2.5 w-7 shrink-0 text-(--sea)" aria-hidden>
            <path d="M1 5c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3M22 1.5 26 5l-4 3.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="min-w-0">
            <span className="block text-[11.5px] text-(--ink-soft)">Leave</span>
            <span className="block truncate text-[14.5px] font-medium">{endLabel ? `${endLabel.weekday} ${endLabel.date} ${endLabel.month}` : "Pick a day"}</span>
          </span>
        </button>
        <span className="mx-1 h-8 w-px bg-(--ink)/10" aria-hidden />
        <button
          type="button"
          onClick={() => setPanel(panel === "guests" ? null : "guests")}
          aria-expanded={panel === "guests"}
          className={`hidden rounded-full px-4 py-2 text-left transition-colors duration-300 sm:block ${panel === "guests" ? "bg-(--linen)" : "hover:bg-(--linen)/60"}`}
        >
          <span className="block text-[11.5px] text-(--ink-soft)">Guests</span>
          <span className="block text-[14.5px] font-medium">
            {guests} {guests === 1 ? "guest" : "guests"}
          </span>
        </button>
        <Magnetic strength={0.25} className="ml-1 shrink-0">
          <button
            type="button"
            onClick={check}
            className="group relative flex h-12 items-center gap-2 overflow-hidden rounded-full bg-(--sun) px-5 text-[14.5px] font-semibold text-(--ink) md:px-6"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-(--sea) transition-transform duration-500 ease-(--ease-out) group-hover:scale-y-100" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={status}
                className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-(--cream)"
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              >
                {status === "idle" && (
                  <>
                    <span className="hidden md:inline">Check availability</span>
                    <span className="md:hidden">Check</span>
                  </>
                )}
                {status === "checking" && (
                  <>
                    <svg viewBox="0 0 20 20" className="kl-spin h-4 w-4" style={{ animationDuration: "1s" }} aria-hidden>
                      <circle cx="10" cy="10" r="4" fill="currentColor" />
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
                        <line key={r} x1="10" y1="1.5" x2="10" y2="3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${r} 10 10)`} />
                      ))}
                    </svg>
                    Asking the tide
                  </>
                )}
                {status === "done" && (
                  <>
                    <span>4 rooms free</span>
                    <span className="hidden font-mono text-[12px] font-normal md:inline">from {formatINR(nights * LOWEST_RATE)}</span>
                  </>
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </Magnetic>
      </div>
    </motion.div>
  );
}
