import { Section, SectionHeader } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Contact"
            title="Request an estimate."
            description="Call for the fastest response, or use email and the form below — we reply within one business day."
            align="left"
          />

          <div className="mt-8 space-y-4">
            <a
              href={site.phoneHref}
              className="flex min-h-[72px] items-center gap-4 rounded-sm bg-brand px-5 py-4 text-white transition-colors hover:bg-brand-light sm:px-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-white/70">
                  Call or text
                </span>
                <span className="text-lg font-semibold">{site.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex min-h-[72px] items-center gap-4 rounded-sm border border-border bg-surface-elevated px-5 py-4 transition-colors hover:border-brand/30 sm:px-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="text-base font-semibold text-foreground break-all">
                  {site.email}
                </span>
              </span>
            </a>

            <dl className="border border-border bg-surface p-5 text-sm sm:p-6">
              <div className="flex justify-between gap-4 border-b border-border py-3">
                <dt className="text-muted">Service area</dt>
                <dd className="font-medium text-foreground text-right">
                  {site.serviceArea}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-3">
                <dt className="text-muted">Hours</dt>
                <dd className="font-medium text-foreground text-right">{site.hours}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted">License</dt>
                <dd className="max-w-[60%] font-medium text-foreground text-right text-xs sm:text-sm">
                  {site.license}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          className="rounded-2xl bg-surface p-6 ring-1 ring-border sm:p-8 lg:col-span-3"
          action="#"
          method="post"
          aria-label="Project inquiry form"
        >
          <p className="text-lg font-semibold text-foreground">Project inquiry</p>
          <p className="mt-1 text-sm text-muted">
            Fields marked with * are required.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Name *
              </span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-light transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                placeholder="Your full name"
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
                className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-light transition:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
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
                className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-light focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                placeholder="you@email.com"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-foreground">
                City in Alabama *
              </span>
              <input
                type="text"
                name="city"
                required
                className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-light focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                placeholder="Birmingham, Mobile…"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Project type *
              </span>
              <select
                name="projectType"
                required
                className="min-h-12 w-full appearance-none rounded-xl border border-border bg-background px-4 text-base text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
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
                rows={4}
                required
                className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-light focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                placeholder="What are you building? Timeline? Budget range if you have one…"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-white transition-colors hover:bg-brand-light active:bg-brand-dark sm:w-auto"
          >
            Submit inquiry
          </button>
          <p className="mt-4 text-xs leading-relaxed text-muted-light">
            Form preview only — connect to Formspree or email when ready.
          </p>
        </form>
      </div>
    </Section>
  );
}
