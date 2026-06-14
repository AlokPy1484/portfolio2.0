import ListingCard from "@/app/components/ListingCard"
import { Pickaxe } from "lucide-react"
import { useTheme } from "next-themes"
import { ReactElement } from "react"




export default function ExperienceAndSkills() {

  const { theme } = useTheme()

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

      <div className="flex justify-center items-start w-[85vw] h-fit  p-2 bg-white dark:bg-black z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)",
        }}>
        <div
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px)",
          }} className="flex flex-col md:flex-row justify-center md:justify-between items-cente w-full bg-white dark:bg-black z-10">
          <ListingCard heading={"Work experience"} datas={experienceList} varient="linked" />
          <ListingCard heading={"Skills and Tech Stack"} datas={skillList} varient="linked" />
        </div>
      </div>
    </section>
  )
}


const ICON_CLASS =
  "p-2 bg-black text-md md:text-xl dark:bg-black bg-white dark:text-white text-black"


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
    subtext: "ReactJS, NextJS, Tailwind CSS, ShadCN, Zustand.....",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  },
  {
    heading: "Backend Systems Development",
    subtext: "NodeJS, Django, DRF, Postgres, Prisma, Supabase....",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  },
  {
    heading: "CI/CD and Automation",
    subtext: "Docker, AWS, Netlify, Github Actions, Cypress....",
    logo: <Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
    />
  }
]