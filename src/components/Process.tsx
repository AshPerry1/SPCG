import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
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
      <ol className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
        {processSteps.map((step, index) => (
          <li key={step.step} className="relative">
            {index < processSteps.length - 1 && (
              <span
                className="absolute left-8 top-14 hidden h-px w-[calc(100%-2rem)] bg-border sm:block"
                aria-hidden
              />
            )}
            <div className="rounded-2xl bg-surface p-6 sm:p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {step.description}
              </p>
            </div>
          </li>
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
