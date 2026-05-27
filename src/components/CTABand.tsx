import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-white/85 sm:text-lg">
          Tell us what you&apos;re building. We&apos;ll schedule a site visit and
          send a clear written estimate.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            className="bg-white text-brand hover:bg-white/95"
          >
            Get a free estimate
          </Button>
          <Button
            href={site.phoneHref}
            variant="ghost"
            size="lg"
            external
            className="text-white ring-1 ring-white/30 hover:bg-white/10"
          >
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
