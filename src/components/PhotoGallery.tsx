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
    <section id="gallery" className="scroll-mt-20 bg-brand-dark py-20 sm:py-28 lg:py-32">
      <div className="site-container">
        <SectionHeader
          eyebrow="Gallery"
          title="Built across Alabama."
          description="Residential, commercial, and renovation work — photographed on our job sites."
          align="left"
          light
        />
      </div>

      <ul className="site-container mt-14 grid grid-cols-2 gap-1 sm:grid-cols-4 md:auto-rows-[minmax(180px,1fr)] md:gap-1.5">
        {galleryImages.map((item, i) => (
          <Reveal key={item.local} delay={i * 40} className={spanClass[item.span]}>
            <li className="relative min-h-[160px] list-none md:min-h-0">
              <SiteImage
                asset={item}
                className="absolute inset-0 h-full w-full"
                sizes="(max-width: 768px) 50vw, 25vw"
                showCaption
                rounded=""
              />
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
