import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { Loader } from "@/components/quillo/parts";
import { Sprite } from "@/components/quillo/illustrations/Sprite";
import { Nav } from "@/components/quillo/sections/Nav";
import { Hero } from "@/components/quillo/sections/Hero";
import { About } from "@/components/quillo/sections/About";
import { Work } from "@/components/quillo/sections/Work";
import { Challenges } from "@/components/quillo/sections/Challenges";
import { Footer } from "@/components/quillo/sections/Footer";

/**
 * Quillo: an AI tutor for Indian classrooms (CBSE, ICSE and state boards). Every picture is drawn in code.
 * Fictional brand; every class, student, figure and quote is invented. Based on the InstaLanding "Quillo AI Tutor" page.
 */
export default function Quillo() {
  return (
    <>
      <SmoothScroll offset={64} />
      <Sprite />
      <Loader />
      <Nav />
      <main className="ql-grid-bg">
        <Hero />
        <About />
        <Work />
        <Challenges />
      </main>
      <Footer />
    </>
  );
}
