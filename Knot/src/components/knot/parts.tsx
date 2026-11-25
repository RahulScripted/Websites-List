import { useCallback, useEffect, useRef, useState } from "react";
import NumberFlow, { type Format } from "@number-flow/react";
import { motion, useInView } from "motion/react";
import { toast } from "sonner";

export const spring = { type: "spring", bounce: 0.18, duration: 0.5 } as const;

/** A soft pill that slides between the options of a segmented control. */
export function Pill({
  id,
  className = "pill",
}: {
  id: string;
  className?: string;
}) {
  return (
    <motion.span
      layoutId={id}
      className={className}
      transition={spring}
      aria-hidden="true"
    />
  );
}

/** Number that counts up from zero the first time it scrolls into view. */
export function CountIn({
  value,
  format,
  prefix,
  suffix,
  className,
  locales = "en-IN",
}: {
  value: number;
  format?: Format;
  prefix?: string;
  suffix?: string;
  className?: string;
  locales?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  return (
    <span ref={ref} className={className}>
      <NumberFlow
        value={inView ? value : 0}
        format={format}
        prefix={prefix}
        suffix={suffix}
        locales={locales}
      />
    </span>
  );
}

/**
 * Scroll spy for the header. The last section whose top has passed the
 * header wins. Clicking a link selects it immediately and holds it until
 * the smooth scroll settles, so the pill never flickers through the
 * sections in between.
 */
export function useActiveSection(ids: string[], offset = 140) {
  const [active, setActive] = useState<string | null>(null);
  const hold = useRef<string | null>(null);
  const timer = useRef<number>(0);
  const key = ids.join(",");

  useEffect(() => {
    const list = key.split(",");
    const update = () => {
      if (hold.current) return;
      let current: string | null = null;
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActive(current);
    };
    const release = () => {
      const id = hold.current;
      if (!id) return;
      // Only let go once the clicked section has actually arrived (or the
      // page cannot scroll any further).
      const top = document.getElementById(id)?.getBoundingClientRect().top ?? 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (Math.abs(top - offset) > offset && !atBottom) return;
      hold.current = null;
      update();
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scrollend", release);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("scrollend", release);
      window.removeEventListener("resize", update);
    };
  }, [key, offset]);

  const select = useCallback((id: string) => {
    hold.current = id;
    setActive(id);
    window.clearTimeout(timer.current);
    // Fallback for browsers without the scrollend event.
    timer.current = window.setTimeout(() => {
      hold.current = null;
    }, 1600);
  }, []);

  return { active, select };
}

/** Toast shown by every call to action: nothing here is connected to a real service. */
export const concept = () =>
  toast("Knot is a concept by LN", {
    description: "Nothing to sign up for. The canvas above is the whole demo.",
  });

/** Fades sections in the first time they scroll into view. Elements opt in with `data-reveal`. */
export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => (el.dataset.visible = "true"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}


export function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      className="switch"
      onClick={() => onChange(!checked)}
    >
      <motion.i
        layout
        transition={{ type: "spring", bounce: 0.4, duration: 0.4 }}
      />
    </button>
  );
}


/** Two linked rings: a knot. Lime over lilac at the top crossing, lilac over lime at the bottom. */
export function Logo() {
  return (
    <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="0.5" y="0.5" width="31" height="31" rx="9" fill="#10153A" />
      <circle cx="19.5" cy="16" r="6.5" fill="none" stroke="#BCB0FF" strokeWidth="2.6" />
      <circle cx="12.5" cy="16" r="6.5" fill="none" stroke="#CDF25B" strokeWidth="2.6" />
      <path d="M14.18 9.72A6.5 6.5 0 0 1 17.48 11.82" fill="none" stroke="#10153A" strokeWidth="5.4" />
      <path d="M14.18 9.72A6.5 6.5 0 0 1 17.48 11.82" fill="none" stroke="#CDF25B" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M17.82 22.28A6.5 6.5 0 0 1 14.52 20.18" fill="none" stroke="#10153A" strokeWidth="5.4" />
      <path d="M17.82 22.28A6.5 6.5 0 0 1 14.52 20.18" fill="none" stroke="#BCB0FF" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}
