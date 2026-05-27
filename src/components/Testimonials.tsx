import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Client stories"
        title="What Alabama clients say about working with us."
        align="center"
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <li className="flex h-full flex-col rounded-2xl bg-surface p-6 ring-1 ring-border sm:p-8">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/20">
                  <SiteImage
                    asset={t.image}
                    className="absolute inset-0"
                    sizes="56px"
                    rounded="rounded-full"
                    imageClassName="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
