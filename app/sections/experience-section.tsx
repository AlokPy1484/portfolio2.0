import { title } from "process"







export default function ExperienceSection() {


    const experiences = [
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
                <a className="text-">Throughout my career, I've worked on a lot of projects. Here's a brief overview.</a>
            </div>
            <div className="content-container flex flex-col justify-start items-start gap-4 w-full">

                {experiences.map((experience, idx) => (
                    <ExperienceCard timeline={experience.timeline} title={experience.title} description={experience.description} />
                ))}
            </div>


        </div>
    )
}



const ExperienceCard = (props: { timeline: string, title: string, description: string }) => (
    <div className="flex justify-between items-start w-full">
        <a className="text-xs w-40">{props.timeline}</a>
        <div className="flex flex-col justify-start items-start w-full">
            <a className="text- font-semibold">{props.title}</a>
            <p className="text-">{props.description}</p>
        </div>
    </div>
)