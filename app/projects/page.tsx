import { MoveUpRight } from "lucide-react"
import { ProjectCard } from "../sections/project-section"








export default function page() {


    const projects = [
        {
            name: "LetterBox",
            lable: "Social Media",
            link: "www.google.com",
            backgroundColor: "oklch(40.8% 0.123 38.172 / 0.1)",
            imageSrc: "/projectsAssets/letter-box.png"

        },
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "https://product1-nu.vercel.app",
            backgroundColor: "oklch(14.5% 0 none/0.1)",
            imageSrc: "/projectsAssets/dotgrid.png"

        },
        {
            name: "Landing Page",
            lable: "Single Page Website",
            link: "https://digital-heroes-internship.vercel.app",
            backgroundColor: "oklch(26.6% 0.065 152.934 / 0.1)",
            imageSrc: "/projectsAssets/landing-page.png"

        },
        {
            name: "Blognest",
            lable: "Social Media",
            link: "https://blognest-ui-2.vercel.app",
            backgroundColor: "oklch(26.8% 0.007 34.298 / 0.1)",
            imageSrc: "/projectsAssets/blognest.png"

        },
        {
            name: "trvalr",
            lable: "Online Travel Agency",
            link: "https://trvalr.com",
            backgroundColor: "oklch(20.8% 0.042 265.755/0.1)",
            imageSrc: "/projectsAssets/trvalr.png"

        }]


    return (
        <div className="relative flex justify-center items-center w-screen bg-background text-foreground font-geist">
            <div className="flex flex-col justify-start items-center gap-12 max-w-2xl px-8 md:px-0 w-full my-25">
                <div className="text-2xl w-full">Projects:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12  w-full">

                    {projects.map((project, idx) => (
                        <ProjectCard unreleased={idx == 0 ? true : false} imageSrc={project.imageSrc} backgroundColor={project.backgroundColor} key={idx} name={project.name} lable={project.lable} link={project.link} />
                    ))}

                </div>
            </div>
        </div>
    )
}

type ProjectCardType = {
    name: string,
    lable: string,
    link: string
}

// const ProjectCard = (props: ProjectCardType) => (
//     <div className="card flex flex-col justify-between items-center gap-4">

//         <div className="image-container flex justify-center items-end px-6 pt-6  w-[290px] h-[180px] bg-neutral-400 rounded-xl overflow-hidden">
//             <div className="w-full h-full bg-neutral-700 rounded-t-lg "></div>
//         </div>

//         <div className="content-container flex justify-between items-center max-w-[290px] w-full">
//             <div className="title-container flex flex-col justify-start items-start w-full gap-2">
//                 <a className="text-sm font-semibold">{props.name}</a>
//                 <a className="text-sm">{props.lable}</a>
//             </div>
//             <a href={props.link}>
//                 <MoveUpRight size={16} strokeWidth={1} />
//             </a>
//         </div>

//     </div>
// )