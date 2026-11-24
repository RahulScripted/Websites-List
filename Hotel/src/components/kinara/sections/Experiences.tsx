import { FadeUp, RiseLines } from "@/components/kinara/parts";
import { experiences } from "@/components/kinara/content";
import { openBooking } from "@/components/kinara/sections/Nav";
import { NeoCard } from "@/components/ui/neo-card";

export function Experiences() {
  return (
    <section id="experiences" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 md:gap-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-deva text-[18px] text-(--sea)">अनुभव</p>
            <h2 className="font-display mt-2 text-[clamp(2.8rem,5.4vw,5rem)] leading-[0.98] tracking-[-0.03em]">
              <RiseLines lines={["Mumbai,", "the slow way."]} accent={[1]} />
            </h2>
          </div>
          <p className="max-w-[40ch] text-[16px] leading-[1.6] text-(--ink-soft)">
            Six things our guests keep coming back to. Every one is led by someone from the neighbourhood and booked at the front desk the evening before.
          </p>
        </div>
        <div className="grid gap-10 pr-3 pb-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-12">
          {experiences.map((item, index) => (
            <FadeUp key={item.title} delay={(index % 3) * 0.08} className="flex">
              <NeoCard
                className="flex-1"
                title={item.title}
                description={item.text}
                details={item.meta.split(" · ")}
                actionLabel="Reserve"
                onAction={openBooking}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
