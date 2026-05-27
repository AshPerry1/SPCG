"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="hidden border-b border-border bg-brand-dark text-white sm:block">
        <div className="site-container flex h-9 items-center justify-between text-xs font-medium tracking-wide">
          <span className="text-white/65">{site.serviceArea}</span>
          <a href={site.phoneHref} className="text-white/90 transition-colors hover:text-accent">
            {site.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-border bg-background/96 shadow-[0_8px_30px_-12px_rgba(15,46,36,0.12)] backdrop-blur-lg"
            : "border-transparent bg-background"
        }`}
      >
        <div className="site-container flex items-center justify-between gap-4 py-4 lg:py-5">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-85"
            onClick={() => setOpen(false)}
          >
            <Logo size="sm" />
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-brand after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button href="/#contact" variant="primary" size="md">
              Request estimate
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border bg-surface-elevated lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="border-b border-border px-6 py-5">
            <Logo size="sm" />
          </div>
          <ul className="flex-1 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center border-b border-border/60 px-2 text-lg font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3 border-t border-border p-5">
            <Button href={site.phoneHref} variant="secondary" size="lg" external className="w-full">
              Call {site.phone}
            </Button>
            <Button href="/#contact" variant="primary" size="lg" className="w-full">
              Request estimate
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
