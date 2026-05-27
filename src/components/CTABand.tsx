import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="border-y border-brand-dark/30 bg-brand">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="section-eyebrow text-white/65">Next step</p>
            <span className="section-rule section-rule-light mt-4 block" aria-hidden />
            <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              We will schedule a site visit and send a clear written estimate — residential,
              commercial, or remodel.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="w-full bg-white text-brand hover:bg-white/95 sm:w-auto"
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
