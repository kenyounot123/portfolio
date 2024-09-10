import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

interface ProjectProps {
  projLink: string;
  appName: string;
  appRole: string;
  appDescription: string;
  appImg: string;
  techStack: string[];
}

const Project = ({ projLink, appName, appRole, appDescription, techStack, appImg }: ProjectProps) => {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row gap-8 mb-16 rounded-lg overflow-hidden shadow-lg dark:bg-neutral-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:w-1/2 relative overflow-hidden group">
        <Image
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={appImg}
          width={700}
          height={400}
          alt={appName}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={projLink} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-semibold flex items-center">
            View Project <ExternalLink className="ml-2" size={20} />
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 p-6 space-y-4">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">{appName}</h3>
        <p className="text-sm text-muted-foreground">{appRole}</p>
        <p className="text-foreground">{appDescription}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 text-xs font-medium bg-[#C20114] text-secondary-foreground rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const projects = [
    {
      projLink: "https://flashprepai.com",
      appName: "Flash Prep AI",
      appRole: "Co-Founder and Software Engineer",
      appDescription: "This app leverages AI to generate personalized flashcards that adapt to your learning style, helping you retain information more effectively and enhance your study sessions.",
      techStack: ["Nextjs", "React", "Firebase", "Vercel", "Stripe API"],
      appImg: "/flashprepai.png",
    },
    {
      projLink: "https://github.com/kenyounot123/messenger-app",
      appName: "ChatPDF",
      appRole: "Software Engineer, Full-Stack",
      appDescription: "A platform that lets users upload any PDF and chat with it to quickly extract information and get instant answers.",
      techStack: ["Nextjs", "React", "Pinecone", "LangChain", "shadcn", "OpenAI"],
      appImg: "/pdf-chat-app.png",
    },
    {
      projLink: "https://github.com/kenyounot123/wheres-waldo",
      appName: "Wheres Waldo",
      appRole: "Full Stack Developer",
      appDescription: "A photo tagging web application that allows users to play a mini game to identify specific characters within a large photograph. It's inspired by games like 'Where's Waldo?'.",
      techStack: ["Ruby on Rails", "React", "Vanilla CSS", "Postgresql"],
      appImg: "/wheres_waldo.png",
    },
    {
      projLink: "https://kenyounot123.github.io/BU-hackathon/",
      appName: "University Club Match Quiz",
      appRole: "Full Stack Developer",
      appDescription: "Binghamton University's Annual Hackathon winning project! A simple quiz that would help users find a club to join in Binghamton University based off their interests.",
      techStack: ["Git", "Python", "Vanilla CSS", "Vanilla JavaScript"],
      appImg: "/hackathon.png",
    },
  ]

  return (
    <section id="portfolio" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="flex items-center mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-20 h-20 mr-4">
          <Image
            className="transition-transform duration-300 ease-in-out hover:rotate-180"
            src="/wheel.png"
            layout="fill"
            objectFit="contain"
            alt="Projects icon"
          />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
          Projects
        </h2>
      </motion.div>

      <div className="space-y-16">
        <AnimatePresence>
          {projects.slice(0, isExpanded ? projects.length : 2).map((project, index) => (
            <Project key={project.appName} {...project} />
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        className="mt-8 flex items-center justify-center w-full py-3 font-bold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent" 
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? "Show Less" : "Show More Projects"}
        {isExpanded ? <ChevronUp className="ml-2 dark:text-white text-black" /> : <ChevronDown className="ml-2 dark:text-white text-black" />}
      </motion.button>
    </section>
  )
}