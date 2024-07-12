import Link from "next/link";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <aside></aside>
      <nav className="flex justify-between w-full border min-[420px]:hidden">
        <div>profile picture</div>
        <ThemeSwitcher width={30} height={30} />
      </nav>
      <main className="flex flex-col w-full h-screen justify-center items-center max-w-[90%] mx-auto">
        <div className="relative w-[80%] mx-auto lg:self-center">
          <div className="max-[420px]:hidden text-sm absolute top-0 right-0 -translate-y-[200%]">
            <ThemeSwitcher width={50} height={50} />
          </div>
          <p className="text-5xl">Ken Lu</p>
          <p className="text-2xl">
            Full Stack Developer, RoR Developer, React Developer
          </p>
        </div>
        <section className="mt-8 w-[80%] mx-auto">
          <p className="max-w-[700px]">
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
          </p>
        </section>
        <nav className="mt-8 w-[80%] mx-auto">
          <ul className=" mb-5">
            <div className="flex">
              <div>💻</div>
              <Link
                className="transition hover:translate-x-3 duration-300 underline underline-offset-2"
                href="/projects"
              >
                Explore my portfolio
              </Link>
            </div>
          </ul>
          <ul className="mt-5">
            <div className="flex">
              <div>🧑</div>
              <Link
                className="transition hover:translate-x-3 duration-300 underline underline-offset-2"
                href="/about"
              >
                Learn more about me{" "}
              </Link>
            </div>
          </ul>
          <ul className="mt-5">
            <div className="flex">
              <div>📨</div>
              <Link
                className="transition hover:translate-x-3 duration-300 underline underline-offset-2"
                href="/contact"
              >
                Contact me{" "}
              </Link>
            </div>
          </ul>
        </nav>
      </main>
    </>
  );
}
