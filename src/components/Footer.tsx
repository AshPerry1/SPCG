import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-brand-dark text-white pb-24 sm:pb-14">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Logo variant="light" size="sm" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
              {site.tagline} {site.serviceArea}. Residential and commercial
              construction managed by {site.owner}, licensed general contractor.
            </p>
            <p className="mt-6 font-display text-4xl font-bold text-white/15" aria-hidden>
              SPCG
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <p className="section-eyebrow text-white/55">Navigate</p>
              <ul className="mt-5 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/90 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-eyebrow text-white/55">Contact</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href={site.phoneHref}
                    className="font-medium text-white hover:text-white/80"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-white/90 hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-white/65">{site.hours}</li>
                <li className="border-t border-white/15 pt-4 text-xs leading-relaxed text-white/55">
                  {site.license}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Built in Alabama · Serving statewide</p>
        </div>
      </div>
    </footer>
  );
}
