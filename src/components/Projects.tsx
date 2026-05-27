import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { projects, site } from "@/lib/site";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects statewide."
          description="Custom homes, tenant improvements, and renovations — bid through closeout with clear communication."
          align="left"
        />
        <Button href="#contact" variant="secondary" size="md" className="shrink-0 self-start">
          Discuss your project
        </Button>
      </div>

      {featured && (
        <Reveal className="mt-14">
          <article className="surface-card-elevated grid overflow-hidden lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]">
              <SiteImage
                asset={featured.image}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                rounded="rounded-none"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <p className="section-eyebrow">
                {featured.category} · {featured.location}
              </p>
              <h3 className="display-xl mt-5 text-2xl sm:text-3xl">{featured.title}</h3>
              <p className="mt-2 text-sm font-medium text-muted">Completed {featured.year}</p>
              <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
                Ground-up and major renovation work managed by {site.owner} and the SPCG field
                team — scheduling, inspections, and owner updates included.
              </p>
            </div>
          </article>
        </Reveal>
      )}

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={i * 50}>
            <li className="surface-card list-none overflow-hidden">
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
                <p className="mt-1 text-xs font-medium text-muted-light">{project.year}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
