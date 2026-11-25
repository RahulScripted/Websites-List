import { bars, figs } from "@/components/hearthly/content";

export function Facts() {
  return (
    <section id="materials" className="hy-facts">
      <div className="hy-wrap hy-facts__in">
        <div className="hy-facts__copy">
          <h2 className="hy-h2">What Hearthly handled this year</h2>
          <p className="hy-lead">Across every home on the platform, here's where the work went. Most of it was caught before anyone noticed a problem.</p>
          <div className="hy-figs">
            {figs.map((fig) => (
              <p key={fig.num} className="hy-fig">
                <span className="hy-fig__num">{fig.num}</span>
                <span className="hy-fig__label">{fig.label}</span>
              </p>
            ))}
          </div>
        </div>
        <ul className="hy-bars">
          {bars.map((bar) => (
            <li key={bar.label} className={`hy-bar hy-tone-${bar.tone}`}>
              <p className="hy-bar__head">
                <span className="hy-bar__label">{bar.label}</span>
                <span className="hy-bar__value">{bar.value}%</span>
              </p>
              <div className="hy-bar__track" aria-hidden="true">
                <div className="hy-bar__fill" style={{ width: `${bar.value}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
