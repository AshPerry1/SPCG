import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <Section variant="surface">
      <SectionHeader
        eyebrow="Clients"
        title="Owners who chose SPCG."
        align="center"
      />
      <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <li className="relative border-l-2 border-accent pl-8">
              <blockquote className="text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-8">
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
