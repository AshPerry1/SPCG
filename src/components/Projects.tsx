import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { projects, site } from "@/lib/site";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" variant="surface">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Our work"
          title="Projects across Alabama."
          description="Each slot is ready for Sam's real job photos — add files to public/images/projects/ to replace the samples instantly."
          align="left"
        />
        <Button href="#contact" variant="secondary" size="md" className="shrink-0 self-start sm:mb-2">
          Discuss your project
        </Button>
      </div>

      {featured && (
        <Reveal className="mt-10">
          <article className="group overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-border lg:grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
              <SiteImage
                asset={featured.image}
                className="absolute inset-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                showHint
                rounded="rounded-none lg:rounded-l-2xl"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Featured · {featured.category} · {featured.location}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-muted">Completed {featured.year}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Ground-up and major renovation work managed start to finish by{" "}
                {site.owner} and the SPCG team.
              </p>
            </div>
          </article>
        </Reveal>
      )}

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {rest.map((project, i) => (
          <Reveal key={project.title} delay={i * 50}>
            <li className="group list-none overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-border transition-shadow hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <SiteImage
                  asset={project.image}
                  className="absolute inset-0"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  showHint
                  rounded="rounded-none rounded-t-2xl"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {project.category} · {project.location}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
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
