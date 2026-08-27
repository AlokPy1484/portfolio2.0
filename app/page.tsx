import Image from "next/image";
import HeroSection from "./sections/hero-section";
import ExperienceSection from "./sections/experience-section";
import BlogSection from "./sections/blog-section";
import ProjectSection from "./sections/project-section";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center w-screen  bg-neutral-900">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <BlogSection />

    </div>
  )
}