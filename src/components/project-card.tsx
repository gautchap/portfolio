import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project } from "@/data/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.url}
      target="_blank"
      className="inline-flex relative h-[30em] md:h-auto max-w-[320px] md:max-w-md aspect-video flex-wrap my-4 md:m-0 border rounded-xl md:border-none"
    >
      <div className="opacity-1 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-b from-55% from-transparent to-background">
        <Image
          alt={project.name}
          className="z-[-1] relative block dark:hidden md:z-0 md:absolute rounded-b-none md:rounded-b-xl rounded-xl aspect-video hover:blur-sm transition duration-300 transform-gpu"
          src={project.img.light}
        />
        <Image
          alt={project.name}
          className="z-[-1] relative hidden dark:block md:z-0 md:absolute rounded-b-none md:rounded-b-xl rounded-xl aspect-video hover:blur-sm transition duration-300 transform-gpu"
          src={project.img.dark}
        />
      </div>
      <Card className="md:bg-black md:text-white border-none md:h-full">
        <CardHeader>
          <CardTitle>&gt;_ {project.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="md:text-white">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-wrap gap-1">
          {project.badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
