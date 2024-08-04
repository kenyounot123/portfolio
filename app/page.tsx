"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useState, useEffect, useRef } from "react";
import ProjectSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import HomeContent from "./components/HomeContent";
import LeftAsideNav from "./components/LeftAside";
import RightAsideNav from "./components/RightAside";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <LeftAsideNav/>
      <RightAsideNav/>
      {/* ----------------------------------- content starts here ------------------------------------------ */}
      <nav
        className={`py-1 flex ${
          theme === "dark" ? "bg-black" : "bg-white"
        } z-10 fixed justify-between w-full min-[500px]:hidden`}
      >
        <div>
          {theme === "dark" ? (
            <Image
              alt="Ken Lu"
              src="/hero-img-white.png"
              width={30}
              height={30}
            />
          ) : (
            <Image alt="Ken Lu" src="/hero-img.png" width={30} height={30} />
          )}
        </div>
        <ThemeSwitcher width={30} height={30} />
      </nav>
      <main
        id="home"
        className="flex flex-col min-w-[300px] w-full h-screen justify-center items-center max-w-[90%] mx-auto"
      >
        <div className="relative w-[80%] mx-auto lg:self-center">
          <div className="max-[500px]:hidden text-sm absolute top-0 right-0 -translate-y-[50%] lg:-translate-y-[110%]">
            <ThemeSwitcher width={50} height={50} />
          </div>
          <h1 className="text-5xl max-[500px]:mt-32 bg-gradient-to-tr from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
            Ken Lu
          </h1>
          <h2 className="text-2xl">Full Stack Web Developer</h2>
        </div>
        <HomeContent/>
      </main>
      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <ProjectSection/>
      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <ExperienceSection/>
      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <AboutSection/>
      <div className="w-[80%] mx-auto text-center pb-5">
        <Link href={"#home"}> Back To Top</Link>
      </div>
    </>
  );
}
