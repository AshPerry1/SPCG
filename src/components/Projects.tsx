import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { projects, site } from "@/lib/site";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" variant="surface">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects across Alabama."
          description="Custom homes, tenant improvements, and renovations — bid through closeout with clear communication."
          align="left"
        />
        <Button href="#contact" variant="secondary" size="md" className="shrink-0 self-start lg:mb-4">
          Discuss your project
        </Button>
      </div>

      {featured && (
        <Reveal className="mt-14">
          <article className="grid overflow-hidden bg-brand-dark lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
              <SiteImage
                asset={featured.image}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                rounded=""
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-10 text-white sm:px-12 sm:py-14">
              <p className="section-eyebrow section-eyebrow-light">
                {featured.category} · {featured.location}
              </p>
              <h3 className="display-headline mt-6 text-3xl text-white sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm text-white/55">Completed {featured.year}</p>
              <p className="mt-6 text-base leading-relaxed text-white/78">
                Ground-up and major renovation work managed by {site.owner} and the SPCG field
                team — scheduling, inspections, and owner updates included.
              </p>
            </div>
          </article>
        </Reveal>
      )}

      <ul className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={i * 50}>
            <li className="list-none bg-background">
              <div className="relative aspect-[4/3]">
                <SiteImage
                  asset={project.image}
                  className="absolute inset-0"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  rounded=""
                />
              </div>
              <div className="border-t border-border p-6">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-brand">
                  {project.category}
                </p>
                <h3 className="display-headline mt-2 text-xl text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-muted-light">
                  {project.location} · {project.year}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
