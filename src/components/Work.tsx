import React from "react";
import WorkCard from "./WorkCard";
import { DATA } from "@/data/data";

const Work = () => {
  return (
    <section id="work" className="py-10 container md:px-32 space-y-10 p-3">
      <div className="text-2xl font-bold md:text-4xl text-center">
        <p>Work and Experiences</p>
      </div>
      <div className="flex flex-col gap-6 ">
        {DATA.works.map((work, index) => (
          <WorkCard
            title={work.title}
            description={work.description}
            image={work.image}
            key={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
