import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { EASE_OUT, SunMark, scrollToTop, formatHour, partOfDay, progressToHour, DAY_END, DAY_START } from "@/components/kinara/parts";
import { navLinks } from "@/components/kinara/content";

export function openBooking() {
  window.dispatchEvent(new CustomEvent("kl:open-booking"));
}

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hour, setHour] = useState(DAY_START);

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 40));
  // Rounded to five minutes so the clock ticks like a real one instead of re-rendering on every pixel.
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.round(progressToHour(value) * 12) / 12;
    setHour((previous) => (previous === next ? previous : next));
  });

  const t = (hour - DAY_START) / (DAY_END - DAY_START);
  const angle = Math.PI * (1 - t);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 1.6 }}
    >
      <div
        className={`mx-3 mt-3 flex max-w-[1360px] items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-[background-color,box-shadow] duration-500 md:mx-6 md:px-5 xl:mx-auto ${
          scrolled ? "bg-(--cream) shadow-[0_1px_0_rgba(36,20,58,0.08),0_10px_30px_-18px_rgba(36,20,58,0.35)]" : "bg-transparent"
        }`}
      >
        <a href="#top" onClick={scrollToTop} className="group flex items-center gap-2.5">
          <SunMark className="h-8 w-8 text-(--sea) transition-transform duration-700 ease-(--ease-out) group-hover:-translate-y-0.5 group-hover:rotate-[-8deg]" />
          <span className="font-display text-[19px] leading-none tracking-[-0.01em]">Kinara &amp; Lehar</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[14px] text-(--ink-soft) lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="kl-link transition-colors duration-300 hover:text-(--ink)">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-2.5 rounded-full border border-(--ink)/12 py-1.5 pr-3.5 pl-2 sm:flex" aria-label={`Time of day on the page: ${formatHour(hour)}`}>
            <svg viewBox="0 0 36 20" className="h-5 w-9" aria-hidden>
              <path d="M3 18 A15 15 0 0 1 33 18" fill="none" stroke="var(--ink)" strokeOpacity="0.25" strokeDasharray="2 2.5" />
              <line x1="1" y1="18" x2="35" y2="18" stroke="var(--sea)" strokeWidth="1.4" />
              <circle cx={18 + 15 * Math.cos(angle)} cy={18 - 15 * Math.sin(angle)} r="3.4" fill={hour > 18.5 ? "var(--coral)" : "var(--sun)"} />
            </svg>
            <span className="font-mono text-[12px] tabular-nums">{formatHour(hour)}</span>
            <span className="hidden text-[12px] text-(--ink-soft) md:inline">{partOfDay(hour)}</span>
          </div>
          <button
            type="button"
            onClick={openBooking}
            className="group relative overflow-hidden rounded-full bg-(--sea) px-4 py-2 text-[14px] font-medium text-(--cream)"
          >
            <span className="absolute inset-0 translate-y-full rounded-full bg-(--ink) transition-transform duration-500 ease-(--ease-out) group-hover:translate-y-0" />
            <span className="relative">Book a room</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
