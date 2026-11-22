import type { ReactNode } from "react"
import type { Collaborator, CSSVars } from "@/types/swarm"

/** Text that can be typed: a screen-reader copy, a ghost that holds the layout, and the live copy. */
export function Ty({ children, block, sr = true, className, k }: { children: ReactNode; block?: boolean; sr?: boolean; className?: string; k?: string }) {
  return (
    <span className={"ov-ty" + (block ? " ov-ty-b" : "") + (className ? " " + className : "")} data-k={k}>
      {sr && <span className="ov-sr">{children}</span>}
      <span className="ov-ty-ghost" aria-hidden="true">{children}</span>
      <span className="ov-ty-live" aria-hidden="true"><span className="ov-ty-txt" /><i className="ov-caret" /></span>
    </span>
  )
}

const GLYPHS = (
  <>
    <svg className="ov-gl ov-gl-arrow" width="22" height="22" viewBox="0 0 22 22"><path d="M1.6 1.6v15.6l4.3-4.1 3.1 6.6 2.9-1.3-3-6.5h6.1z" fill="var(--c)" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /></svg>
    <svg className="ov-gl ov-gl-text" width="14" height="24" viewBox="0 0 14 24"><path d="M2.5 2h3.5M8 2h3.5M7 2.5v19M2.5 22h3.5M8 22h3.5" fill="none" stroke="#fff" strokeWidth="4.2" strokeLinecap="round" /><path d="M2.5 2h3.5M8 2h3.5M7 2.5v19M2.5 22h3.5M8 22h3.5" fill="none" stroke="var(--c)" strokeWidth="1.8" strokeLinecap="round" /></svg>
    <svg className="ov-gl ov-gl-cross" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1v22M1 12h22" stroke="#fff" strokeWidth="4" /><path d="M12 1v22M1 12h22" stroke="var(--c)" strokeWidth="1.6" /></svg>
    <svg className="ov-gl ov-gl-pen" width="22" height="22" viewBox="0 0 22 22"><path d="M1.5 20.5l3.2-9.4 8.6-8.6 6.2 6.2-8.6 8.6z" fill="var(--c)" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="8.2" cy="13.8" r="1.6" fill="#fff" /><path d="M1.5 20.5l5.6-5.6" stroke="#fff" strokeWidth="1.2" /></svg>
    <svg className="ov-gl ov-gl-drop" width="22" height="22" viewBox="0 0 22 22"><path d="M2 20l1.1-4.4 9.3-9.3 3.3 3.3-9.3 9.3z" fill="var(--dc,#fff)" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" /><path d="M12 4.6l2.4-2.4a2.4 2.4 0 013.4 3.4l-2.4 2.4 1.2 1.2-1.8 1.8-5.6-5.6 1.8-1.8z" fill="var(--c)" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" /></svg>
    <svg className="ov-gl ov-gl-grab" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1.5l3.2 3.6h-2.1v5.8h5.8V8.8l3.6 3.2-3.6 3.2v-2.1h-5.8v5.8h2.1L12 22.5l-3.2-3.6h2.1v-5.8H5.1v2.1L1.5 12l3.6-3.2v2.1h5.8V5.1H8.8z" fill="var(--c)" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" /></svg>
    <svg className="ov-gl ov-gl-size" width="24" height="24" viewBox="0 0 24 24"><path d="M3 3h7.5L8 5.5l10.5 10.5 2.5-2.5V21h-7.5l2.5-2.5L5.5 8 3 10.5z" fill="var(--c)" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round" /></svg>
  </>
)

/** The collaborator cursors and their selection frames for one stage. */
export function Hands({ crew, ids }: { crew: Collaborator[]; ids: number[] }) {
  return (
    <div className="ov-hands" aria-hidden="true">
      {ids.map((id, i) => (
        <div key={"f" + i} className="ov-frm" style={{ "--c": crew[id % crew.length].color } as CSSVars}><b /></div>
      ))}
      {ids.map((id, i) => {
        const m = crew[id % crew.length]
        return (
          <div key={"h" + i} className="ov-hand" data-tool="arrow" style={{ "--c": m.color, "--ct": m.ink ?? "#fff" } as CSSVars}>
            <div className="ov-hg">
              {GLYPHS}
              <span className="ov-tag">{m.name}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function Crops() {
  return (
    <div className="ov-crops" aria-hidden="true">
      {["tl", "tr", "bl", "br"].map((c) => (
        <span key={c} className={"ov-crop ov-crop-" + c}><i className="ov-cx" data-k="crop-x" /><i className="ov-cy" data-k="crop-y" /></span>
      ))}
    </div>
  )
}
