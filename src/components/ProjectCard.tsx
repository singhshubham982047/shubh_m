"use client";
import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import AvatarCircles from "./magicui/avatar-circles";
import { Icons } from "./icons";
import { ExternalLink } from "lucide-react";

const techAvatar = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const ProjectCard = ({
  src,
  title,
  description,
}: {
  title: string;
  description: string;
  src: string;
}) => {
  const { theme } = useTheme();
  return (
    <div>
      <NeonGradientCard className="max-w-sm items-center justify-center ">
        <MagicCard
          className="flex w-[280px] h-[360px] cursor-pointer flex-col items-center  shadow-2xl whitespace-nowrap text-3xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col w-full gap-4">
            <div className="w-full ">
              <img src={src} className="bg-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className=" items-start">{title}</h2>

              <div className=" max-w-10">
                <p className="text-sm  ">{description}</p>
              </div>
            </div>
            <div className=" flex items-center justify-evenly">
              <AvatarCircles numPeople={99} avatarUrls={techAvatar} />
              <a href="">
                <ExternalLink className="text-blue-400" />
              </a>
            </div>
          </div>
        </MagicCard>
      </NeonGradientCard>
    </div>
  );
};

export default ProjectCard;
