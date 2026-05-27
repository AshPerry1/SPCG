import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { teamImages } from "@/lib/images";
import { sam } from "@/lib/sam";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about" variant="surface">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <SiteImage
              asset={teamImages.sam}
              className="absolute inset-0"
              sizes="(max-width: 1024px) 100vw, 40vw"
              showCaption
              rounded="rounded-sm"
              imageClassName="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <p className="section-eyebrow">Meet your GC</p>
          <span className="section-rule mt-4 block" aria-hidden />
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {sam.name}
          </h2>
          <p className="mt-2 text-lg text-muted">{sam.title}</p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {sam.intro}
          </p>
          <ul className="mt-8 space-y-3 border-t border-border pt-8">
            {sam.credentials.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-4 text-sm text-foreground sm:text-base">
                <span className="mt-0.5 h-px w-6 shrink-0 bg-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/about" variant="primary" size="lg">
              Sam&apos;s story
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Request estimate
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-light">
            {site.name} · {site.serviceArea}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
