import { Fragment, cloneElement, isValidElement, useEffect, useRef, useState, type ReactElement } from "react";
import { statementItems } from "@/components/quillo/sections/statementItems";

/** The about statement: each word and picture lights up as the paragraph scrolls through the screen. */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      setLit(Math.round(progress * statementItems.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={ref} className="ql-statement">
      {statementItems.map((item, index) => {
        const on = index < lit ? " ql-on" : "";
        const space = index > 0 && item !== "." ? " " : "";
        return (
          <Fragment key={index}>
            {space}
            {typeof item === "string" ? (
              <span className={"ql-w" + on}>{item}</span>
            ) : isValidElement(item) ? (
              cloneElement(item as ReactElement<{ className?: string }>, { className: ((item.props as { className?: string }).className ?? "") + " ql-w" + on })
            ) : null}
          </Fragment>
        );
      })}
    </p>
  );
}
