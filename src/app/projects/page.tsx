import ProjectsSection from "@/components/projects-section";

export default function Page() {
  return (
    <ProjectsSection>
      <h2 className="font-bold text-3xl leading-none tracking-tight">
        Projects
      </h2>
      <p>
        I am a full stack web developer with a passion for creating interactive
        and responsive web applications. I have experience working with
        JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML,
        CSS, and Git. I am a quick learner and I am always looking to expand my
        knowledge and skill set. I am a team player and I am excited to work
        with others to create amazing applications.
      </p>
      <span>Skills</span>
      <ul>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>Next.js</li>
        <li>React</li>
      </ul>
    </ProjectsSection>
  );
}
