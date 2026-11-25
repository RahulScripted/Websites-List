/** The four illustrated feature scenes. Each is a self-contained SVG with its own gradient ids (i1 to i4). */
const STARS: Array<[number, number, number, number, number, number]> = [
  [89.0, -217.0, 0.6, 0.35, 4.1, 1.1],
  [-230.0, -21.0, 0.6, 0.36, 3.7, 0.7],
  [361.0, -267.0, 0.6, 0.96, 4.5, 1.7],
  [-226.0, 22.0, 0.6, 0.98, 2.2, 2.6],
  [48.0, -221.0, 0.6, 0.7, 4.2, 2.0],
  [-176.0, 14.0, 0.9, 0.56, 4.2, 0.2],
  [-228.0, -187.0, 1.6, 0.84, 3.9, 2.8],
  [134.0, -163.0, 0.9, 0.79, 3.0, 1.7],
  [330.0, 181.0, 1.6, 0.5, 5.9, 0.4],
  [202.0, 116.0, 0.9, 0.95, 3.7, 2.9],
  [-207.0, 7.0, 1.2, 0.54, 3.4, 1.5],
  [656.0, -262.0, 0.6, 0.96, 3.9, 2.0],
  [-227.0, 86.0, 1.6, 0.5, 3.5, 2.0],
  [-273.0, -46.0, 0.9, 0.73, 4.0, 0.7],
  [45.0, 106.0, 1.6, 0.57, 5.5, 0.2],
  [239.0, 2.0, 0.9, 0.87, 5.5, 0.8],
  [198.0, -103.0, 1.6, 0.97, 2.6, 0.5],
  [-22.0, -172.0, 1.6, 0.88, 2.7, 0.8],
  [-125.0, -6.0, 1.2, 0.97, 4.8, 1.5],
  [441.0, 72.0, 0.6, 0.62, 5.5, 2.9],
  [517.0, 8.0, 1.6, 0.58, 2.4, 1.9],
  [-225.0, -263.0, 0.9, 0.61, 2.4, 1.8],
  [-177.0, 12.0, 0.6, 0.96, 4.5, 0.2],
  [-50.0, -93.0, 1.2, 0.97, 4.4, 1.4],
  [-162.0, -32.0, 1.6, 0.64, 3.2, 0.4],
  [600.0, 107.0, 1.6, 0.88, 2.6, 0.1],
  [841.0, -9.0, 0.9, 0.78, 5.7, 2.3],
  [58.0, 54.0, 0.6, 0.79, 3.0, 1.1],
  [-100.0, 125.0, 1.2, 0.75, 4.5, 2.4],
  [610.0, -193.0, 0.9, 0.87, 5.0, 0.7],
  [321.0, -104.0, 0.6, 0.99, 5.2, 1.4],
  [-68.0, 33.0, 1.2, 0.61, 5.7, 3.0],
  [846.0, -99.0, 0.9, 0.37, 3.9, 1.0],
  [279.0, 242.0, 0.6, 0.64, 4.6, 2.4],
  [-198.0, 63.0, 1.6, 0.85, 5.0, 1.4],
  [-86.0, 134.0, 1.2, 0.36, 5.8, 2.2],
  [256.0, 109.0, 0.6, 0.81, 2.7, 0.4],
  [-119.0, 198.0, 0.9, 0.73, 4.4, 1.4],
  [825.0, -214.0, 0.9, 0.31, 5.2, 2.2],
  [-177.0, 112.0, 0.9, 0.6, 5.5, 2.5],
  [-47.0, -161.0, 1.2, 0.65, 5.1, 1.0],
  [353.0, 159.0, 0.6, 0.94, 3.4, 1.4],
  [400.0, 197.0, 1.6, 0.88, 5.5, 0.4],
  [-118.0, -19.0, 1.6, 0.84, 4.4, 2.3],
  [-120.0, -222.0, 0.6, 0.69, 3.3, 1.6],
  [367.0, 131.0, 0.6, 0.92, 2.2, 0.6],
  [-249.0, -246.0, 1.6, 0.69, 5.0, 2.7],
  [232.0, 37.0, 0.9, 0.78, 3.8, 1.6],
  [274.0, 218.0, 1.2, 0.95, 5.6, 0.6],
  [237.0, -71.0, 1.6, 0.61, 2.3, 0.7],
  [-212.0, 68.0, 0.6, 0.93, 2.6, 2.1],
  [492.0, -221.0, 0.9, 0.98, 2.9, 2.9],
  [178.0, -32.0, 0.9, 0.41, 3.7, 1.5],
  [107.0, -192.0, 1.2, 0.36, 3.5, 1.0],
  [250.0, 87.0, 1.6, 0.53, 4.5, 1.5],
  [-223.0, 242.0, 0.9, 0.98, 2.4, 0.8],
  [-252.0, 128.0, 1.2, 0.83, 5.3, 2.5],
  [511.0, 220.0, 1.6, 0.4, 5.7, 1.7],
  [541.0, -251.0, 0.6, 0.86, 2.7, 2.7],
  [23.0, -291.0, 0.6, 0.86, 2.3, 2.6],
  [-220.0, 175.0, 1.6, 0.31, 6.0, 1.3],
  [799.0, 42.0, 0.6, 0.67, 3.0, 0.3],
  [-106.0, -272.0, 0.9, 0.95, 4.5, 1.6],
  [-53.0, -55.0, 0.9, 0.49, 5.2, 3.0],
  [-256.0, -290.0, 0.9, 0.66, 3.0, 1.3],
  [490.0, 58.0, 1.6, 0.68, 5.6, 2.9],
  [69.0, -182.0, 0.9, 0.54, 5.3, 2.1],
  [463.0, -77.0, 1.2, 0.99, 5.3, 0.0],
  [451.0, 184.0, 1.6, 0.41, 2.3, 2.5],
  [745.0, 69.0, 1.2, 0.72, 4.8, 0.1],
  [-78.0, -152.0, 0.6, 0.48, 5.8, 2.9],
  [356.0, -166.0, 1.2, 0.45, 2.7, 1.0],
  [-199.0, -147.0, 0.9, 0.47, 5.1, 0.3],
  [680.0, -221.0, 0.6, 0.58, 3.2, 1.9],
  [-199.0, 227.0, 0.9, 0.76, 4.9, 2.6],
  [167.0, -121.0, 1.6, 0.4, 4.9, 1.9],
  [-247.0, 159.0, 1.6, 0.81, 5.2, 0.4],
  [329.0, -23.0, 0.6, 0.88, 4.3, 2.7],
  [519.0, 81.0, 0.9, 0.36, 2.2, 1.9],
  [851.0, -93.0, 1.6, 0.69, 4.5, 1.9],
  [517.0, -31.0, 0.6, 0.62, 2.3, 2.8],
  [777.0, -249.0, 0.6, 0.82, 3.9, 2.4],
  [715.0, -171.0, 0.9, 0.46, 4.6, 1.4],
  [715.0, -258.0, 1.2, 0.84, 4.5, 1.9],
  [-207.0, -219.0, 1.2, 0.76, 4.8, 1.9],
  [-140.0, -35.0, 1.6, 0.49, 4.7, 2.1],
  [511.0, -140.0, 1.2, 0.63, 3.9, 0.4],
  [772.0, -190.0, 0.6, 0.96, 2.1, 1.4],
  [684.0, 232.0, 1.6, 1.0, 3.5, 2.7],
  [817.0, -259.0, 0.6, 0.4, 4.1, 2.9],
  [-141.0, 151.0, 1.2, 0.92, 4.8, 0.7],
  [777.0, -33.0, 0.6, 0.41, 5.8, 2.0],
  [187.0, 100.0, 1.6, 0.54, 3.3, 2.5],
  [-298.0, 113.0, 1.6, 0.38, 5.7, 2.1],
  [782.0, -141.0, 1.2, 0.35, 3.6, 2.6],
  [-208.0, 209.0, 1.2, 0.9, 3.1, 0.2],
  [494.0, 49.0, 0.9, 0.47, 3.1, 1.5],
  [-72.0, -95.0, 1.6, 0.92, 5.2, 1.9],
  [796.0, 217.0, 0.9, 0.8, 2.2, 2.2],
  [241.0, 114.0, 1.2, 0.64, 5.6, 1.7],
  [-95.0, -72.0, 1.2, 0.51, 5.0, 2.9],
  [12.0, 61.0, 1.2, 0.64, 4.7, 0.4],
  [472.0, -259.0, 1.6, 0.69, 3.8, 1.0],
  [611.0, -65.0, 0.9, 0.47, 2.7, 1.7],
  [83.0, -97.0, 0.9, 0.92, 5.0, 1.2],
  [197.0, -12.0, 1.6, 0.49, 5.0, 1.5],
  [389.0, -102.0, 0.9, 0.36, 5.6, 1.2],
  [475.0, -62.0, 1.2, 0.89, 5.5, 0.1],
  [-261.0, 90.0, 1.6, 0.98, 4.0, 0.2],
  [816.0, 210.0, 1.6, 0.98, 3.0, 0.3],
  [-115.0, -13.0, 0.6, 0.96, 4.9, 1.9],
  [618.0, -48.0, 0.6, 0.3, 2.5, 1.7],
  [-255.0, 93.0, 0.9, 0.74, 4.1, 1.3],
  [617.0, -245.0, 1.2, 0.67, 4.3, 1.2],
  [-32.0, 31.0, 0.6, 0.68, 6.0, 0.8],
  [80.0, 162.0, 0.9, 0.63, 2.9, 0.7],
  [853.0, 88.0, 1.2, 0.34, 2.8, 2.7],
  [477.0, -255.0, 0.9, 0.77, 5.7, 0.7],
  [-259.0, -114.0, 1.6, 0.55, 3.6, 0.0],
  [51.0, 165.0, 0.6, 0.44, 5.9, 0.9],
  [684.0, -173.0, 0.9, 0.49, 5.6, 0.3],
  [448.0, 36.0, 0.9, 0.64, 5.6, 0.2],
  [414.0, 207.0, 0.6, 0.45, 5.9, 0.4],
  [-238.0, -267.0, 1.6, 0.61, 4.8, 0.9],
  [-164.0, -256.0, 0.9, 0.53, 2.7, 2.8],
  [596.0, -282.0, 1.6, 0.89, 5.9, 1.3],
  [-169.0, -257.0, 0.6, 0.55, 5.8, 0.4],
  [857.0, -186.0, 1.2, 0.84, 3.2, 2.4],
  [-195.0, 88.0, 0.9, 0.56, 5.7, 0.6],
  [137.0, 193.0, 0.6, 0.74, 3.0, 1.9],
  [186.0, -93.0, 1.6, 0.34, 5.7, 0.8],
  [597.0, 194.0, 1.2, 0.55, 3.3, 2.9],
  [-248.0, 111.0, 1.2, 0.95, 3.2, 2.2],
  [415.0, 143.0, 0.6, 0.32, 2.9, 1.4],
  [848.0, 225.0, 1.6, 0.85, 5.7, 2.4],
  [-141.0, -27.0, 0.6, 0.86, 5.0, 2.5],
  [627.0, 34.0, 1.2, 0.9, 3.8, 2.4],
  [415.0, -18.0, 1.6, 0.83, 3.0, 0.2],
  [-259.0, 4.0, 1.2, 0.41, 3.7, 0.3],
  [-213.0, 44.0, 0.9, 0.37, 4.0, 2.1]
];

