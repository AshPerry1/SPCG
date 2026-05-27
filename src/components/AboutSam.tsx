import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { teamImages } from "@/lib/images";
import { sam } from "@/lib/sam";
import { site } from "@/lib/site";

export function AboutSam() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-dark/30 bg-brand text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="section-eyebrow text-white/65">
                About {site.owner}
              </p>
              <span className="section-rule section-rule-light mt-4 block" aria-hidden />
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {sam.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-white/90">{sam.title}</p>
              <p className="mt-2 text-sm text-white/70">{sam.company} · {sam.location}</p>
              <p className="mt-6 text-lg leading-relaxed text-white/85">{sam.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/#contact"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-brand hover:bg-white/95"
                >
                  Request a project estimate
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
            </Reveal>
            <Reveal delay={100}>
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden lg:max-w-none">
                <SiteImage
                  asset={teamImages.sam}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                  showCaption
                  imageClassName="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              My approach to every build
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {sam.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <blockquote className="mt-10 border-l-4 border-brand pl-6">
              <p className="font-display text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
                &ldquo;{sam.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium text-brand">
                — {sam.name}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values + credentials */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                How I run {site.shortName}
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {sam.values.map((item, i) => (
                  <li
                    key={item.title}
                    className="border border-border bg-surface-elevated p-5"
                  >
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-border bg-surface-elevated p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground">Credentials</h3>
                <ul className="mt-4 space-y-3">
                  {sam.credentials.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                      <span className="font-bold text-brand">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">{site.license}</p>

                <h3 className="mt-8 text-lg font-semibold text-foreground">
                  Project focus
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {sam.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="border border-brand/20 px-3.5 py-1.5 text-sm font-medium text-brand"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-6 aspect-[16/10] overflow-hidden">
                <SiteImage
                  asset={teamImages.crew}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand + CTA */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <SiteImage
                  asset={teamImages.branding}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Built on trust — in person and on every job site
              </h2>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                {site.name} is more than a logo on a truck. It&apos;s a commitment to
                Alabama homeowners and businesses who want a general contractor they
                can reach, understand, and rely on from bid day to keys-in-hand.
              </p>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                Ready to talk about your project? I&apos;d like to hear what
                you&apos;re building.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contact" variant="primary" size="lg">
                  Request estimate
                </Button>
                <Button href="/" variant="secondary" size="lg">
                  Back to home
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
