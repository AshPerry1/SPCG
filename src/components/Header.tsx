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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      <header
        className={`sticky top-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
          scrolled
            ? "border-b border-border/80 bg-background/92 shadow-soft backdrop-blur-lg"
            : "border-b border-transparent bg-background"
        }`}
      >
        <div className="container-site flex items-center justify-between gap-4 py-4 lg:py-5">
          <Link
            href="/"
            className="shrink-0 rounded-sm transition-opacity hover:opacity-85"
            onClick={() => setOpen(false)}
          >
            <Logo size="sm" />
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={site.phoneHref}
              className="hidden text-sm font-semibold text-foreground transition-colors hover:text-brand md:inline"
            >
              {site.phone}
            </a>
            <Button href="/#contact" variant="primary" size="md">
              Request estimate
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border bg-surface-elevated lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-5 w-5 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
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
          className={`absolute inset-0 bg-brand-dark/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-full max-w-[min(100%,22rem)] flex-col border-l border-border bg-background shadow-elevated transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo size="sm" />
            <button
              type="button"
              className="min-h-10 min-w-10 rounded-sm text-muted hover:text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-3 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center rounded-sm px-4 text-base font-medium text-foreground transition-colors hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-border p-5">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-light">
              {site.serviceArea}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Button href={site.phoneHref} variant="secondary" size="lg" external className="w-full">
                Call {site.phone}
              </Button>
              <Button href="/#contact" variant="primary" size="lg" className="w-full">
                Request estimate
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
