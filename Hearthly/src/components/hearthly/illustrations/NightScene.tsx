/** The house at night: sky, moon, lit windows, trees, the drive and sensor rings. Drawn in SVG, no image files. */
export function NightScene() {
  return (
    <svg className="hy-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="hy-fl-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#060a12" /><stop offset=".4" stopColor="#14213a" /><stop offset=".6" stopColor="#363c55" /><stop offset=".69" stopColor="#8c6458" /><stop offset=".74" stopColor="#d08a54" /><stop offset="1" stopColor="#d08a54" /></linearGradient>
                  <filter id="hy-fl-cloud" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".0018 .0065" numOctaves="5" seed="8" /><feColorMatrix values="0 0 0 0 .8 0 0 0 0 .82 0 0 0 0 .92 1.5 0 0 0 -.66" /></filter>
                  <linearGradient id="hy-fl-cmask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".15" /><stop offset=".5" stopColor="#fff" stopOpacity=".7" /><stop offset=".8" stopColor="#fff" stopOpacity="0" /></linearGradient>
                  <mask id="hy-fl-m"><rect width="1600" height="700" fill="url(#hy-fl-cmask)" /></mask>
                  <radialGradient id="hy-fl-moon"><stop offset="0" stopColor="#fff6e0" stopOpacity=".45" /><stop offset="1" stopColor="#fff6e0" stopOpacity="0" /></radialGradient>
                  <linearGradient id="hy-fl-ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#121a14" /><stop offset="1" stopColor="#030504" /></linearGradient>
                  <linearGradient id="hy-fl-conc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3b3d40" /><stop offset="1" stopColor="#1b1c1e" /></linearGradient>
                  <linearGradient id="hy-fl-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4a3424" /><stop offset="1" stopColor="#22170f" /></linearGradient>
                  <pattern id="hy-fl-slat" width="9" height="200" patternUnits="userSpaceOnUse"><rect width="9" height="200" fill="url(#hy-fl-wood)" /><rect width="1.4" height="200" fill="#000" opacity=".45" /></pattern>
                  <linearGradient id="hy-fl-int" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe9bd" /><stop offset=".55" stopColor="#f6b25c" /><stop offset="1" stopColor="#b9641f" /></linearGradient>
                  <linearGradient id="hy-fl-int2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffdb9e" /><stop offset="1" stopColor="#d98a3a" /></linearGradient>
                  <linearGradient id="hy-fl-pool" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0f3348" /><stop offset="1" stopColor="#03111a" /></linearGradient>
                  <radialGradient id="hy-fl-cone" cx=".5" cy="0" r="1"><stop offset="0" stopColor="#ffcf87" stopOpacity=".55" /><stop offset="1" stopColor="#ffcf87" stopOpacity="0" /></radialGradient>
                  <filter id="hy-fl-b3" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" /></filter>
                  <filter id="hy-fl-b10" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" /></filter>
                  <filter id="hy-fl-b30" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="30" /></filter>
                </defs>
                <rect width="1600" height="900" fill="url(#hy-fl-sky)" />
                <rect width="1600" height="700" filter="url(#hy-fl-cloud)" mask="url(#hy-fl-m)" opacity=".4" />
                <g fill="#e9eef3"><circle cx="120" cy="80" r="1.3" opacity=".7" /><circle cx="260" cy="170" r="1" opacity=".5" /><circle cx="420" cy="60" r="1.5" opacity=".8" /><circle cx="610" cy="130" r="1" opacity=".5" /><circle cx="760" cy="50" r="1.3" opacity=".7" /><circle cx="1180" cy="90" r="1.1" opacity=".6" /><circle cx="1500" cy="210" r="1" opacity=".5" /><circle cx="1550" cy="60" r="1.5" opacity=".8" /><circle cx="890" cy="190" r="1" opacity=".4" /></g>
                <circle cx="1380" cy="150" r="90" fill="url(#hy-fl-moon)" />
                <circle cx="1380" cy="150" r="20" fill="#f4efe2" />
                <circle cx="1386" cy="146" r="4" fill="#d9d2c0" opacity=".6" /><circle cx="1372" cy="158" r="3" fill="#d9d2c0" opacity=".5" />
                <path d="M0 650C30 622 60 640 92 618s58-4 88 14 50-30 84-20 42 26 70 10 60-18 92 4 44-8 78-2 40 30 80 26 70-24 110-14 30 28 64 30H0z" fill="#0d1612" />
                <rect y="648" width="1600" height="252" fill="url(#hy-fl-ground)" />
                <ellipse cx="1080" cy="690" rx="460" ry="60" fill="#ffb35c" opacity=".3" filter="url(#hy-fl-b30)" />
                <rect x="740" y="430" width="720" height="230" fill="url(#hy-fl-conc)" />
                <g stroke="#000" strokeOpacity=".18"><path d="M1210 470h250M1210 510h250M1210 550h250M1210 590h250M1210 630h250" /></g>
                <rect x="790" y="455" width="420" height="205" fill="url(#hy-fl-int)" />
                <rect x="790" y="455" width="420" height="12" fill="#000" opacity=".22" />
                <rect x="790" y="600" width="420" height="60" fill="#5a2f12" opacity=".25" />
                <g stroke="#2a1c12" strokeWidth="1.5"><path d="M880 467v40M960 467v52M1040 467v40" /></g>
                <g><circle cx="880" cy="512" r="18" fill="#fff6dd" opacity=".55" filter="url(#hy-fl-b10)" /><circle cx="960" cy="524" r="18" fill="#fff6dd" opacity=".55" filter="url(#hy-fl-b10)" /><circle cx="1040" cy="512" r="18" fill="#fff6dd" opacity=".55" filter="url(#hy-fl-b10)" /><path d="M872 507h16l-3 7h-10zM952 519h16l-3 7h-10zM1032 507h16l-3 7h-10z" fill="#2a1c12" /><circle cx="880" cy="515" r="3" fill="#fff" /><circle cx="960" cy="527" r="3" fill="#fff" /><circle cx="1040" cy="515" r="3" fill="#fff" /></g>
                <path d="M830 660v-40q0-10 10-10h150q10 0 10 10v40z" fill="#2c1b10" opacity=".88" />
                <path d="M840 616h160" stroke="#6b4428" strokeOpacity=".6" strokeWidth="2" />
                <rect x="1020" y="632" width="70" height="8" fill="#1e140c" opacity=".85" />
                <rect x="1100" y="530" width="90" height="4" fill="#2a1c12" opacity=".8" />
                <g fill="#2a1c12" opacity=".75"><rect x="1106" y="508" width="6" height="22" /><rect x="1114" y="512" width="5" height="18" /><rect x="1121" y="505" width="7" height="25" /><rect x="1160" y="516" width="16" height="14" rx="7" /></g>
                <g fill="#14261a" opacity=".9"><ellipse cx="1170" cy="600" rx="22" ry="34" /><ellipse cx="1152" cy="612" rx="14" ry="22" /></g>
                <rect x="1160" y="626" width="22" height="34" fill="#2a1c12" />
                <g fill="#121212"><rect x="895" y="455" width="5" height="205" /><rect x="1000" y="455" width="5" height="205" /><rect x="1105" y="455" width="5" height="205" /></g>
                <rect x="790" y="455" width="420" height="205" fill="none" stroke="#0c0c0c" strokeWidth="6" />
                <path d="M800 458h120L840 657h-40z" fill="#fff" opacity=".06" />
                <rect x="1250" y="476" width="160" height="46" fill="url(#hy-fl-int2)" opacity=".85" />
                <rect x="1250" y="476" width="160" height="46" fill="none" stroke="#0c0c0c" strokeWidth="4" />
                <g filter="url(#hy-fl-b3)"><path d="M1290 434l-34 160h68z" fill="url(#hy-fl-cone)" /><path d="M1380 434l-34 160h68z" fill="url(#hy-fl-cone)" /></g>
                <rect x="880" y="300" width="580" height="130" fill="url(#hy-fl-slat)" />
                <rect x="940" y="322" width="380" height="86" fill="url(#hy-fl-int2)" />
                <rect x="940" y="322" width="380" height="86" fill="#000" opacity=".18" />
                <g fill="#121212"><rect x="1033" y="322" width="4" height="86" /><rect x="1128" y="322" width="4" height="86" /><rect x="1223" y="322" width="4" height="86" /></g>
                <rect x="940" y="322" width="380" height="86" fill="none" stroke="#0c0c0c" strokeWidth="5" />
                <path d="M950 325h70l-30 80h-40z" fill="#fff" opacity=".07" />
                <rect x="860" y="286" width="620" height="16" fill="#0c0c0d" />
                <rect x="860" y="286" width="620" height="1.5" fill="#8a8f95" opacity=".6" />
                <rect x="720" y="424" width="760" height="10" fill="#0c0c0d" />
                <rect x="720" y="424" width="760" height="1.5" fill="#8a8f95" opacity=".45" />
                <g fill="#ffd79a"><circle cx="1290" cy="436" r="2.5" /><circle cx="1380" cy="436" r="2.5" /></g>
                <rect x="700" y="686" width="820" height="5" fill="#9a958c" opacity=".55" />
                <rect x="700" y="691" width="820" height="64" fill="url(#hy-fl-pool)" />
                <g filter="url(#hy-fl-b10)" opacity=".55"><rect x="795" y="694" width="410" height="54" fill="#f6b25c" /><rect x="1250" y="694" width="160" height="22" fill="#d98a3a" /></g>
                <g stroke="#ffd79a" strokeOpacity=".35" strokeWidth="1.2"><path d="M820 712h70M930 724h110M1080 708h90M860 738h60M1270 704h80" /></g>
                <g fill="#ffd79a"><circle cx="760" cy="790" r="3" /><circle cx="880" cy="790" r="3" /><circle cx="1000" cy="790" r="3" /><circle cx="1120" cy="790" r="3" /><circle cx="1240" cy="790" r="3" /><circle cx="1360" cy="790" r="3" /></g>
                <g fill="#ffcf87" opacity=".45" filter="url(#hy-fl-b10)"><ellipse cx="760" cy="798" rx="30" ry="8" /><ellipse cx="880" cy="798" rx="30" ry="8" /><ellipse cx="1000" cy="798" rx="30" ry="8" /><ellipse cx="1120" cy="798" rx="30" ry="8" /><ellipse cx="1240" cy="798" rx="30" ry="8" /><ellipse cx="1360" cy="798" rx="30" ry="8" /></g>
                <g><rect x="604" y="560" width="8" height="120" fill="#0a0d0b" /><g fill="#0b1510"><circle cx="608" cy="520" r="62" /><circle cx="560" cy="560" r="44" /><circle cx="656" cy="566" r="46" /><circle cx="600" cy="460" r="40" /></g><g fill="#3b4a2a" opacity=".35"><circle cx="650" cy="540" r="22" /><circle cx="636" cy="484" r="16" /></g></g>
                <g><rect x="1536" y="520" width="7" height="160" fill="#0a0d0b" /><g fill="#0b1510"><circle cx="1540" cy="470" r="58" /><circle cx="1580" cy="520" r="44" /><circle cx="1500" cy="520" r="36" /></g><circle cx="1504" cy="500" r="18" fill="#3b4a2a" opacity=".3" /></g>
                <ellipse cx="1100" cy="560" rx="470" ry="150" fill="none" stroke="#f2b544" strokeOpacity=".16" strokeWidth="1.5" strokeDasharray="4 10" />
                <g transform="translate(1440 286)"><circle r="5" fill="#f2b544" /><circle r="16" fill="#f2b544" opacity=".35" filter="url(#hy-fl-b10)" /><circle className="hy-pulse" r="6" fill="none" stroke="#f2b544" strokeWidth="1.5" /></g>
              </svg>
  );
}
