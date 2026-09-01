"use client"

import { Type } from "lucide-react"
import { useEffect, useState } from "react"



export default function FontToggle() {

    const [font, setFont] = useState("geist")

    useEffect(() => {
        const savedFont = localStorage.getItem("font")

        if (savedFont) {
            setFont(savedFont)
            document.documentElement.dataset.font = savedFont
        }
    }, [])


    const toggleFont = () => {
        const newFont = font === "geist" ? "sans" : "geist"

        setFont(newFont)
        document.documentElement.dataset.font = newFont
        localStorage.setItem("font", newFont)
    }


    return (
        <button className="rounded-full p-1.5 bg-primary dark:hover:bg-black hover:bg-white cursor-pointer" onClick={toggleFont}>
            <Type size={14} strokeWidth={1} />
        </button>
    )
}