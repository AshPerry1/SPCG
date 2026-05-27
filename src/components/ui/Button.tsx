import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-light active:bg-brand-dark shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]",
  secondary:
    "bg-surface-elevated text-brand ring-1 ring-border hover:ring-border-strong hover:bg-background",
  ghost:
    "bg-transparent text-brand hover:bg-brand/6 active:bg-brand/10",
  accent:
    "bg-accent text-brand-dark hover:bg-accent-muted active:opacity-95",
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
  const classes = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {variant === "primary" && size === "lg" && (
        <svg
          className="h-4 w-4 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </>
  );

  if (
    external ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  ) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
