import { Section, Reveal } from "@/components/section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="skills"
      title="Technical stack"
      intro="Organised by domain — no progress bars, just the tools I actually work with."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.04}>
            <div className="card h-full p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="chip transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
