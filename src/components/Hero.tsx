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
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-20 lg:px-8 lg:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="max-w-lg">
              <p className="section-eyebrow">{site.serviceArea}</p>
              <span className="section-rule mt-4 block" aria-hidden />
              <h1 className="mt-6 text-balance font-display text-[2.125rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
                General contracting across Alabama — led by {site.owner}.
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">
                {site.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Request an estimate
                </Button>
                <Button
                  href={site.phoneHref}
                  variant="secondary"
                  size="lg"
                  external
                  className="w-full sm:w-auto"
                >
                  {site.phone}
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted-light">
                Licensed GC · Insured · Written bids before work begins
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="relative">
              <div className="relative aspect-[5/4] sm:aspect-[16/11]">
                <SiteImage
                  asset={heroImages.main}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                  showCaption
                  rounded="rounded-sm"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative aspect-[4/3]">
                  <SiteImage
                    asset={heroImages.accentA}
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 45vw, 28vw"
                    rounded="rounded-sm"
                  />
                </div>
                <div className="relative aspect-[4/3]">
                  <SiteImage
                    asset={heroImages.accentB}
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 45vw, 28vw"
                    rounded="rounded-sm"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid border-t border-border sm:grid-cols-4">
          {trustItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 50}>
              <li
                className={`border-border px-0 py-6 sm:px-6 sm:py-8 ${
                  i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <p className="font-display text-lg font-bold text-foreground">
                  {item.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
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
