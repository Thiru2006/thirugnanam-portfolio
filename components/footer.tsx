import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-content flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} <span className="font-medium text-muted">{site.name}</span> · All work shown is my own.
        </p>
        <p className="text-xs text-faint">
          Designed &amp; built in Chennai — Next.js, TypeScript, Tailwind.
        </p>
      </div>
    </footer>
  );
}
