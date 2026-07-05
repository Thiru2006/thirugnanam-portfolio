"use client";

import { useEffect, useState } from "react";
import { Github, GitFork, Star, ExternalLink, Pin } from "lucide-react";
import { Section, Reveal } from "@/components/section";
import { site } from "@/lib/site";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

/** Pinned repositories, in display order (mirrors the GitHub profile). */
const pinnedRepos = [
  "Fake-News-Detection-Using-Machine-Learning",
  "Phishing-Email-Detection",
  "SmartTaskScheduler",
  "automated-attendance-system",
  "JOB-PORTAL",
  "tinytapeouttt10shiftregisterchallenge",
];

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${site.githubUser}/repos?per_page=100`,
      { headers: { Accept: "application/vnd.github+json" } },
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: Repo[]) => {
        if (cancelled) return;
        const byName = new Map(data.map((r) => [r.name.toLowerCase(), r]));
        const ordered = pinnedRepos
          .map((name) => byName.get(name.toLowerCase()))
          .filter((r): r is Repo => Boolean(r));
        setRepos(ordered);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section
      id="github"
      eyebrow="github"
      title="Open Source & Activity"
      intro="Explore my featured open-source projects, GitHub activity, and the technologies I use across software engineering, AI/ML, embedded systems, and VLSI."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card overflow-hidden p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-faint">
              Contribution Graph
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-muted">
              GitHub contributions and development activity over the past year.
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/4F46E5/${site.githubUser}`}
              alt={`GitHub contribution graph for ${site.githubUser}`}
              className="mt-4 w-full dark:opacity-90"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card overflow-hidden p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-faint">
              Technical Expertise
            </h3>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/technical-stack.png"
              alt="Overview of my technical expertise across programming, AI/ML, embedded systems, hardware, and software tools."
              className="mt-4 w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-faint">
          <Pin size={12} className="text-accent" /> Pinned repositories
        </h3>
        {failed ? (
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center justify-between p-6 text-sm text-muted transition-colors hover:border-accent/40"
          >
            Couldn&rsquo;t reach the GitHub API right now — browse repositories directly instead.
            <ExternalLink size={15} />
          </a>
        ) : repos === null ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card h-28 animate-pulse bg-surface" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-center gap-2">
                  <Github size={14} className="text-faint" />
                  <span className="truncate font-mono text-sm font-medium group-hover:text-accent">
                    {repo.name}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 min-h-[2.4em] text-xs leading-relaxed text-muted">
                  {repo.description ?? "See the repository for details."}
                </p>
                <div className="mt-3 flex items-center gap-4 font-mono text-[11px] text-faint">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="inline-flex items-center gap-1">
                    <Star size={11} /> {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={11} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <Reveal delay={0.1}>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          View full profile on GitHub <ExternalLink size={14} />
        </a>
      </Reveal>
    </Section>
  );
}
