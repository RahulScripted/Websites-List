import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "motion/react";
import { Bell, Check, Minus, Plus, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Switch } from "@/components/knot/parts";

export function Guardrails() {
  const [approve, setApprove] = useState(true);
  const [dryRun, setDryRun] = useState(false);
  const [pauseAfter, setPauseAfter] = useState(3);
  return (
    <section className="section guard" id="guardrails">
      <div className="guard-copy" data-reveal>
        <span className="eyebrow mono">Guardrails</span>
        <h2>Automation that asks before it acts.</h2>
        <p>
          Decide what Knot may do alone. The preview shows what lands in
          your inbox.
        </p>
        <ul className="guard-list">
          <li>
            <span>
              <strong>Ask before sending</strong>
              <small>Emails and messages wait for a thumbs-up.</small>
            </span>
            <Switch
              checked={approve}
              onChange={setApprove}
              label="Ask before sending"
            />
          </li>
          <li>
            <span>
              <strong>Dry run first</strong>
              <small>New knots run on fake data for a day.</small>
            </span>
            <Switch
              checked={dryRun}
              onChange={setDryRun}
              label="Dry run first"
            />
          </li>
          <li>
            <span>
              <strong>Pause after failures</strong>
              <small>Stop the knot and tell you.</small>
            </span>
            <span className="stepper">
              <button
                type="button"
                aria-label="Fewer failures"
                onClick={() => setPauseAfter((n) => Math.max(1, n - 1))}
              >
                <Minus size={14} />
              </button>
              <b>
                <NumberFlow value={pauseAfter} />
              </b>
              <button
                type="button"
                aria-label="More failures"
                onClick={() => setPauseAfter((n) => Math.min(9, n + 1))}
              >
                <Plus size={14} />
              </button>
            </span>
          </li>
        </ul>
      </div>
      <div className="guard-preview" data-reveal>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${approve}-${dryRun}`}
            className="notice"
            data-c={dryRun ? "blue" : approve ? "yellow" : "mint"}
            initial={{ opacity: 0, y: 16, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -12, rotate: 2 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
          >
            <header>
              <span className="notice-icon">
                {dryRun ? (
                  <ShieldCheck size={16} />
                ) : approve ? (
                  <Bell size={16} />
                ) : (
                  <Check size={16} />
                )}
              </span>
              <strong>
                {dryRun
                  ? "Dry run · nothing was sent"
                  : approve
                    ? "Knot wants to send an email"
                    : "Email sent automatically"}
              </strong>
            </header>
            <p className="mono">
              To priya@lumenco.example
              <br />
              “Hi Priya, your last payment didn’t go through…”
            </p>
            {approve && !dryRun ? (
              <div className="notice-actions">
                <motion.button
                  whileTap={{ scale: 0.95, x: 2, y: 2 }}
                  type="button"
                  className="button button-sm"
                  onClick={() =>
                    toast("Approved", {
                      description: "In the demo, nothing is sent.",
                    })
                  }
                >
                  Approve
                </motion.button>
                <button
                  type="button"
                  className="button button-outline button-sm"
                  onClick={() =>
                    toast("Held for edits", { description: "Demo only." })
                  }
                >
                  Edit first
                </button>
              </div>
            ) : (
              <small className="notice-foot mono">
                {dryRun
                  ? "Goes live tomorrow at 09:00"
                  : "Logged in run #1,285"}
              </small>
            )}
          </motion.div>
        </AnimatePresence>
        <p className="guard-pause mono">
          Pauses after <NumberFlow value={pauseAfter} /> failed run
          {pauseAfter > 1 ? "s" : ""} in a row
        </p>
      </div>
    </section>
  );
}
