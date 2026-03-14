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
                    title="LogisticsPro" 
                    subtitle="Logistics company site"
                    date="March 2025" 
                    about="A professional landing page template for a logistics company designed to clearly present transportation and supply chain services, highlighting delivery capabilities, service areas, fleet strength, and client success stories. The layout focuses on a clean, modern design with structured sections."
                    image={Showcase3}/>
                    <PortfolioCard
                    title="Foddo" 
                    subtitle="Restaurant landing page"
                    date="July 2025" 
                    about="A professional restaurant landing page designed to showcase the menu, signature dishes, dining experience, ambience, chef highlights, location, and reservation options. The layout features a clean, modern design with visually appealing sections for food galleries, customer reviews, special offers, and contact details to attract customers and create a strong online presence."
                     image={Showcase4}/>
                </div>
            </div>
        </section>
    )
}