import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:brightness-110 shadow-[0_1px_2px_rgb(0_0_0/0.2)]",
  outline:
    "border border-line bg-surface text-ink hover:border-accent/50 hover:text-accent",
  ghost: "text-muted hover:text-ink hover:bg-surface",
};

export const buttonClass = (variant: Variant = "primary", className?: string) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium",
    "transition-all duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0",
    styles[variant],
    className,
  );

export const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
>(function Button({ variant = "primary", className, ...props }, ref) {
  return <button ref={ref} className={buttonClass(variant, className)} {...props} />;
});
