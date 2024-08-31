import { useState } from 'react'
import Link from "next/link"
import { Mail, ArrowRight, Github, Linkedin } from "lucide-react"
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false)

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-6 w-6" />, url: 'https://github.com/kenyounot123' },
    { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, url: 'https://www.linkedin.com/in/ken-h-lu/' },
    { 
      name: 'Reddit', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm6 9c0-.608-.438-1.115-1.015-1.225-.619-2.815-3.202-5.055-6.985-5.055s-6.366 2.24-6.985 5.055c-.577.11-1.015.617-1.015 1.225 0 .678.552 1.23 1.23 1.23.14 0 .274-.024.399-.067.71 1.049 2.019 1.834 3.609 2.153.166.033.338.049.512.049 1.401 0 2.689-.549 3.643-1.443.953.894 2.241 1.443 3.642 1.443.174 0 .346-.016.512-.049 1.59-.319 2.899-1.104 3.609-2.153.125.043.259.067.399.067.678 0 1.23-.552 1.23-1.23zm-12 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z"/>
        </svg>
      ), 
      url: 'https://www.reddit.com/user/DcingSucks/' 
    },
  ]

  return (
    <section className="py-52 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#E8C547] to-[#C20114] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.div 
          className="p-8 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-6">
            reach out or say hello!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="mailto:kenlu519@gmail.com"
              className="inline-flex items-center px-6 py-3 font-semibold uppercase text-primary-foreground bg-neutral-800 rounded-full hover:bg-neutral-800/90 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contact me
              <motion.span
                className="ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isHovered ? <ArrowRight className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              </motion.span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}