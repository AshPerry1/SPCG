import type { Metadata } from "next";
import { AboutSam } from "@/components/AboutSam";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About ${site.owner}`,
  description: `Meet ${site.owner}, founder and general contractor at ${site.name}. Licensed Alabama GC focused on honest bids, clear communication, and quality builds statewide.`,
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main" className="flex-1 pb-4 sm:pb-0">
        <AboutSam />
      </main>
    </SiteShell>
  );
}
