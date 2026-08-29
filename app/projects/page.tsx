import { MoveUpRight } from "lucide-react"








export default function page() {


    const projects = [
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "www.google.com"
        },
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "www.google.com"
        },
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "www.google.com"
        },
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "www.google.com"
        },
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "www.google.com"
        },
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "www.google.com"
        }
    ]


    return (
        <div className="relative flex justify-center items-center w-screen bg-background text-foreground font-geist">
            <div className="flex flex-col justify-start items-center gap-12 max-w-2xl px-8 md:px-0 w-full my-25">
                <div className="text-2xl w-full">Projects:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12  w-full">

                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} name={project.name} lable={project.lable} link={project.link} />
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

const ProjectCard = (props: ProjectCardType) => (
    <div className="card flex flex-col justify-between items-center gap-4">

        <div className="image-container flex justify-center items-end px-6 pt-6  w-[290px] h-[180px] bg-neutral-400 rounded-xl overflow-hidden">
            <div className="w-full h-full bg-neutral-700 rounded-t-lg "></div>
        </div>

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