import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { teamImages } from "@/lib/images";
import { sam } from "@/lib/sam";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-border">
            <SiteImage
              asset={teamImages.sam}
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
              showCaption
              showHint
              imageClassName="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Meet your GC
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {sam.name} — {sam.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {sam.intro}
          </p>
          <ul className="mt-6 space-y-2">
            {sam.credentials.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                <span className="font-bold text-brand">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="primary" size="lg">
              Read Sam&apos;s story
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get an estimate
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
