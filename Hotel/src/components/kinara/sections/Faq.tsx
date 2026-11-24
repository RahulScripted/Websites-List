import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { EASE_OUT, FadeUp, RiseLines } from "@/components/kinara/parts";
import { faqs } from "@/components/kinara/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-12">
        <h2 className="font-display text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.98] tracking-[-0.03em]">
          <RiseLines lines={["Before you", "come."]} accent={[1]} />
        </h2>
        <FadeUp>
          <ul className="flex flex-col">
            {faqs.map((item, index) => {
              const on = open === index;
              return (
                <li key={item.q} className="border-t border-(--ink)/15 last:border-b">
                  <button
                    type="button"
                    aria-expanded={on}
                    onClick={() => setOpen(on ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                  >
                    <span className="font-display text-[clamp(1.3rem,2vw,1.7rem)] leading-[1.2]">{item.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-(--ink)/20 transition-[transform,background-color] duration-500 ease-(--ease-out) ${on ? "rotate-45 bg-(--sun)" : ""}`}>
                      <Plus size={17} strokeWidth={1.7} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[62ch] pb-6 text-[16px] leading-[1.65] text-(--ink-soft)">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
