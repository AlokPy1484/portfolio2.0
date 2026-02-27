import Image from "next/image";
import contact from "../../assets/Contact.png"
import ContactCard from "@/app/components/ContactCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"



export default function ContactSection(){

    return(
        <section className="flex justify-center w-full mt-30 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-between gap-8 w-full max-w-7xl">
                <div className="flex flex-col justify-between gap-4 items-start max-w-2xl p-4">
                    <div className="flex flex-col justify-center items-start w-full gap-4">
                    <h1 className="flex justify-start w-full text-[42px] md:text-5xl">Let's grow together</h1>
                    <span className="flex justify-start w-full text-sm md:text-md text-zinc-700 dark:text-zinc-400">
                        Contact me if you have web development work where I can apply my skills to help build, improve, or scale your project effectively.
                    </span>
                    </div>
                    <div className="relative mt-10">
                    {/* <Image src={showcase} alt="conatact image" className=" md:max-w-[750px] rounded-2xl "/> */}
                    <Carousel>
                        <CarouselContent className="flex justify-center">
                            <CarouselItem><Image src={contact} alt="conatact image" className=" md:max-w-[750px] rounded-2xl "/></CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <div className="hidden dark:block absolute inset-0 md:w-[750px] rounded-2xl bg-black/30"></div>
                    </div>
                </div>
                <div className="p-4">
                    <ContactCard/>
                </div>  
            </div>

        </section>
    )
}