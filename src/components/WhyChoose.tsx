import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whyChoose } from "@/lib/site";

export function WhyChoose() {
  return (
    <Section variant="surface">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="Why SPCG"
            title="What hiring a local GC should feel like."
            align="left"
          />
        </div>
        <ul className="mt-12 space-y-0 lg:col-span-8 lg:mt-0">
          {whyChoose.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <li className="grid gap-4 border-t border-border py-9 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-11">
                <span className="font-display text-3xl font-bold leading-none text-brand/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
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
