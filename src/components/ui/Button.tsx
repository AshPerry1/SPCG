import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-light active:bg-brand-dark shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_8px_rgba(26,74,56,0.25)]",
  secondary:
    "bg-surface-elevated text-foreground ring-1 ring-border hover:ring-border-strong hover:bg-surface active:bg-surface",
  ghost:
    "bg-transparent text-brand hover:bg-brand/6 active:bg-brand/10",
  "outline-light":
    "bg-transparent text-white ring-1 ring-white/35 hover:bg-white/10 active:bg-white/15",
};

const sizes = {
  md: "min-h-11 px-5 py-2.5 text-sm tracking-wide",
  lg: "min-h-[3.25rem] px-7 py-3 text-[0.9375rem] tracking-wide sm:min-h-14",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm font-semibold transition-[background,box-shadow,transform] duration-200 active:scale-[0.99] ${variants[variant]} ${sizes[size]} ${className}`;

  if (
    external ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  ) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
