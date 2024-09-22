import React from "react";
import { MagicCard } from "./magicui/magic-card";
import Image from "next/image";

const WorkCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <>
      <MagicCard className="w-full  sm:p-10  ">
        <div className="flex md:gap-7 flex-col md:flex-row items-start py-2 px-2">
          <div className="bg-black/35 rounded flex justify-center w-1/2  ">
            <img src={image} alt="image" className=" " />
          </div>
          <div className="w-full flex flex-col text-start gap-4">
            <h2 className="text-xl font-semibold"> {title}</h2>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </MagicCard>
    </>
  );
};

export default WorkCard;
