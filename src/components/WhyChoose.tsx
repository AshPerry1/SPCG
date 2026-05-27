import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whyChoose } from "@/lib/site";

export function WhyChoose() {
  return (
    <Section variant="dark" compact>
      <SectionHeader
        eyebrow="Why SPCG"
        title="What hiring a local GC should feel like."
        align="center"
        light
      />
      <ul className="mt-14 grid gap-px overflow-hidden border border-white/10 sm:grid-cols-2">
        {whyChoose.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <li className="bg-brand-dark p-10 sm:p-12">
              <span className="mb-4 block h-0.5 w-8 bg-accent" aria-hidden />
              <h3 className="display-headline text-xl text-white sm:text-2xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/68 sm:text-base">
                {item.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
