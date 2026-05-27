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

      <div className="container-site relative pt-14 pb-0 sm:pt-20 lg:pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5 lg:pb-16">
            <p className="section-eyebrow section-eyebrow-light">
              {site.serviceArea}
            </p>
            <span className="section-rule section-rule-light mt-4 block" aria-hidden />
            <h1 className="display-xl mt-8 text-[2.25rem] text-white sm:text-5xl lg:text-[3.5rem]">
              Alabama general contracting, led by {site.owner}.
            </h1>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/78 sm:text-lg">
              {site.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full bg-white text-brand hover:bg-white/95 sm:w-auto"
              >
                Request an estimate
              </Button>
              <Button
                href={site.phoneHref}
                variant="outline-light"
                size="lg"
                external
                className="w-full sm:w-auto"
              >
                {site.phone}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="relative lg:-mr-8 xl:-mr-16">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4]">
                <SiteImage
                  asset={heroImages.main}
                  className="absolute inset-0 ring-1 ring-white/10"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                  showCaption
                  rounded="rounded-none"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-3 sm:-bottom-8 sm:left-6 sm:right-auto sm:w-[min(100%,420px)] lg:-bottom-10">
                <div className="relative aspect-[5/4] shadow-elevated ring-1 ring-white/15">
                  <SiteImage
                    asset={heroImages.accentA}
                    className="absolute inset-0"
                    sizes="200px"
                    rounded="rounded-none"
                    overlay={false}
                  />
                </div>
                <div className="relative aspect-[5/4] shadow-elevated ring-1 ring-white/15">
                  <SiteImage
                    asset={heroImages.accentB}
                    className="absolute inset-0"
                    sizes="200px"
                    rounded="rounded-none"
                    overlay={false}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <ul className="mt-20 grid border-t border-white/12 sm:mt-28 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <li
                className={`px-0 py-7 sm:px-6 sm:py-9 ${
                  i > 0 ? "border-t border-white/12 sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <p className="font-display text-lg font-bold text-white">{item.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/62">{item.detail}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
