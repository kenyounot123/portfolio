import Link from "next/link"
import { MailIcon, LinkedInIcon, GithubIcon } from "./SvgIcon"
import { useTheme } from "next-themes"
export default function RightAsideNav() {
  const { theme }  = useTheme()
  return (
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
  )
}