import { Section, SectionHeader } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Contact"
            title="Request an estimate."
            description="Call for the fastest response, or send a message below. We reply within one business day."
            align="left"
          />

          <div className="mt-10 space-y-3">
            <a
              href={site.phoneHref}
              className="group flex min-h-[4.5rem] items-center gap-4 rounded-sm bg-brand px-5 py-4 text-white transition-colors hover:bg-brand-light sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-white/12">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-white/65">
                  Call or text
                </span>
                <span className="text-lg font-semibold">{site.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group flex min-h-[4.5rem] items-center gap-4 rounded-sm border border-border bg-surface-elevated px-5 py-4 transition-colors hover:border-brand/25 sm:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand/8 text-brand">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-widest text-muted">
                  Email
                </span>
                <span className="break-all text-base font-semibold text-foreground">
                  {site.email}
                </span>
              </span>
            </a>

            <dl className="surface-card divide-y divide-border p-0 text-sm">
              <div className="flex justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Service area</dt>
                <dd className="text-right font-medium text-foreground">{site.serviceArea}</dd>
              </div>
              <div className="flex justify-between gap-4 px-5 py-4">
                <dt className="text-muted">Hours</dt>
                <dd className="text-right font-medium text-foreground">{site.hours}</dd>
              </div>
              <div className="flex justify-between gap-4 px-5 py-4">
                <dt className="text-muted">License</dt>
                <dd className="max-w-[58%] text-right text-xs font-medium text-foreground sm:text-sm">
                  {site.license}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          className="surface-card-elevated p-6 sm:p-9 lg:col-span-3"
          action="#"
          method="post"
          aria-label="Project inquiry form"
        >
          <p className="font-display text-xl font-bold text-foreground">Project inquiry</p>
          <p className="mt-2 text-sm text-muted">
            Tell us about your build. Required fields are marked with *.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-foreground">Name *</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="field-input"
                placeholder="Your full name"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-foreground">Phone *</span>
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                className="field-input"
                placeholder="(555) 000-0000"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-foreground">Email *</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="field-input"
                placeholder="you@email.com"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-foreground">City in Alabama *</span>
              <input
                type="text"
                name="city"
                required
                className="field-input"
                placeholder="Birmingham, Mobile…"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-foreground">Project type *</span>
              <select
                name="projectType"
                required
                className="field-input"
                defaultValue=""
              >
                <option value="" disabled>
                  Select…
                </option>
                <option value="residential-new">New home build</option>
                <option value="residential-remodel">Home remodel</option>
                <option value="commercial">Commercial / build-out</option>
                <option value="repair">Repair / insurance</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Tell us about your project *
              </span>
              <textarea
                name="message"
                rows={5}
                required
                className="field-input resize-y py-3"
                placeholder="Scope, timeline, and anything else we should know before the site visit…"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 flex min-h-12 w-full items-center justify-center rounded-sm bg-brand px-8 text-[0.9375rem] font-semibold tracking-wide text-white transition-colors hover:bg-brand-light active:bg-brand-dark sm:w-auto"
          >
            Submit inquiry
          </button>
        </form>
      </div>
    </Section>
  );
}
