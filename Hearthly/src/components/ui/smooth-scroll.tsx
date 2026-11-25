"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let instance: Lenis | null = null;

/** Space kept above a section when scrolling to it, so the fixed header never covers its heading. */
let headerOffset = 0;

/** Glides to an element with Lenis, or jumps when Lenis is off (reduced motion). */
export function scrollToElement(target: HTMLElement) {
  const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  if (instance) instance.scrollTo(y);
  else window.scrollTo({ top: y, behavior: "instant" });
}

/** The running Lenis instance, or null before mount and when reduced motion is requested. */
export function getLenis() {
  return instance;
}

/**
 * Smooth, inertial page scrolling. One Lenis instance is driven by the GSAP ticker so ScrollTrigger and every
 * scroll-linked animation read the same eased scroll position, which is what removes the stepped, jittery feel.
 * Set `enabled` to false to freeze scrolling, for example while a preloader plays.
 */
export function SmoothScroll({ enabled = true, offset = 0 }: { enabled?: boolean; offset?: number }) {
  useEffect(() => {
    headerOffset = offset;
  }, [offset]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: false });
    instance = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Hash links glide to their section.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      scrollToElement(target as HTMLElement);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      if (instance === lenis) instance = null;
    };
  }, []);

  useEffect(() => {
    if (enabled) instance?.start();
    else instance?.stop();
  }, [enabled]);

  return null;
}
