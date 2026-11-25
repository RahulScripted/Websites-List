import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/** Elements that fade up as they scroll into view, and containers whose children do so in sequence. */
const REVEAL = [
  ".hy-sec-head__side",
  ".hy-intro .hy-voice",
  ".hy-intro .hy-feature",
  ".hy-lookbook__head .hy-lead",
  ".hy-process__copy .hy-lead",
  ".hy-facts__copy .hy-lead",
  ".hy-faq__head .hy-lead",
  ".hy-fcta",
];
const REVEAL_STAGGER = [".hy-plans", ".hy-figs", ".hy-contact__list"];
/** Pictures that open with a clip-path wipe. */
const OPEN = [".hy-process__photo", ".hy-contact__photo", ".hy-shot__img"];
const SPLIT = [
  ".hy-coll .hy-sec-head .hy-h2",
  ".hy-range .hy-sec-head .hy-h2",
  ".hy-lookbook__title",
  ".hy-process .hy-h2",
  ".hy-facts .hy-h2",
  ".hy-team .hy-h2",
  ".hy-pricing .hy-h2",
  ".hy-faq .hy-h2",
  ".hy-contact__title",
];
const DRIFT: Array<[string, number]> = [
  [".hy-gallery__col--a", 0.08],
  [".hy-gallery__col--b", 0.2],
  [".hy-gallery__col--c", 0.13],
];

/**
 * The scroll-driven layer: a pinned hero where the orb card floods open into the night scene, stacking folders that dim,
 * plates that wash open in an arch, line reveals, gallery drift, a progress rail for the steps, bars, portraits rising
 * into their tabs, a word-lit quote and FAQ rules. Everything is scoped to `root` and undone on cleanup.
 * Without it (reduced motion) the page is the plain design system and every component is complete.
 */
