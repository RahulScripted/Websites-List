"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

/*
 * ArchCard: a media card whose cover sits behind a dark panel. The panel's top edge rises into a jharokha-style
 * arch that carries an icon medallion, with the title and copy below and a two-part footer along the bottom.
 * Hovering slides the panel down to reveal more of the cover, drifts the cover in and lifts the card, all from
 * one spring on the root so the parts stay in sync. Sizes are container query units (cqw), so it scales cleanly.
 * The shape and motion follow the folder-card pattern, with the folder tab swapped for the arch.
 */

export interface ArchCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"> {
  title: string;
  description: string;
  /** Icon shown in the medallion at the top of the arch. */
  icon?: React.ReactNode;
  /** Small label above the title, e.g. a category. */
  eyebrow?: string;
  /** Footer, left side. */
  footerStart?: string;
  /** Footer, right side, in the accent colour. */
  footerEnd?: string;
  /** Cover image URL. Falls back to a gradient when omitted or when the image fails. */
  cover?: string;
  coverAlt?: string;
  interactive?: boolean;
}

/*
 * viewBox is the inside-bezel box. Top edge at y=150 with 32px corners, rising through two cubic curves to a
 * crown at y=92. The path overshoots the sides and bottom so the panel still fills the card while it slides down.
 */
const ARCH_PATH =
  "M-2,182 a32,32 0 0 1 32,-32 H158 C196,150 206,92 258,92 C310,92 320,150 358,150 H486 a32,32 0 0 1 32,32 V700 H-2 Z";

const FALLBACK_GRADIENT = [
  "radial-gradient(60% 70% at 70% 110%, rgba(255,214,150,.75) 0%, rgba(245,154,26,.35) 40%, rgba(0,0,0,0) 72%)",
  "linear-gradient(172deg, #2b0f33 0%, #5a1747 48%, #b0185f 100%)",
].join(",");

const TOKENS = [
  "[--arch-bezel:#fff6e5]",
  "[--arch-surface:#2b0f33]",
  "[--arch-panel-from:#3a1545]",
  "[--arch-panel-to:#1d0a24]",
  "[--arch-title:#fff6e5]",
  "[--arch-text:#d9c8d9]",
  "[--arch-accent:#f59a1a]",
  "[--arch-medallion:#b0185f]",
].join(" ");

const SPRING = { type: "spring", stiffness: 260, damping: 26, mass: 0.9 } as const;

const cardVariants: Variants = { rest: { y: 0 }, hover: { y: -8 }, tap: { y: -4, scale: 0.99 } };
const panelVariants: Variants = { rest: { y: "0%" }, hover: { y: "9%" } };
const coverVariants: Variants = { rest: { scale: 1 }, hover: { scale: 1.08 } };

export const ArchCard = React.forwardRef<HTMLDivElement, ArchCardProps>(function ArchCard(
  { title, description, icon, eyebrow, footerStart, footerEnd, cover, coverAlt = "", interactive = true, className, ...props },
  ref,
) {
  const gradientId = React.useId();
  const reduceMotion = useReducedMotion();
  const animate = interactive && !reduceMotion;
  const [coverFailed, setCoverFailed] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial="rest"
      animate="rest"
      whileHover={animate ? "hover" : undefined}
      whileTap={animate ? "tap" : undefined}
      transition={SPRING}
      variants={animate ? cardVariants : undefined}
      className={cn("w-full select-none [container-type:inline-size]", TOKENS, className)}
      {...props}
    >
      {/* bezel */}
      <div className="relative box-border aspect-[544/566] w-full rounded-[8.46cqw] bg-(--arch-bezel) p-[2.57cqw] shadow-[0_2cqw_5cqw_-2cqw_rgba(43,15,51,0.55)]">
        <div className="relative h-full w-full overflow-hidden rounded-[5.88cqw] bg-(--arch-surface)">
          {/* The cover is held 1px in and the panel runs 1px proud, so no hairline of cover shows at the edges. */}
          <div className="absolute top-0 right-px left-px h-[52%] overflow-hidden">
            <motion.div variants={animate ? coverVariants : undefined} transition={SPRING} className="h-full w-full origin-bottom">
              {cover && !coverFailed ? (
                <img
                  src={cover}
                  alt={coverAlt}
                  loading="lazy"
                  draggable={false}
                  onError={() => setCoverFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div aria-hidden style={{ background: FALLBACK_GRADIENT }} className="h-full w-full" />
              )}
            </motion.div>
          </div>

          {/* panel, arch and copy move as one */}
          <div className="absolute inset-y-0 -right-px -left-px overflow-hidden">
            <motion.div variants={animate ? panelVariants : undefined} transition={SPRING} className="absolute inset-0">
              <svg aria-hidden viewBox="0 0 516 538" preserveAspectRatio="none" className="absolute inset-0 block h-full w-full">
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--arch-panel-from)" />
                    <stop offset="1" stopColor="var(--arch-panel-to)" />
                  </linearGradient>
                </defs>
                <path d={ARCH_PATH} fill={`url(#${gradientId})`} stroke={`url(#${gradientId})`} strokeWidth="2" />
              </svg>

              {icon && (
                <span className="absolute top-[16cqw] left-1/2 grid size-[14cqw] -translate-x-1/2 place-items-center rounded-full bg-(--arch-medallion) text-(--arch-title) shadow-[0_0_0_1.2cqw_var(--arch-panel-from)] [&_svg]:size-[6.4cqw]">
                  {icon}
                </span>
              )}

              <div className="absolute inset-x-[5.5cqw] top-[35cqw]">
                {eyebrow && <p className="m-0 mb-[1.6cqw] text-[3.2cqw] font-medium tracking-[0.12em] text-(--arch-accent) uppercase">{eyebrow}</p>}
                <h3 className="m-0 text-[5.6cqw] leading-[1.15] font-semibold tracking-[0.005em] text-(--arch-title)">{title}</h3>
                <p className="mt-[2.4cqw] mb-0 line-clamp-3 text-[3.9cqw] leading-[1.5] text-(--arch-text)">{description}</p>
              </div>
            </motion.div>
          </div>

          {/* footer stays put while the panel slides */}
          {(footerStart || footerEnd) && (
            <div className="absolute inset-x-[5.5cqw] bottom-[4.6cqw] flex items-baseline justify-between gap-[3cqw] border-t border-white/12 pt-[3cqw] leading-none">
              <p className="m-0 text-[4cqw] font-medium text-(--arch-title)">{footerStart}</p>
              <p className="m-0 text-[4.2cqw] font-semibold text-(--arch-accent)">{footerEnd}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default ArchCard;
