import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow="Our work"
          title="Recent project types across Alabama."
          description="Placeholder gallery — Sam will add photos from completed jobs. Each card shows the kind of work we deliver."
          align="left"
        />
        <Button href="#contact" variant="secondary" size="md" className="shrink-0 self-start sm:mb-2">
          Discuss your project
        </Button>
      </div>

      <ul className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:overflow-visible sm:pb-0 sm:grid-cols-3 sm:gap-6 [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <li
            key={project.title}
            className="w-[min(85vw,320px)] shrink-0 snap-center sm:w-auto"
          >
            <article className="group overflow-hidden rounded-2xl bg-surface ring-1 ring-border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 85vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {project.category} · {project.location}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
