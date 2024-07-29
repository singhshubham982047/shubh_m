import React from "react";
import { MagicCard } from "./magicui/magic-card";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 container md:px-32">
      <div className="text-2xl font-bold md:text-4xl text-center">
        <p>Skills and Tech Stack</p>
      </div>
      <div className="container flex items-center justify-center">
        <div className="hidden  relative lg:flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="py-8  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2: gap-5 lg:gap-x-32 place-items-center">
          <MagicCard className="w-[200px] h-[300px]"></MagicCard>
          <MagicCard className="w-[200px] h-[300px]"></MagicCard>
          <MagicCard className="w-[200px] h-[300px]"></MagicCard>
          <MagicCard className="w-[200px] h-[300px]"></MagicCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
