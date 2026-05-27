import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { teamImages } from "@/lib/images";
import { sam } from "@/lib/sam";
import { site } from "@/lib/site";

export function AboutSam() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -12deg,
              transparent,
              transparent 48px,
              rgba(255,255,255,0.5) 48px,
              rgba(255,255,255,0.5) 49px
            )`,
          }}
          aria-hidden
        />
        <div className="container-site relative py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="section-eyebrow section-eyebrow-light">About {site.owner}</p>
              <span className="section-rule section-rule-light mt-4 block" aria-hidden />
              <h1 className="display-xl mt-6 text-4xl text-white sm:text-5xl">{sam.name}</h1>
              <p className="mt-3 text-lg font-medium text-white/88">{sam.title}</p>
              <p className="mt-1 text-sm text-white/58">
                {sam.company} · {sam.location}
              </p>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/78">{sam.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  href="/#contact"
                  variant="primary"
                  size="lg"
                  className="bg-white text-brand hover:bg-white/95"
                >
                  Request a project estimate
                </Button>
                <Button href={site.phoneHref} variant="outline-light" size="lg" external>
                  Call {site.phone}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative mx-auto aspect-[4/5] max-w-md lg:max-w-none">
                <SiteImage
                  asset={teamImages.sam}
                  className="absolute inset-0 ring-1 ring-white/15"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                  showCaption
                  rounded="rounded-none"
                  imageClassName="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="section-eyebrow">Philosophy</p>
            <span className="section-rule mt-4 block" aria-hidden />
            <h2 className="display-xl mt-6 text-3xl sm:text-4xl">My approach to every build</h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            {sam.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <blockquote className="mt-12 border-l-2 border-brand bg-surface px-6 py-6 sm:px-8">
              <p className="font-display text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
                &ldquo;{sam.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand">— {sam.name}</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-site">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="section-eyebrow">Leadership</p>
              <span className="section-rule mt-4 block" aria-hidden />
              <h2 className="display-xl mt-6 text-3xl">How I run {site.shortName}</h2>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {sam.values.map((item) => (
                  <li key={item.title} className="surface-card p-5">
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <div className="surface-card-elevated p-6 sm:p-8">
                <h3 className="font-display text-lg font-bold text-foreground">Credentials</h3>
                <ul className="mt-5 space-y-3">
                  {sam.credentials.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                      <span className="mt-0.5 h-px w-5 shrink-0 bg-brand" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted">{site.license}</p>

                <h3 className="mt-10 font-display text-lg font-bold text-foreground">
                  Project focus
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {sam.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="border border-brand/20 bg-brand/5 px-3 py-1.5 text-sm font-medium text-brand"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-5 aspect-[16/10]">
                <SiteImage
                  asset={teamImages.crew}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  rounded="rounded-sm"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3]">
                <SiteImage
                  asset={teamImages.branding}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  rounded="rounded-sm"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="section-eyebrow">SPCG</p>
              <span className="section-rule mt-4 block" aria-hidden />
              <h2 className="display-xl mt-6 text-3xl">
                Built on trust — in person and on every job site
              </h2>
              <p className="mt-5 leading-relaxed text-muted sm:text-lg">
                {site.name} is more than a logo on a truck. It&apos;s a commitment to Alabama
                homeowners and businesses who want a general contractor they can reach,
                understand, and rely on from bid day to keys-in-hand.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
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
