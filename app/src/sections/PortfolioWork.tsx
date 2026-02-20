import PortfolioCard from "@/app/components/PortfolioCard";



export default function PortfolioWork(){

    return(
        <section className="flex justify-center items-center w-full mt-30">
            <div className="flex flex-col gap-15 max-w-7xl">
                <h1 className="flex text-5xl justify-center w-full">Selected Works</h1>
                <div className="flex flex-wrap justify-between w-full p-4">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
            </div>
        </section>
    )
}