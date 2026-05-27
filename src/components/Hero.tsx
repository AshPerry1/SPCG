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
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-32 top-0 h-[120%] w-[55%] bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.12),transparent_65%)]" />

      <div className="site-container relative">
        <div className="grid items-stretch lg:grid-cols-12 lg:min-h-[min(88vh,920px)]">
          <div className="flex flex-col justify-center py-16 sm:py-20 lg:col-span-5 lg:py-24 xl:col-span-5">
            <Reveal>
              <p className="section-eyebrow section-eyebrow-light">{site.serviceArea}</p>
              <span className="section-rule section-rule-light mt-5 block" aria-hidden />
              <h1 className="display-headline mt-8 text-[2.25rem] text-white sm:text-5xl lg:text-[3.25rem]">
                Alabama builds, led by {site.owner}.
              </h1>
              <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/78 sm:text-lg">
                {site.description}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#contact" variant="accent" size="lg" className="w-full sm:w-auto">
                  Request an estimate
                </Button>
                <Button
                  href={site.phoneHref}
                  variant="ghost"
                  size="lg"
                  external
                  className="w-full text-white ring-1 ring-white/25 hover:bg-white/8 sm:w-auto"
                >
                  {site.phone}
                </Button>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-white/55">
                <li>Licensed GC</li>
                <li>Insured</li>
                <li>Written bids</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative lg:col-span-7 lg:col-start-6 xl:col-span-7 xl:col-start-6">
            <div className="relative h-full min-h-[420px] sm:min-h-[480px] lg:min-h-0">
              <div className="absolute inset-0 lg:inset-y-8 lg:-right-8 lg:left-4">
                <SiteImage
                  asset={heroImages.main}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority
                  showCaption
                  frame-dark
                  rounded=""
                  imageClassName="object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-0 z-10 hidden w-[42%] sm:block lg:bottom-16 lg:-left-6">
                <div className="frame-dark relative aspect-[4/3] bg-brand-dark">
                  <SiteImage
                    asset={heroImages.accentA}
                    className="absolute inset-0"
                    sizes="220px"
                    overlay={false}
                    rounded=""
                  />
                </div>
              </div>
              <div className="absolute right-0 top-8 z-10 hidden w-[38%] sm:block lg:top-12 lg:right-4">
                <div className="frame-dark relative aspect-[3/4] bg-brand-dark">
                  <SiteImage
                    asset={heroImages.accentB}
                    className="absolute inset-0"
                    sizes="200px"
                    overlay={false}
                    rounded=""
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="grid border-t border-white/12 sm:grid-cols-4">
          {trustItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <li
                className={`px-0 py-8 sm:px-6 lg:px-8 ${
                  i > 0 ? "border-t border-white/12 sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <p className="stat-value text-2xl text-white sm:text-[1.75rem]">{item.label}</p>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-white/60">
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
