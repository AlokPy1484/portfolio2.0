"use client"
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";



export default function NavBar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [currTime, setCurrTime] = useState("")
    useEffect(() => setMounted(true), [])

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        console.log(theme)
    }






    useEffect(() => {
        const currTime = () => new Intl.DateTimeFormat("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date())

        setCurrTime(currTime())

        const interval = setInterval(() => {
            setCurrTime(currTime())
        }, 1000)


        return () => clearInterval(interval)

    }, [])

    return (
        <section className="fixed top-0 flex justify-center items-center w-screen z-50 bg-white dark:bg-zinc-900 border border-b-zinc-100 dark:border-b-zinc-800 shadow-lg shadow-zinc-200 dark:shadow-zinc-800 ">
            <div className="flex justify-between items-center w-7xl p-4">
                <div className="flex justify-center items-center gap-6 text-xl text-black font-medium">
                    <span className="flex h-10 w-10 p-2 items-center justify-center rounded-full font-black bg-black dark:bg-white dark:text-black text-white">
                        AP
                    </span>
                    <div className="hidden md:flex justify-center items-center gap-6 dark:text-white">

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a href="/playground" className="hover:cursor-pointer">Playground</a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>coming soon</span>
                            </TooltipContent>
                        </Tooltip>
                        <a href="https://alokpydeepdive01.hashnode.dev" target="*" className="hover:cursor-pointer">Articles</a>
                        <a href="https://github.com/AlokPy1484" target="*" className="hover:cursor-pointer">Dashboard</a>
                        <a href="/Alok's%20Resume%20New.pdf" target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer">Resume</a>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <div className="flex justify-center items-center gap-6">
                        <div className="flex flex-col justify-center items-start text-sm text-black dark:text-white">
                            <span className="font-bold">Pune,India</span>
                            <span>{currTime}</span>
                        </div>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button className="hidden md:flex  hover:cursor-pointer">Book a Slot</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>coming soon</span>
                            </TooltipContent>
                        </Tooltip>

                        <Button className="hidden md:flex  hover:cursor-pointer">Contact Me</Button>
                    </div>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button><Languages /></Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>coming soon</span>
                        </TooltipContent>
                    </Tooltip>
                    <Button onClick={handleThemeToggle} className="hover:cursor-pointer border-3 border-zinc-400 dark:border-zinc-700">
                        {theme === "dark" ? <Sun /> : <Moon />}
                    </Button>
                </div>
            </div>
        </section>
    )
}