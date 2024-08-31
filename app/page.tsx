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
import { motion } from 'framer-motion'
import { ChevronUp } from "lucide-react";
import ContactSection from "./components/ContactSection";

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
        className={`py-2 px-4 flex ${
          theme === "dark" ? "bg-black/80" : "bg-white/80"
        } backdrop-blur-sm z-20 fixed top-4 left-1/2 -translate-x-1/2 justify-between items-center rounded-full shadow-lg`}
      >
        <div className="flex items-center space-x-4">
          <Image
            alt="Ken Lu"
            src={theme === "dark" ? "/hero-img-white.png" : "/hero-img.png"}
            width={30}
            height={30}
          />
          <Link href="#home" className="hover:text-gray-600">Home</Link>
          <Link href="#projects" className="hover:text-gray-600">Projects</Link>
          <Link href="#experience" className="hover:text-gray-600">Experience</Link>
          <Link href="#about" className="hover:text-gray-600">About</Link>
          <ThemeSwitcher width={30} height={30} />
        </div>
      </nav>
      <main className="container mx-auto pt-32 pb-48">
        <HomeContent />
      </main>
      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <ProjectSection/>
      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <ExperienceSection/>
      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <AboutSection/>
      <ContactSection/>
      <div 
        className="mt-8 text-center mb-10"
      >
        <Link 
          href="#home" 
          className="inline-flex items-center px-6 py-3 text-base font-medium text-primary-foreground dark:bg-neutral-800 bg-black rounded-full hover:bg-black/90 transition-colors duration-200 hover:scale-[1.05] transition-transform duration-200 ease-in-out"
        >
          Back To Top
          <ChevronUp className="w-5 h-5 ms-2" />
        </Link>
      </div>
    </>
  );
}
