import { useRef, useState } from "react";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { useHearthlyMotion } from "@/components/hearthly/lib/motion";
import { Sprite } from "@/components/hearthly/illustrations/Sprite";
import { Nav } from "@/components/hearthly/sections/Nav";
import { Hero } from "@/components/hearthly/sections/Hero";
import { Intro } from "@/components/hearthly/sections/Intro";
import { Services } from "@/components/hearthly/sections/Services";
import { Systems } from "@/components/hearthly/sections/Systems";
import { Gallery } from "@/components/hearthly/sections/Gallery";
import { Process } from "@/components/hearthly/sections/Process";
import { Facts } from "@/components/hearthly/sections/Facts";
import { Team } from "@/components/hearthly/sections/Team";
import { Voices } from "@/components/hearthly/sections/Voices";
import { Pricing } from "@/components/hearthly/sections/Pricing";
import { Faq } from "@/components/hearthly/sections/Faq";
import { Contact } from "@/components/hearthly/sections/Contact";
import { Footer } from "@/components/hearthly/sections/Footer";

/**
 * Hearthly: an AI home-care landing page in the InstaLanding "Hearthly" design system (hearthly@1.0.0).
 * Fictional company; every name, price, figure and review is invented.
 */
export default function Hearthly() {
  const root = useRef<HTMLDivElement>(null);
  // Motion is an enhancement: with reduced motion the page is the plain, complete design system.
  const [motion] = useState(() => !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useHearthlyMotion(root, motion);

  return (
    <div ref={root} id="top" className={"hy" + (motion ? " hy-motion" : "")}>
      {motion && <SmoothScroll />}
      <Sprite />
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Systems />
        <Gallery />
        <Process />
        <Facts />
        <Team />
        <Voices />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
