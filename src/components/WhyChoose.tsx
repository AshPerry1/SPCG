import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whyChoose } from "@/lib/site";

export function WhyChoose() {
  return (
    <Section variant="surface">
      <SectionHeader
        eyebrow="Why SPCG"
        title="What hiring a local GC should feel like."
        align="center"
      />
      <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
        {whyChoose.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <li className="bg-surface-elevated p-8 sm:p-10">
              <h3 className="font-display text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
