import { Button } from "@/components/ui/button";
import Image from "next/image";
import Showcase1 from '../assets/Showcase1.png'
import { ArrowLeftRight, ArrowRight, Calendar, Dot } from "lucide-react";




type BlogCardProps = {
    heading: string,
    date: string,
    views: number,
    image: React.ReactNode,
    link: string,
}

export default function BlogCard({heading, date, views, image, link}:BlogCardProps){

    return(

            <div className="flex flex-col justify-start items-start gap-2 p-2 bg-black">
                <h1 className="text-xl font-medium">Dear Indian Students</h1>
                <div className="flex flex-row justify-between gap-8 w-full text-sm">
                    <a>Why most indian students stays average despite wanting extraordinary results.</a>
                    <div className="flex justify-start items-center gap-2">Read More <ArrowRight className="w-6 h-4"/></div>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <Calendar className="w-4 h-4"/> June 6, 2026
                </div>

            </div>
    )
}