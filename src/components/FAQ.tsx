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
        title="Questions we hear often."
        description="Homeowners and business owners researching contractors in Alabama."
        align="center"
      />
      <ul className="mx-auto mt-14 max-w-3xl border border-border bg-surface-elevated">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={faq.question} className="border-b border-border last:border-b-0">
              <button
                type="button"
                className="flex min-h-14 w-full items-center justify-between gap-6 px-5 py-4 text-left sm:px-7 sm:py-5"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-medium text-foreground sm:text-lg">{faq.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-brand/8 font-display text-lg text-brand transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-7 sm:pb-6 sm:text-base">
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
