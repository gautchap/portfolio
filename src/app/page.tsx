import { Stars } from "@/components/stars";
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import HeroImage from "@/components/hero-image";
import HeroContent from "@/components/hero-content";
import AboutContent from "@/components/about-content";

export default function Home() {
  return (
    <>
      <Stars className="absolute z-[-1] h-full w-full transform-gpu" />
      <main className="pb-16 md:pb-0">
        <HeroSection image={<HeroImage />}>
          <HeroContent />
        </HeroSection>
        <AboutSection>
          <AboutContent />
          <div className="md:w-1/2">
            <p>
              I&apos;m a full stack web developer with a passion for creating
              interactive and responsive web applications. I gained experience
              with TypeScript, React, Next.js during a year&apos;s work-study in
              full-stack development. My enthusiasm for lifelong learning is
              reflected in my ability to adapt quickly to new technologies.
            </p>
          </div>
        </AboutSection>
      </main>
    </>
  );
}
