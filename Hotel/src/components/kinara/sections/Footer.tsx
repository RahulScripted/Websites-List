import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { EASE_OUT, Magnetic, RiseLines, scrollToTop } from "@/components/kinara/parts";
import { hotel } from "@/components/kinara/content";
import { openBooking } from "@/components/kinara/sections/Nav";

// Fixed star field so server and client agree; positions are percentages of the footer.
const STARS = Array.from({ length: 34 }, (_, i) => ({
  left: (i * 37.3) % 100,
  top: (i * 23.7) % 46,
  size: i % 5 === 0 ? 3 : 2,
  duration: 2.4 + (i % 7) * 0.5,
  delay: (i % 9) * 0.35,
}));

function wavePath(amplitude: number, length: number) {
  let d = "M0 40";
  for (let x = 0; x < 2400; x += length) {
    d += ` q${length / 4} ${-amplitude} ${length / 2} 0 t${length / 2} 0`;
  }
  return `${d} V120 H0 Z`;
}

const WAVES = [
  { fill: "#0b7a85", opacity: 0.35, duration: "26s", d: wavePath(14, 240), y: 0 },
  { fill: "#0b7a85", opacity: 0.6, duration: "18s", d: wavePath(10, 200), y: 18 },
  // Last layer matches the bottom bar so the sea runs straight into it.
  { fill: "#1d0a24", opacity: 1, duration: "12s", d: wavePath(8, 120), y: 40 },
];

function Wordmark() {
  const words = ["Kinara", "&", "Lehar"];
  let count = 0;
  return (
    <motion.p
      aria-hidden
      className="font-display flex flex-wrap justify-center gap-x-[0.22em] text-[clamp(4.2rem,15.5vw,15rem)] leading-[0.95] tracking-[-0.04em]"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.4 }}
    >
      {words.map((word) => (
        <span key={word} className={`flex overflow-hidden pb-[0.1em] ${word === "&" ? "text-(--sun)" : ""}`}>
          {word.split("").map((letter) => {
            const index = count++;
            return (
              <motion.span
                key={index}
                className="inline-block"
                variants={{ hidden: { y: "105%" }, shown: { y: "0%" } }}
                transition={{ duration: 1.1, ease: EASE_OUT, delay: index * 0.05 }}
              >
                {letter}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.p>
  );
}

export function Footer() {
  return (
    <footer id="kl-footer" className="relative isolate overflow-hidden rounded-t-[28px] bg-(--night) pt-24 text-(--cream) md:pt-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        {STARS.map((star, index) => (
          <span
            key={index}
            className="kl-twinkle absolute rounded-full bg-(--cream)"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              ["--dur" as string]: `${star.duration}s`,
              ["--delay" as string]: `${star.delay}s`,
            }}
          />
        ))}
        <span className="absolute top-28 left-[58%] block h-16 w-16 rounded-full shadow-[inset_-14px_6px_0_0_var(--sun)] md:h-20 md:w-20" />
      </div>

      <div className="mx-auto grid max-w-[1360px] grid-cols-12 items-end gap-x-6 gap-y-12 px-5 md:px-10">
        <h2 className="font-display col-span-12 text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.98] tracking-[-0.03em] md:col-span-8">
          <RiseLines lines={["Come for the tide,", "stay for the light."]} />
        </h2>
        <div className="col-span-12 md:col-span-4 md:justify-self-end">
          <Magnetic strength={0.4}>
            <button
              type="button"
              onClick={openBooking}
              className="group relative grid h-44 w-44 place-items-center overflow-hidden rounded-full bg-(--sun) text-(--ink) md:h-52 md:w-52"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-(--cream) transition-transform duration-700 ease-(--ease-out) group-hover:scale-y-100" />
              <span className="relative text-center text-[16px] font-semibold leading-tight transition-transform duration-500 ease-(--ease-out) group-hover:scale-110">
                Book your
                <br />
                room
              </span>
            </button>
          </Magnetic>
        </div>

        <div className="col-span-12 mt-6 grid gap-8 border-t border-(--cream)/15 pt-10 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-(--sea-soft)">Write</p>
            <a href={`mailto:${hotel.email}`} className="kl-link mt-1 inline-block">
              {hotel.email}
            </a>
          </div>
          <div>
            <p className="text-(--sea-soft)">Call Meera</p>
            <a href={`tel:${hotel.phone.replace(/\s/g, "")}`} className="kl-link mt-1 inline-block">
              {hotel.phone}
            </a>
          </div>
          <div>
            <p className="text-(--sea-soft)">Find us</p>
            <p className="mt-1">
              {hotel.address[0]}
              <br />
              {hotel.address[1]}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-(--sea-soft)">Elsewhere</p>
            <div className="flex gap-5">
              {["Instagram", "Journal", "Press"].map((link) => (
                <a key={link} href="#top" className="kl-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 px-3 md:mt-24">
        <Wordmark />
      </div>

      <div aria-hidden className="relative -mt-6 h-[120px] md:-mt-10">
        {WAVES.map((wave, index) => (
          <svg
            key={index}
            viewBox="0 0 2400 120"
            preserveAspectRatio="none"
            className="kl-drift absolute left-0 h-full w-[200%]"
            style={{ top: wave.y, ["--dur" as string]: wave.duration }}
          >
            <path d={wave.d} fill={wave.fill} fillOpacity={wave.opacity} />
          </svg>
        ))}
      </div>

      <div className="relative flex flex-col items-start justify-between gap-3 bg-[#1d0a24] px-5 py-5 text-[13px] text-(--cream)/70 sm:flex-row sm:items-center md:px-10">
        <p>© 2027 Kinara &amp; Lehar, Colaba, Mumbai. Nine rooms, one sea face.</p>
        <a href="#top" onClick={scrollToTop} className="group flex items-center gap-2 text-(--cream)">
          <span className="kl-link">Back to sunrise</span>
          <ArrowUp size={15} strokeWidth={1.6} className="transition-transform duration-500 ease-(--ease-out) group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
