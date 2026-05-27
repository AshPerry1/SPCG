import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { audiences } from "@/lib/site";

export function Audiences() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Who we serve"
        title="Homeowners, businesses, and developers."
        description="Same standard of communication whether you are building a forever home or opening a new location."
        align="center"
      />
      <ul className="mt-14 space-y-16">
        {audiences.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <li
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3]">
                <SiteImage
                  asset={item.image}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  rounded="rounded-sm"
                />
              </div>
              <div>
                <p className="section-eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
