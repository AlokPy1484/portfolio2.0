"use client"
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Languages, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";



export default function NavBar(){
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true),[])

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        console.log(theme)
    }


    const currTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit"
    }).format(new Date())

    const openResume = () => {
        window.open('/Resume.pdf', '_blank')
    }

    return(
        <section
        style={{
  backgroundImage:
    theme === "dark" ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)" : 
    "repeating-linear-gradient(135deg, rgba(0,0,0,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)"
}}
 className="fixed top-0 flex justify-center items-center w-screen z-50 bg-white dark:bg-transparent backdrop-blur-xs border border-b-zinc-100 dark:border-b-zinc-800 dark:shadow-zinc-800 ">
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
                <a href="/Resume.pdf" target="_blank" onClick={openResume} className="hover:cursor-pointer">Resume</a>
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
                <Button 
                 style={{
                        backgroundImage: theme == "dark" ? "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0.5px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 6px)" : "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)" ,}}        

                    className="bg-black dark:bg-white  hover:cursor-pointer rounded-none text-white dark:text-black px-4">
                        Book a Slot
                </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>coming soon</span>
                </TooltipContent>
                </Tooltip>
                
                                <Button         
                    style={{
                        backgroundImage: theme == "dark" ? "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0.5px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 6px)" : "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)" ,}}        
                    className="bg-black dark:bg-white  hover:cursor-pointer rounded-none text-white dark:text-black px-4">
                        Contact Me
                </Button>
                </div>
                <Tooltip>
                <TooltipTrigger asChild>
                <Button style={{
                        backgroundImage: theme == "dark" ? "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0.5px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 6px)" : "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)" ,}}        
                        className="rounded-none"><Languages/></Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>coming soon</span>
                </TooltipContent>
                </Tooltip>
                 <Tooltip>
                <TooltipTrigger asChild>
                <Button 
                style={{
                        backgroundImage: theme == "dark" ? "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0.5px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 6px)" : "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)" ,}}        
                className="hover:cursor-pointer rounded-none h-full py-[10px]">
                   { theme === "dark" ? <Sun/> : <Moon/>}
                    </Button>
                    </TooltipTrigger>
                <TooltipContent>
                    <span>coming soon</span>
                </TooltipContent>
                </Tooltip>
            </div>
            </div>
        </section>
    )
}