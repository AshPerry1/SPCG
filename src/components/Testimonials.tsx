import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Clients"
        title="Owners who chose SPCG."
        align="center"
      />
      <ul className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <li className="relative border-t border-brand pt-8">
              <span
                className="absolute -top-1 left-0 font-display text-6xl leading-none text-brand/15"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="text-lg leading-relaxed text-foreground sm:text-xl">
                {t.quote}
              </blockquote>
              <footer className="mt-6">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted">
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
