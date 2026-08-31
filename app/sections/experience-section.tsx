import { title } from "process"







export default function ExperienceSection() {


    type ExperienceType = {
        title: string,
        timeline: string,
        description: string
    }


    const realExperiences: ExperienceType[] = [
        {
            title: "Freelancer at Upwork",
            timeline: "FEB 26 - NOW",
            description: "Working with clients across the globe to build innovative and engaging web applications"
        },
        {

            title: "Frontend engineer at Trvalr",
            timeline: "SEPT 25 - FEB 26",
            description: "Built the core flight booking interface and checkout flow"
        },
        {
            title: "Contributer at RocketChat",
            timeline: "DEC 25 - MAY 26",
            description: "Contributed to several open source repositories like RocketChat, AccordProject, etc"
        }

    ]

    const experiences: ExperienceType[] = [
        {
            title: "Designer at 24Labs",
            timeline: "2025 - NOW",
            description: "Helped shape brand identity and landing pages, working hand in hand with the team and group."
        },
        {
            title: "Frontend engineer at RocketChat",
            timeline: "2025 - 2024",
            description: "Took the landing page live (v0 → v1), cut load time to under 2s, and work"
        },
        {
            title: "Lead developer at trvalr",
            timeline: "2024 - 2021",
            description: "Revamped landing + web app for better UX and speed, scaled to 8M+ impressions/month."
        }
    ]


    return (
        <div className="hero-container flex flex-col justify-start items-center gap-8  w-full max-w-2xl px-8 md:px-0 mt-12">
            <div className="title-container flex flex-col justify-start items-start gap-2 w-full">
                <h1 className="text-xs">EXPERIENCE</h1>
                <a className="text-">People, teams, and products I’ve had the opportunity to build with.</a>
            </div>
            <div className="content-container flex flex-col justify-start items-start gap-4 w-full">

                {realExperiences.map((experience, idx) => (
                    <ExperienceCard timeline={experience.timeline} title={experience.title} description={experience.description} />
                ))}
            </div>


        </div>
    )
}



const ExperienceCard = (props: { timeline: string, title: string, description: string }) => (
    <div className="group flex justify-between items-start w-full px-[15px] opacity-40 hover:opacity-100 transition-opacity ease-in-out duration-300">
        <a className="text-xs w-40 -translate-x-[10px]  group-hover:translate-x-0 transition-transform ease-in-out duration-300">{props.timeline}</a>
        <div className="flex flex-col justify-start items-start w-full translate-x-[10px] group-hover:translate-x-0 transition-transform ease-in-out duration-300">
            <a className="text- font-semibold ">{props.title}</a>
            <p className="text-">{props.description}</p>
        </div>
    </div>
)