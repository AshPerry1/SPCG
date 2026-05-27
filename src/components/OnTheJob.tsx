import { SiteImage } from "@/components/ui/SiteImage";
import { onSiteStrip } from "@/lib/images";

export function OnTheJob() {
  const strip = [...onSiteStrip, ...onSiteStrip];

  return (
    <section
      className="overflow-hidden border-y border-brand-dark/20 bg-brand-dark py-4"
      aria-label="On the job"
    >
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
        On the job across Alabama
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-dark to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-dark to-transparent sm:w-24" />
        <div className="site-marquee flex w-max gap-3 px-3">
          {strip.map((img, i) => (
            <div
              key={`${img.local}-${i}`}
              className="relative h-32 w-52 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15 sm:h-36 sm:w-60"
            >
              <SiteImage
                asset={img}
                className="absolute inset-0"
                sizes="240px"
                rounded="rounded-xl"
                overlay={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
