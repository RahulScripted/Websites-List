import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pill, concept } from "@/components/knot/parts";

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  const price = (m: number) => (yearly ? Math.round(m * 0.8) : m);
  return (
    <section className="section pricing" id="pricing">
      <div className="section-head" data-reveal>
        <span className="eyebrow mono">Pricing</span>
        <h2>Pay for runs, not for seats.</h2>
        <div className="billing" role="group" aria-label="Billing period">
          {[
            { v: false, l: "Monthly" },
            { v: true, l: "Yearly −20%" },
          ].map((o) => (
            <button
              key={o.l}
              type="button"
              aria-pressed={yearly === o.v}
              onClick={() => setYearly(o.v)}
            >
              {yearly === o.v && (
                <Pill id="bill-pill" className="pill bill-pill" />
              )}
              <span>{o.l}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="plans">
        {[
          {
            name: "Free",
            m: 0,
            runs: "100 runs a month",
            note: "For trying things out.",
            c: "paper",
            f: ["3 active knots", "All 400+ apps", "7-day run history"],
          },
          {
            name: "Maker",
            m: 1200,
            runs: "2,000 runs a month",
            note: "For one busy founder.",
            c: "yellow",
            f: [
              "Unlimited knots",
              "Branches and AI steps",
              "30-day run history",
            ],
            hot: true,
          },
          {
            name: "Team",
            m: 4900,
            runs: "20,000 runs a month",
            note: "For a whole team.",
            c: "pink",
            f: [
              "Shared workspace",
              "Approvals and roles",
              "1-year run history",
            ],
          },
        ].map((p) => (
          <motion.article
            key={p.name}
            className="plan"
            data-c={p.c}
            data-reveal
            whileHover={{ x: -3, y: -3 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
          >
            {p.hot && (
              <span className="sticker sticker-static" data-c="mint">
                Most picked
              </span>
            )}
            <h3>{p.name}</h3>
            <p className="plan-note">{p.note}</p>
            <p className="price">
              <strong>
                <NumberFlow
                  value={price(p.m)}
                  format={{
                    style: "currency",
                    currency: "INR",
                    maximumFractionDigits: 0,
                  }}
                  locales="en-IN"
                />
              </strong>
              <span className="mono">/ month</span>
            </p>
            <p className="plan-runs mono">{p.runs}</p>
            <ul>
              {p.f.map((f) => (
                <li key={f}>
                  <Check size={15} /> {f}
                </li>
              ))}
            </ul>
            <Button
              variant={p.hot ? "default" : "outline"}
              onClick={concept}
            >
              {p.m === 0 ? "Start free" : `Choose ${p.name}`}
            </Button>
          </motion.article>
        ))}
      </div>
      <p className="fine mono">
        Fictional prices in rupees for a concept product. GST would be extra. Nothing is billed.
      </p>
    </section>
  );
}
