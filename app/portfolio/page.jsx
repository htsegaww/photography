"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const projectData = [
  {
    image: "/work/3.png",
    category: "portraits",
    name: "Portrait: Macro Allian",
    description: "Shoot Date: 08/01/2024",
    link: "/",
    codepen: "/",
  },

  {
    image: "/work/9.png",
    category: "portraits",
    name: "Portrait: Mark Adam",
    description: "Shoot Date: 11/01/2017",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/2.png",
    category: "Products",
    name: "Product: Cosmetics",
    description: "Shoot Date: 14/01/2018",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/1.png",
    category: "portraits",
    name: "Portrait: Macro Allian",
    description: "Shoot Date: 08/01/2024",
    link: "/",
    codepen: "/",
  },

  {
    image: "/work/8.png",
    category: "portraits",
    name: "Portrait: Mark Adam",
    description: "Shoot Date: 11/01/2017",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/4.png",
    category: "Products",
    name: "Product: Cosmetics",
    description: "Shoot Date: 14/01/2018",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/10.png",
    category: "portraits",
    name: "Portrait: Macro Allian",
    description: "Shoot Date: 08/01/2024",
    link: "/",
    codepen: "/",
  },

  {
    image: "/work/8.png",
    category: "portraits",
    name: "Portrait: Mark Adam",
    description: "Shoot Date: 11/01/2017",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/4.png",
    category: "Products",
    name: "Product: Cosmetics",
    description: "Shoot Date: 14/01/2018",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/5.png",
    category: "portraits",
    name: "Portrait: Mark Adam",
    description: "Shoot Date: 11/01/2017",
    link: "/",
    codepen: "/",
  },
  {
    image: "/work/11.png",
    category: "fashion",
    name: "Product: Cosmetics",
    description: "Shoot Date: 14/01/2018",
    link: "/",
    codepen: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Portfolio = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  // filtered projects

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "fade" }}
      className="min-h-screen pt-12"
    >
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Portfolio
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[748px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  key={index}
                  value={category}
                  onClick={() => setCategory(category)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Portfolio;
