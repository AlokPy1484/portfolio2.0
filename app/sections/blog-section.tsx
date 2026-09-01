





export default function BlogSection() {


    return (
        <div className="group hero-container flex flex-col justify-start items-start gap-  w-full max-w-2xl px-8 md:px-0 mt-12 ">
            <h1 className="text-sm w-full mb-4">WRITING</h1>

            <div className="flex justify-start items-start gap-4 w-full border-t border-neutral-800/80 border-dashed py-2">
                <h1 className="text-sm w-40">2026</h1>
                <div className="flex flex-col justify-start items-between gap-2 w-full ">
                    {/* <div className="flex justify-between items-center w-full border-b border-neutral-800 py-1 opacity-100 cursor-pointer transitiol-opacity duration-300 ease-in-out">
                        <a className="text- font-semibold">Deep Dive: Frontend</a>
                        <a className="text-sm">27/02</a>
                    </div> */}
                    <div className="flex justify-between items-center w-full border- border-neutral-800 py-1">
                        <a href="https://alokpydeepdive01.hashnode.dev/understanding-frontend-development-a-deep-dive" className="text- font-medium cursor-pointer">Deep Dive: Frontend</a>
                        <a className="text-sm">27/02</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-start items-start gap-4 w-full border-t border-neutral-800/80 border-dashed  py-2    ">
                <h1 className="text-sm w-40">2025</h1>
                <div className="flex flex-col justify-start items-between gap-2 w-full">
                    <div className="flex justify-between items-center w-full border- border-neutral-800 py-1">
                        <a href="https://portfolio-five-silk-61.vercel.app/pages/blog" className="font-medium cursor-pointer">Github's Basic</a>
                        <a className="text-sm">14/11</a>
                    </div>

                </div>
            </div>
        </div>
    )
}