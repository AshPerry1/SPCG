import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { site, trustItems } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="inline-flex items-center rounded-full bg-brand/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              {site.serviceArea}
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Build with a general contractor you can actually reach.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              {site.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Get a free estimate
              </Button>
              <Button
                href={site.phoneHref}
                variant="secondary"
                size="lg"
                external
                className="w-full sm:w-auto"
              >
                Call {site.phone}
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-light">
              Typical response within one business day.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface shadow-xl ring-1 ring-border/60 sm:aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
                alt="SP Construction Group crew at an Alabama job site"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-2xl bg-surface-elevated p-4 shadow-lg ring-1 ring-border sm:-bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="text-sm font-semibold text-foreground">
                Now accepting new projects
              </p>
              <p className="mt-1 text-sm text-muted">
                Residential & commercial · {site.owner}, GC
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 border-t border-border pt-10 sm:grid-cols-4 sm:gap-4">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="rounded-2xl bg-surface px-4 py-4 text-center sm:px-5 sm:py-5 sm:text-left"
            >
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
