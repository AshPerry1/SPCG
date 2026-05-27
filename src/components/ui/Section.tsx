import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "surface" | "brand" | "dark" | "warm";
  compact?: boolean;
  bleed?: boolean;
};

const variants = {
  default: "bg-background",
  surface: "bg-surface",
  brand: "bg-brand text-white",
  dark: "bg-brand-dark text-white",
  warm: "bg-[#f0ebe2]",
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
  compact = false,
  bleed = false,
}: SectionProps) {
  const py = compact ? "py-14 sm:py-16" : "py-20 sm:py-28 lg:py-32";

  return (
    <section
      id={id}
      className={`scroll-mt-[4.5rem] sm:scroll-mt-20 ${variants[variant]} ${className}`}
    >
      <div className={bleed ? "" : `site-container ${py}`}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  showRule = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  showRule?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const ruleAlign = align === "center" ? "mx-auto" : "";

  return (
    <header className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={light ? "section-eyebrow section-eyebrow-light" : "section-eyebrow"}>
          {eyebrow}
        </p>
      )}
      {showRule && eyebrow && (
        <span
          className={`section-rule mt-5 block ${ruleAlign} ${light ? "section-rule-light" : ""}`}
          aria-hidden
        />
      )}
      <h2
        className={`display-headline mt-6 text-3xl sm:text-4xl lg:text-[2.875rem] ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-pretty text-base leading-relaxed sm:text-lg ${light ? "text-white/78" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
