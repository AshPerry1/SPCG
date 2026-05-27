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
        className={`sticky top-0 z-50 transition-[box-shadow,background] duration-300 ${
          scrolled
            ? "border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-background"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="shrink-0 rounded-lg transition-opacity hover:opacity-85"
            onClick={() => setOpen(false)}
          >
            <Logo size="sm" />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Button
              href={site.phoneHref}
              variant="ghost"
              size="md"
              external
              className="hidden md:inline-flex"
            >
              {site.phone}
            </Button>
            <Button href="/#contact" variant="primary" size="md">
              Get a free estimate
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg
              className="h-5 w-5 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-background px-5 pb-8 pt-20 shadow-2xl transition-transform duration-300 ease-out sm:max-w-xs ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center rounded-xl px-4 text-lg font-medium text-foreground transition-colors hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
            <Button
              href={site.phoneHref}
              variant="secondary"
              size="lg"
              external
              className="w-full"
            >
              Call {site.phone}
            </Button>
            <Button
              href="/#contact"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Get a free estimate
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
