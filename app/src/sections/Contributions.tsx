import ContributionCard from "@/app/components/ContributionCard";


export default function Contributions(){

    return(
        <section className="flex justify-center w-full">
            <div className="flex flex-col justify-center items-start w-full max-w-7xl">
                <h1 className="flex justify-start text-5xl w-full">OSS Contributions</h1>
            <div className="flex flex-row justify-between gap-4">
                <ContributionCard/>
            </div>
            </div>
        </section>
    )
}