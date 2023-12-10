import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project } from "@/data/projects";
import Image from "next/image";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={project.url} target="_blank" className="inline-flex relative w-[320px] h-[280px]">
            <div className="opacity-1 hover:opacity-20 transition-opacity duration-300">
                <Image
                    priority
                    width={640}
                    height={360}
                    alt={project.name}
                    className="block dark:hidden w-[320px] min-h-[280px] h-auto absolute rounded-xl aspect-video  hover:blur-sm transition duration-300 transform-gpu"
                    src={project.img.light}
                />
                <Image
                    priority
                    width={640}
                    height={360}
                    alt={project.name}
                    className="hidden dark:block w-[320px] min-h-[280px] h-auto absolute rounded-xl aspect-video  hover:blur-sm transition duration-300 transform-gpu"
                    src={project.img.dark}
                />
            </div>
            <Card className="h-full w-full bg-black text-white">
                <CardHeader>
                    <CardTitle>&gt;_ {project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-white">{project.description}</CardDescription>
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
