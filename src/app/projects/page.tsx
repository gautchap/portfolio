import ProjectsSection from "@/components/projects-section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <ProjectsSection>
      <h1 className="font-bold text-3xl leading-none tracking-tight mb-8">
        Projects
      </h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </ProjectsSection>
  );
}
