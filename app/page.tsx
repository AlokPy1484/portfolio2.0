"use client"
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
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function Home() {



function ThemeLogger() {
  const { theme, resolvedTheme, systemTheme } = useTheme();

  useEffect(() => {
    console.log('Selected theme:', theme);        // 'light' | 'dark' | 'system'
    console.log('Resolved theme:', resolvedTheme); // actual applied theme
    console.log('System theme:', systemTheme);     // OS preference
  }, [theme, resolvedTheme, systemTheme]);

  return null; // or your component
}


// ThemeLogger()


  const {setTheme, theme, resolvedTheme, systemTheme } = useTheme();

useEffect(() => {
  setTheme("dark")
}, [])

  return (
    <div className="bg-white dark:bg-black"
          style={{
  backgroundColor:   theme === "dark" ? "#000000" : "#ffffff",
  backgroundImage: theme === "dark" ? "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)" : "radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)",
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
