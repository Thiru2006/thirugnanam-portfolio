import { FileDown, FileText } from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { buttonClass } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Resume() {
  return (
    <Section id="resume" eyebrow="resume" title="The one-page version">
      <Reveal>
        <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <FileText size={20} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">
                Resume — {site.name}
              </h3>
              <p className="mt-1 max-w-xl text-sm text-muted">
                A single page covering education, internships, projects, and research —
                ATS-friendly and kept current.
              </p>
            </div>
          </div>
          <a href={site.resumePath} download className={buttonClass("primary", "shrink-0")}>
            <FileDown size={15} />
            Download PDF
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
