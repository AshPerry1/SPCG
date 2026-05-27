import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_120%,rgba(255,255,255,0.12),transparent)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Ready to start your project?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
          Tell us what you&apos;re building. We&apos;ll schedule a site visit and
          send a clear written estimate.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            className="bg-white text-brand shadow-lg shadow-black/10 hover:bg-white/95"
          >
            Get a free estimate
          </Button>
          <Button
            href={site.phoneHref}
            variant="ghost"
            size="lg"
            external
            className="text-white ring-1 ring-white/35 hover:bg-white/10"
          >
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
