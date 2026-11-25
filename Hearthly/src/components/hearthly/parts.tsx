import type { ReactNode } from "react";

/** The up-right arrow that nudges on hover inside .hy-btn. */
export function Arrow() {
  return (
    <svg className="hy-btn__arr" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 9 9 3M4 3h5v5" />
    </svg>
  );
}

/** A round icon button face used as a decoration inside links and summaries. */
export function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <span>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 1.5 13.5 4v4c0 3.2-2.3 5.6-5.5 6.5C4.8 13.6 2.5 11.2 2.5 8V4z" />
        <path d="m5.5 8 1.8 1.8L10.8 6" />
      </svg>
      {children}
    </span>
  );
}
