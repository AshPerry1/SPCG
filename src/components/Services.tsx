import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { services } from "@/lib/site";

export function Services() {
  return (
    <Section id="services" variant="surface">
      <SectionHeader
        eyebrow="Services"
        title="Everything you need from one general contractor."
        description="One team handles permits, trades, inspections, and daily site management — so you're not coordinating five different companies."
        align="center"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 60}>
            <li className="group overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-border transition-all hover:shadow-xl">
              <div className="relative aspect-[21/9] overflow-hidden sm:aspect-[2/1]">
                <SiteImage
                  asset={service.image}
                  className="absolute inset-0"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  rounded="rounded-none rounded-t-2xl"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold capitalize text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
