import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="How it works"
        title="Three simple steps to get started."
        description="No confusing process. We make it easy to understand what happens next — from first call to groundbreaking."
        align="center"
      />
      <ol className="mt-14 grid gap-8 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 90}>
            <li className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
              <div className="relative aspect-[16/10]">
                <SiteImage
                  asset={step.image}
                  className="absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  rounded="rounded-none rounded-t-2xl"
                />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-lg">
                  {step.step}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="mt-12 flex justify-center">
        <Button href="#contact" variant="primary" size="lg">
          Start step one — contact us
        </Button>
      </div>
    </Section>
  );
}
