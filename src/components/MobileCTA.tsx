import { site } from "@/lib/site";

export function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={site.phoneHref}
          className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-surface text-sm font-semibold text-foreground ring-1 ring-border active:bg-border/50"
        >
          Call now
        </a>
        <a
          href="#contact"
          className="flex min-h-12 flex-[1.2] items-center justify-center rounded-full bg-brand text-sm font-semibold text-white active:bg-brand-dark"
        >
          Free estimate
        </a>
      </div>
    </div>
  );
}
