import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-light active:bg-brand-dark shadow-sm",
  secondary:
    "bg-white text-brand ring-1 ring-border hover:bg-surface active:bg-surface",
  ghost:
    "bg-transparent text-brand hover:bg-brand/5 active:bg-brand/10",
};

const sizes = {
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base sm:min-h-[52px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

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
