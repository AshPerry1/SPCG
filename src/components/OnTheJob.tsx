import { SiteImage } from "@/components/ui/SiteImage";
import { onSiteStrip } from "@/lib/images";

export function OnTheJob() {
  return (
    <section
      className="border-y border-border bg-foreground py-5"
      aria-label="On the job"
    >
      <div className="site-container mb-4 flex items-end justify-between gap-4">
        <p className="section-eyebrow text-accent">On the job</p>
        <p className="text-xs text-white/50">Swipe to view</p>
      </div>
      <div className="site-strip px-5 sm:px-6 lg:px-[max(1.25rem,calc((100vw-76rem)/2+2rem))]">
        {onSiteStrip.map((img) => (
          <div
            key={img.local}
            className="relative h-36 w-56 overflow-hidden ring-1 ring-white/10 sm:h-40 sm:w-64"
          >
            <SiteImage
              asset={img}
              className="absolute inset-0"
              sizes="256px"
              overlay={false}
              rounded=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}
