"use client"

import { getStripedBackground } from "@/app/background-style"
import ListingCard from "@/app/components/ListingCard"
import { ArrowBigRight, ChevronRight, MoveRight, Pickaxe } from "lucide-react"
import { useTheme } from "next-themes"
import { ReactElement, useState } from "react"
import { motion } from "motion/react"




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
              <a className="min-w-[60px]">View All</a>
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
                    className="absolute inset-0 bg-neutral-950 rounded-md w-full z-10"
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


const ICON_CLASS =
  "p-2 bg-black text-md md:text-xl dark:bg-black bg-white dark:text-white text-black"


type experienceContentType = {
  duration: string,
  title: string,
  organization: string,
  description: string
}

const experienceContent: experienceContentType[] = [
  {
    duration: "August 2025 - January 2026",
    title: "Frontend Development Intern",
    organization: "Trvalrone Pvt Ltd.",
    description: "Building scalable web applications with React, TypeScript, and Node. js. Developed and maintained client-facing features."
  },
  {
    duration: "January 2025 - present",
    title: "Web Development freelancer",
    organization: "Upwork/Fiverr",
    description: "Developed and maintained client-facing features. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
  },
  {
    duration: "September 2025 - present",
    title: "Open Source contributer",
    organization: "Rocket.Chat / Accord Project",
    description: "Worked on UI components and internal tools. Deploying features and testing them for performance and scalability.  "
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
      <div className=" max-w-[500px] text-sm md:text-xl z-50">
        <a>{experience.description}</a>
      </div>

    </div>
  )
}


const experienceList = [
  {
    heading: "Frontend Development Trvalr",
    subtext: "August 2025 - January 2026",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}

    />
  },
  {
    heading: "Web Development freelancer",
    subtext: "January 2025 - present",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  },
  {
    heading: "Open Source contributer",
    subtext: "September 2025 - present",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  }
]

const skillList = [
  {
    heading: "Frontend Development ",
    subtext: "ReactJS, NextJS, Tailwind CSS",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  },
  {
    heading: "Backend Systems Development",
    subtext: "NodeJS, Django DRF",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  },
  {
    heading: "CI/CD and Automation",
    subtext: "Docker, AWS, Netlify",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  }
]