import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { projects, site } from "@/lib/site";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects statewide."
          description="Custom homes, tenant improvements, and renovations — bid through closeout with clear communication."
          align="left"
        />
        <Button href="#contact" variant="secondary" size="md" className="shrink-0 self-start sm:mb-2">
          Discuss your project
        </Button>
      </div>

      {featured && (
        <Reveal className="mt-12">
          <article className="grid overflow-hidden border border-border bg-surface-elevated lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
              <SiteImage
                asset={featured.image}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                rounded="rounded-none"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="section-eyebrow">
                {featured.category} · {featured.location}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-muted">Completed {featured.year}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                Ground-up and major renovation work managed by {site.owner} and the
                SPCG field team — scheduling, inspections, and owner updates included.
              </p>
            </div>
          </article>
        </Reveal>
      )}

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={i * 50}>
            <li className="list-none border border-border bg-surface-elevated">
              <div className="relative aspect-[4/3]">
                <SiteImage
                  asset={project.image}
                  className="absolute inset-0"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  rounded="rounded-none"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p className="section-eyebrow text-[0.625rem]">
                  {project.category} · {project.location}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-muted-light">{project.year}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
