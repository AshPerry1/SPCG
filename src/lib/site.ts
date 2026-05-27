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
  serviceArea: "Serving all of Alabama",
  hours: "Mon–Fri, 7:00 AM – 5:00 PM",
  license: "Alabama General Contractor — license # coming soon",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#projects", label: "Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const trustItems = [
  { label: "Licensed GC", detail: "Alabama general contractor" },
  { label: "Fully insured", detail: "Liability & workers comp" },
  { label: "Statewide", detail: "Residential & commercial" },
  { label: "Free estimates", detail: "Clear written bids" },
] as const;

export const audiences = [
  {
    title: "Homeowners",
    description:
      "Custom homes, additions, kitchens, baths, and whole-home remodels with one contractor accountable for the entire job.",
  },
  {
    title: "Business owners",
    description:
      "Retail, office, and light industrial build-outs managed on schedule so you can open or expand on time.",
  },
  {
    title: "Developers & investors",
    description:
      "Reliable GC partner for multi-unit or commercial scopes — coordinated trades, permitting, and site supervision.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Tell us about your project",
    description:
      "Call, email, or use the form below. Share your city, timeline, and what you want built or renovated.",
  },
  {
    step: "02",
    title: "Site visit & written estimate",
    description:
      "We walk the property, answer your questions, and deliver a straightforward bid — no surprise line items.",
  },
  {
    step: "03",
    title: "Build with one point of contact",
    description:
      "Sam oversees scheduling, subs, inspections, and updates until your project passes final walkthrough.",
  },
] as const;

export const services = [
  {
    title: "General contracting",
    description:
      "Full oversight — bidding, permits, scheduling, and daily site management from mobilization to closeout.",
    icon: "clipboard",
  },
  {
    title: "Residential construction",
    description:
      "Custom homes, additions, and major remodels built to Alabama code with clear communication throughout.",
    icon: "building",
  },
  {
    title: "Commercial projects",
    description:
      "Tenant improvements and build-outs delivered on schedule with minimal disruption to your operations.",
    icon: "briefcase",
  },
  {
    title: "Renovations & repairs",
    description:
      "Kitchens, baths, structural work, and insurance-related repairs handled by one accountable team.",
    icon: "hammer",
  },
] as const;

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
    title: "Custom home build",
    category: "Residential",
    location: "Alabama",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6162a9a2c9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial build-out",
    category: "Commercial",
    location: "Alabama",
    image:
      "https://images.unsplash.com/photo-1486406146928-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Whole-home renovation",
    category: "Remodel",
    location: "Alabama",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d4046?auto=format&fit=crop&w=1200&q=80",
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