export function Scene1() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs>
    <radialGradient id="i1bg" cx=".25" cy=".15" r="1"><stop offset="0" stopColor="#17808e" /><stop offset=".5" stopColor="#0d2a3b" /><stop offset="1" stopColor="#050f16" /></radialGradient>
    <linearGradient id="i1area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#17b3c6" stopOpacity=".45" /><stop offset="1" stopColor="#17b3c6" stopOpacity="0" /></linearGradient>
    <linearGradient id="i1panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#f3f8fa" /></linearGradient>
    <pattern id="i1dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.2" fill="#a9e4ea" opacity=".14" /></pattern>
    <filter id="i1blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40" /></filter>
    <filter id="i1sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="22" stdDeviation="20" floodColor="#000" floodOpacity="0.5" /></filter><filter id="i1gr"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .07 0" /></filter>
    </defs><rect width="100%" height="100%" fill="url(#i1bg)" /><rect width="100%" height="100%" fill="url(#i1dots)" /><svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid meet" overflow="visible" width="100%" height="100%">

    <circle cx="500" cy="70" r="120" fill="#17b3c6" opacity=".35" filter="url(#i1blur)" />
    <circle cx="80" cy="400" r="130" fill="#2e9e5b" opacity=".25" filter="url(#i1blur)" />
    <g filter="url(#i1sh)">
     <rect x="66" y="64" width="330" height="300" rx="20" fill="url(#i1panel)" />
    </g>
    <text x="92" y="100" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="17" fill="#14102b">Class 9B · Algebra</text>
    <circle cx="96" cy="120" r="4" fill="#2e9e5b"><animate attributeName="opacity" values="1;.2;1" dur="1.4s" repeatCount="indefinite" /></circle>
    <text x="106" y="124" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10.5" fill="#75708a" letterSpacing=".5">LIVE · 42 STUDENTS</text>
    <rect x="318" y="86" width="56" height="22" rx="11" fill="#e6f6f8" /><text x="330" y="101" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#17808e">WEEK</text>
    <rect x="94" y="146" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="134" y="146" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="174" y="146" width="34" height="26" rx="6" fill="#a8dfc0"></rect><rect x="214" y="146" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="254" y="146" width="34" height="26" rx="6" fill="#fbe1a6"></rect><rect x="294" y="146" width="34" height="26" rx="6" fill="#a8dfc0"></rect><rect x="334" y="146" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="94" y="178" width="34" height="26" rx="6" fill="#a8dfc0"></rect><rect x="134" y="178" width="34" height="26" rx="6" fill="#e4276d"><animate attributeName="opacity" values="1;.35;1" dur="1.8s" repeatCount="indefinite" /></rect><rect x="174" y="178" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="214" y="178" width="34" height="26" rx="6" fill="#a8dfc0"></rect><rect x="254" y="178" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="294" y="178" width="34" height="26" rx="6" fill="#fbe1a6"></rect><rect x="334" y="178" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="94" y="210" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="134" y="210" width="34" height="26" rx="6" fill="#a8dfc0"></rect><rect x="174" y="210" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="214" y="210" width="34" height="26" rx="6" fill="#e4276d"><animate attributeName="opacity" values="1;.35;1" dur="1.8s" repeatCount="indefinite" /></rect><rect x="254" y="210" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="294" y="210" width="34" height="26" rx="6" fill="#a8dfc0"></rect><rect x="334" y="210" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="94" y="242" width="34" height="26" rx="6" fill="#fbe1a6"></rect><rect x="134" y="242" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="174" y="242" width="34" height="26" rx="6" fill="#a8dfc0"></rect><rect x="214" y="242" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="254" y="242" width="34" height="26" rx="6" fill="#2e9e5b"></rect><rect x="294" y="242" width="34" height="26" rx="6" fill="#e4276d"><animate attributeName="opacity" values="1;.35;1" dur="1.8s" repeatCount="indefinite" /></rect><rect x="334" y="242" width="34" height="26" rx="6" fill="#a8dfc0"></rect>
    <path d="M92 284 H374" stroke="#e6ecef" />
    <path d="M92 340 C120 330 140 318 168 322 S220 300 246 304 S300 280 326 276 S360 262 374 258 V346 H92Z" fill="url(#i1area)" />
    <path d="M92 340 C120 330 140 318 168 322 S220 300 246 304 S300 280 326 276 S360 262 374 258" fill="none" stroke="#17b3c6" strokeWidth="3" strokeLinecap="round" strokeDasharray="320" strokeDashoffset="320"><animate attributeName="stroke-dashoffset" values="320;0" dur="2.4s" fill="freeze" repeatCount="indefinite" /></path>
    <circle cx="374" cy="258" r="5" fill="#fff" stroke="#17b3c6" strokeWidth="3" />
    <text x="92" y="302" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#9a9da6">MASTERY TREND</text>

    <g filter="url(#i1sh)">
     <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="5s" repeatCount="indefinite" />
     <rect x="352" y="96" width="196" height="120" rx="18" fill="#fff" />
     <circle cx="404" cy="156" r="32" fill="none" stroke="#e6f6f8" strokeWidth="10" />
     <circle cx="404" cy="156" r="32" fill="none" stroke="#17b3c6" strokeWidth="10" strokeLinecap="round" strokeDasharray="201" strokeDashoffset="201" transform="rotate(-90 404 156)"><animate attributeName="stroke-dashoffset" values="201;44" dur="2s" fill="freeze" /></circle>
     <text x="404" y="161" textAnchor="middle" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="15" fill="#14102b">78%</text>
     <text x="450" y="144" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="13" fill="#14102b">Class mastery</text>
     <rect x="450" y="156" width="62" height="20" rx="10" fill="#e2f5e8" /><text x="458" y="170" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#1f7a48">+12% WK</text>
     </g>
    </g>
    <g filter="url(#i1sh)">
     <g><animateTransform attributeName="transform" type="translate" values="0 0;0 7;0 0" dur="6s" repeatCount="indefinite" />
     <rect x="318" y="276" width="236" height="84" rx="18" fill="#14102b" />
     <rect x="318.5" y="276.5" width="235" height="83" rx="17.5" fill="none" stroke="#fff" strokeOpacity=".12" />
     <g transform="translate(354 318) scale(1)">
    <circle r="20" fill="#a9e4ea" />
    <path d="M-12 20 C-14 -2 -8 -10 0 -10 C8 -10 14 -2 12 20Z" fill="#4a1d2e" />
    <circle cx="-5" cy="-2" r="5" fill="#fff" /><circle cx="5" cy="-2" r="5" fill="#fff" />
    <circle cx="-4.5" cy="-1.5" r="2.3" fill="#14102b" /><circle cx="5.5" cy="-1.5" r="2.3" fill="#14102b" />
    <path d="M-2 4 L2 4 L0 7Z" fill="#f7a81b" />
    <path d="M-11 -11 L0 -16 L11 -11 L0 -6Z" fill="#14102b" /></g>
     <text x="386" y="310" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="14" fill="#fff">3 students are stuck</text>
     <text x="386" y="330" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#9a9da6">FRACTIONS · QUESTION 4</text>
     <rect x="386" y="338" width="86" height="4" rx="2" fill="#333" /><rect x="386" y="338" width="30" height="4" rx="2" fill="#e4276d" />
     <circle cx="534" cy="292" r="5" fill="#e4276d"><animate attributeName="r" values="5;8;5" dur="1.6s" repeatCount="indefinite" /></circle>
     </g>
    </g>

    </svg><rect width="100%" height="100%" filter="url(#i1gr)" /></svg>
  );
}

