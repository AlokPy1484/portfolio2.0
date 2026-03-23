"use client"
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronUp, Laptop, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Service1 from '../../assets/Service1.png'
import Service2 from '../../assets/Service2.png'
import Service3 from '../../assets/Service3.png'
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay"
import type { EmblaCarouselType } from 'embla-carousel'


type ShowcaseSectionProps = {
    heading: string,
    subtext: string,
    image: React.ReactNode
}

export default function ServiceSection(){

const ServieList = [
    {   
        id: "landing",
        heading: "Landing Page development",
        subtext: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt porro ullam nisi, itaque velit at perferendis vitae neque. Eum, officia.",
        image: {Service1}
    },
    {   
        id: "fullStack",
        heading: "Full-Stack Web Development with Modern Frameworks",
        subtext: "I build modern, professional full-stack web applications with secure authentication, robust databases, scalable architecture, and clean, user-focused interfaces.",
        image: {Service1}
    },
    {
        id: "prototype",
        heading: "Proof-of-Concept to MVP Web Application Development",
        subtext: "I create MVP prototypes that validate ideas, showcase core functionality, and help founders communicate vision effectively to investors and partners.",
        image: {Service1}
    },
    {
        id: "refactor",
        heading: "Landing Page development",
        subtext: "I make landing page for your business to make your bussiness look professional and improve visibility of your busisness.",
        image: {Service1}
    }
]




    const [api, setApi] = React.useState<EmblaCarouselType | null>(null)
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const activeService = ServieList[currentSlide]

    React.useEffect(() => {
        if(!api){
            return
        }

        setCurrentSlide(api.selectedScrollSnap() + 1)

        api.on("select", ()=> {
             setCurrentSlide(api.selectedScrollSnap() + 1)
        })
    },[api])

    return(
        <section className="flex justify-center w-full pt-30 p-4">
    <Carousel   opts={{align: "start",
                        loop: true}} 
                        plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
                    setApi={(api) => setApi(api ?? null)}
                    className="flex justify-center w-full">
            <div className="flex flex-col gap-12 w-full max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center w-full mb-4">
                <h1 className="text-[44px] md:text-5xl w-full">I can help you with</h1>
                <span className="hidden md:flex justify-end w-full   gap-4  rounded-xl">
                    {/* <Button variant={"outline"} className="rounded-full border border-zinc-400 bg-zinc-200"><ChevronUp className="transform rotate-270"/></Button>
                    <Button variant={"outline"}  className="rounded-full border border-zinc-400 bg-zinc-200"><ChevronUp className="transform rotate-90"/></Button> */}
                    <CarouselPrevious/>
                    <CarouselNext/>

                </span>
            </div>
            <div key={activeService.id} className="flex flex-col md:flex-row justify-between items-center w-full animate-in fade-in-10 duration-1000">
                <div className="flex justify-center items-center gap-6">
                <Laptop  size={40} className="flex p-2 rounded-full bg-zinc-200 dark:bg-zinc-800"/>
                <span className="text-2xl md:text-3xl">{activeService.heading}</span>
                </div>
                <div className="flex gap-18 max-w-2xl">
                    <span className="max-w-[500px] text-zinc-400 ">
                        {activeService.subtext}
                    </span>
                    <MoveUpRight size={30} className="hidden md:block  p-2 rounded-full bg-zinc-200 dark:bg-zinc-800"/>
                </div>
            </div>
            <div>
  <CarouselContent className="" >
    <CarouselItem className="basis-1/1 md:basis-1/2">
        <Image src={Service1} alt='img1'  className="md:w-[40vw] rounded-2xl"/>
    </CarouselItem>
    <CarouselItem className="basis-1/1 md:basis-1/2">
        <Image src={Service2} alt='img1' className="md:w-[40vw] rounded-2xl"/>
    </CarouselItem>
    <CarouselItem className="basis-1/1 md:basis-1/2">
        <Image src={Service3} alt='img1' className="md:w-[40vw] rounded-2xl"/>
    </CarouselItem>

  </CarouselContent>
            </div>
            </div>
</Carousel>
        </section>
    )
}