// From Uiverse.io by 0xnihilism - https://uiverse.io/0xnihilism/nasty-husky-13
//
// MIT License, Copyright (c) 0xnihilism (0xNihilist )
//
// Adapted to React and Tailwind. The newsletter form is replaced by a details row and an action button, the
// hard black borders, offset shadow, hover lift, title underline wipe and the "Sure?" button reveal are unchanged.

import * as React from "react";

import { cn } from "@/lib/utils";

export interface NeoCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: string;
  description: string;
  /** Short facts shown in bordered boxes, for example a duration and a price. */
  details?: string[];
  /** Label on the button. Hovering it reveals "Sure?" in green. */
  actionLabel?: string;
  onAction?: () => void;
  /** Applies the original jittering `glitch` animation to the card. */
  glitch?: boolean;
}

export const NeoCard = React.forwardRef<HTMLDivElement, NeoCardProps>(function NeoCard(
  { title, description, details, actionLabel = "Reserve", onAction, glitch, className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "group flex w-full flex-col border-[6px] border-black bg-white p-5 text-black shadow-[12px_12px_0_#000] transition-[transform,box-shadow] duration-300",
        "hover:-translate-x-[5px] hover:-translate-y-[5px] hover:shadow-[17px_17px_0_#000]",
        glitch && "kl-glitch",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "relative mb-[15px] block overflow-hidden pb-1 text-[28px] leading-[1.05] font-black text-black uppercase",
          "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90%] after:-translate-x-full after:bg-black after:transition-transform after:duration-300 after:content-['']",
          "group-hover:after:translate-x-0",
        )}
      >
        {title}
      </span>
      <p className="mb-5 text-[16px] leading-[1.4] text-black">{description}</p>
      <div className="mt-auto flex flex-col gap-[15px]">
        {details && details.length > 0 && (
          <ul className="m-0 flex list-none flex-col gap-[15px] p-0">
            {details.map((detail) => (
              <li key={detail} className="border-[3px] border-black p-2.5 text-[16px] font-medium">
                {detail}
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          onClick={onAction}
          className={cn(
            "relative left-[20%] w-1/2 overflow-hidden border-[3px] border-black bg-black p-2.5 text-[18px] font-bold text-white uppercase transition-transform duration-300 active:scale-95",
            "before:absolute before:top-0 before:left-0 before:flex before:h-[105%] before:w-full before:translate-y-full before:items-center before:justify-center before:bg-[#5ad641] before:text-black before:transition-transform before:duration-300 before:content-['Sure?']",
            "hover:before:translate-y-0",
          )}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
});

export default NeoCard;
