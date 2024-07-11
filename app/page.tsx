import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  const toggleMode = () => {};
  return (
    <>
      <aside></aside>
      <main className="flex flex-col w-full h-screen justify-center items-center max-w-[90%] mx-auto">
        <h1 className="relative w-[95%] lg:w-[80%] text-7xl self-start lg:mx-auto">
          <div className="text-sm absolute top-0 right-0 -translate-y-[300%]">
            <ThemeSwitcher />
          </div>
          Hi, my name is Ken
        </h1>
        <section className="mt-8">
          <p className="self-start w-[95%] lg:w-[80%] lg:mx-auto">
            Ken is an avid{" "}
            <span className="underline underline-offset-2 italic">
              full stack web developer
            </span>{" "}
            specializing in{" "}
            <span className="underline underline-offset-2 italic">
              Ruby on Rails
            </span>{" "}
            and{" "}
            <span className="underline  underline-offset-2 italic">React</span>,
            with a strong background in HTML, CSS, and JS. He is a recent
            graduate at Binghamton University with a BA in Mathematics,
            indicative of his strong problem solving and analytical skills.
            Outside of his endless grind to become the pirate king, you can
            often find him at the gym doing his Olympic weightlifting, reading
            Manga, and playing video games. His most interesting fun fact is
            that he dreams of creating an app that everyone will use one day.
          </p>
        </section>
        <nav className="self-start mt-8 w-[95%] lg:w-[80%] lg:mx-auto">
          <ul className="underline underline-offset-2 mb-5">
            Explore my portfolio
          </ul>
          <ul className="underline underline-offset-2 mt-5">
            Learn more about me{" "}
          </ul>
          <ul className="underline underline-offset-2 mt-5">Contact me </ul>
        </nav>
      </main>
    </>
  );
}
