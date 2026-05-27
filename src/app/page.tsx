import { About } from "@/components/About";
import { Audiences } from "@/components/Audiences";
import { Careers } from "@/components/Careers";
import { Contact } from "@/components/Contact";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { OnTheJob } from "@/components/OnTheJob";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { SiteShell } from "@/components/SiteShell";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <SiteShell>
      <main id="main" className="flex-1 pb-4 sm:pb-0">
        <Hero />
        <OnTheJob />
        <Audiences />
        <PhotoGallery />
        <Process />
        <Services />
        <WhyChoose />
        <About />
        <Projects />
        <Testimonials />
        <FAQ />
        <Careers />
        <CTABand />
        <Contact />
      </main>
    </SiteShell>
  );
}
