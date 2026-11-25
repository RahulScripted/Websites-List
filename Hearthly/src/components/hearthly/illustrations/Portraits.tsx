/** Illustrated team portraits, drawn in SVG. Each fills its plate from the bottom edge.
 *  Every portrait is self-contained: its own gradients, blur filter and clip paths,
 *  all with unique ids, so nothing depends on defs living elsewhere on the page. */

const FACE = "M65 96C65 70 80 56 100 56s35 14 35 40c0 26-14 46-35 46S65 122 65 96z";
const NECK = "M86 124h28v38q-14 10-28 0z";
const BODY = "M18 232c4-54 40-76 82-76s78 22 82 76z";

const Blur = ({ id, s = 2.5 }: { id: string; s?: number }) => (
  <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation={s} />
  </filter>
);

/** Almond eye with sclera, iris, pupil, catch-light, lid shadow and lash line. */
function Eye({ id, cx, cy, iris, lash = "#1c1210" }: { id: string; cx: number; cy: number; iris: string; lash?: string }) {
  const d = `M${cx - 7.5} ${cy}q7.5-7 15 0q-7.5 6.5-15 0z`;
  return (
    <g>
      <clipPath id={id}><path d={d} /></clipPath>
      <path d={d} fill="#fbf6f0" />
      <g clipPath={`url(#${id})`}>
        <circle cx={cx} cy={cy - 0.2} r="3.7" fill={iris} />
        <circle cx={cx} cy={cy - 0.2} r="1.8" fill="#0d0806" />
        <circle cx={cx + 1.4} cy={cy - 1.7} r="1.1" fill="#fff" />
        <rect x={cx - 8} y={cy - 4} width="16" height="3" fill="#000" opacity=".14" />
      </g>
      <path d={`M${cx - 8} ${cy + 0.2}q8-8.5 16 0`} stroke={lash} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Nose({ c }: { c: string }) {
  return (
    <g>
      <path d="M99 100q-3.5 10 .5 14.5q3.5 2 7-.5" stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round" opacity=".6" />
      <ellipse cx="100" cy="116" rx="6" ry="2.2" fill={c} opacity=".16" />
      <circle cx="102" cy="111.5" r="1.7" fill="#fff" opacity=".28" />
    </g>
  );
}

function Lips({ c, line, y = 127 }: { c: string; line: string; y?: number }) {
  return (
    <g>
      <path d={`M91 ${y}q4-3.5 9-1.5q5-2 9 1.5q-4.5 6.5-9 6.5t-9-6.5z`} fill={c} />
      <path d={`M91.5 ${y + 0.2}q8.5 3 17 0`} stroke={line} strokeWidth="1" fill="none" />
      <ellipse cx="100" cy={y + 4.6} rx="3" ry="1" fill="#fff" opacity=".28" />
    </g>
  );
}

function Ears({ fill, inner }: { fill: string; inner: string }) {
  return (
    <g>
      <ellipse cx="65" cy="104" rx="5" ry="8" fill={fill} />
      <ellipse cx="135" cy="104" rx="5" ry="8" fill={fill} />
      <path d="M64 100q-2.5 4 0 8M136 100q2.5 4 0 8" stroke={inner} strokeWidth="1.4" fill="none" opacity=".5" strokeLinecap="round" />
    </g>
  );
}

/* ------------------------------------------------------------------ Maya */
export function PortraitMaya() {
  const p = "hy-a1";
  const fringe = "M63 96C60 56 90 40 108 44c18 4 30 22 29 52-4-16-12-28-26-32-14 6-30 8-48 32z";
  return (
    <svg className="hy-full" viewBox="0 0 200 230" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <radialGradient id={`${p}s`} cx=".42" cy=".38" r=".75">
          <stop offset="0" stopColor="#ffeadb" /><stop offset=".65" stopColor="#efc2a0" /><stop offset="1" stopColor="#cf9370" />
        </radialGradient>
        <linearGradient id={`${p}h`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8e0a0" /><stop offset=".5" stopColor="#d1a050" /><stop offset="1" stopColor="#7a5226" />
        </linearGradient>
        <linearGradient id={`${p}c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#43907a" /><stop offset="1" stopColor="#123a30" />
        </linearGradient>
        <Blur id={`${p}b`} />
        <clipPath id={`${p}n`}><path d={NECK} /></clipPath>
        <clipPath id={`${p}f`}><path d={FACE} /></clipPath>
      </defs>

      {/* hair behind */}
      <path d="M48 92C44 46 72 30 100 30s56 16 52 62c-1 28 4 50 10 68-16 10-36 8-48 2H86c-12 6-32 8-48-2 6-18 11-40 10-68z" fill={`url(#${p}h)`} />
      {/* sweater */}
      <path d={BODY} fill={`url(#${p}c)`} />
      <path d="M30 232c6-40 26-58 48-66" stroke="#fff" strokeOpacity=".2" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M150 232c-2-22-8-40-22-52" stroke="#000" strokeOpacity=".18" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 160q30 30 60 0l6 12q-36 30-72 0z" fill="#000" opacity=".28" />
      {/* neck */}
      <path d={NECK} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}n)`}><ellipse cx="100" cy="146" rx="19" ry="8" fill="#9a5f40" opacity=".45" filter={`url(#${p}b)`} /></g>
      {/* front locks */}
      <path d="M52 96c-2 28 0 52 8 70l22-6-6-40z" fill={`url(#${p}h)`} />
      <path d="M148 96c2 28 0 52-8 70l-22-6 6-40z" fill={`url(#${p}h)`} />
      <path d="M58 110c-1 16 0 32 4 46M142 110c1 16 0 32-4 46" stroke="#7a5226" strokeOpacity=".35" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* necklace */}
      <path d="M81 164q19 20 38 0" stroke="#f0cf7a" strokeWidth="1.2" fill="none" />
      <circle cx="100" cy="176" r="2.6" fill="#f0cf7a" /><circle cx="99.3" cy="175.3" r=".8" fill="#fff" opacity=".7" />
      {/* face */}
      <Ears fill="#e4ae88" inner="#b97a58" />
      <path d={FACE} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}f)`}>
        <path d={fringe} fill="#7a4a1c" opacity=".35" transform="translate(0 4)" filter={`url(#${p}b)`} />
        <path d="M120 70c12 8 18 24 16 44" stroke="#fff" strokeOpacity=".4" strokeWidth="5" fill="none" filter={`url(#${p}b)`} />
      </g>
      <ellipse cx="80" cy="117" rx="9" ry="5.5" fill="#ff8f80" opacity=".3" filter={`url(#${p}b)`} />
      <ellipse cx="120" cy="117" rx="9" ry="5.5" fill="#ff8f80" opacity=".3" filter={`url(#${p}b)`} />
      <path d="M78 93q8-5.5 16-1.5M106 91.5q8-4 16 1.5" stroke="#8a6232" strokeWidth="2.3" fill="none" strokeLinecap="round" />
      <Eye id={`${p}e1`} cx={87} cy={103} iris="#5d8a9c" lash="#4a3018" />
      <Eye id={`${p}e2`} cx={113} cy={103} iris="#5d8a9c" lash="#4a3018" />
      <Nose c="#b97a58" />
      <Lips c="#cf6a62" line="#9c4a42" />
      {/* fringe */}
      <path d={fringe} fill={`url(#${p}h)`} />
      <path d="M80 52c10-6 22-7 32-4M92 62c8-4 16-4 22 0" stroke="#fff" strokeOpacity=".45" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M70 80c4-8 10-14 18-18" stroke="#7a5226" strokeOpacity=".3" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------- Daniel */
export function PortraitDaniel() {
  const p = "hy-a2";
  const hair = "M64 94C60 56 84 44 100 44s40 12 36 50c-3-12-8-20-14-24-14-6-30-6-44 0-6 4-11 12-14 24z";
  return (
    <svg className="hy-full" viewBox="0 0 200 230" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <radialGradient id={`${p}s`} cx=".42" cy=".36" r=".75">
          <stop offset="0" stopColor="#b57a56" /><stop offset=".65" stopColor="#85502f" /><stop offset="1" stopColor="#55301a" />
        </radialGradient>
        <linearGradient id={`${p}c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#43474d" /><stop offset="1" stopColor="#0f1012" />
        </linearGradient>
        <linearGradient id={`${p}h`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2c2321" /><stop offset="1" stopColor="#0a0707" />
        </linearGradient>
        <Blur id={`${p}b`} />
        <clipPath id={`${p}n`}><path d={NECK} /></clipPath>
        <clipPath id={`${p}f`}><path d={FACE} /></clipPath>
      </defs>

      {/* jacket + shirt */}
      <path d={BODY} fill={`url(#${p}c)`} />
      <path d="M30 232c6-40 26-58 48-66" stroke="#fff" strokeOpacity=".16" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M76 158l24 40 24-40-8 6q-16 12-32 0z" fill="#f0ebe0" />
      <path d="M76 158l24 40M124 158l-24 40" stroke="#000" strokeOpacity=".45" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M100 172v26" stroke="#c9c2b2" strokeWidth="1" />
      <path d="M70 232c4-26 10-42 20-52M130 232c-4-26-10-42-20-52" stroke="#000" strokeOpacity=".3" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* neck */}
      <path d={NECK} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}n)`}><ellipse cx="100" cy="146" rx="19" ry="8" fill="#26120a" opacity=".5" filter={`url(#${p}b)`} /></g>
      {/* face */}
      <Ears fill="#6f4228" inner="#3a1f12" />
      <path d={FACE} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}f)`}>
        <path d={hair} fill="#000" opacity=".4" transform="translate(0 4)" filter={`url(#${p}b)`} />
        <path d="M122 80c10 10 14 26 12 44" stroke="#ffd9b0" strokeOpacity=".35" strokeWidth="5" fill="none" filter={`url(#${p}b)`} />
      </g>
      {/* stubble */}
      <path d="M66 104c0 20 68 20 68 0v12c-4 22-20 30-34 30s-30-8-34-30z" fill="#1a100a" opacity=".3" />
      <path d="M88 121q12-5 24 0q-12 5-24 0z" fill="#1a100a" opacity=".35" />
      <path d="M80 94q8-4.5 15-1.5M105 92.5q8-3 15 1.5" stroke="#140b07" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <Eye id={`${p}e1`} cx={86} cy={104} iris="#3a2416" lash="#100805" />
      <Eye id={`${p}e2`} cx={114} cy={104} iris="#3a2416" lash="#100805" />
      <Nose c="#3a1f12" />
      <Lips c="#6a3322" line="#2e150c" y={128} />
      {/* glasses */}
      <rect x="75" y="95" width="22" height="18" rx="7" fill="#9fd6ff" fillOpacity=".1" stroke="#16181b" strokeWidth="2.6" />
      <rect x="103" y="95" width="22" height="18" rx="7" fill="#9fd6ff" fillOpacity=".1" stroke="#16181b" strokeWidth="2.6" />
      <path d="M97 101q3-2.5 6 0M75 100l-10-2M125 100l10-2" stroke="#16181b" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M79 99l6-1.5M107 99l6-1.5" stroke="#fff" strokeOpacity=".55" strokeWidth="1.4" strokeLinecap="round" />
      {/* hair */}
      <path d={hair} fill={`url(#${p}h)`} />
      <path d="M64 94c-1 10 0 18 2 24 1-8 2-16 4-22zM136 94c1 10 0 18-2 24-1-8-2-16-4-22z" fill="#0a0707" />
      <path d="M72 66c10-8 24-11 38-8" stroke="#fff" strokeOpacity=".22" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ----------------------------------------------------------------- Priya */
export function PortraitPriya() {
  const p = "hy-a3";
  const hairFront = "M64 102C58 52 84 36 100 38s42 14 36 64c-4-22-18-34-36-36-18 2-32 14-36 36z";
  return (
    <svg className="hy-full" viewBox="0 0 200 230" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <radialGradient id={`${p}s`} cx=".42" cy=".36" r=".75">
          <stop offset="0" stopColor="#e3ab84" /><stop offset=".65" stopColor="#bd8460" /><stop offset="1" stopColor="#8c5838" />
        </radialGradient>
        <linearGradient id={`${p}h`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b2d2a" /><stop offset=".5" stopColor="#17110f" /><stop offset="1" stopColor="#050404" />
        </linearGradient>
        <linearGradient id={`${p}c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f59a66" /><stop offset="1" stopColor="#a63e1b" />
        </linearGradient>
        <Blur id={`${p}b`} />
        <clipPath id={`${p}n`}><path d={NECK} /></clipPath>
        <clipPath id={`${p}f`}><path d={FACE} /></clipPath>
      </defs>

      {/* hair behind */}
      <path d="M50 96C46 44 74 30 100 30s54 14 50 66l8 84H42z" fill={`url(#${p}h)`} />
      {/* kurta */}
      <path d={BODY} fill={`url(#${p}c)`} />
      <path d="M30 232c6-40 26-58 48-66" stroke="#fff" strokeOpacity=".25" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 160q30 32 60 0l6 12q-36 32-72 0z" fill="#000" opacity=".24" />
      <path d="M68 164q32 34 64 0" stroke="#f2c25b" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M74 172q26 26 52 0" stroke="#f2c25b" strokeWidth="1.2" fill="none" strokeDasharray="1 4" strokeLinecap="round" />
      {/* neck */}
      <path d={NECK} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}n)`}><ellipse cx="100" cy="146" rx="19" ry="8" fill="#4a2a16" opacity=".5" filter={`url(#${p}b)`} /></g>
      {/* front locks over shoulders */}
      <path d="M52 100c-4 30-2 58 6 82l24-8-6-52z" fill={`url(#${p}h)`} />
      <path d="M148 100c4 30 2 58-6 82l-24-8 6-52z" fill={`url(#${p}h)`} />
      <path d="M58 120c-1 18 1 38 5 54M142 120c1 18-1 38-5 54" stroke="#fff" strokeOpacity=".14" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* face */}
      <Ears fill="#b27a56" inner="#6b3a20" />
      <path d={FACE} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}f)`}>
        <path d={hairFront} fill="#000" opacity=".4" transform="translate(0 4)" filter={`url(#${p}b)`} />
        <path d="M122 80c10 10 14 26 12 44" stroke="#ffd9b0" strokeOpacity=".3" strokeWidth="5" fill="none" filter={`url(#${p}b)`} />
      </g>
      <ellipse cx="80" cy="117" rx="9" ry="5.5" fill="#ff7f6a" opacity=".28" filter={`url(#${p}b)`} />
      <ellipse cx="120" cy="117" rx="9" ry="5.5" fill="#ff7f6a" opacity=".28" filter={`url(#${p}b)`} />
      <path d="M78 93q8-5.5 16-1.5M106 91.5q8-4 16 1.5" stroke="#1a0f0a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <Eye id={`${p}e1`} cx={87} cy={103} iris="#2e1a10" lash="#0d0806" />
      <Eye id={`${p}e2`} cx={113} cy={103} iris="#2e1a10" lash="#0d0806" />
      <path d="M79 103.6l-1.8 1.2M121 103.6l1.8 1.2" stroke="#0d0806" strokeWidth="1.4" strokeLinecap="round" />
      <Nose c="#6b3a20" />
      <circle cx="107.6" cy="115.4" r="1.3" fill="#f2b544" /><circle cx="107.2" cy="115" r=".4" fill="#fff" />
      <Lips c="#9a4036" line="#6e2a22" />
      <circle cx="100" cy="82" r="2.2" fill="#b5322a" />
      {/* hair front */}
      <path d={hairFront} fill={`url(#${p}h)`} />
      <path d="M100 38v28" stroke="#000" strokeOpacity=".5" strokeWidth="1.5" />
      <path d="M78 56c-8 6-12 14-14 26M122 52c8 6 12 14 14 24" stroke="#fff" strokeOpacity=".2" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* earrings */}
      <circle cx="63" cy="114" r="2.6" fill="#f2b544" /><path d="M63 116.6v5" stroke="#f2b544" strokeWidth="1.4" /><circle cx="63" cy="123" r="1.8" fill="#f2b544" />
      <circle cx="137" cy="114" r="2.6" fill="#f2b544" /><path d="M137 116.6v5" stroke="#f2b544" strokeWidth="1.4" /><circle cx="137" cy="123" r="1.8" fill="#f2b544" />
    </svg>
  );
}

/* ------------------------------------------------------------------- Leo */
export function PortraitLeo() {
  const p = "hy-a4";
  const hair = "M60 90C56 46 86 30 104 34s38 22 36 56c-5-9-10-14-16-18-6 2-14 4-24 2-14-2-24 4-34 14z";
  return (
    <svg className="hy-full" viewBox="0 0 200 230" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <radialGradient id={`${p}s`} cx=".42" cy=".36" r=".75">
          <stop offset="0" stopColor="#ffddc4" /><stop offset=".65" stopColor="#ebb592" /><stop offset="1" stopColor="#c4875f" />
        </radialGradient>
        <linearGradient id={`${p}h`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a46a3c" /><stop offset="1" stopColor="#4d2b15" />
        </linearGradient>
        <linearGradient id={`${p}c`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f7a58" /><stop offset="1" stopColor="#1b3020" />
        </linearGradient>
        <Blur id={`${p}b`} />
        <clipPath id={`${p}n`}><path d={NECK} /></clipPath>
        <clipPath id={`${p}f`}><path d={FACE} /></clipPath>
      </defs>

      {/* jacket, tee, suspenders */}
      <path d={BODY} fill={`url(#${p}c)`} />
      <path d="M30 232c6-40 26-58 48-66" stroke="#fff" strokeOpacity=".2" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M76 156q24 36 48 0l-2 12q-22 30-44 0z" fill="#efe9dc" />
      <path d="M60 232v-58M140 232v-58" stroke="#e8a33a" strokeWidth="9" strokeLinecap="round" />
      <path d="M58 232v-56M142 232v-56" stroke="#fff" strokeOpacity=".3" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M76 160q24 26 48 0l-6 14q-18 16-36 0z" fill="#000" opacity=".22" />
      {/* neck */}
      <path d={NECK} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}n)`}><ellipse cx="100" cy="146" rx="19" ry="8" fill="#9a5f40" opacity=".5" filter={`url(#${p}b)`} /></g>
      {/* face */}
      <Ears fill="#e0a37e" inner="#a46a48" />
      <path d={FACE} fill={`url(#${p}s)`} />
      <g clipPath={`url(#${p}f)`}>
        <path d={hair} fill="#3a1f0c" opacity=".4" transform="translate(0 4)" filter={`url(#${p}b)`} />
        <path d="M122 80c10 10 14 26 12 44" stroke="#fff" strokeOpacity=".4" strokeWidth="5" fill="none" filter={`url(#${p}b)`} />
      </g>
      <ellipse cx="80" cy="112" rx="8" ry="5" fill="#ff8f80" opacity=".22" filter={`url(#${p}b)`} />
      <ellipse cx="120" cy="112" rx="8" ry="5" fill="#ff8f80" opacity=".22" filter={`url(#${p}b)`} />
      <path d="M80 90.5q8-4.5 15-1.5M105 89q8-3 15 1.5" stroke="#5a3418" strokeWidth="2.7" fill="none" strokeLinecap="round" />
      <Eye id={`${p}e1`} cx={87} cy={101} iris="#5c7a4e" lash="#22160e" />
      <Eye id={`${p}e2`} cx={113} cy={101} iris="#5c7a4e" lash="#22160e" />
      <Nose c="#a46a48" />
      {/* beard */}
      <path d="M65 98c0 6 2 12 4 16q6-8 15-7q8-2 16 2q8-4 16-2q9-1 15 7c2-4 4-10 4-16 1 30-14 54-35 54S64 128 65 98z" fill={`url(#${p}h)`} />
      <path d="M86 120q14-8 28 0q-4 6-14 4q-10 2-14-4z" fill="#4d2b15" opacity=".55" />
      <path d="M72 124c4 14 14 22 28 22M128 124c-4 14-14 22-28 22" stroke="#fff" strokeOpacity=".12" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M92 128q8 4 16 0q-8 5-16 0z" fill="#b8605a" />
      <path d="M93 128.2q7 2 14 0" stroke="#7a3a2a" strokeWidth="1" fill="none" />
      <path d="M95 130.6q5 1.6 10 0" stroke="#fff" strokeOpacity=".3" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* hair */}
      <path d={hair} fill={`url(#${p}h)`} />
      <path d="M96 36c8-6 22-6 30 0-8-1-20-1-30 0z" fill="#c08850" opacity=".7" />
      <path d="M74 56c8-8 20-12 32-10" stroke="#fff" strokeOpacity=".3" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M62 84c-1 8 0 14 2 18 1-6 2-12 4-16z" fill="#4d2b15" />
    </svg>
  );
}