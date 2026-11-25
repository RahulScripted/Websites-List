import { MotionConfig, motion, useScroll, useSpring, useTransform } from "motion/react";
import { Nav } from "@/components/kinara/sections/Nav";
import { Hero } from "@/components/kinara/sections/Hero";
import { BookingBar } from "@/components/kinara/sections/BookingBar";
import { House } from "@/components/kinara/sections/House";
import { Rooms } from "@/components/kinara/sections/Rooms";
import { Day } from "@/components/kinara/sections/Day";
import { Tides } from "@/components/kinara/sections/Tides";
import { Experiences } from "@/components/kinara/sections/Experiences";
import { Around } from "@/components/kinara/sections/Around";
import { Faq } from "@/components/kinara/sections/Faq";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Toran } from "@/components/kinara/parts";
import { Letters } from "@/components/kinara/sections/Letters";
import { Footer } from "@/components/kinara/sections/Footer";

/**
 * Kinara & Lehar: a boutique sea-view hotel in Colaba, Mumbai.
 * The page background walks through one day as you scroll: cool dawn, bright noon, apricot dusk.
 */
export default function Kinara() {
  const { scrollYProgress } = useScroll();
  // A short spring takes the steps out of the colour walk, so it blends instead of ticking with the wheel.
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 26, mass: 0.6 });
  const background = useTransform(smoothProgress, [0, 0.3, 0.6, 0.85, 1], ["#fbf1df", "#fff3dc", "#fde6c8", "#f9d8bd", "#f2c9b8"]);
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <motion.div className="kl min-h-screen overflow-x-clip text-(--ink)" style={{ backgroundColor: background }}>
        <Nav />
        <main>
          <Hero />
          <House />
          <Rooms />
          <Day />
          <Toran />
          <Experiences />
          <Around />
          <Tides />
          <Toran />
          <Letters />
          <Faq />
        </main>
        <Footer />
        <BookingBar />
      </motion.div>
    </MotionConfig>
  );
}
