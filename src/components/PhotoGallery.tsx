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
        description="Swap in Sam's photos anytime — drop files into public/images/gallery/ using the filenames in our image guide. Until then, sample shots show the layout."
        align="center"
      />

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[180px] sm:gap-4 lg:auto-rows-[200px]">
        {galleryImages.map((item, i) => (
          <Reveal key={item.local} delay={i * 50} className={spanClass[item.span]}>
            <li className="relative h-full min-h-[140px] list-none">
              <SiteImage
                asset={item}
                className="absolute inset-0 h-full w-full shadow-md ring-1 ring-border"
                sizes="(max-width: 640px) 50vw, 25vw"
                showCaption
                showHint
              />
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8">
        <p className="mx-auto max-w-xl rounded-2xl bg-brand/5 px-5 py-4 text-center text-sm text-muted ring-1 ring-brand/15">
          <span className="font-semibold text-brand">Photo tip:</span> Replace sample images by
          adding JPGs to{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 text-xs text-foreground">
            public/images/
          </code>{" "}
          — the site picks them up automatically.
        </p>
      </Reveal>
    </Section>
  );
}
