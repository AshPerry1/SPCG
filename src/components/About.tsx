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
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="frame-light relative aspect-[4/5] overflow-hidden">
            <SiteImage
              asset={teamImages.sam}
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
              showCaption
              rounded=""
              imageClassName="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <p className="section-eyebrow">Meet your GC</p>
          <span className="section-rule mt-5 block" aria-hidden />
          <h2 className="display-headline mt-6 text-4xl text-foreground sm:text-5xl">{sam.name}</h2>
          <p className="mt-3 text-lg font-medium text-brand">{sam.title}</p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{sam.intro}</p>
          <ul className="mt-10 space-y-4 border-t border-border pt-10">
            {sam.credentials.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-4 text-sm text-foreground sm:text-base">
                <span className="mt-2 h-px w-8 shrink-0 bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/about" variant="primary" size="lg">
              Sam&apos;s story
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Request estimate
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