export function Scene2() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs>
    <linearGradient id="i2bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff1e4" /><stop offset=".55" stopColor="#fbd0d8" /><stop offset="1" stopColor="#f5a3bd" /></linearGradient>
    <linearGradient id="i2phone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2b2c2d" /><stop offset=".4" stopColor="#0c0d0d" /><stop offset="1" stopColor="#2a2b2c" /></linearGradient>
    <linearGradient id="i2flame" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#e4276d" /><stop offset=".6" stopColor="#ff742e" /><stop offset="1" stopColor="#f7a81b" /></linearGradient>
    <linearGradient id="i2ring" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#17b3c6" /><stop offset="1" stopColor="#2e9e5b" /></linearGradient>
    <filter id="i2blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="36" /></filter>
    <filter id="i2sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#7a2c5e" floodOpacity="0.28" /></filter><filter id="i2gr"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .07 0" /></filter>
    <clipPath id="i2scr"><rect x="222" y="44" width="166" height="680" rx="26" /></clipPath>
    </defs><rect width="100%" height="100%" fill="url(#i2bg)" /><svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid meet" overflow="visible" width="100%" height="100%">

    <circle cx="110" cy="80" r="110" fill="#fff" opacity=".7" filter="url(#i2blur)" />
    <circle cx="520" cy="360" r="120" fill="#e4276d" opacity=".25" filter="url(#i2blur)" />
    <circle cx="305" cy="230" r="170" fill="none" stroke="#fff" strokeOpacity=".5" strokeDasharray="2 8" />
    <circle cx="305" cy="230" r="230" fill="none" stroke="#fff" strokeOpacity=".35" strokeDasharray="2 8" />

    <g filter="url(#i2sh)"><rect x="212" y="34" width="186" height="700" rx="34" fill="url(#i2phone)" /></g>
    <rect x="213" y="35" width="184" height="698" rx="33" fill="none" stroke="#fff" strokeOpacity=".15" />
    <g clipPath="url(#i2scr)">
     <rect x="222" y="44" width="166" height="680" fill="#fffaf5" />
     <rect x="282" y="54" width="46" height="13" rx="6.5" fill="#14102b" />
     <text x="236" y="96" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="20" fill="#14102b">Today</text>
     <text x="236" y="112" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8.5" fill="#9a9da6">TUESDAY · 3 SESSIONS</text>
     <g transform="translate(366 96) scale(0.6)">
    <circle r="20" fill="#a9e4ea" />
    <path d="M-12 20 C-14 -2 -8 -10 0 -10 C8 -10 14 -2 12 20Z" fill="#4a1d2e" />
    <circle cx="-5" cy="-2" r="5" fill="#fff" /><circle cx="5" cy="-2" r="5" fill="#fff" />
    <circle cx="-4.5" cy="-1.5" r="2.3" fill="#14102b" /><circle cx="5.5" cy="-1.5" r="2.3" fill="#14102b" />
    <path d="M-2 4 L2 4 L0 7Z" fill="#f7a81b" />
    <path d="M-11 -11 L0 -16 L11 -11 L0 -6Z" fill="#14102b" /></g>
     <text x="244" y="136" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#9a9da6">M</text><circle cx="244" cy="144" r="2" fill="#2e9e5b" /><rect x="256" y="124" width="16" height="28" rx="8" fill="#14102b" /><text x="264" y="136" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#fff">T</text><circle cx="264" cy="144" r="2" fill="#17b3c6" /><text x="284" y="136" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#9a9da6">W</text><text x="304" y="136" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#9a9da6">T</text><circle cx="304" cy="144" r="2" fill="#2e9e5b" /><text x="324" y="136" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#9a9da6">F</text><circle cx="324" cy="144" r="2" fill="#2e9e5b" /><text x="344" y="136" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#9a9da6">S</text><text x="364" y="136" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#9a9da6">S</text>
     <rect x="232" y="166" width="148" height="48" rx="12" fill="#fff" stroke="#eee" />
    <rect x="232" y="178" width="3" height="24" rx="1.5" fill="#2e9e5b" /><circle cx="252" cy="188" r="10" fill="#2e9e5b" /><path d="M247 188 l3.5 3.5 l6-7" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <text x="272" y="187" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="11.5" fill="#14102b">Fractions practice</text>
    <text x="272" y="199" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8.5" fill="#9a9da6">20 MIN · MATH</text>
     <rect x="232" y="222" width="148" height="48" rx="12" fill="#eaf8fd" stroke="#eee" />
    <rect x="232" y="234" width="3" height="24" rx="1.5" fill="#17b3c6" /><circle cx="252" cy="244" r="10" fill="none" stroke="#17b3c6" strokeWidth="3" /><circle cx="252" cy="244" r="4" fill="#17b3c6"><animate attributeName="r" values="3;5;3" dur="1.2s" repeatCount="indefinite" /></circle>
    <text x="272" y="243" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="11.5" fill="#14102b">Read chapter 4</text>
    <text x="272" y="255" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8.5" fill="#9a9da6">15 MIN · ENGLISH</text><rect x="272" y="258" width="96" height="4" rx="2" fill="#e8eef0" /><rect x="272" y="258" width="20" height="4" rx="2" fill="#17b3c6"><animate attributeName="width" values="20;80" dur="6s" repeatCount="indefinite" /></rect>
     <rect x="232" y="278" width="148" height="48" rx="12" fill="#fff" stroke="#eee" />
    <rect x="232" y="290" width="3" height="24" rx="1.5" fill="#e4276d" /><circle cx="252" cy="300" r="10" fill="none" stroke="#d3d5d9" strokeWidth="2.4" strokeDasharray="3 3" />
    <text x="272" y="299" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="11.5" fill="#14102b">Essay outline</text>
    <text x="272" y="311" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8.5" fill="#9a9da6">25 MIN · HISTORY</text>
     <rect x="232" y="340" width="148" height="44" rx="12" fill="#14102b" />
     <text x="306" y="366" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#fff">START NEXT SESSION →</text>
    </g>

    <g filter="url(#i2sh)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -8;0 0" dur="5s" repeatCount="indefinite" />
     <rect x="48" y="118" width="150" height="168" rx="22" fill="#fff" />
     <text x="70" y="146" fontFamily="DM Mono,ui-monospace,monospace" fontSize="9.5" fill="#9a9da6">FOCUS TIMER</text>
     <circle cx="123" cy="212" r="44" fill="none" stroke="#f1f2f3" strokeWidth="9" />
     <circle cx="123" cy="212" r="44" fill="none" stroke="url(#i2ring)" strokeWidth="9" strokeLinecap="round" strokeDasharray="276" transform="rotate(-90 123 212)"><animate attributeName="stroke-dashoffset" values="40;276" dur="20s" repeatCount="indefinite" /></circle>
     <text x="123" y="217" textAnchor="middle" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="20" fill="#14102b">18:42</text>
     <text x="123" y="274" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="9" fill="#9a9da6">READING · 1 OF 2</text>
    </g></g>

    <g filter="url(#i2sh)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 8;0 0" dur="6s" repeatCount="indefinite" />
     <rect x="414" y="236" width="150" height="112" rx="22" fill="#14102b" />
     <path d="M446 300 C432 288 438 272 446 264 C446 274 452 276 454 270 C456 260 452 252 448 246 C466 252 478 270 470 290 C468 296 462 302 456 302 C450 302 448 302 446 300Z" fill="url(#i2flame)"><animateTransform attributeName="transform" type="scale" additive="sum" values="1 1;1 1.04;1 1" dur="1.2s" repeatCount="indefinite" /></path>
     <text x="484" y="272" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="22" fill="#fff">12</text>
     <text x="484" y="288" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8.5" fill="#9a9da6">DAY STREAK</text>
     <g fill="#2e9e5b"><rect x="432" y="320" width="11" height="10" rx="3" opacity="0.45" /><rect x="449" y="314" width="11" height="16" rx="3" opacity="0.53" /><rect x="466" y="318" width="11" height="12" rx="3" opacity="0.61" /><rect x="483" y="310" width="11" height="20" rx="3" opacity="0.69" /><rect x="500" y="312" width="11" height="18" rx="3" opacity="0.77" /><rect x="517" y="306" width="11" height="24" rx="3" opacity="0.8500000000000001" /><rect x="534" y="302" width="11" height="28" rx="3" opacity="0.9299999999999999" /></g>
    </g></g>

    <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -10;0 0" dur="4s" repeatCount="indefinite" />
     <rect x="430" y="104" width="86" height="34" rx="17" fill="#2e9e5b" stroke="#14102b" strokeWidth="2" />
     <text x="473" y="126" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontWeight="500" fontSize="12" fill="#14102b">+40 XP</text>
    </g>
    <path d="M520 180 l5 13 l13 5 l-13 5 l-5 13 l-5-13 l-13-5 l13-5z" fill="#fff" />
    <path d="M90 330 l4 10 l10 4 l-10 4 l-4 10 l-4-10 l-10-4 l10-4z" fill="#14102b" />

    </svg><rect width="100%" height="100%" filter="url(#i2gr)" /></svg>
  );
}

