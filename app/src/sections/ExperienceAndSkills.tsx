"use client"

import { getStripedBackground } from "@/app/background-style"
import ListingCard from "@/app/components/ListingCard"
import { ArrowBigRight, ChevronRight, MoveRight, Pickaxe } from "lucide-react"
import { useTheme } from "next-themes"
import { ReactElement, useState } from "react"
import { motion } from "motion/react"
import StackButton from "@/app/components/StackButton"




export default function ExperienceAndSkills() {

  const { theme } = useTheme()

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative flex flex-row justify-center w-full h-full">
      <div className="absolute inset-0 w-full h-full"
        style={
          theme === "dark"
            ? {
              backgroundColor: "#000000",
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.4) 0.6px, transparent 1px)",
              backgroundSize: "18px 18px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
            }
            : {
              backgroundColor: "#ffffff",
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.15) 0.6px, transparent 1px)",
              backgroundSize: "18px 18px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
            }
        }></div>

      <div className="flex justify-center items-start w-[90vw] h-fit  p-2 bg-white dark:bg-black z-10"
        style={getStripedBackground(theme)}>
        <div
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px)",
          }} className="flex flex-col  justify-center items-cente gap-16 p-4 pb-10 w-full min-h-[60vh] bg-white dark:bg-black z-10">
          <div className="flex justify-between items-center gap-4 w-full  ">
            <div className="flex justify-center items-center gap-4">
              <a className="font text-5xl ">My Work Experience</a>

            </div>
            <div className="flex justify-center items-center text-sm md:text-lg gap-4">
              <a href="/work" className="min-w-[60px]">View All</a>
              <MoveRight />
            </div>
          </div>
          <div className="flex flex-col justify-start items-between gap-12 px-4"
            onMouseLeave={() => { setHoveredIndex(null) }}>
            {experienceContent.map((experience, index) => (

              <div className="relative w-full p-4"
                onMouseEnter={() => { setHoveredIndex(index) }}>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="hover"
                    className="absolute inset-0 bg-neutral-950 rounded-md w-full border border-dashed border-neutral-800 cursor-pointer z-10"
                  ></motion.div>
                )}
                <ExperienceCard
                  key={experience.title}
                  experience={experience}
                />
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}


type StackItem = {
  logoLink: string,
  name: string
}

type experienceContentType = {
  duration: string,
  title: string,
  organization: string,
  description: string,
  stackList: StackItem[]

}

const experienceContent: experienceContentType[] = [
  {
    duration: "August 2025 - January 2026",
    title: "Frontend Development Intern",
    organization: "Trvalrone Pvt Ltd.",
    description: "Building scalable web applications with React, TypeScript, and Node. js. Developed and maintained client-facing features.",
    stackList: [
      {
        logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
        name: "Next.js"
      },
      {
        logoLink: "https://thesvg.org/icons/typescript/default.svg",
        name: "Typescript"
      },
      {
        logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
        name: "Tailwind CSS"
      }, {
        logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
        name: "Node.js"
      }
    ]
  },
  {
    duration: "January 2025 - present",
    title: "Web Development freelancer",
    organization: "Upwork/Fiverr",
    description: "Developed and maintained client-facing features. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    stackList: [
      {
        logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
        name: "Next.js"
      },
      {
        logoLink: "https://thesvg.org/icons/typescript/default.svg",
        name: "Typescript"
      },
      {
        logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
        name: "Tailwind CSS"
      }, {
        logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
        name: "Node.js"
      },
      {
        logoLink: "https://thesvg.org/icons/django/default.svg",
        name: "Django Rest Framewrok"
      }
    ]
  },
  {
    duration: "September 2025 - present",
    title: "Open Source contributer",
    organization: "Rocket.Chat / Accord Project",
    description: "Worked on UI components and internal tools. Deploying features and testing them for performance and scalability.  ",
    stackList: [
      {
        logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
        name: "Next.js"
      },
      {
        logoLink: "https://thesvg.org/icons/typescript/default.svg",
        name: "Typescript"
      },
      {
        logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
        name: "Node.js"
      },
      {
        logoLink: "https://thesvg.org/icons/python/default.svg",
        name: "Python"
      }
    ]
  }
]

const ExperienceCard = ({ experience }: { experience: experienceContentType }) => {

  return (
    <div className="flex flex-col md:flex-row  gap-4 md:gap-0 justify-between item-between md:items-center w-full  ">
      <div className="flex flex-col justify-center items-start gap-2 z-50">
        <a className="text-sm">{experience.duration} </a>
        <a className="text-2xl"> {experience.title}</a>
        <a className="text-sm">{experience.organization}</a>
      </div>
      <div className="flex flex-col justify-between items-start h-full gap-4 max-w-[500px] text-sm md:text-sm z-50">
        <a>{experience.description}</a>
        <div className="flex flex-wrap gap-2">
          {experience.stackList.map((item, idx) => (
            <StackButton key={item.name} logoLink={item.logoLink} name={item.name} size="small" />
          ))}
        </div>
      </div>

    </div>
  )
}


