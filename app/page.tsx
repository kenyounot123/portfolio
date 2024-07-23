"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import Project from "./components/Project";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { useState, useEffect, useRef } from "react";
import { MailIcon, LinkedInIcon, GithubIcon } from "./components/SvgIcon";

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
      <aside className="hidden rotate-90 min-[330px]:block float-right fixed bottom-1/4 -right-14 md:-right-0">
        <div className="relative">
          <p>Copyright © Ken Lu</p>
          <div className="absolute right-1/2 top-1/2 translate-x-[157%] w-[160px] border-t-[0.1px] border-current"></div>
        </div>
      </aside>
      <aside className="hidden min-[330px]:block float-left fixed bottom-0 left-2 md:left-12 lg:left-14">
        <ul className="after:block after:w-[0.2px] after:h-[150px] after:border-l-[0.2px] after:border-current after:mt-2 after:ml-[13px]">
          <li className="mb-5">
            <Link target="_blank" href={"https://github.com/kenyounot123"}>
              <GithubIcon
                className="transition-transform ease-in-out duration-300 hover:rotate-[360deg]"
                width={30}
                height={30}
                fill={`${theme === "light" ? "black" : "white"}`}
              />
            </Link>
          </li>
          <li className="mt-5">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/ken-h-lu/"}
            >
              <LinkedInIcon
                className="transition-transform ease-in-out duration-300 hover:rotate-[360deg]"
                width={30}
                height={30}
                fill={`${theme === "light" ? "black" : "white"}`}
              />
            </Link>
          </li>
          <li className="mt-5">
            <Link href={"mailto:kenlu519@gmail.com"}>
              <MailIcon
                width={30}
                height={30}
                fill={`${theme === "light" ? "black" : "white"}`}
                className="transition-transform ease-in-out duration-300 hover:rotate-[360deg]"
              />
            </Link>
          </li>
        </ul>
      </aside>

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
          <div className="max-[500px]:hidden text-sm absolute top-0 right-0 -translate-y-[50%] lg:-translate-y-[200%]">
            <ThemeSwitcher width={50} height={50} />
          </div>
          <h1 className="text-5xl max-[500px]:mt-32 bg-gradient-to-tr from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
            Ken Lu
          </h1>
          <h2 className="text-2xl">Full Stack Web Developer</h2>
        </div>
        <section className="mt-8 w-[80%] mx-auto">
          <p className="lg:relative max-w-[700px]">
            Ken is an avid{" "}
            <span className="underline underline-offset-2 italic">
              full stack web developer
            </span>{" "}
            specializing in <span className="italic">Ruby on Rails</span> and{" "}
            <span className="italic">React</span>, with a strong background in
            HTML, CSS, and JS. <br /><br />
            He is based in Brooklyn, NY with roughly a year
            of experience and is a recent graduate at Binghamton University with
            a BA in Mathematics.
            <span className="hidden min-[1500px]:block lg:absolute lg:right-0 lg:top-0 lg:translate-x-[100%] lg:-translate-y-[30%]">
              {theme === "dark" ? (
                <Image
                  className="transition-transform duration-300 ease-in-out hover:-translate-y-5"
                  alt="Ken Lu"
                  src="/hero-img-white.png"
                  width={600}
                  height={600}
                />
              ) : (
                <Image
                  alt="Ken Lu"
                  className="transition-transform duration-300 ease-in-out hover:-translate-y-5"
                  src="/hero-img.png"
                  width={600}
                  height={600}
                />
              )}
            </span>
          </p>
        </section>
        <div className="w-[80%] mt-8 mx-auto min-[700px]:flex md:justify-between">
          <nav className="">
            <ul className=" mb-5">
              <div className="flex">
                <div>💻</div>
                <Link
                  className="transition-transform hover:translate-x-10 duration-300 underline underline-offset-2"
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
                  className="transition-transform hover:translate-x-10 duration-300 underline underline-offset-2"
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
                  className="transition-transform hover:translate-x-10 duration-300 underline underline-offset-2"
                  href="#contact"
                >
                  Contact me{" "}
                </Link>
              </div>
            </ul>
          </nav>
          <Image
            src={"/luffy.png"}
            width={0}
            height={0}
            alt="Ken Lu"
            sizes="100vw"
            className="max-[450px]:hidden block min-[700px]:-translate-y-[20%] w-full h-auto max-w-[300px] max-h-[300px] min-[1500px]:hidden"
          />
        </div>
      </main>

      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <section
        id="portfolio"
        className="pt-10 min-h-[1000px] max-w-[90%] mx-auto mt-32"
      >
        <div className="w-[80%] mx-auto">
          <div className="-ml-5 flex items-center">
            <Image
              className="transition-transform duration-300 ease-in-out hover:rotate-180"
              src={"/wheel.png"}
              width={100}
              height={50}
              alt="Ken Lu"
            />
            <h1 className="text-4xl bg-gradient-to-tr from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
              Projects
            </h1>
          </div>
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
            techStack={["Ruby on Rails", "Hotwire", "Postgresql", "StimulusJS"]}
            appImg="/stellar.png"
            reverse={false}
          />
        </div>
      </section>

      {/* -------------------------------------------- next section ----------------------------------------------------------- */}
      <section id="about" className="pt-10 max-w-[90%] mx-auto py-32">
        <div className="mx-auto w-[80%]">
          <div className="lg:flex gap-5 mt-5 pt-5 lg:justify-between">
            <div className="flex flex-col max-w-[700px] mb-8 gap-12 basis-1/2">
              <div className="flex -ml-5 items-center">
                <Image
                  className="transition-transform duration-300 ease-in-out hover:rotate-180"
                  src={"/wheel.png"}
                  width={100}
                  height={50}
                  alt="Ken Lu"
                />
                <h1 className="text-4xl bg-gradient-to-tr from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
                  About Me
                </h1>
              </div>
              <p>
                Hi! I&apos;m Ken, a recent graduate at Binghamton University
                eagerly seeking careers in software engineering. I
                began my web development journey completely self-taught through{" "}
                <Link
                  href="https://www.theodinproject.com"
                  className="underline underline-offset-2"
                >
                  The Odin Project
                </Link>
                . <br />
                Over the years, I have developed a strong foundation in HTML,
                CSS, and JavaScript and mastered the art of building responsive
                web pages. Currently, Ruby on Rails and React are my favorite
                frameworks to work in! <br />
                I am also currently learning TypeScript
                and Next. Outside of my endless grind to become the pirate king,
                you can often find me at the gym weightlifting, or reading
                Manga, and playing video games.
              </p>
              <div className="">
                <div id="contact" className="flex -ml-5 items-center">
                  <Image
                    className="transition-transform duration-300 ease-in-out hover:rotate-180"
                    src={"/wheel.png"}
                    width={100}
                    height={50}
                    alt="Ken Lu"
                  />
                  <h1 className="bg-gradient-to-tr from-[#E8C547] to-[#C20114] bg-clip-text text-transparent text-4xl">
                    Contact Me
                  </h1>
                </div>
                <div className="flex gap-12 flex-wrap justify-between">
                  <div className="flex flex-col gap-5 mt-5 pt-5 max-w-md">
                    <h2 className="text-xl">Get in touch</h2>
                    <p>
                      I am actively searching for full time career
                      opportunities. Whether you want to share a potential
                      freelance or job opportunity or just want to say hello,
                      feel free to reach out!
                    </p>
                    <Link
                      href={"mailto:kenlu519@gmail.com"}
                      className={`border px-5 py-3 font-bold uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${
                        theme === "light"
                          ? "text-white bg-black"
                          : "text-black bg-white"
                      } self-end`}
                    >
                      Contact me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mx-auto md:mx-0 basis-1/2 shrink-1 transition-transform duration-300 ease-in-out hover:scale-110 bg-gradient-to-tr from-[#E8C547] to-[#C20114] grow text-nowrap flex-nowrap flex flex-col flex-wrap-0 justify-center items-center border w-full max-w-[500px] h-min shadow-lg 
                ${theme === "light" ? "shadow-black" : "shadow-white"}`}
            >
              <h1 className="text-4xl min-[400px]:text-5xl md:text-6xl uppercase tracking-widest">
                Wanted
              </h1>
              <div
                className={`w-[90%]  ${
                  theme === "light"
                    ? "border-black border-2"
                    : "border-2 border-white"
                }`}
              >
                <Image
                  src={"/luffy.png"}
                  width={0}
                  height={0}
                  className="w-full h-full object-cover"
                  alt="Ken Lu"
                  sizes="100vw"
                />
              </div>
              <div className="md:tracking-wide text-sm min-[400px]:text-xl md:text-3xl uppercase">
                React and Ruby on Rails
              </div>
              <div className="md:tracking-widest text-2xl md:text-5xl uppercase">
                Ken H. Lu
              </div>
              <div className="md:tracking-widest text-2xl md:text-4xl">
                $3,000,000,000
              </div>
              <div className="text-2xl md:text-4xl">FullStackDev</div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[80%] mx-auto text-center pb-5">
        <Link href={"#home"}> Back To Top</Link>
      </div>
    </>
  );
}
