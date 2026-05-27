"use client";

import { useCallback, useEffect, useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { openRoles, site } from "@/lib/site";

const inputClass = "field-input";

export function Careers() {
  const [selectedRole, setSelectedRole] = useState<string>(openRoles[0].id);

  const scrollToApply = useCallback((roleId: string) => {
    setSelectedRole(roleId);
    window.location.hash = "careers-apply";
    document.getElementById("careers-apply")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/^#careers-apply(?:-(.+))?$/);
    if (match?.[1]) {
      const role = openRoles.find((r) => r.id === match[1]);
      if (role) setSelectedRole(role.id);
    }
  }, []);

  return (
    <Section id="careers" variant="surface">
      <SectionHeader
        eyebrow="Careers"
        title="Build your career with SPCG."
        description="Growing across Alabama — estimating, accounting, project leadership, and skilled field roles."
        align="center"
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {openRoles.map((role, i) => (
          <Reveal key={role.id} delay={i * 40}>
            <li className="surface-card flex h-full flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-foreground">{role.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {role.type}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{role.location}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {role.summary}
              </p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-foreground">
                    <span className="text-brand" aria-hidden>
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => scrollToApply(role.id)}
                className="mt-6 min-h-11 w-full rounded-full bg-brand text-sm font-semibold text-white transition-colors hover:bg-brand-light sm:w-auto sm:px-6"
              >
                Apply for this role
              </button>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-14">
        <div
          id="careers-apply"
          className="scroll-mt-24 rounded-2xl bg-background p-6 ring-1 ring-border sm:p-8 lg:grid lg:grid-cols-5 lg:gap-10"
        >
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Apply now
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Submit the form below and we&apos;ll follow up within a few business days.
              You can also email a resume directly to{" "}
              <a
                href={`mailto:${site.careersEmail}`}
                className="font-medium text-brand hover:underline"
              >
                {site.careersEmail}
              </a>
              .
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>✓ Alabama-based or willing to work statewide</li>
              <li>✓ Construction industry experience preferred for most roles</li>
              <li>✓ Equal opportunity employer</li>
            </ul>
          </div>

          <form
            className="mt-8 lg:col-span-3 lg:mt-0"
            action="#"
            method="post"
            aria-label="Job application form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Full name *
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your name"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Phone *
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="(555) 000-0000"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Email *
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Role applying for *
                </span>
                <select
                  name="role"
                  required
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  {openRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  City / state *
                </span>
                <input
                  type="text"
                  name="location"
                  required
                  className={inputClass}
                  placeholder="Birmingham, AL"
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Years of experience
                </span>
                <select name="experience" className={`${inputClass} appearance-none`} defaultValue="">
                  <option value="">Select…</option>
                  <option value="0-2">0–2 years</option>
                  <option value="3-5">3–5 years</option>
                  <option value="6-10">6–10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Resume link
                </span>
                <input
                  type="url"
                  name="resume"
                  className={inputClass}
                  placeholder="LinkedIn, Google Drive, or portfolio URL"
                />
                <span className="mt-1.5 block text-xs text-muted-light">
                  Or attach a PDF when you email {site.careersEmail}
                </span>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-foreground">
                  Why SPCG? *
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-light focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="Brief background, relevant skills, and when you could start…"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-white transition-colors hover:bg-brand-light sm:w-auto"
            >
              Submit application
            </button>
            <p className="mt-4 text-xs leading-relaxed text-muted-light">
              Form preview only — connect to Formspree, Google Forms, or email when
              ready. Applications can go to {site.careersEmail}.
            </p>
          </form>
        </div>
      </Reveal>
    </Section>
  );
}
