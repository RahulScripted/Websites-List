import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { EASE_IN_OUT, EASE_OUT, Photo } from "@/components/kinara/parts";
import { hotel, images } from "@/components/kinara/content";
import { useSeaConditions } from "@/components/kinara/lib/useSeaConditions";

function Letters({ word, delay, className }: { word: string; delay: number; className?: string }) {
  return (
    <span className={`flex overflow-hidden pb-[0.12em] ${className ?? ""}`} aria-hidden>
      {word.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: "110%", rotate: 6 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: delay + index * 0.065 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

// Two lines of swell drawn every frame; the cursor pushes a soft hump through them like a hand in water.
function TideLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const frontRef = useRef<SVGPathElement>(null);
  const backRef = useRef<SVGPathElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const svg = svgRef.current;
    const section = svg?.closest("section");
    if (!svg || !section) return;
    let width = svg.clientWidth;
    let raf = 0;
    let time = 0;
    let last = performance.now();
    let cursorX = width / 2;
    let targetX = width / 2;
    let energy = 0;
    let targetEnergy = 0;

    const onResize = () => (width = svg.clientWidth);
    const onMove = (event: PointerEvent) => {
      const rect = svg.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetEnergy = 1;
    };
    const onLeave = () => (targetEnergy = 0);

    const build = (phase: number, amp: number, base: number, push: number) => {
      let d = "";
      for (let x = 0; x <= width + 12; x += 12) {
        const hump = Math.exp(-((x - cursorX) ** 2) / (2 * 110 ** 2));
        const ripple = Math.sin((x - cursorX) * 0.045 - time * 5) * hump;
        const y = base + Math.sin(x * 0.011 + time * 1.1 + phase) * amp + Math.sin(x * 0.027 - time * 0.7 + phase) * amp * 0.45 - energy * push * hump + ripple * energy * 5;
        d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`;
      }
      return d;
    };

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce) time += dt;
      cursorX += (targetX - cursorX) * 0.08;
      energy += (targetEnergy - energy) * 0.05;
      targetEnergy *= 0.985;
      frontRef.current?.setAttribute("d", build(0, 7, 62, 30));
      backRef.current?.setAttribute("d", build(1.8, 5, 44, 18));
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce]);

  return (
    <motion.svg
      ref={svgRef}
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] w-full"
      aria-hidden
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: EASE_OUT, delay: 1.2 }}
    >
      <path ref={backRef} fill="none" stroke="var(--water-soft)" strokeWidth="1.5" />
      <path ref={frontRef} fill="none" stroke="var(--water)" strokeWidth="2" />
    </motion.svg>
  );
}

function RingText({ text, className }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <path id="kl-ring" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
      </defs>
      <g className="kl-spin origin-center" style={{ transformBox: "fill-box" }}>
        <text fontSize="9.6" letterSpacing="0.9" fill="currentColor" fontFamily="DM Mono, monospace">
          <textPath href="#kl-ring" textLength="286" lengthAdjust="spacing">{text}</textPath>
        </text>
      </g>
    </svg>
  );
}

export function Hero() {
  const { data: sea } = useSeaConditions();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const archScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden px-5 pt-24 pb-36 md:min-h-[100svh] md:px-10 md:pt-24 md:pb-32">
      {/* Dawn: the page opens in cool blue light and warms as the sun clears the arch. */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[#e6d6ea]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.4, ease: EASE_IN_OUT, delay: 0.25 }}
      />

      <h1 className="sr-only">Kinara &amp; Lehar, a nine-room boutique hotel facing the Arabian Sea in Colaba, Mumbai</h1>

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 items-stretch md:grid-cols-[1fr_auto_1fr]">
        <motion.div style={{ x: leftX }} className="relative z-30 flex flex-col justify-between md:-mr-10">
          <Letters word="Kinara" delay={0.95} className="font-display text-[clamp(4.6rem,8.4vw,9rem)] leading-[0.9] tracking-[-0.035em] md:mt-[9%]" />
          <motion.p
            className="mt-4 hidden max-w-[30ch] text-[17px] leading-[1.55] text-(--ink-soft) md:block lg:text-[18px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_OUT, delay: 1.7 }}
          >
            Nine whitewashed rooms on the Colaba sea face, where the Arabian Sea keeps time, the chai never stops and breakfast lasts until noon.
          </motion.p>
        </motion.div>

        <div className="relative z-20 mx-auto mt-2 w-[min(86vw,420px)] md:mt-0 md:w-[min(33vw,470px)]">
          {/* The sun rises behind the arch, shifting from coral to midday yellow. */}
          <motion.div aria-hidden className="absolute top-[2%] -right-[20%] z-0 aspect-square w-[54%]" style={{ y: sunY }}>
            <motion.div
              className="h-full w-full rounded-full"
              initial={{ y: "150%", scale: 0.7, backgroundColor: "#d63a1f" }}
              animate={{ y: "0%", scale: 1, backgroundColor: "#f59a1a" }}
              transition={{ duration: 2.4, ease: EASE_OUT, delay: 0.2 }}
            />
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute -inset-[22%] h-[144%] w-[144%] text-(--sun)"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: EASE_OUT, delay: 1.5 }}
            >
              <g className="kl-spin" style={{ transformOrigin: "50px 50px" }}>
                {Array.from({ length: 24 }, (_, i) => (
                  <line key={i} x1="50" y1="3" x2="50" y2="9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" transform={`rotate(${i * 15} 50 50)`} />
                ))}
              </g>
            </motion.svg>
          </motion.div>

          {/* A thin plaster-line echo of the arch, wiping up just ahead of the photo. */}
          <motion.div
            aria-hidden
            className="absolute -inset-x-3 -top-3 bottom-0 z-10 rounded-t-full border border-b-0 border-(--sea)/45"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.8, ease: EASE_IN_OUT, delay: 0.35 }}
          />

          <motion.div style={{ scale: archScale }} className="relative z-10">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-t-full"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.6, ease: EASE_IN_OUT, delay: 0.55 }}
            >
              <motion.div className="absolute -inset-y-[8%] inset-x-0" style={{ y: photoY }}>
                <motion.div className="h-full w-full" initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: EASE_OUT, delay: 0.55 }}>
                  <Photo
                    src={images.hero}
                    alt="Whitewashed room with a linen bed and an arched window open to the Arabian Sea"
                    className="h-full w-full"
                    position="50% 55%"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div style={{ x: rightX }} className="relative z-30 flex flex-col justify-between md:-ml-10">
          <span className="mt-2 flex items-baseline md:mt-[52%]">
            <motion.span
              aria-hidden
              className="font-display inline-block pr-[0.12em] text-[clamp(4rem,7.4vw,8rem)] leading-[0.9] text-(--sea)"
              initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: EASE_OUT, delay: 1.3 }}
            >
              &amp;
            </motion.span>
            <Letters word="Lehar" delay={1.4} className="font-display text-[clamp(4.6rem,8.4vw,9rem)] leading-[0.9] tracking-[-0.035em]" />
          </span>

          <motion.div
            className="mt-6 flex items-center gap-4 md:mt-0 md:justify-end"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE_OUT, delay: 1.85 }}
          >
            <p className="text-right font-mono text-[12px] leading-[1.6] text-(--ink-soft)">
              <span className="font-deva text-[14px] text-(--sea)">किनारा · लहर</span>
              <br />
              {hotel.coords}
              <br />
              Colaba, Mumbai{sea ? ` · ${Math.round(sea.airTemp)}°C now` : ""}
            </p>
            <a href="#rooms" className="group relative grid h-[104px] w-[104px] shrink-0 place-items-center text-(--ink)" aria-label="See the rooms">
              <RingText text="Nine rooms · one sea face · since 1934 · open all year · " className="absolute inset-0 h-full w-full" />
              <span className="grid h-11 w-11 place-items-center rounded-full bg-(--sun) transition-transform duration-500 ease-(--ease-out) group-hover:scale-125">
                <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-500 ease-(--ease-out) group-hover:translate-y-0.5" aria-hidden>
                  <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-8 max-w-[34ch] text-[16px] leading-[1.55] text-(--ink-soft) md:hidden"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 1.7 }}
        >
          Nine whitewashed rooms on the Colaba sea face, where the Arabian Sea keeps time, the chai never stops and breakfast lasts until noon.
        </motion.p>
      </div>

      <TideLine />
    </section>
  );
}
