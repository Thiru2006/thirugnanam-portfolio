import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-content flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-faint">
          <span className="text-accent">tvs</span>
          <span>://</span>portfolio · © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-xs text-faint">
          Designed &amp; built in Chennai — Next.js, TypeScript, Tailwind.
        </p>
      </div>
    </footer>
  );
}
