import ListingCard from "@/app/components/ListingCard"
import { Pickaxe } from "lucide-react"
import { ReactElement } from "react"




export default function ExperienceAndSkills(){

    return(
        <section className="relative flex flex-row justify-center w-full h-full">
            <div className="absolute inset-0 w-full h-full"
                            style={{
  backgroundColor: "#000000",
  backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 0.6px, transparent 1px)",
  backgroundSize: "18px 18px",
  maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
}}></div>

                <div className="flex justify-center items-start w-[90vw] h-fit  p-2 bg-black z-10"
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)",
}}>
            <div
            style={{
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px)",
}} className="flex flex-col md:flex-row justify-center md:justify-between items-cente w-full bg-black z-10">
                <ListingCard heading={"Work experience"} datas={experienceList} varient="linked"/>
                <ListingCard heading={"Skills and Tech Stack"} datas={skillList} varient="linked"/>
            </div>
</div>
        </section>
    )
}


const ICON_CLASS = 
       "p-2 bg-black text-md md:text-xl"


const experienceList = [
    {
        heading: "Frontend Development Trvalr",
        subtext:"August 2025 - January 2026",
        logo:<Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)",
}}
        />
    },
    {
        heading: "Web Development freelancer",
        subtext:"January 2025 - present",
        logo:<Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)",
}} />
    },
    {
        heading: "Open Source Projects contributer",
        subtext:"September 2025 - present",
        logo:<Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)",
}} />
}
]

const skillList = [
    {
        heading: "Frontend Design and Development ",
        subtext:"ReactJS, NextJS, Tailwind CSS, ShadCN, Zustand.....",
        logo:<Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)",
}} />
    },
        {
        heading: "Backend Systems Development",
        subtext:"NodeJS, Django, DRF, Postgres, Prisma, Supabase....",
        logo:<Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)",
}}/>
    },
        {
        heading: "CI/CD and Automation",
        subtext:"Docker, AWS, Netlify, Github Actions, Cypress....",
        logo:<Pickaxe size={45} strokeWidth={2} className={ICON_CLASS}
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)",
}}/>
    }
]