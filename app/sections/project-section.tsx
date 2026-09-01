import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import placeholer from "../../public/projectsAssets/placeholder.png"




export default function ProjectSection() {

    const projects = [
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

        }
    ]


    return (
        <div className="hero-container flex flex-col justify-start items-start gap-8  w-full max-w-2xl px-8 md:px-0 mt-20 md:mt-12">
            <div className="title-container flex justify-between items-end w-full">
                <h1 className="text-sm font-">PROJECTS</h1>
                <a href="/projects" className="text-xs border-b border-primary/0 hover:border-primary">VIEW ALL</a>
            </div>
            <div className="card-container flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 w-full">



                {projects.map((project, idx) => (


                    <ProjectCard unreleased={false} backgroundColor={project.backgroundColor} imageSrc={project.imageSrc} key={idx} name={project.name} lable={project.lable} link={project.link} />
                ))}




            </div>
        </div>
    )
}

type ProjectCardType = {
    name: string,
    lable: string,
    link: string,
    imageSrc: string,
    backgroundColor: string,
    unreleased: boolean
}


export function ProjectCard(props: ProjectCardType) {

    return (
        <div className="group  card flex flex-col justify-between items-center gap-4">

            <a href={props.link} className="relative image-container flex justify-center items-end px-6 pt-6  rounded-xl overflow-hidden"
                style={{ backgroundColor: props.backgroundColor }}>

                {props.unreleased && (
                    <span className="absolute inset-0 flex justify-center items-center w-full h-full bg-none backdrop-blur-xs opacity-0 group-hover:opacity-100 z-100 transition-all duration-300 ease-in-out">
                        <a>Coming Soon...</a>
                    </span>
                )}
                <div className="flex justify-center items-center w-full h-full bg-neutral-700 rounded-t-lg group-hover:scale-110 transition-all ease-in-out duration-300">

                    <Image src={props.imageSrc} alt="Logo" width={250} height={160} className="object-cover w-full h-full rounded-t-lg " />

                </div>
            </a>

            <div className="content-container flex justify-between items-center max-w-[290px] w-full">
                <div className="title-container flex flex-col justify-start items-start w-full gap-2">
                    <a className="text-sm font-semibold">{props.name}</a>
                    <a className="text-sm">{props.lable}</a>
                </div>
                <a href={props.link}>
                    <MoveUpRight size={16} strokeWidth={1} />
                </a>
            </div>

        </div>
    )
}