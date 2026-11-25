import { useState } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Pill, spring, Logo, concept } from "@/components/knot/parts";
import { links, LN } from "@/components/knot/content";

export function Nav({ active, select }: { active: string | null; select: (id: string) => void }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
    <a className="skip" href="#main">
      Skip to content
    </a>
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Knot home">
          <Logo /> knot
        </a>
        <nav aria-label="Main" className="nav-links">
          {links.map((l) => {
            const id = l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={active === id ? "location" : undefined}
                onClick={() => select(id)}
              >
                {active === id && (
                  <Pill id="nav-pill" className="pill nav-pill" />
                )}
                <span>{l.label}</span>
              </a>
            );
          })}
        </nav>
        <div className="nav-actions">
          <a className="text-link" href={LN}>
            Docs
          </a>
          <Button onClick={concept}>Get Knot free</Button>
          <Button
            variant="unstyled"
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setMenu(true)}
          >
            <Menu size={18} />
          </Button>
        </div>
      </div>
    </header>
    <Sheet open={menu} onOpenChange={setMenu}>
      <SheetContent>
        <SheetTitle>knot</SheetTitle>
        <SheetDescription>
          One sentence in. A working automation out.
        </SheetDescription>
        <nav aria-label="Mobile" className="sheet-links">
          {[...links, { href: LN, label: "Docs" }].map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => {
                if (l.href.startsWith("#")) select(l.href.slice(1));
                setMenu(false);
              }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.06 + i * 0.05 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
        <Button
          onClick={() => {
            setMenu(false);
            concept();
          }}
        >
          Get Knot free
        </Button>
      </SheetContent>
    </Sheet>
    </>
  );
}