export function Scene3() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs>
    <linearGradient id="i3wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbe3b0" /><stop offset="1" stopColor="#f3c47a" /></linearGradient>
    <linearGradient id="i3sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4b2a6b" /><stop offset=".5" stopColor="#e0506a" /><stop offset="1" stopColor="#ffb35c" /></linearGradient>
    <linearGradient id="i3table" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8a4f37" /><stop offset="1" stopColor="#4a1d2e" /></linearGradient>
    <linearGradient id="i3lap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9dbdf" /><stop offset="1" stopColor="#a9adb4" /></linearGradient>
    <radialGradient id="i3lamp" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fff6d6" stopOpacity=".95" /><stop offset="1" stopColor="#fff6d6" stopOpacity="0" /></radialGradient>
    <radialGradient id="i3screen" cx=".5" cy=".5" r=".6"><stop offset="0" stopColor="#17b3c6" stopOpacity=".45" /><stop offset="1" stopColor="#17b3c6" stopOpacity="0" /></radialGradient>
    <filter id="i3sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#4a1d2e" floodOpacity="0.35" /></filter><filter id="i3gr"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .07 0" /></filter>
    </defs><rect width="100%" height="100%" fill="url(#i3wall)" /><svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid meet" overflow="visible" width="100%" height="100%">

    <g filter="url(#i3sh)"><rect x="352" y="36" width="200" height="190" rx="8" fill="#fff" /></g>
    <rect x="362" y="46" width="180" height="170" rx="4" fill="url(#i3sky)" />
    <circle cx="470" cy="190" r="34" fill="#ffd27a" opacity=".95" />
    <path d="M362 216 L362 180 L392 168 L420 182 L456 160 L496 178 L542 164 L542 216Z" fill="#3a1446" opacity=".55" />
    <path d="M362 216 L362 196 L410 188 L470 200 L542 186 L542 216Z" fill="#1c1033" opacity=".7" />
    <path d="M452 46 V216 M362 131 H542" stroke="#fff" strokeWidth="7" />
    <g fill="#fff" opacity=".8"><circle cx="390" cy="70" r="1.4" /><circle cx="520" cy="60" r="1" /><circle cx="430" cy="90" r="1" /></g>
    <circle cx="110" cy="70" r="150" fill="url(#i3lamp)" />
    <path d="M60 -400 V40" stroke="#14102b" strokeWidth="2" />
    <path d="M30 70 Q60 30 90 70Z" fill="#14102b" /><ellipse cx="60" cy="70" rx="30" ry="6" fill="#ffe9a8" />

    <rect x="-600" y="318" width="1800" height="700" fill="url(#i3table)" />
    <rect x="-600" y="318" width="1800" height="4" fill="#b06d4c" />
    <ellipse cx="250" cy="330" rx="200" ry="10" fill="#000" opacity=".25" />

    <ellipse cx="250" cy="250" rx="180" ry="110" fill="url(#i3screen)" />
    <g filter="url(#i3sh)">
     <rect x="120" y="112" width="262" height="186" rx="14" fill="#18191a" />
    </g>
    <rect x="130" y="122" width="242" height="166" rx="6" fill="#fdfcfa" />
    <rect x="130" y="122" width="242" height="22" rx="6" fill="#f1f2f3" /><rect x="130" y="138" width="242" height="6" fill="#f1f2f3" />
    <circle cx="142" cy="133" r="3" fill="#e4276d" /><circle cx="152" cy="133" r="3" fill="#f7a81b" /><circle cx="162" cy="133" r="3" fill="#2e9e5b" />
    <text x="251" y="137" textAnchor="middle" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#9a9da6">GYANSETU · ALGEBRA</text>
    <g transform="translate(150 166) scale(0.55)">
    <circle r="20" fill="#a9e4ea" />
    <path d="M-12 20 C-14 -2 -8 -10 0 -10 C8 -10 14 -2 12 20Z" fill="#4a1d2e" />
    <circle cx="-5" cy="-2" r="5" fill="#fff" /><circle cx="5" cy="-2" r="5" fill="#fff" />
    <circle cx="-4.5" cy="-1.5" r="2.3" fill="#14102b" /><circle cx="5.5" cy="-1.5" r="2.3" fill="#14102b" />
    <path d="M-2 4 L2 4 L0 7Z" fill="#f7a81b" />
    <path d="M-11 -11 L0 -16 L11 -11 L0 -6Z" fill="#14102b" /></g>
    <rect x="164" y="154" width="150" height="26" rx="10" fill="#f1f2f3" />
    <text x="174" y="171" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontSize="9.5" fill="#14102b">What if we double the width?</text>
    <rect x="232" y="188" width="128" height="26" rx="10" fill="#17b3c6" />
    <text x="242" y="205" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontSize="9.5" fill="#14102b">The area doubles too?</text>
    <g transform="translate(150 234) scale(0.55)">
    <circle r="20" fill="#a9e4ea" />
    <path d="M-12 20 C-14 -2 -8 -10 0 -10 C8 -10 14 -2 12 20Z" fill="#4a1d2e" />
    <circle cx="-5" cy="-2" r="5" fill="#fff" /><circle cx="5" cy="-2" r="5" fill="#fff" />
    <circle cx="-4.5" cy="-1.5" r="2.3" fill="#14102b" /><circle cx="5.5" cy="-1.5" r="2.3" fill="#14102b" />
    <path d="M-2 4 L2 4 L0 7Z" fill="#f7a81b" />
    <path d="M-11 -11 L0 -16 L11 -11 L0 -6Z" fill="#14102b" /></g>
    <rect x="164" y="222" width="168" height="26" rx="10" fill="#f1f2f3" />
    <text x="174" y="239" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontSize="9.5" fill="#14102b">Yes! Can you show me why?</text>
    <rect x="144" y="258" width="214" height="20" rx="10" fill="#fff" stroke="#e2e2e2" />
    <rect x="154" y="265" width="1.5" height="8" fill="#14102b"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" /></rect>
    <path d="M92 298 H410 L430 318 H72Z" fill="url(#i3lap)" />
    <path d="M216 298 H286 L282 304 H220Z" fill="#8f939a" />

    <g transform="translate(468 262)">
     <path d="M-4 -12 c-8 -10 8 -16 0 -28" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7"><animate attributeName="opacity" values="0;.8;0" dur="3s" repeatCount="indefinite" /><animateTransform attributeName="transform" type="translate" values="0 6;0 -8" dur="3s" repeatCount="indefinite" /></path>
     <path d="M10 -12 c-8 -10 8 -16 0 -28" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7"><animate attributeName="opacity" values="0;.8;0" dur="3s" begin="1.4s" repeatCount="indefinite" /><animateTransform attributeName="transform" type="translate" values="0 6;0 -8" dur="3s" begin="1.4s" repeatCount="indefinite" /></path>
     <path d="M-20 0 H26 V40 Q26 56 10 56 H-4 Q-20 56 -20 40Z" fill="#e4276d" filter="url(#i3sh)" />
     <path d="M26 8 Q42 8 42 22 Q42 36 26 34" fill="none" stroke="#e4276d" strokeWidth="6" />
     <ellipse cx="3" cy="2" rx="21" ry="4" fill="#5a2a1c" />
    </g>
    <g transform="translate(530 318)">
     <path d="M-18 0 L-14 -32 H14 L18 0Z" fill="#fff" stroke="#14102b" strokeWidth="2" />
     <path d="M0 -32 C-6 -60 -30 -62 -32 -78 C-14 -76 -4 -64 0 -32 M0 -32 C4 -66 22 -74 30 -90 C34 -70 14 -58 0 -32 M0 -32 C0 -60 -4 -76 4 -96 C12 -78 6 -56 0 -32" fill="#2e9e5b" stroke="#1f7a48" strokeWidth="1.5" />
    </g>

    <g filter="url(#i3sh)"><g><animateTransform attributeName="transform" type="translate" values="0 -6;0 4;0 -6" dur="5s" repeatCount="indefinite" />
     <rect x="28" y="140" width="176" height="64" rx="16" fill="#fff" />
     <circle cx="56" cy="172" r="14" fill="#2e9e5b" /><path d="M49 172 l5 5 l9-10" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
     <text x="80" y="168" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="12" fill="#14102b">Homework done</text>
     <text x="80" y="184" fontFamily="DM Mono,ui-monospace,monospace" fontSize="9" fill="#9a9da6">ALGEBRA · 24 MIN</text>
     <text x="176" y="160" fontFamily="DM Mono,ui-monospace,monospace" fontSize="8" fill="#d9cfbd">NOW</text>
    </g></g>
    <g filter="url(#i3sh)"><g><animateTransform attributeName="transform" type="translate" values="0 4;0 -6;0 4" dur="6s" repeatCount="indefinite" />
     <rect x="386" y="242" width="64" height="40" rx="14" fill="#14102b" />
     <text x="418" y="268" textAnchor="middle" fontFamily="Inter Tight,Inter,system-ui,sans-serif" fontWeight="600" fontSize="16" fill="#f7a81b">92%</text>
    </g></g>

    </svg><rect width="100%" height="100%" filter="url(#i3gr)" /></svg>
  );
}

