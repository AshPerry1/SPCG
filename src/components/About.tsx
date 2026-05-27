import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { teamImages } from "@/lib/images";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative col-span-2 aspect-[16/9] sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:min-h-[320px]">
              <SiteImage
                asset={teamImages.sam}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 40vw"
                showCaption
                showHint
              />
            </div>
            <div className="relative aspect-square">
              <SiteImage
                asset={teamImages.crew}
                className="absolute inset-0"
                sizes="250px"
                showHint
              />
            </div>
            <div className="relative aspect-square">
              <SiteImage
                asset={teamImages.branding}
                className="absolute inset-0"
                sizes="250px"
                showHint
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            About {site.shortName}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {site.owner} — your Alabama general contractor.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {site.name} is a locally focused construction company built on showing up,
            communicating clearly, and delivering work that lasts. When you hire us, you
            work directly with {site.owner} — not a revolving door of project managers
            you never meet.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            We&apos;re actively taking on new residential and commercial projects across
            Alabama. From first phone call to final punch list, our job is to make
            construction feel organized — not overwhelming.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Written estimates before work begins",
              "Permits and inspections handled in-house",
              "Coordinated subcontractors under one GC",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="#contact" variant="primary" size="lg">
              Talk to {site.owner.split(" ")[0]}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
