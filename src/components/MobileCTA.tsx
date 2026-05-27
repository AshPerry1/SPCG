import { site } from "@/lib/site";

export function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="flex gap-2 p-3">
        <a
          href={site.phoneHref}
          className="flex min-h-12 flex-1 items-center justify-center border border-border bg-surface-elevated text-sm font-semibold text-foreground"
        >
          Call now
        </a>
        <a
          href="#contact"
          className="flex min-h-12 flex-[1.25] items-center justify-center bg-brand text-sm font-semibold tracking-wide text-white active:bg-brand-dark"
        >
          Free estimate
        </a>
      </div>
    </div>
  );
}
