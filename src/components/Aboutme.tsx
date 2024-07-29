"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";

export function Aboutme() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div className="relative">
      <Drawer>
        <DrawerTrigger asChild>
          <Button>About me</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className=" w-full ">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />

            <DrawerHeader>
              <DrawerTitle className="text-3xl capitalize">
                <div className="pb-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-b from-primary/60 to-primary  bg-clip-text">
                      About
                    </span>{" "}
                    Me
                  </h2>
                </div>
              </DrawerTitle>
              <DrawerDescription>
                <div className="text-muted-foreground flex gap-2">
                  <span>Shubham Singh</span>
                  <span>Contact: singhshubham982047@gmail.com</span>
                  <span>Role: Full-Stack Developer</span>
                  <span>Location: Hyderabad</span>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0"></div>
            <DrawerFooter></DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
