"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import Project from "./components/Project";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server
  }

  return (
    <>
      <nav
        className={`py-1 flex ${
          theme === "dark" ? "bg-gray-500" : "bg-cyan-300"
        } z-10 fixed justify-between w-full border min-[500px]:hidden`}
      >
        <div>
          {theme === "dark" ? (
            <Image
              alt="luffy"
              src="/hero-img-white.png"
              width={30}
              height={30}
            />
          ) : (
            <Image alt="luffy" src="/hero-img.png" width={30} height={30} />
          )}
        </div>
        <ThemeSwitcher width={30} height={30} />
      </nav>
      <main className="flex flex-col min-w-[300px] w-full h-screen justify-center items-center max-w-[90%] mx-auto">
        <div className="relative w-[80%] mx-auto lg:self-center">
          <div className="max-[500px]:hidden text-sm absolute top-0 right-0 -translate-y-[230%]">
            <ThemeSwitcher width={50} height={50} />
          </div>
          <p className="text-5xl max-[500px]:mt-32">Ken Lu</p>
          <p className="text-2xl">Full Stack Developer</p>
        </div>
        <section className="mt-8 w-[80%] mx-auto">
          <p className="lg:relative max-w-[700px]">
            Ken is an avid{" "}
            <span className="underline underline-offset-2 italic">
              full stack web developer
            </span>{" "}
            specializing in <span className="italic">Ruby on Rails</span> and{" "}
            <span className="italic">React</span>, with a strong background in
            HTML, CSS, and JS. He is a recent graduate at Binghamton University
            with a BA in Mathematics, indicative of his strong problem solving
            and analytical skills. Outside of his endless grind to become the
            pirate king, you can often find him at the gym doing his Olympic
            weightlifting, reading Manga, and playing video games. His most
            interesting fun fact is that he dreams of creating an app that
            everyone will use one day.
            <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:translate-x-[100%] lg:-translate-y-[30%]">
              {theme === "dark" ? (
                <Image
                  className="transition duration-300 ease-in-out hover:-translate-y-5"
                  alt="luffy"
                  src="/hero-img-white.png"
                  width={600}
                  height={600}
                />
              ) : (
                <Image
                  alt="luffy"
                  className="transition duration-300 ease-in-out hover:-translate-y-5"
                  src="/hero-img.png"
                  width={600}
                  height={600}
                />
              )}
            </div>
          </p>
        </section>
        <nav className="mt-8 w-[80%] mx-auto">
          <ul className=" mb-5">
            <div className="flex">
              <div>💻</div>
              <Link
                className="transition hover:translate-x-10 duration-300 underline underline-offset-2"
                href="#portfolio"
              >
                Explore my portfolio
              </Link>
            </div>
          </ul>
          <ul className="mt-5">
            <div className="flex">
              <div>🧑</div>
              <Link
                className="transition hover:translate-x-10 duration-300 underline underline-offset-2"
                href="#about"
              >
                Learn more about me{" "}
              </Link>
            </div>
          </ul>
          <ul className="mt-5">
            <div className="flex">
              <div>📨</div>
              <Link
                className="transition hover:translate-x-10 duration-300 underline underline-offset-2"
                href="#contact"
              >
                Contact me{" "}
              </Link>
            </div>
          </ul>
        </nav>
      </main>

      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <section
        id="portfolio"
        className="pt-10 min-h-[1000px] max-w-[90%] mx-auto mt-32"
      >
        <div className="w-[80%] mx-auto">
          <h1 className="text-4xl mb-5 pb-5">Projects !</h1>
          <Project
            projLink="https://messenger-app-0vcf.onrender.com/"
            appName="Messenger App"
            appRole="Full Stack Developer"
            appDescription="A web-based messaging app that allows users to send messages to
                each other. Users can create and customize their profiles,
                authorize their accounts, and engage in one-on-one conversations
                with real time updates."
            techStack={["Ruby on Rails", "React", "Postgresql", "Render"]}
            appImg="/messenger-app.png"
            reverse={false}
          />
          <Project
            projLink="https://github.com/kenyounot123/wheres-waldo"
            appName="Wheres Waldo"
            appRole="Full Stack Developer"
            appDescription="A photo tagging web application that allows users to play a mini game to identify specific 
                characters within a large photograph. It's inspired by games like 'Where's Waldo?'."
            techStack={["Ruby on Rails", "React", "Vanilla CSS"]}
            appImg="/wheres_waldo.png"
            reverse={false}
          />
          <Project
            projLink="https://kenyounot123.github.io/BU-hackathon/"
            appName="University Club Match Quiz"
            appRole="Frontend Developer"
            appDescription="Binghamton University's Annual Hackathon winning project! A simple quiz that would help users find a club to join in Binghamton University based off their interests."
            techStack={["Git", "Python", "Vanilla CSS", "Vanilla JavaScript"]}
            appImg="/hackathon.png"
            reverse={false}
          />
          <Project
            projLink="github.com/kenyounot123/Social-media-clone"
            appName="Stellar"
            appRole="Full Stack Developer"
            appDescription="Created a full-stack social media site consisting of the core user functionalities of any social media apps such as Facebook, Twitter, threads, etc."
            techStack={["Ruby on Rails", "Hotwire/StimulusJS", "Bootstrap"]}
            appImg="/stellar.png"
            reverse={false}
          />
        </div>
      </section>

      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <section
        id="about"
        className="pt-10 h-[1000px] max-w-[90%] mx-auto mt-32"
      >
        <div className="mx-auto w-[80%]">
          <h1 className="text-4xl">About Me</h1>
          <div className="lg:flex lg:gap-32">
            <p className="mt-5 pt-5 max-w-[700px]">
              Hi! I&apos;m Ken, a recent graduate at Binghamton University
              eagerly seeking careers in software engineering. I graduated with
              a BA in Mathematics but realized I wanted to pursue a career in
              Software Development at the end of my Junior year. I began my web
              development journey completely self-taught through{" "}
              <Link
                href="https://www.theodinproject.com"
                className="underline underline-offset-2"
              >
                The Odin Project
              </Link>
              . Over the year, I have developed a strong foundation in HTML,
              CSS, and JavaScript and mastered the art of building responsive
              web pages. Currently, Ruby on Rails and React are my favorite
              frameworks to work in! I am also currently learning TypeScript and
              Next. I dream of creating an app where everyone will use one day
            </p>
            <div>
              <Image
                src={"/about-me.png"}
                alt="dreams never die"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <section
        id="contact"
        className="pt-10 h-[1000px] max-w-[90%] mx-auto mt-32"
      >
        <h1 className="w-[80%] mx-auto text-4xl">Contact Me</h1>
      </section>

      <footer></footer>
    </>
  );
}
