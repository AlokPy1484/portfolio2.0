"use client"

import BlogCard from "@/app/components/BlogCard";
import { Button } from "@/components/ui/button";
import blog1 from "../../assets/blog1.webp"
import blog2 from "../../assets/blog2.jpg"
import Image from "next/image";
import { getStripedBackground } from "@/app/background-style";
import { useTheme } from "next-themes";
import { useState } from "react";
import { AnimatePresence, motion } from 'motion/react'

const Blogs = [{
    heading: "GitHub for Beginners",
    description: " Everything You Need to Know to Start Using Version Control",
    date: "July 6 2025",
    link: "https://portfolio-five-silk-61.vercel.app/pages/blog"
},
{
    heading: "Frontend development deep dive",
    description: "A Deep dive into frontend development and its applications",
    date: "July 6 2025",
    link: "https://alokpydeepdive01.hashnode.dev/understanding-frontend-development-a-deep-dive"
}
]


export default function RecentBlogsSection() {

    const { theme } = useTheme()

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="flex  justify-center items-center w-full h-full mt-30 ">
            <div className="flex justify-center items-center md:w-[90vw] h-full my-4 p-2 "
                style={getStripedBackground(theme)}>

                <div className="flex flex-col  justify-center md:items-start items-center gap-8 p-4 w-full h-full bg-white  dark:bg-black "
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px)",
                    }}>
                    <div className="w-full ">
                        <div className="flex justify-between w-full px-2">
                            <h1 className=" text-4xl md:text-5xl">Recent Blogs</h1>
                            <Button><a href="https://alokpydeepdive01.hashnode.dev" target="*">View all</a></Button>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between items-center gap-8 md:gap-12 p-4 w-full "
                        onMouseLeave={() => { setHoveredIndex(null) }}>
                        {Blogs.map((blog, index) => (
                            <div className="flex relative h-full w-full"
                                onMouseEnter={() => setHoveredIndex(index)}

                                key={index}>

                                <AnimatePresence>
                                    {hoveredIndex == index && (
                                        <motion.div

                                            layoutId="hover"
                                            className="absolute inset-0 bg-neutral-900 rounded-md border border-dashed border-neutral-800 cursor-pointer   z-10"></motion.div>
                                    )}

                                </AnimatePresence>
                                < BlogCard heading={blog.heading} date={blog.date} link={blog.link} description={blog.description} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>)

}