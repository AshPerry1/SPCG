import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { heroImages } from "@/lib/images";
import { site, trustItems } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      data-chat-section="hero"
      className="relative overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(26,74,56,0.07),transparent)]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-brand/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                {site.serviceArea} · Now booking projects
              </p>
              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                Alabama construction, led by a GC who shows up.
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                {site.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Get a free estimate
                </Button>
                <Button
                  href={site.phoneHref}
                  variant="secondary"
                  size="lg"
                  external
                  className="w-full sm:w-auto"
                >
                  Call {site.phone}
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-light">
                Typical response within one business day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/4]">
              <SiteImage
                asset={heroImages.main}
                className="absolute inset-0 shadow-2xl ring-1 ring-border/60"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                showCaption
              />
              <div className="absolute -left-3 top-8 hidden w-[42%] overflow-hidden rounded-xl shadow-lg ring-2 ring-white sm:block lg:-left-6">
                <div className="relative aspect-[4/3]">
                  <SiteImage
                    asset={heroImages.accentA}
                    className="absolute inset-0"
                    sizes="200px"
                    rounded="rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -right-2 bottom-16 hidden w-[38%] overflow-hidden rounded-xl shadow-lg ring-2 ring-white sm:block lg:-right-4">
                <div className="relative aspect-square">
                  <SiteImage
                    asset={heroImages.accentB}
                    className="absolute inset-0"
                    sizes="180px"
                    rounded="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-2xl bg-surface-elevated/95 p-4 shadow-lg ring-1 ring-border backdrop-blur-sm sm:-bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="text-sm font-semibold text-foreground">
                Now accepting new projects
              </p>
              <p className="mt-1 text-sm text-muted">
                Residential & commercial · {site.owner}, GC
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 border-t border-border pt-10 sm:grid-cols-4 sm:gap-4">
          {trustItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <li className="rounded-2xl bg-surface px-4 py-4 text-center sm:px-5 sm:py-5 sm:text-left">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
