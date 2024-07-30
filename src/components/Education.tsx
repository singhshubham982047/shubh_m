import { DATA } from "@/data/data";
import React from "react";
import { MagicCard } from "./magicui/magic-card";

const Education = () => {
  return (
    <section
      id="education"
      className="py-10 container md:px-32 space-y-10 mt-12"
    >
      <div className="text-2xl font-bold md:text-4xl text-center">
        <p>Education</p>
      </div>
      <div className="flex flex-col gap-3">
        {DATA.education.map((item) => (
          <MagicCard
            className="flex w-full  cursor-pointer flex-row items-center  shadow-2xl"
            key={item.degree}
          >
            <div className="flex items-center">
              <img src={item.logoUrl} alt="image" className="size-40" />
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl">
                  {item.degree}({item.start}-{item.end})
                </h2>
                <p className="text-[16px] text-gray-500 sm:text-xl font-serif">
                  Graduated from {item.school}
                </p>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};

export default Education;
