import { Award, Briefcase, FlaskConical, Star, Target, Trophy } from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { achievements } from "@/data/achievements";
import { certifications } from "@/data/focus";

const icons = {
  trophy: Trophy,
  award: Award,
  star: Star,
  briefcase: Briefcase,
  flask: FlaskConical,
  target: Target,
} as const;

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="achievements"
      title="Milestones so far"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon];
          return (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="card h-full p-6 transition-all duration-300 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={17} />
                  </span>
                  <span className="font-mono text-xs text-faint">{a.year}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div id="certifications" className="card mt-10 scroll-mt-24 p-6 sm:p-8">
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Certifications &amp; workshops
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
