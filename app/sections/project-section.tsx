import { MoveUpRight } from "lucide-react";





export default function ProjectSection() {


    return (
        <div className="hero-container flex flex-col justify-start items-start gap-8  w-full max-w-2xl mt-12">
            <div className="title-container flex justify-between items-end w-full">
                <h1 className="text-sm font-">PROJECTS</h1>
                <a href="#" className="text-xs font-">VIEW ALL</a>
            </div>
            <div className="card-container flex justify-between items-center gap-4 w-full">

                <div className="card flex flex-col justify-between items-center gap-4">

                    <div className="image-container flex justify-center items-end px-6 pt-6  w-[290px] h-[180px] bg-neutral-400 rounded-xl overflow-hidden">
                        <div className="w-full h-full bg-neutral-700 rounded-t-lg "></div>
                    </div>

                    <div className="content-container flex justify-between items-center w-full">
                        <div className="title-container flex flex-col justify-start items-start w-full gap-2">
                            <a className="text-sm font-semibold">Ping</a>
                            <a className="text-sm">Chat Application</a>
                        </div>
                        <div>
                            <MoveUpRight size={16} strokeWidth={1} />
                        </div>
                    </div>

                </div>

                <div className="card flex flex-col justify-between items-center gap-4">

                    <div className="image-container flex justify-center items-end px-6 pt-6  w-[290px] h-[180px] bg-neutral-400 rounded-xl overflow-hidden">
                        <div className="w-full h-full bg-neutral-700 rounded-t-lg "></div>
                    </div>

                    <div className="content-container flex justify-between items-center w-full">
                        <div className="title-container flex flex-col justify-start items-start w-full gap-2">
                            <a className="text-sm font-semibold">Ping</a>
                            <a className="text-sm">Chat Application</a>
                        </div>
                        <div>
                            <MoveUpRight size={16} strokeWidth={1} />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}