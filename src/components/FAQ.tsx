"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" variant="surface">
      <SectionHeader
        eyebrow="FAQ"
        title="Common questions."
        description="Quick answers for homeowners and business owners researching contractors in Alabama."
        align="center"
      />
      <ul className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl bg-surface-elevated ring-1 ring-border">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={faq.question}>
              <button
                type="button"
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-semibold text-foreground sm:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
