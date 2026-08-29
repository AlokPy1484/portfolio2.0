"use client"
import { Palette, Sun, Type } from "lucide-react"
import { useTheme } from "next-themes"






const navitems = [
    {
        lable: "Home",
        href: "",
        h: true
    },
    {
        lable: "Work",
        href: ""
    },
    {
        lable: "Projects",
        href: ""
    }
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


    return (
        <div className="fixed flex justify-center w-full backdrop-blur-sm pt-4 pb-2 px-4 md:px-0">
            <div className="flex justify-between items-center w-full max-w-2xl">
                <div className="flex justify-start items-center gap-4">
                    {navitems.map((item, idx) => (
                        <a key={idx} href={item.href} className="text-sm text-primary-foreground">{item.lable}</a>
                    ))}
                </div>
                <div className="flex justify-end items-center gap-2">
                    <button className="rounded-sm bg-secondary text-xs text-secondary-foreground px-2 py-1">Get in touch</button>
                    <div className="flex gap-1 ">
                        {navbarControls.map((item, idx) => (
                            <button key={idx} className="rounded-full p-1.5 bg-primary" onClick={item.function}>
                                {item.icon}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}