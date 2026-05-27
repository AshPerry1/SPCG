import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-dark text-white pb-24 sm:pb-16">
      <div className="site-container py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Logo variant="light" size="sm" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/72">
              {site.tagline} {site.serviceArea}. Residential and commercial construction
              managed by {site.owner} — licensed general contractor.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                Accepting new projects statewide
              </span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <div>
              <p className="section-eyebrow section-eyebrow-light">Navigate</p>
              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/88 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-eyebrow section-eyebrow-light">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href={site.phoneHref} className="text-lg font-semibold text-white hover:text-accent">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-white/85 hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-white/60">{site.hours}</li>
                <li className="border-t border-white/12 pt-4 text-xs leading-relaxed text-white/50">
                  {site.license}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/12 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-white/40">Built in Alabama · Serving statewide</p>
        </div>
      </div>
    </footer>
  );
}
