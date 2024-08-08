import Image from "next/image"
import Project from "./Project"
export default function ProjectSection() {
  return (
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
            projLink="https://github.com/kenyounot123/messenger-app"
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
            techStack={["Ruby on Rails", "React", "Vanilla CSS", "Postgresql"]}
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
  )
}