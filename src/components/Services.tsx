import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { services } from "@/lib/site";

export function Services() {
  return (
    <Section id="services">
      <div className="lg:grid lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Services"
            title="One contractor for the full job."
            description="Permits, trades, inspections, and daily site leadership — you are not coordinating five different companies."
            align="left"
          />
        </div>
        <ul className="mt-12 space-y-0 lg:col-span-8 lg:mt-0">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 50}>
              <li className="group grid gap-6 border-t border-border py-10 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:gap-8">
                <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3]">
                  <SiteImage
                    asset={service.image}
                    className="absolute inset-0"
                    sizes="(max-width: 640px) 100vw, 40vw"
                    rounded="rounded-sm"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-brand/80">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
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
