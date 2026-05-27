import { Section, SectionHeader } from "@/components/ui/Section";
import { audiences } from "@/lib/site";

export function Audiences() {
  return (
    <Section variant="surface">
      <SectionHeader
        eyebrow="Who we work with"
        title="Built for homeowners, businesses, and developers."
        description="Whether you're planning your forever home or opening a new location, you get the same clear communication and professional execution."
        align="center"
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
        {audiences.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl bg-surface-elevated p-6 ring-1 ring-border transition-shadow hover:shadow-md sm:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
