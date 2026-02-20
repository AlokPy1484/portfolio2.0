import Image from "next/image";
import showcase from "../../assets/Showcase1.png"
import ContactCard from "@/app/components/ContactCard";



export default function ContactSection(){

    return(
        <section className="flex justify-center w-full mt-30 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-between gap-8 w-full max-w-7xl">
                <div className="flex flex-col justify-between gap-4 items-start max-w-2xl p-4">
                    <div className="flex flex-col justify-center items-start w-full gap-4">
                    <h1 className="flex justify-start w-full text-[42px] md:text-5xl">Let's grow together</h1>
                    <span className="flex justify-start w-full text-sm md:text-md text-zinc-700 dark:text-zinc-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quisquam numquam sequi. Excepturi aperiam commodi laudantium et officia quos quasi!
                    </span>
                    </div>
                    <div className="relative mt-10">
                    <Image src={showcase} alt="conatact image" className=" md:max-w-[750px] rounded-2xl "/>
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