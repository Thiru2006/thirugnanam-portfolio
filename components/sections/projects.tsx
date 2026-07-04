"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Search, Cpu, BrainCircuit, Code2, CircuitBoard, Youtube } from "lucide-react";
import { Section } from "@/components/section";
import { projects, projectCategories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryIcon = {
  Software: Code2,
  "AI/ML": BrainCircuit,
  Embedded: CircuitBoard,
  VLSI: Cpu,
} as const;

function ProjectCard({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category];
  const hasImages = Boolean(project.images && project.images.length > 0);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      {hasImages ? (
        <div className="grid grid-cols-2 gap-px border-b border-line bg-line">
          {project.images!.map((img) => (
            <figure key={img.src} className="bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-36 w-full object-cover"
              />
              <figcaption className="px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-faint">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div
          aria-hidden
          className="flex h-32 items-center justify-center border-b border-line bg-gradient-to-br from-accent-soft to-surface"
        >
          <Icon
            size={30}
            className="text-accent/60 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <span key={t} className="chip border-accent/30 text-accent">{t}</span>
          ))}
        </div>

        <h3 className="mt-3 font-display text-base font-semibold leading-snug">
          {project.title}
        </h3>

        {project.note && (
          <p className="mt-1 text-xs font-medium text-accent">{project.note}</p>
        )}

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.overview}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        {(project.github || project.demoVideo) && (
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <Github size={15} /> GitHub
              </a>
            )}
            {project.demoVideo && (
              <a
                href={project.demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <Youtube size={15} /> Watch demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCategory = category === "All" || p.category === category;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [query, category]);

  return (
    <Section
      id="projects"
      eyebrow="engineering projects"
      title="Engineering Projects"
      intro="Work across AI/ML, software, embedded systems, and VLSI — from research pipelines to hardware you can hold."
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                category === c
                  ? "border-accent bg-accent text-white"
                  : "border-line bg-surface text-muted hover:text-ink",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative block sm:w-64">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="w-full rounded-xl border border-line bg-surface py-2 pl-9 pr-3 text-sm text-ink outline-none placeholder:text-faint focus:border-accent/60"
          />
        </label>
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-line p-10 text-center text-sm text-muted">
          No projects match &ldquo;{query}&rdquo;. Try a different keyword or clear the filter.
        </p>
      )}
    </Section>
  );
}
