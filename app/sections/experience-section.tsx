"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import gsap from "gsap"
import { cn } from "@/lib/utils"



export default function ExperienceSection() {


    const trvalrSVG = () => (

        <div className="size-[20px] p-[4px] bg-blue-200 rounded-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 151 154" fill="none">
                <path d="M19 116C29.4934 116 38 124.507 38 135C38 135.211 37.9951 135.422 37.9883 135.632C37.9864 135.689 37.9838 135.746 37.9814 135.804C37.9745 135.972 37.9654 136.139 37.9541 136.306C37.9508 136.355 37.948 136.403 37.9443 136.452C37.9289 136.657 37.9096 136.86 37.8877 137.062C37.8832 137.104 37.8788 137.145 37.874 137.187C37.8257 137.608 37.7639 138.026 37.6885 138.438C37.6801 138.484 37.6708 138.53 37.6621 138.575C37.6296 138.746 37.5947 138.916 37.5576 139.085C37.5493 139.123 37.5418 139.161 37.5332 139.199C37.4874 139.402 37.438 139.604 37.3857 139.805C37.3799 139.827 37.3731 139.849 37.3672 139.871C37.317 140.061 37.2648 140.249 37.209 140.437C37.2012 140.463 37.1934 140.489 37.1855 140.515C37.0619 140.923 36.9244 141.325 36.7744 141.722C36.7643 141.748 36.7544 141.775 36.7441 141.802C36.5932 142.195 36.4298 142.582 36.2539 142.963C36.2412 142.99 36.2286 143.018 36.2158 143.045C36.0363 143.428 35.8445 143.805 35.6406 144.174C35.6362 144.182 35.6324 144.19 35.6279 144.198C32.3878 150.043 26.1563 154 19 154C8.50659 154 0 145.493 0 135C0 125.883 6.42203 118.266 14.9893 116.425C14.9984 116.423 15.0075 116.421 15.0166 116.419C15.1596 116.388 15.3031 116.359 15.4473 116.332C15.4629 116.329 15.4785 116.326 15.4941 116.323C15.6281 116.298 15.7626 116.275 15.8975 116.253C15.9316 116.247 15.9658 116.242 16 116.236C16.124 116.217 16.2483 116.198 16.373 116.181C16.4137 116.175 16.4544 116.169 16.4951 116.164C16.7954 116.125 17.0979 116.093 17.4023 116.067C17.4297 116.065 17.457 116.062 17.4844 116.06C17.6285 116.048 17.773 116.038 17.918 116.03C17.9388 116.029 17.9596 116.027 17.9805 116.026C18.318 116.009 18.658 116 19 116Z" fill="url(#paint0_linear_319_42)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.54 44.0293H83.6787L92.1484 55.4814L93.0488 56.707L93.0518 56.7031L109.883 79.46C108.584 81.0404 107.519 82.8172 106.69 84.791C105.596 87.3971 105.05 90.175 105.05 93.124V153.818L84.0029 154H62.7715C56.002 154 49.6423 152.731 43.6934 150.193C42.457 149.652 41.2534 149.067 40.0791 148.445C42.5607 144.563 44 139.95 44 135C44 121.193 32.8071 110 19 110C17.2729 110 15.5865 110.174 13.958 110.508C13.7467 108.614 13.6416 106.686 13.6416 104.724V72.0107H0V44.0293H13.6416V0H41.54V44.0293ZM41.54 104.724C41.54 107.673 42.0867 110.451 43.1807 113.057C44.2747 115.594 45.7797 117.823 47.6943 119.743C49.6089 121.663 51.8655 123.207 54.4639 124.373C57.0621 125.47 59.8314 126.019 62.7715 126.019H77.0488V72.0107H41.54V104.724Z" fill="url(#paint1_linear_319_42)" />
                <path d="M151 71.8291H126.281C123.341 71.8291 120.572 72.3784 117.974 73.4756C116.663 74.0292 115.438 74.6871 114.302 75.4502L97.6348 53.0088C100.954 50.6486 104.553 48.7262 108.435 47.2432C114.178 44.98 120.127 43.8477 126.281 43.8477H151V71.8291Z" fill="url(#paint2_linear_319_42)" />
                <defs>
                    <linearGradient id="paint0_linear_319_42" x1="0" y1="77.0371" x2="520.931" y2="77.0371" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#006A97" />
                        <stop offset="1" stop-color="#009AD7" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_319_42" x1="0" y1="77.0371" x2="520.931" y2="77.0371" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#006A97" />
                        <stop offset="1" stop-color="#009AD7" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_319_42" x1="0" y1="77.0371" x2="520.931" y2="77.0371" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#006A97" />
                        <stop offset="1" stop-color="#009AD7" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )


    const upworkSVG = () => (
        <div className="size-[20px] p-[4px] bg-neutral-200 rounded-[4px]">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Upwork</title><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" /></svg>
        </div>
    )

    const githubSVG = () => (
        <div className="size-[20px] p-[3px] bg-neutral-300 rounded-[4px]">

            <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#181717" />
            </svg>
        </div>

    )

    type ExperienceType = {
        title: string,
        timeline: string,
        description: string,
        org: string,
        logo: React.ReactNode
    }

    const realExperiences: ExperienceType[] = [
        {
            title: "Freelancer at ",
            timeline: "FEB 26 - NOW",
            org: "Upwork",
            description: "Working with clients across the globe to build innovative and engaging web applications",
            logo: upworkSVG()
        },
        {

            title: "Frontend engineer at ",
            org: "Trvalr",
            timeline: "SEPT 25 - FEB 26",
            description: "Built the core flight booking interface and checkout flow",
            logo: trvalrSVG()
        },
        {
            title: "Contributer at ",
            timeline: "DEC 25 - MAY 26",
            org: "RocketChat",
            description: "Contributed to several open source repositories like RocketChat, AccordProject, etc",
            logo: githubSVG()
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


    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


    return (
        <div className="hero-container flex flex-col justify-start items-center gap-8  w-full max-w-2xl px-8 md:px-0 mt-12">
            <div className="title-container flex flex-col justify-start items-start gap-2 w-full">
                <h1 className="text-xs">EXPERIENCE</h1>
                <a className="text-">People, teams, and products I’ve had the opportunity to build with.</a>
            </div>
            <div

                onMouseLeave={() => { setHoveredIndex(null) }}
                className={cn("content-container flex flex-col justify-start items-start gap-6 w-full")}>

                {realExperiences.map((experience, idx) => (
                    <ExperienceCard key={idx} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} index={idx} timeline={experience.timeline} title={experience.title} org={experience.org} description={experience.description} logo={experience.logo} />
                ))}
            </div>

            {/* <Model modal={modal} scaleAnimation={scaleAnimation} index={modal.index} array={Modalprojects} /> */}

        </div>
    )
}


const ExperienceCard = (props: { timeline: string, title: string, description: string, index: number, setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>, hoveredIndex: number | null, logo: React.ReactNode, org: string }) => (
    <div
        onMouseEnter={() => { props.setHoveredIndex(props.index); console.log(props.index) }}
        className={cn(props.hoveredIndex != props.index && props.hoveredIndex != null ? "opacity-40" : "opacity-100", "group flex justify-between items-start w-full px-[15px] transition-all duration-300 ease-in-out")}>
        <a className="text-xs w-40 -translate-x-[10px]  group-hover:translate-x-0 transition-transform ease-in-out duration-300">{props.timeline}</a>
        <div
            className={cn("flex flex-col justify-start items-start gap-1 w-full translate-x-[10px] group-hover:translate-x-0 transition-transform ease-in-out duration-300")}>
            <div className="flex justify-start items-center gap-[6px] font-semibold text-sm md:text-[16px] ">
                <a className="">{props.title}</a>
                <span>{props.logo}</span>
                <a className="">{props.org}</a>
            </div>
            <p className="text-[14px]">{props.description}</p>
        </div>
    </div>
)


// export function Model(props) {

//     const container = useRef(null)
//     const cursor = useRef(null)



//     useEffect(() => {
//         const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" })
//         const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" })

//         const moveCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
//         const moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })

//         window.addEventListener("mousemove", (e) => {
//             const { clientX, clientY } = e
//             moveContainerX(clientX)
//             moveContainerY(clientY)

//             moveCursorX(clientX)
//             moveCursorY(clientY)

//         })




//     }, [])


//     return (

//         <div className="flex justify-center items-center">
//             <motion.div
//                 layoutId="modal"
//                 ref={container}
//                 variants={props.scaleAnimation}
//                 initial="initial"
//                 animate={props.modal.active ? "open" : "closed"}
//                 className="model-container cursor-none fixed flex justify-center items-center w-[218px] h-[143px] overflow-hidden pointer-events-none" >
//                 <div className="model-slider fixed flex justify-center items-center w-full h-full transition-all duration-300"
//                     style={{
//                         top: props.index * -100 + "%"
//                     }}>
//                     <div className=" relative flex flex-col justify-start items-center images-container  h-full ">
//                         {props.array.map((project, idx) => (
//                             <div className="flex justify-center items-center p-1 bg-none backdrop-blur-lg border w-[218px] h-[143px]">
//                                 <video key={idx} src="https://lorem.video/720p" autoPlay={true} muted={true} loop={true} className="object-cover w-full h-full" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </motion.div >



//         </div >


//     )

// }