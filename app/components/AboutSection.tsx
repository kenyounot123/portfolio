import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
export default function AboutSection() {
  const { theme } = useTheme()
  return (
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
                . 
                Over the years, I have developed a strong foundation in HTML,
                CSS, and JavaScript and mastered the art of building responsive
                web pages. Currently, Ruby on Rails and React are my favorite
                frameworks to work in! 
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
  )
}