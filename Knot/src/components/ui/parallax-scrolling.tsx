"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export interface ParallaxLayer {
  id: string;
  /** How far the layer travels, as a percentage of its own height, over the whole pass. Larger moves more. */
  yPercent: number;
  /** Positioning and size classes for the layer. */
  className?: string;
  children: ReactNode;
}

interface ParallaxComponentProps {
  layers: ParallaxLayer[];
  /** Static content drawn above every layer, not parallaxed. */
  children?: ReactNode;
  className?: string;
}

/**
 * Layered parallax band. Each layer is scrubbed against the page scroll at its own speed, so nearer layers
 * slide faster than distant ones. Layers go from -yPercent to +yPercent as the band crosses the viewport,
 * which keeps them centred when the band is in the middle of the screen.
 * Smoothness comes from the page-level Lenis scroll (see smooth-scroll.tsx) plus a short scrub lag here.
 */
export function ParallaxComponent({ layers, children, className }: ParallaxComponentProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
        layers.forEach((layer, index) => {
          tl.fromTo(
            root.querySelector(`[data-parallax-layer="${layer.id}"]`),
            { yPercent: -layer.yPercent },
            { yPercent: layer.yPercent, ease: "none" },
            index === 0 ? undefined : "<",
          );
        });
      });
    }, root);
    return () => ctx.revert();
  }, [layers]);

  return (
    <div ref={rootRef} className={cn("relative isolate overflow-hidden", className)}>
      {layers.map((layer) => (
        <div key={layer.id} data-parallax-layer={layer.id} className={cn("absolute will-change-transform", layer.className)}>
          {layer.children}
        </div>
      ))}
      {children}
    </div>
  );
}

export default ParallaxComponent;