export function Scene4() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs>
    <linearGradient id="i4sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0b0618" /><stop offset=".45" stopColor="#2a0f3d" /><stop offset=".8" stopColor="#8a1f55" /><stop offset="1" stopColor="#ff7a59" /></linearGradient>
    <linearGradient id="i4m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5b1a4d" /><stop offset="1" stopColor="#2a0f3d" /></linearGradient>
    <linearGradient id="i4m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3a1446" /><stop offset="1" stopColor="#140a24" /></linearGradient>
    <linearGradient id="i4path" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#e4276d" /><stop offset=".6" stopColor="#ff742e" /><stop offset="1" stopColor="#f7a81b" /></linearGradient>
    <radialGradient id="i4star" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#fff" stopOpacity=".9" /><stop offset=".3" stopColor="#fbe1a6" stopOpacity=".45" /><stop offset="1" stopColor="#fbe1a6" stopOpacity="0" /></radialGradient>
    <filter id="i4glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
    <filter id="i4gr"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .07 0" /></filter>
    </defs><rect width="100%" height="100%" fill="url(#i4sky)" /><svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid meet" overflow="visible" width="100%" height="100%">

    <g fill="#fff">{STARS.map(([cx, cy, r, opacity, dur, begin], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} opacity={opacity}>
                <animate attributeName="opacity" values="1;.2;1" dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" />
              </circle>
            ))}</g>
    <circle cx="300" cy="64" r="90" fill="url(#i4star)"><animate attributeName="r" values="80;100;80" dur="4s" repeatCount="indefinite" /></circle>
    <g transform="translate(300 64)">
     <path d="M0 -34 C3 -9 9 -3 34 0 C9 3 3 9 0 34 C-3 9 -9 3 -34 0 C-9 -3 -3 -9 0 -34Z" fill="#fff"><animateTransform attributeName="transform" type="rotate" values="0;45;0" dur="10s" repeatCount="indefinite" /></path>
     <circle r="4" fill="#f7a81b" />
    </g>
    <path d="M-600 330 L-300 250 L0 300 L70 236 L120 262 L200 190 L260 240 L340 176 L420 236 L480 200 L900 230 L1200 300 V1000 H-600Z" fill="url(#i4m1)" opacity=".9" />
    <path d="M-600 360 L-260 300 L0 340 L90 284 L170 316 L250 270 L330 318 L420 276 L520 320 L860 280 L1200 330 V1000 H-600Z" fill="url(#i4m2)" />
    <path d="M300 900 V440" fill="none" stroke="#e4276d" strokeWidth="5" strokeOpacity=".7" filter="url(#i4glow)" />
    <path d="M300 440 C130 400 150 330 300 302 C450 274 450 232 300 206 C160 182 170 132 300 104" fill="none" stroke="#000" strokeOpacity=".35" strokeWidth="22" strokeLinecap="round" />
    <path d="M300 440 C130 400 150 330 300 302 C450 274 450 232 300 206 C160 182 170 132 300 104" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="2" strokeDasharray="4 7" />
    <path d="M300 440 C130 400 150 330 300 302 C450 274 450 232 300 206 C160 182 170 132 300 104" fill="none" stroke="url(#i4path)" strokeWidth="5" strokeLinecap="round" pathLength="100" strokeDasharray="64 100" filter="url(#i4glow)" />
    <circle r="4" fill="#fff" filter="url(#i4glow)"><animateMotion dur="5s" repeatCount="indefinite" keyPoints="0;.64" keyTimes="0;1" calcMode="linear" path="M300 440 C130 400 150 330 300 302 C450 274 450 232 300 206 C160 182 170 132 300 104" /></circle>
    <rect x="64.2" y="371.2" width="101.2" height="22" rx="11" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.22)" /><text x="75.2" y="385.7" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#fff">NUMBER SENSE</text><circle cx="183.4" cy="382.2" r="10" fill="#f7a81b" stroke="#fff" strokeWidth="2.5" /><path d="M179.4 382.2 l3 3 l5.5-6" fill="none" stroke="#14102b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><rect x="186.9" y="298.5" width="61.6" height="22" rx="11" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.22)" /><text x="197.9" y="313.0" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#fff">RATIOS</text><circle cx="266.5" cy="309.5" r="10" fill="#f7a81b" stroke="#fff" strokeWidth="2.5" /><path d="M262.5 309.5 l3 3 l5.5-6" fill="none" stroke="#14102b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><rect x="412.5" y="262.8" width="94.6" height="22" rx="11" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.22)" /><text x="423.5" y="277.3" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#fff">EXPRESSIONS</text><circle cx="394.5" cy="273.8" r="10" fill="#f7a81b" stroke="#fff" strokeWidth="2.5" /><path d="M390.5 273.8 l3 3 l5.5-6" fill="none" stroke="#14102b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><rect x="395.2" y="214.2" width="81.4" height="22" rx="11" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.22)" /><text x="406.2" y="228.7" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#fff">EQUATIONS</text><circle cx="377.2" cy="225.2" r="10" fill="#f7a81b" stroke="#fff" strokeWidth="2.5" /><path d="M373.2 225.2 l3 3 l5.5-6" fill="none" stroke="#14102b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><rect x="129.7" y="175.9" width="81.4" height="22" rx="11" fill="#fff" stroke="rgba(255,255,255,.22)" /><text x="140.7" y="190.4" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="#14102b">FUNCTIONS</text><circle cx="229.1" cy="186.9" r="11" fill="none" stroke="#fff" strokeWidth="2"><animate attributeName="r" values="11;24" dur="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values=".9;0" dur="1.8s" repeatCount="indefinite" /></circle><circle cx="229.1" cy="186.9" r="11" fill="#fff" /><circle cx="229.1" cy="186.9" r="5" fill="#e4276d" /><rect x="110.7" y="134.1" width="74.8" height="22" rx="11" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.22)" /><text x="121.7" y="148.6" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="rgba(255,255,255,.6)">GEOMETRY</text><circle cx="203.5" cy="145.1" r="8" fill="#1c1033" stroke="#fff" strokeOpacity=".55" strokeWidth="2" strokeDasharray="3 3" /><rect x="168.5" y="99.2" width="88.0" height="22" rx="11" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.22)" /><text x="179.5" y="113.7" fontFamily="DM Mono,ui-monospace,monospace" fontSize="10" fill="rgba(255,255,255,.6)">STATISTICS</text><circle cx="274.5" cy="110.2" r="8" fill="#1c1033" stroke="#fff" strokeOpacity=".55" strokeWidth="2" strokeDasharray="3 3" />

    </svg><rect width="100%" height="100%" filter="url(#i4gr)" /></svg>
  );
}
