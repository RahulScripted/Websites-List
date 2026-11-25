import { motion } from "motion/react";
import { EASE_OUT, Postmark, RiseLines, Stamp } from "@/components/kinara/parts";
import { letters } from "@/components/kinara/content";

export function Letters() {
  return (
    <section id="letters" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.98] tracking-[-0.03em]">
            <RiseLines lines={["Letters from", "the guest book."]} accent={[1]} />
          </h2>
          <p className="max-w-[34ch] text-[16px] leading-[1.6] text-(--ink-soft)">
            Guests leave a postcard on the long table when they go. We pin our favourites by the kitchen door, next to the chai counter.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-6">
          {letters.map((letter, index) => (
            <motion.article
              key={letter.from}
              className="kl-paper relative flex min-h-[330px] flex-col rounded-[6px] p-6 shadow-[0_2px_0_rgba(36,20,58,0.04),0_26px_44px_-30px_rgba(43,15,51,0.55)] md:p-7"
              initial={{ opacity: 0, y: 80, rotate: letter.tilt * 3 }}
              whileInView={{ opacity: 1, y: index === 1 ? 36 : 0, rotate: letter.tilt }}
              whileHover={{ y: index === 1 ? 24 : -12, rotate: 0, scale: 1.02, transition: { duration: 0.5, ease: EASE_OUT } }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: index * 0.12 }}
            >
              <div className="flex items-start justify-between">
                <Postmark text={`${letter.city.toUpperCase()} · ${letter.date.toUpperCase()} · `} className="-ml-2 h-14 w-28 text-(--ink)/40" />
                <Stamp color={letter.stamp} label="IN" className="h-[74px] w-[60px] rotate-2" />
              </div>
              <p className="font-hand mt-6 text-[27px] leading-[1.18] text-(--sea)">{letter.text}</p>
              <p className="mt-auto pt-6 text-[14px]">
                <span className="font-medium">{letter.from}</span>
                <span className="text-(--ink-soft)">, {letter.city}</span>
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
