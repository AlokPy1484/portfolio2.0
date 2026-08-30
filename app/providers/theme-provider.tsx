"use client"


import * as React from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { useTheme } from "next-themes"
import { Moon, Sun, Type } from "lucide-react"




export function ThemeToggle() {

    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {


        setTheme(theme == "dark" ? "light" : "dark")
    }

    return (
        <button className="rounded-full p-1.5 bg-primary cursor-pointer" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={14} strokeWidth={1} /> : <Moon size={14} strokeWidth={1} />}
        </button>
    )
}


export default function ThemeProvider({ children }: { children: React.ReactNode }) {



    return (
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemeProvider>
    )
}