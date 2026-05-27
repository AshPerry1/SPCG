import {
  audiences,
  faqs,
  processSteps,
  services,
  site,
  trustItems,
} from "@/lib/site";

/** Assistant persona — office coordinator, not impersonating Sam on technical bids */
export const assistant = {
  name: "Taylor",
  role: "project coordinator",
  company: site.name,
  greeting: `Hi there — I'm Taylor, ${site.name}'s project coordinator. I can answer questions about how we work, what we build, and how to get a free estimate. If something needs Sam's eyes on it, I'll point you to the right next step.`,
  disclaimer:
    "I only share info from our official site content. For exact pricing or engineering questions, Sam or our team will follow up personally.",
} as const;

export const quickReplies = [
  "How do I get an estimate?",
  "What services do you offer?",
  "Do you serve my area?",
  "Are you licensed & insured?",
] as const;

export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  response: string;
  suggestions?: string[];
};

const serviceList = services
  .map((s) => `• ${s.title}: ${s.description}`)
  .join("\n");

const processList = processSteps
  .map((s) => `${s.step} — ${s.title}: ${s.description}`)
  .join("\n");

const audienceList = audiences
  .map((a) => `• ${a.title}: ${a.description}`)
  .join("\n");

const trustList = trustItems
  .map((t) => `• ${t.label} — ${t.detail}`)
  .join("\n");

/** Curated answers — chatbot must not invent facts outside this list + faqs */
export const knowledgeEntries: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good afternoon"],
    response: `${assistant.greeting}\n\nWhat can I help you with today?`,
    suggestions: [...quickReplies],
  },
  {
    id: "estimate",
    keywords: [
      "estimate",
      "quote",
      "bid",
      "pricing",
      "price",
      "cost",
      "how much",
      "free estimate",
    ],
    response: `Getting an estimate is straightforward:\n\n${processList}\n\nThe fastest way to start is to call ${site.phone}, email ${site.email}, or use the contact form on this page. Share your Alabama city, timeline, and a short description — we typically respond within one business day.`,
    suggestions: ["What should I include?", "Contact form"],
  },
  {
    id: "estimate-prep",
    keywords: ["what should i include", "what info", "prepare", "plans", "photos"],
    response: `Helpful details for your estimate request:\n\n• City / county in Alabama\n• Project type (new build, remodel, commercial, repair)\n• Rough timeline or deadline\n• Photos or plans if you have them\n• Best phone number to reach you\n\n${site.owner} reviews every inquiry personally — you won't get a generic auto-reply.`,
    suggestions: ["Go to contact form"],
  },
  {
    id: "services",
    keywords: [
      "service",
      "services",
      "what do you do",
      "build",
      "construction",
      "remodel",
      "commercial",
      "residential",
    ],
    response: `We offer these services statewide in Alabama:\n\n${serviceList}\n\nNot sure which fits your project? Tell me a bit about what you're planning and I'll point you in the right direction.`,
    suggestions: ["Do you do kitchens?", "Commercial work"],
  },
  {
    id: "residential",
    keywords: [
      "home",
      "house",
      "kitchen",
      "bath",
      "bathroom",
      "addition",
      "remodel",
      "renovation",
      "custom home",
    ],
    response: `Yes — residential work is a core part of what we do: custom homes, additions, kitchens, baths, and whole-home remodels. One general contractor (${site.owner}) coordinates permits, trades, and inspections so you're not juggling subs yourself.\n\n${audiences[0].description}`,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "commercial",
    keywords: [
      "commercial",
      "retail",
      "office",
      "tenant",
      "build-out",
      "buildout",
      "business",
      "store",
    ],
    response: `We handle commercial projects including tenant improvements and build-outs. ${services[2].description}\n\n${audiences[1].description}`,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "area",
    keywords: [
      "area",
      "areas",
      "serve",
      "location",
      "city",
      "birmingham",
      "huntsville",
      "mobile",
      "montgomery",
      "statewide",
      "alabama",
    ],
    response: `${site.serviceArea}. We take residential and commercial projects across the state — share your city when you reach out and we'll confirm scheduling for a site visit.`,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "license",
    keywords: [
      "license",
      "licensed",
      "insured",
      "insurance",
      "bonded",
      "legit",
      "legitimate",
    ],
    response: `${faqs[2].answer}\n\n${trustList}\n\n${site.license}`,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "permits",
    keywords: ["permit", "permits", "inspection", "inspections", "code"],
    response: faqs[3].answer,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "timeline",
    keywords: [
      "start",
      "timeline",
      "schedule",
      "how long",
      "when",
      "soon",
      "backlog",
      "availability",
    ],
    response: faqs[5].answer,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "project-size",
    keywords: ["size", "small", "large", "big", "minimum", "type of project"],
    response: faqs[4].answer,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "process",
    keywords: ["process", "how it works", "steps", "what happens", "next step"],
    response: `Here's how working with ${site.shortName} typically goes:\n\n${processList}`,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "why-us",
    keywords: [
      "why",
      "choose",
      "different",
      "trust",
      "reliable",
      "recommend",
    ],
    response: `Homeowners and businesses choose us because:\n\n${site.description}\n\n• One call, one contractor — we coordinate every trade\n• Honest timelines up front\n• Local Alabama code and weather expertise\n• Written bids before work begins`,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "sam",
    keywords: ["sam", "patel", "owner", "who", "meet", "talk to"],
    response: `${site.owner} is our licensed Alabama general contractor and oversees projects from bid through final walkthrough. For a real conversation about your specific job, call ${site.phone} or submit the contact form — you'll hear back within one business day.`,
    suggestions: ["How do I get an estimate?", `Call ${site.phone}`],
  },
  {
    id: "hours",
    keywords: ["hours", "open", "available", "call", "reach", "contact"],
    response: `You can reach us at ${site.phone} or ${site.email}.\n\nHours: ${site.hours}\n${site.serviceArea}`,
    suggestions: ["How do I get an estimate?"],
  },
  {
    id: "contact-form",
    keywords: ["form", "contact form", "submit", "send message"],
    response: `Scroll to the Contact section or tap below — the form asks for your name, phone, email, Alabama city, project type, and a short description. Required fields are marked with *.\n\nWe'll respond within one business day.`,
    suggestions: ["What should I include?"],
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "appreciate", "helpful"],
    response: `You're welcome — glad I could help. If you're ready to move forward, ${site.owner} and our team are here when you are. Have a great day.`,
  },
];