export function useHearthlyMotion(rootRef: RefObject<HTMLElement | null>, enabled: boolean) {
  useEffect(() => {
    const root = rootRef.current;
    if (!enabled || !root) return;

    const all = (selector: string) => [...root.querySelectorAll<HTMLElement>(selector)];
    const one = (selector: string) => root.querySelector<HTMLElement>(selector);
    const observers: IntersectionObserver[] = [];
    const cleanups: Array<() => void> = [];
    let cancelled = false;

    /** Calls `fn` once for each element the first time it nears the viewport. */
    const onEnter = (els: HTMLElement[], fn: (el: HTMLElement) => void, margin = "0px 0px -8% 0px") => {
      if (!els.length) return;
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            io.unobserve(entry.target);
            ctx.add(() => fn(entry.target as HTMLElement));
          }),
        { rootMargin: margin },
      );
      els.forEach((el) => io.observe(el));
      observers.push(io);
    };
    /** Like onEnter, but a long way ahead of the viewport so scrubbed timelines exist before they are needed. */
    const near = (selector: string, fn: (el: HTMLElement) => void) => onEnter(all(selector), fn, "100% 0px 100% 0px");

    const ctx = gsap.context(() => {
      // ---------- reveals
      const reveals = [...REVEAL.flatMap(all), ...REVEAL_STAGGER.flatMap(all)];
      REVEAL.flatMap(all).forEach((el) => el.setAttribute("data-hy-reveal", ""));
      REVEAL_STAGGER.flatMap(all).forEach((el) => {
        el.setAttribute("data-hy-reveal", "stagger");
        [...el.children].forEach((child, i) => (child as HTMLElement).style.setProperty("--d", String(i)));
      });
      root.classList.add("hy-rv");
      onEnter(reveals, (el) => el.classList.add("hy-is-in"));

      // ---------- clip-path wipes for pictures
      const opens = OPEN.flatMap(all);
      opens.forEach((el) => gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)" }));
      onEnter(opens, (el) => {
        gsap.to(el, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut", clearProps: "clipPath" });
        const art = el.querySelector(".hy-art");
        if (art) gsap.fromTo(art, { scale: 1.18 }, { scale: 1, duration: 1.6, ease: "power3.out", clearProps: "transform" });
      });

      // ---------- signatures swept in with the marker
      const marks = all(".hy-voice__who .hy-sign, .hy-voices__who .hy-sign");
      marks.forEach((el) => gsap.set(el, { backgroundSize: "0% 52%" }));
      onEnter(marks, (el) => gsap.to(el, { backgroundSize: "100% 52%", duration: 0.9, delay: 0.35, ease: "power2.inOut" }), "0px 0px -15% 0px");

      // ---------- headings reveal line by line
      const splits = SPLIT.flatMap(all);
      splits.forEach((el) => gsap.set(el, { opacity: 0 }));
      const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
      fontsReady.then(() => {
        if (cancelled) return;
        onEnter(splits, (el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) => {
              gsap.set(el, { opacity: 1 });
              return gsap.from(self.lines, { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.09 });
            },
          });
        });
      });

      // ---------- gallery columns drift at their own speed
      DRIFT.forEach(([selector, k]) =>
        near(selector, (el) =>
          gsap.fromTo(el, { yPercent: k * 50 }, { yPercent: -k * 50, ease: "none", scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true } }),
        ),
      );

      // ---------- hero: pause the loops off screen, pin, and flood the orb card open into the night scene
      const hero = one(".hy-hero");
      const stage = one(".hy-hero__stage");
      const flood = one(".hy-flood");
      const from = one(".hy-col-c .hy-look");
      if (hero) {
        const still = new IntersectionObserver(([entry]) => hero.classList.toggle("hy-is-still", !entry.isIntersecting));
        still.observe(hero);
        observers.push(still);
      }
      if (hero && stage && flood && from) {
        const img = flood.querySelector<HTMLElement>(".hy-art");
        const text = flood.querySelector<HTMLElement>(".hy-flood__text");
        const startClip = () => {
          const s = stage.getBoundingClientRect();
          const f = from.getBoundingClientRect();
          const r = parseFloat(getComputedStyle(from).borderTopLeftRadius) || 16;
          return `inset(${(f.top - s.top).toFixed(1)}px ${(s.right - f.right).toFixed(1)}px ${(s.bottom - f.bottom).toFixed(1)}px ${(f.left - s.left).toFixed(1)}px round ${r}px)`;
        };
        const drift = (el: HTMLElement) => {
          const s = stage.getBoundingClientRect();
          const f = el.getBoundingClientRect();
          return (f.left + f.width / 2 - (s.left + s.width / 2)) / s.width;
        };
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom bottom", scrub: 0.6, invalidateOnRefresh: true },
        });
        tl.fromTo(flood, { clipPath: startClip }, { clipPath: "inset(0px 0px 0px 0px round 0px)", duration: 0.55, ease: "power2.inOut" }, 0).fromTo(
          flood,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.08 },
          0,
        );
        if (img) tl.fromTo(img, { scale: 1.35 }, { scale: 1, duration: 0.7, ease: "power1.out" }, 0);
        const head = one(".hy-hero__head");
        if (head) tl.to(head, { yPercent: -45, opacity: 0, duration: 0.35 }, 0);
        all(".hy-collage__col").forEach((col) => {
          if (col.contains(from)) return;
          tl.to(col, { x: () => drift(col) * window.innerWidth * 0.5, y: () => -Math.abs(drift(col)) * window.innerHeight * 0.6, duration: 0.55, ease: "power1.in" }, 0);
        });
        if (text) [...text.children].forEach((el, i) => tl.fromTo(el, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.22, ease: "power2.out" }, 0.5 + i * 0.06));
        tl.to({}, { duration: 0.2 });
      }

      // ---------- service folders stack and dim as the next one slides over
      near(".hy-folders", (box) => {
        const items = [...box.querySelectorAll<HTMLElement>(".hy-folder")];
        items.forEach((folder, i) => {
          const next = items[i + 1];
          const inner = folder.querySelector<HTMLElement>(".hy-folder__in");
          const body = folder.querySelector<HTMLElement>(".hy-folder__body");
          if (!next || !inner) return;
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: next, start: "top bottom", end: () => `top ${parseFloat(getComputedStyle(next).top) || 0}px`, scrub: true, invalidateOnRefresh: true },
          });
          tl.to(inner, { scale: 0.955 }, 0);
          if (body) tl.to(body, { "--hy-dim": 0.3 }, 0);
        });
      });

      // ---------- system plates wash open in an arch
      near(".hy-plates", (list) => {
        const items = [...list.children] as HTMLElement[];
        const c = (items.length - 1) / 2;
        const add = (li: HTMLElement, tl: gsap.core.Timeline, at: number) => {
          const card = li.querySelector<HTMLElement>(".hy-plate__card");
          const wash = li.querySelector<HTMLElement>(".hy-plate__wash");
          const cap = li.querySelector<HTMLElement>(".hy-plate__cap");
          if (!card || !wash) return;
          const art = card.querySelector<HTMLElement>(".hy-art");
          const end = () => `inset(${cap ? ((cap.offsetTop / card.offsetHeight) * 100).toFixed(2) : 100}% 0% 0% 0%)`;
          tl.fromTo(wash, { clipPath: "inset(0% 0% 0% 0%)" }, { clipPath: end, duration: 1, ease: "power2.inOut" }, at);
          tl.fromTo(card, { "--hy-t": "0px" }, { "--hy-t": "14px", duration: 0.45, ease: "back.out(3)" }, at + 0.6);
          if (art) tl.fromTo(art, { scale: 1.18 }, { scale: 1, duration: 1.2, ease: "power1.out" }, at);
        };
        const mm = gsap.matchMedia();
        cleanups.push(() => mm.revert());
        mm.add({ wide: "(min-width: 761px)", narrow: "(max-width: 760px)" }, (mc) => {
          if (mc.conditions?.wide) {
            const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: list, start: "top 82%", end: "bottom 40%", scrub: 0.5, invalidateOnRefresh: true } });
            items.forEach((li, i) => add(li, tl, c ? (1 - Math.abs(i - c) / c) * 0.7 : 0));
          } else {
            items.forEach((li) =>
              add(li, gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: li, start: "top 88%", end: "top 30%", scrub: 0.5, invalidateOnRefresh: true } }), 0),
            );
          }
        });
      });

      // ---------- the rail under the steps fills as you scroll
      near(".hy-steps", (list) => {
        const steps = [...list.querySelectorAll<HTMLElement>(".hy-step")];
        let marks: number[] = [];
        const mm = gsap.matchMedia();
        cleanups.push(() => mm.revert());
        mm.add({ wide: "(min-width: 761px)", narrow: "(max-width: 760px)" }, (mc) => {
          const down = Boolean(mc.conditions?.narrow);
          const measure = () => {
            const r = list.getBoundingClientRect();
            marks = steps.map((s) => {
              const b = s.getBoundingClientRect();
              return down ? (b.top - r.top) / r.height : (b.left - r.left) / r.width;
            });
          };
          gsap.fromTo(
            list,
            { "--hy-prog": 0 },
            {
              "--hy-prog": 1,
              ease: "none",
              scrollTrigger: {
                trigger: list,
                start: down ? "top 75%" : "top 80%",
                end: down ? "bottom 60%" : "top 35%",
                scrub: 0.4,
                onRefresh: measure,
                onUpdate: (self) => steps.forEach((s, i) => s.classList.toggle("hy-is-on", self.progress >= (marks[i] ?? 0) - 0.001)),
              },
            },
          );
        });
      });

      // ---------- bars grow in
      const fills = all(".hy-bars .hy-bar__fill");
      fills.forEach((el) => gsap.set(el, { scaleX: 0 }));
      onEnter(all(".hy-bars"), (chart) => gsap.to(chart.querySelectorAll(".hy-bar__fill"), { scaleX: 1, duration: 1.4, ease: "power3.inOut", stagger: 0.12 }), "0px 0px -20% 0px");

      // ---------- portraits rise into their tabs
      all(".hy-people").forEach((list) => {
        const photos = [...list.querySelectorAll<HTMLElement>(".hy-person__photo")];
        photos.forEach((p) => {
          const art = p.querySelector(".hy-art .hy-full");
          if (art) gsap.set(art, { yPercent: 102 });
          gsap.set(p, { "--hy-t": "0px" });
        });
        onEnter(
          [list],
          () =>
            photos.forEach((p, i) => {
              gsap.to(p, { "--hy-t": "16px", duration: 0.6, delay: i * 0.12, ease: "back.out(3)" });
              const art = p.querySelector(".hy-art .hy-full");
              if (art) gsap.to(art, { yPercent: 0, duration: 1.3, delay: 0.25 + i * 0.12, ease: "power4.out" });
            }),
          "0px 0px -18% 0px",
        );
      });

      // ---------- the featured quote lights up word by word
      near(".hy-voices__quote", (quote) => {
        fontsReady.then(() => {
          if (cancelled) return;
          ctx.add(() =>
            SplitText.create(quote, {
              type: "words",
              autoSplit: true,
              onSplit: (self) =>
                gsap.fromTo(self.words, { opacity: 0.16 }, { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: quote, start: "top 78%", end: "bottom 48%", scrub: true } }),
            }),
          );
        });
      });

      // ---------- FAQ rules draw in and answers fade open
      near(".hy-faq__list", (list) => {
        const rows = [...list.querySelectorAll<HTMLElement>(".hy-qa")];
        rows.forEach((row) => gsap.set(row, { "--hy-rule": 0 }));
        gsap.set(rows, { opacity: 0, y: 18 });
        onEnter([list], () => gsap.to(rows, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, clearProps: "transform,opacity" }));
        rows.forEach((row) => {
          const onToggle = () => {
            const answer = row.querySelector(".hy-qa__a");
            if ((row as HTMLDetailsElement).open && answer) gsap.fromTo(answer, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", clearProps: "transform,opacity" });
          };
          row.addEventListener("toggle", onToggle);
          cleanups.push(() => row.removeEventListener("toggle", onToggle));
        });
        gsap.fromTo(rows, { "--hy-rule": 0 }, { "--hy-rule": 1, ease: "none", stagger: 0.15, scrollTrigger: { trigger: list, start: "top 85%", end: "bottom 70%", scrub: 0.5 } });
      });

      // ---------- the contact email sweeps its highlighter in
      near(".hy-contact__mail", (link) =>
        gsap.fromTo(link, { backgroundSize: "0% 44%" }, { backgroundSize: "100% 44%", ease: "none", scrollTrigger: { trigger: link, start: "top 90%", end: "top 45%", scrub: 0.6 } }),
      );

      // Fonts change line breaks, so measure again once they are in.
      fontsReady.then(() => !cancelled && ScrollTrigger.refresh());
    }, root);

    return () => {
      cancelled = true;
      observers.forEach((io) => io.disconnect());
      cleanups.forEach((fn) => fn());
      ctx.revert();
      root.classList.remove("hy-rv");
      root.querySelectorAll("[data-hy-reveal]").forEach((el) => {
        el.removeAttribute("data-hy-reveal");
        el.classList.remove("hy-is-in");
      });
      root.querySelector(".hy-hero")?.classList.remove("hy-is-still");
      root.querySelectorAll(".hy-step.hy-is-on").forEach((el) => el.classList.remove("hy-is-on"));
    };
  }, [rootRef, enabled]);
}
