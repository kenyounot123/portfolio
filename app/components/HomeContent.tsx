import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
export default function HomeContent() {
  const { theme } = useTheme()
  return ( 
    <>
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
            <div className="flex gap-1">
              <div>💻</div>
              <Link
                className="transition-transform hover:translate-x-10 duration-300 underline underline-offset-2"
                href="#portfolio"
              >
                Projects
              </Link>
            </div>
          </ul>
          <ul className="mt-5">
            <div className="flex gap-1">
              <div>🧑</div>
              <Link
                className="transition-transform hover:translate-x-10 duration-300 underline underline-offset-2"
                href="#about"
              >
                About me{" "}
              </Link>
            </div>
          </ul>
          <ul className="mt-5">
            <div className="flex gap-1">
              <div>🚧</div>
              <Link
                className="transition-transform hover:translate-x-10 duration-300 underline underline-offset-2"
                href="#experience"
              >
                Experience{" "}
              </Link>
            </div>
          </ul>
          <ul className="mt-5">
            <div className="flex gap-1">
              <div>📝</div>
              <Link
                className="transition-transform hover:translate-x-10 duration-300 underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
                href="/resume.pdf"
              >
                Resume{" "}
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
    </>
  )
}