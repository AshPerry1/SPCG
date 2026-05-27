import { About } from "@/components/About";
import { Careers } from "@/components/Careers";
import { Audiences } from "@/components/Audiences";
import { Contact } from "@/components/Contact";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileCTA } from "@/components/MobileCTA";
import { OnTheJob } from "@/components/OnTheJob";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 pb-4 sm:pb-0">
        <Hero />
        <OnTheJob />
        <Audiences />
        <PhotoGallery />
        <Process />
        <Services />
        <About />
        <WhyChoose />
        <Projects />
        <Testimonials />
        <FAQ />
        <Careers />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
