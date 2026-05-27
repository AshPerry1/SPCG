import { SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { galleryImages } from "@/lib/images";

const spanClass = {
  large: "md:col-span-2 md:row-span-2",
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  normal: "",
} as const;

export function PhotoGallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-[4.5rem] bg-brand-dark py-20 sm:py-28 lg:py-32 sm:scroll-mt-24"
    >
      <div className="container-site">
        <SectionHeader
          eyebrow="Gallery"
          title="Work across Alabama."
          description="Custom homes, commercial build-outs, and renovations — photographed on our job sites."
          align="left"
          light
        />
      </div>

      <ul className="container-site mt-12 grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-4 md:auto-rows-[minmax(11rem,1fr)] lg:auto-rows-[minmax(13rem,1fr)]">
        {galleryImages.map((item, i) => (
          <Reveal key={item.local} delay={i * 40} className={spanClass[item.span]}>
            <li className="relative min-h-[9rem] list-none md:min-h-0">
              <SiteImage
                asset={item}
                className="absolute inset-0 h-full w-full"
                sizes="(max-width: 768px) 50vw, 25vw"
                showCaption
                rounded="rounded-none"
              />
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
