import { FlaskConical } from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { research } from "@/data/research";

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="research &amp; publications"
      title="Research &amp; Publications"
      intro="Faculty-supervised research at VIT Chennai. Submission status is stated exactly as it stands — submitted work is not presented as published."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <article className="card relative h-full overflow-hidden p-6 transition-all duration-300 hover:border-accent/40 sm:p-7">
              <div
                aria-hidden
                className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent-soft blur-2xl"
              />
              <div className="flex items-center gap-2">
                <FlaskConical size={15} className="text-accent" />
                <p className="font-mono text-[11px] uppercase tracking-widest text-faint">{item.area}</p>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{item.title}</h3>
              {item.venue && (
                <p className="mt-2 text-sm font-medium text-ink">{item.venue}</p>
              )}
              <p className="mt-1 text-xs font-medium text-accent">{item.status}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.abstract}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.methods.map((m) => (
                  <span key={m} className="chip">{m}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
