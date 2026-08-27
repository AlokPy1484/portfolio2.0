






export default function ExperienceSection() {


    return (
        <div className="hero-container flex flex-col justify-start items-center gap-8  w-full max-w-2xl mt-12">
            <div className="title-container flex flex-col justify-start items-start gap-2 w-full">
                <h1 className="text-xs">EXPERIENCE</h1>
                <a className="text-">Throughout my career, I've worked on a lot of projects. Here's a brief overview.</a>
            </div>
            <div className="content-container flex flex-col justify-start items-center gap-4 w-full">
                <div className="flex justify-between items-start gap-8">
                    <a className="text-xs w-40">2025 - NOW</a>
                    <div className="flex flex-col justify-start items-start">
                        <a className="text- font-semibold">Designer at 24Labs</a>
                        <p className="text-">Helped shape brand identity and landing pages, working hand in hand with the team and group.</p>
                    </div>
                </div>
                <div className="flex justify-between items-start w-full">
                    <a className="text-xs w-40">2025 - 2024</a>
                    <div className="flex flex-col justify-start items-start">
                        <a className="text- font-semibold">Frontend engineer at RocketChat</a>
                        <p className="text-">Took the landing page live (v0 → v1), cut load time to under 2s, and work</p>
                    </div>
                </div>
                <div className="flex justify-between items-start gap-8">
                    <a className="text-xs w-40">2024 - 2021</a>
                    <div className="flex flex-col justify-start items-start">
                        <a className="text- font-semibold">Lead developer at trvalr</a>
                        <p className="text-">Revamped landing + web app for better UX and speed, scaled to 8M+ impressions/month.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}