/** Map page sections → contextual proactive messages */
export const sectionNudges: Record<
  string,
  { message: string; suggestions: string[] }
> = {
  hero: {
    message:
      "Browsing our site? I can help you figure out if we're the right fit for your project — no pressure.",
    suggestions: ["What services do you offer?", "How do I get an estimate?"],
  },
  services: {
    message:
      "Not sure which service matches your job? Tell me what you're planning — I'll keep it simple.",
    suggestions: ["Do you serve my area?", "What services do you offer?"],
  },
  process: {
    message:
      "Want a quick walkthrough of how we work from first call to finished build?",
    suggestions: ["How do I get an estimate?"],
  },
  contact: {
    message:
      "Filling out the form? I can tell you what info helps us quote faster — or you can call anytime.",
    suggestions: ["What should I include?", `Call ${site.phone}`],
  },
  faq: {
    message:
      "Didn't see your question in the FAQ? Ask me here — I stick to what we publish officially.",
    suggestions: ["How do I get an estimate?", "Are you licensed & insured?"],
  },
  projects: {
    message:
      "These are sample project types — ask if your scope is similar to what we take on.",
    suggestions: ["What size projects do you take on?", "How do I get an estimate?"],
  },
  about: {
    message:
      "Want to know more about Sam and how we run jobs? I'm happy to walk you through it.",
    suggestions: ["Who is Sam Patel?", "How do I get an estimate?"],
  },
};

export const engagementConfig = {
  /** Wait before first proactive nudge */
  initialDelayMs: 35_000,
  /** Idle on page (no meaningful activity) */
  idleMs: 55_000,
  /** Time in one section without leaving */
  sectionStuckMs: 75_000,
  maxProactivePerSession: 2,
  minGapBetweenNudgesMs: 120_000,
} as const;

/** Export FAQ as searchable knowledge */
export function getFaqKnowledge(): KnowledgeEntry[] {
  return faqs.map((faq) => ({
    id: `faq-${faq.question.slice(0, 20)}`,
    keywords: faq.question
      .toLowerCase()
      .replace(/[?]/g, "")
      .split(/\s+/)
      .filter((w) => w.length > 3),
    response: faq.answer,
    suggestions: ["How do I get an estimate?"],
  }));
}
