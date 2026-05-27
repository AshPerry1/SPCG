import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Clients"
        title="Owners who chose SPCG."
        description="Homeowners and business owners across Alabama — on schedule, on scope, and in the loop."
        align="center"
      />
      <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-14">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <li className="surface-card relative p-8 sm:p-10">
              <span
                className="absolute right-6 top-4 font-display text-7xl leading-none text-brand/10"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="relative text-lg leading-relaxed text-foreground sm:text-xl">
                {t.quote}
              </blockquote>
              <footer className="mt-8 border-t border-border pt-6">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {t.role} · {t.location}
                </p>
              </footer>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
