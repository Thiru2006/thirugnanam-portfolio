import { Github, Linkedin, Mail, FileDown, ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { site } from "@/lib/site";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    hint: "Best for internship & research conversations",
  },
  {
    icon: Github,
    label: "GitHub",
    value: `github.com/${site.githubUser}`,
    href: site.github,
    hint: "Code, tape-outs, and experiments",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect professionally",
    href: site.linkedin,
    hint: "Experience and recommendations",
  },
  {
    icon: FileDown,
    label: "Resume",
    value: "View the one-page PDF",
    href: site.resumePath,
    hint: "Everything above, condensed",
    newTab: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="contact"
      title="Let's talk"
      intro="Open to software, VLSI, and AI/ML internship opportunities — fully remote, or onsite in Chennai."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <a
              href={c.href}
              target={c.href.startsWith("http") || (c as { newTab?: boolean }).newTab ? "_blank" : undefined}
              rel={c.href.startsWith("http") || (c as { newTab?: boolean }).newTab ? "noopener noreferrer" : undefined}
              className="card group flex items-center justify-between gap-4 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <c.icon size={18} />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">{c.label}</p>
                  <p className="text-sm text-muted">{c.value}</p>
                  <p className="mt-0.5 text-xs text-faint">{c.hint}</p>
                </div>
              </div>
              <ArrowUpRight
                size={17}
                className="shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
