import Image from "next/image";
import { CodeXml, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

interface ProjectCardProps {
  title: string;
  type?: string;
  imgSrc: string;
  description: string;
  techs: string[];
  sourceCodeLink?: string;
  liveDemoLink?: string;
}

function TechTag({ tech }: { tech: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-neutral-200 px-2.5 py-1 text-sm font-semibold text-neutral-600 hover:bg-neutral-200/70 dark:bg-cyan-700/40 dark:text-slate-300 dark:hover:bg-cyan-900">
      # {tech}
    </div>
  );
}

export default function ProjectCard({
  project,
}: {
  project: ProjectCardProps;
}) {
  return (
    <Card className="m-auto w-[90%] bg-gray-100/30 dark:bg-slate-700/40 md:m-0 md:w-full lg:max-w-[480px]">
      <CardHeader className="pb-3">
        <CardDescription className="text-sm text-slate-500">
          {project.type}
        </CardDescription>
        <div className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>

          <div className="flex items-center gap-1">
            {project.sourceCodeLink && (
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full p-5"
                >
                  <CodeXml />
                </Button>
              </a>
            )}
            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full p-5"
                >
                  <Eye />
                </Button>
              </a>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col md:flex-row lg:flex-col">
        <Image
          src={project.imgSrc}
          alt={project.title}
          width={768}
          height={512}
          className="md:h-[120px] md:w-[180px] lg:h-auto lg:w-full"
        />

        <div className="flex flex-wrap items-center gap-3 pt-4 md:pl-6 md:pt-1 lg:gap-4 lg:px-2 lg:pt-4">
          <p>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
