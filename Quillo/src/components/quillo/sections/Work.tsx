import type { CSSProperties } from "react";
import { Split } from "@/components/quillo/parts";
import { Scene1, Scene2, Scene3, Scene4 } from "@/components/quillo/illustrations/FeatureScenes";
export function Work() {
  return (
    <section className="ql-work" id="work" data-section="features">
      <div className="ql-work-head">
        <div><p className="ql-hand">explore the features!</p>
          <svg viewBox="0 0 74 14" width="74" fill="none" stroke="#14102b" strokeLinecap="round" style={{ margin: "0 auto" } as CSSProperties}><path d="M1 4.5C10 3 37 0 72.8 2" /><path d="M11.3 8C18 6.8 37.7 4.8 63.5 6.2" /><path d="M2.8 12.6C11.5 11 37.3 8.4 71 10.3" /></svg></div>
        <Split as="h2" className="ql-display" text="Built For|Learning" />
        <div className="ql-note">Every feature starts in a real classroom and ends with a student who finally gets it.</div>
      </div>

      <div className="ql-projects">
    
        <article className="ql-proj" style={{ "--ql-c": "var(--ql-cyan)", "--ql-t": "var(--ql-ink)" } as CSSProperties}>
          <div className="ql-tabrow"><div className="ql-tab ql-mono" style={{ background: "var(--ql-cyan)" } as CSSProperties}><svg fill="#14102b"><use href="#steps" /></svg>feature 01</div></div>
          <div className="ql-card" style={{ background: "var(--ql-cyan)", color: "var(--ql-ink)" } as CSSProperties}>
            <div className="ql-card-text">
              <div>
                <div className="ql-card-date ql-mono"><i></i>For teachers</div>
                <h3>Teacher Insights</h3>
              </div>
              <p className="ql-desc">See who's stuck, who's ready to move on, and why, without grading another worksheet.</p>
              <a href="#contact" className="ql-view ql-mono"><svg fill="currentColor"><use href="#arrow" /></svg>Explore feature</a>
              <div className="ql-tags ql-mono">
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "var(--ql-ink)", color: "var(--ql-cyan)" } as CSSProperties}>Teachers</span></div>
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "var(--ql-ink)", color: "var(--ql-cyan)" } as CSSProperties}>Real-time</span></div>
              </div>
            </div>
            <div className="ql-frame" style={{ "--ql-bc": "var(--ql-ink)", "--ql-bg": "var(--ql-cyan)" } as CSSProperties}>
              <div className="ql-img">
                <Scene1 />
              </div>
              <div className="ql-bd"><i></i><i></i><i></i><i></i></div>
              <div className="ql-filename ql-mono" style={{ background: "var(--ql-ink)", color: "var(--ql-cyan)" } as CSSProperties}><svg fill="var(--ql-cyan)"><use href="#filejpg" /></svg>Image.jpg</div>
            </div>
          </div>
        </article>

    
        <article className="ql-proj">
          <div className="ql-tabrow"><div className="ql-space" style={{ width: "19%" } as CSSProperties}></div><div className="ql-tab ql-mono" style={{ background: "var(--ql-ink)", color: "#fff", "--ql-lt": "block" } as CSSProperties}><svg fill="#fff"><use href="#steps" /></svg>feature 02</div></div>
          <div className="ql-card" style={{ background: "var(--ql-ink)", color: "#fff" } as CSSProperties}>
            <div className="ql-card-text">
              <div>
                <div className="ql-card-date ql-mono"><i></i>For students</div>
                <h3>Study Planner</h3>
              </div>
              <p className="ql-desc">Turns a mountain of assignments into short, doable sessions that fit a real week.</p>
              <a href="#contact" className="ql-view ql-mono"><svg fill="currentColor"><use href="#arrow" /></svg>Explore feature</a>
              <div className="ql-tags ql-mono">
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "#fff", color: "var(--ql-ink)" } as CSSProperties}>Students</span></div>
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "#fff", color: "var(--ql-ink)" } as CSSProperties}>Planning</span></div>
              </div>
            </div>
            <div className="ql-frame" style={{ "--ql-bc": "#fff", "--ql-bg": "var(--ql-ink)" } as CSSProperties}>
              <div className="ql-img">
                <Scene2 />
              </div>
              <div className="ql-bd"><i></i><i></i><i></i><i></i></div>
              <div className="ql-filename ql-mono" style={{ background: "#fff", color: "var(--ql-ink)" } as CSSProperties}><svg fill="var(--ql-ink)"><use href="#filejpg" /></svg>Image.jpg</div>
            </div>
          </div>
        </article>

    
        <article className="ql-proj">
          <div className="ql-tabrow"><div className="ql-space" style={{ width: "43%" } as CSSProperties}></div><div className="ql-tab ql-mono" style={{ background: "var(--ql-yellow)", "--ql-lt": "block" } as CSSProperties}><svg fill="#14102b"><use href="#steps" /></svg>feature 03</div></div>
          <div className="ql-card" style={{ background: "var(--ql-yellow)", color: "var(--ql-ink)" } as CSSProperties}>
            <div className="ql-card-text">
              <div>
                <div className="ql-card-date ql-mono"><i></i>For families</div>
                <h3>Learn at Home</h3>
              </div>
              <p className="ql-desc">Homework help that works at the kitchen table, with parents kept in the loop.</p>
              <a href="#contact" className="ql-view ql-mono"><svg fill="currentColor"><use href="#arrow" /></svg>Explore feature</a>
              <div className="ql-tags ql-mono">
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "var(--ql-ink)", color: "var(--ql-yellow)" } as CSSProperties}>Families</span></div>
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "var(--ql-ink)", color: "var(--ql-yellow)" } as CSSProperties}>Homework</span></div>
              </div>
            </div>
            <div className="ql-frame" style={{ "--ql-bc": "var(--ql-ink)", "--ql-bg": "var(--ql-yellow)" } as CSSProperties}>
              <div className="ql-img">
                <Scene3 />
              </div>
              <div className="ql-bd"><i></i><i></i><i></i><i></i></div>
              <div className="ql-filename ql-mono" style={{ background: "var(--ql-ink)", color: "var(--ql-yellow)" } as CSSProperties}><svg fill="var(--ql-yellow)"><use href="#filejpg" /></svg>Image.jpg</div>
            </div>
          </div>
        </article>

    
        <article className="ql-proj">
          <div className="ql-tabrow"><div className="ql-space" style={{ width: "67%" } as CSSProperties}></div><div className="ql-tab ql-mono" style={{ background: "var(--ql-pink)", color: "#fff", "--ql-lt": "block" } as CSSProperties}><svg fill="#fff"><use href="#steps" /></svg>feature 04</div></div>
          <div className="ql-card" style={{ background: "var(--ql-pink)", color: "#fff" } as CSSProperties}>
            <div className="ql-card-text">
              <div>
                <div className="ql-card-date ql-mono"><i></i>For everyone</div>
                <h3>Guided Paths</h3>
              </div>
              <p className="ql-desc">Seven core skills, one north star: a learning path that adapts to every student.</p>
              <a href="#contact" className="ql-view ql-mono"><svg fill="currentColor"><use href="#arrow" /></svg>Explore feature</a>
              <div className="ql-tags ql-mono">
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "#fff", color: "var(--ql-pink)" } as CSSProperties}>Adaptive</span></div>
                <div className="ql-tag"><div className="ql-top"><i></i><b></b></div><span style={{ background: "#fff", color: "var(--ql-pink)" } as CSSProperties}>Mastery</span></div>
              </div>
            </div>
            <div className="ql-frame" style={{ "--ql-bc": "#fff", "--ql-bg": "var(--ql-pink)" } as CSSProperties}>
              <div className="ql-img">
                <Scene4 />
              </div>
              <div className="ql-bd"><i></i><i></i><i></i><i></i></div>
              <div className="ql-filename ql-mono" style={{ background: "#fff", color: "var(--ql-pink)" } as CSSProperties}><svg fill="var(--ql-pink)"><use href="#filejpg" /></svg>Image.jpg</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
