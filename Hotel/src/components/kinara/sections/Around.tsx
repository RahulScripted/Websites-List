import { motion } from "motion/react";
import { Car, Footprints, Plane, Train } from "lucide-react";
import { EASE_OUT, FadeUp, RiseLines } from "@/components/kinara/parts";
import { nearby } from "@/components/kinara/content";

const MAX = Math.max(...nearby.map((place) => place.minutes));

function HowIcon({ how }: { how: string }) {
  const props = { size: 18, strokeWidth: 1.6 };
  if (how === "On foot") return <Footprints {...props} />;
  if (how === "By car") return <Plane {...props} />;
  if (how === "By taxi") return <Car {...props} />;
  return <Train {...props} />;
}

export function Around() {
  return (
    <section id="around" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 md:gap-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.98] tracking-[-0.03em]">
            <RiseLines lines={["Around", "Colaba."]} accent={[1]} />
          </h2>
          <FadeUp delay={0.1}>
            <p className="max-w-[40ch] text-[16px] leading-[1.6] text-(--ink-soft)">
              South Mumbai fits inside a morning. The bars show how long each place takes from our door.
            </p>
          </FadeUp>
        </div>
        <ul className="flex flex-col">
          {nearby.map((place, index) => (
            <li key={place.place} className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2 border-t border-(--ink)/15 py-5 last:border-b md:grid-cols-[48px_minmax(220px,1.1fr)_2fr_90px] md:gap-x-8">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-(--water)/10 text-(--water)">
                <HowIcon how={place.how} />
              </span>
              <div>
                <p className="font-display text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.1]">{place.place}</p>
                <p className="mt-1 text-[14px] text-(--ink-soft)">{place.note}</p>
              </div>
              <div className="col-span-2 flex items-center md:col-span-1">
                <div className="h-2 w-full overflow-hidden rounded-full bg-(--ink)/8">
                  <motion.div
                    className="h-full origin-left rounded-full bg-(--sea)"
                    style={{ width: `${(place.minutes / MAX) * 100}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 1.1, ease: EASE_OUT, delay: index * 0.07 }}
                  />
                </div>
              </div>
              <p className="col-span-2 font-mono text-[13px] text-(--ink) md:col-span-1 md:text-right">
                {place.minutes} min <span className="text-(--ink-soft)">{place.how.toLowerCase()}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
