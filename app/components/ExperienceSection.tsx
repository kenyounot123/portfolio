import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'

interface ExperienceItemProps {
  date: string
  title: string
  description: string
  link?: {
    url: string
    text: string
  }
}

const ExperienceItem = ({ date, title, description, link }: ExperienceItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.li 
      className="mb-10 ms-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="absolute flex items-center justify-center w-6 h-6 dark:bg-neutral-900 bg-black rounded-full -start-3 ring-8 ring-background">
        <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
      </span>
      <motion.div 
        className="p-4 bg-card rounded-lg shadow-md dark:bg-neutral-800"
        animate={{ scale: isHovered ? 1.03 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{date}</time>
        <h3 className="text-xl font-bold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">{title}</h3>
        <p className="mb-4 text-base font-normal dark:text-white">{description}</p>
        {link && (
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-foreground bg-black rounded-lg hover:bg-black/50 focus:ring-4 focus:outline-none focus:ring-primary/50 transition-colors duration-200"
          >
            {link.text}
            <ExternalLink className="w-3 h-3 ms-2" />
          </Link>
        )}
      </motion.div>
    </motion.li>
  )
}

export default function ExperienceSection() {
  const experiences = [
    {
      date: "August 2024",
      title: "Software Engineer & Co-Founder",
      description: "Created and launched an AI-powered flashcard application using Next.js, React, and TypeScript, integrating OpenAI for content generation and Clerk for user authentication, serving over 200 active users.",
      link: {
        url: "https://flashprepai.com/",
        text: "Visit FlashPrep AI"
      }
    },
    {
      date: "August 2024",
      title: "Software Engineering Fellow",
      description: "Developed 5 AI-Based projects in 5 weeks and scaled a tech solution to 1000 users as the final project.",
      link: {
        url: "https://app.theheadstarter.com/profile/usr_WkkCObSC1taargcLSff7d",
        text: "Learn more"
      }
    },
    {
      date: "July 2024",
      title: "Freelance Full Stack Developer",
      description: "Developed a full-stack eCommerce web app for a client's business using Ruby on Rails, leading to a 30% increase in online sales"
    }
  ]

  return (
    <section id="experience" className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
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
            alt="Experience icon"
          />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
          Experience
        </h2>
      </motion.div>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </ol>

      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link 
          href="/resume.pdf" 
          className="inline-flex items-center px-6 py-3 text-base font-medium text-primary-foreground dark:bg-neutral-800 bg-black rounded-full hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-primary/50 transition-colors duration-200"
        >
          View Full Resume
          <ChevronRight className="w-5 h-5 ms-2" />
        </Link>
      </motion.div>
    </section>
  )
}