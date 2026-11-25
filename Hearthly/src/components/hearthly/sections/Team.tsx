import { PortraitDaniel, PortraitLeo, PortraitMaya, PortraitPriya } from "@/components/hearthly/illustrations/Portraits";
export function Team() {
  return (
    <section id="team" className="hy-team">
      <div className="hy-wrap hy-sec-head">
        <h2 className="hy-h2">The people behind the <em className="hy-s">home brain</em></h2>
        <div className="hy-sec-head__side">
          <p className="hy-lead">Engineers who've built AI at scale, and tradespeople who've spent decades under sinks and in attics. Every model is checked by someone who's done the job.</p>
          <a className="hy-link" href="#contact">Work with us</a>
        </div>
      </div>
      <ul className="hy-wrap hy-people">
        <li className="hy-person hy-tone-3"><figure className="hy-person__photo hy-tab-l"><div className="hy-art hy-g-sage" role="img" aria-label="Illustrated portrait of Maya Lindqvist"><PortraitMaya /></div></figure><h3 className="hy-person__name">Maya Lindqvist</h3><p className="hy-person__role">Co-founder &amp; CEO</p></li>
        <li className="hy-person hy-tone-2"><figure className="hy-person__photo hy-tab-l"><div className="hy-art hy-g-sky" role="img" aria-label="Illustrated portrait of Daniel Osei"><PortraitDaniel /></div></figure><h3 className="hy-person__name">Daniel Osei</h3><p className="hy-person__role">Head of AI</p></li>
        <li className="hy-person hy-tone-4"><figure className="hy-person__photo hy-tab-l"><div className="hy-art hy-g-amber" role="img" aria-label="Illustrated portrait of Priya Raman"><PortraitPriya /></div></figure><h3 className="hy-person__name">Priya Raman</h3><p className="hy-person__role">Pro network lead</p></li>
        <li className="hy-person hy-tone-1"><figure className="hy-person__photo hy-tab-l"><div className="hy-art hy-g-ember" role="img" aria-label="Illustrated portrait of Leo Hart"><PortraitLeo /></div></figure><h3 className="hy-person__name">Leo Hart</h3><p className="hy-person__role">Head of home care, 22 years a plumber</p></li>
      </ul>
    </section>
  );
}
