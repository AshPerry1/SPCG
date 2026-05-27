import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-border">
            <Image
              src="/branding-reference.png"
              alt="SP Construction Group branding on truck, hard hat, and apparel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            About {site.shortName}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {site.owner} — your Alabama general contractor.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {site.name} is a locally focused construction company built on
            showing up, communicating clearly, and delivering work that lasts.
            When you hire us, you work directly with {site.owner} — not a
            revolving door of project managers you never meet.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            We&apos;re actively taking on new residential and commercial projects
            across Alabama. From first phone call to final punch list, our job
            is to make construction feel organized — not overwhelming.
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
        </div>
      </div>
    </Section>
  );
}
