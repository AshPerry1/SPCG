"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions we hear often."
        description="Homeowners and business owners researching contractors in Alabama."
        align="center"
      />
      <ul className="mx-auto mt-16 max-w-3xl border-y border-border">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={faq.question} className="border-b border-border last:border-b-0">
              <button
                type="button"
                className="flex min-h-[60px] w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-medium text-foreground sm:text-lg">{faq.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border border-border text-lg text-brand transition-transform duration-200 ${isOpen ? "rotate-45 bg-brand text-white border-brand" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-base leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
