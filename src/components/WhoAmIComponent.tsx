"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimate } from "motion/react"
import { X, Github, Linkedin, Twitter } from "lucide-react"

interface SocialLink {
  name: string
  url: string
}

interface WhoAmIProps {
  name: string
  title: string
  bio: string
  skills: string[]
  image: string
  socialLinks: SocialLink[]
}

export function WhoAmIComponent({ name, title, bio, skills, image, socialLinks }: WhoAmIProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scope, animate] = useAnimate()

  const toggleModal = () => setIsOpen(!isOpen)

  useEffect(() => {
    const pulseAnimation = async () => {
      for (let i = 0; i < 4; i++) {
        await animate(scope.current, { scale: 1.1 }, { duration: 0.3 })
        await animate(scope.current, { scale: 1 }, { duration: 0.3 })
        if (i < 3) {
          await new Promise((resolve) => setTimeout(resolve, 2400)) // Wait for the remaining time to complete 3 seconds
        }
      }
    }

    pulseAnimation()
  }, [animate, scope])

  return (
    <>
      <motion.div
        ref={scope}
        layoutId="who-am-i"
        onClick={toggleModal}
        className="cursor-pointer w-[3.5rem] h-[3.5rem] md:w-[5.25rem] md:h-[5.25rem] rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 absolute group top-4 left-4 md:top-6 md:left-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={toggleModal}
            />
            <motion.div
              layoutId="who-am-i"
              className="fixed inset-2 md:inset-16 z-[60] bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="h-full flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-2/5">
                  <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
                  <button
                    onClick={toggleModal}
                    className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-black transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 md:p-6 md:w-3/5 flex flex-col overflow-y-auto">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{name}</h2>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-4">{title}</p>
                    <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 mb-6">{bio}</p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs md:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 mb-6">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                          aria-label={link.name}
                        >
                          {link.name === "GitHub" && <Github className="w-5 h-5 md:w-6 md:h-6" />}
                          {link.name === "LinkedIn" && <Linkedin className="w-5 h-5 md:w-6 md:h-6" />}
                          {link.name === "Twitter" && <Twitter className="w-5 h-5 md:w-6 md:h-6" />}
                        </a>
                      ))}
                    </div>
                  </div>
                  <button className="w-full py-2 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg font-medium rounded-lg transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

