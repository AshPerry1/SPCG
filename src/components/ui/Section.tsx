import { type ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "surface" | "brand";
};

const variants = {
  default: "bg-background",
  surface: "bg-surface",
  brand: "bg-brand text-white",
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 sm:scroll-mt-24 ${variants[variant]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
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
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const eyebrowColor = light ? "text-white/70" : "text-brand";
  const titleColor = light ? "text-white" : "text-foreground";
  const descColor = light ? "text-white/80" : "text-muted";

  return (
    <header className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}
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
