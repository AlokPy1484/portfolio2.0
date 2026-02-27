import PortfolioCard from "@/app/components/PortfolioCard";
import Showcase1 from '../../assets/Showcase1.png'
import Showcase2 from '../../assets/Showcase2.png'
import Showcase3 from '../../assets/Showcase3.png'
import Showcase4 from '../../assets/Showcase4.png'

export default function PortfolioWork(){

    return(
        <section className="flex justify-center items-center w-full mt-30">
            <div className="flex flex-col gap-15 max-w-7xl">
                <h1 className="flex text-5xl justify-center w-full">Selected Works</h1>
                <div className="flex flex-wrap justify-between w-full p-4">
                    <PortfolioCard 
                    title="Trvalr" 
                    subtitle="Online Travel Agency"
                    date="Oct 2025" 
                    about="An AI-powered online travel agency that allows users to book flight tickets, reserve hotels, and generate personalized trip itineraries using artificial intelligence, delivering a seamless, intelligent, and efficient travel planning experience tailored to individual preferences and travel goals."
                    image={Showcase1}/>
                    <PortfolioCard
                    title="Plex Visuals"
                    subtitle="Business Landing Page"
                    date="Sept 2025" 
                    about="A visually engaging landing page designed for a freelance project, showcasing a motion design company’s portfolio with smooth animations, clear storytelling, and a modern layout to highlight creative work, brand identity, and professional capabilities for potential clients."
                    image={Showcase2}/>
                    <PortfolioCard
                    title="Portfolio" 
                    subtitle="Personal Landing page"
                    date="March 2025" 
                    about="A professional portfolio website template designed to showcase proof of work, highlighting projects, case studies, skills, and achievements with a clean layout, modern design, and structured content to build credibility and clearly demonstrate expertise to clients, recruiters, and collaborators."
                    image={Showcase3}/>
                    <PortfolioCard
                    title="Blognest" 
                    subtitle="Social Networking Platform"
                    date="July 2025" 
                    about="A modern social networking platform that enables users to create, share, and interact with blog posts, built using React and Django, with a PostgreSQL database ensuring secure data management, scalability, and reliable performance."
                     image={Showcase4}/>
                </div>
            </div>
        </section>
    )
}