"use client"
import { cn } from "@/lib/utils"
import { easeInOut, motion } from "motion/react"
import { useState } from "react"


export default function LifeBar() {

    const [isHovered, setIsHovered] = useState<number | null>(null)

    return (
        <div className="flex flex-col justify-center items-center w-screen h-full mt-12 px-8 md:px-0">
            <div
                onMouseLeave={() => setIsHovered(null)}
                className="flex flex-wrap gap-[2px] md:gap-[2.4px] justify-between items-center w-full max-w-2xl h-4">
                {Years.map((year, i) => (
                    <span
                        onMouseEnter={() => setIsHovered(i)}
                        key={i} className={cn(year.event ? "rounded-full" : "rounded-xs",
                            year.year > 2026 ? "bg-secondary/10" : "bg-secondary/30",
                            "relative size-2 ")}>

                        {isHovered === i &&
                            <motion.span
                                initial={{
                                    y: 8,
                                    opacity: 0.6
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                exit={{
                                    y: 8,
                                    opacity: 0.6
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                                layoutId="tooltip" className=" absolute -top-8 left-1/2 -translate-x-1/2  bg-secondary rounded-sm  text-xs text-primary whitespace-nowrap">
                                <div className="relative w-full h-full p-1 px-2 rounded-sm ">
                                    <motion.span
                                        initial={{
                                            filter: "blur(2px)",
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: easeInOut
                                        }}
                                        className="text-xs z-100 flex  justify-start items-center gap-2">
                                        <span className="">{year.year}</span>
                                        <span className="size-0.5 rounded-full bg-primary"></span>
                                        {year.event ?
                                            <span className="">{year.event}</span>
                                            :
                                            <span>age: {year.year - 2004}</span>
                                        }
                                    </motion.span>
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/3 size-2 bg-secondary rounded-xs rotate-45 "></span>
                                </div>
                            </motion.span>}

                    </span>
                ))}
            </div>


        </div >
    )
}


const Years = [
    { index: 0, year: 2004, event: "A legend was born" },
    { index: 1, year: 2006, event: null },
    { index: 2, year: 2008, event: null },
    { index: 3, year: 2010, event: null },
    { index: 4, year: 2012, event: "Got first Computer" },
    { index: 5, year: 2014, event: null },
    { index: 6, year: 2016, event: null },
    { index: 7, year: 2018, event: null },
    { index: 8, year: 2020, event: null },
    { index: 9, year: 2022, event: null },
    { index: 10, year: 2024, event: null },
    { index: 11, year: 2026, event: null },
    { index: 12, year: 2028, event: null },
    { index: 13, year: 2030, event: null },
    { index: 14, year: 2032, event: null },
    { index: 15, year: 2034, event: null },
    { index: 16, year: 2036, event: null },
    { index: 17, year: 2038, event: null },
    { index: 18, year: 2040, event: null },
    { index: 19, year: 2042, event: null },
    { index: 20, year: 2044, event: null },
    { index: 21, year: 2046, event: null },
    { index: 22, year: 2048, event: null },
    { index: 23, year: 2050, event: null },
    { index: 24, year: 2052, event: null },
    { index: 25, year: 2054, event: null },
    { index: 26, year: 2056, event: null },
    { index: 27, year: 2058, event: null },
    { index: 28, year: 2060, event: null },
    { index: 29, year: 2062, event: null },
    { index: 30, year: 2064, event: null },
    { index: 31, year: 2066, event: null },
    { index: 32, year: 2068, event: null },
    { index: 33, year: 2070, event: null },
    { index: 34, year: 2072, event: null },
    { index: 35, year: 2074, event: null },
    { index: 36, year: 2076, event: null },
    { index: 37, year: 2078, event: null },
    { index: 38, year: 2080, event: null },
    { index: 39, year: 2082, event: null },
    { index: 40, year: 2084, event: null },
    { index: 41, year: 2086, event: null },
    { index: 42, year: 2088, event: null },
    { index: 43, year: 2090, event: null },
    { index: 44, year: 2092, event: null },
    { index: 45, year: 2094, event: null },
    { index: 46, year: 2096, event: null },
    { index: 47, year: 2098, event: null },
    { index: 48, year: 2100, event: null },
    { index: 49, year: 2102, event: null },
    { index: 50, year: 2104, event: null },
    { index: 51, year: 2106, event: null },
    { index: 52, year: 2108, event: null },
    { index: 53, year: 2110, event: null },
    { index: 54, year: 2112, event: null },
    { index: 55, year: 2114, event: null },
    { index: 56, year: 2116, event: null },
    { index: 57, year: 2118, event: null },
    { index: 58, year: 2120, event: null },
    { index: 59, year: 2122, event: null },
    { index: 60, year: 2124, event: null },
    { index: 61, year: 2126, event: null },
    { index: 62, year: 2128, event: "outlived oldest living human" },
];