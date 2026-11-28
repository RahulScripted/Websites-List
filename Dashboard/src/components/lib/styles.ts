/** Scoped styles for the Setu dashboard. Every class is prefixed st- so it never collides with the host page. */
export const STYLE = `
.st-root{
  --st-950:color-mix(in srgb,var(--st-a) 46%,#000);--st-800:color-mix(in srgb,var(--st-a) 76%,#000);
  --st-700:var(--st-a);--st-600:color-mix(in oklab,var(--st-a) 86%,#fff);
  --st-400:color-mix(in oklab,var(--st-a) 60%,#fff);--st-100:color-mix(in oklab,var(--st-a) 13%,#fff);
  --background:#e9ebe9;--muted:#f5f6f5;--card:#fdfdfc;--card-foreground:#131a15;--foreground:#131a15;
  --muted-foreground:#646d67;--border:#e3e7e4;--ring:var(--st-600);
  --st-faint:#6c756f;--st-hatch:#8d9a92;--st-text:var(--st-800);--st-mark:var(--st-700);--st-strong:var(--st-950);
  --st-line:var(--st-950);--st-soft:var(--st-100);--st-mark-bg:#cdeedb;
  --st-amber:#b06d0a;--st-amber-bg:#fdf3e2;--st-rose:#c23b3b;--st-rose-bg:#fdeceb;
  --st-shadow:0 1px 2px rgb(19 26 21/.04),0 8px 24px -12px rgb(19 26 21/.10);
  --st-pop:0 0 0 1px var(--border),0 24px 60px -20px rgb(19 26 21/.35);
  --st-deep:color-mix(in srgb,var(--st-950) 55%,#000);--st-swirl:color-mix(in srgb,var(--st-400) 22%,transparent);
  font-family:"Plus Jakarta Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
  font-size:15px;line-height:1.45;color:var(--foreground);background:var(--background);
  font-variant-numeric:tabular-nums;-webkit-font-smoothing:antialiased;color-scheme:light;
}
.st-root.st-dark{
  --background:#0a0e0b;--muted:#111712;--card:#172019;--card-foreground:#e7eee9;--foreground:#e7eee9;
  --muted-foreground:#9ba69f;--border:#243029;--st-faint:#8d9891;--st-hatch:#5f6d65;
  --st-text:var(--st-400);--st-mark:var(--st-400);--st-strong:color-mix(in oklab,var(--st-400) 38%,#eef4f0);
  --st-line:color-mix(in oklab,var(--st-400) 60%,transparent);--st-soft:color-mix(in oklab,var(--st-a) 24%,#172019);
  --st-mark-bg:color-mix(in oklab,var(--st-a) 45%,transparent);
  --st-amber:#f0b45a;--st-amber-bg:rgb(240 180 90/.12);--st-rose:#f39191;--st-rose-bg:rgb(243 145 145/.12);
  --st-shadow:0 1px 2px rgb(0 0 0/.3),0 14px 30px -16px rgb(0 0 0/.7);
  --st-pop:0 0 0 1px var(--border),0 24px 60px -20px rgb(0 0 0/.8);color-scheme:dark;
}
.st-root *,.st-root *::before,.st-root *::after{box-sizing:border-box}
.st-root button:not(:disabled),.st-root [role="button"]:not(:disabled),.st-root [role="menuitem"]:not([aria-disabled="true"]),.st-root [role="tab"],.st-root [role="radio"],.st-root [role="switch"],.st-root a{cursor:pointer}
.st-root button:disabled,.st-root [aria-disabled="true"]{cursor:default}
.st-focus:focus-visible{outline:none;box-shadow:0 0 0 3px var(--card),0 0 0 5px var(--st-600)}
.st-focus-in:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--st-600)}
.st-scroll{scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--st-hatch) 55%,transparent) transparent}
.st-noscroll{scrollbar-width:none}.st-noscroll::-webkit-scrollbar{display:none}
.st-primary{color:#f2f8f4;background:linear-gradient(180deg,var(--st-700),var(--st-950))}
.st-primary:hover{background:linear-gradient(180deg,var(--st-600),var(--st-800))}
.st-ghost{color:var(--foreground);background:var(--card);box-shadow:inset 0 0 0 1.5px var(--st-line)}
.st-ghost:hover{background:var(--st-soft)}
.st-chip{box-shadow:inset 0 0 0 1.5px var(--st-line)}.st-chip:hover{background:var(--st-soft)}
.st-hero{color:#f1f8f3;background:linear-gradient(135deg,var(--st-800) 0%,var(--st-950) 100%);box-shadow:0 14px 30px -16px color-mix(in srgb,var(--st-950) 70%,transparent)}
.st-hero::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:radial-gradient(90% 80% at 100% 100%,color-mix(in srgb,var(--st-400) 28%,transparent),transparent 60%)}
.st-swirl{position:relative;isolation:isolate;overflow:hidden;color:#eef6f1;background:var(--st-deep)}
.st-swirl::before{content:"";position:absolute;inset:-40%;z-index:-1;background:
  repeating-radial-gradient(circle at 78% 70%,transparent 0 14px,var(--st-swirl) 15px 16px),
  radial-gradient(70% 60% at 85% 85%,var(--st-700),transparent 70%),
  radial-gradient(60% 50% at 10% 0%,var(--st-950),transparent 70%)}
.st-hatch{background:repeating-linear-gradient(-45deg,var(--st-hatch) 0 2.4px,transparent 2.4px 8px);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--st-hatch) 35%,transparent)}
.st-sw-hatch{background:repeating-linear-gradient(-45deg,var(--st-hatch) 0 2px,transparent 2px 5px);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--st-hatch) 40%,transparent)}
.st-stem::after{content:"";position:absolute;left:50%;top:100%;width:1px;height:10px;transform:translateX(-50%);background:var(--st-hatch)}
.st-grid{display:grid;gap:12px;grid-template-columns:repeat(2,minmax(0,1fr));
  grid-template-areas:"s1 s2" "s3 s4" "an an" "re re" "pr pr" "tm tm" "pg pg" "tr tr"}
.st-side{display:contents}
@media (min-width:768px){.st-grid{gap:16px;grid-template-areas:"s1 s2" "s3 s4" "an an" "re pr" "tm tm" "pg tr"}}
@media (min-width:1280px){
  .st-grid{grid-template-columns:repeat(12,minmax(0,1fr));grid-template-areas:
    "s1 s1 s1 s2 s2 s2 s3 s3 s3 s4 s4 s4" "an an an an an an re re re sd sd sd" "tm tm tm tm tm pg pg pg pg sd sd sd"}
  .st-grid{flex:1}
  .st-side{display:flex;flex-direction:column;gap:16px;grid-area:sd;min-width:0}
  .st-side>.st-grow{flex:1}
}
.st-kanban{display:grid;gap:14px;grid-template-columns:repeat(4,84%);align-items:start;overflow-x:auto;padding-bottom:6px;scroll-snap-type:x mandatory}
.st-kanban>*{scroll-snap-align:start}
@media (min-width:768px){.st-kanban{gap:16px;grid-template-columns:repeat(4,minmax(204px,1fr))}}
.st-cal{display:grid;gap:12px;grid-template-columns:minmax(0,1fr);grid-template-areas:"month" "agenda" "next"}
@media (min-width:768px){.st-cal{gap:16px;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:"month month" "agenda next"}}
@media (min-width:1280px){.st-cal{grid-template-columns:minmax(0,2fr) minmax(280px,1fr);grid-template-rows:auto 1fr;grid-template-areas:"month agenda" "month next";flex:1}}
.st-pico{position:relative;flex:none;width:28px;height:28px;border-radius:8px}
.st-pico-api{border-radius:4px;background:repeating-linear-gradient(-60deg,transparent 0 4px,#3b5bdb 4px 7px,transparent 7px 9px)}
.st-pico-flow{border-radius:50%;background:conic-gradient(#1f9e8f 0 33%,#0b5f6b 0 66%,#6bd1c2 0)}
.st-pico-dash{background:linear-gradient(#f08c3c,#f08c3c) 50% 0/6px 11px no-repeat,linear-gradient(#4ab6e8,#4ab6e8) 50% 100%/6px 11px no-repeat,linear-gradient(#e64980,#e64980) 0 50%/11px 6px no-repeat,linear-gradient(#40c057,#40c057) 100% 50%/11px 6px no-repeat}
.st-pico-speed{border-radius:50%;background:conic-gradient(from 200deg,#f59f00 0 50%,#fd7e14 0 75%,transparent 0)}
.st-pico-qa{background:radial-gradient(circle at 50% 30%,#e8590c 0 6px,transparent 6.5px),radial-gradient(circle at 28% 70%,#6741d9 0 6px,transparent 6.5px),radial-gradient(circle at 72% 70%,#364fc7 0 6px,transparent 6.5px)}
.st-pico-new{border-radius:50%;background:radial-gradient(circle,var(--st-400) 0 5px,transparent 5.5px),var(--st-soft)}
.st-tag-design{color:#a6457a;background:#fbe9f2}.st-tag-backend{color:#2f55c9;background:#e8eefd}
.st-tag-frontend{color:var(--st-text);background:var(--st-soft)}.st-tag-qa{color:#7a4bc9;background:#f0e9fc}
.st-tag-marketing{color:#a5620a;background:#fdf3e2}
.st-dark .st-tag-design{color:#f39cc8;background:rgb(243 156 200/.13)}.st-dark .st-tag-backend{color:#9db3ff;background:rgb(157 179 255/.13)}
.st-dark .st-tag-qa{color:#c7a9ff;background:rgb(199 169 255/.13)}.st-dark .st-tag-marketing{color:#f0b45a;background:rgb(240 180 90/.13)}
.st-k-meeting{--c:var(--st-600)}.st-k-team{--c:#3b5bdb}.st-k-review{--c:#b06d0a}.st-k-deadline{--c:#c23b3b}.st-k-social{--c:#7a4bc9}
.st-dark .st-k-meeting{--c:var(--st-400)}.st-dark .st-k-team{--c:#9db3ff}.st-dark .st-k-review{--c:#f0b45a}.st-dark .st-k-deadline{--c:#f39191}.st-dark .st-k-social{--c:#c7a9ff}
.st-evt{color:var(--c);background:color-mix(in srgb,var(--c) 13%,transparent)}
.st-agenda{box-shadow:inset 4px 0 0 var(--c)}
.st-root mark{background:var(--st-mark-bg);color:inherit;border-radius:3px}
.st-root input[type=date]::-webkit-calendar-picker-indicator{opacity:.6;cursor:pointer}
.st-locked{display:grid;gap:12px;grid-template-columns:minmax(0,1fr)}
@media (min-width:768px){.st-locked{gap:16px}}
@media (min-width:1280px){.st-locked{grid-template-columns:minmax(300px,1fr) minmax(0,2fr);flex:1}}
.st-set{display:grid;gap:12px;grid-template-columns:minmax(0,1fr);align-items:start}
@media (min-width:768px){.st-set{gap:16px;grid-template-columns:220px minmax(0,1fr)}}
@media (min-width:1280px){.st-set{grid-template-columns:260px minmax(0,1fr);max-width:1080px}}
.st-heat{display:grid;grid-auto-flow:column;grid-template-rows:repeat(7,minmax(0,1fr));grid-template-columns:repeat(20,minmax(0,1fr));gap:3px}
@media (prefers-reduced-motion:reduce){.st-root *,.st-root *::before,.st-root *::after{transition-duration:.01ms!important;animation:none!important}}
`
