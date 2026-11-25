import { useState } from "react";
import { MotionConfig } from "motion/react";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll, scrollToElement } from "@/components/ui/smooth-scroll";
import { sectionIds } from "@/components/knot/content";
import { useActiveSection, useReveal } from "@/components/knot/parts";
import { Nav } from "@/components/knot/sections/Nav";
import { Hero } from "@/components/knot/sections/Hero";
import { Apps } from "@/components/knot/sections/Apps";
import { Skyline } from "@/components/knot/sections/Skyline";
import { How } from "@/components/knot/sections/How";
import { Recipes } from "@/components/knot/sections/Recipes";
import { Guardrails } from "@/components/knot/sections/Guardrails";
import { Pricing } from "@/components/knot/sections/Pricing";
import { Faq } from "@/components/knot/sections/Faq";
import { Closing } from "@/components/knot/sections/Closing";
import { Footer } from "@/components/knot/sections/Footer";

/**
 * Knot: a fictional AI automation tool. Describe a chore in one sentence and Knot wires the apps, tests the steps
 * and keeps it running. Neo-brutalist: ink borders, hard shadows and loud flat colour.
 * Based on the MIT-licensed "knot" landing page by LN (https://lndev.me), ported from Next.js to Vite.
 */
export default function Knot() {
  const [flowId, setFlowId] = useState("payments");
  const { active, select } = useActiveSection(sectionIds);
  useReveal();

  const openFlow = (id: string) => {
    setFlowId(id);
    select("demo");
    const target = document.getElementById("demo");
    if (target) scrollToElement(target);
  };

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <Nav active={active} select={select} />
      <main id="main">
        <Hero flowId={flowId} onFlowChange={setFlowId} select={select} />
        <Apps />
        <Skyline />
        <How />
        <Recipes openFlow={openFlow} />
        <Guardrails />
        <Pricing />
        <Faq />
        <Closing />
      </main>
      <Footer />
      <Toaster />
    </MotionConfig>
  );
}
