import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { onSiteStrip } from "@/lib/images";

export function OnTheJob() {
  const doubled = [...onSiteStrip, ...onSiteStrip];

  return (
    <section className="overflow-hidden border-y border-border bg-brand-dark py-3" aria-label="On the job">
      <div className="mb-3 px-5 sm:px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            On the job across Alabama
          </p>
        </Reveal>
      </div>
      <div className="site-marquee flex w-max gap-3 px-3">
        {doubled.map((img, i) => (
          <div
            key={`${img.local}-${i}`}
            className="relative h-28 w-44 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10 sm:h-32 sm:w-52"
          >
            <SiteImage
              asset={img}
              className="absolute inset-0"
              sizes="208px"
              rounded="rounded-lg"
              imageClassName="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
