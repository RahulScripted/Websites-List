"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;
let headerOffset = 0;

/** The running Lenis instance, or null before mount and when reduced motion is requested. */
export function getLenis() {
  return instance;
}

/** Glides to an element with Lenis, or jumps when Lenis is off (reduced motion). */
export function scrollToElement(target: HTMLElement) {
  const y = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  if (instance) instance.scrollTo(y);
  else window.scrollTo({ top: y, behavior: "instant" });
}

/**
 * Smooth, inertial page scrolling with Lenis, and hash links that glide to their section.
 * `offset` is the height of a fixed header, kept clear above the section.
 */
export function SmoothScroll({ enabled = true, offset = 0 }: { enabled?: boolean; offset?: number }) {
  useEffect(() => {
    headerOffset = offset;
  }, [offset]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    instance = lenis;
    let frame = requestAnimationFrame(function tick(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(tick);
    });

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      event.preventDefault();
      scrollToElement(target);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
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
