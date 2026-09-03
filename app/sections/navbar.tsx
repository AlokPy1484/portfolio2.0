"use client"
import { Calendar, Mail, Palette, Sun, Type } from "lucide-react"
import { useTheme } from "next-themes"
import FontToggle from "../providers/font-toggle"
import { ThemeToggle } from "../providers/theme-provider"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import MagneticButton from "../providers/MagneticButton"
import { toast } from "@/components/ui/toast"





const navitems = [
    {
        lable: "Home",
        href: "/",
        h: true
    },

]









export default function Navbar() {

    const { theme, setTheme } = useTheme()


    const navbarControls = [
        {
            lable: "Toggle theme",
            icon: <Sun size={14} />,
            function: () => { setTheme(theme == "dark" ? "light" : "dark") }
        },
        {
            lable: "Toggle color",
            icon: <Palette size={14} strokeWidth={1} />,
            function: () => { }
        },
        {
            lable: "Toggle font",
            icon: <Type size={14} strokeWidth={1} />,
            function: () => { }
        }
    ]
    const [isExpanded, setIsExpanded] = useState<boolean>(false)


    //copy email logic

    const [copied, setCopied] = useState<boolean>(false)

    const email = "alokpandey0697@gmail.com"

    const copyEmail = async () => {

        if (!isExpanded) return

        await navigator.clipboard.writeText(email)

        setCopied(true)
        toast.add({
            title: "Email copied successfully",
            type: "success"
        })

        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    useEffect(() => {



        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "c") {
                copyEmail()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isExpanded])


    const [contactMethod, setContactMethod] = useState<string>("Get in touch")

    return (
        <div className="fixed flex justify-center w-full backdrop-blur-sm pt-4 pb-2 px-4 md:px-0 z-9999">
            <div className="flex justify-between items-center w-full max-w-2xl">
                <div className="flex justify-start items-center gap-4">
                    {navitems.map((item, idx) => (
                        <a key={idx} href={item.href} className="text-sm text-primary-foreground hover:text-hover">{item.lable}</a>
                    ))}
                </div>
                <div className="flex justify-end items-center gap-2">
                    <div className="relative flex justify-center items-center">

                        {isExpanded ?
                            <motion.div
                                layoutId="contact"
                                onMouseLeave={() => setIsExpanded(false)}
                                className="absolute flex flex-col justify-start items-center gap-1 p-4 px-4 gap-1 -left-[130px] -top-[12.5px] w-[130px] h-[100px] rounded-sm bg-secondary text-xs text-secondary-foreground  px-2 py-1 hover:bg-black dark:hover:bg-white cursor-pointer">

                                <motion.div
                                    layoutId="contact-lable"
                                    className="flex justify-center items-center  p-1 rounded-sm w-full tracking-wider text-secondary-foreground transition-all duration-300">{contactMethod}</motion.div>
                                <div className="flex justify-between items-center gap-4">
                                    <MagneticButton>
                                        <a
                                            href="mailto:alokpandey0697@gmail.com"
                                            onMouseEnter={() => setContactMethod("Write a mail")}
                                            onMouseLeave={() => setContactMethod("Get in touch")}
                                            className="flex justify-center items-center bg-secondary/70 hover:bg-secondary rounded-lg p-2 group "><Mail size={24} strokeWidth={1} className="text-secondary-foreground/80 scale-100 group-hover:scale-120 transition-all duration-300 ease-in-out group-hover:text-secondary-foreground" /></a>
                                    </MagneticButton>

                                    <MagneticButton>
                                        <a
                                            href="https://cal.com/alokpandey/15min"
                                            target="_blank"
                                            onMouseEnter={() => setContactMethod("Book a call")}
                                            onMouseLeave={() => setContactMethod("Get in touch")}
                                            className="flex justify-center items-center bg-secondary/70 hover:bg-secondary rounded-lg p-2 group"><Calendar size={24} strokeWidth={1} className="text-secondary-foreground/80 scale-100 group-hover:scale-120 transition-all duration-300 ease-in-out group-hover:text-secondary-foreground" /></a>
                                    </MagneticButton>
                                </div>
                                <div className="flex justify-center items-center gap-1  p-1 rounded-sm w-full text-[8px] text-secondary-foreground/70">
                                    <a>* press</a>
                                    <a className="p-[2px] bg-secondary/90 font-black rounded-xs">C</a>
                                    <a> to copy mail</a>
                                </div>

                            </motion.div>
                            :

                            <motion.button
                                layoutId="contact"
                                onMouseEnter={() => setIsExpanded(true)}
                                onClick={() => setIsExpanded(true)}

                                className="absolute -left-[90px] w-[90px] h-[25px] rounded-sm bg-secondary text-xs text-secondary-foreground  px-2 py-1 hover:bg-black dark:hover:bg-white cursor-pointer">
                                <motion.a
                                    initial={{
                                        opacity: 0
                                    }}
                                    animate={{
                                        opacity: 1
                                    }}
                                    layoutId="contact-lable">Get in touch</motion.a>
                            </motion.button>
                        }
                    </div>
                    <div className="flex gap-1 ">
                        {/* {navbarControls.map((item, idx) => (
                            <button key={idx} className="rounded-full p-1.5 bg-primary" onClick={item.function}>
                                {item.icon}
                            </button>
                        ))} */}
                        <FontToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}