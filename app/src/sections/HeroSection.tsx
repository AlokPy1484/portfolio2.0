import Image from "next/image";
import Hero1 from '../../assets/Hero1.jpg'
import { FlipWords } from "../../../components/ui/flip-words";
import { Button } from "@/components/ui/button";



export default function HeroSection(){

    const words = ["Developer", "Freelancer", "Designer" ]

    return(
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-7 max-w-7xl p-4 mt-40 md:mt-60">
                <div className="flex flex-col gap-2 justify-center items-start w-full">
                    <Image src={Hero1} alt="Profile Picture" width={60} className="rounded-full border border-zinc-500"/>
                    <span className="text-[55px] md:text-8xl text-black dark:text-white">Hello! I'm Alok </span>
                    <div className="flex justify-start items-center text-5xl md:text-8xl text-black dark:text-white">
                        <span>a</span> <FlipWords words={words} className="text-4xl md:text-6xl mt-2 md:mt-5 text-black mx-4 py-2 bg-zinc-200 dark:bg-zinc-400 rounded-md border border-zinc-400 shadow-lg shadow-zinc-300 dark:shadow-zinc-600" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="text-2xl md:text-5xl text-black dark:text-white">A full-stack engineer shipping quality products</div>
                    <span className="md:text-3xl text-zinc-500">Passionate developer building websites</span>
                    <div className="flex justify-between md:justify-start gap-8 px-8 md:px-0 pt-4 w-full"> 
                        <Button className="bg-black dark:bg-white md:text-2xl shadow-lg shadow-zinc-600 dark:shadow-zinc-500 hover:cursor-pointer">See my work </Button>
                        <Button variant={"outline"} className="bg-white dark:bg-black text-blac dark:text-white md:text-2xl border border-zinc-200 shadow-lg shadow-zinc-300 dark:shadow-zinc-700 hover:cursor-pointer">Book a meeting</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}