import Image from "next/image";
import HeroSection from "./sections/hero-section";
import ExperienceSection from "./sections/experience-section";
import BlogSection from "./sections/blog-section";
import ProjectSection from "./sections/project-section";
import QuoteSection from "./sections/quote-section";
import Navbar from "./sections/navbar";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-start items-center w-screen bg-background text-foreground ">

      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <BlogSection />
      <QuoteSection />
    </div>
  )
}