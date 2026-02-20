import Image from "next/image";
import repo1 from "../assets/repo1.png"



export default function ContributionCard(){

    return(
        <section className="flex flex-col justify-center items-start  max-w-[300px]">
            <div className="m-2 rounded-md bg-zinc-50"><Image src={repo1} alt="repo logo" className="w-[20px] rounded-md"/></div>
            <span className="">RocketChat/EmbeddedChat</span>
            <span className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequatur illo quis ducimus consectetur sed facilis commodi voluptatibus fugit sit dolor doloribus ullam sapiente, totam deserunt amet laborum repudiandae tempora!</span>
        </section>
    )
}