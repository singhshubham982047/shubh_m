"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import ShineBorder from "./magicui/shine-border";
import Particles from "./magicui/particles";
import ShinyButton from "./magicui/shiny-button";
import { Aboutme } from "./Aboutme";

const HeroCard = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className="hidden md:flex flex-row flex-wrap  relative w-[550px] h-[350px]  lg:w-[650px] lg:h-[500px] items-center justify-center ">
      <MagicCard
        className="absolute right-[70px]  -top-8 w-96 h-[400px]  cursor-pointer flex-col   shadow-2xl  text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <ShineBorder
          className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden    bg-background md:shadow-xl "
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className=" flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   md:shadow-xl">
            <Particles
              className="absolute inset-0 "
              quantity={100}
              ease={80}
              color={color}
              refresh
            />
            <div className=" flex flex-col justify-center items-center   text-xl">
              <img
                src="https://avatars.githubusercontent.com/u/155379514?v=4"
                alt="user avatar"
                className=" grayscale-[0%]   rounded-full w-32 h-32  object-cover "
              />
              <p>Shubham Singh</p>
              <p className="text-blue-500">Full Stack Developer</p>
            </div>
            <div className="flex mt-4 items-center text-center">
              <span className="text-sm">
                I find immense satisfaction in converting ideas into practical
                software that surpasses expectations.
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              <Aboutme />
              <a href="https://github.com/singhshubham982047" target="_blank">
                <ShinyButton text="Repository" />
              </a>
            </div>
          </div>
        </ShineBorder>
      </MagicCard>
    </div>
  );
};

export default HeroCard;
