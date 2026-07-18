"use client"

import { useTheme } from "next-themes";
import { useEffect } from "react";
import StackButton from "../components/StackButton";





export default function page() {
    const theme = "dark"

    return (

        <div className="flex justify-center items-center w-screen h-screen "
            style={{
                backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
                backgroundImage: theme === "dark" ? "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)" : "radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
            }}
        >
            <div className="flex flex-col justify-start items-center w-4xl px-[20px] bg-black h-screen"
                style={{
                    backgroundImage:
                        theme === "dark" ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)" :
                            "repeating-linear-gradient(135deg, rgba(0,0,0,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)"
                }}>
                <div className="flex flex-col justify-start items-center w-full bg-black h-screen border p-4">
                    <h1 className="flex justify-start w-full text-neutral-600">Places I have worked</h1>

                    <div className="flex flex-col justify-start items-center gap-8 w-full mt-10">

                        {experienceContent.map((experience, idx) => (
                            <div className="flex flex-col md:flex-row  gap-4 md:gap-8 justify-between item-between md:items-center w-full  ">
                                <div className="flex flex-col justify-center items-start gap-2 z-50">
                                    <a className="text-sm">{experience.duration} </a>
                                    <a className="text-2xl"> {experience.title}</a>
                                    <a className="text-sm">{experience.organization}</a>
                                </div>
                                <div className="flex flex-col justify-between items-start h-full gap-4 max-w-[400px] text-sm md:text-sm z-50">
                                    <a>{experience.description}</a>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.stackList.map((item, idx) => (
                                            <StackButton key={item.name} logoLink={item.logoLink} name={item.name} size="small" />
                                        ))}
                                    </div>
                                </div>

                            </div>))}




                    </div>
                </div>
            </div>

        </div>
    )
}






type StackItem = {
    logoLink: string,
    name: string
}

type experienceContentType = {
    duration: string,
    title: string,
    organization: string,
    description: string,
    stackList: StackItem[]

}

const experienceContent: experienceContentType[] = [
    {
        duration: "August 2025 - January 2026",
        title: "Frontend Development Intern",
        organization: "Trvalrone Pvt Ltd.",
        description: "Building scalable web applications with React, TypeScript, and Node. js. Developed and maintained client-facing features.",
        stackList: [
            {
                logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
                name: "Next.js"
            },
            {
                logoLink: "https://thesvg.org/icons/typescript/default.svg",
                name: "Typescript"
            },
            {
                logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
                name: "Tailwind CSS"
            }, {
                logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
                name: "Node.js"
            }
        ]
    },
    {
        duration: "January 2025 - present",
        title: "Web Development freelancer",
        organization: "Upwork/Fiverr",
        description: "Developed and maintained client-facing features. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        stackList: [
            {
                logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
                name: "Next.js"
            },
            {
                logoLink: "https://thesvg.org/icons/typescript/default.svg",
                name: "Typescript"
            },
            {
                logoLink: "https://thesvg.org/icons/tailwind-css/default.svg",
                name: "Tailwind CSS"
            }, {
                logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
                name: "Node.js"
            },
            {
                logoLink: "https://thesvg.org/icons/django/default.svg",
                name: "Django Rest Framewrok"
            }
        ]
    },
    {
        duration: "September 2025 - present",
        title: "Open Source contributer",
        organization: "Rocket.Chat / Accord Project",
        description: "Worked on UI components and internal tools. Deploying features and testing them for performance and scalability.  ",
        stackList: [
            {
                logoLink: "https://thesvg.org/icons/nextdotjs/default.svg",
                name: "Next.js"
            },
            {
                logoLink: "https://thesvg.org/icons/typescript/default.svg",
                name: "Typescript"
            },
            {
                logoLink: "https://thesvg.org/icons/nodedotjs/default.svg",
                name: "Node.js"
            },
            {
                logoLink: "https://thesvg.org/icons/python/default.svg",
                name: "Python"
            }
        ]
    }
]