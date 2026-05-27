/**
 * Image map for SPCG — photos live in public/images/ at each `local` path.
 * `fallback` is used only if a local file is missing or fails to load.
 */
export type ImageAsset = {
  local: string;
  fallback: string;
  alt: string;
  caption?: string;
};

export const heroImages = {
  main: {
    local: "/images/hero/job-site.jpg",
    fallback:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    alt: "SPCG crew at an Alabama construction site",
    caption: "On site — Alabama",
  },
  accentA: {
    local: "/images/hero/truck.jpg",
    fallback:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    alt: "SP Construction Group truck at a job site",
  },
  accentB: {
    local: "/images/hero/framing.jpg",
    fallback:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    alt: "Framing work in progress",
  },
} as const satisfies Record<string, ImageAsset>;

export const teamImages = {
  sam: {
    local: "/images/team/sam-patel.jpg",
    fallback:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    alt: "Sam Patel, general contractor",
    caption: "Sam Patel · General Contractor",
  },
  crew: {
    local: "/images/team/crew.jpg",
    fallback:
      "https://images.unsplash.com/photo-1581094794329-cd2e91364a8f?auto=format&fit=crop&w=1200&q=80",
    alt: "SPCG field crew reviewing plans",
  },
  branding: {
    local: "/images/team/branding.jpg",
    fallback: "/branding-reference.png",
    alt: "SPCG branded truck, hard hat, and apparel",
  },
} as const satisfies Record<string, ImageAsset>;

export const galleryImages = [
  {
    local: "/images/gallery/01-home-exterior.jpg",
    fallback:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    alt: "Custom home exterior",
    caption: "Custom home · Residential",
    span: "large" as const,
  },
  {
    local: "/images/gallery/02-kitchen.jpg",
    fallback:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Kitchen remodel",
    caption: "Kitchen remodel",
    span: "tall" as const,
  },
  {
    local: "/images/gallery/03-commercial.jpg",
    fallback:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Commercial build-out",
    caption: "Commercial build-out",
    span: "wide" as const,
  },
  {
    local: "/images/gallery/04-framing.jpg",
    fallback:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    alt: "Structural framing",
    caption: "New construction",
    span: "normal" as const,
  },
  {
    local: "/images/gallery/05-bath.jpg",
    fallback:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
    alt: "Bathroom renovation",
    caption: "Bath renovation",
    span: "normal" as const,
  },
  {
    local: "/images/gallery/06-site.jpg",
    fallback:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    alt: "Active job site aerial view",
    caption: "Active job site",
    span: "large" as const,
  },
] as const;

export const onSiteStrip = [
  {
    local: "/images/site/01.jpg",
    fallback:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    alt: "Foundation work",
  },
  {
    local: "/images/site/02.jpg",
    fallback:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    alt: "Carpentry detail",
  },
  {
    local: "/images/site/03.jpg",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    alt: "Equipment on site",
  },
  {
    local: "/images/site/04.jpg",
    fallback:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    alt: "Interior rough-in",
  },
  {
    local: "/images/site/05.jpg",
    fallback:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    alt: "Roofing progress",
  },
] as const satisfies readonly ImageAsset[];
