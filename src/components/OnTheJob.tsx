import { SiteImage } from "@/components/ui/SiteImage";
import { onSiteStrip } from "@/lib/images";

export function OnTheJob() {
  return (
    <section
      className="border-y border-border bg-surface py-10 sm:py-12"
      aria-label="On the job"
    >
      <div className="container-site">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">Field work</p>
            <span className="section-rule mt-4 block" aria-hidden />
            <p className="mt-4 max-w-md font-display text-xl font-bold text-foreground sm:text-2xl">
              Active job sites across Alabama
            </p>
          </div>
          <p className="text-sm text-muted sm:max-w-xs sm:text-right">
            Every project gets daily site leadership — not a sales handoff to a stranger.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">
          {onSiteStrip.map((img) => (
            <li key={img.local} className="relative aspect-[3/2] list-none sm:aspect-[4/3]">
              <SiteImage
                asset={img}
                className="absolute inset-0 h-full w-full"
                sizes="(max-width: 640px) 45vw, 20vw"
                rounded="rounded-sm"
                overlay={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
