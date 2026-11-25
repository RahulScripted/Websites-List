import { apps } from "@/components/knot/content";

export function Apps() {
  return (
    <section className="apps" aria-label="Example apps">
      <p className="mono">
        Plays nicely with 400+ apps your team already pays for, from WhatsApp to Tally
      </p>
      {[0, 1].map((row) => (
        <div key={row} className="marquee" data-reverse={row === 1}>
          <div className="marquee-track">
            {[...apps, ...apps].map((a, i) => {
              const Icon = a.icon;
              const item = row === 1 ? apps[(i + 5) % apps.length] : a;
              const ItemIcon = row === 1 ? item.icon : Icon;
              return (
                <span
                  key={`${row}-${i}`}
                  className="app-tile"
                  data-c={item.c}
                  aria-hidden={i >= apps.length}
                >
                  <ItemIcon size={16} /> {item.name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
