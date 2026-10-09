"use client"
import StackButton from "@/components/ui/stack-button";
import { GitBranchPlus, Globe } from "lucide-react";
import { useScroll, motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";



export default function ProjectsDetailsPage(props: { title: string, liveLink: string, githubLink: string, stacks: { link: string, name: string }[], descriptios: string[] }) {

    const { scrollYProgress } = useScroll({
    })

    const [isTranslated, setIsTranslated] = useState<boolean>(false)


    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        let hasWaitedOnce = false;

        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest >= 0.9) {

                // First time: wait 3 seconds
                if (!hasWaitedOnce && timer === null) {
                    timer = setTimeout(() => {
                        setIsTranslated(true);
                        hasWaitedOnce = true;
                        timer = null;
                    }, 3000);
                }

                // After first successful wait: instant
                else if (hasWaitedOnce) {
                    setIsTranslated(true);
                }

            } else {
                // Cancel the first timer if user leaves before 3 sec
                if (timer !== null) {
                    clearTimeout(timer);
                    timer = null;
                }

                setIsTranslated(false);
            }
        });

        return () => {
            unsubscribe();
            if (timer !== null) {
                clearTimeout(timer);
            }
        };
    }, [scrollYProgress]);


    const Stacks = [
        {
            link: "https://thesvg.org/icons/nextjs/default.svg",
            name: "Next.js"
        },
        {
            link: "https://thesvg.org/icons/django/default.svg",
            name: "Django"
        },
        {
            link: "https://thesvg.org/icons/typescript/default.svg",
            name: "TypeScript"
        },
        {
            link: "https://thesvg.org/icons/motion/default.svg",
            name: "Motion"
        },
        {
            link: "https://thesvg.org/icons/tailwind-css/default.svg",
            name: "Tailwind CSS"
        }
    ]

    return (
        <div className="relative flex flex-col justify-start items-center h-full w-screen bg-background text-foreground ">


            <AnimatePresence>
                {isTranslated &&
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.9
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            y: 60,
                            scale: 0.8
                        }}
                        transition={{
                            duration: 0.3
                        }}
                        className="hidden md:block fixed right-10 bottom-10">
                        <div className="aspect-[4/3] w-[200px] bg-neutral-400 rounded-2xl"></div>
                    </motion.span>}
            </AnimatePresence>

            <div className="flex flex-col justify-start items-center gap-8 max-w-2xl h-screen w-full mt-28">

                <div className=" aspect-video max-h-[700px] w-full rounded-4xl bg-yellow-200"></div>
                <div className="flex flex-col justify-start items-start gap-4 px-4 md:px-2">
                    <div className="flex justify-between items-center w-full">
                        <a className="text-4xl text-foreground">{props.title}</a>
                        <div className="flex justify-end items-center gap-4">
                            <a href={props.liveLink} target="blank" className="cursor-pointer">
                                <Globe size={16} strokeWidth={2} />
                            </a>
                            <a href={props.githubLink} target="blank" className="cursor-pointer" >
                                <GitBranchPlus size={16} strokeWidth={2} />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4 w-full">
                        <a className="text-sm tracking-tight font-semibold uppercase">
                            Technology & Tools:
                        </a>
                        <div className="flex justify-start items-center gap-4 w-full">
                            {props.stacks.map((stack, idx) => (
                                <StackButton logoLink={stack.link} name={stack.name} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start gap-4 w-full">
                        <a className="text-sm tracking-tight font-semibold uppercase">
                            Project description:
                        </a>
                        <ul className="flex flex-col justify-start items-start gap-2 w-full">
                            {props.descriptios.map((_, idx) => (
                                <li key={idx} className="text-sm tracking-tight">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus velit, laborum minima id corrupti aspernatur ipsa iusto ipsum quod dolorem non et cumque doloribus? Voluptas, provident?
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}