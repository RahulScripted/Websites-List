# Chhaap ’27: where the text lives

**All visible text is in one file: `src/components/swarm/content.ts`.** Change a string there and the page updates. No component holds copy.

| Section in `CONTENT` | What it controls |
|---|---|
| `seo` | Browser tab title and meta description |
| `preloader` | The 4 greetings (नमस्ते, வணக்கம், নমস্কার, स्वागत है), `hold` = ms each word stays (1300), `reveal` = ms for the curve (1800) |
| `meta` | Brand, logo text (CHHAAP), edition (’27), city, dates, email, main button link |
| `crew` | The 8 named cursors (Aarav, Ananya, Rohan, Meera, Kabir, Saanvi, Ishaan, Diya) and their colours. Keep at least 6; the comment thread uses crew[5] and crew[1] |
| `hero` | Kicker, 3-line headline, intro, nav links, buttons, ring text, date art, colophon, venue lines, "scroll" hint |
| `idea` | "01 — The idea" label, the statement (split into `before` / `mark` (highlighted) / `after`), the 5 inks |
| `speakers` | Label, title, 6 speakers (name, role, city, talk, ink colour) |
| `programme` | Label, title, note, 7 sessions, and the two-line comment the crew types |
| `passes` | Label, title, 3 passes (name, price, note, perks, button text, stamp), the fake right-click menus, the "⌘ V" chip |
| `finale` | "SEE YOU" / "IN MUMBAI.", Where / When / Write labels, doors time, credits label, fine print |

## File structure

```
src/
  main.tsx                         entry point
  App.tsx                          arc preloader wrapping the page
  index.css                        Tailwind + paper/ink theme tokens
  lib/utils.ts                     cn() helper (shadcn)
  types/swarm.ts                   all content types
  components/
    ui/arc-preloader-hero.tsx      the arc preloader (shadcn ui folder)
    swarm/
      content.ts                   ← ALL TEXT
      index.tsx                    page root: goes live, builds timelines
      useIntro.ts                  the "inking two plates…" intro
      parts.tsx                    Ty (typed text), Hands (cursors), Crops
      swarm.css                    original Overprint styles (+ small-phone block)
      sections/                    Hero, Idea, Speakers, Programme, Passes, Finale
      lib/
        choreography.ts            pure timing rules
        director.ts                cursor actions (type, drag, pen, flood, stamp…)
        build.ts                   one scroll-scrubbed timeline per section
        helpers.ts                 ids, initials, ink colours
        scenes/                    what the crew does in each section
```

