
/** Hearthly cinematic night scene — contemporary smart home at dusk. */
export function NightScene() {
  return (
    <svg
      className="hy-full"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hy-fl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#080e1b" />
          <stop offset=".38" stopColor="#192940" />
          <stop offset=".66" stopColor="#68536a" />
          <stop offset=".82" stopColor="#c17d64" />
          <stop offset="1" stopColor="#e5a16d" />
        </linearGradient>

        <radialGradient id="hy-fl-horizon">
          <stop offset="0" stopColor="#ffc18b" stopOpacity=".5" />
          <stop offset="1" stopColor="#ffc18b" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="hy-fl-moon">
          <stop offset="0" stopColor="#fff6df" stopOpacity=".45" />
          <stop offset="1" stopColor="#fff6df" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="hy-fl-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#17251e" />
          <stop offset="1" stopColor="#050b09" />
        </linearGradient>

        <linearGradient id="hy-fl-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8d1c2" />
          <stop offset=".5" stopColor="#a99d8c" />
          <stop offset="1" stopColor="#71685e" />
        </linearGradient>

        <linearGradient id="hy-fl-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#293c50" />
          <stop offset=".45" stopColor="#152737" />
          <stop offset="1" stopColor="#09151f" />
        </linearGradient>

        <linearGradient id="hy-fl-interior" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe9bd" />
          <stop offset=".5" stopColor="#f5b96e" />
          <stop offset="1" stopColor="#b96c35" />
        </linearGradient>

        <linearGradient id="hy-fl-roof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#343a40" />
          <stop offset="1" stopColor="#131a20" />
        </linearGradient>

        <linearGradient id="hy-fl-pool" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#24495a" />
          <stop offset=".45" stopColor="#0d2938" />
          <stop offset="1" stopColor="#07141e" />
        </linearGradient>

        <linearGradient id="hy-fl-reflection" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd69b" stopOpacity=".48" />
          <stop offset="1" stopColor="#ffd69b" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="hy-fl-light">
          <stop offset="0" stopColor="#ffd18d" stopOpacity=".65" />
          <stop offset="1" stopColor="#ffd18d" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="hy-fl-tree" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#405b40" />
          <stop offset=".6" stopColor="#1b3327" />
          <stop offset="1" stopColor="#101c17" />
        </linearGradient>

        <filter id="hy-fl-b3">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="hy-fl-b10">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <filter id="hy-fl-b30">
          <feGaussianBlur stdDeviation="30" />
        </filter>

        <filter id="hy-fl-cloud">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".0018 .0065"
            numOctaves="4"
            seed="8"
          />
          <feColorMatrix values="0 0 0 0 .8 0 0 0 0 .82 0 0 0 0 .92 1.5 0 0 0 -.66" />
        </filter>

        <pattern id="hy-fl-slat" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#34251c" />
          <path d="M0 0V10" stroke="#0c0b0a" strokeWidth="2" opacity=".5" />
          <path d="M3 0V10" stroke="#8d6748" strokeWidth=".5" opacity=".3" />
        </pattern>

        <clipPath id="hy-fl-window">
          <rect x="820" y="390" width="510" height="250" rx="2" />
        </clipPath>

        <clipPath id="hy-fl-pool-clip">
          <path d="M550 705H1510L1600 900H430Z" />
        </clipPath>
      </defs>

      {/* SKY */}
      <rect width="1600" height="900" fill="url(#hy-fl-sky)" />
      <ellipse cx="1050" cy="570" rx="700" ry="260" fill="url(#hy-fl-horizon)" />

      <rect
        width="1600"
        height="650"
        filter="url(#hy-fl-cloud)"
        opacity=".12"
      />

      {/* Stars */}
      <g fill="#f5f0e7">
        <circle cx="120" cy="100" r="1.5" opacity=".7" />
        <circle cx="260" cy="185" r="1" opacity=".5" />
        <circle cx="420" cy="75" r="1.4" opacity=".65" />
        <circle cx="600" cy="160" r="1" opacity=".5" />
        <circle cx="770" cy="80" r="1.3" opacity=".7" />
        <circle cx="1040" cy="125" r="1" opacity=".45" />
        <circle cx="1190" cy="70" r="1.5" opacity=".65" />
        <circle cx="1510" cy="205" r="1.2" opacity=".6" />
        <circle cx="1450" cy="95" r="1" opacity=".5" />
      </g>

      {/* Moon */}
      <circle cx="1360" cy="160" r="105" fill="url(#hy-fl-moon)" />
      <circle cx="1360" cy="160" r="27" fill="#f4edda" />
      <circle cx="1352" cy="150" r="5" fill="#d5cdbd" opacity=".4" />
      <circle cx="1371" cy="169" r="3" fill="#d5cdbd" opacity=".5" />

      {/* Distant hills */}
      <path
        d="M0 590Q140 520 280 570T570 560T900 550T1220 565T1600 530V900H0Z"
        fill="#15251f"
      />
      <path
        d="M0 635Q180 585 340 620T700 590T1080 615T1400 580T1600 600V900H0Z"
        fill="#0e1b16"
      />

      {/* Ground */}
      <rect y="640" width="1600" height="260" fill="url(#hy-fl-ground)" />

      {/* Ambient landscape lighting */}
      <ellipse
        cx="1110"
        cy="690"
        rx="500"
        ry="85"
        fill="#ffb36e"
        opacity=".2"
        filter="url(#hy-fl-b30)"
      />

      {/* Left landscaping */}
      <g>
        <path d="M105 690V570" stroke="#35291f" strokeWidth="15" />
        <g fill="url(#hy-fl-tree)">
          <circle cx="105" cy="520" r="68" />
          <circle cx="56" cy="558" r="47" />
          <circle cx="154" cy="562" r="52" />
          <circle cx="90" cy="458" r="44" />
          <circle cx="165" cy="490" r="39" />
        </g>
        <g fill="#6b8253" opacity=".22">
          <circle cx="75" cy="490" r="19" />
          <circle cx="133" cy="465" r="15" />
          <circle cx="155" cy="550" r="12" />
        </g>
      </g>

      {/* Right landscaping */}
      <g>
        <path d="M1510 680V525" stroke="#35291f" strokeWidth="17" />
        <g fill="url(#hy-fl-tree)">
          <circle cx="1510" cy="485" r="72" />
          <circle cx="1465" cy="530" r="48" />
          <circle cx="1555" cy="535" r="50" />
          <circle cx="1500" cy="430" r="48" />
        </g>
        <g fill="#7a9560" opacity=".18">
          <circle cx="1480" cy="472" r="20" />
          <circle cx="1530" cy="450" r="15" />
        </g>
      </g>

      {/* ARCHITECTURE — rear volume */}
      <path d="M710 420H1460V650H710Z" fill="#1a2023" />
      <path d="M735 400H1440V420H735Z" fill="#080d12" />
      <path d="M735 400H1440" stroke="#7b8388" strokeWidth="1.5" opacity=".55" />

      {/* Vertical timber facade */}
      <rect x="1380" y="420" width="75" height="230" fill="url(#hy-fl-slat)" />
      <path d="M1380 420H1455" stroke="#a48a6c" strokeWidth="2" opacity=".5" />

      {/* Main warm interior */}
      <rect x="820" y="390" width="510" height="250" fill="url(#hy-fl-interior)" />

      {/* Interior scene */}
      <g clipPath="url(#hy-fl-window)">
        <rect x="820" y="390" width="510" height="250" fill="#d99553" />
        <rect x="820" y="390" width="510" height="250" fill="url(#hy-fl-light)" />

        {/* Interior wall */}
        <path d="M820 390H1330V570H820Z" fill="#e3b47f" opacity=".3" />

        {/* Interior shelving */}
        <path d="M850 490H990" stroke="#5e3b26" strokeWidth="5" />
        <path d="M850 540H990" stroke="#5e3b26" strokeWidth="4" />
        <g fill="#5c4430">
          <rect x="870" y="463" width="17" height="25" rx="2" />
          <rect x="900" y="450" width="30" height="38" rx="2" />
          <rect x="952" y="472" width="19" height="16" rx="2" />
        </g>

        {/* Sofa */}
        <rect x="1025" y="530" width="220" height="60" rx="12" fill="#6c4935" />
        <rect x="1040" y="510" width="190" height="45" rx="12" fill="#927056" />
        <rect x="1052" y="520" width="72" height="30" rx="8" fill="#c59b70" />
        <rect x="1140" y="520" width="72" height="30" rx="8" fill="#b78c64" />
        <path d="M1040 584V605M1228 584V605" stroke="#30231c" strokeWidth="5" />

        {/* Side table */}
        <path d="M970 555H1000V600H970Z" fill="#69452b" />
        <circle cx="985" cy="546" r="9" fill="#e9c08a" />
        <circle cx="985" cy="546" r="15" fill="#ffd69a" opacity=".22" filter="url(#hy-fl-b10)" />

        {/* Pendant lights */}
        <path d="M1050 390V440M1170 390V440" stroke="#5b4633" strokeWidth="2" />
        <path d="M1034 440H1066L1058 451H1042Z" fill="#49362a" />
        <path d="M1154 440H1186L1178 451H1162Z" fill="#49362a" />
        <circle cx="1050" cy="454" r="20" fill="#ffcf87" opacity=".4" filter="url(#hy-fl-b10)" />
        <circle cx="1170" cy="454" r="20" fill="#ffcf87" opacity=".4" filter="url(#hy-fl-b10)" />

        {/* Indoor plant */}
        <path d="M1270 585V525" stroke="#455535" strokeWidth="4" />
        <g fill="#526b40">
          <ellipse cx="1255" cy="535" rx="12" ry="27" transform="rotate(-35 1255 535)" />
          <ellipse cx="1282" cy="520" rx="12" ry="29" transform="rotate(35 1282 520)" />
          <ellipse cx="1268" cy="510" rx="11" ry="26" />
        </g>
        <path d="M1251 584H1288L1282 625H1257Z" fill="#72503a" />
      </g>

      {/* Glass window frame */}
      <rect x="820" y="390" width="510" height="250" fill="none" stroke="#10171d" strokeWidth="8" />
      <path d="M990 390V640M1160 390V640" stroke="#151b20" strokeWidth="7" />
      <path d="M820 396H1330" stroke="#fff" strokeOpacity=".25" strokeWidth="2" />
      <path d="M830 398H920L850 635H830Z" fill="#fff" opacity=".055" />

      {/* Window reflections */}
      <path d="M1190 395H1318L1240 630H1190Z" fill="#fff" opacity=".035" />
      <path d="M1000 400V630" stroke="#fff" strokeOpacity=".08" strokeWidth="2" />

      {/* Flat roof */}
      <path d="M750 380H1400V400H750Z" fill="url(#hy-fl-roof)" />
      <path d="M750 380H1400" stroke="#9ba0a1" strokeWidth="1.5" opacity=".55" />
      <path d="M770 377H1380" stroke="#fff" strokeWidth="1" opacity=".08" />

      {/* Lower architectural volume */}
      <rect x="720" y="640" width="740" height="24" fill="#24282a" />
      <path d="M720 640H1460" stroke="#a3a09a" strokeOpacity=".35" strokeWidth="1.5" />

      {/* Entrance / side volume */}
      <rect x="620" y="470" width="165" height="190" fill="#252b2b" />
      <rect x="650" y="492" width="115" height="168" fill="#49362a" />
      <rect x="659" y="500" width="97" height="160" fill="url(#hy-fl-slat)" />
      <path d="M659 500H756" stroke="#a47a52" strokeWidth="2" opacity=".55" />
      <circle cx="741" cy="580" r="3" fill="#ffc67c" />
      <circle cx="741" cy="580" r="12" fill="#ffc67c" opacity=".22" filter="url(#hy-fl-b10)" />

      {/* Exterior wall lights */}
      <g>
        <rect x="680" y="465" width="18" height="9" rx="3" fill="#ffcc89" />
        <path d="M689 474 665 550H713Z" fill="url(#hy-fl-light)" opacity=".45" />
        <rect x="1430" y="470" width="12" height="8" rx="3" fill="#ffcc89" />
        <path d="M1436 478 1410 555H1462Z" fill="url(#hy-fl-light)" opacity=".4" />
      </g>

      {/* Terrace and concrete paving */}
      <path d="M540 665H1510V705H540Z" fill="#44413b" />
      <path d="M540 665H1510" stroke="#c5b6a1" strokeOpacity=".38" strokeWidth="2" />
      <path d="M700 690H1500M790 705H1480" stroke="#0b1113" strokeOpacity=".35" strokeWidth="2" />

      {/* Pool */}
      <path d="M550 705H1510L1600 900H430Z" fill="url(#hy-fl-pool)" />
      <path d="M550 705H1510" stroke="#a8c6c9" strokeOpacity=".5" strokeWidth="2" />

      <g clipPath="url(#hy-fl-pool-clip)">
        {/* Warm window reflections */}
        <path d="M825 705H1330L1450 900H720Z" fill="url(#hy-fl-reflection)" opacity=".65" />
        <path d="M860 710H970L900 900H820Z" fill="#f4ba77" opacity=".12" />
        <path d="M1010 710H1100L1190 900H1080Z" fill="#ffd69a" opacity=".14" />
        <path d="M1200 710H1290L1450 900H1350Z" fill="#e9a86b" opacity=".12" />

        {/* Water lines */}
        <g stroke="#b5d5d9" strokeOpacity=".23" strokeWidth="1.3" fill="none">
          <path d="M600 745H800M930 755H1100M1200 740H1430" />
          <path d="M670 785H850M970 795H1150M1250 780H1480" />
          <path d="M580 835H780M880 850H1080M1190 830H1390" />
        </g>
        <g stroke="#f8c78c" strokeOpacity=".45" strokeWidth="1.5">
          <path d="M840 730H940M1010 740H1110M1170 730H1260" />
          <path d="M910 780H1040M1100 795H1210" />
          <path d="M1010 845H1120" />
        </g>
      </g>

      {/* Pool edge */}
      <path d="M550 705H1510" stroke="#d3c4ad" strokeOpacity=".6" strokeWidth="3" />

      {/* Landscape path lights */}
      <g fill="#ffd79b">
        <circle cx="590" cy="690" r="3" />
        <circle cx="720" cy="690" r="3" />
        <circle cx="850" cy="690" r="3" />
        <circle cx="980" cy="690" r="3" />
        <circle cx="1110" cy="690" r="3" />
        <circle cx="1240" cy="690" r="3" />
        <circle cx="1370" cy="690" r="3" />
      </g>
      <g fill="#ffcf87" opacity=".38" filter="url(#hy-fl-b10)">
        <ellipse cx="590" cy="695" rx="25" ry="8" />
        <ellipse cx="720" cy="695" rx="25" ry="8" />
        <ellipse cx="850" cy="695" rx="25" ry="8" />
        <ellipse cx="980" cy="695" rx="25" ry="8" />
        <ellipse cx="1110" cy="695" rx="25" ry="8" />
        <ellipse cx="1240" cy="695" rx="25" ry="8" />
        <ellipse cx="1370" cy="695" rx="25" ry="8" />
      </g>

      {/* Smart-home sensor visualization */}
      <ellipse
        cx="1080"
        cy="565"
        rx="480"
        ry="165"
        fill="none"
        stroke="#f3bd6e"
        strokeOpacity=".12"
        strokeWidth="1.5"
        strokeDasharray="3 12"
      />

      <g transform="translate(1440 286)">
        <circle r="4" fill="#ffc46d" />
        <circle r="13" fill="#ffc46d" opacity=".3" filter="url(#hy-fl-b10)" />
        <circle
          className="hy-pulse"
          r="7"
          fill="none"
          stroke="#ffc46d"
          strokeWidth="1.5"
        />
      </g>

      {/* Foreground shadows */}
      <path
        d="M0 845Q250 790 470 850T900 855T1350 820T1600 850V900H0Z"
        fill="#030907"
        opacity=".55"
      />
    </svg>
  );
}
