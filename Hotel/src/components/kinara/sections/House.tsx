import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { EASE_OUT, FadeUp } from "@/components/kinara/parts";

// Highlighted phrases get a yellow brush stroke that paints in from the left when the paragraph arrives.
function Brush({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="relative inline-block md:whitespace-nowrap">
      <motion.span
        aria-hidden
        className="absolute inset-x-[-0.08em] bottom-[0.06em] -z-10 h-[0.42em] origin-left rounded-[0.2em] bg-(--sun)/70"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.9, ease: EASE_OUT, delay }}
      />
      {children}
    </span>
  );
}

// An Indian tile: a rangoli corner that closes into a circle with its neighbours, and a paisley (boteh) that does not.
// Rotating one tile breaks the circle, which is the game.
function TileArt({ glazed }: { glazed: boolean }) {
  const main = glazed ? "var(--sun)" : "var(--sea)";
  const soft = glazed ? "var(--coral)" : "var(--sea-soft)";
  const deep = glazed ? "var(--coral)" : "var(--water)";
  const fade = "transition-[fill,stroke] duration-500";
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <rect width="100" height="100" fill="#fff3dc" />
      {/* Rangoli corner: three nested quarter rings, completed by the four neighbouring tiles. */}
      <path d="M0 0 H38 A38 38 0 0 1 0 38 Z" fill={main} className={fade} />
      <path d="M0 0 H27 A27 27 0 0 1 0 27 Z" fill="#fff3dc" />
      <path d="M0 0 H17 A17 17 0 0 1 0 17 Z" fill={deep} className={fade} />
      <path d="M0 0 H7 A7 7 0 0 1 0 7 Z" fill="#fff3dc" />
      {/* Petal scallops along the edge facing the circle. */}
      {[44, 52, 60].map((x) => (
        <circle key={x} cx={x} cy="3.5" r="2.4" fill={soft} className={fade} />
      ))}
      {[44, 52, 60].map((y) => (
        <circle key={y} cx="3.5" cy={y} r="2.4" fill={soft} className={fade} />
      ))}
      {/* Paisley: the curl of a mango motif, with a lotus bud inside. */}
      <g transform="translate(14 12)">
        <path
          d="M44 76C22 76 18 52 32 38c7-7 9-13 6-20 15 4 29 18 28 38-1 12-9 20-22 20Z"
          fill={main}
          className={fade}
        />
        <path d="M44 68c-12 0-15-12-8-20 4-4 6-8 5-12 9 3 16 11 15 21-1 7-5 11-12 11Z" fill="#fff3dc" />
        <path d="M44 62c-5 0-6-5-3-8 2-2 3-4 3-6 4 2 7 6 6 10-1 3-3 4-6 4Z" fill={deep} className={fade} />
        <circle cx="44" cy="57" r="2.2" fill={soft} className={fade} />
      </g>
      {/* Marigold dots in the opposite corner. */}
      <circle cx="90" cy="90" r="4" fill={soft} className={fade} />
      <circle cx="80" cy="93" r="2" fill={main} className={fade} />
      <circle cx="93" cy="80" r="2" fill={main} className={fade} />
      <rect x="0.5" y="0.5" width="99" height="99" fill="none" stroke="#24143a" strokeOpacity="0.1" />
    </svg>
  );
}

// Groups of four start rotated into rosettes, so the wall reads as one pattern until someone plays with it.
const START = Array.from({ length: 16 }, (_, i) => {
  const row = Math.floor(i / 4);
  const col = i % 4;
  return [[0, 90], [270, 180]][row % 2][col % 2] + 180;
});

function TileWall() {
  const [turns, setTurns] = useState(START);
  const [glazed, setGlazed] = useState<boolean[]>(() => Array(16).fill(false));

  const turn = (index: number) => setTurns((all) => all.map((value, i) => (i === index ? value + 90 : value)));

  return (
    <div>
      <div className="grid grid-cols-4 overflow-hidden rounded-[10px] shadow-[0_30px_60px_-36px_rgba(43,15,51,0.6)]">
        {turns.map((rotation, index) => (
          <motion.button
            key={index}
            type="button"
            aria-label={`Tile ${index + 1}, ${glazed[index] ? "marigold" : "teal"}`}
            aria-pressed={glazed[index]}
            className="aspect-square"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: (Math.floor(index / 4) + (index % 4)) * 0.06 }}
            onPointerEnter={(event) => event.pointerType === "mouse" && turn(index)}
            onClick={() => setGlazed((all) => all.map((value, i) => (i === index ? !value : value)))}
          >
            <motion.span className="block h-full w-full" animate={{ rotate: rotation }} transition={{ duration: 0.7, ease: EASE_OUT }}>
              <TileArt glazed={glazed[index]} />
            </motion.span>
          </motion.button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 text-[13px] text-(--ink-soft)">
        <p>Hover to turn a tile, click to glaze it marigold.</p>
        <button
          type="button"
          className="kl-link shrink-0 text-(--ink)"
          onClick={() => {
            setTurns((all) => all.map((value, i) => value + ((((START[i] - value) % 360) + 360) % 360)));
            setGlazed(Array(16).fill(false));
          }}
        >
          Set the wall again
        </button>
      </div>
    </div>
  );
}

const facts = [
  { value: "1934", text: "built as a Parsi merchant's sea-facing bungalow" },
  { value: "92", text: "steps from the Gateway of India promenade" },
  { value: "0", text: "televisions, on purpose" },
];

export function House() {
  return (
    <section id="house" className="px-5 pt-24 pb-28 md:px-10 md:pt-36 md:pb-40">
      <div className="mx-auto grid max-w-[1360px] grid-cols-12 gap-x-6 gap-y-14">
        <div className="col-span-12 lg:col-span-7">
          <FadeUp>
            <p className="font-display max-w-[24ch] text-[clamp(1.9rem,3.3vw,3.15rem)] leading-[1.12] tracking-[-0.02em]">
              An old Parsi bungalow on the Colaba sea face, <Brush>lime-washed every monsoon</Brush>, with nine rooms, one long table and the Arabian Sea{" "}
              <Brush delay={0.25}>in every window.</Brush>
            </p>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-10 grid max-w-[640px] gap-8 sm:grid-cols-2">
            <p className="text-[16px] leading-[1.65] text-(--ink-soft)">
              The Mehta family restored the house by hand over four winters, with lime from Kutch, handloom linen from Maheshwar and
              encaustic tiles salvaged from old Fort bungalows.
            </p>
            <p className="text-[16px] leading-[1.65] text-(--ink-soft)">
              There is no reception desk. There is a kitchen door that is always open, a brass bowl of keys and a tide table pinned beside every bed.
            </p>
          </FadeUp>
          <ul className="mt-14 grid max-w-[720px] gap-6 border-t border-(--ink)/12 pt-8 sm:grid-cols-3">
            {facts.map((fact, index) => (
              <FadeUp key={fact.value} delay={0.1 + index * 0.08}>
                <li>
                  <p className="font-display text-[44px] leading-none text-(--sea)">{fact.value}</p>
                  <p className="mt-2 max-w-[20ch] text-[14px] leading-[1.5] text-(--ink-soft)">{fact.text}</p>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-8 lg:pt-4">
          <TileWall />
        </div>
      </div>
    </section>
  );
}
