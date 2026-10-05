"use client"
import { MoveUpRight, Wrench } from "lucide-react";
import Image from "next/image";
import placeholer from "../../public/projectsAssets/placeholder.png"
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import posthog from "posthog-js"
import { portfolioLogger } from "@/lib/posthog-logger"

const isPostHogConfigured = Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST
)

export default function ProjectSection() {

    const projects = [
        {
            name: "dotgrid.io",
            lable: "Design Tool",
            link: "https://product1-nu.vercel.app",
            backgroundColor: "oklch(14.5% 0 none/0.1)",
            imageSrc: "/projectsAssets/dotgrid.png",
            optimizedSrc: "https://res.cloudinary.com/dvclqzpkz/image/upload/q_auto/v1790660585/dotgrid_cfabyj.png",
            placeholder: "/landingPagePlaceholder.webp"
        },
        {
            name: "Landing Page",
            lable: "Single Page Website",
            link: "https://digital-heroes-internship.vercel.app",
            backgroundColor: "oklch(26.6% 0.065 152.934 / 0.1)",
            imageSrc: "/projectsAssets/landing-page.png",
            optimizedSrc: "https://res.cloudinary.com/dvclqzpkz/image/upload/q_auto/v1790660586/landing-page_maaqwc.png",
            placeholder: "/landingPagePlaceholder.webp"


        }
    ]


    // const getPlaceholderSrc = (url: string, width = 20) => {
    //     return url.replace(
    //         "/image/upload/",
    //         `/image/upload/w_${width},q_10,e_blur:100,f_auto/`
    //     );
    // }


    return (
        <div className="hero-container flex flex-col justify-start items-start gap-8  w-screen max-w-2xl px-8 md:px-0 mt-20 md:mt-12 ">
            <div className="title-container flex justify-between items-end w-full">
                <h1 className="text-sm font-">PROJECTS</h1>
                <a href="/projects" className="text-xs border-b border-primary/0 hover:border-primary">VIEW ALL</a>
            </div>
            <div className="card-container flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 w-full">

                {projects.map((project, idx) => (
                    <ProjectCard key={project.name} unreleased={false} backgroundColor={project.backgroundColor} imageSrc={project.optimizedSrc} placeholder={project.placeholder} name={project.name} lable={project.lable} link={project.link} />
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
    unreleased: boolean,
    placeholder: string
}

export function ProjectCard(props: ProjectCardType) {

    const [isHovered, setIsHoverd] = useState<boolean>(false)


    const getPlaceholderSrc = (url: string, width = 20) => {
        return url.replace(
            "/image/upload/",
            `/image/upload/`
        );
    }


    const handleProjectOpen = () => {
        if (!props.unreleased && isPostHogConfigured) {
            posthog.capture("project_opened", {
                project_name: props.name,
                project_category: props.lable,
            })
            portfolioLogger.projectOpened(props.lable)
        }
    }

    return (
        <div
            onMouseEnter={() => setIsHoverd(true)}
            onMouseLeave={() => setIsHoverd(false)}
            className="relative group w-full h-full flex flex-col justify-between items-center gap-6">
            <div
                className="w-full aspect-[300/170] p-6 pb-0 rounded-xl overflow-hidden"
                style={{ backgroundColor: props.backgroundColor }}
            >
                <div className="relative w-full h-full overflow-hidden rounded-t-lg transition-transform duration-300 group-hover:scale-110">
                    <AnimatePresence>
                        {(props.unreleased && isHovered) &&
                            <motion.span
                                key="unreleased-overlay"
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                                className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 rounded-t-lg backdrop-blur-xs" >
                                <motion.div
                                    initial={{
                                        y: 8,
                                        scale: 0.8
                                    }}
                                    animate={{
                                        y: 0,
                                        scale: 1
                                    }}
                                    exit={{
                                        y: 8,
                                        scale: 0.8
                                    }}
                                    transition={{

                                        duration: 0.3
                                    }}
                                    className="flex justify-center items-center gap-4">
                                    <Wrench fill="white" strokeWidth={1} size={16} />
                                    <a className="font-bold text-lg">Under Development</a>
                                </motion.div>
                            </motion.span>}
                    </AnimatePresence>

                    <Image
                        src={props.imageSrc}
                        alt={props.name}
                        placeholder="blur"
                        loading="eager"
                        // blurDataURL="/Hero1.jpg"
                        blurDataURL={props.placeholder}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="content-container flex justify-between items-center w-full px-4">
                <div className="title-container flex flex-col justify-start items-start w-full gap-2">
                    <a className="text-sm tracking-widest  ">{props.name}</a>
                    <a className="text-xs text-secondary/50 ">{props.lable}</a>
                </div>
                <a href={props.unreleased ? "" : props.link} onClick={handleProjectOpen} className={props.unreleased ? "cursor-not-allowed hover:opacity-50" : "cursor-pointer opacity-100"}>
                    <MoveUpRight size={16} strokeWidth={1} />
                </a>
            </div>

        </div>
    )
}