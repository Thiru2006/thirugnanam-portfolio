import { Section, Reveal } from "@/components/section";
import { timeline } from "@/data/timeline";

export function Timeline() {
  return (
    <Section
      id="journey"
      eyebrow="journey"
      title="From first semester to first tape-out"
      intro="A short history of how software curiosity turned into silicon."
    >
      <ol className="relative ml-3 border-l border-line">
        {timeline.map((item, i) => (
          <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
            <Reveal delay={i * 0.05}>
              <span
                aria-hidden
                className="absolute -left-[4.5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-bg bg-accent"
              />
              <p className="font-mono text-xs text-accent">{item.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
