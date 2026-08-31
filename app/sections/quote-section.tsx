




export default function QuoteSection() {


    const githubSVG = () => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="oklch(55.6% 0 none)" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
    )

    const xSVG = () => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="oklch(55.6% 0 none)" d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" /></svg>
    )

    const linkedinSVG = () => (
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="oklch(55.6% 0 none)" /></svg>
    )


    return (
        <div className="hero-container flex flex-col justify-start items-start gap-8  w-full max-w-2xl px-8 md:px-0 mt-20 pt-16 border-t border-neutral-800/80 border-dashed">
            <div className="flex flex-col justify-start items-start w-full">
                <p className="text-lg tracking-wide">"मंज़िल मिलेगी, भटक कर ही सही, गुमराह तो वो हैं, जो घर से निकले ही नहीं।"</p>
                {/* <p className="text-lg tracking-tight">"You will reach your destination, even if you wander along the way; the truly lost are those who never even left their homes."</p> */}
                <div className="flex justify-end w-full text-left ">
                    {/* <p className="text-[8px] text-neutral-500 pt-2 ">TRANSLATE</p> */}
                    <p className="">— Mirza Ghalib</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-full text-neutral-700  py-8 ">
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 text-sm">
                    <p className="">© 2026 Alok Pandey.</p>
                    {/* <a>About</a>
                    <a>Services</a>
                    <a>Contact</a> */}
                </div>
                <div className="flex justify-end items-center gap-4">
                    <div className="size-5">
                        {githubSVG()}
                    </div>
                    <div className="size-5">
                        {xSVG()}
                    </div>
                    <div className="size-5">
                        {linkedinSVG()}
                    </div>
                </div>
            </div>
        </div>
    )
}