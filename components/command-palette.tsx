"use client";

import { useEffect } from "react";
import { Command } from "cmdk";
import {
  User, Briefcase, FolderGit2, FlaskConical, Wrench, Mail,
  FileDown, Github, Linkedin, Moon, Sun, TerminalSquare, Home,
} from "lucide-react";
import { useTheme } from "next-themes";
import { site } from "@/lib/site";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenTerminal: () => void;
};

export function CommandPalette({ open, onOpenChange, onOpenTerminal }: Props) {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const go = (hash: string) => {
    onOpenChange(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  const openUrl = (url: string) => {
    onOpenChange(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      className="fixed inset-0 z-[90]"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden
      />
      <div className="fixed left-1/2 top-24 w-[92vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
        <Command.Input
          placeholder="Type a command or search…"
          className="w-full border-b border-line bg-transparent px-4 py-3.5 text-sm text-ink outline-none placeholder:text-faint"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigate" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-faint">
            {[
              { icon: Home, label: "Home", hash: "#top" },
              { icon: User, label: "About", hash: "#about" },
              { icon: Briefcase, label: "Experience", hash: "#experience" },
              { icon: FolderGit2, label: "Projects", hash: "#projects" },
              { icon: FlaskConical, label: "Research", hash: "#research" },
              { icon: Wrench, label: "Skills", hash: "#skills" },
              { icon: Mail, label: "Contact", hash: "#contact" },
            ].map((item) => (
              <Command.Item
                key={item.hash}
                onSelect={() => go(item.hash)}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-ink"
              >
                <item.icon size={15} className="text-faint" />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Actions" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-faint">
            <Command.Item
              onSelect={() => {
                onOpenChange(false);
                onOpenTerminal();
              }}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-ink"
            >
              <TerminalSquare size={15} className="text-faint" />
              Open terminal
            </Command.Item>
            <Command.Item
              onSelect={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
                onOpenChange(false);
              }}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-ink"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={15} className="text-faint" />
              ) : (
                <Moon size={15} className="text-faint" />
              )}
              Toggle theme
            </Command.Item>
            <Command.Item
              onSelect={() => openUrl(site.resumePath)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-ink"
            >
              <FileDown size={15} className="text-faint" />
              Download resume
            </Command.Item>
            <Command.Item
              onSelect={() => openUrl(site.github)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-ink"
            >
              <Github size={15} className="text-faint" />
              Open GitHub
            </Command.Item>
            <Command.Item
              onSelect={() => openUrl(site.linkedin)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-accent-soft data-[selected=true]:text-ink"
            >
              <Linkedin size={15} className="text-faint" />
              Open LinkedIn
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
