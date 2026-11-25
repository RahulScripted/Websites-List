import type { CSSProperties } from "react";

export function Systems() {
  return (
    <section id="range" className="hy-range">
      <div className="hy-wrap hy-sec-head">
        <h2 className="hy-h2">Five systems. Watched <em className="hy-s">around the clock.</em></h2>
        <div className="hy-sec-head__side">
          <p className="hy-lead">Hearthly builds a baseline for each system in your home, then checks it against what it hears every few minutes. Quiet when things are fine, clear when they aren't.</p>
          <a className="hy-link" href="#lookbook">See it room by room</a>
        </div>
      </div>
      <ul className="hy-wrap hy-plates">
        <li className="hy-plate hy-tone-1" style={{ "--hy-arch": "0.000" } as CSSProperties}>
          <figure className="hy-plate__card hy-tab-l"><div className="hy-art hy-g-ember" role="img" aria-label="Thermostat dial"><svg className="hy-ico" viewBox="0 0 200 200"><use href="#hy-s-thermo" /></svg></div><span className="hy-plate__wash" aria-hidden="true"></span>
            <figcaption className="hy-plate__cap"><h3 className="hy-plate__name">Heat</h3><p className="hy-plate__count">96 checks a day</p></figcaption></figure>
        </li>
        <li className="hy-plate hy-tone-3" style={{ "--hy-arch": "0.500" } as CSSProperties}>
          <figure className="hy-plate__card hy-tab-l"><div className="hy-art hy-g-sage" role="img" aria-label="Air flow lines"><svg className="hy-ico" viewBox="0 0 200 200"><use href="#hy-s-wind" /></svg></div><span className="hy-plate__wash" aria-hidden="true"></span>
            <figcaption className="hy-plate__cap"><h3 className="hy-plate__name">Air</h3><p className="hy-plate__count">48 checks a day</p></figcaption></figure>
        </li>
        <li className="hy-plate hy-tone-4" style={{ "--hy-arch": "1.000" } as CSSProperties}>
          <figure className="hy-plate__card"><div className="hy-art hy-g-amber" role="img" aria-label="Electrical panel with a lightning bolt"><svg className="hy-ico" viewBox="0 0 200 200"><use href="#hy-s-bolt" /></svg></div><span className="hy-plate__wash" aria-hidden="true"></span>
            <figcaption className="hy-plate__cap"><h3 className="hy-plate__name">Power</h3><p className="hy-plate__count">288 checks a day</p></figcaption></figure>
        </li>
        <li className="hy-plate hy-tone-2" style={{ "--hy-arch": "0.500" } as CSSProperties}>
          <figure className="hy-plate__card hy-tab-r"><div className="hy-art hy-g-sky" role="img" aria-label="Water drop"><svg className="hy-ico" viewBox="0 0 200 200"><use href="#hy-s-drop" /></svg></div><span className="hy-plate__wash" aria-hidden="true"></span>
            <figcaption className="hy-plate__cap"><h3 className="hy-plate__name">Water</h3><p className="hy-plate__count">1,440 checks a day</p></figcaption></figure>
        </li>
        <li className="hy-plate hy-tone-5" style={{ "--hy-arch": "0.000" } as CSSProperties}>
          <figure className="hy-plate__card hy-tab-r"><div className="hy-art hy-g-pine" role="img" aria-label="Security shield"><svg className="hy-ico" viewBox="0 0 200 200"><use href="#hy-s-shield" /></svg></div><span className="hy-plate__wash" aria-hidden="true"></span>
            <figcaption className="hy-plate__cap"><h3 className="hy-plate__name">Safety</h3><p className="hy-plate__count">Always on</p></figcaption></figure>
        </li>
      </ul>
    </section>
  );
}
