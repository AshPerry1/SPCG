import { site } from "@/lib/site";

type LogoProps = {
  variant?: "brand" | "light";
  size?: "sm" | "md";
  className?: string;
};

export function Logo({
  variant = "brand",
  size = "md",
  className = "",
}: LogoProps) {
  const isLight = variant === "light";
  const primary = isLight ? "text-white" : "text-brand";
  const line = isLight ? "bg-accent" : "bg-brand";
  const sub = isLight ? "text-white/80" : "text-brand-muted";

  const acronymSize =
    size === "sm" ? "text-[1.35rem] sm:text-2xl" : "text-2xl sm:text-[1.85rem]";
  const lineWidth = size === "sm" ? "w-[104px]" : "w-[128px]";
  const subSize =
    size === "sm"
      ? "text-[0.42rem] tracking-[0.2em]"
      : "text-[0.48rem] tracking-[0.22em] sm:text-[0.5rem]";

  return (
    <div className={`inline-flex flex-col items-start ${className}`} aria-label={site.name}>
      <span className={`h-0.5 ${lineWidth} ${line}`} aria-hidden />
      <span
        className={`font-display font-bold leading-none tracking-tight ${acronymSize} ${primary}`}
      >
        {site.shortName}
      </span>
      <span className={`mt-1.5 h-0.5 ${lineWidth} ${line}`} aria-hidden />
      <span className={`mt-2 font-semibold uppercase ${subSize} ${sub}`}>
        {site.legalName}
      </span>
    </div>
  );
}
