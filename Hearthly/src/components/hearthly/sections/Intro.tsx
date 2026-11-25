export function Intro() {
  return (
    <section id="intro" className="hy-intro">
      <div className="hy-wrap hy-intro__in">
        <figure className="hy-voice">
          <svg className="hy-voice__mark" viewBox="0 0 28 22" aria-hidden="true"><path fill="currentColor" d="M0 22V12.6C0 5.5 3.4 1.3 10.2 0l1.1 2.6C7.6 3.9 5.9 6.4 5.8 10H11v12H0Zm16.6 0V12.6c0-7.1 3.4-11.3 10.2-12.6L28 2.6c-3.7 1.3-5.4 3.8-5.5 7.4h5.2v12H16.6Z" /></svg>
          <blockquote className="hy-voice__text"><p>I used to keep a mental list of everything the house might be about to do to me. Now Hearthly keeps it, and it's always a step ahead.</p></blockquote>
          <figcaption className="hy-voice__who"><span className="hy-sign">Meera K.</span></figcaption>
        </figure>
        <a className="hy-feature" href="#collections">
          <span className="hy-feature__row"><span className="hy-feature__num">38</span><span className="hy-feature__label">Home services covered</span><span className="hy-ibtn hy-ibtn--bare"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6" /></svg></span></span>
          <span className="hy-feature__title">Get Your Pre-Monsoon Home Check, Planned In Under A Minute</span>
        </a>
      </div>
    </section>
  );
}
