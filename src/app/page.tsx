import Hero from "@/components/Hero";
import Meteors from "@/components/magicui/meteors";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden relative ">
      <Meteors />
      <Hero />
      <Project />
      <Skills />
    </main>
  );
}
