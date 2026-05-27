import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "surface" | "brand" | "dark";
  /** Tighter vertical padding for bands and strips */
  compact?: boolean;
};

const variants = {
  default: "bg-background",
  surface: "bg-surface",
  brand: "bg-brand text-white",
  dark: "bg-brand-dark text-white",
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
  compact = false,
}: SectionProps) {
  const py = compact ? "py-12 sm:py-16" : "py-16 sm:py-24 lg:py-28";
  return (
    <section
      id={id}
      className={`scroll-mt-20 sm:scroll-mt-24 ${variants[variant]} ${className}`}
    >
      <div className={`mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 ${py}`}>
        {children}
      </div>
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
  const eyebrowColor = light ? "text-white/70" : "section-eyebrow";
  const titleColor = light ? "text-white" : "text-foreground";
  const descColor = light ? "text-white/80" : "text-muted";

  return (
    <header className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className={eyebrowColor}>{eyebrow}</p>
      )}
      {showRule && eyebrow && (
        <span
          className={`section-rule mt-4 block ${ruleAlign} ${light ? "section-rule-light" : ""}`}
          aria-hidden
        />
      )}
      <h2
        className={`mt-5 text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </header>
  );
}
