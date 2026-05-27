import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { services } from "@/lib/site";

export function Services() {
  return (
    <Section id="services">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Services"
            title="One contractor from bid to keys."
            description="Permits, trades, inspections, and daily site leadership — you are not coordinating five different companies."
            align="left"
          />
        </div>
        <ul className="mt-14 lg:col-span-8 lg:mt-0">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 50}>
              <li className="group grid gap-8 border-t border-border py-12 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:items-center lg:gap-12">
                <div className="relative aspect-[5/4] overflow-hidden bg-surface lg:aspect-[4/3]">
                  <SiteImage
                    asset={service.image}
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    rounded=""
                  />
                  <span className="absolute left-0 top-0 bg-brand px-3 py-2 font-display text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="display-headline text-2xl text-foreground sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
