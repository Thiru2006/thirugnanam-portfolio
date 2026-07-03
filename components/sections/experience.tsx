import { Section, Reveal } from "@/components/section";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      title="Where I've worked"
      intro="Four internships across Python, Java, product engineering, and applied ML."
    >
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.05}>
            <article className="card p-6 transition-all duration-300 hover:border-accent/40 sm:p-8">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted">{exp.company}</p>
                </div>
                <p className="font-mono text-xs text-faint">
                  {exp.period} · {exp.mode}
                </p>
              </header>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    Responsibilities
                  </p>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                    {exp.responsibilities.map((r) => (
                      <li key={r.slice(0, 24)} className="flex gap-2">
                        <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-faint">Impact</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{exp.impact}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
                      Key learnings
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{exp.learnings}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
