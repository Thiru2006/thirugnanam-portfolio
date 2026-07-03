import { Section, Reveal } from "@/components/section";
import { aboutStory, aboutQuickFacts } from "@/data/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="about"
      title="Hardware and software, treated as one system"
    >
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            {aboutStory.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              Quick facts
            </p>
            <dl className="mt-4 divide-y divide-line">
              {aboutQuickFacts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-muted">{f.label}</dt>
                  <dd className="text-right text-sm font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
