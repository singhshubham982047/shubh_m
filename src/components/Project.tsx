"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { DATA } from "@/data/data";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-10 container md:px-32 space-y-10 mt-12 "
    >
      <div className="text-2xl font-bold md:text-4xl text-center ">
        <p>Some Recent Projects and Ideas</p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center gap-y-10 sm:gap-x-40  md:gap-x-52  ">
        {DATA.projects.map((project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            src={project.image}
            link={project.href}
            techAvatar={project.technologies}
            key={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
