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
  const line = isLight ? "bg-white" : "bg-brand";
  const sub = isLight ? "text-white/85" : "text-brand";

  const acronymSize =
    size === "sm"
      ? "text-xl sm:text-2xl"
      : "text-2xl sm:text-[1.75rem]";
  const lineWidth = size === "sm" ? "max-w-[108px]" : "max-w-[132px]";
  const subSize =
    size === "sm"
      ? "text-[0.45rem] tracking-[0.16em]"
      : "text-[0.5rem] tracking-[0.18em] sm:text-[0.52rem]";

  return (
    <div
      className={`inline-flex flex-col items-start ${className}`}
      aria-label={site.name}
    >
      <span className={`h-px w-full ${lineWidth} ${line}`} aria-hidden />
      <span
        className={`font-display font-bold leading-none tracking-tight ${acronymSize} ${primary}`}
      >
        {site.shortName}
      </span>
      <span className={`mt-1 h-px w-full ${lineWidth} ${line}`} aria-hidden />
      <span
        className={`mt-1.5 font-semibold uppercase ${subSize} ${sub}`}
      >
        {site.legalName}
      </span>
    </div>
  );
}
