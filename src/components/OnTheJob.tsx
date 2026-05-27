import { SiteImage } from "@/components/ui/SiteImage";
import { onSiteStrip } from "@/lib/images";

export function OnTheJob() {
  return (
    <section className="overflow-hidden border-y border-border bg-brand-dark py-3" aria-label="On the job">
      <div className="mb-3 px-5 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
          On the job across Alabama
        </p>
      </div>
      <div className="flex gap-3 overflow-x-auto px-5 pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:overflow-visible sm:px-6 [&::-webkit-scrollbar]:hidden">
        {onSiteStrip.map((img) => (
          <div
            key={img.local}
            className="relative h-28 w-44 shrink-0 snap-center overflow-hidden rounded-lg ring-1 ring-white/10 sm:h-32 sm:w-52"
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
