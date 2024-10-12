import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin } from "lucide-react"

export default function HomeContent() {
  const { theme } = useTheme()
  return (
    <Card className="w-[90%] max-w-4xl mx-auto mt-8 shadow-lg relative">
      <div className="absolute top-0 right-0 mr-5 mt-5 flex gap-5">
        <Link href={"https://github.com/kenyounot123"}><Github/></Link>
        <Link href={"https://www.linkedin.com/in/ken-h-lu/"}><Linkedin/></Link>
      </div>
      <CardHeader className="text-center">
        <CardTitle className="text-6xl font-bold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
          Ken Lu
        </CardTitle>
        <CardDescription className="text-2xl mt-2 text-gray-600 dark:text-gray-300">
          Software Engineer
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed">
              hi, I am an avid <span className="font-semibold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">software engineer</span> specializing in <span className="italic">ruby on rails</span> and <span className="italic">react</span>, with a strong background in html, css, and js.
            </p>
            <div className="flex flex-wrap justify-center gap-6 my-8 rounded dark:bg-neutral-800">
              {[
                { src: "/icons/rails.svg", alt: "Ken Lu" },
                { src: "/icons/react.svg", alt: "Ken Lu" },
                { src: "/icons/typescript.svg", alt: "Ken Lu" },
                { src: "/icons/nextjs.svg", alt: "Ken Lu" },
                { src: "/icons/firebase.svg", alt: "Ken Lu" },
                { src: "/icons/mui.svg", alt: "Ken Lu" },
                { src: "/icons/openai.svg", alt: "Ken Lu" },
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={48}
                    height={48}
                    className="transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <nav className="grid grid-cols-2 gap-4 mt-8">
              {[
                { href: "#portfolio", icon: "💻", text: "Projects" },
                { href: "#about", icon: "🧑", text: "About me" },
                { href: "#experience", icon: "🚧", text: "Experience" },
                { href: "/resume.pdf", icon: "📝", text: "Resume", external: true },
              ].map((item, index) => (
                <Button key={index} asChild variant="outline" className="justify-start h-12">
                  <Link href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <span className="mr-2 text-lg">{item.icon}</span> {item.text}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0">
            <Avatar className="w-72 h-72 ring-4 ring-[#E8C547] ring-offset-4 bg-white">
              <AvatarImage src="/hero-img.png" alt="Ken Lu" />
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}