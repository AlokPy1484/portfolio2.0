





export default function BlogSection() {


    return (
        <div className="hero-container flex flex-col justify-start items-start gap-  w-full max-w-2xl px-8 md:px-0 mt-12">
            <h1 className="text-sm w-full">WRITING</h1>

            <div className="flex justify-start items-start gap-4 w-full border-t border-neutral-800/80 border-dashed py-2">
                <h1 className="text-sm w-40">2026</h1>
                <div className="flex flex-col justify-start items-between gap-2 w-full ">
                    <div className="flex justify-between items-center w-full border-b border-neutral-800 py-1">
                        <a className="text- font-semibold">Drawesome</a>
                        <a className="text-sm">14/11</a>
                    </div>
                    <div className="flex justify-between items-center w-full border- border-neutral-800 py-1">
                        <a className="text- font-semibold">Havemore</a>
                        <a className="text-sm">09/07</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-start items-start gap-4 w-full border-t border-neutral-800 py-2    ">
                <h1 className="text-sm w-40">2025</h1>
                <div className="flex flex-col justify-start items-between gap-2 w-full">
                    <div className="flex justify-between items-center w-full border- border-neutral-800 py-1">
                        <a className="text- font-semibold">Honkish</a>
                        <a className="text-sm">14/11</a>
                    </div>

                </div>
            </div>
        </div>
    )
}