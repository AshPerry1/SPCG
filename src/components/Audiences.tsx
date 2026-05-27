import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { audiences } from "@/lib/site";

export function Audiences() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Who we work with"
        title="Built for homeowners, businesses, and developers."
        description="Whether you're planning your forever home or opening a new location, you get the same clear communication and professional execution."
        align="center"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {audiences.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <li className="group overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-border transition-shadow hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden">
                <SiteImage
                  asset={item.image}
                  className="absolute inset-0"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  showHint
                  rounded="rounded-none rounded-t-2xl"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
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
