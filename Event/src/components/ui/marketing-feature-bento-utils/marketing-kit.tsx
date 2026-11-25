"use client";

import { useId, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Small helpers the marketing blocks share. Styled with the `--bjork-*` tokens in index.css. */

export type BlockTone = "auto" | "light" | "dark";

export interface BlockLink {
  label: string;
  href: string;
}

/** Page frame: centred, capped width, side padding that follows the page gutter. */
export const blockFrame =
  "w-full px-[var(--ov-gutter,24px)]";

/** `auto` follows the page. `dark` flips the `--bjork-*` tokens through the `.dark` class. */
export function blockToneProps(tone: BlockTone): {
  className?: string;
  "data-tone"?: string;
} {
  if (tone === "auto") return {};
  return { "data-tone": tone, className: tone === "dark" ? "dark" : undefined };
}

export function useBlockReducedMotion(): boolean {
  return !!useReducedMotion();
}

export function CtaLink({
  link,
  variant = "primary",
  arrow = false,
}: {
  link: BlockLink;
  variant?: "primary" | "secondary";
  arrow?: boolean;
}) {
  return (
    <a
      href={link.href}
      className={cn("ov-btn ov-btn-lg", variant === "primary" && "ov-btn-solid")}
    >
      {link.label}
      {arrow ? <ArrowRight aria-hidden className="size-4" /> : null}
    </a>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
}) {
  const fallbackId = useId();
  return (
    <div>
      {eyebrow ? <p className="ov-label">{eyebrow}</p> : null}
      <h2
        id={id ?? fallbackId}
        className={cn(
          "ov-h2 !max-w-[13ch] text-[color:var(--bjork-text)]",
          eyebrow && "mt-5",
        )}
      >
        {title}
      </h2>
    </div>
  );
}

/** Fades and lifts its child into place once, when it scrolls into view. */
export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: "div" | "li";
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useBlockReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay }}
    >
      {children}
    </Tag>
  );
}
