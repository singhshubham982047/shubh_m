"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/modeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/data";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [visible, setVisible] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();
  const stroke = theme === "dark" ? "#ffffff" : "#000000";

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY, handleScroll]);
  return (
    <>
      {visible && (
        <div className="sm:hidden fixed  top-0 right-0 flex items-center text-center gap-3 ">
          <ModeToggle />

          <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-2xl text-green-600">
                    Shubham Singh
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-6 mt-10  font-semibold">
                  {DATA.navbar.map((item) => (
                    <Link href={item.href} key={item.label}>
                      {item.label}
                    </Link>
                  ))}
                  {Object.entries(DATA.contact.social)
                    .filter(([_, social]) => social.navbar)
                    .map(([name, social]) => (
                      <Link
                        href={social.url}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-3"
                        )}
                        key={social.name}
                      >
                        {name}
                      </Link>
                    ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      )}

      {visible && (
        <div className="hidden  pointer-events-none fixed inset-x-0 bottom-6 z-30 mx-auto mb-4 sm:flex origin-bottom h-full  max-h-14">
          <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
          <Dock
            direction="middle"
            className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] "
          >
            {DATA.navbar.map((item) => (
              <DockIcon key={item.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-5 sm:size-12"
                      )}
                      key={item.label}
                    >
                      <item.icon
                        className={`size-3 sm:size-6`}
                        stroke={stroke}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator
              orientation="vertical"
              className="h-full hidden sm:flex bg-gray-400"
            />
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => (
                <DockIcon key={name} className="hidden sm:flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.url}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12"
                        )}
                        key={social.name}
                      >
                        <social.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            <Separator
              orientation="vertical"
              className="h-full sm:py-2 bg-gray-400"
            />
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </div>
      )}
    </>
  );
}
