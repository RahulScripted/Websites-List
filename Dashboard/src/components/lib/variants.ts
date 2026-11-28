import type { Variants } from "motion/react"
import { E_IN, E_OUT } from "./helpers"

export const viewV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
  exit: { opacity: 0, y: 14, transition: { duration: 0.22, ease: E_IN } },
}

export const cardV: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: E_OUT } },
}

export const fileV: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: E_OUT } },
}

export const rowV: Variants = {
  hidden: { opacity: 0, x: 18 },
  show: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.55, ease: E_OUT, delay: 0.55 + i * 0.045 } }),
}
