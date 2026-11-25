import { useState } from "react";
import { plans } from "@/components/hearthly/content";
import { Arrow } from "@/components/hearthly/parts";

type Period = "monthly" | "yearly";

export function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <section id="pricing" className="hy-pricing">
      <div className="hy-wrap hy-sec-head">
        <h2 className="hy-h2">
          Care that fits <em className="hy-s">your</em> home
        </h2>
        <div className="hy-sec-head__side">
          <p className="hy-lead">
            Every plan includes fixed-price repairs and a 90-day workmanship guarantee. Membership adds round-the-clock monitoring and a human home advisor.
          </p>
          <div className="hy-toggle" role="group" aria-label="Billing period">
            {(["monthly", "yearly"] as const).map((value) => (
              <button key={value} className="hy-toggle__btn" type="button" aria-pressed={period === value} onClick={() => setPeriod(value)}>
                {value === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="hy-wrap hy-plans">
        {plans.map((plan) => (
          <article key={plan.name} className={"hy-plan" + (plan.main ? " hy-plan--main" : "")}>
            {plan.tab && <p className="hy-plan__tab">{plan.tab}</p>}
            <h3 className="hy-plan__name">{plan.name}</h3>
            <p className="hy-plan__price">
              <span className="hy-plan__num">{plan[period]}</span>
              <span className="hy-plan__per">{period === "monthly" ? "per month" : "per year"}</span>
            </p>
            <p className="hy-plan__text">{plan.text}</p>
            <ul className="hy-plan__list">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className={"hy-btn" + (plan.main ? "" : " hy-btn--line")} href={plan.href}>
              {plan.cta} {plan.main && <Arrow />}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
