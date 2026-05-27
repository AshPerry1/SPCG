import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="How we work"
        title="From first call to final walkthrough."
        description="Site visit, written estimate, then build with one point of contact."
        align="center"
      />
      <ol className="mt-16">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 80}>
            <li className="grid gap-10 border-t border-border py-14 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="lg:col-span-4">
                <p className="stat-value text-6xl leading-none text-brand/20 sm:text-7xl">
                  {step.step}
                </p>
                <h3 className="display-headline mt-6 text-2xl text-foreground sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
              <div className="relative aspect-[16/10] lg:col-span-8">
                <SiteImage
                  asset={step.image}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  rounded=""
                />
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="mt-14 flex justify-center border-t border-border pt-14">
        <Button href="#contact" variant="primary" size="lg">
          Start with a conversation
        </Button>
      </div>
    </Section>
  );
}
