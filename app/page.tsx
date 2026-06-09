import Image from "next/image";
import HeroSection from "./src/sections/HeroSection";
import NavBar from "./src/sections/NavBar";
import ExperienceAndSkills from "./src/sections/ExperienceAndSkills";
import ShowcaseSection from "./src/sections/ServiceSection"
import RecentBlogsSection from "./src/sections/RecentBlogsSection";
import PortfolioWork from "./src/sections/PortfolioWork";
import Contributions from "./src/sections/Contributions";
import TestimonialSection from "./src/sections/TestimonialSection";
import ContactSection from "./src/sections/ContactSection";
import Footer from "./src/sections/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black"
          style={{
  backgroundColor: "#000000",
  backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
}}>
      <NavBar/>
      <HeroSection/>
      <ExperienceAndSkills/>
      <ShowcaseSection/>
      <RecentBlogsSection/>
      <PortfolioWork/> 
      <TestimonialSection/>
      {/* <Contributions/> */}
      <ContactSection/>
      <Footer/>
    </div>
  );
}
