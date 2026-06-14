import PortfolioCard from "@/app/components/PortfolioCard";
import Showcase1 from '../../assets/Showcase1.png'
import Showcase2 from '../../assets/Showcase2.png'
import Showcase3 from '../../assets/Showcase3.png'
import Showcase4 from '../../assets/Showcase4.png'
import ProjectCard from "@/app/components/project-cards";

export default function PortfolioWork(){

    return(
          <div className="flex justify-center items-center w-screen h-full"
        style={{
  backgroundColor: "#000000",
  backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
}}>


    <div className="flex justify-center items-center md:w-[90vw] h-full my-20 p-2 bg-black border border-neutral-900"
style={{
  backgroundImage:
    "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)",
}}>

    <div className="flex flex-col md:flex-row  justify-between md:items-start items-center gap-8 p-4 w-full h-full  bg-black border border-neutral-900"
    style={{
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px)",
}}>

    <div className="flex flex-col text-4xl md:text-5xl gap-8">Selected Works


<div className="flex flex-col md:flex-row flex-wrap md:gap-16 w-full h-full py-8  justify-center md:items-start items-center gap-8">

     <ProjectCard />

      <ProjectCard />
            <ProjectCard />
                  <ProjectCard />
      </div>
      </div>
</div>

    </div>

        </div>
    )
}