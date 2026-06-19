import { Button } from "@/components/ui/button";
import Image from "next/image";
import Showcase1 from '../assets/Showcase1.png'
import { ArrowLeftRight, ArrowRight, Calendar, Dot } from "lucide-react";




type BlogCardProps = {
    heading: string,
    date: string,
    description: string,
    link: string,
}

export default function BlogCard({ heading, date, description, link }: BlogCardProps) {

    return (

        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
            <div className="flex flex-col justify-start items-start gap-2 p-4 bg-neutral-100/40  dark:bg-neutral-950  rounded-md w-full">
                <h1 className="text-xl font-medium">{heading}</h1>
                <div className="flex flex-row justify-between gap-8 w-full text-sm">
                    <a>{description}</a>
                </div>
                <div className="flex justify-between gap-8 w-full items-center gap-2">
                    <div className="flex justify-start items-center gap-4"><Calendar className="w-4 h-4" /> {date}</div>
                    <div className="flex justify-start items-center gap-2">Read More <ArrowRight className="w-6 h-4" /></div>
                </div>
            </div>
        </a>
    )
}