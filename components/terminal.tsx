"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/lib/site";
import { skillGroups } from "@/data/skills";
import { projects } from "@/data/projects";

type Line = { kind: "cmd" | "out"; text: string };

const HELP = [
  "available commands:",
  "  help        show this list",
  "  about       who am i",
  "  skills      technical stack",
  "  projects    featured work",
  "  research    active research",
  "  contact     how to reach me",
  "  resume      download resume",
  "  clear       clear the terminal",
];

function run(cmd: string): string[] {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "help":
      return HELP;
    case "about":
      return [
        `${site.name} — ${site.degree}, ${site.university} ('${site.graduation.slice(2)})`,
        `CGPA ${site.cgpa} · Department rank #${site.rank}`,
        site.tagline,
      ];
    case "skills":
      return skillGroups.map((g) => `${g.group.toLowerCase().padEnd(14)} ${g.items.join(", ")}`);
    case "projects":
      return projects.map((p) => `• ${p.title} — ${p.summary}`);
    case "research":
      return [
        "• IMU-based Parkinson's symptom monitoring (IEEE track)",
        "• RL-based control of inverted pendulum systems (IEEE track)",
        "• Failure-oriented TCAD analysis",
        "• AI-based test generation",
      ];
    case "contact":
      return [`email    ${site.email}`, `github   ${site.github}`, `linkedin ${site.linkedin}`];
    case "resume":
      window.open(site.resumePath, "_blank");
      return ["opening resume…"];
    case "":
      return [];
    default:
      return [`command not found: ${c} — try "help"`];
  }
}

export function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: `welcome to ${site.shortName.toLowerCase()}.sh — type "help" to begin` },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const submit = () => {
    const cmd = input;
    setInput("");
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    const out = run(cmd).map((text) => ({ kind: "out" as const, text }));
    setLines((prev) => [...prev, { kind: "cmd", text: cmd }, ...out]);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[85] flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center"
          onClick={onClose}
          role="dialog"
          aria-label="Interactive terminal"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-[#0B0E14] font-mono text-[13px] text-[#C9D2E3] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <span className="text-xs text-white/40">
                {site.shortName.toLowerCase()}@portfolio — zsh
              </span>
              <button onClick={onClose} aria-label="Close terminal" className="text-white/40 hover:text-white">
                <X size={14} />
              </button>
            </div>
            <div ref={bodyRef} className="max-h-[50vh] min-h-[16rem] overflow-y-auto p-4">
              {lines.map((l, i) =>
                l.kind === "cmd" ? (
                  <p key={i} className="mt-2">
                    <span className="text-emerald-400">➜</span>{" "}
                    <span className="text-sky-400">~</span> {l.text}
                  </p>
                ) : (
                  <p key={i} className="whitespace-pre-wrap text-white/70">{l.text}</p>
                ),
              )}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-emerald-400">➜</span>
                <span className="text-sky-400">~</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submit()}
                  className="flex-1 bg-transparent outline-none placeholder:text-white/25"
                  placeholder='type "help"'
                  aria-label="Terminal input"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
