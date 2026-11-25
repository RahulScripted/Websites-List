import { steps } from "@/components/hearthly/content";

export function Process() {
  return (
    <section id="process" className="hy-process">
      <div className="hy-wrap hy-process__head">
        <div className="hy-process__copy">
          <h2 className="hy-h2">From first ping to fixed in <em className="hy-s">48 hours</em></h2>
          <p className="hy-lead">No hold music, no three-hour arrival windows, no guessing what a fair price is. Hearthly handles the back-and-forth and only asks you to tap yes.</p>
        </div>
        <figure className="hy-process__photo hy-tab-r">
          <div className="hy-art hy-g-night">
            <div className="hy-convo" aria-label="Example conversation with Hearthly">
              <div className="hy-msg hy-msg--ai"><span className="hy-msg__who">Hearthly</span>Your water heater took 40% longer to recover this morning. Sediment build-up is the likely cause.</div>
              <div className="hy-msg hy-msg--me">Is it urgent?</div>
              <div className="hy-msg hy-msg--ai"><span className="hy-msg__who">Hearthly</span>Not yet, but a flush now adds years to its life. Rosa's Plumbing can come Friday.<div className="hy-msg__card"><span>Flush + anode check</span><b>$120 fixed</b></div></div>
              <div className="hy-msg hy-msg--me">Book it 👍</div>
              <div className="hy-typing" aria-hidden="true"><i></i><i></i><i></i></div>
            </div>
          </div>
        </figure>
      </div>
      <ol className="hy-wrap hy-steps">
        {steps.map((step) => (
          <li key={step.title} className="hy-step">
            <span className="hy-step__dot" aria-hidden="true"></span>
            <p className="hy-step__time">{step.time}</p>
            <h3 className="hy-step__title">{step.title}</h3>
            <p className="hy-step__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
