import { useEffect, useRef, useState } from "react";
import { reviews } from "@/components/hearthly/content";

function Review({ review, hidden }: { review: (typeof reviews)[number]; hidden?: boolean }) {
  return (
    <li className="hy-review" aria-hidden={hidden || undefined}>
      <div>
        <p className="hy-review__stars" aria-label="5 stars">
          ★★★★★
        </p>
        <p>{review.text}</p>
      </div>
      <p className="hy-review__who">
        <span className="hy-sign">{review.name}</span>
        <span>{review.city}</span>
      </p>
    </li>
  );
}

/** One featured quote, then a review row that loops at a steady speed while on screen and pauses on hover or focus. */
export function Voices() {
  const row = useRef<HTMLDivElement>(null);
  const [looping, setLooping] = useState(false);
  const [onScreen, setOnScreen] = useState(true);

  // The loop is cosmetic, so reduced-motion visitors keep the plain wrapped grid.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = row.current;
    if (!el) return;
    setLooping(true);
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Once the copies are in, the track holds two runs of reviews; one run takes its width at 55px a second.
  useEffect(() => {
    const el = row.current;
    const track = el?.firstElementChild as HTMLElement | undefined;
    if (!looping || !el || !track) return;
    el.style.setProperty("--hy-marquee", `${Math.max(20, track.scrollWidth / 2 / 55)}s`);
  }, [looping]);

  return (
    <section id="voices" className="hy-voices">
      <figure className="hy-wrap hy-voices__lead">
        <svg className="hy-voice__mark" viewBox="0 0 28 22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M0 22V12.6C0 5.5 3.4 1.3 10.2 0l1.1 2.6C7.6 3.9 5.9 6.4 5.8 10H11v12H0Zm16.6 0V12.6c0-7.1 3.4-11.3 10.2-12.6L28 2.6c-3.7 1.3-5.4 3.8-5.5 7.4h5.2v12H16.6Z"
          />
        </svg>
        <blockquote>
          <p className="hy-voices__quote">
            It caught a pinhole leak behind the wall at two in the morning, shut the water off and had a plumber at my door by nine. My insurer was impressed. So was I.
          </p>
        </blockquote>
        <figcaption className="hy-voices__who">
          <span className="hy-sign">Jonah P.</span>
          <span>Member since 2025</span>
        </figcaption>
      </figure>
      <div ref={row} className={"hy-voices__row" + (looping && !onScreen ? " hy-is-off" : "")}>
        <ul className={"hy-voices__track" + (looping ? " hy-is-running" : "")}>
          {reviews.map((review) => (
            <Review key={review.name} review={review} />
          ))}
          {looping && reviews.map((review) => <Review key={`copy-${review.name}`} review={review} hidden />)}
        </ul>
      </div>
    </section>
  );
}
