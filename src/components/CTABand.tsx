import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 48px, rgba(255,255,255,0.04) 48px, rgba(255,255,255,0.04) 49px)",
        }}
        aria-hidden
      />
      <div className="site-container relative py-16 sm:py-20">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="section-eyebrow section-eyebrow-light">Next step</p>
            <span className="section-rule section-rule-light mt-5 block" aria-hidden />
            <h2 className="display-headline mt-6 text-3xl text-white sm:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/78">
              We will schedule a site visit and send a clear written estimate — residential,
              commercial, or remodel.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href="#contact"
              variant="accent"
              size="lg"
              className="w-full sm:w-auto"
            >
              Request estimate
            </Button>
            <Button
              href={site.phoneHref}
              variant="ghost"
              size="lg"
              external
              className="w-full text-white ring-1 ring-white/30 hover:bg-white/10 sm:w-auto"
            >
              {site.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
