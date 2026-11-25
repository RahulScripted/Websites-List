import { useEffect, useRef, useState, type CSSProperties, type ElementType, type PointerEvent, type ReactNode } from "react";

/** Adds ql-in once the element has been seen, and only once. */
function useSeen(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

type Tag = ElementType;

/** An element that gains ql-in when it scrolls into view. Use `reveal` for the fade-up entrance. */
export function InView({ as: Component = "div", className = "", reveal, children }: { as?: Tag; className?: string; reveal?: boolean; children: ReactNode }) {
  const [ref, seen] = useSeen();
  return (
    <Component ref={ref} className={[className, reveal && "ql-reveal", seen && "ql-in"].filter(Boolean).join(" ")}>
      {children}
    </Component>
  );
}

export function Reveal(props: { as?: Tag; className?: string; children: ReactNode }) {
  return <InView {...props} reveal />;
}

/**
 * Text split into letters that fly in one after another. `text` uses | for a line break.
 * With `chars` every letter is also a hover target that hops away from the cursor.
 */
export function Split({ as: Component = "span", className = "", text, up, chars }: { as?: Tag; className?: string; text: string; up?: boolean; chars?: boolean }) {
  const [ref, seen] = useSeen();
  const [settled, setSettled] = useState(false);
  // After the entrance, drop the stagger so the hover hop is instant.
  useEffect(() => {
    if (!chars) return;
    const id = window.setTimeout(() => setSettled(true), 2600);
    return () => window.clearTimeout(id);
  }, [chars]);

  let index = 0;
  const lines = text.split("|");
  return (
    <Component ref={ref} className={["ql-split", up && "ql-up", seen && "ql-in", className].filter(Boolean).join(" ")} aria-label={text.replace("|", " ")}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} aria-hidden="true">
          {lineIndex > 0 && <br />}
          {line.split(" ").map((word, wordIndex, words) => (
            <span key={wordIndex}>
              <span style={{ whiteSpace: "nowrap" }}>
                {[...word].map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className={"ql-c" + (chars ? " ql-ch" : "")}
                    style={{ transitionDelay: settled ? "0ms" : `${index++ * 35}ms` } as CSSProperties}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              {wordIndex < words.length - 1 && " "}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}

/** A live clock in the visitor's own timezone. */
export function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return <span>{new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(now)}</span>;
}

/** Two eyes that look at the cursor. */
export function Eyes() {
  const left = useRef<HTMLElement>(null);
  const right = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event: globalThis.PointerEvent) => {
      for (const eye of [left.current, right.current]) {
        if (!eye) continue;
        const r = eye.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const angle = Math.atan2(event.clientY - cy, event.clientX - cx);
        const distance = Math.min(10, Math.hypot(event.clientX - cx, event.clientY - cy) / 30);
        eye.style.transform = `translate(${Math.cos(angle) * distance}px,${Math.sin(angle) * distance}px)`;
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div className="ql-eyes">
      <i ref={left} className="ql-eye"></i>
      <i ref={right} className="ql-eye"></i>
    </div>
  );
}

/** A reaction chip that counts one more while it is switched on. */
export function ReactButton() {
  const [on, setOn] = useState(false);
  return (
    <button className="ql-react ql-mono" type="button" aria-pressed={on} onClick={() => setOn((value) => !value)}>
      <svg viewBox="0 0 357 357" fill="#17b3c6">
        <path d="M161.3 0H279.8L203 101.6H346.8L92 355.5L169.7 184.3H26.7Z" />
      </svg>
      <span>{1 + (on ? 1 : 0)}</span>
    </button>
  );
}

/** A photo card you can pick up and drop anywhere; it tilts a little while held. */
export function Polaroid({ variant, children }: { variant: "p1" | "p2"; children: ReactNode }) {
  const rotation = variant === "p1" ? 12 : -14;
  const origin = useRef({ x: 0, y: 0 });
  const [offset, setOffset] = useState<{ x: number; y: number } | null>(null);
  const [held, setHeld] = useState(false);

  const down = (event: PointerEvent<HTMLDivElement>) => {
    const start = offset ?? { x: 0, y: 0 };
    origin.current = { x: event.clientX - start.x, y: event.clientY - start.y };
    event.currentTarget.setPointerCapture(event.pointerId);
    setHeld(true);
    setOffset(start);
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!held) return;
    setOffset({ x: event.clientX - origin.current.x, y: event.clientY - origin.current.y });
  };
  const up = () => setHeld(false);

  const style: CSSProperties | undefined = offset
    ? { zIndex: 10, transform: `translate(${offset.x}px,${offset.y}px) rotate(${held ? rotation * 0.3 : rotation}deg)` }
    : undefined;

  return (
    <div className={`ql-polaroid ql-${variant}`} style={style} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
      {children}
    </div>
  );
}

/** The thinking-bubble loader that wipes away once the page has loaded. */
export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const finish = () => window.setTimeout(() => setDone(true), 700);
    let id = 0;
    if (document.readyState === "complete") id = finish();
    else window.addEventListener("load", () => (id = finish()), { once: true });
    const fallback = window.setTimeout(() => setDone(true), 2500);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(fallback);
    };
  }, []);
  return (
    <div className={"ql-loader" + (done ? " ql-done" : "")} aria-hidden={done}>
      <div className="ql-bubble">
        Thinking{" "}
        <span className="ql-dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
}
