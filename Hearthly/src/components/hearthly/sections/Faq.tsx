import { faqs } from "@/components/hearthly/content";
import { PlusIcon } from "@/components/hearthly/parts";

export function Faq() {
  return (
    <section id="faq" className="hy-faq">
      <div className="hy-wrap hy-faq__in">
        <div className="hy-faq__head">
          <h2 className="hy-h2">Questions, answered</h2>
          <p className="hy-lead">Can't find yours? Message us in the app. A real person replies within the hour, every day.</p>
          <a className="hy-link" href="#contact">
            Talk to a person
          </a>
        </div>
        <div className="hy-faq__list">
          {faqs.map((item) => (
            <details key={item.q} className="hy-qa">
              <summary>
                <span>{item.q}</span>
                <span className="hy-ibtn" aria-hidden="true">
                  <PlusIcon />
                </span>
              </summary>
              <p className="hy-qa__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
