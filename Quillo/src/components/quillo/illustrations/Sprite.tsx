/** Shared SVG symbols: the owl mascot, chevrons, sparks, arrows and the file icon. Mounted once; used with <use href="#avatar" />. */
export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
    
          {/* GyanSetu mark: a setu (bridge) arching over an open book of gyan (knowledge), lit by a diya flame. */}
          <symbol id="avatar" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="#a9e4ea" />
            <path d="M14 146 C14 96 52 58 100 58 C148 58 186 96 186 146" fill="none" stroke="#14102b" strokeWidth="10" strokeLinecap="round" />
            <path d="M30 146 C30 104 60 74 100 74 C140 74 170 104 170 146" fill="none" stroke="#f7a81b" strokeWidth="6" strokeLinecap="round" />
            <path d="M14 146 V170 M186 146 V170" stroke="#14102b" strokeWidth="10" strokeLinecap="round" />
            <rect x="0" y="162" width="200" height="14" fill="#4a1d2e" />
            <g>
              <path d="M100 118 L62 134 V100 C62 92 78 86 100 94Z" fill="#fff" stroke="#14102b" strokeWidth="4" strokeLinejoin="round" />
              <path d="M100 118 L138 134 V100 C138 92 122 86 100 94Z" fill="#fbe1a6" stroke="#14102b" strokeWidth="4" strokeLinejoin="round" />
              <path d="M100 94 V118" stroke="#14102b" strokeWidth="3" />
              <path d="M70 102 h20 M70 110 h16 M110 102 h20 M114 110 h16" stroke="#14102b" strokeWidth="2.5" strokeLinecap="round" opacity=".55" />
            </g>
            <path d="M100 60 C96 46 104 40 100 28" fill="none" stroke="#e4276d" strokeWidth="5" strokeLinecap="round" />
            <path d="M92 60 C97 70 103 70 108 60 C106 50 94 50 92 60Z" fill="#f7a81b" stroke="#14102b" strokeWidth="3" strokeLinejoin="round" />
          </symbol>
          <symbol id="chev" viewBox="0 0 200 200"><path fillRule="evenodd" d="M0 0V50L100 100L0 150V200L100 150V200L200 150V50L100 0V50ZM100 50V150L200 100Z" /></symbol>
          <symbol id="spark4" viewBox="0 0 357 357"><path d="M35.6 178.2C114.7 178.2 178.8 98.4 178.8 0C178.8 98.4 242.9 178.2 321.9 178.2C242.9 178.2 178.8 257.9 178.8 356.4C178.8 257.9 114.7 178.2 35.6 178.2Z" /></symbol>
          <symbol id="steps" viewBox="0 0 357 357"><path d="M356.4 0H237.6V118.8H118.8V237.6H0V356.4H356.4V0Z" /></symbol>
          <symbol id="arrow" viewBox="0 0 24 24"><path d="M4 13V11H16L10.5 5.5L11.9 4.1L19.8 12L11.9 19.9L10.5 18.5L16 13Z" /></symbol>
          <symbol id="ptr" viewBox="0 0 28 26"><path d="M0 0L12 26L14 13L28 9.5Z" stroke="#14102b" strokeWidth="2" strokeLinejoin="round" /></symbol>
          <symbol id="filejpg" viewBox="0 0 23 23"><path fillRule="evenodd" d="M1.5 2.3A2.3 2.3 0 0 1 3.8 0H16.4L21.5 5V20.7A2.3 2.3 0 0 1 19.2 23H3.8A2.3 2.3 0 0 1 1.5 20.7ZM6.1 10.7H3.1V9.2H7.7V16.9H3.1V13.8H4.6V15.3H6.1ZM9.2 9.2H11.5A2.3 2.3 0 0 1 11.5 13.8H10.7V16.9H9.2ZM10.7 10.7V12.3H11.5A.8.8 0 0 0 11.5 10.7ZM15.3 9.2H19.9V10.7H16.9V15.3H18.4V13H19.9V16.9H15.3Z" /></symbol>
          <symbol id="heart" viewBox="0 0 357 357"><path d="M142 85.5C106 54.7 52 58.8 21.2 94.7C-9.5 130.5-5.4 184.5 30.4 215.3L177.6 342.1L324.8 215.3C360.6 184.5 364.7 130.5 333.9 94.7C303.1 58.8 249 54.7 213.2 85.5L177.6 116.2Z" /></symbol>
        </defs>
    </svg>
  );
}
