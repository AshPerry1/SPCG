import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { audiences } from "@/lib/site";

export function Audiences() {
  return (
    <Section variant="warm">
      <SectionHeader
        eyebrow="Who we serve"
        title="Homeowners, businesses, and developers."
        description="The same standard of communication whether you are building a forever home or opening a new location."
        align="center"
      />
      <ul className="mt-16 space-y-20 lg:space-y-28">
        {audiences.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <li
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2 lg:[&>div:first-child]:col-start-7" : ""
              }`}
            >
              <div className="relative aspect-[4/3] lg:col-span-6">
                <div className="frame-light absolute inset-0 overflow-hidden">
                  <SiteImage
                    asset={item.image}
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    rounded=""
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:col-span-5" : "lg:col-span-6"}>
                <p className="stat-value text-5xl text-brand/15">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display-headline mt-4 text-3xl text-foreground">{item.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
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
