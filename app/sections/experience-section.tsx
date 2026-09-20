"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import gsap from "gsap"






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

    const [modal, setModal] = useState({ active: false, index: 0 })



    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
    }

    const Modalprojects = [
        {
            title: "C2 Montreal",
            src: "c2montreal.png",
            color: "#000000"
        },
        {
            title: "Office Studio",
            src: "officestudio.png",
            color: "#8C8C8C"
        },
        {
            title: "Locomotive",
            src: "locomotive.png",
            color: "#EFE8D3"
        },
        {
            title: "Silencio",
            src: "silencio.png",
            color: "#706D63"
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
                    <ExperienceCard key={idx} index={idx} setModal={setModal} timeline={experience.timeline} title={experience.title} description={experience.description} />
                ))}
            </div>




            <Model modal={modal} scaleAnimation={scaleAnimation} index={modal.index} array={Modalprojects} />

        </div>
    )
}



const ExperienceCard = (props: { timeline: string, title: string, description: string, setModal: any, index: number }) => (
    <div className="group flex justify-between items-start w-full px-[15px] opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-300"
        onMouseEnter={() => props.setModal({ active: true, index: props.index })}
        onMouseLeave={() => props.setModal({ active: false, index: props.index })}>
        <a className="text-xs w-40 -translate-x-[10px]  group-hover:translate-x-0 transition-transform ease-in-out duration-300">{props.timeline}</a>
        <div className="flex flex-col justify-start items-start w-full translate-x-[10px] group-hover:translate-x-0 transition-transform ease-in-out duration-300">
            <a className="text- font-semibold ">{props.title}</a>
            <p className="text-">{props.description}</p>
        </div>
    </div>
)


export function Model(props) {

    const container = useRef(null)
    const cursor = useRef(null)



    useEffect(() => {
        const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" })
        const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" })

        const moveCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        const moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e
            moveContainerX(clientX)
            moveContainerY(clientY)

            moveCursorX(clientX)
            moveCursorY(clientY)

        })




    }, [])


    return (

        <div className="flex justify-center items-center">
            <motion.div
                layoutId="modal"
                ref={container}
                variants={props.scaleAnimation}
                initial="initial"
                animate={props.modal.active ? "open" : "closed"}
                className="model-container cursor-none fixed flex justify-center items-center w-[218px] h-[143px] overflow-hidden pointer-events-none" >
                <div className="model-slider fixed flex justify-center items-center w-full h-full transition-all duration-300"
                    style={{
                        top: props.index * -100 + "%"
                    }}>
                    <div className=" relative flex flex-col justify-start items-center images-container  h-full ">
                        {props.array.map((project, idx) => (
                            <div className="flex justify-center items-center p-1 bg-none backdrop-blur-lg border w-[218px] h-[143px]">
                                <video key={idx} src="https://lorem.video/720p" autoPlay={true} muted={true} loop={true} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div >



        </div >


    )

}