import { Button } from "@/components/ui/button";
import Image from "next/image";
import Showcase1 from '../assets/Showcase1.png'
import { Dot } from "lucide-react";




type BlogCardProps = {
    heading: string,
    date: string,
    views: number,
    image: React.ReactNode,
    link: string,
}

export default function BlogCard({heading, date, views, image, link}:BlogCardProps){

    return(
        <section className="flex  justify-between items-start w-full p-2 bg-zinc-50 dark:bg-zinc-800 rounded-md border border-zinc-200/80 dark:border-zinc-700">
            <div className="flex flex-col md:flex-row justify-start items-center gap-4">
                <div className=" md:w-70 overflow-hidden rounded-md ">
                {image}
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h1 className="text-md md:text-xl">{heading}</h1>
                    <span className="flex justify-start w-full gap-1 text-sm md:text-md mt-2">
                        <a>{date}</a>
                        <Dot/>
                        <a>{views} views</a>
                    </span>
                    <Button variant={"ghost"} className="flex justify-end w-full font-bold text-xs md:text-md"><a href={link} target="*">Read More</a></Button>

                </div>
            </div>
        </section>
    )
}