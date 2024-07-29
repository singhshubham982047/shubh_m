"use client";
import React from "react";
import HeroCard from "./HeroCard";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { TechStack } from "./TechStack";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="hero container grid lg:grid-cols-2 place-items-center py-20 md:py-28 gap-10 overflow-hidden "
    >
      <HeroCard />
      <div className="">
        <div className="lg:text-start text-center  space-y-6 ">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="block text-base whitespace-pre-wrap font-mono">
                Hi, I&apos;m
              </span>
              <span className="block bg-gradient-to-r from-[#5c5b5c]  to-[#e2dee2] text-transparent bg-clip-text  whitespace-pre-wrap">
                Shubham
              </span>{" "}
              a
            </h1>{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                React.js
              </span>{" "}
              Developer.
            </h2>
          </main>
        </div>

        <MagicCard
          className="hidden lg:flex w-[300px] h-[300px] -right-32 top-2 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <TechStack />
        </MagicCard>
      </div>
    </section>
  );
};

export default Hero;
