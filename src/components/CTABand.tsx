import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            white 40px,
            white 41px
          )`,
        }}
        aria-hidden
      />
      <div className="container-site relative py-16 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="section-eyebrow section-eyebrow-light">Next step</p>
            <span className="section-rule section-rule-light mt-4 block" aria-hidden />
            <h2 className="display-xl mt-6 text-2xl text-white sm:text-3xl lg:text-4xl">
              Ready for a site visit and written estimate?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Residential, commercial, or remodel — one licensed team from first walkthrough
              to final inspection.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full bg-white text-brand hover:bg-white/95 sm:w-auto"
            >
              Request estimate
            </Button>
            <Button href={site.phoneHref} variant="outline-light" size="lg" external className="w-full sm:w-auto">
              {site.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
