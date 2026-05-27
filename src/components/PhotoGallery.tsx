import { SectionHeader } from "@/components/ui/Section";
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
    <section
      id="gallery"
      className="scroll-mt-20 bg-brand-dark py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Work across Alabama."
          description="Residential builds, commercial build-outs, and renovations — photographed on our job sites."
          align="left"
          light
        />
      </div>

      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-2 px-5 sm:grid-cols-4 sm:auto-rows-[minmax(160px,1fr)] sm:gap-3 sm:px-6 lg:auto-rows-[minmax(190px,1fr)] lg:px-8">
        {galleryImages.map((item, i) => (
          <Reveal key={item.local} delay={i * 40} className={spanClass[item.span]}>
            <li className="relative min-h-[140px] list-none sm:min-h-0">
              <SiteImage
                asset={item}
                className="absolute inset-0 h-full w-full"
                sizes="(max-width: 640px) 50vw, 25vw"
                showCaption
                rounded="rounded-sm"
              />
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
