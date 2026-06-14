"use client"
import Image from "next/image";
import Hero1 from '../../assets/Hero1.jpg'
import { FlipWords } from "../../../components/ui/flip-words";
import { Button } from "@/components/ui/button";
import DotField from '../../../components/DotField';
import PortfolioButton from "@/app/components/portfolio-button";
import { useTheme } from "next-themes";



export default function HeroSection(){

    const words = ["Developer", "Freelancer", "Designer" ]
    const { theme, resolvedTheme, systemTheme } = useTheme();

    return(

<div style={{ width: '100%', height: '700px', position: 'relative' }}>
  <DotField

/>
<div className="flex justify-center bg-black">

              <DotField
/>
            <div className="absolute top-0 flex flex-col md:flex-row justify-center md:justify-between items-center gap-7 max-w-7xl w-fullpx-12 p-4 mt-40 md:mt-60">
                <div className="flex flex-col gap-2 justify-center items-start w-full">
                    <Image src={Hero1} alt="Profile Picture" width={60} className="rounded-full border border-zinc-500"/>
                    <span className="text-[55px] md:text-8xl text-black dark:text-white">Hello! I'm Alok </span>
                    <div className="flex justify-start items-end text-5xl md:text-8xl text-black dark:text-white">
                        <span>a</span> 
                        <div   style={{
                        backgroundImage: theme == "dark" ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0.5px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 6px)" : "repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0.5px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 6px)",}}
                        className="flex items-center justify-between bg-white dark:bg-black mb-2 mx-4 px-4">
                        <FlipWords
                         words={words} className="text-4xl md:text-6xl  text-black dark:text-white " />
                    </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-3">
                    <div className="text-2xl md:text-5xl text-black dark:text-white">A full-stack engineer shipping quality products</div>
                    <span className="md:text-3xl text-zinc-500">Passionate developer building websites</span>
                    <div className="flex justify-between md:justify-start gap-8 px-8 md:px-0 pt-4 w-full"> 
                        <PortfolioButton varient="outline">
                            <a className="text-xl">See my work </a>    
                        </PortfolioButton>
                        <PortfolioButton varient="outline">
                            <a className="text-xl">Book a meeting </a>    
                        </PortfolioButton>
                    </div>
                </div>
            </div>

        </div>
</div>
    )
}