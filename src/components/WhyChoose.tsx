import { Section, SectionHeader } from "@/components/ui/Section";
import { whyChoose } from "@/lib/site";

export function WhyChoose() {
  return (
    <Section variant="surface">
      <SectionHeader
        eyebrow="Why SPCG"
        title="What you can expect when you hire us."
        align="center"
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {whyChoose.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8"
          >
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
