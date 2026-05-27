import { Section, SectionHeader } from "@/components/ui/Section";
import { services } from "@/lib/site";

const icons: Record<string, React.ReactNode> = {
  building: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    </svg>
  ),
  hammer: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  briefcase: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  ),
  clipboard: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
};

export function Services() {
  return (
    <Section id="services" variant="surface">
      <SectionHeader
        eyebrow="Services"
        title="Everything you need from one general contractor."
        description="One team handles permits, trades, inspections, and daily site management — so you're not coordinating five different companies."
        align="center"
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {services.map((service) => (
          <li
            key={service.title}
            className="group flex gap-5 rounded-2xl bg-surface-elevated p-6 ring-1 ring-border transition-all hover:shadow-lg sm:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
              {icons[service.icon]}
            </div>
            <div>
              <h3 className="text-lg font-semibold capitalize text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
