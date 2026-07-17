"use client"
import Image from "next/image";
import Hero1 from '../../assets/Hero1.jpg'
import { FlipWords } from "../../../components/ui/flip-words";
import { Button } from "@/components/ui/button";
import DotField from '../../../components/DotField';
import PortfolioButton from "@/app/components/portfolio-button";
import { useTheme } from "next-themes";
import { motion, stagger } from "motion/react"



export default function HeroSection() {

    const words = ["Developer", "Freelancer", "Designer"]
    const { theme, resolvedTheme, systemTheme } = useTheme();

    const parentVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            }
        }
    }

    const childVarient = {
        hidden: {
            opacity: 0,
            filter: "blur(10px)",
            y: 10
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
        }
    }

    return (

        <div style={{ width: '100%', height: '700px', position: 'relative' }}>
            <DotField

            />
            <div className="flex justify-center dark:bg-black">

                <div className="absolute top-0 flex flex-col md:flex-row justify-center md:justify-between items-center gap-7 max-w-7xl w-fullpx-12 p-4 mt-40 md:mt-60">
                    <motion.div
                        variants={parentVariant}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{
                            duration: 10
                        }}
                        className="flex flex-col gap-2 justify-center items-start w-full">
                        <motion.div
                            variants={childVarient}
                        >
                            <Image src={Hero1} alt="Profile Picture" width={60} className="rounded-full border border-zinc-500" />
                        </motion.div>
                        <motion.span
                            variants={childVarient}

                            className="text-[55px] md:text-8xl text-black dark:text-white">Hello! I'm Alok </motion.span>
                        <motion.div variants={childVarient} className="flex justify-start items-end text-5xl md:text-8xl text-black dark:text-white">
                            <motion.span

                            >a</motion.span>
                            <div style={{
                                backgroundImage: theme == "dark" ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)" : "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0.5px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 6px)",
                            }}
                                className="flex items-center justify-between bg-white dark:bg-black mb-2 mx-4 px-4">
                                <FlipWords
                                    words={words} className="text-4xl md:text-6xl  text-black dark:text-white " />
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={parentVariant}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{
                            duration: 10
                        }}
                        className="flex flex-col justify-center items-start gap-3">
                        <motion.div variants={childVarient} className="text-2xl md:text-5xl text-black dark:text-white">A full-stack engineer shipping quality products</motion.div>
                        <motion.span variants={childVarient} className="md:text-3xl text-zinc-500">Passionate developer building websites</motion.span>
                        <motion.div variants={childVarient} className="flex justify-between md:justify-start gap-8 px-8 md:px-0 pt-4 w-full">
                            <PortfolioButton varient="outline">
                                <a className="md:text-xl">See my work </a>
                            </PortfolioButton>
                            <PortfolioButton varient="outline">
                                <a className="md:text-xl">Book a meeting </a>
                            </PortfolioButton>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}