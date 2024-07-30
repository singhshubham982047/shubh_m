import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { Separator } from "./ui/separator";
import { Check } from "lucide-react";

const SkillCard = ({ plang, title }: { plang: string[]; title: string }) => {
  return (
    <>
      <MagicCard className="w-[200px] h-[300px] py-4 place-content-center">
        <div className="flex items-center text-center flex-col ">
          <h3 className="text-sm">{title}</h3>
          <Separator orientation="horizontal" className="bg-gray-400 mt-4" />
        </div>

        <div className="flex flex-col items-start space-y-3 text-gray-600 w-[200px] p-5">
          {plang.map((lang) => (
            <span className=" flex">
              {lang} <Check className="text-green-500" />
            </span>
          ))}
        </div>
      </MagicCard>
    </>
  );
};

export default SkillCard;
