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
      className="relative my-4 inline-flex aspect-video h-[30em] max-w-[320px] flex-wrap rounded-xl border md:m-0 md:h-auto md:max-w-md md:border-none"
    >
      <div className="opacity-1 bg-gradient-to-b from-transparent from-55% to-background transition-opacity duration-300 hover:opacity-20">
        <Image
          width={500}
          alt={project.name}
          className="relative z-[-1] block aspect-video transform-gpu rounded-xl rounded-b-none transition duration-300 hover:blur-sm dark:hidden md:absolute md:z-0 md:rounded-b-xl"
          src={project.img.light}
        />
        <Image
          width={500}
          alt={project.name}
          className="relative z-[-1] hidden aspect-video transform-gpu rounded-xl rounded-b-none transition duration-300 hover:blur-sm dark:block md:absolute md:z-0 md:rounded-b-xl"
          src={project.img.dark}
        />
      </div>
      <Card className="border-none md:h-full md:bg-black md:text-white">
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
