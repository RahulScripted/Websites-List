"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let instance: Lenis | null = null;

/** The running Lenis instance, or null before mount and when reduced motion is requested. */
export function getLenis() {
  return instance;
}

/**
 * Smooth, inertial page scrolling. One Lenis instance is driven by the GSAP ticker so ScrollTrigger and every
 * scroll-linked animation read the same eased scroll position, which is what removes the stepped, jittery feel.
 * Set `enabled` to false to freeze scrolling, for example while a preloader plays.
 */
export function SmoothScroll({ enabled = true }: { enabled?: boolean }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, anchors: true });
    instance = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
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
