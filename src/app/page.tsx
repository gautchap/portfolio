import { Stars } from "@/components/stars";
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import HeroImage from "@/components/hero-image";
import HeroContent from "@/components/hero-content";

export default function Home() {
  return (
    <>
      <Stars className="absolute z-[-1] h-full w-full" />
      <main className="pb-16">
        <HeroSection image={<HeroImage />}>
          <HeroContent />
        </HeroSection>
        <AboutSection>
          <h2 className="font-bold text-3xl leading-none tracking-tight">
            About Me
          </h2>
          <p>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <span>Skills</span>
          <ul>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>Next.js</li>
            <li>React</li>
          </ul>
        </AboutSection>
      </main>
    </>
  );
}
