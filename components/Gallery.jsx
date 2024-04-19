import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/gallery/1.png",
    category: "Portraits",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",

    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/2.png",
    category: "models",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",

    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/3.png",

    category: "Places",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",

    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/4.png",

    category: "Corporate",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",
    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/5.png",

    category: "fashion",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",

    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/6.png",

    category: "places",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",
    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/7.png",

    category: "Corporate",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",
    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/8.png",

    category: "fashion",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",
    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/9.png",

    category: "models",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",
    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/10.png",

    category: "portraits",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",
    link: "/",
    codePen: "/",
  },
  {
    image: "/gallery/11.png",

    category: "models",
    name: "Feb 11, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi asperiores unde maiores ullam commodi natus alias iste vero et.",
    link: "/",
    codePen: "/",
  },
];
const Gallery = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Gallery
        </h2>
        <div className="text-lg xl:mt-8 grid grid-cols lg:grid-cols-3 gap-4">
          {projectData.map((project) => {
            return <ProjectCard project={project} key={project.category} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
