import { site } from "@/lib/site";

/** Edit this file to update Sam's About page copy and credentials. */
export const sam = {
  name: site.owner,
  title: "Founder & General Contractor",
  company: site.name,
  location: "Alabama",
  intro:
    "I started SP Construction Group because owners deserve a general contractor who answers the phone, shows up on site, and stands behind the work — not a faceless company where you're passed between departments.",
  story: [
    "I grew up around people who valued hard work and straight talk. That mindset shapes how we run every project at SPCG — residential, commercial, remodel, or repair. You get clear communication from the first walkthrough through final walkthrough.",
    "As a licensed Alabama general contractor, I personally oversee our jobs: scheduling trades, managing permits and inspections, and making sure the details match what we promised in your written estimate. If something changes, you'll hear it from me — not weeks later.",
    "We're actively building our team and our project list across the state. Whether you're planning a custom home, a tenant build-out, or a major renovation, my goal is simple: deliver quality construction without the chaos people often expect from a build.",
  ],
  credentials: [
    "Licensed Alabama General Contractor",
    "Residential & commercial project experience",
    "Full-service GC — estimates through closeout",
  ],
  values: [
    {
      title: "Show up",
      description:
        "You'll work directly with me and a accountable team — not a revolving cast of strangers.",
    },
    {
      title: "Say what we mean",
      description:
        "Written bids, realistic schedules, and honest updates when conditions change.",
    },
    {
      title: "Build it right",
      description:
        "Code-compliant work, coordinated subs, and punch lists that actually get finished.",
    },
    {
      title: "Respect your investment",
      description:
        "Your home or business isn't a practice run — we treat every job like our reputation depends on it.",
    },
  ],
  focusAreas: [
    "Custom homes & additions",
    "Kitchen, bath & whole-home remodels",
    "Commercial tenant improvements",
    "Insurance & storm-related repairs",
  ],
  quote:
    "Construction should feel organized, not overwhelming. That's the experience we work to deliver on every SPCG project.",
} as const;
