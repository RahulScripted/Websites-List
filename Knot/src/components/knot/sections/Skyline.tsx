import { ParallaxComponent, type ParallaxLayer } from "@/components/ui/parallax-scrolling";

/** A step card in the style of the canvas demo, so the band shows the product instead of stock photography. */
function Node({ kind, title, detail, c }: { kind: string; title: string; detail: string; c: "yellow" | "blue" | "pink" }) {
  return (
    <span className="sky-node" data-c={c}>
      <span className="sky-node-kind mono">{kind}</span>
      <strong>{title}</strong>
      <small className="mono">{detail}</small>
    </span>
  );
}

function Chip({ icon, label, c }: { icon: string; label: string; c?: string }) {
  return (
    <span className="sky-chip" data-c={c}>
      <i aria-hidden>{icon}</i>
      {label}
    </span>
  );
}

// Back to front: far layers travel further than near ones, but never past their own margin to the band edge,
// so nothing is clipped. The title is last in the list, so it always sits in front.
const LAYERS: ParallaxLayer[] = [
  { id: "far", yPercent: 12, className: "left-[5%] top-[12%] w-[40%] md:left-[9%] md:w-[20%]", children: <Node kind="When" title="Payment received" detail="event: upi.success" c="yellow" /> },
  { id: "mid", yPercent: 8, className: "right-[5%] top-[8%] w-[40%] md:right-[10%] md:w-[20%]", children: <Node kind="AI step" title="Write the receipt" detail="tone: warm" c="blue" /> },
  { id: "chip-a", yPercent: 20, className: "left-[3%] bottom-[9%] md:left-[9%]", children: <Chip icon="₹" label="₹4,900 received" /> },
  { id: "chip-b", yPercent: 14, className: "right-[3%] top-[46%] md:right-[17%]", children: <Chip icon="✓" label="Receipt sent on WhatsApp" c="blue" /> },
  { id: "near", yPercent: -6, className: "left-[38%] bottom-[5%] w-[40%] md:left-[40%] md:w-[20%]", children: <Node kind="Then" title="Log it in Sheets" detail="row 1,285" c="pink" /> },
  { id: "chip-c", yPercent: -10, className: "right-[7%] bottom-[10%] md:right-[22%]", children: <Chip icon="↻" label="Run complete in 2.4s" c="pink" /> },
  {
    id: "title",
    yPercent: 4,
    className: "inset-x-0 top-1/2 -translate-y-1/2 px-5 text-center",
    children: (
      <>
        <p className="mono sky-kicker">एक वाक्य, पूरा काम</p>
        <h2 className="sky-title">
          Say it once<em>.</em>
        </h2>
      </>
    ),
  },
];

export function Skyline() {
  return (
    <section aria-label="Say it once" className="sky">
      <ParallaxComponent layers={LAYERS} className="sky-band" />
    </section>
  );
}
