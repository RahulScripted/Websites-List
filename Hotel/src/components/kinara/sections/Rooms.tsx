import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EASE_OUT, FadeUp, Postmark, RiseLines, Stamp } from "@/components/kinara/parts";
import { formatINR, rooms, type Room } from "@/components/kinara/content";
import { openBooking } from "@/components/kinara/sections/Nav";

// A loose pile: every card keeps its own resting angle so the stack never looks machine-aligned.
const TILTS = [-2.5, 3.5, -5, 4.5, -1.5];

function Front({ room }: { room: Room }) {
  return (
    <div className="kl-paper absolute inset-0 rounded-[6px] p-2.5 [backface-visibility:hidden] md:p-3">
      <div className="relative h-full w-full overflow-hidden rounded-[3px]">
        {/* A solid colour per room instead of a photo: the tint fades into a deeper shade of itself. */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 90% at 85% 0%, color-mix(in srgb, ${room.tint} 70%, white) 0%, transparent 55%), linear-gradient(155deg, ${room.tint} 0%, color-mix(in srgb, ${room.tint} 62%, black) 100%)`,
          }}
        />
        <span className="absolute top-3 right-3 grid h-11 w-11 place-items-center rounded-full bg-(--sun) font-mono text-[12px] text-(--ink)">{room.number}</span>
        <div className="absolute bottom-4 left-5 text-(--cream) md:bottom-6 md:left-7">
          <p className="font-hand text-[24px] leading-none md:text-[28px]">Greetings from</p>
          <p className="font-display text-[clamp(3rem,7vw,5.4rem)] leading-[0.92] tracking-[-0.03em]">{room.name}</p>
        </div>
      </div>
    </div>
  );
}

function Back({ room }: { room: Room }) {
  return (
    <div className="kl-paper absolute inset-0 grid grid-rows-[1fr_auto] gap-4 rounded-[6px] p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] md:grid-cols-[1.1fr_1fr] md:grid-rows-1 md:gap-0 md:p-7">
      <div className="flex flex-col justify-between md:border-r md:border-(--ink)/15 md:pr-7">
        <p className="font-mono text-[11px] text-(--ink-soft)">
          Room {room.number}, {room.meaning}
        </p>
        <p className="font-hand text-[22px] leading-[1.2] text-(--sea) md:text-[27px]">{room.note}</p>
        <p className="font-hand text-[24px] text-(--sea)">Meera x</p>
      </div>
      <div className="relative flex flex-col justify-between md:pl-7">
        <div className="absolute -top-1 right-0 flex items-start">
          <Postmark text="LUZ VELHA · 2027 · ALDER & TIDE ·" className="-mr-8 mt-5 h-16 w-32 text-(--ink)/45 md:h-20 md:w-40" />
          <Stamp color={room.tint} label={`₹${(room.price / 1000).toFixed(1)}k`} className="relative h-[84px] w-[68px] rotate-3" />
        </div>
        <ul className="mt-auto space-y-2.5 pt-24 text-[14px] md:pt-0">
          {[room.name, `${room.size}, ${room.sleeps.toLowerCase()}`, room.view, `From ${formatINR(room.price)} a night`].map((line) => (
            <li key={line} className="border-b border-(--ink)/15 pb-1.5">
              {line}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            openBooking();
          }}
          className="group mt-4 flex items-center gap-2 self-start text-[14px] font-medium text-(--sea)"
        >
          <span className="kl-link">Hold this room</span>
          <ArrowRight size={15} strokeWidth={1.7} className="transition-transform duration-500 ease-(--ease-out) group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export function Rooms() {
  const [order, setOrder] = useState(() => rooms.map((_, i) => i));
  const [flipped, setFlipped] = useState(false);
  const dragged = useRef(false);
  const deckRef = useRef<HTMLDivElement>(null);
  const dealt = useInView(deckRef, { once: true, amount: 0.35 });
  const top = order[0];
  // Stagger only the first deal; later shuffles should respond instantly.
  const dealtOnce = useRef(false);
  useEffect(() => {
    if (!dealt) return;
    const id = window.setTimeout(() => (dealtOnce.current = true), 1400);
    return () => window.clearTimeout(id);
  }, [dealt]);

  useEffect(() => setFlipped(false), [top]);

  const next = () => setOrder((all) => [...all.slice(1), all[0]]);
  const previous = () => setOrder((all) => [all[all.length - 1], ...all.slice(0, -1)]);
  const bringToTop = (room: number) => setOrder((all) => [room, ...all.filter((i) => i !== room)]);

  return (
    <section id="rooms" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-[clamp(2.6rem,4.3vw,4.1rem)] leading-[0.98] tracking-[-0.03em]">
            <RiseLines lines={["Nine rooms,", "sent home", "as postcards."]} accent={[2]} />
          </h2>
          <FadeUp delay={0.15}>
            <p className="max-w-[56ch] text-[16px] leading-[1.6] text-(--ink-soft)">
              Each room is named after something the coast does. Drag a card aside to shuffle the pile, tap it to read the back.
            </p>
          </FadeUp>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="grid border-t border-(--ink)/12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3" aria-label="Rooms">
            {rooms.map((room, index) => {
              const active = index === top;
              return (
                <li key={room.name} className="border-b border-(--ink)/12">
                  <button
                    type="button"
                    onClick={() => bringToTop(index)}
                    aria-current={active}
                    className="group flex w-full items-center gap-4 py-3.5 text-left"
                  >
                    <span className="relative grid h-4 w-4 place-items-center">
                      {active && <motion.span layoutId="kl-room-dot" className="absolute inset-0 rounded-full bg-(--sun)" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                    </span>
                    <span className="font-mono text-[12px] text-(--ink-soft)">{room.number}</span>
                    <span className={`font-display text-[22px] transition-[transform,color] duration-500 ease-(--ease-out) group-hover:translate-x-1.5 ${active ? "text-(--sea)" : ""}`}>
                      {room.name}
                    </span>
                    <span className="ml-auto text-[13px] text-(--ink-soft)">from {formatINR(room.price)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="text-[13px] text-(--ink-soft)">Four more rooms, quieter and smaller, from ₹8,500.</p>
        </div>
        <div className="flex flex-col items-center">
          <div ref={deckRef} className="relative aspect-[4/5] w-[min(84vw,400px)] [perspective:1600px] md:aspect-[3/2] md:w-[min(64vw,660px)]">
            {[...order].reverse().map((roomIndex) => {
              const depth = order.indexOf(roomIndex);
              const isTop = depth === 0;
              const room = rooms[roomIndex];
              return (
                <motion.div
                  key={room.name}
                  className={`absolute inset-0 ${isTop ? "cursor-grab active:cursor-grabbing" : ""}`}
                  style={{ zIndex: rooms.length - depth }}
                  initial={{ opacity: 0, x: 0, y: 260, rotate: TILTS[roomIndex] * 4 }}
                  animate={
                    dealt
                      ? { opacity: 1, x: depth * 14, y: depth * -12, rotate: isTop ? TILTS[roomIndex] * 0.3 : TILTS[roomIndex], scale: 1 - depth * 0.035 }
                      : { opacity: 0, x: 0, y: 260, rotate: TILTS[roomIndex] * 4, scale: 1 }
                  }
                  transition={{ duration: 0.9, ease: EASE_OUT, delay: dealt && !dealtOnce.current ? (rooms.length - 1 - depth) * 0.12 : 0 }}
                  drag={isTop}
                  dragSnapToOrigin
                  dragElastic={0.7}
                  whileDrag={{ scale: 1.04, rotate: TILTS[roomIndex] * 1.6 }}
                  onDragStart={() => (dragged.current = true)}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.offset.x) > 130 || Math.abs(info.velocity.x) > 650) next();
                    window.setTimeout(() => (dragged.current = false), 60);
                  }}
                  onClick={() => {
                    if (isTop && !dragged.current) setFlipped((value) => !value);
                  }}
                >
                  <motion.div
                    className="relative h-full w-full rounded-[6px] shadow-[0_2px_0_rgba(36,20,58,0.05),0_28px_50px_-28px_rgba(43,15,51,0.55)] [transform-style:preserve-3d]"
                    animate={{ rotateY: isTop && flipped ? 180 : 0 }}
                    transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
                  >
                    <Front room={room} />
                    <Back room={room} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 flex items-center gap-5">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous room"
              className="grid h-12 w-12 place-items-center rounded-full border border-(--ink)/20 transition-[background-color,color,transform] duration-500 ease-(--ease-out) hover:-translate-x-1 hover:bg-(--ink) hover:text-(--cream)"
            >
              <ArrowLeft size={17} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => setFlipped((value) => !value)}
              className="min-w-[150px] rounded-full border border-(--ink)/20 px-5 py-3 text-[14px] transition-colors duration-300 hover:bg-(--linen)"
            >
              {flipped ? "Turn to the photo" : "Read the back"}
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next room"
              className="grid h-12 w-12 place-items-center rounded-full border border-(--ink)/20 transition-[background-color,color,transform] duration-500 ease-(--ease-out) hover:translate-x-1 hover:bg-(--ink) hover:text-(--cream)"
            >
              <ArrowRight size={17} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
