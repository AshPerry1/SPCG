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

          <div className="mt-10 space-y-4">
            <a
              href={site.phoneHref}
              className="group flex min-h-[76px] items-center gap-5 bg-brand px-6 py-5 text-white transition-colors hover:bg-brand-light"
            >
              <span className="flex h-12 w-12 items-center justify-center bg-white/12">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-white/65">
                  Call or text
                </span>
                <span className="text-xl font-semibold">{site.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex min-h-[76px] items-center gap-5 border border-border bg-surface-elevated px-6 py-5 transition-colors hover:border-brand/35"
            >
              <span className="flex h-12 w-12 items-center justify-center bg-brand/8 text-brand">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
                  Email
                </span>
                <span className="text-base font-semibold text-foreground break-all">
                  {site.email}
                </span>
              </span>
            </a>

            <dl className="border border-border bg-surface p-6 text-sm">
              <div className="flex justify-between gap-4 border-b border-border py-3.5">
                <dt className="text-muted">Service area</dt>
                <dd className="text-right font-medium text-foreground">{site.serviceArea}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border py-3.5">
                <dt className="text-muted">Hours</dt>
                <dd className="text-right font-medium text-foreground">{site.hours}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3.5">
                <dt className="text-muted">License</dt>
                <dd className="max-w-[58%] text-right text-xs font-medium text-foreground sm:text-sm">
                  {site.license}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          className="border border-border bg-surface-elevated p-7 sm:p-10 lg:col-span-3"
          action="#"
          method="post"
          aria-label="Project inquiry form"
        >
          <p className="display-headline text-2xl text-foreground">Project inquiry</p>
          <p className="mt-2 text-sm text-muted">Fields marked * are required.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-foreground">Name *</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="min-h-12 w-full border border-border bg-background px-4 text-base transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                placeholder="Your full name"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-foreground">Phone *</span>
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                className="min-h-12 w-full border border-border bg-background px-4 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                placeholder="(555) 000-0000"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-foreground">Email *</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="min-h-12 w-full border border-border bg-background px-4 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                placeholder="you@email.com"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-foreground">
                City in Alabama *
              </span>
              <input
                type="text"
                name="city"
                required
                className="min-h-12 w-full border border-border bg-background px-4 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                placeholder="Birmingham, Mobile…"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-foreground">
                Project type *
              </span>
              <select
                name="projectType"
                required
                className="min-h-12 w-full appearance-none border border-border bg-background px-4 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
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
              <span className="mb-2 block text-sm font-semibold text-foreground">
                Tell us about your project *
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full resize-y border border-border bg-background px-4 py-3 text-base focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                placeholder="What are you building? Timeline? Budget range if you have one…"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 flex min-h-14 w-full items-center justify-center bg-brand px-8 text-base font-semibold tracking-wide text-white transition-colors hover:bg-brand-light sm:w-auto sm:min-w-[220px]"
          >
            Submit inquiry
          </button>
        </form>
      </div>
    </Section>
  );
}
