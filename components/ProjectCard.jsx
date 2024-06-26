import React, { useRef } from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { GroupIcon, Link2Icon } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            alt="project image"
            width={740}
            height={300}
            className="absolute top-0 shadow-2xl hover:scale-110 transition-all"
          />

          {/* link button */}
          <div className="flex gap-4 ">
            <Link
              href={project.link}
              className="bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:opacity-50 group-hover:scale-100 group:opacity-50 duration-200 transition-all"
            >
              <Link2Icon />
            </Link>
            <Link
              href={project.link}
              className="bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:opacity-50 group-hover:scale-100 group:opacity-50 duration-200 transition-all"
            >
              <GroupIcon />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h-4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg mt-3">
          {project.description}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
