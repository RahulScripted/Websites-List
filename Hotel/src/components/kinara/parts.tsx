import { useEffect, useState, type PointerEvent, type ReactNode } from "react";
import { getLenis } from "@/components/ui/smooth-scroll";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener("change", update);
    return () => list.removeEventListener("change", update);
  }, [query]);
  return matches;
}

export function useFinePointer() {
  return useMediaQuery("(hover: hover) and (pointer: fine) and (min-width: 768px)");
}

// Turns scroll progress (0..1) into a clock between sunrise and dusk, so the whole page reads as one day.
export const DAY_START = 6.8;
export const DAY_END = 20.6;
export function progressToHour(progress: number) {
  return DAY_START + (DAY_END - DAY_START) * Math.min(1, Math.max(0, progress));
}
export function formatHour(hour: number) {
  const total = Math.round(hour * 60);
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
export function partOfDay(hour: number) {
  if (hour < 10) return "Morning";
  if (hour < 14) return "Midday";
  if (hour < 18) return "Afternoon";
  if (hour < 19.9) return "Golden hour";
  return "Dusk";
}

// Lines rise from behind their own box; the wrapper is observed because clipped lines never count as visible.
export function RiseLines({
  lines,
  className,
  accent = [],
  delay = 0,
}: {
  lines: string[];
  className?: string;
  accent?: number[];
  delay?: number;
}) {
  return (
    <motion.span className={`block ${className ?? ""}`} initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.5 }}>
      {lines.map((line, index) => (
        <span key={line + index} className="block overflow-hidden pb-[0.1em]">
          <motion.span
            className={`block ${accent.includes(index) ? "text-(--sea)" : ""}`}
            variants={{ hidden: { y: "105%", rotate: 2 }, shown: { y: "0%", rotate: 0 } }}
            transition={{ duration: 1.05, ease: EASE_OUT, delay: delay + index * 0.09 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const reduce = useReducedMotion();
  const spring = { stiffness: 200, damping: 18, mass: 0.5 };
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  }

  return (
    <motion.div
      className={`inline-flex ${className ?? ""}`}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

// Photo with a linen fallback, so the layout keeps its shape while images are missing or still loading.
export function Photo({
  src,
  alt,
  position = "50% 50%",
  className,
  priority,
}: {
  src: string;
  alt: string;
  position?: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <span className={`block bg-(--linen) ${className ?? ""}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          style={{ objectPosition: position }}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          draggable={false}
        />
      )}
    </span>
  );
}

// Brand mark: a sun sitting on two lines of swell.
export function SunMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <circle cx="16" cy="13" r="7" fill="var(--sun)" />
      <path d="M3 20c3.3 0 3.3-2 6.5-2s3.3 2 6.5 2 3.3-2 6.5-2 3.3 2 6.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 25c3.3 0 3.3-2 6.5-2s3.3 2 6.5 2 3.3-2 6.5-2 3.3 2 6.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Perforated stamp edge comes from a radial mask, so any colour or photo inside looks torn from a sheet.
export function Stamp({ color, label, className }: { color: string; label: string; className?: string }) {
  return (
    <span className={`kl-stamp relative block p-[6px] ${className ?? ""}`}>
      <span className="flex h-full w-full flex-col items-center justify-between p-1.5 text-(--cream)" style={{ backgroundColor: color }}>
        <SunMark className="h-7 w-7 text-(--cream)" />
        <span className="font-mono text-[9px] leading-none">{label}</span>
      </span>
    </span>
  );
}

// Circular postmark with wavy cancel lines.
export function Postmark({ text, className }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 160 80" className={className} aria-hidden>
      <defs>
        <path id="kl-postmark-ring" d="M40 40 m-27 0 a27 27 0 1 1 54 0 a27 27 0 1 1 -54 0" />
      </defs>
      <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="40" r="21" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fontSize="7.5" fill="currentColor" letterSpacing="1.6" fontFamily="DM Mono, monospace">
        <textPath href="#kl-postmark-ring">{text}</textPath>
      </text>
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M76 ${22 + i * 12} q10 -6 20 0 t20 0 t20 0 t20 0`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      ))}
    </svg>
  );
}

export function scrollToTop(event?: { preventDefault: () => void }) {
  event?.preventDefault();
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(0, { duration: Math.min(2, 0.9 + window.scrollY / 9000) });
  else window.scrollTo({ top: 0, behavior: "instant" });
}

// Marigold toran: the leaf-and-flower garland hung over Indian doorways, repeated as a divider.
export function Toran({ className }: { className?: string }) {
  return (
    <svg className={`block h-12 w-full ${className ?? ""}`} aria-hidden>
      <defs>
        <pattern id="kl-toran" width="56" height="48" patternUnits="userSpaceOnUse">
          <path d="M0 4 Q28 12 56 4" fill="none" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1.2" />
          <path d="M28 9 C20 18 21 30 28 40 C35 30 36 18 28 9Z" fill="#3c7a5a" />
          <path d="M28 14 V36" stroke="#fff6e5" strokeOpacity="0.45" strokeWidth="1" />
          <circle cx="28" cy="43" r="4.6" fill="var(--sun)" />
          <circle cx="28" cy="43" r="1.8" fill="var(--coral)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kl-toran)" />
    </svg>
  );
}
