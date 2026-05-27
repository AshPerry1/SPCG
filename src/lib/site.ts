import { publicAsset } from "@/lib/base-path";
import type { ImageAsset } from "@/lib/images";

export const site = {
  name: "SP Construction Group",
  shortName: "SPCG",
  legalName: "SP CONSTRUCTION GROUP",
  owner: "Sam Patel",
  tagline: "Alabama's trusted general contractor.",
  description:
    "Licensed general contractor serving homeowners and businesses across Alabama. New builds, remodels, and commercial work — one team from bid to final walkthrough.",
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  email: "hello@spconstructiongroup.com",
  careersEmail: "careers@spconstructiongroup.com",
  serviceArea: "Serving all of Alabama",
  hours: "Mon–Fri, 7:00 AM – 5:00 PM",
  license: "Alabama General Contractor — license # coming soon",
} as const;

/** Header & footer navigation (works from any page) */
export const navLinks = [
  { href: "/about", label: "About Sam" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#projects", label: "Work" },
  { href: "/#careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
] as const;

export const openRoles = [
  {
    id: "estimator",
    title: "Construction Estimator",
    type: "Full-time",
    location: "Alabama · Hybrid office & field",
    summary:
      "Prepare accurate bids for residential and commercial work — from takeoffs and vendor quotes to polished proposals owners can trust.",
    highlights: [
      "Review plans, specs, and site conditions for scope",
      "Build detailed estimates with clear assumptions",
      "Coordinate with Sam and field leads on pricing",
    ],
  },
  {
    id: "accountant",
    title: "Staff Accountant",
    type: "Full-time",
    location: "Alabama · On-site or hybrid",
    summary:
      "Keep our books clean and projects profitable — job costing, AP/AR, payroll support, and reporting that helps leadership make decisions.",
    highlights: [
      "Job-cost tracking aligned to active projects",
      "Vendor, subcontractor, and client billing support",
      "Month-end reporting and document organization",
    ],
  },
  {
    id: "superintendent",
    title: "Project Superintendent",
    type: "Full-time",
    location: "Alabama · Field-based",
    summary:
      "Run job sites day to day — schedule trades, uphold safety and quality, and keep homeowners and commercial clients informed.",
    highlights: [
      "Daily site leadership and subcontractor coordination",
      "Quality checks, safety, and inspection readiness",
      "Clear updates to the GC and project owners",
    ],
  },
  {
    id: "project-coordinator",
    title: "Project Coordinator",
    type: "Full-time",
    location: "Alabama · Office",
    summary:
      "Support active builds behind the scenes — permits, schedules, purchase orders, and communication so nothing falls through the cracks.",
    highlights: [
      "Permit and inspection scheduling",
      "Maintain project files, contacts, and timelines",
      "Bridge between office, field, and clients",
    ],
  },
  {
    id: "skilled-labor",
    title: "Skilled Carpenter / Lead Hand",
    type: "Full-time",
    location: "Alabama · Field",
    summary:
      "Hands-on role for experienced tradespeople who take pride in framing, finish work, and mentoring crew on residential and light commercial jobs.",
    highlights: [
      "Lead field crew on assigned scopes",
      "Read plans and deliver code-compliant work",
      "Reliable attendance and professional client interaction",
    ],
  },
  {
    id: "general",
    title: "General Application",
    type: "Open",
    location: "Alabama",
    summary:
      "Don't see your role listed? Tell us what you bring — we're always meeting talented people who fit our culture and growth plans.",
    highlights: [
      "Operations, admin, sales, or field experience welcome",
      "We'll keep your info on file for future openings",
    ],
  },
] as const;

export const trustItems = [
  { label: "Licensed GC", detail: "Alabama general contractor" },
  { label: "Fully insured", detail: "Liability & workers comp" },
  { label: "Statewide", detail: "Residential & commercial" },
  { label: "Free estimates", detail: "Clear written bids" },
] as const;

type WithImage = { image: ImageAsset };

export const audiences: (WithImage & {
  title: string;
  description: string;
})[] = [
  {
    title: "Homeowners",
    description:
      "Custom homes, additions, kitchens, baths, and whole-home remodels with one contractor accountable for the entire job.",
    image: {
      local: publicAsset("/images/audiences/homeowners.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      alt: "Custom Alabama home",
    },
  },
  {
    title: "Business owners",
    description:
      "Retail, office, and light industrial build-outs managed on schedule so you can open or expand on time.",
    image: {
      local: publicAsset("/images/audiences/commercial.jpg",
      fallback:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      alt: "Commercial interior build-out",
    },
  },
  {
    title: "Developers & investors",
    description:
      "Reliable GC partner for multi-unit or commercial scopes — coordinated trades, permitting, and site supervision.",
    image: {
      local: publicAsset("/images/audiences/developers.jpg",
      fallback:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Multi-story commercial project",
    },
  },
];

export const processSteps: (WithImage & {
  step: string;
  title: string;
  description: string;
})[] = [
  {
    step: "01",
    title: "Tell us about your project",
    description:
      "Call, email, or use the form below. Share your city, timeline, and what you want built or renovated.",
    image: {
      local: publicAsset("/images/process/consult.jpg",
      fallback:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      alt: "Planning a construction project",
    },
  },
  {
    step: "02",
    title: "Site visit & written estimate",
    description:
      "We walk the property, answer your questions, and deliver a straightforward bid — no surprise line items.",
    image: {
      local: publicAsset("/images/process/estimate.jpg",
      fallback:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      alt: "Site walkthrough and measurement",
    },
  },
  {
    step: "03",
    title: "Build with one point of contact",
    description:
      "Sam oversees scheduling, subs, inspections, and updates until your project passes final walkthrough.",
    image: {
      local: publicAsset("/images/process/build.jpg",
      fallback:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      alt: "Active construction with crew on site",
    },
  },
];

export const services: (WithImage & {
  title: string;
  description: string;
  icon: string;
})[] = [
  {
    title: "General contracting",
    description:
      "Full oversight — bidding, permits, scheduling, and daily site management from mobilization to closeout.",
    icon: "clipboard",
    image: {
      local: publicAsset("/images/services/general-contracting.jpg",
      fallback:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
      alt: "General contractor overseeing a build",
    },
  },
  {
    title: "Residential construction",
    description:
      "Custom homes, additions, and major remodels built to Alabama code with clear communication throughout.",
    icon: "building",
    image: {
      local: publicAsset("/images/services/residential.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
      alt: "Residential home under construction",
    },
  },
  {
    title: "Commercial projects",
    description:
      "Tenant improvements and build-outs delivered on schedule with minimal disruption to your operations.",
    icon: "briefcase",
    image: {
      local: publicAsset("/images/services/commercial.jpg",
      fallback:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Commercial construction project",
    },
  },
  {
    title: "Renovations & repairs",
    description:
      "Kitchens, baths, structural work, and insurance-related repairs handled by one accountable team.",
    icon: "hammer",
    image: {
      local: publicAsset("/images/services/renovations.jpg",
      fallback:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Kitchen renovation in progress",
    },
  },
];

export const whyChoose = [
  {
    title: "One call, one contractor",
    description: "No juggling subs yourself. We coordinate every trade and inspection.",
  },
  {
    title: "Honest timelines",
    description: "You get a realistic schedule up front — and updates when anything shifts.",
  },
  {
    title: "Local Alabama expertise",
    description: "We know state codes, weather, and what it takes to build right here.",
  },
  {
    title: "Written bids you can trust",
    description: "Scope and pricing spelled out clearly before work begins.",
  },
] as const;

export const projects = [
  {
    title: "Lakefront custom home",
    category: "Residential",
    location: "Central Alabama",
    year: "2025",
    image: {
      local: publicAsset("/images/projects/home-lakefront.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
      alt: "Custom lakefront home exterior",
    },
  },
  {
    title: "Retail build-out",
    category: "Commercial",
    location: "Birmingham area",
    year: "2024",
    image: {
      local: publicAsset("/images/projects/retail-buildout.jpg",
      fallback:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      alt: "Retail space build-out",
    },
  },
  {
    title: "Whole-home renovation",
    category: "Remodel",
    location: "Huntsville area",
    year: "2024",
    image: {
      local: publicAsset("/images/projects/whole-home.jpg",
      fallback:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "Renovated kitchen and living space",
    },
  },
  {
    title: "Office tenant improvement",
    category: "Commercial",
    location: "Montgomery area",
    year: "2023",
    image: {
      local: publicAsset("/images/projects/office-ti.jpg",
      fallback:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      alt: "Modern office interior",
    },
  },
  {
    title: "Addition & outdoor living",
    category: "Residential",
    location: "Mobile area",
    year: "2023",
    image: {
      local: publicAsset("/images/projects/addition.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
      alt: "Home addition with covered patio",
    },
  },
  {
    title: "Storm damage restoration",
    category: "Repair",
    location: "Statewide",
    year: "2024",
    image: {
      local: publicAsset("/images/projects/restoration.jpg",
      fallback:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
      alt: "Structural repair and restoration",
    },
  },
] as const;

export const testimonials = [
  {
    quote:
      "Sam kept us updated every week. The bid matched the final invoice — no surprises. Our addition was done before football season like he promised.",
    name: "Jennifer M.",
    role: "Homeowner",
    location: "Birmingham, AL",
    image: {
      local: publicAsset("/images/testimonials/client-1.jpg",
      fallback:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      alt: "SPCG client",
    },
  },
  {
    quote:
      "We needed a retail space opened on a hard date. SPCG coordinated trades, passed inspection, and we were stocking shelves on schedule.",
    name: "David R.",
    role: "Business owner",
    location: "Huntsville, AL",
    image: {
      local: publicAsset("/images/testimonials/client-2.jpg",
      fallback:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      alt: "SPCG commercial client",
    },
  },
] as const;

export const faqs = [
  {
    question: "What areas of Alabama do you serve?",
    answer:
      "We take projects statewide. Share your city when you contact us and we'll confirm availability and schedule a site visit.",
  },
  {
    question: "How do I get an estimate?",
    answer:
      "Call us, email plans or photos, or submit the contact form. We'll set up a walkthrough and send a written bid, usually within a few business days depending on scope.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. SP Construction Group operates as a licensed Alabama general contractor with liability and workers compensation coverage. License number will be listed on the site once finalized.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Absolutely. We manage permitting, coordinate inspections, and keep your project compliant with local and state requirements.",
  },
  {
    question: "What size projects do you take on?",
    answer:
      "From kitchen and bath remodels to ground-up homes and commercial build-outs. If you're unsure whether your project fits, reach out — we'll tell you honestly.",
  },
  {
    question: "How soon can you start?",
    answer:
      "Start dates depend on current backlog and scope. We'll give you a realistic timeline during the estimate — never a vague 'we'll get to it eventually.'",
  },
] as const;
