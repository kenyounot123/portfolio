'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

const SectionTitle = ({ title }: { title: string }) => (
  <motion.div 
    className="flex items-center mb-8"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative w-16 h-16 mr-4">
      <Image
        className="transition-transform duration-300 ease-in-out hover:rotate-180"
        src="/wheel.png"
        layout="fill"
        objectFit="contain"
        alt={`${title} icon`}
      />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent">
      {title}
    </h2>
  </motion.div>
)

export default function AboutSection() {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="lg:flex lg:gap-12 lg:items-start">
        <motion.div 
          className="lg:w-3/5 mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle title="About Me" />
          <div className="space-y-6 text-xl">
            <p>
              hi, my name&apos;s Ken.
            </p>
            <p>
              i am self-taught and learned from {' '}
              <Link
                href="https://www.theodinproject.com"
                className="underline underline-offset-2 hover:text-primary/80 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Odin Project
              </Link>.
            </p>
            <p>
              i love playing pickleball, reading manga, and exercising
            </p>
            <p>
              i also love one piece
            </p>
            <p>
              long term, i hope to 😬 change the world 😬, or something like that 
            </p>
          </div>

        </motion.div>

        <motion.div
          className="lg:w-2/5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`mx-auto max-w-[500px] aspect-[3/4] relative overflow-hidden rounded-lg shadow-xl ${
              theme === 'light' ? 'shadow-black/20' : 'shadow-white/20'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-[#E8C547] to-[#C20114] flex flex-col items-center justify-between p-6 text-white"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">Wanted</h2>
              <div className="w-full h-3/5 relative border-4 border-white overflow-hidden">
                <Image
                  src="/luffy.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Ken Lu"
                />
              </div>
              <div className="text-center">
                <p className="text-xl md:text-2xl uppercase mb-2">React and Ruby on Rails</p>
                <h3 className="text-3xl md:text-4xl font-bold uppercase mb-2">Ken H. Lu</h3>
                <p className="text-2xl md:text-3xl font-semibold mb-1">$3,000,000,000</p>
                <p className="text-xl md:text-2xl">FullStackDev</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}