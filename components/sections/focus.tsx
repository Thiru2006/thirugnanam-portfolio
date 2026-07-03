import { Activity } from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { currentFocus } from "@/data/focus";

export function CurrentFocus() {
  return (
    <Section
      id="focus"
      eyebrow="current focus"
      title="What I'm working on right now"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentFocus.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <div className="card flex h-full items-start gap-4 p-5 transition-colors hover:border-accent/40">
              <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{f.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <div className="card flex h-full items-center gap-3 border-dashed p-5 text-sm text-muted">
            <Activity size={15} className="text-accent" />
            Updated as the work evolves — last revised July 2026.
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
