import { Stars } from "@/components/stars";
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import AboutContent from "@/components/about-content";
import HeroImage from "@/components/hero-image";
import ProjectsContent from "@/components/projects-content";
import ContactContent from "@/components/contact-content";

export default function Home() {
  return (
    <>
      <Stars className="absolute z-[-1] h-full w-full " />
      <main className="pb-16">
        <HeroSection>
          <HeroImage />
        </HeroSection>
        <AboutSection>
          <AboutContent />
        </AboutSection>
        <ProjectsSection>
          <ProjectsContent />
        </ProjectsSection>
        <ContactSection>
          <ContactContent />
        </ContactSection>
      </main>
    </>
  );
}
