import ListingCard from "@/app/components/ListingCard"
import { Pickaxe } from "lucide-react"
import { ReactElement } from "react"




export default function ExperienceAndSkills(){

    return(
        <section className="flex flex-row justify-center w-full mt-20 md:mt-60">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-cente w-full max-w-7xl">
                <ListingCard heading={"Work experience"} datas={experienceList} varient="normal"/>
                <ListingCard heading={"Skills and Tech Stack"} datas={skillList} varient="linked"/>
            </div>

        </section>
    )
}


const ICON_CLASS = 
       "p-2 bg-zinc-50 border border-zinc-600  dark:bg-zinc-800 rounded-md text-md md:text-xl"


const experienceList = [
    {
        heading: "Frontend Development Trvalr",
        subtext:"August 2025 - January 2026",
        logo:<Pickaxe size={45} className={ICON_CLASS}/>
    },
    {
        heading: "Web Development freelancer",
        subtext:"January 2025 - present",
        logo:<Pickaxe size={45} className={ICON_CLASS} />
    },
    {
        heading: "Open Source Projects contributer",
        subtext:"September 2025 - present",
        logo:<Pickaxe size={45} className={ICON_CLASS} />
}
]

const skillList = [
    {
        heading: "Frontend Design and Development ",
        subtext:"ReactJS, NextJS, Tailwind CSS, ShadCN, Zustand.....",
        logo:<Pickaxe size={45} className={ICON_CLASS} />
    },
        {
        heading: "Backend Systems Development",
        subtext:"NodeJS, Django, DRF, Postgres, Prisma, Supabase....",
        logo:<Pickaxe size={45} className={ICON_CLASS}/>
    },
        {
        heading: "CI/CD and Automation",
        subtext:"Docker, AWS, Netlify, Github Actions, Cypress....",
        logo:<Pickaxe size={45} className={ICON_CLASS} />
    }
]