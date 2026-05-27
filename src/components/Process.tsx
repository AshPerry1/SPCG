import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section id="process" variant="surface">
      <SectionHeader
        eyebrow="How we work"
        title="From first call to final walkthrough."
        description="Straightforward steps — site visit, written estimate, then build with one point of contact."
        align="center"
      />
      <ol className="mt-14 space-y-0">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 80}>
            <li className="grid gap-8 border-t border-border py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="lg:col-span-5">
                <p className="font-display text-5xl font-bold leading-none text-brand/20">
                  {step.step}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {step.description}
                </p>
              </div>
              <div className="relative aspect-[16/10] lg:col-span-7">
                <SiteImage
                  asset={step.image}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  rounded="rounded-sm"
                />
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="mt-12 flex justify-center border-t border-border pt-12">
        <Button href="#contact" variant="primary" size="lg">
          Start with a conversation
        </Button>
      </div>
    </Section>
  );
}
