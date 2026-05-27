import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { galleryImages } from "@/lib/images";

const spanClass = {
  large: "sm:col-span-2 sm:row-span-2",
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
} as const;

export function PhotoGallery() {
  return (
    <Section id="gallery" variant="surface">
      <SectionHeader
        eyebrow="Project gallery"
        title="Real work. Real job sites."
        description="Residential builds, commercial build-outs, and renovations across Alabama — managed start to finish by one accountable team."
        align="center"
      />

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[minmax(180px,1fr)] sm:gap-4 lg:auto-rows-[minmax(200px,1fr)]">
        {galleryImages.map((item, i) => (
          <Reveal key={item.local} delay={i * 50} className={spanClass[item.span]}>
            <li className="relative h-full min-h-[160px] list-none">
              <SiteImage
                asset={item}
                className="absolute inset-0 h-full w-full shadow-md ring-1 ring-border/80"
                sizes="(max-width: 640px) 50vw, 25vw"
                showCaption
              />
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
