"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="py-10 container md:px-32 space-y-8 ">
      <div className="text-2xl font-bold md:text-4xl text-center">
        <p>Some Recent Projects and Ideas</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center gap-y-10 sm:gap-x-40  md:gap-x-52  ">
        <ProjectCard
          src="/imagify.png"
          title="Imagify"
          description="asjdjsa asjhdks sdkhks"
        />
        <ProjectCard
          src="/blogsly.png"
          title="Blogsly"
          description="asjdjsa asjhdks sdkhks jkdsjaiodjiowq ksdjhsadsa kjasid sjhsgd ahsihwqihd"
        />
        <ProjectCard
          src="/imagify.png"
          title="Imagify"
          description="asjdjsa asjhdks sdkhks"
        />
        <ProjectCard
          src="/imagify.png"
          title="Imagify"
          description="asjdjsa asjhdks sdkhks"
        />
      </div>
    </section>
  );
};

export default Project;
